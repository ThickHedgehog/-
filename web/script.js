let flagA = false;
let flagAt = false;
let flagAt_2 = false;
let flagAtw = false;
let flagXe = false;
let flagAtw2 = false;
let flagAw = false;
let flagD1_1 = false;
let flagD1_2 = false;
let flagD2_1 = false;
let flagD2_2 = false;
let flagDw1_1 = false;
let flagDw1_2 = false;
let flagDw2_1 = false;
let flagDw2_2 = false;
let flagY_1 = false;
let flagY_2 = false;
let flagDY_1 = false;
let flagDY_2 = false;
let flagDa1_1 = false;
let flagDa1_2 = false;
let flagDa2_1 = false;
let flagDa2_2 = false;
let flagDf1_1 = false;
let flagDf1_2 = false;
let flagDf2_1 = false;
let flagDf2_2 = false;
let ID = 0;
let A, At, At_2, Atw, Xe, Atw2, Aw, D1_1, D1_2, D2_1, D2_2, Dw1_1, Dw1_2, Dw2_1, Dw2_2, Y_1, Y_2, DY_1, DY_2, Da1_1,
Da1_2, Da2_1, Da2_2, Df1_1, Df1_2, Df2_1, Df2_2;

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

function SelectedAngle(where, element) {
    let selected = element.id;

    document.getElementById(where).innerHTML = "Выбраны коэффициенты смещений " +
    document.getElementById(selected).value;
}

async function CalcA() {
    let Z1 = document.getElementById("Quantity_Z1").value;
    let Z2 = document.getElementById("Quantity_Z2").value;
    let M = document.getElementById("Module_M").value;
    let b = document.getElementById("Angle_b").value;

    A = await eel.calc_a(Z1, Z2, M, b)();

    document.getElementById("AnswerA").innerHTML = "Длительное межосевое расстояние a = " + A;
    flagA = true;
}

async function CalcAt() {
    let b = document.getElementById("Angle_b").value;

    At = await eel.calc_at(b)();

    document.getElementById("AnswerAt").innerHTML = "Угол at = " + At;
    flagAt = true;
}

async function CalcAtw() {
    let aw = document.getElementById("Distance_AW").value;
    let Z1 = document.getElementById("Quantity_Z1").value;
    let Z2 = document.getElementById("Quantity_Z2").value;
    let M = document.getElementById("Module_M").value;
    let b = document.getElementById("Angle_b").value;

    Atw = await eel.calc_atw(aw, Z1, Z2, M, b)();

    document.getElementById("AnswerAtw").innerHTML = "Угол atw = " + Atw;
    flagAtw = true;
}

async function CalcXe() {
    let aw = document.getElementById("Distance_AW").value;
    let Z1 = document.getElementById("Quantity_Z1").value;
    let Z2 = document.getElementById("Quantity_Z2").value;
    let M = document.getElementById("Module_M").value;
    let b = document.getElementById("Angle_b").value;

    Xe = await eel.calc_xe(aw, Z1, Z2, M, b)();

    document.getElementById("AnswerXe").innerHTML = "Коэффициент суммы смещений Xe = " + Xe;
    flagXe = true;
}

async function CalcAtw2() {
    let Xe = document.getElementById("Sum_Xe").value;
    let Z1 = document.getElementById("Tooth_z1").value;
    let Z2 = document.getElementById("Tooth_z2").value;
    let at = document.getElementById("Tooth_angle").value;

    Atw2 = await eel.calc_atw2(Xe, Z1, Z2, at)();

    document.getElementById("answer_awt").innerHTML = "Угол atw = " + Atw2;
    flagAtw2 = true;
}

async function CalcAw() {
    let Xe = document.getElementById("Sum_Xe").value;
    let Z1 = document.getElementById("Tooth_z1").value;
    let Z2 = document.getElementById("Tooth_z2").value;
    let at = document.getElementById("Tooth_angle").value;
    let a = document.getElementById("Long_a").value;

    Aw = await eel.calc_aw(Xe, Z1, Z2, at, a)();

    document.getElementById("answer_aw").innerHTML = "Межосевое расстояние = " + Aw;
    flagAw = true;
}

