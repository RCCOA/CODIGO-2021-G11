# el permiso w chanca el valor ingresado
# el permiso a agrega el valor deseado
#f = open('alumnos.txt', 'w')
#f.write('\nronald ccoa')

f = open('alumnos.txt','r')
alumnos = f.read()
lstResultado = []

lstAlumnos = alumnos.splitlines()
print(lstAlumnos)
for dictAlumno in lstAlumnos:
    lstdicAlumno = dictAlumno.split(',')
    print(lstdicAlumno)
    dictAlumno = {
        'nombre':lstdicAlumno[0],
        'email':lstdicAlumno[1],
        'celular':lstdicAlumno[2]
    }
    lstResultado.append(dictAlumno)
    print(lstResultado)
    f.close