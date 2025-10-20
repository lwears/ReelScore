CREATE TYPE "public"."Provider" AS ENUM('GITHUB', 'GOOGLE');--> statement-breakpoint
CREATE TABLE "Movie" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tmdbId" integer NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	"title" varchar(255) NOT NULL,
	"posterPath" varchar(500),
	"releaseDate" timestamp,
	"tmdbScore" numeric(3, 1) DEFAULT '0' NOT NULL,
	"score" numeric(3, 1) DEFAULT '0' NOT NULL,
	"watched" boolean DEFAULT false NOT NULL,
	"userId" uuid NOT NULL,
	CONSTRAINT "Movie_tmdbId_userId_unique" UNIQUE("tmdbId","userId")
);
--> statement-breakpoint
CREATE TABLE "Serie" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tmdbId" integer NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	"title" varchar(255) NOT NULL,
	"posterPath" varchar(500),
	"firstAired" timestamp,
	"tmdbScore" numeric(3, 1) DEFAULT '0' NOT NULL,
	"score" numeric(3, 1) DEFAULT '0' NOT NULL,
	"watched" boolean DEFAULT false NOT NULL,
	"userId" uuid NOT NULL,
	CONSTRAINT "Serie_tmdbId_userId_unique" UNIQUE("tmdbId","userId")
);
--> statement-breakpoint
CREATE TABLE "User" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"providerId" varchar(255) NOT NULL,
	"provider" "Provider" NOT NULL,
	"email" varchar(255) NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "User_providerId_unique" UNIQUE("providerId")
);
--> statement-breakpoint
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_userId_User_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Serie" ADD CONSTRAINT "Serie_userId_User_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE cascade ON UPDATE no action;