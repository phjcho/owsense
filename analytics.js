/* First-party usage measurement. No names, IPs, full URLs or lineup data. */
(() => {
  const KEY = 'owsense-analytics-session';
  const testing = new URLSearchParams(location.search).get('analytics_test') === '1';
  const optedOut = () => localStorage.getItem('owsense-analytics-optout') === '1' || navigator.doNotTrack === '1';
  let state;
  const uid = () => crypto.randomUUID();
  function session() {
    let visitor = localStorage.getItem('owsense-analytics-visitor');
    if (!visitor) localStorage.setItem('owsense-analytics-visitor', visitor = uid());
    if (!state) { try { state = JSON.parse(sessionStorage.getItem(KEY)); } catch {} }
    if (!state || Date.now()-state.last > 30*60*1000) state = {id:uid(),last:Date.now(),seen:{},answers:[]};
    state.last=Date.now(); sessionStorage.setItem(KEY, JSON.stringify(state));
    return {visitor,session:state.id};
  }
  function track(event, target='', once=false) {
    try {
      if (optedOut() || !['https:', 'http:'].includes(location.protocol)) return;
      const identity=session(), key=event+':'+target;
      if (once && state.seen[key]) return;
      if (once) { state.seen[key]=true;sessionStorage.setItem(KEY,JSON.stringify(state)); }
      fetch('/api/analytics/events', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({id:uid(),...identity,event,target,test:testing}),keepalive:true}).catch(()=>{});
    } catch {} // Learning remains usable if storage or measurement is blocked.
  }
  window.owAnalytics = {
    route(page) { track('visit','',true);track('page_view',page); },
    questionStart(id) { track('practice_start','',true);track('question_start',id,true); },
    questionComplete(id,total) {
      track('practice_start','',true);track('question_start',id,true);
      track('question_complete',id,true);
      try { session(); if(!state.answers.includes(id))state.answers.push(id);sessionStorage.setItem(KEY,JSON.stringify(state));if(state.answers.length===total)track('practice_complete','',true); } catch {}
    },
    analysis() { track('analysis_use'); }
  };
})();
