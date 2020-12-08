import eel
import math
import sqlite3

eel.init("web")

db = sqlite3.connect("Database.db")
cur = db.cursor()
cur.execute("PRAGMA foreign_keys = on")
cur.execute("CREATE TABLE IF NOT EXISTS Knot(ID INT primary key)")
cur.execute("CREATE TABLE IF NOT EXISTS Broadcast(ID INT, aw REAL, a REAL, at REAL, atw REAL, d1 REAL, d2 REAL,"
            "dw1 REAL, dw2 REAL, y REAL, dy REAL, da1 REAL, da2 REAL, df1 REAL, df2 REAL,"
            "FOREIGN KEY (ID) REFERENCES Knot (ID) ON DELETE CASCADE ON UPDATE CASCADE)")
cur.execute("CREATE TABLE IF NOT EXISTS Detail(ID INT, z1 REAL, z2 REAL, m REAL, b REAL, a REAL, aw REAL, xe REAL,"
            "at REAL, u REAL, x1 REAL, x2 REAL,"
            "FOREIGN KEY (ID) REFERENCES Knot (ID) ON DELETE CASCADE ON UPDATE CASCADE)")

x1, x2 = 0, 0


def inv(a):
    a = math.tan(a) - a
    return a


@eel.expose
def count_id():
    with db:
        cur.execute("SELECT ID FROM Knot")
        ids = cur.fetchall()
    ids.reverse()
    if not ids:
        return 0
    else:
        return ids[0]


