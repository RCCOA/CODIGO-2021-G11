#BUCLES
mensaje = ""
while(mensaje != "adios"):
    mensaje = input("Escribe un mensaje al robot : ")
    if(mensaje == "hola"):
        nombre = input("Mucho gusto, cual es tu nombre?  ")
        print("Mucho gusto " + nombre + " soy el robot.")
        
for i in range(13):
    r = i*2
    print("2 x " + str(i) + " = " + str(r))