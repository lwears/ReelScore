ALTER TABLE "public"."Movie"
  ADD CONSTRAINT "check_score_when_watched" CHECK ((watched AND score BETWEEN 0 AND 10) OR (NOT watched AND score = 0));

ALTER TABLE "public"."Serie"
  ADD CONSTRAINT "check_score_when_watched" CHECK ((watched AND score BETWEEN 0 AND 10) OR (NOT watched AND score = 0));