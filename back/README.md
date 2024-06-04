`#react` `#express` `#mongoose` `#typescript` `#postgres` `#prisma` `#cloudinary` `#backend` `#assembler-institute-of-technology` `#master-in-software-engineering` `#node.js`

# MovieHub (Back end) Individual Project 🎬

![MovieHub](src/assets/moviehubimg.png)

This is an application to keep track of the movies you are watching and rate them.

## Tools

[Node.js](https://nodejs.org/en)
[Express](https://expressjs.com)
[Mongoose](https://mongoosejs.com/docs/index.html)
[Postman](https://www.postman.com)
[MongoDB](https://www.mongodb.com/es)
[Prisma](https://www.prisma.io)
[PostgreSQL](https://www.postgresql.org)

## Installing tools

- npm init -y
- npm i express
- npm i -D typescript nodemon dotenv @types/express ts-node @types/node

## Preparing server with Nodemon

Nodemon is a tool that aids in the development of Node.js applications by automatically restarting the server whenever it detects changes in project files.

## Mongoose

- npm i mongoose

Mongoose provides a schema-based solution to model your application data.

The environment variables (.env) are variables that we do not want to upload to GitHub because they contain sensitive information.

We forget about PUT method, because PATCH method only changes the field you are interested in. It's an action that weighs much less. PUT changes everything.

## MongoDB

- Local: brew services start mongodb-commnity@7.0 / brew services stop mongodb-commnity@7.0 / mongosh
- Online: Cluster Atlas

## Mongoose

- npm i mongoose

## Migrating to Prisma 🔼

- npm i -D prisma
- npx prisma init
- npx prisma format
- npm i -D @prisma/client
- npx prisma generate (everytime we make changes at schema.prisma file)

Prisma does not create a test database by default, not like MongoDB! We have to specify the database name at the end of the server link!

## PostgreSQL 🐘

Run shell and introduce:

- Server
- DataBase
- Port
- User

## Migrating to PostgreSQL

- npx prisma migrate dev

## Journal 🗒️

· 14th March 2014:

- Creating my MovieHub projects in GitHub.
- Watching some videos and searching resources about Node.js.

· 15th March 2014:

- Watching some videos and searching resources about Express.
- Installing Express in my project.

· 18th March 2014:

- Watching some videos and searching resources about Mongoose.
- Installing Express in my project and practicing.

· 19th March 2014:

- Watching some videos and searching resources about MongoDB.
- Installing MongoDB and practicing with the local DataBase.

· 20th March 2014:

- Watching some videos and searching resources about MongoDB.
- Practicing with the local DataBase.

· 21st March 2014:

- Installing Postman.

· 22nd March 2014:

- Implementing first steps in my project such as: creating some branches depending on the purpose of each one, installing dev depencencies (typescrips, ts-node, nodemon, express and dotenv), creating .env files.

· 25th March 2014:

- Creating User and Movie models.

· 26th March 2014:

- Starting to create User and Movie controllers and routes.

· 28th March 2014:

- Finishing User and Movie controllers and routes.

· 29th March 2014:

- Creating model, controllers and routes for Genre.

· 31st March 2014:

- Installing Prisma depencencies.
- Migrating Mongoose to Prisma.

· 2nd April 2014:

- Implementing and testing Prisma on my project.

· 3rd April 2014:

- Resolving errors with the controllers.
- Starting the PostgreSQL migration.

· 4th April 2014:

- Resolving controllers errors.

· 5th April 2014:

- Resolving controllers errors.

· 8th April 2014:

- Resolving controllers errors.

· 9th April 2014:

- Implementing FrontEnd-BackEnd connection.

## cloudinary

npm i cloudinary
npm i express-fileupload
npm i -D @types/express-fileupload
npm i fs-extra
npm i -D @types/fs-extra
npm i body-parser
