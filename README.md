# ReelScore

A simple movie / TV serie app for watchlists and scoring

## Requirements

    - docker-compose or podman-compose
    - pnpm

## Setup

```sh
pnpm i
pnpm run setup / setup-podman
cd apps/api
npx prisma generate
npx prisma migrate dev
cd ../..
pnpm run dev
```

## TODO

- Passport User as User?
- Dark Mode
- add is loading when loading new page on search?
- Map errors to better descriptions on FE
- Check if errors returned from tRPC
- Fix Next to latest version

### Tried to create a CrudRouter

Due to Prisma not having any generic for delegate, the TypeScript solution was simply too complicated for this project.

https://github.com/prisma/prisma/issues/5273
https://github.com/prisma/prisma/discussions/3929#discussioncomment-6732368

#### CRUD Router How to

https://dev.to/nicklucas/trpc-patterns-router-factories-and-polymorphism-30b0

This also affected me creating re-usable components on the FE

## Build Central Components

Dropdown
