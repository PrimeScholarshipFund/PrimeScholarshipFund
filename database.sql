CREATE TABLE "person" (
    "id" serial PRIMARY KEY NOT NULL,
    "username" varchar(50) NOT NULL UNIQUE,
    "password" varchar(100) NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT 'false'
);



CREATE TABLE "form" (
    "id" serial PRIMARY KEY NOT NULL,
    "status" varchar(100) NOT NULL,
    "person_id" integer NOT NULL REFERENCES "person" ("id"),
    "archived" BOOLEAN NOT NULL DEFAULT 'false'
);



CREATE TABLE "contact" (
    "id" serial PRIMARY KEY NOT NULL,
    "form_id" integer NOT NULL REFERENCES "form" ("id"),
    "first_name" varchar(100) NOT NULL,
    "last_name" varchar(100) NOT NULL,
    "middle_initial" varchar(5),
    "address_line_1" varchar(100) NOT NULL,
    "address_line_2" varchar(100),
    "city" varchar(100) NOT NULL,
    "state" varchar(100) NOT NULL,
    "zip_code" varchar(100) NOT NULL,
    "phone_number" varchar(15) NOT NULL,
    "email" varchar(100) NOT NULL,
    "accepted_at_prime" BOOLEAN NOT NULL,
    "applied_at_prime" BOOLEAN,
    "msp_tech_scholar" BOOLEAN NOT NULL,
    "applied_for_msp" BOOLEAN
);



CREATE TABLE "demographics" (
    "id" serial PRIMARY KEY NOT NULL,
    "form_id" integer NOT NULL REFERENCES "form" ("id"),
    "gender" varchar(80) NOT NULL,
    "race" varchar(80) NOT NULL,
    "age" integer NOT NULL,
    "level_of_ed" varchar(80) NOT NULL,
    "lgbtq_status" varchar(80) NOT NULL
);



CREATE TABLE "income" (
    "id" serial PRIMARY KEY NOT NULL,
    "form_id" integer NOT NULL REFERENCES "form" ("id"),
    "adjusted_gross_income" integer NOT NULL,
    "filing_status" varchar(80) NOT NULL,
    "dependents" integer NOT NULL,
    "government_assistance" BOOLEAN,
    "government_assistance_notes" varchar(280),
    "employed_during_prime" BOOLEAN NOT NULL,
    "income_during_prime" integer
);



CREATE TABLE "expenses" (
    "id" serial PRIMARY KEY NOT NULL,
    "form_id" integer NOT NULL REFERENCES "form" ("id"),
    "need_tuition" BOOLEAN NOT NULL,
    "housing" integer NOT NULL,
    "transportation" integer NOT NULL,
    "childcare" integer NOT NULL,
    "healthcare" integer NOT NULL,
    "other_expenses" integer NOT NULL,
    "other_expenses_notes" varchar(8000)
);

INSERT INTO person ("username", "password", "admin")
    VALUES ('administrator', '1234', true),
    ('testUser', '1234', false),
    ('buffy', '1234', false),
    ('willow', '1234', false),
    ('xander', '1234', false);
    
INSERT INTO form ("status", "person_id", "archived")
    VALUES ('applied', 2, false),
    ('waiting for interview', 2, false),
    ('interviewed', 2, false),
    ('denied post interview', 2, true);
    
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
