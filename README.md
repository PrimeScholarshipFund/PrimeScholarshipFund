# Prime Scholarship Fund

One Paragraph of project description goes here. Link to the live version of the app if it's hosted on Heroku.

EDIT THAT^^^

# Built With
React, Express, PostgreSQL, Material UI, Passport, Stripe, SweetAlerts

# Getting Started

## Prerequisites
1. [Node.js](http://nodejs.org/)
2. [Postico](https://eggerapps.at/postico/)

## Installing
1. Clone the GitHub repository down to your machine.
2. Navigate to the folder in your Terminal.
3. Create a `.env` file at the root of the repository.
4. Inside the `.env` file, add following lines of code:
```
SERVER_SESSION_SECRET=6JMTbuM6tVUkQYCyv8rQsNOLYwoMaQr0
NODE_ENV=test
```
5. Run the command `npm install` to install the dependencies.
6. Run the commands `npm run server` and `npm run client` in two separate Terminal tabs.


## Database Set-Up

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

## Admin Creation

1. To create an administrator, first make sure the server is running.
2. Navigate to [the Register page](http://localhost:3000/#/register) in your browser.
3. Register the admin user with your preferred username and password.
4. In Postico, navigate to the `person` table.
5. Change the `admin` bool from `false` to `true`.
6. This user is now an administrator.

## Stripe Set-Up

[insert Stripe documentation]

# Screenshots
![alt text](https://i.imgur.com/Li9tY4t.jpg "Landing Page") 

![alt text](https://i.imgur.com/I99XtN6.png "Application Page")

![alt text](https://i.imgur.com/SKAgniI.png "Admin Dashboard")

![alt text](https://i.imgur.com/DGaypn1.png "Admin Applicant View")

# Documentation
[Scope Document](https://docs.google.com/document/d/1RWg7L_YKz-MIJ6nf4G9FeiRb8xJsnM3O3hwA0j2t2AY/edit?usp=sharing)

## Completed Features
[x] Creation of database. \
[x] Application form \
[x] Stripe API integration \
[x] Admin dashboard

## Next Steps
[] CSV export \
[] Chart.js integration


# Deployment

NOTE: If this is being deployed for production, it is important to first change the `NODE_ENV` variable in the `.env` file to `NODE_ENV=production` and to change the SERVER_SECRET_SESSION to a new secret.

1. Register an account on [Heroku](https://signup.heroku.com/login).
2. If you have not already done so, install the Heroku CLI (Command Line Interface) in the Terminal with the command `brew install heroku`.
3. Authenticate your Heroku credentials with the command `heroku login` and follow the prompts.
4. In the Terminal, navigate to the folder where you cloned the repo and use the command `heroku create`.
5. Run the commands `heroku addons:create heroku-postgresql:hobby-dev` and `heroku pg:push prime_scholarship DATABASE_URL` to add Postgres functionality to the Heroku project.
6. Now that Heroku is almost set up, create the production build with the command `npm run build`.
7. Remove or comment out the `build/Release` line from the .gitignore file.
8. Add and commit the new build files and updated .gitignore.
9. Run the command `git push heroku master` to push the application to Heroku.  This process may take several minutes.
10. Run the command `heroku open` to open the project!

# Authors
[Deric Aaron](https://github.com/DericAaron) \
[Robert Andrade](https://github.com/ultralinguistic) \
[Sasha Milenkovic](https://github.com/SashaMil) \
[Dan Ross](https://github.com/danross1)

# Acknowledgements

