-- CREATE statements goes here
CREATE TABLE SAMPLE_TABLE (id INTEGER, name VARCHAR(100));

------------------------------------SELECT STATEMENTS---------------------------------------------
-- SELECT statements goes here
SELECT * FROM SAMPLE_TABLE;


-- DISTINCT statements goes here
SELECT DISTINCT name FROM SAMPLE_TABLE;


-- ORDER BY ASC and DSC statements goes here
SELECT name FROM SAMPLE_TABLE as st ORDER BY st.id ASC;  
SELECT name FROM SAMPLE_TABLE as st ORDER BY st.id DESC ;


-- LIMIT statements goes here
SELECT name FROM SAMPLE_TABLE as st ORDER BY st.id ASC LIMIT 2;


-- OFFSET (where to start from) with LIMIT statements goes here
SELECT name FROM SAMPLE_TABLE as st ORDER BY st.id ASC LIMIT 3 OFFSET 2;

--------------------------------------END OF SELECT STATEMENTS--------------------------------------------
-- INSERT statements goes here
INSERT INTO SAMPLE_TABLE(id, name) VALUES (1, "Krishna");
INSERT INTO SAMPLE_TABLE(id, name) VALUES (9, "Check Data");


-- UPDATE statements goes here
UPDATE SAMPLE_TABLE as st SET name = "Shafir" WHERE st.id = 3;


-- DELETE statements goes here
DELETE FROM SAMPLE_TABLE as st WHERE st.id = 3;