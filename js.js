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

let PointUpgradesCostA = [0, 0, 0, 0, 0, 0]
let PointUpgradesCostB = [0, 0, 0, 0, 0, 0]
let PointUpgradesCostC = [0, 0, 0, 0, 0, 0]
let PointUpgradesCostD = [0, 0, 0, 0, 0, 0]
let PointUpgradesCostE = [0, 0, 0, 0, 0, 0]
let PointUpgradesCostF = [0, 0, 0, 0, 0, 0]
PointUpgradesCost= [PointUpgradesCostA, PointUpgradesCostB, PointUpgradesCostC, PointUpgradesCostD, PointUpgradesCostE, PointUpgradesCostF];

let PointUpgradesSuffixA = [0, 0, 0, 0, 0, 0]
let PointUpgradesSuffixB = [0, 0, 0, 0, 0, 0]
let PointUpgradesSuffixC = [0, 0, 0, 0, 0, 0]
let PointUpgradesSuffixD = [0, 0, 0, 0, 0, 0]
let PointUpgradesSuffixE = [0, 0, 0, 0, 0, 0]
let PointUpgradesSuffixF = [0, 0, 0, 0, 0, 0]
PointUpgradesSuffix= [PointUpgradesSuffixA, PointUpgradesSuffixB, PointUpgradesSuffixC, PointUpgradesSuffixD, PointUpgradesSuffixE, PointUpgradesSuffixF];

if (localStorage.getItem("PointUpgrades") !== null) {
PointUpgrades = JSON.parse(localStorage.getItem("PointUpgrades"));
}
if (PointUpgrades == 1) {
    PointUpgrades= [PointUpgradesA, PointUpgradesB, PointUpgradesC, PointUpgradesD, PointUpgradesE, PointUpgradesF];
}


let randomNumberSuffix = 1;
if (localStorage.getItem("RandomNumber") !== null) {
PointUpgrades[2][1] = JSON.parse(localStorage.getItem("RandomNumber"));
}
else {
PointUpgrades[2][1] = Qd15
}



let ResearchUpgradesA = [0, 0, 0, 0, 0, 0]
let ResearchUpgradesB = [0, 0, 0, 0, 0, 0]
let ResearchUpgradesC = [0, 0, 0, 0, 0, 0]
let ResearchUpgradesD = [0, 0, 0, 0, 0, 0]
let ResearchUpgradesE = [0, 0, 0, 0, 0, 0]
let ResearchUpgradesF = [0, 0, 0, 0, 0, 0]
let ResearchUpgrades = 1;

let ResearchUpgradesCostA = [0, 0, 0, 0, 0, 0]
let ResearchUpgradesCostB = [0, 0, 0, 0, 0, 0]
let ResearchUpgradesCostC = [0, 0, 0, 0, 0, 0]
let ResearchUpgradesCostD = [0, 0, 0, 0, 0, 0]
let ResearchUpgradesCostE = [0, 0, 0, 0, 0, 0]
let ResearchUpgradesCostF = [0, 0, 0, 0, 0, 0]
ResearchUpgradesCost= [ResearchUpgradesCostA, ResearchUpgradesCostB, ResearchUpgradesCostC, ResearchUpgradesCostD, ResearchUpgradesCostE, ResearchUpgradesCostF];

let ResearchUpgradesSuffixA = [0, 0, 0, 0, 0, 0]
let ResearchUpgradesSuffixB = [0, 0, 0, 0, 0, 0]
let ResearchUpgradesSuffixC = [0, 0, 0, 0, 0, 0]
let ResearchUpgradesSuffixD = [0, 0, 0, 0, 0, 0]
let ResearchUpgradesSuffixE = [0, 0, 0, 0, 0, 0]
let ResearchUpgradesSuffixF = [0, 0, 0, 0, 0, 0]
ResearchUpgradesSuffix= [ResearchUpgradesSuffixA, ResearchUpgradesSuffixB, ResearchUpgradesSuffixC, ResearchUpgradesSuffixD, ResearchUpgradesSuffixE, ResearchUpgradesSuffixF];

if (localStorage.getItem("ResearchUpgrades") !== null) {
ResearchUpgrades = JSON.parse(localStorage.getItem("ResearchUpgrades"));
}
if (ResearchUpgrades == 1) {
    ResearchUpgrades= [ResearchUpgradesA, ResearchUpgradesB, ResearchUpgradesC, ResearchUpgradesD, ResearchUpgradesE, ResearchUpgradesF];
}


let pointsAlt = 0;
let points = 0;
let pointsBase = 1;
let pointsMult = 1;
let pointsExp = 1;
let pointsTotal = 1;
let pointsSuffix = "";
let pointsBaseSuffix = "";
let pointsMultSuffix = "";
let pointsTotalSuffix = "";

let timeSinceR = 0;
let research = 0;
let researchBase = 0;
let researchMult = 1;
let researchExp = 1;
let researchTotal = 0;
let researchDone = false;
let researchSuffix = "";
let researchTotalSuffix = "";

if (localStorage.getItem("Points") !== null) {
points = JSON.parse(localStorage.getItem("Points"));
}
if (localStorage.getItem("Research") !== null) {
research = JSON.parse(localStorage.getItem("Research"));
}
if (localStorage.getItem("ResearchDone") !== null) {
researchDone = JSON.parse(localStorage.getItem("ResearchDone"));
}
if (localStorage.getItem("timeSinceR") !== null) {
timeSinceR = JSON.parse(localStorage.getItem("timeSinceR"));
}

let UIsize = 100;

if (localStorage.getItem("UIsize") !== null) {
UIsize = JSON.parse(localStorage.getItem("UIsize"));
}

let OfflineProgressCheck = Date.now();

