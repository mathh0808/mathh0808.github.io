const M6 = 1000000;
const B9 = 1000000000;
const T12 = 1000000000000;
const Qd15 = 1000000000000000;
const Qn18 = 1000000000000000000;
const Sx21 = 1000000000000000000000;
const Sp24 = 1000000000000000000000000;
const Oc27 = 1000000000000000000000000000;
const No30 = 1000000000000000000000000000000;
const De33 = 1000000000000000000000000000000000;
const EXP36 = 100000000000000000000000000000000000;
// this above is W coding from me who learned coding like 2 days ago not knowing you can just type e36

let PointUpgradesA = [0, 0, 0, 0, 0, 0]
let PointUpgradesB = [0, 0, 0, 0, 0, 0]
let PointUpgradesC = [0, 0, 0, 0, 0, 0]
let PointUpgradesD = [0, 0, 0, 0, 0, 0]
let PointUpgradesE = [0, 0, 0, 0, 0, 0]
let PointUpgradesF = [0, 0, 0, 0, 0, 0]
let PointUpgrades = 1;

if (localStorage.getItem("PointUpgrades") !== null) {
PointUpgrades = JSON.parse(localStorage.getItem("PointUpgrades"));
}
if (PointUpgrades == 1) {
    PointUpgrades= [PointUpgradesA, PointUpgradesB, PointUpgradesC, PointUpgradesD, PointUpgradesE, PointUpgradesF];
}

let AB_Price = 1;



let pointsAlt = 0;
let points = 0;
let pointsBase = 1;
let pointsMult = 1;
let pointsExp = 1;
let pointsTotal = 1;
let pointsSuffix = "";
let pointsTotalSuffix = "";
points = JSON.parse(localStorage.getItem("Points"));
document.getElementById("currency").textContent = (points + " Point(s)")
// only points are saved for now sorry gang



