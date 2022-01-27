#REALIZAR UN PROGRAMA QUE TE PIDA INGRESAR UNA CANTIDAD DE NUMEROS
#EL PROGRAMA DEBE PEDIRTE CUANTOS NUMEROS INGRESAR
# AL FINAL DEBE MOSTRAR EL NUMERO MAYOR, MENOR Y EL PROMEDIO
# Y DEBE MOSTRAR TODOS LOS NUMEROS ORDENADOS EN UNA TUPLA
x=[]
n = int(input("Ingrese la cantidad de numero que desea ingresar: " ))

for i in range(n):
   y = int(input("Ingrese el " + str(i+1) + "° número: " ))
   x.append(y)

print("Los valores son: ", x)
print("El maximo valor es: ", max(x))
print("El minimo valor es: ", min(x))
print("La tupla es: ", tuple(x))