if (localStorage.getItem("OfflineProgressCheck") !== null) {
OfflineProgressCheck = JSON.parse(localStorage.getItem("OfflineProgressCheck"));
}




let SuffixTransferValue = [0, 0, 0, 0, 0, 0];
let SuffixValue = [0, 0, 0, 0, 0, 0];

console.log("Uhhh what's the point of going in logs rn? you have buttons to get exponentially more points...");

















// EVERY FRAME FUNCTION
setInterval(function(){

// we don't talk abput this ok?
if(true) {
PointUpgradesCost[0][1] = Math.floor(((2+PointUpgrades[0][1])**3.6/3+2))
PointUpgradesCost[0][2] = 40*(2.5**PointUpgrades[0][2])
PointUpgradesCost[0][3] = 200*(PointUpgrades[1][2]*19+1)
PointUpgradesCost[0][4] = 0
PointUpgradesCost[0][5] = 0

PointUpgradesCost[1][0] = 15
PointUpgradesCost[1][1] = Math.round(Math.max(((points/7500)**0.6*researchTotal), 3)*100)/100
PointUpgradesCost[1][2] = 200*(PointUpgrades[0][3]*19+1)
PointUpgradesCost[1][3] = 250000
PointUpgradesCost[1][4] = 0
PointUpgradesCost[1][5] = 0

PointUpgradesCost[2][0] = 125
PointUpgradesCost[2][1] = Math.round((2+ResearchUpgrades[0][2]*0.25)**(16-Math.log10(PointUpgrades[2][1]))/(2+ResearchUpgrades[0][2]*0.25)*100)/100
PointUpgradesCost[2][2] = 0
PointUpgradesCost[2][3] = 750000*(3.75**PointUpgrades[2][3])
PointUpgradesCost[2][4] = 0
PointUpgradesCost[2][5] = 0

PointUpgradesCost[3][0] = 800*(25**PointUpgrades[3][0])
PointUpgradesCost[3][1] = 0
PointUpgradesCost[3][2] = 0
PointUpgradesCost[3][3] = 0
PointUpgradesCost[3][4] = 0
PointUpgradesCost[3][5] = 0

PointUpgradesCost[4][0] = 0
PointUpgradesCost[4][1] = 0
PointUpgradesCost[4][2] = 0
PointUpgradesCost[4][3] = 0
PointUpgradesCost[4][4] = 0
PointUpgradesCost[4][5] = 0

PointUpgradesCost[5][0] = 0
PointUpgradesCost[5][1] = 0
PointUpgradesCost[5][2] = 0
PointUpgradesCost[5][3] = 0
PointUpgradesCost[5][4] = 0
PointUpgradesCost[5][5] = 0

researchGain = PointUpgradesCost[1][1]

ResearchUpgradesCost[0][0] = 1+Math.round((ResearchUpgrades[0][0]**2.5)/20);
ResearchUpgradesCost[0][1] = 3+Math.round((ResearchUpgrades[0][1]**3.5)/50);
ResearchUpgradesCost[0][2] = 60
ResearchUpgradesCost[0][3] = 0
ResearchUpgradesCost[0][4] = 0
ResearchUpgradesCost[0][5] = 0

ResearchUpgradesCost[1][0] = 3*(10**ResearchUpgrades[1][0])
ResearchUpgradesCost[1][1] = 10*(3**ResearchUpgrades[1][1])
ResearchUpgradesCost[1][2] = 600
ResearchUpgradesCost[2][3] = 0
ResearchUpgradesCost[1][4] = 0
ResearchUpgradesCost[1][5] = 0

ResearchUpgradesCost[2][0] = 15*(8**ResearchUpgrades[2][0])
ResearchUpgradesCost[2][1] = 250
ResearchUpgradesCost[2][2] = 0
ResearchUpgradesCost[2][3] = 0
ResearchUpgradesCost[2][4] = 0
ResearchUpgradesCost[2][5] = 0

ResearchUpgradesCost[3][0] = 0
ResearchUpgradesCost[3][1] = 0
ResearchUpgradesCost[3][2] = 0
ResearchUpgradesCost[3][3] = 0
ResearchUpgradesCost[3][4] = 0
ResearchUpgradesCost[3][5] = 0

ResearchUpgradesCost[4][0] = 0
ResearchUpgradesCost[4][1] = 0
ResearchUpgradesCost[4][2] = 0
ResearchUpgradesCost[4][3] = 0
ResearchUpgradesCost[4][4] = 0
ResearchUpgradesCost[4][5] = 0

ResearchUpgradesCost[5][0] = 0
ResearchUpgradesCost[5][1] = 0
ResearchUpgradesCost[5][2] = 0
ResearchUpgradesCost[5][3] = 0
ResearchUpgradesCost[5][4] = 0
ResearchUpgradesCost[5][5] = 0
}


// point calculation
pointsBase = 1 + (PointUpgrades[0][1]*(1+PointUpgrades[0][2]/2));

pointsMult = Math.round(1 * (1+0.5*PointUpgrades[1][0])
* (1+PointUpgrades[2][0]) 
* (1+PointUpgrades[1][2]*1.25)
* Math.max(PointUpgrades[1][3]*(Math.log10(1+research)/Math.log10(10-PointUpgrades[2][3]))+1, 1)
* Math.max(PointUpgradesCost[2][1], 1)
* (1+(ResearchUpgrades[0][0]/2))
* (2**ResearchUpgrades[2][0])
* (1+ResearchUpgrades[2][1]*(2-(Math.min(timeSinceR/30000000, 2))))
* 10) /10;

pointsExp = 1 + (0.04*PointUpgrades[3][0]) ;

pointsTotal = Math.round(PointUpgrades[0][0]*(pointsBase*pointsMult)**pointsExp*10)/10;

//research calculation
researchBase = 1;
researchMult = (1+(ResearchUpgrades[0][1]/4)+Math.min(ResearchUpgrades[0][1], 1)/2)
researchTotal = (researchBase*researchMult)**researchExp;




// POINT UPGRADES SUFFIX
for (let i = 0; i <= 5; i++) {
for (let ii = 0; ii <= 5; ii++) {
switch(true) {
    case PointUpgradesCost[i][ii] >= EXP36:
        PointUpgradesSuffix[i][ii] = (Math.round(PointUpgradesCost[i][ii]/10**Math.round(Math.log10(PointUpgradesCost[i][ii])-3.5))/1000)+"e+"+(Math.round(Math.log10(PointUpgradesCost[i][ii])-0.5));
        break;
    case PointUpgradesCost[i][ii] >= De33:
        PointUpgradesSuffix[i][ii] = (Math.round(PointUpgradesCost[i][ii]/No30/10)/100)+"De";
        break;
    case PointUpgradesCost[i][ii] >= No30:
        PointUpgradesSuffix[i][ii] = (Math.round(PointUpgradesCost[i][ii]/Oc27/10)/100)+"No";
        break;
    case PointUpgradesCost[i][ii] >= Oc27:
        PointUpgradesSuffix[i][ii] = (Math.round(PointUpgradesCost[i][ii]/Sp24/10)/100)+"Oc";
        break;
    case PointUpgradesCost[i][ii] >= Sp24:
        PointUpgradesSuffix[i][ii] = (Math.round(PointUpgradesCost[i][ii]/Sx21/10)/100)+"Sp";
        break;
    case PointUpgradesCost[i][ii] >= Sx21:
        PointUpgradesSuffix[i][ii] = (Math.round(PointUpgradesCost[i][ii]/Qn18/10)/100)+"Sx";
        break;
    case PointUpgradesCost[i][ii] >= Qn18:
        PointUpgradesSuffix[i][ii] = (Math.round(PointUpgradesCost[i][ii]/Qd15/10)/100)+"Qn";
        break;
    case PointUpgradesCost[i][ii] >= Qd15:
        PointUpgradesSuffix[i][ii] = (Math.round(PointUpgradesCost[i][ii]/T12/10)/100)+"Qd";
        break;
    case PointUpgradesCost[i][ii] >= T12:
        PointUpgradesSuffix[i][ii] = (Math.round(PointUpgradesCost[i][ii]/B9/10)/100)+"T";
        break;
    case PointUpgradesCost[i][ii] >= B9:
        PointUpgradesSuffix[i][ii] = (Math.round(PointUpgradesCost[i][ii]/M6/10)/100)+"b";
        break;
    case PointUpgradesCost[i][ii] >= M6:
        PointUpgradesSuffix[i][ii] = (Math.round(PointUpgradesCost[i][ii]/10000)/100)+"m";
        break;
    case PointUpgradesCost[i][ii] >= 1000:
        PointUpgradesSuffix[i][ii] = Math.round(PointUpgradesCost[i][ii]/10)/100+"k";
        break;
    default:
        PointUpgradesSuffix[i][ii] = (PointUpgradesCost[i][ii]);
}}}

// RESEARCH UPGRADES PREFIX
for (let i = 0; i <= 5; i++) {
for (let ii = 0; ii <= 5; ii++) {
switch(true) {
    case ResearchUpgradesCost[i][ii] >= EXP36:
        ResearchUpgradesSuffix[i][ii] = (Math.round(ResearchUpgradesCost[i][ii]/10**Math.round(Math.log10(ResearchUpgradesCost[i][ii])-3.5))/1000)+"e+"+(Math.round(Math.log10(ResearchUpgradesCost[i][ii])-0.5));
        break;
    case ResearchUpgradesCost[i][ii] >= De33:
        ResearchUpgradesSuffix[i][ii] = (Math.round(ResearchUpgradesCost[i][ii]/No30/10)/100)+"De";
        break;
    case ResearchUpgradesCost[i][ii] >= No30:
        ResearchUpgradesSuffix[i][ii] = (Math.round(ResearchUpgradesCost[i][ii]/Oc27/10)/100)+"No";
        break;
    case ResearchUpgradesCost[i][ii] >= Oc27:
        ResearchUpgradesSuffix[i][ii] = (Math.round(ResearchUpgradesCost[i][ii]/Sp24/10)/100)+"Oc";
        break;
    case ResearchUpgradesCost[i][ii] >= Sp24:
        ResearchUpgradesSuffix[i][ii] = (Math.round(ResearchUpgradesCost[i][ii]/Sx21/10)/100)+"Sp";
        break;
    case ResearchUpgradesCost[i][ii] >= Sx21:
        ResearchUpgradesSuffix[i][ii] = (Math.round(ResearchUpgradesCost[i][ii]/Qn18/10)/100)+"Sx";
        break;
    case ResearchUpgradesCost[i][ii] >= Qn18:
        ResearchUpgradesSuffix[i][ii] = (Math.round(ResearchUpgradesCost[i][ii]/Qd15/10)/100)+"Qn";
        break;
    case ResearchUpgradesCost[i][ii] >= Qd15:
        ResearchUpgradesSuffix[i][ii] = (Math.round(ResearchUpgradesCost[i][ii]/T12/10)/100)+"Qd";
        break;
    case ResearchUpgradesCost[i][ii] >= T12:
        ResearchUpgradesSuffix[i][ii] = (Math.round(ResearchUpgradesCost[i][ii]/B9/10)/100)+"T";
        break;
    case ResearchUpgradesCost[i][ii] >= B9:
        ResearchUpgradesSuffix[i][ii] = (Math.round(ResearchUpgradesCost[i][ii]/M6/10)/100)+"b";
        break;
    case ResearchUpgradesCost[i][ii] >= M6:
        ResearchUpgradesSuffix[i][ii] = (Math.round(ResearchUpgradesCost[i][ii]/10000)/100)+"m";
        break;
    case ResearchUpgradesCost[i][ii] >= 1000:
        ResearchUpgradesSuffix[i][ii] = Math.round(ResearchUpgradesCost[i][ii]/10)/100+"k";
        break;
    default:
        ResearchUpgradesSuffix[i][ii] = (ResearchUpgradesCost[i][ii]);
}}}



SuffixTransferValue = [points, pointsBase, pointsMult, pointsTotal, PointUpgrades[2][1], research, PointUpgradesCost[1][1]];
// ALL SUFFIX THINGY
for (let i = 0; i <= 6; i++) {``
switch(true) {
    case SuffixTransferValue[i] >= EXP36:
        SuffixValue[i] = (Math.round(SuffixTransferValue[i]/10**Math.round(Math.log10(SuffixTransferValue[i])-3.5))/1000)+"e+"+(Math.round(Math.log10(SuffixTransferValue[i])-0.5));
        break;
    case SuffixTransferValue[i] >= De33:
        SuffixValue[i] = (Math.round(SuffixTransferValue[i]/No30/10)/100)+"De";
        break;
    case SuffixTransferValue[i] >= No30:
        SuffixValue[i] = (Math.round(SuffixTransferValue[i]/Oc27/10)/100)+"No";
        break;
    case SuffixTransferValue[i] >= Oc27:
        SuffixValue[i] = (Math.round(SuffixTransferValue[i]/Sp24/10)/100)+"Oc";
        break;
    case SuffixTransferValue[i] >= Sp24:
        SuffixValue[i] = (Math.round(SuffixTransferValue[i]/Sx21/10)/100)+"Sp";
        break;
    case SuffixTransferValue[i] >= Sx21:
        SuffixValue[i] = (Math.round(SuffixTransferValue[i]/Qn18/10)/100)+"Sx";
        break;
    case SuffixTransferValue[i] >= Qn18:
        SuffixValue[i] = (Math.round(SuffixTransferValue[i]/Qd15/10)/100)+"Qn";
        break;
    case SuffixTransferValue[i] >= Qd15:
        SuffixValue[i] = (Math.round(SuffixTransferValue[i]/T12/10)/100)+"Qd";
        break;
    case SuffixTransferValue[i] >= T12:
        SuffixValue[i] = (Math.round(SuffixTransferValue[i]/B9/10)/100)+"T";
        break;
    case SuffixTransferValue[i] >= B9:
        SuffixValue[i] = (Math.round(SuffixTransferValue[i]/M6/10)/100)+"b";
        break;
    case SuffixTransferValue[i] >= M6:
        SuffixValue[i] = (Math.round(SuffixTransferValue[i]/10000)/100)+"m";
        break;
    case SuffixTransferValue[i] >= 1000:
        SuffixValue[i] = Math.round(SuffixTransferValue[i]/10)/100+"k";
        break;
    default:
        SuffixValue[i] = Math.round(SuffixTransferValue[i]*10)/10;
}}


pointsSuffix = SuffixValue[0]
if (points < 1000) {
    pointsSuffix = Math.round(points);
}
pointsBaseSuffix = SuffixValue[1]
pointsMultSuffix = SuffixValue[2]
pointsTotalSuffix = SuffixValue[3]
randomNumberSuffix = SuffixValue[4]
researchSuffix = SuffixValue[5]
if (research < 1000) {
    researchSuffix = Math.round(research*100)/100;
}
researchTotalSuffix = SuffixValue[6]
if (PointUpgradesCost[1][1] < 1000) {
    researchTotalSuffix = Math.round(PointUpgradesCost[1][1]*100)/100;
}



document.getElementById("pointTotal").textContent = pointsSuffix + " Point(s)";
document.getElementById("pointGain").textContent = ((pointsTotalSuffix)+"/s");
document.getElementById("priceAA_P").textContent = "Free ("+PointUpgrades[0][0]+"/1)";

document.getElementById("pointdisplay").textContent = pointsSuffix + " Point(s)" ;
document.getElementById("researchdisplay").textContent = researchSuffix + " RP" ;

if (researchDone == true) {
document.getElementById("researchdisplay").style.display = "inline-block";
document.getElementById("containerR").style.display = "block";
}
else {
document.getElementById("researchdisplay").style.display = "none";
document.getElementById("containerR").style.display = "none";
}





// we don't talk abput this ok? #2
if (true) {


// AA to AB, BA
if (PointUpgrades[0][0] == 0) {
    document.getElementById("pointGainB").textContent = ("Buy upgrade #1 please");

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
    document.getElementById("infoAB_P").title = "Adds " + (PointUpgrades[0][1]*(PointUpgrades[0][2]*0.5+1)) + " to the base.";
    document.getElementById("priceAB_P").className = "price" ;

    document.getElementById("upgradeBA_P").className = "upgrade" ;
    document.getElementById("titleBA_P").className = "title" ;
    document.getElementById("infoBA_P").className = "info" ;
    document.getElementById("priceBA_P").className = "price" ;
    document.getElementById("pointGainB").textContent = ("(("+pointsBaseSuffix+" [Base] x"+pointsMultSuffix+")^"+pointsExp+")/25 every 40ms");
    document.getElementById("priceAB_P").textContent = PointUpgradesSuffix[0][1] + " P (" + PointUpgrades[0][1] + "/" + (3+PointUpgrades[0][3]*12) + ")";
    document.getElementById("priceBA_P").textContent = "15 P ("+PointUpgrades[1][0]+"/1)";
    document.getElementById("infoAB_P").textContent = "+" + (1+PointUpgrades[0][2]/2) + " base point gain. Unlocks something below later!";
}

// AB to AC
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
    document.getElementById("infoAC_P").title = "Adds " + (PointUpgrades[0][2]*0.5) + " to the #2 boost.";
    document.getElementById("priceAC_P").className = "price" ;
    document.getElementById("priceAC_P").textContent = PointUpgradesSuffix[0][2]+" P ("+PointUpgrades[0][2]+"/5)";
}

// AB TO BB
if (PointUpgrades[0][1] >= 15 || researchDone == true) {
    document.getElementById("upgradeBB_P").className = "upgradeBlue" ;
    document.getElementById("titleBB_P").className = "titleBlue" ;
    document.getElementById("infoBB_P").className = "infoBlue" ;
    document.getElementById("priceBB_P").className = "priceBlue" ;
    if (points >= 12500) {
    document.getElementById("priceBB_P").textContent = researchTotalSuffix  +" RP";
    }
    else {
    document.getElementById("priceBB_P").textContent = "Requires 12.5k P!";
    }}
    else {
    document.getElementById("upgradeBB_P").className = "upgradeInvis" ;
    document.getElementById("titleBB_P").className = "titleInvis" ;
    document.getElementById("infoBB_P").className = "infoInvis" ;
    document.getElementById("priceBB_P").className = "priceInvis" ;
}

// AC to AD & BC
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
    document.getElementById("priceAD_P").textContent = PointUpgradesSuffix[0][3]+" P ("+PointUpgrades[0][3]+"/1)";
    document.getElementById("priceBC_P").textContent = PointUpgradesSuffix[1][2]+" P ("+PointUpgrades[1][2]+"/1)";
}

// AD to AE
if (PointUpgrades[0][3] == 0) {
    document.getElementById("upgradeAE_P").className = "upgradeInvis" ;
    document.getElementById("titleAE_P").className = "titleInvis" ;
    document.getElementById("infoAE_P").className = "infoInvis" ;
    document.getElementById("priceAE_P").className = "priceInvis" ;
    }
else {
    document.getElementById("upgradeAE_P").className = "upgrade" ;
    document.getElementById("titleAE_P").className = "title" ;
    document.getElementById("infoAE_P").className = "info" ;
    document.getElementById("priceAE_P").className = "price" ;
    if (ResearchUpgrades[2][2] == 0) {
    document.getElementById("infoAE_P").textContent = "Locked! Buy #9R to unlock this.";
    document.getElementById("priceAE_P").textContent = "LOCKED";
    }
    else {
    document.getElementById("infoAE_P").title = "Multiples point gain by x"+(1+PointUpgrades[0][1]/100)+".";
    document.getElementById("infoAE_P").textContent = "+35 TO #2's MAX!!! As a bonus, +0.01x base P per #2 level!!";
    document.getElementById("priceAE_P").textContent = "275B P ("+PointUpgrades[0][4]+"/1)";
    }
}

// AD & BC to BD
if (PointUpgrades[0][3] == 1 && PointUpgrades[1][2] == 1) {
    document.getElementById("upgradeBD_P").className = "upgrade" ;
    document.getElementById("titleBD_P").className = "title" ;
    document.getElementById("infoBD_P").className = "info" ;
    document.getElementById("priceBD_P").className = "price" ;
    document.getElementById("infoBD_P").title = "Multiplies point gain by: "+ Math.round(Math.max(PointUpgrades[1][3]*(Math.log10(1+research)/Math.log10(10-PointUpgrades[2][3]))+1, 1)*100)/100+".";
    document.getElementById("priceBD_P").textContent = PointUpgradesSuffix[1][3]+" P ("+PointUpgrades[1][3]+"/1)";
    }
else {
    document.getElementById("upgradeBD_P").className = "upgradeInvis" ;
    document.getElementById("titleBD_P").className = "titleInvis" ;
    document.getElementById("infoBD_P").className = "infoInvis" ;
    document.getElementById("priceBD_P").className = "priceInvis" ;
}

// BA to CA
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
    document.getElementById("priceCA_P").textContent = "125 P ("+PointUpgrades[2][0]+"/1)";
}
// BD to CD
if (PointUpgrades[1][3] == 1) {
    document.getElementById("upgradeCD_P").className = "upgrade" ;
    document.getElementById("titleCD_P").className = "title" ;
    document.getElementById("infoCD_P").className = "info" ;
    document.getElementById("priceCD_P").className = "price" ;
    document.getElementById("priceCD_P").textContent = PointUpgradesSuffix[2][3]+" P ("+PointUpgrades[2][3]+"/7)";
    document.getElementById("infoCD_P").title = "-" + PointUpgrades[2][3] + " to the log effect of #9.";
    }