// EVERY FRAME FUNCTION
setInterval(function(){

document.getElementById("currency").textContent = (pointsSuffix + " Point(s)");

pointsBase = 1 + (PointUpgrades[0][1]*(1+PointUpgrades[0][2]/2));
pointsMult = 1 * (1+0.5*PointUpgrades[1][0]) * (1+PointUpgrades[2][0]);
pointsExp = 1;


pointsTotal = PointUpgrades[0][0]*(pointsBase*pointsMult)**pointsExp;

// POINTS DISPLAY
switch(true){
    case points >= EXP36:
        pointsRSuffix = (Math.round(points/10**Math.round(Math.log10(points)-3.5))/1000)+"e+"+(Math.round(Math.log10(points)-0.5));
        break;
    case points >= De33:
        pointsSuffix = (Math.round(points/No30)/1000)+"De";
        break;
    case points >= No30:
        pointsSuffix = (Math.round(points/Oc27)/1000)+"No";
        break;
    case points >= Oc27:
        pointsSuffix = (Math.round(points/Sp24)/1000)+"Oc";
        break;
    case points >= Sp24:
        pointsSuffix = (Math.round(points/Sx21)/1000)+"Sp";
        break;
    case points >= Sx21:
        pointsSuffix = (Math.round(points/Qn18)/1000)+"Sx";
        break;
    case points >= Qn18:
        pointsSuffix = (Math.round(points/Qd15)/1000)+"Qn";
        break;
    case points >= Qd15:
        pointsSuffix = (Math.round(points/T12)/1000)+"Qd";
        break;
    case points >= T12:
        pointsSuffix = (Math.round(points/B9)/1000)+"T";
        break;
    case points >= B9:
        pointsSuffix = (Math.round(points/M6)/1000)+"B";
        break;
    case points >= M6:
        pointsSuffix = (Math.round(points/1000)/1000)+"M";
        break;
    case points >= 1000:
        pointsSuffix = Math.round(points)/1000+"k";
        break;
    default:
        pointsSuffix = Math.round(points);
}

// POINTS MULT DISPLAY
switch(true){
    case pointsTotal >= EXP36:
        pointsTotalSuffix = (Math.round(pointsTotal/10**Math.round(Math.log10(pointsTotal)-3.5))/1000)+"e+"+(Math.round(Math.log10(pointsTotal)-0.5));
        break;
    case pointsTotal >= De33:
        pointsTotalSuffix = (Math.round(pointsTotal/No30)/1000)+"De";
        break;
    case pointsTotal >= No30:
        pointsTotalSuffix = (Math.round(pointsTotal/Oc27)/1000)+"No";
        break;
    case pointsTotal >= Oc27:
        pointsTotalSuffix = (Math.round(pointsTotal/Sp24)/1000)+"Oc";
        break;
    case pointsTotal >= Sp24:
        pointsTotalSuffix = (Math.round(pointsTotal/Sx21)/1000)+"Sp";
        break;
    case pointsTotal >= Sx21:
        pointsTotalSuffix = (Math.round(pointsTotal/Qn18)/1000)+"Sx";
        break;
    case pointsTotal >= Qn18:
        pointsTotalSuffix = (Math.round(pointsTotal/Qd15)/1000)+"Qn";
        break;
    case pointsTotal >= Qd15:
        pointsTotalSuffix = (Math.round(pointsTotal/T12)/1000)+"Qd";
        break;
    case pointsTotal >= T12:
        pointsTotalSuffix = (Math.round(pointsTotal/B9)/1000)+"T";
        break;
    case pointsTotal >= B9:
        pointsTotalSuffix = (Math.round(pointsTotal/M6)/1000)+"B";
        break;
    case pointsTotal >= M6:
        pointsTotalSuffix = (Math.round(pointsTotal/1000)/1000)+"M";
        break;
    case pointsTotal >= 1000:
        pointsTotalSuffix = Math.round(pointsTotal)/1000+"k";
        break;
    default:
        pointsTotalSuffix = pointsTotal;

}




document.getElementById("currencyGain").textContent = ((pointsTotalSuffix)+"/s");
document.getElementById("priceAA_P").textContent = "Free ("+PointUpgrades[0][0]+"/1)";

if (true) {
if (PointUpgrades[0][0] == 0) {
    document.getElementById("currencyGainB").textContent = ("Buy upgrade #1 please");

    document.getElementById("upgradeAB_P").className = "upgradeInvis" ;
    document.getElementById("titleAB_P").className = "titleInvis" ;
    document.getElementById("infoAB_P").className = "infoInvis" ;
    document.getElementById("priceAB_P").className = "priceInvis" ;

    document.getElementById("upgradeBA_P").className = "upgradeInvis" ;
    document.getElementById("titleBA_P").className = "titleInvis" ;
    document.getElementById("infoBA_P").className = "infoInvis" ;
    document.getElementById("priceBA_P").className = "priceInvis" ;
    }
else {
    document.getElementById("upgradeAB_P").className = "upgrade" ;
    document.getElementById("titleAB_P").className = "title" ;
    document.getElementById("infoAB_P").className = "info" ;
    document.getElementById("priceAB_P").className = "price" ;

    document.getElementById("upgradeBA_P").className = "upgrade" ;
    document.getElementById("titleBA_P").className = "title" ;
    document.getElementById("infoBA_P").className = "info" ;
    document.getElementById("priceBA_P").className = "price" ;
    document.getElementById("currencyGainB").textContent = ("(("+pointsBase+" [Base] *"+pointsMult+")^"+pointsExp+")/25 every 40ms");
    document.getElementById("priceAB_P").textContent = (Math.floor(((2+PointUpgrades[0][1])**3-3))) + "P (" + PointUpgrades[0][1] + "/3)";
    document.getElementById("priceBA_P").textContent = "15P ("+PointUpgrades[1][0]+"/1)";


}



if (PointUpgrades[0][1] == 0) {
    document.getElementById("upgradeAC_P").className = "upgradeInvis" ;
    document.getElementById("titleAC_P").className = "titleInvis" ;
    document.getElementById("infoAC_P").className = "infoInvis" ;
    document.getElementById("priceAC_P").className = "priceInvis" ;
    }
else {
    document.getElementById("upgradeAC_P").className = "upgrade" ;
    document.getElementById("titleAC_P").className = "title" ;
    document.getElementById("infoAC_P").className = "info" ;
    document.getElementById("priceAC_P").className = "price" ;
    document.getElementById("priceAC_P").textContent = 40*(4**PointUpgrades[0][2])+"P ("+PointUpgrades[0][2]+"/5)";
}


if (PointUpgrades[0][2] == 0) {
    document.getElementById("upgradeAD_P").className = "upgradeInvis" ;
    document.getElementById("titleAD_P").className = "titleInvis" ;
    document.getElementById("infoAD_P").className = "infoInvis" ;
    document.getElementById("priceAD_P").className = "priceInvis" ;

    document.getElementById("upgradeBC_P").className = "upgradeInvis" ;
    document.getElementById("titleBC_P").className = "titleInvis" ;
    document.getElementById("infoBC_P").className = "infoInvis" ;
    document.getElementById("priceBC_P").className = "priceInvis" ;
    }
else {
    document.getElementById("upgradeAD_P").className = "upgrade" ;
    document.getElementById("titleAD_P").className = "title" ;
    document.getElementById("infoAD_P").className = "info" ;
    document.getElementById("priceAD_P").className = "price" ;

    document.getElementById("upgradeBC_P").className = "upgrade" ;
    document.getElementById("titleBC_P").className = "title" ;
    document.getElementById("infoBC_P").className = "info" ;
    document.getElementById("priceBC_P").className = "price" ;
    document.getElementById("priceAC_P").textContent = 40*(4**PointUpgrades[0][2])+"P ("+PointUpgrades[0][2]+"/5)";
}


if (PointUpgrades[1][0] == 0) {
    document.getElementById("upgradeCA_P").className = "upgradeInvis" ;
    document.getElementById("titleCA_P").className = "titleInvis" ;
    document.getElementById("infoCA_P").className = "infoInvis" ;
    document.getElementById("priceCA_P").className = "priceInvis" ;
    }
else {
    document.getElementById("upgradeCA_P").className = "upgrade" ;
    document.getElementById("titleCA_P").className = "title" ;
    document.getElementById("infoCA_P").className = "info" ;
    document.getElementById("priceCA_P").className = "price" ;
    document.getElementById("priceCA_P").textContent = "125P ("+PointUpgrades[2][0]+"/1)";
}
}

document.getElementById("infoAB_P").textContent = "+" + (1+PointUpgrades[0][2]/2) + " base point gain.";


}, 1);