async function CalcD1_1() {
    let Z1 = document.getElementById("Quantity_Z1").value;
    let M = document.getElementById("Module_M").value;
    let b = document.getElementById("Angle_b").value;

    D1_1 = await eel.calc_d1(Z1, M, b)();

    document.getElementById("AnswerD1").innerHTML = "Длительный диаметр шестерни = " + D1_1;
    flagD1_1 = true;
}

async function CalcD2_1() {
    let Z2 = document.getElementById("Quantity_Z2").value;
    let M = document.getElementById("Module_M").value;
    let b = document.getElementById("Angle_b").value;

    D2_1 = await eel.calc_d2(Z2, M, b)();

    document.getElementById("AnswerD2").innerHTML = "Длительный диаметр колеса = " + D2_1;
    flagD2_1 = true;
}

async function CalcD1_2() {
    let Z1 = document.getElementById("Tooth_z1").value;
    let M = document.getElementById("Module_M2").value;
    let b = document.getElementById("Angle_b2").value;

    D1_2 = await eel.calc_d1(Z1, M, b)();

    document.getElementById("AnswerD1_2").innerHTML = "Длительный диаметр шестерни = " + D1_2;
    flagD1_2 = true;
}

async function CalcD2_2() {
    let Z2 = document.getElementById("Tooth_z2").value;
    let M = document.getElementById("Module_M2").value;
    let b = document.getElementById("Angle_b2").value;

    D2_2 = await eel.calc_d2(Z2, M, b)();

    document.getElementById("AnswerD2_2").innerHTML = "Длительный диаметр колеса = " + D2_2;
    flagD2_2 = true;
}

async function CalcDw1_1() {
    let aw = document.getElementById("Distance_AW").value;
    let u = document.getElementById("Count_u").value;

    Dw1_1 = await eel.calc_dw1_1(aw, u)();

    document.getElementById("AnswerDw1").innerHTML = "Начальный диаметр шестерни = " + Dw1_1;
    flagDw1_1 = true;
}

async function CalcDw2_1() {
    let aw = document.getElementById("Distance_AW").value;
    let u = document.getElementById("Count_u").value;

    Dw2_1 = await eel.calc_dw2_1(aw, u)();

    document.getElementById("AnswerDw2").innerHTML = "Начальный диаметр колеса = " + Dw2_1;
    flagDw2_1 = true;
}

async function CalcDw1_2() {
    let xe = document.getElementById("Sum_Xe").value;
    let u = document.getElementById("Count_u2").value;
    let z1 = document.getElementById("Tooth_z1").value;
    let z2 = document.getElementById("Tooth_z2").value;
    let a = document.getElementById("Long_a").value;
    let at = document.getElementById("Tooth_angle").value;

    Dw1_2 = await eel.calc_dw1_2(xe, z1, z2, at, a, u)();

    document.getElementById("AnswerDw1_2").innerHTML = "Начальный диаметр шестерни = " + Dw1_2;
    flagDw1_2 = true;
}

async function CalcDw2_2() {
    let xe = document.getElementById("Sum_Xe").value;
    let u = document.getElementById("Count_u2").value;
    let z1 = document.getElementById("Tooth_z1").value;
    let z2 = document.getElementById("Tooth_z2").value;
    let a = document.getElementById("Long_a").value;
    let at = document.getElementById("Tooth_angle").value;

    Dw2_2 = await eel.calc_dw2_2(xe, z1, z2, at, a, u)();

    document.getElementById("AnswerDw2_2").innerHTML = "Начальный диаметр колеса = " + Dw2_2;
    flagDw2_2 = true;
}

async function CalcY_1() {
    let aw = document.getElementById("Distance_AW").value;
    let z1 = document.getElementById("Quantity_Z1").value;
    let z2 = document.getElementById("Quantity_Z2").value;
    let m = document.getElementById("Module_M").value;
    let b = document.getElementById("Angle_b").value;

    Y_1 = await eel.calc_y_1(aw, z1, z2, m, b)();

    document.getElementById("Answer_y").innerHTML = "Коэффициент воспринимаемого смещения = " + Y_1;
    flagY_1 = true;
}

