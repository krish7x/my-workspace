-- CREATE statements goes here
CREATE TABLE SAMPLE_TABLE (id INTEGER PRIMARY KEY, name VARCHAR(100));

-- DUMMY TABLE
CREATE TABLE DUMMY_TABLE (id INTEGER, name VARCHAR(100));

------------------------------------SELECT STATEMENTS---------------------------------------------
-- SELECT statements goes here
SELECT * FROM SAMPLE_TABLE;

-- DUMMY TABLE
SELECT * FROM NEW_DUMMY_TABLE;


-- DISTINCT statements goes here
SELECT DISTINCT name FROM SAMPLE_TABLE;


-- ORDER BY ASC and DSC statements goes here
SELECT name FROM SAMPLE_TABLE as st ORDER BY st.id ASC;  
SELECT name FROM SAMPLE_TABLE as st ORDER BY st.id DESC ;


-- LIMIT statements goes here
SELECT name FROM SAMPLE_TABLE as st ORDER BY st.id ASC LIMIT 2;


-- OFFSET (where to start from) with LIMIT statements goes here
SELECT name FROM SAMPLE_TABLE as st ORDER BY st.id ASC LIMIT 3 OFFSET 2;

-- GROUP BY (Aggregates should be present in group by)
----- AGGREGATES -> AVG, MIN, MAX, COUNT etc.,
-----In below MAX(AGE) is aggregate
SELECT name, MAX(age) FROM SAMPLE_TABLE GROUP BY name ORDER BY MAX(age) DESC;

---- HAVING
SELECT name, MAX(age) FROM SAMPLE_TABLE GROUP BY name HAVING MAX(age) > 22 ORDER BY MAX(age) DESC;

--------------------------------------END OF SELECT STATEMENTS--------------------------------------------
-- INSERT statements goes here
INSERT INTO SAMPLE_TABLE(id, name, age) VALUES (1, "John Doe", 22);
INSERT INTO SAMPLE_TABLE(id, name, age) VALUES (2, "Robert Martin", 50);
INSERT INTO SAMPLE_TABLE(id, name, age) VALUES (3, "Martin Fowler", 53);


-- UPDATE statements goes here
UPDATE SAMPLE_TABLE as st SET name = "Bill Gates" WHERE st.id = 3;


-- DELETE statements goes here
DELETE FROM SAMPLE_TABLE as st WHERE st.id = 3;


---ALTER statements goes here

--ADD COLUMN
ALTER TABLE SAMPLE_TABLE ADD COLUMN age INTEGER;

--DUMMY ALTER TO USE DROP COLUMN 
ALTER TABLE SAMPLE_TABLE ADD COLUMN dummy VARCHAR(100);

--DROP COLUMN 
ALTER TABLE SAMPLE_TABLE DROP COLUMN dummy;

--ADD CONSTRAINT
ALTER TABLE DUMMY_TABLE ADD CONSTRAINT myPrimaryKey PRIMARY KEY (id);

--NOT WORKING IN MY SQL
ALTER TABLE DUMMY_TABLE DROP CONSTRAINT myPrimaryKey;

--WORKING IN MYSQL
ALTER TABLE DUMMY_TABLE DROP PRIMARY KEY;

--TABLE RENAME
ALTER TABLE DUMMY_TABLE RENAME TO NEW_DUMMY_TABLE;

--COLUMN RENAME
ALTER TABLE NEW_DUMMY_TABLE RENAME COLUMN name TO new_name;

---DROP statement goes here
DROP TABLE DUMMY_TABLE;

---TRUNCATE statement goes here
TRUNCATE TABLE NEW_DUMMY_TABLE;