// POINT GAIN FUNCTION
setInterval(function(){
    points += pointsTotal/25;

    localStorage.setItem("Points", JSON.stringify(points));
    localStorage.setItem("PointUpgrades", JSON.stringify(PointUpgrades));

}, 40);




function AA_P() {
    PointUpgrades[0][0] = 1
}

function AB_P() {
    if (points >= Math.floor(((2+PointUpgrades[0][1])**3-3))) {
        if (PointUpgrades[0][1] <= 2) {
        points -= Math.floor(((2+PointUpgrades[0][1])**3-3));
        PointUpgrades[0][1] += 1;
        }
    }
}

function AC_P() {
    if (points >= 40*(4**PointUpgrades[0][2])) {
        if (PointUpgrades[0][2] <= 4) {
        points -= 40*(4**PointUpgrades[0][2]);
        PointUpgrades[0][2] += 1;
        }
    }
}   

function AD_P() {
    if (points >= 40*(4**PointUpgrades[0][2])) {
        if (PointUpgrades[0][30] <= 0) {
        points -= 40*(4**PointUpgrades[0][2]);
        PointUpgrades[0][3] += 1;
        }
    }
}

function BA_P() {
    if (points >= 15) {
        if (PointUpgrades[1][0] <= 0) {
        points -= 15;
        PointUpgrades[1][0] += 1;
        }
    }
}

function BC_P() {
    if (points >= 200) {
        if (PointUpgrades[1][2] <= 0) {
        points -= 200;
        PointUpgrades[1][2] = 1;
        }
    }
}

function CA_P() {
    if (points >= 125) {
        if (PointUpgrades[2][0] <= 0) {
        points -= 125;
        PointUpgrades[2][0] += 1;
        }
    }
}   