async function CalcDY_1() {
    let aw = document.getElementById("Distance_AW").value;
    let z1 = document.getElementById("Quantity_Z1").value;
    let z2 = document.getElementById("Quantity_Z2").value;
    let m = document.getElementById("Module_M").value;
    let b = document.getElementById("Angle_b").value;

    DY_1 = await eel.calc_dy_1(aw, z1, z2, m, b)();

    document.getElementById("Answer_dy").innerHTML = "Коэффициент уравнительного смещения = " + DY_1;
    flagDY_1 = true;
}

async function CalcY_2() {
    let xe = document.getElementById("Sum_Xe").value;
    let m = document.getElementById("Module_M2").value;
    let z1 = document.getElementById("Tooth_z1").value;
    let z2 = document.getElementById("Tooth_z2").value;
    let a = document.getElementById("Long_a").value;
    let at = document.getElementById("Tooth_angle").value;

    Y_2 = await eel.calc_y_2(xe, z1, z2, at, a, m)();

    document.getElementById("Answer_y_2").innerHTML = "Коэффициент воспринимаемого смещения = " + Y_2;
    flagY_2 = true;
}

async function CalcDY_2() {
    let xe = document.getElementById("Sum_Xe").value;
    let m = document.getElementById("Module_M2").value;
    let z1 = document.getElementById("Tooth_z1").value;
    let z2 = document.getElementById("Tooth_z2").value;
    let a = document.getElementById("Long_a").value;
    let at = document.getElementById("Tooth_angle").value;

    DY_2 = await eel.calc_dy_2(xe, z1, z2, at, a, m)();

    document.getElementById("Answer_dy_2").innerHTML = "Коэффициент уравнительного смещения = " + DY_2;
    flagDY_2 = true;
}