else {
    document.getElementById("upgradeCD_P").className = "upgradeInvis" ;
    document.getElementById("titleCD_P").className = "titleInvis" ;
    document.getElementById("infoCD_P").className = "infoInvis" ;
    document.getElementById("priceCD_P").className = "priceInvis" ;
}

// CA to CB & DA
if (PointUpgrades[2][0] == 0) {
    document.getElementById("upgradeCB_P").className = "upgradeInvis" ;
    document.getElementById("titleCB_P").className = "titleInvis" ;
    document.getElementById("infoCB_P").className = "infoInvis" ;
    document.getElementById("priceCB_P").className = "priceInvis" ;

    document.getElementById("upgradeDA_P").className = "upgradeInvis" ;
    document.getElementById("titleDA_P").className = "titleInvis" ;
    document.getElementById("infoDA_P").className = "infoInvis" ;
    document.getElementById("priceDA_P").className = "priceInvis" ;
    }
else {
    document.getElementById("upgradeCB_P").className = "upgrade" ;
    document.getElementById("titleCB_P").className = "title" ;
    document.getElementById("infoCB_P").className = "info" ;    
    document.getElementById("priceCB_P").className = "price" ;
    document.getElementById("infoCB_P").title = "Number Generated: "+randomNumberSuffix+". Check price info for more";
    document.getElementById("priceCB_P").title = "Multiplier formula: "+(2+(ResearchUpgrades[0][2]*0.25))+"^(10-Math.log10(RandomNumber))/2";
    document.getElementById("priceCB_P").textContent = "25k P (x" + PointUpgradesSuffix[2][1] + " P)";

    document.getElementById("upgradeDA_P").className = "upgrade" ;
    document.getElementById("titleDA_P").className = "title" ;
    document.getElementById("infoDA_P").className = "info" ;
    document.getElementById("infoDA_P").title = "Adds " + (PointUpgrades[3][0]*0.04) + " to the exponent.";
    document.getElementById("priceDA_P").className = "price" ;
    document.getElementById("priceDA_P").textContent = PointUpgradesSuffix[3][0] + " P (" + PointUpgrades[3][0] + "/5)";
}

