CREATE TABLE "person" (
    "id" serial PRIMARY KEY NOT NULL,
    "username" varchar(20) NOT NULL UNIQUE,
    "password" varchar(100) NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT 'false'
);



CREATE TABLE "form" (
    "id" serial PRIMARY KEY NOT NULL,
    "status" varchar(100),
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
    "accepted_at_prime" BOOLEAN,
    "applied_at_prime" BOOLEAN,
    "msp_tech_scholar" BOOLEAN,
    "applied_for_msp" BOOLEAN
);



CREATE TABLE "demographics" (
    "id" serial PRIMARY KEY NOT NULL,
    "form_id" integer UNIQUE NOT NULL REFERENCES "form" ("id"),
    "gender" varchar(80) NOT NULL DEFAULT '',
    "specify_gender" varchar(80) DEFAULT '',
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
    "income_during_prime" INTEGER
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

INSERT INTO person ("username", "password", "admin")
    VALUES ('administrator', '1234', true),
    ('nat', '1234', false),
    ('lind', '1234', false),
    ('kate', '1234', false),
    ('willie', '1234', false),
    ('matias', '1234', false),
    ('greta', '1234', false),
    ('violet', '1234', false),
    ('joey', '1234', false),
    ('abby', '1234', false),
    ('deep', '1234', false);

    
INSERT INTO form ("status", "person_id", "archived")
    VALUES ('Applied', 2, false),
    ('Waiting for Interview', 3, false),
    ('Interviewed', 4, false),
    ('Denied Post Interview', 5, true),
    ('Waiting for Interview', 6, false),
    ('Did Not Attend Interview', 7, false),
    ('Waiting for Interview', 8, false),
    ('Denied Post Interview', 9, true),
    ('Applied', 10, false),
    ('Denied Post Interview', 11, true);
    
INSERT INTO contact ("form_id", "first_name", "last_name", "middle_initial", "address_line_1", "address_line_2", "city", "state", "zip_code", "phone_number", "email", "accepted_at_prime", "applied_at_prime", "msp_tech_scholar", "applied_for_msp")
VALUES (1, 'Natalie', 'Wyn', '', '123 Fake St', 'Apt #42', 'Minneapolis', 'MN', '12345', '555-555-5555', 'contra@points.com', true, true, false, false),
(2, 'Lindsay', 'Ellis', 'A.', '1630 Revello Drive', '', 'Minneapolis', 'MN', '12345', '444-444-4444', 'lindsay@slayer.com', true, true, false, false),
(3, 'Kate', 'Nyx', 'D.', '63 Tara Dr', '', 'Minneapolis', 'MN', '12345', '666-666-6666', 'fae@hotmail.net', true, true, true, false),
(4, 'William', 'Bicknell', '', '901 Anya Blvd', '', 'Minneapolis', 'MN', '12345', '222-222-2222', 'email@mail.edu', false, true, false, true),
(5, 'Matias', 'Morgan', '', '902 Anya Blvd', '', 'Minneapolis', 'MN', '12345', '222-222-2221', 'email1@mail.edu', true, true, false, true),
(6, 'Greta', 'Gage', '', '903 Anya Blvd', '', 'Minneapolis', 'MN', '12345', '222-222-2223', 'email2@mail.edu', false, true, false, true),
(7, 'Violet', 'Rose', '', '904 Anya Blvd', '', 'Minneapolis', 'MN', '12345', '222-222-2224', 'email3@mail.edu', true, true, false, true),
(8, 'Johanna', 'Silver', '', '905 Anya Blvd', '', 'Minneapolis', 'MN', '12345', '222-222-2225', 'email4@mail.edu', true, true, false, true),
(9, 'Abby', 'Fanara', '', '906 Anya Blvd', '', 'Minneapolis', 'MN', '12345', '222-222-2226', 'email5@mail.edu', true, true, false, true),
(10, 'Deep', 'Mahapatra', '', '907 Anya Blvd', '', 'Minneapolis', 'MN', '12345', '222-222-2227', 'email6@mail.edu', true, true, false, true);

INSERT INTO demographics ("form_id", "gender", "race", "age", "level_of_ed", "lgbtq_status")
VALUES (1, 'DNWTS', 'DNWTS', 42, 'high school', 'Yes'),
(2, 'Female', 'AmInAlNat', 20, 'some college', 'Yes'),
(3, 'Female', 'asian', 21, 'bachelors degree', 'Yes'),
(4, 'Male', 'AfricanAm', 33, 'high school', 'DNWTS'),
(5, 'Male', 'AfricanAm', 54, 'bachelors', 'DNWTS'),
(6, 'DNWTS', 'hispLat', 23, 'bachelors', 'No'),
(7, 'transman', 'midEastNorthAf', 43, 'bachelors', 'Yes'),
(8, 'Female', 'white', 19, 'high school', 'Yes'),
(9, 'Female', 'hispLat', 82, 'high school', 'Yes'),
(10, 'Male', 'AmInAlNat', 32, 'high school', 'Yes');

INSERT INTO income ("form_id", "adjusted_gross_income", "filing_status", "dependents", "government_assistance", "government_assistance_notes", "employed_during_prime", "income_during_prime")
VALUES (1, 20, 'joint', 0, false, '', false, null),
(2, 0, 'single', 1, false, '', true, 200),
(3, 20000, 'single', 0, false, '', false, null),
(4, 308, 'joint', 2, true, 'medicare', false, null),
(5, 8765, 'single', 2, false, '', true, 450),
(6, 5678, 'joint', 4, true, 'medicare', false, null),
(7, 9876, 'single', 0, false, '', false, null),
(8, 45678, 'joint', 0, false, '', false, null),
(9, 87, 'single', 0, true, 'snap', false, null),
(10, 56789, 'joint', 0, false, '', false, null);

INSERT INTO expenses ("form_id", "need_tuition", "housing", "transportation", "childcare", "healthcare", "other_expenses_notes")
VALUES (1, true, 200, 50, 0, 0, ''),
(2, true, 400, 0, 0, 50000, ''),
(3, true, 0, 0, 0, 100, ''),
(4, false, 300, 50, 300, 600, ''),
(5, false, 300, 50, 300, 600, ''),
(6, true, 300, 50, 300, 600, ''),
(7, false, 300, 50, 300, 600, ''),
(8, true, 300, 50, 300, 600, ''),
(9, false, 300, 50, 300, 600, ''),
(10, true, 300, 50, 300, 600, '');
