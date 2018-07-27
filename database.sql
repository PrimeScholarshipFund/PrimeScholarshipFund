CREATE TABLE "round" (
    "id" serial NOT NULL,
    "start_date" DATE NOT NULL,
    "end_date" DATE NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT 'false',
    CONSTRAINT round_pk PRIMARY KEY ("id")
) WITH (
 OIDS=FALSE
);



CREATE TABLE "questions" (
    "id" serial NOT NULL,
    "question" varchar(280) NOT NULL,
    "round_id" integer NOT NULL,
    "order" integer NOT NULL,
    "category" varchar(20) NOT NULL,
    CONSTRAINT questions_pk PRIMARY KEY ("id")
) WITH (
 OIDS=FALSE
);



CREATE TABLE "answers" (
    "id" serial NOT NULL,
    "question_id" integer NOT NULL,
    "form_id" integer NOT NULL,
    "response" varchar(280) NOT NULL,
    CONSTRAINT answers_pk PRIMARY KEY ("id")
) WITH (
 OIDS=FALSE
);



CREATE TABLE "person" (
    "id" serial NOT NULL,
    "username" varchar(20) NOT NULL UNIQUE,
    "pw" varchar(100) NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT 'false',
    CONSTRAINT person_pk PRIMARY KEY ("id")
) WITH (
 OIDS=FALSE
);



CREATE TABLE "form" (
    "id" serial NOT NULL,
    "completed" BINARY NOT NULL DEFAULT 'false',
    "contact_id" integer NOT NULL DEFAULT 'false',
    "round_id" integer NOT NULL,
    CONSTRAINT form_pk PRIMARY KEY ("id")
) WITH (
 OIDS=FALSE
);



CREATE TABLE "contact" (
    "id" serial NOT NULL,
    "user_id" integer NOT NULL,
    "first_name" varchar(100) NOT NULL,
    "last_name" varchar(100) NOT NULL,
    "middle_initial" varchar(5),
    "address_line_1" varchar(100) NOT NULL,
    "address_line_2" varchar(100),
    "city" varchar(100) NOT NULL,
    "state" varchar(100) NOT NULL,
    "zip_code" varchar(100) NOT NULL,
    "phone_number" varchar(10) NOT NULL,
    "email" varchar(20) NOT NULL,
    "accepted_at_prime" BOOLEAN NOT NULL,
    "applied_at_prime" BOOLEAN NOT NULL,
    "msp_tech_scholar" BOOLEAN NOT NULL,
    "applied_for_msp" BOOLEAN NOT NULL,
    "dependents" integer NOT NULL,
    CONSTRAINT contact_pk PRIMARY KEY ("id")
) WITH (
 OIDS=FALSE
);



CREATE TABLE "demographics" (
    "id" serial NOT NULL,
    "contact_id" integer NOT NULL,
    "gender" varchar(80) NOT NULL,
    "race" varchar(80) NOT NULL,
    "age" integer NOT NULL,
    "level_of_ed" varchar(80) NOT NULL,
    "lgbt_status" varchar(80) NOT NULL,
    CONSTRAINT demographics_pk PRIMARY KEY ("id")
) WITH (
 OIDS=FALSE
);



CREATE TABLE "income" (
    "id" serial NOT NULL,
    "contact_id" integer NOT NULL,
    "adjusted_gross_income" integer NOT NULL,
    "filing_status" varchar(80) NOT NULL,
    "dependents" integer,
    "government_assistance" BOOLEAN,
    "government_assistance_notes" varchar(280),
    "employed_during_prime" BOOLEAN NOT NULL,
    "income_during_prime" integer,
    CONSTRAINT income_pk PRIMARY KEY ("id")
) WITH (
 OIDS=FALSE
);



CREATE TABLE "expenses" (
    "id" serial NOT NULL,
    "contact_id" serial NOT NULL,
    "need_tuition" BOOLEAN NOT NULL,
    "housing" integer NOT NULL,
    "transportation" integer NOT NULL,
    "childcare" integer NOT NULL,
    "healthcare" integer NOT NULL,
    "other_expenses" integer NOT NULL,
    "other_expenses_notes" varchar(280) NOT NULL,
    CONSTRAINT expenses_pk PRIMARY KEY ("id")
) WITH (
 OIDS=FALSE
);




ALTER TABLE "questions" ADD CONSTRAINT "questions_fk0" FOREIGN KEY ("round_id") REFERENCES "round"("id");

ALTER TABLE "answers" ADD CONSTRAINT "answers_fk0" FOREIGN KEY ("question_id") REFERENCES "questions"("id");
ALTER TABLE "answers" ADD CONSTRAINT "answers_fk1" FOREIGN KEY ("form_id") REFERENCES "form"("id");


ALTER TABLE "form" ADD CONSTRAINT "form_fk0" FOREIGN KEY ("contact_id") REFERENCES "contact"("id");
ALTER TABLE "form" ADD CONSTRAINT "form_fk1" FOREIGN KEY ("round_id") REFERENCES "round"("id");

ALTER TABLE "contact" ADD CONSTRAINT "contact_fk0" FOREIGN KEY ("user_id") REFERENCES "person"("id");

ALTER TABLE "demographics" ADD CONSTRAINT "demographics_fk0" FOREIGN KEY ("contact_id") REFERENCES "contact"("id");

ALTER TABLE "income" ADD CONSTRAINT "income_fk0" FOREIGN KEY ("contact_id") REFERENCES "contact"("id");

ALTER TABLE "expenses" ADD CONSTRAINT "expenses_fk0" FOREIGN KEY ("contact_id") REFERENCES "contact"("id");