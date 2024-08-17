-- AlterTable
CREATE SEQUENCE user_id_seq;
ALTER TABLE "User" ALTER COLUMN "id" SET DEFAULT nextval('user_id_seq');
ALTER SEQUENCE user_id_seq OWNED BY "User"."id";

-- AlterTable
CREATE SEQUENCE blood_pressure_check_id_seq;
ALTER TABLE "blood_pressure_check" ALTER COLUMN "id" SET DEFAULT nextval('blood_pressure_check_id_seq');
ALTER SEQUENCE blood_pressure_check_id_seq OWNED BY "blood_pressure_check"."id";

-- AlterTable
CREATE SEQUENCE exercise_id_seq;
ALTER TABLE "exercise" ALTER COLUMN "id" SET DEFAULT nextval('exercise_id_seq');
ALTER SEQUENCE exercise_id_seq OWNED BY "exercise"."id";

-- AlterTable
CREATE SEQUENCE food_id_seq;
ALTER TABLE "food" ALTER COLUMN "id" SET DEFAULT nextval('food_id_seq');
ALTER SEQUENCE food_id_seq OWNED BY "food"."id";

-- AlterTable
CREATE SEQUENCE sleep_id_seq;
ALTER TABLE "sleep" ALTER COLUMN "id" SET DEFAULT nextval('sleep_id_seq');
ALTER SEQUENCE sleep_id_seq OWNED BY "sleep"."id";

-- AlterTable
CREATE SEQUENCE supplement_intake_id_seq;
ALTER TABLE "supplement_intake" ALTER COLUMN "id" SET DEFAULT nextval('supplement_intake_id_seq');
ALTER SEQUENCE supplement_intake_id_seq OWNED BY "supplement_intake"."id";