@eel.expose
def into_DB_Aw(id, A, At, Atw, Xe, D1_1, D2_1, Dw1_1, Dw2_1, Y_1, DY_1, Da1_1, Da2_1, Df1_1, Df2_1, z1, z2, m, b, aw,
               u):
    cur.execute(f"INSERT INTO Knot(ID) VALUES (?)", (id,))
    cur.execute(f"INSERT INTO Broadcast(ID, a, at, atw, d1, d2, dw1, dw2, y, dy, da1, da2, df1, df2) VALUES (?, ?, ?,"
                f"?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                (id, A, At, Atw, D1_1, D2_1, Dw1_1, Dw2_1, Y_1, DY_1, Da1_1, Da2_1, Df1_1, Df2_1))
    cur.execute(f"INSERT INTO Detail(ID, z1, z2, m, b, aw, xe, u, x1, x2) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                (id, z1, z2, m, b, aw, Xe, u, x1, x2))
    db.commit()


@eel.expose
def into_DB_X(id, Atw2, Aw, D1_2, D2_2, Dw1_2, Dw2_2, Y_2, DY_2, Da1_2, Da2_2, Df1_2, Df2_2, z1, z2, m, b, a, at, xe,
              u):
    cur.execute(f"INSERT INTO Knot(ID) VALUES (?)", (id,))
    cur.execute(f"INSERT INTO Broadcast(ID, aw, atw, d1, d2, dw1, dw2, y, dy, da1, da2, df1, df2) VALUES (?, ?, ?, ?,"
                f"?, ?, ?, ?, ?, ?, ?, ?, ?)",
                (id, Aw, Atw2, D1_2, D2_2, Dw1_2, Dw2_2, Y_2, DY_2, Da1_2, Da2_2, Df1_2, Df2_2))
    cur.execute(f"INSERT INTO Detail(ID, z1, z2, m, b, a, xe, at, u, x1, x2) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                (id, z1, z2, m, b, a, xe, at, u, x1, x2))
    db.commit()


@eel.expose
def select_x1_x2(num_btn):
    global x1, x2
    if num_btn == 1:
        x1 = 0
        x2 = 0
    elif num_btn == 2:
        x1 = 0.3
        x2 = -0.3
    elif num_btn == 3:
        x1 = 0.5
        x2 = 0.5


# Расчет при заданном aw
@eel.expose
def calc_a(z1, z2, m, b):
    z1 = float(z1)
    z2 = float(z2)
    m = float(m)
    b = float(b)
    a = (z1 + z2) * m * (2 * math.cos(b))
    return a


@eel.expose
def calc_at(b):
    b = float(b)
    at = math.tan(20) / math.cos(b)
    return at


@eel.expose
def calc_atw(aw, z1, z2, m, b):
    z1 = float(z1)
    z2 = float(z2)
    m = float(m)
    aw = float(aw)
    b = float(b)
    a = calc_a(z1, z2, m, b)
    at = calc_at(b)
    atw = (a / aw) * math.cos(at)
    return atw


@eel.expose
def calc_xe(aw, z1, z2, m, b):
    z1 = float(z1)
    z2 = float(z2)
    m = float(m)
    aw = float(aw)
    b = float(b)
    at = calc_at(b)
    atw = calc_atw(aw, z1, z2, m, b)
    xe = (z1 + z2) * (inv(atw) - inv(at)) / (2 * math.tan(20))
    return xe


# Расчет при заданных х1 и х2
@eel.expose
def calc_atw2(xe, z1, z2, at):
    z1 = float(z1)
    z2 = float(z2)
    xe = float(xe)
    at = float(at)
    atw = (2 * xe * math.tan(20) / (z1 + z2)) + inv(at)
    return atw


@eel.expose
def calc_aw(xe, z1, z2, at, a):
    z1 = float(z1)
    z2 = float(z2)
    xe = float(xe)
    at = float(at)
    a = float(a)
    atw = calc_atw2(xe, z1, z2, at)
    aw = a * math.cos(at) / math.cos(atw)
    return aw


# Расчет диаметров зубчатых колес
@eel.expose
def calc_d1(z1, m, b):
    z1 = float(z1)
    m = float(m)
    b = float(b)
    d1 = z1 * m / math.cos(b)
    return d1


@eel.expose
def calc_d2(z2, m, b):
    z2 = float(z2)
    m = float(m)
    b = float(b)
    d2 = z2 * m / math.cos(b)
    return d2


@eel.expose
def calc_dw1_1(aw, u):
    aw = float(aw)
    u = float(u)
    dw1 = 2 * aw / (u + 1)
    return dw1


@eel.expose
def calc_dw1_2(xe, z1, z2, at, a, u):
    z1 = float(z1)
    z2 = float(z2)
    xe = float(xe)
    at = float(at)
    a = float(a)
    u = float(u)
    aw = calc_aw(xe, z1, z2, at, a)
    dw1 = 2 * aw / (u + 1)
    return dw1


@eel.expose
def calc_dw2_1(aw, u):
    aw = float(aw)
    u = float(u)
    dw2 = 2 * aw * u * (u + 1)
    return dw2


@eel.expose
def calc_dw2_2(xe, z1, z2, at, a, u):
    z1 = float(z1)
    z2 = float(z2)
    xe = float(xe)
    at = float(at)
    a = float(a)
    u = float(u)
    aw = calc_aw(xe, z1, z2, at, a)
    dw2 = 2 * aw * u * (u + 1)
    return dw2


@eel.expose
def calc_y_1(aw, z1, z2, m, b):
    z1 = float(z1)
    z2 = float(z2)
    m = float(m)
    b = float(b)
    aw = float(aw)
    a = calc_a(z1, z2, m, b)
    y = (aw - a) / m
    return y


@eel.expose
def calc_y_2(xe, z1, z2, at, a, m):
    z1 = float(z1)
    z2 = float(z2)
    xe = float(xe)
    at = float(at)
    a = float(a)
    m = float(m)
    aw = calc_aw(xe, z1, z2, at, a)
    y = (aw - a) / m
    return y


@eel.expose
def calc_dy_1(aw, z1, z2, m, b):
    z1 = float(z1)
    z2 = float(z2)
    m = float(m)
    b = float(b)
    aw = float(aw)
    xe = calc_xe(aw, z1, z2, m, b)
    y = calc_y_1(aw, z1, z2, m, b)
    dy = xe - y
    return dy


@eel.expose
def calc_dy_2(xe, z1, z2, at, a, m):
    z1 = float(z1)
    z2 = float(z2)
    xe = float(xe)
    at = float(at)
    a = float(a)
    m = float(m)
    y = calc_y_2(xe, z1, z2, at, a, m)
    dy = xe - y
    return dy


@eel.expose
def calc_da1_1(aw, z1, z2, m, b):
    z1 = float(z1)
    z2 = float(z2)
    m = float(m)
    b = float(b)
    aw = float(aw)
    d1 = calc_d1(z1, m, b)
    dy = calc_dy_1(aw, z1, z2, m, b)
    da1 = d1 + 2 * (1 + x1 - dy) * m
    return da1


@eel.expose
def calc_da1_2(xe, z1, z2, at, a, m, b):
    z1 = float(z1)
    z2 = float(z2)
    xe = float(xe)
    at = float(at)
    a = float(a)
    b = float(b)
    m = float(m)
    d1 = calc_d1(z1, m, b)
    dy = calc_dy_2(xe, z1, z2, at, a, m)
    da1 = d1 + 2 * (1 + x1 - dy) * m
    return da1


@eel.expose
def calc_da2_1(aw, z1, z2, m, b):
    z1 = float(z1)
    z2 = float(z2)
    m = float(m)
    b = float(b)
    aw = float(aw)
    d2 = calc_d2(z2, m, b)
    dy = calc_dy_1(aw, z1, z2, m, b)
    da2 = d2 + 2 * (1 + x2 - dy) * m
    return da2


@eel.expose
def calc_da2_2(xe, z1, z2, at, a, m, b):
    z1 = float(z1)
    z2 = float(z2)
    xe = float(xe)
    at = float(at)
    a = float(a)
    m = float(m)
    b = float(b)
    d2 = calc_d2(z2, m, b)
    dy = calc_dy_2(xe, z1, z2, at, a, m)
    da2 = d2 + 2 * (1 + x2 - dy) * m
    return da2


@eel.expose
def calc_df1(z1, m, b):
    m = float(m)
    z1 = float(z1)
    b = float(b)
    d1 = calc_d1(z1, m, b)
    df1 = d1 - 2 * (1.25 - x1) * m
    return df1


@eel.expose
def calc_df2(z2, m, b):
    m = float(m)
    z2 = float(z2)
    b = float(b)
    d2 = calc_d2(z2, m, b)
    df2 = d2 - 2 * (1.25 - x2) * m
    return df2


eel.start("index.html", size=(1000, 1000))
