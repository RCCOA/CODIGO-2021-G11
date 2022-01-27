--TRIGGERS
insert into tbl_alumno(alumno_nombre,alumno_email)
values('ALDO RODRIGUEZ','aldo@gmail.com');

select alumno_nombre,CONCAT(lower(REPLACE(alumno_nombre,'','')),'@codigo.edu.pe')
from tbl_alumno;


DELIMITER $$

CREATE TRIGGER tg_correo_alumno
BEFORE INSERT
ON tbl_alumno FOR EACH ROW
BEGIN
    set NEW.alumno_email = CONCAT(lower(REPLACE(NEW.alumno_nombre,'','')),'@codigo.edu.pe');
END
$$

DELIMITER ;
insert into tbl_alumno(alumno) value('GINO CARRANZA');
