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

async function CalcD1_2() {
    let Z1 = document.getElementById("Tooth_z1").value;
    let M = document.getElementById("Module_M2").value;
    let b = document.getElementById("Angle_b2").value;

    document.getElementById("AnswerD1_2").innerHTML = "Длительный диаметр шестерни = " + await eel.calc_d1(Z1, M, b)();
}

async function CalcD2_2() {
    let Z2 = document.getElementById("Tooth_z2").value;
    let M = document.getElementById("Module_M2").value;
    let b = document.getElementById("Angle_b2").value;

    document.getElementById("AnswerD2_2").innerHTML = "Длительный диаметр колеса = " + await eel.calc_d2(Z2, M, b)();
}

async function CalcDw1_1() {
    let aw = document.getElementById("Distance_AW").value;
    let u = document.getElementById("Count_u").value;

    document.getElementById("AnswerDw1").innerHTML = "Начальный диаметр шестерни = " + await eel.calc_dw1_1(aw, u)();
}

async function CalcDw2_1() {
    let aw = document.getElementById("Distance_AW").value;
    let u = document.getElementById("Count_u").value;

    document.getElementById("AnswerDw2").innerHTML = "Начальный диаметр колеса = " + await eel.calc_dw2_1(aw, u)();
}

async function CalcDw1_2() {
    let xe = document.getElementById("Sum_Xe").value;
    let u = document.getElementById("Count_u2").value;
    let z1 = document.getElementById("Tooth_z1").value;
    let z2 = document.getElementById("Tooth_z2").value;
    let a = document.getElementById("Long_a").value;
    let at = document.getElementById("Tooth_angle").value;

    document.getElementById("AnswerDw1_2").innerHTML = "Начальный диаметр шестерни = " + await eel.calc_dw1_2(xe, z1, z2, at, a, u)();
}

async function CalcDw2_2() {
    let xe = document.getElementById("Sum_Xe").value;
    let u = document.getElementById("Count_u2").value;
    let z1 = document.getElementById("Tooth_z1").value;
    let z2 = document.getElementById("Tooth_z2").value;
    let a = document.getElementById("Long_a").value;
    let at = document.getElementById("Tooth_angle").value;

    document.getElementById("AnswerDw2_2").innerHTML = "Начальный диаметр колеса = " + await eel.calc_dw2_2(xe, z1, z2, at, a, u)();
}

async function CalcY_1() {
    let aw = document.getElementById("Distance_AW").value;
    let z1 = document.getElementById("Quantity_Z1").value;
    let z2 = document.getElementById("Quantity_Z2").value;
    let m = document.getElementById("Module_M").value;
    let b = document.getElementById("Angle_b").value;

    document.getElementById("Answer_y").innerHTML = "Коэффициент воспринимаемого смещения = " + await eel.calc_y_1(aw, z1, z2, m, b)();
}

async function CalcDY_1() {
    let aw = document.getElementById("Distance_AW").value;
    let z1 = document.getElementById("Quantity_Z1").value;
    let z2 = document.getElementById("Quantity_Z2").value;
    let m = document.getElementById("Module_M").value;
    let b = document.getElementById("Angle_b").value;

    document.getElementById("Answer_dy").innerHTML = "Коэффициент уравнительного смещения = " + await eel.calc_dy_1(aw, z1, z2, m, b)();
}

async function CalcY_2() {
    let xe = document.getElementById("Sum_Xe").value;
    let m = document.getElementById("Module_M2").value;
    let z1 = document.getElementById("Tooth_z1").value;
    let z2 = document.getElementById("Tooth_z2").value;
    let a = document.getElementById("Long_a").value;
    let at = document.getElementById("Tooth_angle").value;

    document.getElementById("Answer_y_2").innerHTML = "Коэффициент воспринимаемого смещения = " + await eel.calc_y_2(xe, z1, z2, at, a, m)();
}

async function CalcDY_2() {
    let xe = document.getElementById("Sum_Xe").value;
    let m = document.getElementById("Module_M2").value;
    let z1 = document.getElementById("Tooth_z1").value;
    let z2 = document.getElementById("Tooth_z2").value;
    let a = document.getElementById("Long_a").value;
    let at = document.getElementById("Tooth_angle").value;

    document.getElementById("Answer_dy_2").innerHTML = "Коэффициент уравнительного смещения = " + await eel.calc_dy_2(xe, z1, z2, at, a, m)();
}

