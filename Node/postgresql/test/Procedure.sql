-- Procedure 
-- Get All Record from Student Table 
CREATE OR REPLACE FUNCTION GetAllStudent()
RETURNS setof student AS
$BODY$
BEGIN 
RETURN QUERY
select * from student;
END;
$BODY$
LANGUAGE plpgsql;

-- Get All Student from Semester
CREATE OR REPLACE FUNCTION GetAllxSemester(p_semester integer)
RETURNS setof student AS
$BODY$
BEGIN 
RETURN QUERY
select * from student where semester = p_semester ;
END;
$BODY$
LANGUAGE plpgsql;

-- Get All Student from Faculty and Semester
CREATE OR REPLACE FUNCTION GetAllxSemFac(p_faculty varchar, p_semester integer)
RETURNS setof student AS
$BODY$
BEGIN 
RETURN QUERY
select * from student where semester = p_semester 
	and faculty ilike '%' || p_faculty || '%' ;
END;
$BODY$
LANGUAGE plpgsql;

-- Get All Student from Faculty and Course
CREATE OR REPLACE FUNCTION GetAllxFacCourse(p_faculty varchar, p_course varchar)
RETURNS setof student AS
$BODY$
BEGIN 
RETURN QUERY
select * from student where course ilike '%' || p_course || '%'  
	and faculty ilike '%' || p_faculty || '%' ;
END;
$BODY$
LANGUAGE plpgsql;

-- Get All Student from Semester and Course
CREATE OR REPLACE FUNCTION GetAllxSemCourse(p_semester integer, p_course varchar)
RETURNS setof student AS
$BODY$
BEGIN 
RETURN QUERY
select * from student where course ilike '%' || p_course || '%'  
	and semester = p_semester ;
END;
$BODY$
LANGUAGE plpgsql;

-- Get All Student from Teacher
CREATE OR REPLACE FUNCTION GetAllxTeacher(p_teacher varchar)
RETURNS setof student AS
$BODY$
BEGIN 
RETURN QUERY
select a.* from student as a join 
(select b.course,b.faculty from teacher as b 
	where b.name ilike '%' || p_teacher || '%' ) 
as xd on a.course ilike concat('%',xd.course,'%') 
where a.faculty=xd.faculty;
END;
$BODY$
LANGUAGE plpgsql;

