-- -------------------------------------------------------------
-- TablePlus 4.6.4(414)
--
-- https://tableplus.com/
--
-- Database: zero_one_news
-- Generation Time: 2022-05-06 21:13:56.9780
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS articles_article_id_seq;

-- Table Definition
CREATE TABLE "public"."articles" (
    "article_id" int4 NOT NULL DEFAULT nextval('articles_article_id_seq'::regclass),
    PRIMARY KEY ("article_id")
);

