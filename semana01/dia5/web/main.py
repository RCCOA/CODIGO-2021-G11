from flask import Flask,render_template
from flask_mysqldb import MySQL


app = Flask(__name__)

#CONFIGURAR CONEXION CON BASE DE DATOS
app.config['MYSQL_HOST'] = 'bacxw0mypjsvrbglzvle-mysql.services.clever-cloud.com'
app.config['MYSQL_USER'] = 'u7jaldiaygbx17pz'
app.config['MYSQL_PASSWORD'] = 'tQAEcp9EQW1X8PHFdXEV' 
app.config['MYSQL_DB'] = 'bacxw0mypjsvrbglzvle'

mysql = MySQL(app)

@app.route('/')
def index():
    cursor = mysql.connection.cursor()
    cursor.execute('select id,sistema,procesador,memoria from computadoras')
    data = cursor.fetchall()
    cursor.close()
    
    print(data)
    
    context = {
        'data':data
    }
    
    return render_template('index.html',**context)

app.run(debug=True,port=4000)