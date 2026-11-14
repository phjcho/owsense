#!/usr/bin/env python3
"""Dependency-free structural checks; tactical correctness requires coach review."""
import json
import re
import sys
from pathlib import Path

FIELDS = {'id','cat','chapter','title','scene','context','facts','options','answer','cue','why','wrong'}
CATS = {'인원수','엄폐','스킬','궁극기','구도'}
SCENES = {'count','cover','skill','ult'}

def validate(data):
    errors, seen = [], set()
    if not isinstance(data, list) or not data:
        return ['최상위 값은 비어 있지 않은 문제 배열이어야 합니다.']
    for n, q in enumerate(data, 1):
        label = f'문제 {n}'
        if not isinstance(q, dict):
            errors.append(f'{label}: 객체가 아닙니다.'); continue
        if not FIELDS.issubset(q) or set(q)-FIELDS-{'diagram','difficulty'}:
            errors.append(f'{label}: 누락 필드 {sorted(FIELDS-set(q))}, 지원하지 않는 필드 {sorted(set(q)-FIELDS-{'diagram','difficulty'})}')
        if 'difficulty' in q and q['difficulty'] not in ('기본','응용'):
            errors.append(f'{label}: difficulty는 기본 또는 응용이어야 합니다.')
        if 'diagram' in q:
            d = q['diagram']
            valid = isinstance(d,dict) and set(d)=={'type','allies','enemies'} and d.get('type')=='participation'
            a = d.get('allies') if isinstance(d,dict) else None
            valid = valid and isinstance(a,dict) and set(a)=={'main','side','joining'}
            if valid:
                valid = all(type(v) is int and 0<=v<=5 for v in a.values()) and 1<=sum(a.values())<=5 and type(d['enemies']) is int and 1<=d['enemies']<=5
            if isinstance(d, dict) and d.get('type') == 'situation':
                rows = d.get('rows')
                valid = set(d) == {'type','rows'} and isinstance(rows,list) and 1 <= len(rows) <= 5
                if valid:
                    valid = all(isinstance(r,dict) and set(r)=={'team','label','units'} and r['team'] in ('ally','enemy','mixed','terrain') and isinstance(r['label'],str) and r['label'].strip() and isinstance(r['units'],list) and len(r['units'])<=5 and all(isinstance(u,str) and u.strip() for u in r['units']) for r in rows)
            if not valid:
                errors.append(f'{label}: 지원하지 않거나 잘못된 diagram 형식입니다.')
        identifier = q.get('id')
        if not isinstance(identifier,str) or not re.fullmatch(r'[a-z0-9]+(?:-[a-z0-9]+)*',identifier):
            errors.append(f'{label}: id는 소문자 영문·숫자·하이픈이어야 합니다.')
        elif identifier in seen:
            errors.append(f'{label}: 중복 id {identifier}')
        else:
            seen.add(identifier)
        for k in ('title','context','cue','why','wrong'):
            if not isinstance(q.get(k),str) or not q[k].strip():
                errors.append(f'{label}: {k}는 비어 있지 않은 문자열이어야 합니다.')
        if not isinstance(q.get('cat'),str) or q['cat'] not in CATS:
            errors.append(f'{label}: 지원하지 않는 cat')
        if not isinstance(q.get('scene'),str) or q['scene'] not in SCENES:
            errors.append(f'{label}: 지원하지 않는 scene')
        if type(q.get('chapter')) is not int or not 0 <= q['chapter'] <= 6:
            errors.append(f'{label}: chapter는 정수 0~6이어야 합니다.')
        options = q.get('options')
        valid_options = isinstance(options,list) and len(options)==3 and all(isinstance(x,str) and x.strip() for x in options)
        if not valid_options:
            errors.append(f'{label}: options는 비어 있지 않은 선택지 3개여야 합니다.')
        elif len(set(x.strip() for x in options)) != 3:
            errors.append(f'{label}: 동일한 선택지가 있습니다.')
        if type(q.get('answer')) is not int or not 0 <= q['answer'] <= 2:
            errors.append(f'{label}: answer는 정수 0, 1, 2 중 하나여야 합니다.')
        facts = q.get('facts')
        if not isinstance(facts,list) or not facts or not all(isinstance(x,str) and x.strip() for x in facts):
            errors.append(f'{label}: facts는 비어 있지 않은 문자열 배열이어야 합니다.')
        if any(isinstance(v,str) and ('[' in v or ']' in v) for v in q.values()) or identifier=='replace-with-unique-id':
            errors.append(f'{label}: 양식의 자리표시자를 실제 내용으로 바꾸세요.')
    return errors

def main():
    path = Path(sys.argv[1]) if len(sys.argv)>1 else Path(__file__).resolve().parents[1]/'questions.json'
    try:
        data = json.loads(path.read_text(encoding='utf-8'))
    except (OSError, ValueError) as e:
        print(f'FAIL: {e}', file=sys.stderr); return 1
    errors = validate(data)
    if errors:
        print('\n'.join('FAIL: '+e for e in errors), file=sys.stderr); return 1
    counts = [sum(q['answer']==i for q in data) for i in range(3)]
    if max(counts)-min(counts)>2:
        print(f'WARN: 정답 위치 분포 {counts}. 특정 위치에 치우치지 않았는지 검토하세요.')
    print(f'PASS: {len(data)}개 문제 형식 검사 통과. 내용은 코치 검토가 필요합니다.')
    return 0

if __name__ == '__main__':
    raise SystemExit(main())

