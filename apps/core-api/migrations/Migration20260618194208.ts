'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const { Migration } = require('@mikro-orm/migrations');

class Migration20260618194208 extends Migration {

  async up() {
    this.addSql(`alter table "ai_chat_message_entity" drop constraint "ai_chat_message_entity_session_id_foreign";`);

    this.addSql(`alter table "ai_chat_message_entity" drop constraint "ai_chat_message_entity_usage_id_foreign";`);

    this.addSql(`alter table "ai_task_entity" drop constraint "ai_task_entity_usage_id_foreign";`);

    this.addSql(`create table "blog_category_entity" ("id" serial primary key, "created_at" timestamptz not null, "updated_at" timestamptz not null, "name" varchar(255) not null, "slug" varchar(255) not null);`);
    this.addSql(`alter table "blog_category_entity" add constraint "blog_category_entity_name_unique" unique ("name");`);
    this.addSql(`alter table "blog_category_entity" add constraint "blog_category_entity_slug_unique" unique ("slug");`);

    this.addSql(`create table "lead_entity" ("id" serial primary key, "created_at" timestamptz not null, "updated_at" timestamptz not null, "name" varchar(255) not null, "phone" varchar(255) not null, "business_name" varchar(255) null, "service" varchar(255) null, "business_type" varchar(255) null, "business_size" varchar(255) null, "message" text null, "status" varchar(255) not null default 'new');`);

    this.addSql(`create table "blog_post_entity" ("id" serial primary key, "created_at" timestamptz not null, "updated_at" timestamptz not null, "title" varchar(255) not null, "slug" varchar(255) not null, "body" text not null, "excerpt" text null, "cover_image" varchar(255) null, "meta_title" varchar(255) null, "meta_description" text null, "og_image" varchar(255) null, "status" varchar(255) not null default 'draft', "redirect_url" varchar(255) null, "publish_at" timestamptz null, "type" varchar(255) null, "author_id" int not null, "published_at" timestamptz null);`);
    this.addSql(`alter table "blog_post_entity" add constraint "blog_post_entity_slug_unique" unique ("slug");`);

    this.addSql(`create table "blog_post_entity_categories" ("blog_post_entity_id" int not null, "blog_category_entity_id" int not null, constraint "blog_post_entity_categories_pkey" primary key ("blog_post_entity_id", "blog_category_entity_id"));`);

    this.addSql(`alter table "blog_post_entity" add constraint "blog_post_entity_author_id_foreign" foreign key ("author_id") references "user_entity" ("id") on update cascade;`);

    this.addSql(`alter table "blog_post_entity_categories" add constraint "blog_post_entity_categories_blog_post_entity_id_foreign" foreign key ("blog_post_entity_id") references "blog_post_entity" ("id") on update cascade on delete cascade;`);
    this.addSql(`alter table "blog_post_entity_categories" add constraint "blog_post_entity_categories_blog_category_entity_id_foreign" foreign key ("blog_category_entity_id") references "blog_category_entity" ("id") on update cascade on delete cascade;`);

    this.addSql(`drop table if exists "ai_chat_message_entity" cascade;`);

    this.addSql(`drop table if exists "ai_chat_session_entity" cascade;`);

    this.addSql(`drop table if exists "ai_task_entity" cascade;`);

    this.addSql(`drop table if exists "ai_usage_entity" cascade;`);
  }

  async down() {
    this.addSql(`alter table "blog_post_entity_categories" drop constraint "blog_post_entity_categories_blog_category_entity_id_foreign";`);

    this.addSql(`alter table "blog_post_entity_categories" drop constraint "blog_post_entity_categories_blog_post_entity_id_foreign";`);

    this.addSql(`create table "ai_chat_message_entity" ("id" serial primary key, "created_at" timestamptz(6) not null, "updated_at" timestamptz(6) not null, "session_id" int4 not null, "role" text check ("role" in ('user', 'assistant', 'system')) not null, "content" text not null, "usage_id" int4 null);`);
    this.addSql(`alter table "ai_chat_message_entity" add constraint "ai_chat_message_entity_usage_id_unique" unique ("usage_id");`);

    this.addSql(`create table "ai_chat_session_entity" ("id" serial primary key, "created_at" timestamptz(6) not null, "updated_at" timestamptz(6) not null, "user_id" int4 not null, "model" varchar(255) not null default 'openai/gpt-4o-mini', "title" varchar(255) null, "system_prompt" text null);`);

    this.addSql(`create table "ai_task_entity" ("id" serial primary key, "created_at" timestamptz(6) not null, "updated_at" timestamptz(6) not null, "user_id" int4 not null, "prompt" text not null, "model" varchar(255) not null default 'openai/gpt-4o-mini', "status" text check ("status" in ('pending', 'processing', 'completed', 'failed')) not null default 'pending', "result" text null, "error" text null, "usage_id" int4 null);`);
    this.addSql(`alter table "ai_task_entity" add constraint "ai_task_entity_usage_id_unique" unique ("usage_id");`);

    this.addSql(`create table "ai_usage_entity" ("id" serial primary key, "created_at" timestamptz(6) not null, "updated_at" timestamptz(6) not null, "user_id" int4 null, "model" varchar(255) not null, "input_tokens" int4 not null, "output_tokens" int4 not null, "cost_usd" numeric(12,8) not null default 0, "type" text check ("type" in ('chat', 'task')) not null, "ref_id" varchar(255) null);`);

    this.addSql(`alter table "ai_chat_message_entity" add constraint "ai_chat_message_entity_session_id_foreign" foreign key ("session_id") references "ai_chat_session_entity" ("id") on update cascade on delete no action;`);
    this.addSql(`alter table "ai_chat_message_entity" add constraint "ai_chat_message_entity_usage_id_foreign" foreign key ("usage_id") references "ai_usage_entity" ("id") on update cascade on delete set null;`);

    this.addSql(`alter table "ai_chat_session_entity" add constraint "ai_chat_session_entity_user_id_foreign" foreign key ("user_id") references "user_entity" ("id") on update cascade on delete no action;`);

    this.addSql(`alter table "ai_task_entity" add constraint "ai_task_entity_usage_id_foreign" foreign key ("usage_id") references "ai_usage_entity" ("id") on update cascade on delete set null;`);
    this.addSql(`alter table "ai_task_entity" add constraint "ai_task_entity_user_id_foreign" foreign key ("user_id") references "user_entity" ("id") on update cascade on delete no action;`);

    this.addSql(`alter table "ai_usage_entity" add constraint "ai_usage_entity_user_id_foreign" foreign key ("user_id") references "user_entity" ("id") on update cascade on delete set null;`);

    this.addSql(`drop table if exists "blog_category_entity" cascade;`);

    this.addSql(`drop table if exists "lead_entity" cascade;`);

    this.addSql(`drop table if exists "blog_post_entity" cascade;`);

    this.addSql(`drop table if exists "blog_post_entity_categories" cascade;`);
  }

}
exports.Migration20260618194208 = Migration20260618194208;
