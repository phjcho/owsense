CREATE TABLE `analytics_events` (
	`id` text PRIMARY KEY NOT NULL,
	`visitor` text NOT NULL,
	`session` text NOT NULL,
	`event` text NOT NULL,
	`target` text NOT NULL,
	`day` text NOT NULL,
	`created_at` integer NOT NULL,
	`test` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE INDEX `analytics_day` ON `analytics_events` (`day`,`test`);--> statement-breakpoint
CREATE INDEX `analytics_session` ON `analytics_events` (`session`,`event`);