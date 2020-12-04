import eel
import math

eel.init("web")


def inv(a):
    a = math.tan(a) - a
    return a


x1, x2 = 0, 0


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
        x2 = -0.5


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
    y = (aw - a) * m
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
    y = (aw - a) * m
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
