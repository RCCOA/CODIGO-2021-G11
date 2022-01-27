#crear clase
class Automovil:
    #crear atributos
    def __init__(self,valorAño,pl,col,mar):
        self.año = valorAño
        self.placa = pl
        self.color = col
        self.marca = mar
        self.motor = 1000

    def encender(self):
        print('encender : ' + self.marca)
    
    def avanzar(self):
        print('avanzar : ' + self.marca)
        
    def acelerar(self):
        print('acelerar : ' + self.marca)
    
    def frenar(self):
        print('frenar   : ' + self.marca)
    
#crear objetos
vw = Automovil(1970,'CH-1234','Amarillo','volkswagen')
tico = Automovil(1985,'EJ-2345','Rojo','Tico')
lamborghini = Automovil(2018,'E7P-367','Amarillo','Lamborghini')

#ulitizar objetos
vw.encender()
print("La placa es : " + vw.placa)
vw.acelerar()
vw.frenar()

tico.encender()
tico.acelerar()
tico.frenar()

lamborghini.encender()
lamborghini.acelerar()
lamborghini.frenar()

print("El color del automovil " + vw.marca + " es " + vw.color)
vw.color = 'NEGRO'
print("El color del automovil " + vw.marca + " ahora es " + vw.color)
print("El motor del automovil " + vw.marca + " es de " + str(vw.motor))
del vw.motor
print("El motor del automovil " + vw.marca + " es de " + str(vw.motor))