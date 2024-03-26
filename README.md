# :tv: ReelScore :tv:

A simple movie / TV serie app for watchlists and scoring

## Requirements :receipt:

- docker-compose or podman-compose
- pnpm
- client secrets and ids for github and google

## :hammer_and_wrench: Getting Started

### Step 1: :rocket: Initial Setup

- Clone the repository: `git clone https://github.com/lwears/ReelScore.git`
- Navigate: `cd ReelScore`
- Install dependencies: `pnpm i`
- Build docker containers `pnpm run setup / setup-podman`
- Initialise Prisma `cd apps/api && npx prisma generate && npx prisma migrate dev`

### Step 2: :gear: Environment Configuration

- Create `.env`: Copy `.env.example` to `.env`
- Update `.env`: Fill in necessary environment variables

### Step 3: :running_man: Running the Project

- Development Mode: `pnpm run dev`

## Todo :pencil2:

- Passport User as User?
- Dark Mode
- add is loading when loading new page on search?
- Map errors to better descriptions on FE
- Check if errors returned from tRPC

#### Tried to create a CrudRouter

Due to Prisma not having any generic for delegate, the TypeScript solution was simply too complicated for this project.

https://github.com/prisma/prisma/issues/5273
https://github.com/prisma/prisma/discussions/3929#discussioncomment-6732368

##### CRUD Router How to

https://dev.to/nicklucas/trpc-patterns-router-factories-and-polymorphism-30b0

This also affected me creating re-usable components on the FE

## Build Central Components

Dropdown
