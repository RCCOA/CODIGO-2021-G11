import pyrebase

config = {
    "apiKey": "AIzaSyBD-AYd0e9mS9zil3D2Gj5rpDTMdPA-5oc",
    "authDomain": "portafolio-330d1.firebaseapp.com",
    "databaseURL": "https://portafolio-330d1-default-rtdb.firebaseio.com",
    "projectId": "portafolio-330d1",
    "storageBucket": "portafolio-330d1.appspot.com",
    "messagingSenderId": "142962344661",
    "appId": "1:142962344661:web:337390995e014ea9b7585c",
    "measurementId": "G-Y2G1RSQZMB"
}
firebase = pyrebase.initialize_app(config)
auth = firebase.auth()


try:
    usuario = auth.sign_in_with_email_and_password('ronaldsc.06@gmail.com','123456')
    print(auth.get_account_info(usuario['idToken']))
    #auth.delete_user_account(usuario['idToken'])   #para eliminar cuenta usar : 
except:
    print("Usuario o Password invalidos")
    
#print("Enviando email de verificación")
#auth.send_email_verification(usuario['idToken'])

#cambiando la contraseña del usuario
#auth.send_password_reset_email('ronaldsc.06@gmail.com')
#print("Se envió un correo de reseteo para ronaldsc.06@gmail.com")

#crear ususarios
email = input("Ingrese Email : ")
password = input("Ingrese Password : ")

auth.create_user_with_email_and_password(email,password)
print("Usuario creado con exito")
