from flask import Flask, make_response, request
from flask import render_template
from flask import jsonify
import psycopg2


def get_db_connection():
    conn = psycopg2.connect(
        host="database-1.cjiuanwvmbrn.ap-south-1.rds.amazonaws.com",
        database="admin",
        user='postgres',
        password='Leggo#2022')

    return conn

app = Flask(__name__,static_folder='static/')

@app.route("/")
def hello_world():
    return render_template("static/index.html")

@app.route("/drivers", methods=["GET"])
def get_all_drivers():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('SELECT * FROM drivers;')
    data = cur.fetchall()
    users = []
    for i in range(len(data)):
        users.insert(i,{"DRIVER_ID":data[i][0],"DRIVER_NAME":data[i][1],"E_MAIL":data[i][2],"PH_NO":data[i][3],"FLEET":data[i][4],"ONLINE":data[i][5],"LAST_SEEN":data[i][7],"CREATED_DATE":data[i][8],"STATUS":data[i][6]})
    response = make_response(jsonify(DATA=users))
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response

@app.route("/addDriver", methods=["POST"])
def add_driver():
    first_name = request.form.get('first_name')
    print(request.form)
    print(request.files['photo'])
    last_name = request.form.get('last_name')
    phone = request.form.get('phone')
    email = request.form.get('email')
    gender = request.form.get('gender')
    dob = request.form.get('dob')
    address = request.form.get('address')
    city = request.form.get('city')
    state = request.form.get('state')
    fleet = request.form.get('vehicle_number')
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('INSERT INTO drivers (driver_first_name, driver_last_name,email, phone, fleet,gender,address,city,state)'
           'VALUES (%s, %s, %s, %s, %s,%s,%s,%s,%s)',
           (first_name,
            last_name,
            email,
            phone,
            fleet,
            gender,
            address,
            city,
            state
            )
           )
    conn.commit()
    cur.close()
    conn.close()
    response = make_response(jsonify(status=200,message="Data has been added"))
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response   


@app.route("/deleteDriver", methods=["POST"])
def delete_driver():
    driver_id = request.form.get('id')
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute(f'DELETE FROM drivers WHERE id ={driver_id}')
    conn.commit()
    cur.close()
    response = make_response(jsonify(status=200,message="Data has been deleted"))
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response


@app.route("/add/ride", methods=["POST"])
def start_ride():
    driver_name = request.form.get("driver")
    userInfo = request.form.get("user_info")
    pickupTime = request.form.get("pickup_time")
    conn = get_db_connection()
    # cur = conn.cursor()
    # cur.execute('INSERT INTO drivers (driver_first_name, driver_last_name,email, phone, fleet,gender,address,city,state)'
    #        'VALUES (%s, %s, %s, %s, %s,%s,%s,%s,%s)',
    #        (first_name,
    #         last_name,
    #         email,s
    #         phone,
    #         fleet,
    #         gender,
    #         address,
    #         city,
    #         state
    #         )
    #        )
    # conn.commit()
    # cur.close()
    # conn.close()

