from tkinter import *
from tkinter import messagebox

def saludar():
    messagebox.showinfo("Bienvenido","Hola " + txtNombre.get())

app = Tk()
app.title('Mi primera interfaz')
app.geometry('280x60')
#CREAMOS UN FRAME
frame = LabelFrame(app,text='Frame')
frame.grid(row=0,column=0,columnspan=3,pady=10)
lbNombre = Label(frame,text='Nombre :')
lbNombre.grid(row=1,column=0)
txtNombre = Entry(frame)
txtNombre.grid(row=1,column=1)
btnSaludo = Button(frame,text='saludar',command=saludar)
btnSaludo.grid(row=1,column=2)
app.mainloop()

# para ver mysql
# https://www.youtube.com/clubprog
