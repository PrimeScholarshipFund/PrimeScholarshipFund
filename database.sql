CREATE TABLE "person" (
    "id" serial PRIMARY KEY NOT NULL,
    "username" varchar(20) NOT NULL UNIQUE,
    "password" varchar(100) NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT 'false'
);



CREATE TABLE "form" (
    "id" serial PRIMARY KEY NOT NULL,
    "status" varchar(100) NOT NULL DEFAULT 'Application in Progress',
    "person_id" integer NOT NULL REFERENCES "person" ("id"),
    "archived" BOOLEAN NOT NULL DEFAULT 'false',
    "comments" varchar(1000) NOT NULL DEFAULT ''
);



CREATE TABLE "contact" (
    "id" serial PRIMARY KEY NOT NULL,
    "form_id" integer UNIQUE NOT NULL REFERENCES "form" ("id"),
    "first_name" varchar(100) NOT NULL DEFAULT '',
    "last_name" varchar(100) NOT NULL DEFAULT '',
    "middle_initial" varchar(5) NOT NULL DEFAULT '',
    "address_line_1" varchar(100) NOT NULL DEFAULT '',
    "address_line_2" varchar(100) NOT NULL DEFAULT '',
    "city" varchar(100) NOT NULL DEFAULT '',
    "state" varchar(100) NOT NULL DEFAULT '',
    "zip_code" varchar(100) NOT NULL DEFAULT '',
    "phone_number" varchar(15) NOT NULL DEFAULT '',
    "email" varchar(100) NOT NULL DEFAULT '',
    "accepted_at_prime" BOOLEAN NOT NULL DEFAULT false,
    "applied_at_prime" BOOLEAN NOT NULL DEFAULT false,
    "msp_tech_scholar" BOOLEAN NOT NULL DEFAULT false,
    "applied_for_msp" BOOLEAN NOT NULL DEFAULT false
);



CREATE TABLE "demographics" (
    "id" serial PRIMARY KEY NOT NULL,
    "form_id" integer UNIQUE NOT NULL REFERENCES "form" ("id"),
    "gender" varchar(80) NOT NULL DEFAULT '',
    "race" varchar(80) NOT NULL DEFAULT '',
    "age" varchar(80) NOT NULL DEFAULT '',
    "level_of_ed" varchar(80) NOT NULL DEFAULT '',
    "lgbtq_status" varchar(80) NOT NULL DEFAULT ''
);



CREATE TABLE "income" (
    "id" serial PRIMARY KEY NOT NULL,
    "form_id" integer UNIQUE NOT NULL REFERENCES "form" ("id"),
    "adjusted_gross_income" integer NOT NULL DEFAULT 0,
    "filing_status" varchar(80) NOT NULL DEFAULT '',
    "dependents" integer NOT NULL DEFAULT 0,
    "government_assistance" BOOLEAN DEFAULT false,
    "government_assistance_notes" varchar(280) NOT NULL DEFAULT '',
    "employed_during_prime" BOOLEAN NOT NULL DEFAULT false,
    "employed_during_prime_notes" varchar(280) NOT NULL DEFAULT '',
    "income_during_prime" INTEGER NOT NULL DEFAULT 0
);



CREATE TABLE "expenses" (
    "id" serial PRIMARY KEY NOT NULL,
    "form_id" integer UNIQUE NOT NULL REFERENCES "form" ("id"),
    "need_tuition" BOOLEAN NOT NULL DEFAULT false,
    "housing" integer NOT NULL DEFAULT 0,
    "transportation" integer NOT NULL DEFAULT 0,
    "childcare" integer NOT NULL DEFAULT 0,
    "healthcare" integer NOT NULL DEFAULT 0,
    "other_expenses_notes" varchar(280) NOT NULL DEFAULT ''
);
    
INSERT INTO contact ("form_id", "first_name", "last_name", "middle_initial", "address_line_1", "address_line_2", "city", "state", "zip_code", "phone_number", "email", "accepted_at_prime", "applied_at_prime", "msp_tech_scholar", "applied_for_msp")
VALUES (1, 'Test', 'User', 'Y.', '123 Fake St', 'Apt #42', 'Springfield', 'MN', '12345', '555-555-5555', 'testyuser@fake.ninja', true, null, false, null),
(2, 'Buffy', 'Summers', 'A.', '1630 Revello Drive', null, 'Sunnydale', 'CA', '12345', '444-444-4444', 'buffy@slayer.com', true, null, false, null),
(3, 'Willow', 'Rosenberg', 'D.', '63 Tara Dr', null, 'Sunnydale', 'CA', '12345', '666-666-6666', 'willow@hotmail.net', true, null, true, null),
(4, 'Alexander', 'Harris', 'L.', '900 Anya Blvd', null, 'Sunnydale', 'CA', '12345', '222-222-2222', 'zeppo@bunnies.org', false, true, false, true);

INSERT INTO demographics ("form_id", "gender", "race", "age", "level_of_ed", "lgbtq_status")
VALUES (1, 'trans', 'DNWTS', 42, 'high school', 'queer'),
(2, 'woman', 'white', 20, 'some college', 'straight'),
(3, 'woman', 'white', 21, 'bachelors degree', 'bisexual'),
(4, 'man', 'white', 22, 'high school', 'straight');

INSERT INTO income ("form_id", "adjusted_gross_income", "filing_status", "dependents", "government_assistance", "government_assistance_notes", "employed_during_prime", "income_during_prime")
VALUES (1, 20, 'joint', 0, false, null, false, null),
(2, 0, 'single', 1, false, null, true, 0),
(3, 20000, 'single', 0, false, null, false, null),
(4, 308, 'single', 2, true, 'medicare', true, 450);

INSERT INTO expenses ("form_id", "need_tuition", "housing", "transportation", "childcare", "healthcare", "other_expenses", "other_expenses_notes")
VALUES (1, true, 200, 50, 0, 0, 1000, 'I like to burn 1000 dollar bills a month'),
(2, true, 400, 0, 0, 50000, 470, 'pointy things'),
(3, true, 0, 0, 0, 100, 500, 'magick supplies'),
(4, false, 300, 50, 300, 600, 200, 'comics');