async function SelectX(element) {
    let selected = element.id;
    if (selected == 'Kinematic_btn1' || selected == 'Power_btn1' || selected == 'Kinematic_factor_btn1' || selected == 'Power_factor_btn1') {
        await eel.select_x1_x2(1)();
    }
    if (selected == 'Kinematic_btn2' || selected == 'Power_btn2' || selected == 'Kinematic_factor_btn2' || selected == 'Power_factor_btn2') {
        await eel.select_x1_x2(2)();
    }
    if (selected == 'Power_btn3' || selected == 'Power_factor_btn3') {
        await eel.select_x1_x2(3)();
    }
}

async function CalcDa1_1() {
    let aw = document.getElementById("Distance_AW").value;
    let z1 = document.getElementById("Quantity_Z1").value;
    let z2 = document.getElementById("Quantity_Z2").value;
    let m = document.getElementById("Module_M").value;
    let b = document.getElementById("Angle_b").value;

    document.getElementById("Answer_da1").innerHTML = "Диаметр вершин зубьев шестерни = " + await eel.calc_da1_1(aw, z1, z2, m, b)();
}

async function CalcDa2_1() {
    let aw = document.getElementById("Distance_AW").value;
    let z1 = document.getElementById("Quantity_Z1").value;
    let z2 = document.getElementById("Quantity_Z2").value;
    let m = document.getElementById("Module_M").value;
    let b = document.getElementById("Angle_b").value;

    document.getElementById("Answer_da2").innerHTML = "Диаметр вершин зубьев колеса = " + await eel.calc_da2_1(aw, z1, z2, m, b)();
}

async function CalcDf1_1() {
    let z1 = document.getElementById("Quantity_Z1").value;
    let m = document.getElementById("Module_M").value;
    let b = document.getElementById("Angle_b").value;

    document.getElementById("Answer_df1").innerHTML = "Диаметр впадин зубьев шестерни = " + await eel.calc_df1(z1, m, b)();
}

async function CalcDf2_1() {
    let z2 = document.getElementById("Quantity_Z2").value;
    let m = document.getElementById("Module_M").value;
    let b = document.getElementById("Angle_b").value;

    document.getElementById("Answer_df2").innerHTML = "Диаметр впадин зубьев колеса = " + await eel.calc_df2(z2, m, b)();
}

async function CalcDa1_2() {
    let xe = document.getElementById("Sum_Xe").value;
    let m = document.getElementById("Module_M2").value;
    let z1 = document.getElementById("Tooth_z1").value;
    let z2 = document.getElementById("Tooth_z2").value;
    let a = document.getElementById("Long_a").value;
    let at = document.getElementById("Tooth_angle").value;
    let b = document.getElementById("Angle_b2").value;

    document.getElementById("Answer_da1_2").innerHTML = "Диаметр вершин зубьев шестерни = " + await eel.calc_da1_2(xe, z1, z2, at, a, m, b)();
}

async function CalcDa2_2() {
    let xe = document.getElementById("Sum_Xe").value;
    let m = document.getElementById("Module_M2").value;
    let z1 = document.getElementById("Tooth_z1").value;
    let z2 = document.getElementById("Tooth_z2").value;
    let a = document.getElementById("Long_a").value;
    let at = document.getElementById("Tooth_angle").value;
    let b = document.getElementById("Angle_b2").value;

    document.getElementById("Answer_da2_2").innerHTML = "Диаметр вершин зубьев колеса = " + await eel.calc_da2_2(xe, z1, z2, at, a, m, b)();
}

async function CalcDf1_2() {
   let z1 = document.getElementById("Tooth_z1").value;
    let m = document.getElementById("Module_M2").value;
    let b = document.getElementById("Angle_b2").value;

    document.getElementById("Answer_df1_2").innerHTML = "Диаметр впадин зубьев шестерни = " + await eel.calc_df1(z1, m, b)();
}

async function CalcDf2_2() {
    let z2 = document.getElementById("Tooth_z2").value;
    let m = document.getElementById("Module_M2").value;
    let b = document.getElementById("Angle_b2").value;

    document.getElementById("Answer_df2_2").innerHTML = "Диаметр впадин зубьев колеса = " + await eel.calc_df2(z2, m, b)();
}