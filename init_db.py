import os,time
import psycopg2

conn = psycopg2.connect(
        host="database-1.cjiuanwvmbrn.ap-south-1.rds.amazonaws.com",
        database="admin",
        user='postgres',
        password='Leggo#2022')

# Open a cursor to perform database operations
cur = conn.cursor()
cur.execute('DROP TABLE IF EXISTS drivers;')
# Execute a command: this creates a new table
cur.execute('CREATE TABLE drivers (id serial PRIMARY KEY,'
                                 'driver_first_name varchar (50),'
                                 'email varchar (50),'
                                 'phone bigint,'
                                 'fleet varchar (50),'
                                 'online boolean,'
                                 'status boolean,'
                                 'last_seen date DEFAULT CURRENT_TIMESTAMP,'
                                 'created_date date DEFAULT CURRENT_TIMESTAMP,'
                                 'driver_last_name varchar (50),'
                                 'gender varchar (20),'
                                 'address varchar (100),'
                                 'city varchar (20),'
                                 'state varchar (20));'
                                 )

cur.execute('INSERT INTO drivers (driver_first_name, driver_last_name,email, phone, fleet, online, status)'
           'VALUES (%s, %s, %s, %s, %s,%s,%s)',
           ('Jaswanth',
            'Ponnusamy',
            'jaswanth@gmail.com',
            9856479834,
            'TN012379',
            False,
            True
            )
           )
time.sleep(5);
cur.execute('INSERT INTO drivers (driver_first_name, driver_last_name,email, phone, fleet, online, status)'
           'VALUES (%s, %s, %s, %s, %s,%s,%s)',
           ('Sivakumar',
            'Balaji',
            'sivakumar@gmail.com',
            6379243127,
            'TN012343',
            True,
            False
            )
           )

cur.execute('CREATE TABLE rides (id serial PRIMARY KEY,'
                                 'status integer,'
                                 'driver_name varchar (50),'
                                 'fleet varchar (50),'
                                 'last_seen date DEFAULT CURRENT_TIMESTAMP,'
                                 'distance bigint,'
                                 'address varchar (100),'
                                 'city varchar (20),'
                                 'PICKUP_TIME date);'
                                 )



conn.commit()

cur.close()
conn.close()