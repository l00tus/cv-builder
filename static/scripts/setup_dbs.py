import os
import sqlite3

os.makedirs("../../data", exist_ok=True)

cv_db_file = "../../data/cv.db"
users_db_file = "../../data/users.db"

conn_users = sqlite3.connect(users_db_file)
cursor_users = conn_users.cursor()

cursor_users.execute('''
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
)
''')

conn_users.commit()
conn_users.close()

conn_cv = sqlite3.connect(cv_db_file)
cursor_cv = conn_cv.cursor()

cursor_cv.execute('''
CREATE TABLE IF NOT EXISTS cvs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    pdf_data BLOB NOT NULL,
    tex_data TEXT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id)
)
''')

conn_cv.commit()
conn_cv.close()
