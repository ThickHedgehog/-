import eel
import math

eel.init("web")


def inv(a):
    a = math.tan(a) - a
    return a


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


eel.start("index.html", size=(1000, 1000))
