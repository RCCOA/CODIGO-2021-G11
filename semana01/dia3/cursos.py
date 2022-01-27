import os
nombre = input("NOMBRE CURSO: ")
profesor = input("PROFESOR: ")
if os.path.exists('cursos.csv') == False:
    f = open('cursos.csv','w')
    f.write('\n' + nombre + "," + profesor)
else:
    f = open('cursos.csv','a+')
    f.write('\n' + nombre + ";" + profesor)
f.close()

fr = open('cursos.csv','r')
cursos = fr.read()
listCursos = cursos.splitlines()
print(listCursos)
listaResultado = []
for l in listCursos:
    listaCurso = l.split(';')
    print(listaCurso)
    dictCurso = {
        'nombre':listaCurso[0],
        'profesor':listaCurso[1]
    }
    listaResultado.append(dictCurso)   
f.close

print(listaResultado)

# r es para permiso de lectura