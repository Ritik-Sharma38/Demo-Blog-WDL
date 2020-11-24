# Prisma + Next.js Starter

Starter project for [Next.js + Prisma Tutorial](https://leerob.io/blog/next-prisma).

See the completed example [here](https://github.com/leerob/next-prisma).

## Requirements

- Node 10+
- Yarn (or NPM if you prefer)

## Getting Started

After cloning the repository, you can run `yarn` to install the dependencies and then start the application with `yarn dev`.

```
$ git clone https://github.com/leerob/next-prisma-starter.git
$ npm install
$ npx browserslist@latest --update-db
$ npm run generate
$ npm run dev
```


Once you have made changes in `schema.prisma` make sure you run
```
$ npm run db-save //then specify a name for the migration that can be tracked using source control
$ npm run db-up 
$ npm run db // for inspection
$ npm run generate
$ npm run dev 
```
You are now able to view the application at http://localhost:3000. This starter uses fake data to begin the structure of the application. To verify it's working correctly, you should see:

- `/` – The index route should show "Test Song"
- `/songs/1` - The song page should show a hardcoded YouTube embed
