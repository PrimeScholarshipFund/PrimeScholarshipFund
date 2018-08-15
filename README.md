# Deployment

## Downloads
1. Clone the GitHub repository down to your machine.
2. Download [Postico](https://eggerapps.at/postico/).
3. If you have not already done so, install the Heroku CLI (Command Line Interface) in the Terminal with the command `brew install heroku`.

## Database
1. Using Postico, create a database called `prime_scholarship`.
2. Run the `CREATE TABLE` queries for the person, form, contact, demographics, income, and expenses tables located in the `database.sql` file. \
Ex.: 
```
CREATE TABLE "person" (
    "id" serial PRIMARY KEY NOT NULL,
    "username" varchar(20) NOT NULL UNIQUE,
    "password" varchar(100) NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT 'false'
);
```


```
CREATE TABLE "form" (
    "id" serial PRIMARY KEY NOT NULL,
    "status" varchar(100),
    "person_id" integer NOT NULL REFERENCES "person" ("id"),
    "archived" BOOLEAN NOT NULL DEFAULT 'false',
    "comments" varchar(1000) NOT NULL DEFAULT ''
);
```
3. If you wish to have test data, run the `INSERT INTO` queries located in the `database.sql` file to insert the test data into the database tables. \
    Ex.: 
```
INSERT INTO person ("username", "password", "admin")
    VALUES ('administrator', '1234', true),
    ...
```

## Heroku
1. Register an account on [Heroku](https://signup.heroku.com/login).
2. Authenticate your Heroku credentials with the command `heroku login` and follow the prompts.
3. In the Terminal, navigate to the folder where you cloned the repo and use the command `heroku create`.
4. Run the commands `heroku addons:create heroku-postgresql:hobby-dev` and `heroku pg:push prime_scholarship DATABASE_URL` to add Postgres functionality to the Heroku project.
5. Now that Heroku is almost set up, create the production build with the command `npm run build`.
6. Remove or comment out the `build/Release` line from the .gitignore file.
7. Add and commit the new build files and updated .gitignore.
8. Run the command `git push heroku master` to push the application to Heroku.  This process may take several minutes.
9. Run the command `heroku open` to open the project!
