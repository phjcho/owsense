import { sqliteTable, text, integer, index } from 'drizzle-orm/sqlite-core';
export const events = sqliteTable('analytics_events', {
 id:text('id').primaryKey(), visitor:text('visitor').notNull(), session:text('session').notNull(),
 event:text('event').notNull(), target:text('target').notNull(), day:text('day').notNull(),
 createdAt:integer('created_at').notNull(), test:integer('test').notNull().default(0)
},t=>[index('analytics_day').on(t.day,t.test),index('analytics_session').on(t.session,t.event)]);