// CB to CC
if (PointUpgrades[2][1] == 0) {
    document.getElementById("upgradeCC_P").className = "upgradeInvis" ;
    document.getElementById("titleCC_P").className = "titleInvis" ;
    document.getElementById("infoCC_P").className = "infoInvis" ;
    document.getElementById("priceCC_P").className = "priceInvis" ;
    }
else {
    document.getElementById("upgradeCC_P").className = "upgrade" ;
    document.getElementById("titleCC_P").className = "title" ;
    document.getElementById("infoCC_P").className = "info" ;
    document.getElementById("priceCC_P").className = "price" ;
    if (ResearchUpgrades[2][2] == 0) {
    document.getElementById("infoCC_P").textContent = "Locked! Buy #9R to unlock this.";
    document.getElementById("priceCC_P").textContent = "LOCKED";
    }
    else {
    document.getElementById("infoCC_P").title = "Multiples point gain by x"+(1+PointUpgrades[0][1]/100)+".";
    document.getElementById("infoCC_P").textContent = "+35 TO #2's MAX!!! As a bonus, +0.01x base P per #2 level!!";
    document.getElementById("priceCC_P").textContent = "275B P ("+PointUpgrades[0][4]+"/1)";
    }
}

// CD to CE
if (PointUpgrades[2][3] == 0) {
    document.getElementById("upgradeCC_P").className = "upgradeInvis" ;
    document.getElementById("titleCC_P").className = "titleInvis" ;
    document.getElementById("infoCC_P").className = "infoInvis" ;
    document.getElementById("priceCC_P").className = "priceInvis" ;
    }
