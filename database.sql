CREATE TABLE "user" (
    "id" serial PRIMARY KEY NOT NULL,
    "username" varchar(20) NOT NULL UNIQUE,
    "pw" varchar(100) NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT 'false'
);



CREATE TABLE "form" (
    "id" serial PRIMARY KEY NOT NULL,
    "status" varchar(100) NOT NULL,
    "user_id" integer NOT NULL REFERENCES "user" ("id"),
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
    "other_expenses_notes" varchar(280) NOT NULL
);