function showDiv(divId1, divId2, element) {
    document.getElementById(divId1).style.display = element.value == 0 ? 'block' : 'none';
    document.getElementById(divId2).style.display = element.value == 1 ? 'block' : 'none';

    if (document.getElementById('hidden_div_1').style.display == 'none') {
        document.getElementById('kinematic_div').style.display = 'none';
        document.getElementById('power_div').style.display = 'none';
    }

    if (document.getElementById('hidden_div_2').style.display == 'none') {
        document.getElementById('kinematic_factor_div').style.display = 'none';
        document.getElementById('power_factor_div').style.display = 'none';
    }
}

async function CalcA() {
    let Z1 = document.getElementById("Quantity_Z1").value;
    let Z2 = document.getElementById("Quantity_Z2").value;
    let M = document.getElementById("Module_M").value;
    let b = document.getElementById("Angle_b").value;

    document.getElementById("AnswerA").innerHTML = "Длительное межосевое расстояние a = " + await eel.calc_a(Z1, Z2, M, b)();
}

async function CalcAt() {
    let b = document.getElementById("Angle_b").value;

    document.getElementById("AnswerAt").innerHTML = "Угол at = " + await eel.calc_at(b)();
}

async function CalcAtw() {
    let aw = document.getElementById("Distance_AW").value;
    let Z1 = document.getElementById("Quantity_Z1").value;
    let Z2 = document.getElementById("Quantity_Z2").value;
    let M = document.getElementById("Module_M").value;
    let b = document.getElementById("Angle_b").value;

    document.getElementById("AnswerAtw").innerHTML = "Угол atw = " + await eel.calc_atw(aw, Z1, Z2, M, b)();
}

async function CalcXe() {
    let aw = document.getElementById("Distance_AW").value;
    let Z1 = document.getElementById("Quantity_Z1").value;
    let Z2 = document.getElementById("Quantity_Z2").value;
    let M = document.getElementById("Module_M").value;
    let b = document.getElementById("Angle_b").value;

    document.getElementById("AnswerXe").innerHTML = "Коэффициент суммы смещений Xe = " + await eel.calc_xe(aw, Z1, Z2, M, b)();
}

function SelectedAngle(where, element) {
    let selected = element.id;

    document.getElementById(where).innerHTML = "Выбраны коэффициенты смещений " +
    document.getElementById(selected).value;
}

async function CalcAtw2() {
    let Xe = document.getElementById("Sum_Xe").value;
    let Z1 = document.getElementById("Tooth_z1").value;
    let Z2 = document.getElementById("Tooth_z2").value;
    let at = document.getElementById("Tooth_angle").value;

    document.getElementById("answer_awt").innerHTML = "Угол профиля зуба = " + await eel.calc_atw2(Xe, Z1, Z2, at)();
}

async function CalcAw() {
    let Xe = document.getElementById("Sum_Xe").value;
    let Z1 = document.getElementById("Tooth_z1").value;
    let Z2 = document.getElementById("Tooth_z2").value;
    let at = document.getElementById("Tooth_angle").value;
    let a = document.getElementById("Long_a").value;

    document.getElementById("answer_aw").innerHTML = "Межосевое расстояние = " + await eel.calc_aw(Xe, Z1, Z2, at, a)();
}

async function CalcD1_1() {
    let Z1 = document.getElementById("Quantity_Z1").value;
    let M = document.getElementById("Module_M").value;
    let b = document.getElementById("Angle_b").value;

    document.getElementById("AnswerD1").innerHTML = "Длительный диаметр шестерни = " + await eel.calc_d1(Z1, M, b)();
}

async function CalcD2_1() {
    let Z2 = document.getElementById("Quantity_Z2").value;
    let M = document.getElementById("Module_M").value;
    let b = document.getElementById("Angle_b").value;

    document.getElementById("AnswerD2").innerHTML = "Длительный диаметр колеса = " + await eel.calc_d2(Z2, M, b)();
}