else {
    document.getElementById("upgradeCC_P").className = "upgrade" ;
    document.getElementById("titleCC_P").className = "title" ;
    document.getElementById("infoCC_P").className = "info" ;
    document.getElementById("priceCC_P").className = "price" ;
    if (ResearchUpgrades[2][2] == 0) {
    document.getElementById("infoCC_P").textContent = "Locked! Buy #9R to unlock this.";
    document.getElementById("priceCC_P").textContent = "LOCKED";
    }
    else {
    document.getElementById("infoCC_P").title = "Multiples point gain by x"+(1+PointUpgrades[0][1]/100)+".";
    document.getElementById("infoCC_P").textContent = "+35 TO #2's MAX!!! As a bonus, +0.01x base P per #2 level!!";
    document.getElementById("priceCC_P").textContent = "275B P ("+PointUpgrades[0][4]+"/1)";
    }
}




}


if(true) {

    // BB (P) TO AA
    if (researchDone == true) {
        document.getElementById("priceAA_R").textContent = ResearchUpgradesSuffix[0][0]+" RP ("+ResearchUpgrades[0][0]+"/100)";
        document.getElementById("infoAA_R").title = "Multiplies point gain by " + (1+(ResearchUpgrades[0][0]*0.5)) + ".";
    }

    // AA to AB & BA
    if (ResearchUpgrades[0][0] == 0) {
        document.getElementById("upgradeAB_R").className = "upgradeInvis" ;
        document.getElementById("titleAB_R").className = "titleInvis" ;
        document.getElementById("infoAB_R").className = "infoInvis" ;
        document.getElementById("priceAB_R").className = "priceInvis" ;

        document.getElementById("upgradeBA_R").className = "upgradeInvis" ;
        document.getElementById("titleBA_R").className = "titleInvis" ;
        document.getElementById("infoBA_R").className = "infoInvis" ;
        document.getElementById("priceBA_R").className = "priceInvis" ;
        }
    else {
        document.getElementById("upgradeAB_R").className = "upgradeBlue" ;
        document.getElementById("titleAB_R").className = "titleBlue" ;
        document.getElementById("infoAB_R").className = "infoBlue" ;
        document.getElementById("infoAB_R").title = "Multiplies research gain by " + (1+(ResearchUpgrades[0][1]/4)+Math.min(ResearchUpgrades[0][1], 1)/2) + ".";
        document.getElementById("priceAB_R").className = "priceBlue" ;
        document.getElementById("priceAB_R").textContent = ResearchUpgradesSuffix[0][1]+" RP ("+ResearchUpgrades[0][1]+"/200)";

        document.getElementById("upgradeBA_R").className = "upgradeBlue" ;
        document.getElementById("titleBA_R").className = "titleBlue" ;
        document.getElementById("infoBA_R").className = "infoBlue" ;
        document.getElementById("infoBA_R").title = "Gives you " + (10*(5**ResearchUpgrades[1][0])*Math.min(ResearchUpgrades[1][0], 1)) + "P to start with.";
        document.getElementById("priceBA_R").className = "priceBlue" ;
        document.getElementById("priceBA_R").textContent = ResearchUpgradesSuffix[1][0]+" RP ("+ResearchUpgrades[1][0]+"/10)";
    }

    // AB to AC
    if (ResearchUpgrades[0][1] == 0) {
        document.getElementById("upgradeAC_R").className = "upgradeInvis" ;
        document.getElementById("titleAC_R").className = "titleInvis" ;
        document.getElementById("infoAC_R").className = "infoInvis" ;
        document.getElementById("priceAC_R").className = "priceInvis" ;
        }
    else {
        document.getElementById("upgradeAC_R").className = "upgradeBlue" ;
        document.getElementById("titleAC_R").className = "titleBlue" ;
        document.getElementById("infoAC_R").className = "infoBlue" ;
        document.getElementById("priceAC_R").className = "priceBlue" ;
        document.getElementById("priceAC_R").textContent = ResearchUpgradesSuffix[0][2]+" RP ("+ResearchUpgrades[0][2]+"/1)";
    }

    // BA to BB & CA
    if (ResearchUpgrades[1][0] == 0) {
        document.getElementById("upgradeBB_R").className = "upgradeInvis" ;
        document.getElementById("titleBB_R").className = "titleInvis" ;
        document.getElementById("infoBB_R").className = "infoInvis" ;
        document.getElementById("priceBB_R").className = "priceInvis" ;

        document.getElementById("upgradeCA_R").className = "upgradeInvis" ;
        document.getElementById("titleCA_R").className = "titleInvis" ;
        document.getElementById("infoCA_R").className = "infoInvis" ;
        document.getElementById("priceCA_R").className = "priceInvis"
        }
    else {
        document.getElementById("upgradeBB_R").className = "upgradeBlue" ;
        document.getElementById("titleBB_R").className = "titleBlue" ;
        document.getElementById("infoBB_R").className = "infoBlue" ;
        document.getElementById("priceBB_R").className = "priceBlue" ;
        document.getElementById("priceBB_R").textContent = ResearchUpgradesSuffix[1][1]+" RP ("+ResearchUpgrades[1][1]+"/3)";
        document.getElementById("infoBB_R").title = "Multiplies #8 luck by " + 3**ResearchUpgrades[1][1];
        
        document.getElementById("upgradeCA_R").className = "upgradeBlue" ;
        document.getElementById("titleCA_R").className = "titleBlue" ;
        document.getElementById("infoCA_R").className = "infoBlue" ;
        document.getElementById("priceCA_R").className = "priceBlue" ;
        document.getElementById("priceCA_R").textContent = ResearchUpgradesSuffix[2][0]+" RP ("+ResearchUpgrades[2][0]+"/99)";
        document.getElementById("infoCA_R").title = "Multiplies point gain by " + 2**ResearchUpgrades[2][0];
    }
        
    // Bb to BC & CB
    if (ResearchUpgrades[1][1] == 0) {
        document.getElementById("upgradeBC_R").className = "upgradeInvis" ;
        document.getElementById("titleBC_R").className = "titleInvis" ;
        document.getElementById("infoBC_R").className = "infoInvis" ;
        document.getElementById("priceBC_R").className = "priceInvis" ;

        document.getElementById("upgradeCB_R").className = "upgradeInvis" ;
        document.getElementById("titleCB_R").className = "titleInvis" ;
        document.getElementById("infoCB_R").className = "infoInvis" ;
        document.getElementById("priceCB_R").className = "priceInvis"
        }
    else {
        document.getElementById("upgradeBC_R").className = "upgradeBlue" ;
        document.getElementById("titleBC_R").className = "titleBlue" ;
        document.getElementById("infoBC_R").className = "infoBlue" ;
        document.getElementById("priceBC_R").className = "priceBlue" ;
        document.getElementById("priceBC_R").textContent = ResearchUpgradesSuffix[1][2]+" RP ("+ResearchUpgrades[1][2]+"/1)";
        
        document.getElementById("upgradeCB_R").className = "upgradeBlue" ;
        document.getElementById("titleCB_R").className = "titleBlue" ;
        document.getElementById("infoCB_R").className = "infoBlue" ;
        document.getElementById("priceCB_R").className = "priceBlue" ;
        document.getElementById("priceCB_R").textContent = ResearchUpgradesSuffix[2][1]+" RP ("+ResearchUpgrades[2][1]+"/1)";
    }
}


}, 3);