async function SelectX(element) {
    let selected = element.id;
    if (selected == 'Kinematic_btn1' || selected == 'Power_btn1' || selected == 'Kinematic_factor_btn1' ||
    selected == 'Power_factor_btn1') {
        await eel.select_x1_x2(1)();
    }
    if (selected == 'Kinematic_btn2' || selected == 'Power_btn2' || selected == 'Kinematic_factor_btn2' ||
    selected == 'Power_factor_btn2') {
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

    Da1_1 = await eel.calc_da1_1(aw, z1, z2, m, b)();

    document.getElementById("Answer_da1").innerHTML = "Диаметр вершин зубьев шестерни = " + Da1_1;
    flagDa1_1 = true;
}

async function CalcDa2_1() {
    let aw = document.getElementById("Distance_AW").value;
    let z1 = document.getElementById("Quantity_Z1").value;
    let z2 = document.getElementById("Quantity_Z2").value;
    let m = document.getElementById("Module_M").value;
    let b = document.getElementById("Angle_b").value;

    Da2_1 = await eel.calc_da2_1(aw, z1, z2, m, b)();

    document.getElementById("Answer_da2").innerHTML = "Диаметр вершин зубьев колеса = " + Da2_1;
    flagDa2_1 = true;
}

async function CalcDf1_1() {
    let z1 = document.getElementById("Quantity_Z1").value;
    let m = document.getElementById("Module_M").value;
    let b = document.getElementById("Angle_b").value;

    Df1_1 = await eel.calc_df1(z1, m, b)();

    document.getElementById("Answer_df1").innerHTML = "Диаметр впадин зубьев шестерни = " + Df1_1;
    flagDf1_1 = true;
}

async function CalcDf2_1() {
    let z2 = document.getElementById("Quantity_Z2").value;
    let m = document.getElementById("Module_M").value;
    let b = document.getElementById("Angle_b").value;

    Df2_1 = await eel.calc_df2(z2, m, b)();

    document.getElementById("Answer_df2").innerHTML = "Диаметр впадин зубьев колеса = " + Df2_1;
    flagDf2_1 = true;
}

async function CalcDa1_2() {
    let xe = document.getElementById("Sum_Xe").value;
    let m = document.getElementById("Module_M2").value;
    let z1 = document.getElementById("Tooth_z1").value;
    let z2 = document.getElementById("Tooth_z2").value;
    let a = document.getElementById("Long_a").value;
    let at = document.getElementById("Tooth_angle").value;
    let b = document.getElementById("Angle_b2").value;

    Da1_2 = await eel.calc_da1_2(xe, z1, z2, at, a, m, b)();

    document.getElementById("Answer_da1_2").innerHTML = "Диаметр вершин зубьев шестерни = " + Da1_2;
    flagDa1_2 = true;
}

async function CalcDa2_2() {
    let xe = document.getElementById("Sum_Xe").value;
    let m = document.getElementById("Module_M2").value;
    let z1 = document.getElementById("Tooth_z1").value;
    let z2 = document.getElementById("Tooth_z2").value;
    let a = document.getElementById("Long_a").value;
    let at = document.getElementById("Tooth_angle").value;
    let b = document.getElementById("Angle_b2").value;

    Da2_2 = await eel.calc_da2_2(xe, z1, z2, at, a, m, b)();

    document.getElementById("Answer_da2_2").innerHTML = "Диаметр вершин зубьев колеса = " + Da2_2;
    flagDa2_2 = true;
}

async function CalcDf1_2() {
   let z1 = document.getElementById("Tooth_z1").value;
    let m = document.getElementById("Module_M2").value;
    let b = document.getElementById("Angle_b2").value;

    Df1_2 = await eel.calc_df1(z1, m, b)();

    document.getElementById("Answer_df1_2").innerHTML = "Диаметр впадин зубьев шестерни = " + Df1_2;
    flagDf1_2 = true;
}

async function CalcDf2_2() {
    let z2 = document.getElementById("Tooth_z2").value;
    let m = document.getElementById("Module_M2").value;
    let b = document.getElementById("Angle_b2").value;

    Df2_2 = await eel.calc_df2(z2, m, b)();

    document.getElementById("Answer_df2_2").innerHTML = "Диаметр впадин зубьев колеса = " + Df2_2;
    flagDf2_2 = true;
}

async function CreateDB_1() {
    let DB_count = await eel.count_id()();
    let DB_Broadcast = await eel.DB_to_JS_1(0)();
    if (flagA && flagAt && flagAtw && flagXe && flagD1_1 && flagD2_1 && flagDw1_1 && flagDw2_1 && flagY_1 &&
    flagDY_1 && flagDa1_1 && flagDa2_1 && flagDf1_1 && flagDf2_1) {
        flagA = false;
        flagAt = false;
        flagAtw = false;
        flagXe = false;
        flagD1_1 = false;
        flagD2_1 = false;
        flagDw1_1 = false;
        flagDw2_1 = false;
        flagY_1 = false;
        flagDY_1 = false;
        flagDa1_1 = false;
        flagDa2_1 = false;
        flagDf1_1 = false;
        flagDf2_1 = false;

        ID++;
        for (i = 0; i < DB_count; i++) {
            if (ID == DB_Broadcast[i][0]) {
                ID++;
            }
        }

        z1 = document.getElementById("Quantity_Z1").value;
        z2 = document.getElementById("Quantity_Z2").value;
        m = document.getElementById("Module_M").value;
        b = document.getElementById("Angle_b").value;
        aw = document.getElementById("Distance_AW").value;
        u = document.getElementById("Count_u").value;

        document.getElementById("AnswerA").innerHTML = "";
        document.getElementById("AnswerAt").innerHTML = "";
        document.getElementById("AnswerAtw").innerHTML = "";
        document.getElementById("AnswerXe").innerHTML = "";
        document.getElementById("AnswerD1").innerHTML = "";
        document.getElementById("AnswerD2").innerHTML = "";
        document.getElementById("AnswerDw1").innerHTML = "";
        document.getElementById("AnswerDw2").innerHTML = "";
        document.getElementById("Answer_y").innerHTML = "";
        document.getElementById("Answer_dy").innerHTML = "";
        document.getElementById("Answer_da1").innerHTML = "";
        document.getElementById("Answer_da2").innerHTML = "";
        document.getElementById("Answer_df1").innerHTML = "";
        document.getElementById("Answer_df2").innerHTML = "";

        document.getElementById("Quantity_Z1").value = "";
        document.getElementById("Quantity_Z2").value = "";
        document.getElementById("Module_M").value = "";
        document.getElementById("Angle_b").value = "";
        document.getElementById("Distance_AW").value = "";
        document.getElementById("Count_u").value = "";

        document.getElementById("Answer_DB_Error_1").innerHTML = "";

        await eel.into_DB_Aw(ID, A, At, Atw, Xe, D1_1, D2_1, Dw1_1, Dw2_1, Y_1, DY_1, Da1_1, Da2_1, Df1_1, Df2_1,
        z1, z2, m, b, aw, u)();
    }
    else {
        document.getElementById("Answer_DB_Error_1").innerHTML = "Перед созданием базы данных выполните все расчеты";
    }
}

async function CreateDB_2() {
    let DB_count = await eel.count_id()();
    let DB_Broadcast = await eel.DB_to_JS_1(0)();
    if (flagAtw2 && flagAw && flagD1_2 && flagD2_2 && flagDw1_2 && flagDw2_2 && flagY_2 &&
    flagDY_2 && flagDa1_2 && flagDa2_2 && flagDf1_2 && flagDf2_2) {
        flagAtw2 = false;
        flagAw = false;
        flagD1_2 = false;
        flagD2_2 = false;
        flagDw1_2 = false;
        flagDw2_2 = false;
        flagY_2 = false;
        flagDY_2 = false;
        flagDa1_2 = false;
        flagDa2_2 = false;
        flagDf1_2 = false;
        flagDf2_2 = false;

        ID++;
        for (i = 0; i < DB_count; i++) {
            if (ID == DB_Broadcast[i][0]) {
                ID++;
            }
        }

        z1 = document.getElementById("Tooth_z1").value;
        z2 = document.getElementById("Tooth_z2").value;
        m = document.getElementById("Module_M2").value;
        b = document.getElementById("Angle_b2").value;
        a = document.getElementById("Long_a").value;
        at = document.getElementById("Tooth_angle").value;
        xe = document.getElementById("Sum_Xe").value;
        u = document.getElementById("Count_u2").value;

        document.getElementById("answer_aw").innerHTML = "";
        document.getElementById("answer_awt").innerHTML = "";
        document.getElementById("AnswerD1_2").innerHTML = "";
        document.getElementById("AnswerD2_2").innerHTML = "";
        document.getElementById("AnswerDw1_2").innerHTML = "";
        document.getElementById("AnswerDw2_2").innerHTML = "";
        document.getElementById("Answer_y_2").innerHTML = "";
        document.getElementById("Answer_dy_2").innerHTML = "";
        document.getElementById("Answer_da1_2").innerHTML = "";
        document.getElementById("Answer_da2_2").innerHTML = "";
        document.getElementById("Answer_df1_2").innerHTML = "";
        document.getElementById("Answer_df2_2").innerHTML = "";

        document.getElementById("Tooth_z1").value = "";
        document.getElementById("Tooth_z2").value = "";
        document.getElementById("Module_M2").value = "";
        document.getElementById("Angle_b2").value = "";
        document.getElementById("Long_a").value = "";
        document.getElementById("Tooth_angle").value = "";
        document.getElementById("Sum_Xe").value = "";
        document.getElementById("Count_u2").value = "";

        document.getElementById("Answer_DB_Error_2").innerHTML = "";

        await eel.into_DB_X(ID, Atw2, Aw, D1_2, D2_2, Dw1_2, Dw2_2, Y_2, DY_2, Da1_2, Da2_2, Df1_2, Df2_2, z1,
        z2, m, b, a, at, xe, u)();
    }
    else {
        document.getElementById("Answer_DB_Error_2").innerHTML = "Перед созданием базы данных выполните все расчеты";
    }
}


async function DeleteFromDB(selected, error) {
    let DB_count = await eel.count_id()();
    id = document.getElementById(selected).value;
    let DB_Broadcast = await eel.DB_to_JS_1(0)();
    let flagSelected = true;

    for (i = 0; i < DB_count; i++) {
        if (id == DB_Broadcast[i][0]) {
            flagSelected = false;
        }
    }
    if (flagSelected) {
        document.getElementById(error).innerHTML = "Такого номера не существует";
    }
    else {
        document.getElementById(error).innerHTML = "";
        await eel.delete_from_DB(id);
    }
}

async function PrintDB(sort) {
    let DB_count = await eel.count_id()();
    let DB_Broadcast = await eel.DB_to_JS_1(sort)();
    let DB_Detail = await eel.DB_to_JS_2()();
    let tableArr=['<table class = "DB_table"'];
    if (DB_count > 0) {
        tableArr.push('<tr>');
        tableArr.push('<td> ID </td>');
        tableArr.push('<td> Aw </td>');
        tableArr.push('<td> a </td>');
        tableArr.push('<td> At </td>');
        tableArr.push('<td> Atw </td>');
        tableArr.push('<td> d1 </td>');
        tableArr.push('<td> d2 </td>');
        tableArr.push('<td> dw1 </td>');
        tableArr.push('<td> dw2 </td>');
        tableArr.push('<td> y </td>');
        tableArr.push('<td> dy </td>');
        tableArr.push('<td> da1 </td>');
        tableArr.push('<td> da2 </td>');
        tableArr.push('<td> df1 </td>');
        tableArr.push('<td> df2 </td>');
        tableArr.push('<td> z1 </td>');
        tableArr.push('<td> z2 </td>');
        tableArr.push('<td> m </td>');
        tableArr.push('<td> b </td>');
        tableArr.push('<td> a </td>');
        tableArr.push('<td> aw </td>');
        tableArr.push('<td> xe </td>');
        tableArr.push('<td> at </td>');
        tableArr.push('<td> u </td>');
        tableArr.push('<td> x1 </td>');
        tableArr.push('<td> x2 </td>');
        tableArr.push('</tr>');
    }
    for (i = 0; i < DB_count; i++) {
        tableArr.push('<tr>');
        for (j = 0; j < 15; j++){
            if (DB_Broadcast[i][j] == null) {
                tableArr.push('<td> - </td>');
            }
            else {
                tableArr.push('<td>' + DB_Broadcast[i][j] + '</td>');
            }
        }
        for (k = 0; k <= 10; k++){
            if (DB_Detail[i][k] == null) {
                tableArr.push('<td> - </td>');
            }
            else {
                tableArr.push('<td>' + DB_Detail[i][k] + '</td>');
            }
        }
        tableArr.push('</tr>');
    }
    tableArr.push('</table>');
    document.getElementById('DB_print').innerHTML = tableArr.join('\n');
}

function SortDB(element) {
    selected = element.value;

    switch(selected) {
        case '0':
        PrintDB(0);
        break;

        case '1':
        PrintDB(1);
        break;

        case '2':
        PrintDB(2);
        break;

        case '3':
        PrintDB(3);
        break;

        case '4':
        PrintDB(4);
        break;

        case '5':
        PrintDB(5);
        break;

        case '6':
        PrintDB(6);
        break;

        case '7':
        PrintDB(7);
        break;

        case '8':
        PrintDB(8);
        break;

        case '9':
        PrintDB(9);
        break;

        case '10':
        PrintDB(10);
        break;

        case '11':
        PrintDB(11);
        break;

        case '12':
        PrintDB(12);
        break;

        case '13':
        PrintDB(13);
        break;

        case '14':
        PrintDB(14);
        break;

        case '15':
        PrintDB(15);
        break;
    }
}