// POINT GAIN FUNCTION AND MORE
setInterval(function(){
    points += (pointsTotal/25)*(Date.now()-OfflineProgressCheck)/40;
    timeSinceR += 40000;

document.querySelector(":root").style.setProperty("--UIsize", (UIsize)+"px");
document.querySelector(":root").style.setProperty("--UIsizeB", (UIsize)+"%");


    OfflineProgressCheck = Date.now()
}, 40);


// SAVE FUNCTION
setInterval(function(){

    localStorage.setItem("Points", JSON.stringify(points));
    localStorage.setItem("PointUpgrades", JSON.stringify(PointUpgrades));
    localStorage.setItem("Research", JSON.stringify(research));
    localStorage.setItem("ResearchDone", JSON.stringify(researchDone));
    localStorage.setItem("ResearchUpgrades", JSON.stringify(ResearchUpgrades));
    localStorage.setItem("timeSinceR", JSON.stringify(timeSinceR));
    localStorage.setItem("UIsize", JSON.stringify(UIsize));
    localStorage.setItem("RandomNumber", JSON.stringify(PointUpgrades[2][1]));
    localStorage.setItem("OfflineProgressCheck", JSON.stringify(OfflineProgressCheck));
}, 5000);





// the 500th wall of doom
function AA_P() {
    PointUpgrades[0][0] = 1
}

function AB_P() {
    if (points >= PointUpgradesCost[0][1]) {
        if (PointUpgrades[0][1] <= (2+PointUpgrades[0][3]*12)) {
        points -= PointUpgradesCost[0][1];
        PointUpgrades[0][1] += 1;
        }
    }
}

function AC_P() {
    if (points >= PointUpgradesCost[0][2]) {
        if (PointUpgrades[0][2] <= 4) {
        points -= PointUpgradesCost[0][2];
        PointUpgrades[0][2] += 1;
        }
    }
}   

function AD_P() {
    if (points >= PointUpgradesCost[0][3]) {
        if (PointUpgrades[0][3] <= 0) {
        points -= PointUpgradesCost[0][3];
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
    if (points >= PointUpgradesCost[1][2]) {
        if (PointUpgrades[1][2] <= 0) {
        points -= PointUpgradesCost[1][2];
        PointUpgrades[1][2] = 1;
        }
    }
}

function BD_P() {
    if (points >= 250000) {
        if (PointUpgrades[1][3] <= 0) {
        points -= 125000;
        PointUpgrades[1][3] = 1;
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

function CB_P() {
    if (points >= 25000) {
        points -= 25000;
        if (ResearchUpgrades[1][2] == 0) {
            PointUpgrades[2][1] = Math.round(Math.random()*899999999999998/(2**ResearchUpgrades[1][1])+2);
        }
        else {
            PointUpgrades[2][1] = Math.round(Math.min(Math.random()*899999999999998/(2**ResearchUpgrades[1][1])*(1+ResearchUpgrades[1][2])+2, PointUpgrades[2][1]*1.004));
        }
    }
}

function CD_P() {
    if (points >= PointUpgradesCost[2][3]) {
        if (PointUpgrades[2][3] <= 6) {
        points -= PointUpgradesCost[2][3];
        PointUpgrades[2][3] += 1;
        }
    }
}

function DA_P() {
    if (points >= PointUpgradesCost[3][0]) {
        if (PointUpgrades[3][0] <= 4) {
        points -= PointUpgradesCost[3][0];
        PointUpgrades[3][0] += 1;
        }
    }
}   








function R() {
    if (points >= 12500) {
    research += PointUpgradesCost[1][1]
    researchDone = true;
        for (let i = 0; i <= 5; i++) {
        for (let ii = 0; ii <= 5; ii++) {
        PointUpgrades[i][ii] = 0
        }}
    PointUpgrades[2][1] = Qd15
    points = 10*(5**ResearchUpgrades[1][0])*Math.min(ResearchUpgrades[1][0], 1);
    }
    timeSinceR = 1;
}

function AA_R() {
    if (research >= ResearchUpgradesCost[0][0]) {
        if (ResearchUpgrades[0][0] <= 99) {
        research -= ResearchUpgradesCost[0][0];
        ResearchUpgrades[0][0] += 1;
        }
    }
}

function AB_R() {
    if (research >= ResearchUpgradesCost[0][1]) {
        if (ResearchUpgrades[0][1] <= 199) {
        research -= ResearchUpgradesCost[0][1];
        ResearchUpgrades[0][1] += 1;
        }
    }
}

function AC_R() {
    if (research >= ResearchUpgradesCost[0][2]) {
        if (ResearchUpgrades[0][2] <= 0) {
        research -= ResearchUpgradesCost[0][2];
        ResearchUpgrades[0][2] = 1;
        }
    }
}

function BA_R() {
    if (research >= ResearchUpgradesCost[1][0]) {
        if (ResearchUpgrades[1][0] <= 9) {
        research -= ResearchUpgradesCost[1][0];
        ResearchUpgrades[1][0] += 1;
        }
    }
}

function BB_R() {
    if (research >= ResearchUpgradesCost[1][1]) {
        if (ResearchUpgrades[1][1] <= 2) {
        research -= ResearchUpgradesCost[1][1];
        ResearchUpgrades[1][1] += 1;
        }
    }
}

function BC_R() {
    if (research >= ResearchUpgradesCost[1][2]) {
        if (ResearchUpgrades[1][2] <= 0) {
        research -= ResearchUpgradesCost[1][2];
        ResearchUpgrades[1][2] = 1;
        }
    }
}

function CA_R() {
    if (research >= ResearchUpgradesCost[2][0]) {
        if (ResearchUpgrades[2][0] <= 98) {
        research -= ResearchUpgradesCost[2][0];
        ResearchUpgrades[2][0] += 1;
        }
    }
}

function CB_R() {
    if (research >= ResearchUpgradesCost[2][1]) {
        if (ResearchUpgrades[2][1] <= 0) {
        research -= ResearchUpgradesCost[2][1];
        ResearchUpgrades[2][1] = 1;
        }
    }
}













function RESET() {
    for (let i = 0; i <= 5; i++) {
    for (let ii = 0; ii <= 5; ii++) {
    PointUpgrades[i][ii] = 0
    }}
    PointUpgrades[2][1] = 1000000000000000
    for (let i = 0; i <= 5; i++) {
    for (let ii = 0; ii <= 5; ii++) {
    ResearchUpgrades[i][ii] = 0
    }}
    points = 0;
    research = 0;
    researchDone = false;
}

function MOREPOINTS() {
    points *= 2;
}



function UIchange() {
    UIsize = Number(window.prompt("Enter a UI size, must be a number. (Enter a negative number for black screen, enter a non number for super wacky mode!!)"));
}
