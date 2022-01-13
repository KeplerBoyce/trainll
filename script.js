window.onload = function() {
    indexOfMode = order.indexOf(localStorage.getItem("algsetTitle").toLowerCase());
    setAlgsetTitle();
    updateArrs();
    addAlgsetElements();
    addCaseElements();
    checkSelectedCases();
    updateCheckedCases();
    groups[indexOfMode].forEach(el => {
        updateCheckAllButton(el.name);
    });
    setRandomOrientation(false);
    updateSelectedMode("random");
}

var groups = [
    [
        {
            "displayname": "OCLLs",
            "name": "ocll",
            "numbers": "21 7"
        },
        {
            "displayname": "T shapes",
            "name": "t",
            "numbers": [33, 45]
        },
        {
            "displayname": "P shapes",
            "name": "p",
            "numbers": [31, 32, 43, 44]
        },
        {
            "displayname": "Squares",
            "name": "square",
            "numbers": [5, 6]
        },
        {
            "displayname": "Edges only",
            "name": "edges",
            "numbers": [28, 57]
        },
        {
            "displayname": "L shapes",
            "name": "l",
            "numbers": [47, 48, 49, 50, 53, 54]
        },
        {
            "displayname": "C shapes",
            "name": "c",
            "numbers": [34, 46]
        },
        {
            "displayname": "Lightning bolts",
            "name": "bolt",
            "numbers": [7, 8, 11, 12, 39, 40]
        },
        {
            "displayname": "I shapes",
            "name": "i",
            "numbers": [51, 52, 55, 56]
        },
        {
            "displayname": "Knight moves",
            "name": "knight",
            "numbers": [13, 14, 15, 16]
        },
        {
            "displayname": "Fish shapes",
            "name": "fish",
            "numbers": [9, 10, 35, 37]
        },
        {
            "displayname": "Dots",
            "name": "dot",
            "numbers": [1, 2, 3, 4, 17, 18, 19, 20]
        },
        {
            "displayname": "Awkward",
            "name": "awkward",
            "numbers": [29, 30, 41, 21]
        },
        {
            "displayname": "W shapes",
            "name": "w",
            "numbers": [36, 38]
        }
    ],//oll
    [
        {
            "displayname": "EPLLs",
            "name": "epll",
            "numbers": [1, 2, 3, 4]
        },
        {
            "displayname": "Adjacent swaps",
            "name": "adj",
            "numbers": [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
        },
        {
            "displayname": "Diagonal swaps",
            "name": "diag",
            "numbers": [17, 18, 19, 20, 21]
        }
    ],//pll
    [
        {
            "displayname": "H cases",
            "name": "h",
            "numbers": [1, 2, 3, 4]
        },
        {
            "displayname": "L cases",
            "name": "l",
            "numbers": [5, 6, 7, 8, 8, 10]
        },
        {
            "displayname": "Pi cases",
            "name": "pi",
            "numbers": [11, 12, 13, 14, 15, 16]
        },
        {
            "displayname": "T cases",
            "name": "t",
            "numbers": [17, 18, 19, 20, 21, 22]
        },
        {
            "displayname": "U cases",
            "name": "u",
            "numbers": [23, 24, 25, 26, 27, 28]
        },
        {
            "displayname": "Sunes",
            "name": "s",
            "numbers": [29, 30, 31, 32, 33, 34]
        },
        {
            "displayname": "Antisunes",
            "name": "as",
            "numbers": [35, 36, 37, 38, 39, 40]
        }
    ],//coll
    []//zbll
];
var order = ["oll", "pll", "coll"];
var algSets = [
    [
        "R U2 R2 F R F' U2 R' F R F'",
        "r U r' U2 r U2 R' U2 R U' r'",
        "r' R2 U R' U r U2 r' U M'",
        "M U' r U2 r' U' R U' R' M'",
        "l' U2 L U L' U l",
        "r U2 R' U' R U' r'",
        "r U R' U R U2 r'",
        "l' U' L U' L' U2 l",
        "R U R' U' R' F R2 U R' U' F'",
        "R U R' U R' F R F' R U2 R'",
        "r U R' U R' F R F' R U2 r'",
        "M' R' U' R U' R' U2 R U' R r'",
        "F U R U' R2 F' R U R U' R'",
        "R' F R U R' F' R F U' F'",
        "l' U' l L' U' L U l' U l",
        "r U r' R U R' U' r U' r'",
        "F R' F' R2 r' U R U' R' U' M'",
        "r U R' U R U2 r2 U' R U' R' U2 r",
        "r' R U R U R' U' M' R' F R F'",
        "r U R' U' M2 U R U' R' U' M'",
        "R U2 R' U' R U R' U' R U' R'",
        "R U2 R2 U' R2 U' R2 U2 R",
        "R2 D' R U2 R' D R U2 R",
        "r U R' U' r' F R F'",
        "F' r U R' U' r' F R",
        "R U2 R' U' R U' R'",
        "R U R' U R U2 R'",
        "r U R' U' r' R U R U' R'",
        "R U R' U' R U' R' F' U' F R U R'",
        "F R' F R2 U' R' U' R U R' F2",
        "R' U' F U R U' R' F' R",
        "L U F' U' L' U L F L'",
        "R U R' U' R' F R F'",
        "R U R2 U' R' F R U R U' F'",
        "R U2 R2 F R F' R U2 R'",
        "L' U' L U' L' U L U L F' L' F",
        "F R' F' R U R U' R'",
        "R U R' U R U' R' U' R' F R F'",
        "L F' L' U' L U F U' L'",
        "R' F R U R' U' F' U R",
        "R U R' U R U2 R' F R U R' U' F'",
        "R' U' R U' R' U2 R F R U R' U' F'",
        "F' U' L' U L F",
        "F U R U' R' F'",
        "F R U R' U' F'",
        "R' U' R' F R F' U R",
        "R' U' R' F R F' R' F R F' U R",
        "F R U R' U' R U R' U' F'",
        "r U' r2 U r2 U r2 U' r",
        "r' U r2 U' r2 U' r2 U r'",
        "F U R U' R' U R U' R' F'",
        "R U R' U R U' B U' B' R'",
        "l' U2 L U L' U' L U L' U l",
        "r U2 R' U' R U R' U' R U' r'",
        "R' F R U R U' R2 F' R2 U' R' U R U R'",
        "r' U' r U' R' U R U' R' U R r' U r",
        "R U R' U' M' U R U' r'"
    ],//oll
    [
        "M2 U M2 U2 M2 U M2",
        "M2 U M U2 M' U M2",
        "M2 U' M U2 M' U' M2",
        "M' U M2 U M2 U M' U2 M2",
        "x L2 D2 L' U' L D2 L' U L' x'",
        "x' L2 D2 L U L' D2 L U' L x",
        "R U R' U' R' F R2 U' R' U' R U R' F'",
        "x R2 F R F' R U2 r' U r U2 x'",
        "R U R' F' R U R' U' R' F R2 U' R'",
        "R U' R' U' R U R D R' U' R D' R' U2 R'",
        "R2 F R U R U' R' F' R U2 R' U2 R",
        "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R",
        "R2 U R' U R' U' R U' R2 U' D R' U R D'",
        "R' U' R U D' R2 U R' U R U' R U' R2 D",
        "R2 U' R U' R U R' U R2 U D' R U' R' D",
        "R U R' U' D R2 U' R U' R' U R' U R2 D'",
        "F R U' R' U' R U R' F' R U R' U' R' F R F'",
        "R' U R' U' y R' F' R2 U' R' U R' F R F",
        "x' L' U L D' L' U' L D L' U' L D' L' U L D x",
        "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'",
        "R' U R U' R' F' U' F R U R' F R' F' R U' R"
    ],//pll
    [
        "R U R' U R U' R' U R U2 R'",
        "F R U' R' U R U2 R' U' R U R' U' F'",
        "R U R' U R U L' U R' U' L",
        "F R U R' U' R U R' U' R U R' U' F'",
        "R' U2 R U R' U' R U R' U' R U R' U R",
        "R' U2 R' D' R U2 R' D R2",
        "R U2 R D R' U2 R D' R2",
        "F R' F' r U R U' r'",
        "x R' U R D' R' U' R D x'",
        "R' U' R U R' F' R U R' U' R' F R2",
        "R U2 R2 U' R2 U' R2 U2 R",
        "R' F2 R U2 R U2 R' F2 U' R U' R'",
        "R' U' F' R U R' U' R' F R2 U2 R' U2 R",
        "R U R' U' R' F R2 U R' U' R U R' U' F'",
        "R U' L' U R' U L U L' U L",
        "R2 D' R U R' D R U R U' R' U R U R' U R",
        "R U2 R' U' R U' R2 U2 R U R' U R",
        "R' U R U2 R' L' U R U' L",
        "l' U' L U l F' L' F",
        "F R U R' U' R U' R' U' R U R' F'",
        "r U R' U' r' F R F'",
        "R' U R2 D r' U2 r D' R2 U' R",
        "R' U' R U' R' U2 R2 U R' U R U2 R'",
        "R' F R U' R' U' R U R' F' R U R' U' R' F R F' R",
        "R2 D R' U2 R D' R' U2 R'",
        "F R U' R' U R U R' U R U' R' F'",
        "R2 D' R U2 R' D R U2 R",
        "R2 D' R U R' D R U R U' R' U' R",
        "R U R' U R U2 R'",
        "R U R' U R2 D R' U2 R D' R2",
        "L' R U R' U' L U2 R U2 R'",
        "R U R' U R U' R D R' U' R D' R2",
        "F' R U2 R' U2 R' F2 R U R U' R' F'",
        "R U' L' U R' U' L",
        "R' U' R U' R' U2 R",
        "R2 D R' U R D' R' U R' U' R U' R'",
        "R2 D R' U2 R D' R2 U' R U' R'",
        "R U2 R' U2 L' U R U' R' L",
        "R' U L U' R U L'",
        "R U' R' U2 R U' R' U2 R' D' R U R' D R"
    ]//coll
];
var nameSets = [
    [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
        "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
        "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
        "41", "42", "43", "44", "45", "46", "47", "48", "49", "50",
        "51", "52", "53", "54", "55", "56", "57"
    ],//oll
    [
        "H", "Ua", "Ub", "Z", "Aa", "Ab", "T", "Ja", "Jb", "Ra",
        "Rb", "F", "Ga", "Gb", "Gc", "Gd", "Y", "V", "E", "Na",
        "Nb"
    ],//pll
    [
        "H1", "H2", "H3", "H4", "L1", "L2", "L3", "L4", "L5", "L6",
        "Pi1", "Pi2", "Pi3", "Pi4", "Pi5", "Pi6", "T1", "T2", "T3", "T4",
        "T5", "T6", "U1", "U2", "U3", "U4", "U5", "U6", "S1", "S2",
        "S3", "S4", "S5", "S6", "AS1", "AS2", "AS3", "AS4", "AS5", "AS6"
    ]//coll
];
var indexOfMode;
var objects = [];
var algs = [];
var names = [];

var checkedCases = JSON.parse(localStorage.getItem("checkedCases"));
if (checkedCases === null) checkedCases = [];
var checkedAlgs = [];
var recapAlgs = algs;
var numToRecap;
var recapNumSuccessful;
var saveRecapText = false;
var randomOrientation = false;

var mode;
var lastCaseNum;
var lastCase;
var lastFive;
var lastFive = JSON.parse(localStorage.getItem("lastFive"));
if (lastFive === null) {
    lastFive = [];
    for (a = 0; a < order.length; a++) {
        var ar = [];
        for (var i = 0; i < algSets[a].length; i++) {
            ar.push([-1, -1, -1, -1, -1]);
        }
        lastFive.push(ar);
    }
}
var aufBefore = "";
var aufAfter = "";
//yellow green red blue orange white
var colors = ["#fff754", "#50e643", "#ff5252", "#3ba0ff", "#ffb13b", "white"];

//generates input elements for choosing algset
function addAlgsetElements() {
    var algsetDiv = document.getElementById("algsets");
    order.forEach(set => {
        var algsetContainer = document.createElement("div");
        algsetContainer.setAttribute("class", "algset-input-container");
        var inputElem = document.createElement("input");
        inputElem.setAttribute("type", "radio");
        inputElem.setAttribute("name", "algsets");
        inputElem.setAttribute("id", "algsets-" + set);
        if (set === order[indexOfMode]) inputElem.setAttribute("checked", true);
        var labelElem = document.createElement("label");
        labelElem.setAttribute("for", "algsets-" + set);
        labelElem.textContent = set.toUpperCase();
        algsetContainer.appendChild(inputElem);
        algsetContainer.appendChild(labelElem);
        algsetDiv.appendChild(algsetContainer);
    });

}

//generates dropdown menus on left with checkboxes of algs in groups
function addCaseElements() {
    objects.forEach(e => {
        const parentDiv = document.getElementById('aside');

        const newDropdown = document.createElement('div');
        newDropdown.setAttribute('class', 'dropdown');
        newDropdown.setAttribute('onchange', 'updateCheckedCases()');
        parentDiv.appendChild(newDropdown);

        const newButton = document.createElement("button");
        newButton.textContent = e.displayname;
        newButton.setAttribute('class', 'dropdown-button');
        newButton.setAttribute('id', 'dropdown-button-' + e.name);
        newButton.setAttribute('onclick', 'toggleDropdown(\'' + e.name + '\')');
        newDropdown.appendChild(newButton);

        const dropdownDiv = document.createElement('div');
        dropdownDiv.setAttribute('class', 'dropdown-content');
        dropdownDiv.setAttribute('id', e.name);
        newDropdown.appendChild(dropdownDiv);

        const inputContainer = document.createElement('div');
        inputContainer.setAttribute('class', 'input-container');
        const newInput = document.createElement('input');
        newInput.setAttribute('class', 'group-checkall');
        newInput.setAttribute('type', 'checkbox');
        newInput.setAttribute('name', e.name);
        newInput.setAttribute('id', e.name + "-checkall");
        newInput.setAttribute('onclick', 'checkAllInGroup(\'' + e.name + '\')')
        const newLabel = document.createElement('label');
        newLabel.textContent = "Select all";
        newLabel.setAttribute('for', e.name + "-checkall");
        newLabel.setAttribute('id', e.name + "-checkall-label");
        inputContainer.appendChild(newInput);
        inputContainer.appendChild(newLabel);
        dropdownDiv.appendChild(inputContainer);

        var nums = [];
        if (typeof e.numbers === "string") {
            var arrr = e.numbers.split(" ").map(x => parseInt(x));
            for (var i = arrr[0]; i < arrr[0] + arrr[1]; i++) {
                nums.push(i);
            }
        } else nums = e.numbers;
        for (var i = 0; i < nums.length; i++) {
            const inputContainer = document.createElement('div');
            inputContainer.setAttribute('class', 'input-container');
            const newInput = document.createElement('input');
            newInput.setAttribute('class', 'case-checkbox');
            newInput.setAttribute('type', 'checkbox');
            newInput.setAttribute('name', e.name);
            newInput.setAttribute('id', nums[i]);
            newInput.setAttribute('onclick', 'updateCheckAllButton(\'' + e.name + '\')');
            const newLabel = document.createElement('label');
            newLabel.textContent = names[nums[i] - 1];
            newLabel.setAttribute('for', nums[i]);
            inputContainer.appendChild(newInput);
            inputContainer.appendChild(newLabel);
            dropdownDiv.appendChild(inputContainer);
        }
    });
}

//removes dropdown menus of alg groups
function removeCaseElements() {
    var elements = document.getElementsByClassName("dropdown");
    while (elements.length > 0) elements[0].remove();
}

//handles checking/unchecking the "check all" boxes
function checkAllInGroup(name) {
    var boxArr = document.getElementsByName(name);
    var boxesToCheck = [...boxArr];
    var direction = boxesToCheck[0].checked;
    boxesToCheck.forEach(el => {
        if (el.class !== 'group-checkall') {
            if (direction) el.checked = true;
            else el.checked = false;
        }
    });
    updateCheckAllButton(name);
}

//updates box and text when tou check/uncheck the "check all" boxes
function updateCheckAllButton(name) {
    var boxArr = document.getElementsByName(name);
    var boxesToCheck = [...boxArr];
    var allBox = boxesToCheck.shift();
    var direction = true;
    boxesToCheck.forEach(el => {
        if (!el.checked) direction = false;
    });
    var label = document.getElementById(name + '-checkall-label');
    if (direction) {
        allBox.checked = true;
        label.textContent = "Deselect all";
    }
    else {
        allBox.checked = false;
        label.textContent = "Select all";
    }
}

//opens/closes dropdown menu of alg group
function toggleDropdown(id) {
    var elem = document.getElementById(id);
    if (elem.style.display !== "block") {
        elem.style.display = "block";
        elem.parentElement.firstChild.style.width = '100%';
        elem.parentElement.firstChild.style.outline = 'none';
    } else {
        elem.style.display = "none";
        elem.parentElement.firstChild.style.outline = 'none';
        elem.parentElement.firstChild.style.width = 'auto';
        var inputElements = document.getElementsByClassName('case-checkbox');
        for (var i = 0; i < inputElements.length; i++) {
            if (inputElements[i].checked && inputElements[i].name === id) {
                document.getElementById('dropdown-button-'
                    + inputElements[i].name).style.outline = '1.5px solid #81BCBB';
            }
        }
    }
}

//opens/closes dropdown menu of algset options
function toggleAlgsetDropdown() {
    var algsetDropdown = document.getElementById('algsets');
    if (algsetDropdown.style.display !== 'block') algsetDropdown.style.display = 'block';
    else algsetDropdown.style.display = 'none';
}

//updates arrays (for when you switch algsets)
function updateArrs() {
    objects = [];
    for (var i = 0; i < groups[indexOfMode].length; i++) {
        objects.push(groups[indexOfMode][i]);
    }
    algs = algSets[indexOfMode];
    names = nameSets[indexOfMode];
    checkedAlgs[indexOfMode] = JSON.parse(localStorage.getItem("checkedCases"))[indexOfMode];
    lastFive[indexOfMode] = JSON.parse(localStorage.getItem("lastFive"))[indexOfMode];
}

//sets algset title from local storage
function setAlgsetTitle() {
    var title = document.getElementById('algset-title');
    title.textContent = localStorage.getItem("algsetTitle");
}

//handles switching algsets
function updateAlgset() {
    var containers = document.getElementsByClassName('algset-input-container');
    var containerArray = [...containers];
    var title = document.getElementById('algset-title');
    containerArray.forEach(el => {
        if (el.firstElementChild.checked &&
            el.lastElementChild.textContent !== title.textContent) {
            removeCaseElements();
            var str = el.lastElementChild.textContent;
            indexOfMode = order.indexOf(str.toLowerCase());
            title.textContent = str;
            localStorage.setItem("algsetTitle", str);
            updateArrs();
            addCaseElements();
            checkSelectedCases();
            groups[indexOfMode].forEach(el => {
                updateCheckAllButton(el.name);
            });
            updateStats();
            nextCase(null);
        }
    });
}

//updates array of checked cases when you check/uncheck an alg checkbox
function updateCheckedCases() {
    checkedCases[indexOfMode] = [];
    checkedAlgs[indexOfMode] = [];
    var numSelected = 0;
    var inputElements = document.getElementsByClassName('case-checkbox');
    for (var i = 0; i < inputElements.length; i++) {
        if (inputElements[i].checked) {
            checkedCases[indexOfMode].push(inputElements[i].id);
            checkedAlgs[indexOfMode].push(algs[parseInt(inputElements[i].id) - 1]);
            numSelected++;
        }
    }
    localStorage.setItem("checkedCases", JSON.stringify(checkedCases));

    var numSelectedText = document.getElementById('num-selected');
    if (numSelected === 0) numSelectedText.textContent = "All cases selected";
    else if (numSelected === 1) numSelectedText.textContent = "1 case selected";
    else numSelectedText.textContent = "" + numSelected + " cases selected";
    if (mode === "recap") {
        mode = "random";
        var recapStats = document.getElementById("recap-stats");
        recapStats.textContent = "Recap: N/A";
        updateSelectedMode("random");
    }
    updateStats();
}

//checks boxes according to checkedCases array
function checkSelectedCases() {
    checkedCases[indexOfMode].forEach(el => {
        document.getElementById(el).checked = true;
    });
    var inputElements = document.getElementsByClassName('case-checkbox');
    for (var i = 0; i < inputElements.length; i++) {
        if (inputElements[i].checked) {
            document.getElementById('dropdown-button-'
                + inputElements[i].name).style.outline = '1.5px solid #81BCBB';
        }
    }
}

//updates mode when you press one of the mode buttons
function updateSelectedMode(newMode) {
    mode = newMode;
    if (mode === "recap") {
        if (checkedAlgs[indexOfMode].length === 0) recapAlgs = algs;
        else recapAlgs = checkedAlgs[indexOfMode];
        numToRecap = recapAlgs.length;
        recapNumSuccessful = 0;
    }
    else if (mode === "test-all") {
        recapAlgs = algs;
        numToRecap = recapAlgs.length;
        recapNumSuccessful = 0;
    }
    else if (recapAlgs.length === 0) saveRecapText = true;
    else saveRecapText = false;
    
    var buttons = document.getElementsByClassName('mode-button');
    var arr = [...buttons];
    arr.forEach(el => {
        if (el.id === mode) el.style.outline = '1.5px solid #81BCBB';
        else el.style.outline = 'none';
    });
    nextCase(null);
}

//chooses next alg for random mode
function algRandom() {
    if (checkedAlgs[indexOfMode].length === 1) return checkedAlgs[indexOfMode][0];
    else {
        var algsToSelectFrom;
        if (checkedAlgs[indexOfMode].length === 0) algsToSelectFrom = algs;
        else algsToSelectFrom = checkedAlgs[indexOfMode];
        algsToSelectFrom = algsToSelectFrom.filter(el => el !== lastCase);
        return algsToSelectFrom[Math.floor(algsToSelectFrom.length*Math.random())];
    }
}

//chooses next alg for train worst mode
function algTrainWorst() {
    if (checkedAlgs[indexOfMode].length === 1) return checkedAlgs[indexOfMode][0];
    else {
        if (checkedAlgs[indexOfMode].length === 0) worst = getWorstCases(algs.filter(x => x !== lastCase));
        else worst = getWorstCases(checkedAlgs[indexOfMode].filter(x => x !== lastCase));
        return worst[Math.floor(worst.length*Math.random())];
    }
}

//choose next alg for recap mode
function algRecap() {
    var recapStats = document.getElementById("recap-stats");
    recapStats.textContent = "Recap: " + (numToRecap - recapAlgs.length + 1) + " of " + numToRecap;
    if (numToRecap !== recapAlgs.length) recapStats.textContent += ", "
        + recapNumSuccessful + "/" + (numToRecap - recapAlgs.length) + " successful ("
        + (100 * recapNumSuccessful / (numToRecap - recapAlgs.length)).toFixed(1) + "%)";
    recapCase = recapAlgs[Math.floor(recapAlgs.length*Math.random())];
    recapAlgs = recapAlgs.filter(el => el !== recapCase);
    return recapCase;
}

//gets worst cases based on lastFive values
function getWorstCases(cases) {
    var worst = [];
    var threshold = 5;
    cases.forEach(el => {
        var tempLastFive = lastFive[indexOfMode][algs.indexOf(el)].filter(x => x !== -1);
        var score;
        if (tempLastFive.length === 0) score = 0;
        else score = tempLastFive.reduce((a, b) => a + b);
        if (score < threshold) {
            threshold = score;
            worst = [el];
        } else if (score === threshold) {
            worst.push(el);
        }
    });
    return worst;
}

//generates and displays the next case
function nextCase(remembered) {
    if (remembered !== null) {
        if (remembered) {
            lastFive[indexOfMode][lastCaseNum].shift();
            lastFive[indexOfMode][lastCaseNum].push(1);
        } else {
            lastFive[indexOfMode][lastCaseNum].shift();
            lastFive[indexOfMode][lastCaseNum].push(0);
        }
    }
    localStorage.setItem("lastFive", JSON.stringify(lastFive));

    var trainer = document.getElementById('trainer');
    var oldScramble = document.getElementById('scramble');
    if (oldScramble !== null) oldScramble.remove();

    var alg;
    var recapStats = document.getElementById('recap-stats');
    if (!saveRecapText) recapStats.textContent = "Recap: N/A";
    if (mode === "random") alg = algRandom();
    else if (mode === "train-worst") alg = algTrainWorst();
    else if (mode === "recap" || mode === "test-all") {
        if (remembered) recapNumSuccessful++;
        if (recapAlgs.length === 0) {
            recapStats.textContent = "Last recap: " + recapNumSuccessful + "/"
                + (numToRecap - recapAlgs.length) + " successful ("
                + (100 * recapNumSuccessful / (numToRecap - recapAlgs.length)).toFixed(1) + "%)";
            updateSelectedMode("random");
            return;
        }
        alg = algRecap();
    }
    
    var randomRotate = "";
    if (randomOrientation) randomRotate = genRandomRotate();
    if (randomRotate !== "") randomRotate = " " + randomRotate;
    var scrambleText = document.createElement('div');
    scrambleText.setAttribute('id', 'scramble');
    genRandomAUF();
    var completeAlg = aufBefore + alg + aufAfter + randomRotate;
    var tempAlgStr = "";
    if (remembered === false) tempAlgStr = " — Alg for previous: " + aufBefore + lastCase + aufAfter;
    genRandomAUF();
    scrambleText.textContent = "Scramble: " + invertCase(cancelMoves(completeAlg + (randomOrientation ? " z2" : "")));
    scrambleText.textContent += tempAlgStr;
    trainer.prepend(scrambleText);

    lastCase = alg;
    lastCaseNum = algs.indexOf(alg);

    updateStats();
    drawScramble(invertCase(completeAlg));
}

//updates stats section
function updateStats() {
    var percent = document.getElementById('percent');
    var successRate = document.getElementById('success-rate');
    var worstCases = document.getElementById('worst-cases');
    var numLearned = document.getElementById('num-learned');
    var totalSuccesses = 0;
    var totalAttempts = 0;
    var totalLearned = 0;
    
    objects.forEach(el => {
        var nums = [];
        if (typeof el.numbers === "string") {
            var arrr = el.numbers.split(" ").map(x => parseInt(x));
            for (var i = arrr[0]; i < arrr[0] + arrr[1]; i++) {
                nums.push(i);
            }
        } else nums = el.numbers;
        for (var i = 0; i < nums.length; i++) {
            var tempArr = lastFive[indexOfMode][nums[i] - 1].filter(num => num !== -1);
            if (tempArr.length > 0) {
                totalSuccesses += tempArr.reduce((a, b) => a + b);
                totalAttempts += tempArr.length;
            }
        }
    });
    percent.textContent = (100*(totalSuccesses / (algs.length*5))).toFixed(1) + "% completion";
    if (totalAttempts === 0) successRate.textContent = "0.0% success rate"
    else successRate.textContent = (100*(totalSuccesses / totalAttempts)).toFixed(1) + "% success rate";
    var tempStr = "Current worst of selected: ";
    if (totalSuccesses === algs.length*5) tempStr += "none!"
    else {
        var worst = getWorstCases(checkedAlgs[indexOfMode].length === 0 ? algs : checkedAlgs[indexOfMode]);
        var worstCaseNames = [];
        worst.forEach(el => {
            worstCaseNames.push(names[algs.indexOf(el)]);
        });
        tempStr += worstCaseNames.join(", ");
    }
    worstCases.textContent = tempStr;
    lastFive[indexOfMode].forEach(el => {
        if (el.reduce((a, b) => a + b) === 5) totalLearned++;
    });
    numLearned.textContent = totalLearned + "/" + algs.length + " cases fully learned";
}

//resets stats and local storage for this algset
function resetStats() {
    checkedCases[indexOfMode] = [];
    lastFive[indexOfMode] = [];
    for (var i = 0; i < algSets[indexOfMode].length; i++) {
        lastFive[indexOfMode].push([-1, -1, -1, -1, -1]);
    }
    localStorage.setItem("checkedCases", JSON.stringify(checkedCases));
    localStorage.setItem("lastFive", JSON.stringify(lastFive));
    var checkalls = document.getElementsByClassName('group-checkall');
    var checkallArr = [...checkalls];
    checkallArr.forEach(el => {
        el.checked = false;
        el.parentElement.lastChild.textContent = "Select all";
    });
    var checkboxes = document.getElementsByClassName('case-checkbox');
    var checkboxArr = [...checkboxes];
    checkboxArr.forEach(el => {
        el.checked = false;
    });
    var dropdowns = document.getElementsByClassName('dropdown-button');
    var dropdownArr = [...dropdowns];
    dropdownArr.forEach(el => {
        el.style.outline = 'none';
    })
    updateStats();
    updateSelectedMode("random");
    document.getElementById("recap-stats").textContent = "Recap: N/A";
}

//sets random orientation mode based on the button you pressed
function setRandomOrientation(bool) {
    randomOrientation = bool;
    if (bool) {
        document.getElementById('random-orient-on').style.outline = '1.5px solid #81BCBB';
        document.getElementById('random-orient-off').style.outline = 'none';
    } else {
        document.getElementById('random-orient-on').style.outline = 'none';
        document.getElementById('random-orient-off').style.outline = '1.5px solid #81BCBB';
    }
}

//generates a random rotation (string to append to alg/scramble)
function genRandomRotate() {
    var arr = [];
    var face = 6*Math.random();
    if (face < 1) arr.push("x");
    else if (face < 2) arr.push("x2");
    else if (face < 3) arr.push("x'");
    else if (face < 4) arr.push("z");
    else if (face < 5) arr.push("z'");
    var y = Math.random();
    if (y < 0.25) arr.push("y");
    else if (y < 0.25) arr.push("y'");
    else if (y < 0.25) arr.push("y2");
    return arr.join(" ");
}

//returns the inverse of a given string of moves
function invertCase(str) {
    var moves = str.split(' ').reverse();
    moves = moves.map(el => {
        if (el.length === 1) return el + "'";
        else if (el.charAt(1) === "'") return el.charAt(0);
        else return el;
    });
    return moves.join(' ');
}

//cancels adjacent moves of the same layer and rotations about the same axis
function cancelMoves(str) {
    var arr = str.split(" ");
    for (var i = 0; i < arr.length - 1; i++) {
        var a = arr[i].split('');
        var b = arr[i+1].split('');
        var totalRotation = 0;
        if (a[0] === b[0]) {
            if (a.length === 1) totalRotation++;
            else if (a[1] === "'") totalRotation--;
            else if (a[1] === "2") totalRotation += 2;
            if (b.length === 1) totalRotation++;
            else if (b[1] === "'") totalRotation--;
            else if (b[1] === "2") totalRotation += 2;
            totalRotation = (totalRotation + 4) % 4;
            if (totalRotation === 1) arr.splice(i, i+1, a[0]);
            else if (totalRotation === 2) arr.splice(i, i+1, a[0] + "2");
            else if (totalRotation === 3) arr.splice(i, i+1, a[0] + "'");
            else arr.splice(i, i+1);
        }
    }
    return arr.join(" ");
}

//generates random AUF as a string to append to case/scramble
function genRandomAUF() {
    var rand1 = Math.random();
    var rand2 = Math.random();

    if (rand1 < 0.25) aufBefore = "";
    else if (rand1 < 0.50) aufBefore = "U ";
    else if (rand1 < 0.75) aufBefore = "U' ";
    else aufBefore = "U2 ";

    if (rand2 < 0.25) aufAfter = "";
    else if (rand2 < 0.50) aufAfter = " U";
    else if (rand2 < 0.75) aufAfter = " U'";
    else aufAfter = " U2"
}

//colors divs in draw scramble area to display stickers of the scramble
function drawScramble(scramble) {
    var moves = scramble.split(" ");
    var tempState = getStartingState();
    moves.forEach(m => tempState = applyMove(tempState, m));
    var table = document.getElementById("draw-scramble");
    for (var i = 0; i < 5; i++) {
        var col = document.createElement("div");
        col.style.width = (i === 0 || i === 4) ? "25px" : "60px";
        col.style.marginRight = "5px";
        col.style.gridArea = ["a", "b", "c", "d", "e"][i];
        for (var j = 0; j < 5; j++) {
            var cell = document.createElement("div");
            cell.style.height = (j === 0 || j === 4) ? "25px" : "60px";
            cell.style.marginTop = "5px";
            if ((i === 0 || i === 4) && (j === 0 || j === 4)) cell.style.backgroundColor = "#232731"
            else if (j === 4) cell.style.backgroundColor = colors[tempState[1][i-1]];
            else if (i === 0) cell.style.backgroundColor = colors[tempState[2][j-1]];
            else if (j === 0) cell.style.backgroundColor = colors[tempState[3][i-1]];
            else if (i === 4) cell.style.backgroundColor = colors[tempState[4][j-1]];
            else if (j === 1) cell.style.backgroundColor = colors[tempState[0][i-1]];
            else if (j === 2) cell.style.backgroundColor = colors[tempState[0][i+2]];
            else if (j === 3) cell.style.backgroundColor = colors[tempState[0][i+5]];
            col.appendChild(cell);
        }
        table.appendChild(col);
    }
}

//returns the starting state of sticker array
function getStartingState() {
    return [[0, 0, 0, 0, 0, 0, 0, 0, 0],//0 1 2
            [1, 1, 1, 1, 1, 1, 1, 1, 1],//3 4 5
            [2, 2, 2, 2, 2, 2, 2, 2, 2],//6 7 8
            [3, 3, 3, 3, 3, 3, 3, 3, 3],
            [4, 4, 4, 4, 4, 4, 4, 4, 4],//U F L B R D
            [5, 5, 5, 5, 5, 5, 5, 5, 5]];
}

/*template for applyMove case
[
    [s[0][0], s[0][1], s[0][2], s[0][3], s[0][4], s[0][5], s[0][6], s[0][7], s[0][8]],
    [s[1][0], s[1][1], s[1][2], s[1][3], s[1][4], s[1][5], s[1][6], s[1][7], s[1][8]],
    [s[2][0], s[2][1], s[2][2], s[2][3], s[2][4], s[2][5], s[2][6], s[2][7], s[2][8]],
    [s[3][0], s[3][1], s[3][2], s[3][3], s[3][4], s[3][5], s[3][6], s[3][7], s[3][8]], 
    [s[4][0], s[4][1], s[4][2], s[4][3], s[4][4], s[4][5], s[4][6], s[4][7], s[4][8]],
    [s[5][0], s[5][1], s[5][2], s[5][3], s[5][4], s[5][5], s[5][6], s[5][7], s[5][8]]
];
*/

//cycles stickers in sticker array according to the move applied
function applyMove(s, m) {
    switch (m) {
        case "U":
            return [
                [s[0][6], s[0][3], s[0][0], s[0][7], s[0][4], s[0][1], s[0][8], s[0][5], s[0][2]],
                [s[4][2], s[4][1], s[4][0], s[1][3], s[1][4], s[1][5], s[1][6], s[1][7], s[1][8]],
                [s[1][0], s[1][1], s[1][2], s[2][3], s[2][4], s[2][5], s[2][6], s[2][7], s[2][8]],
                [s[2][2], s[2][1], s[2][0], s[3][3], s[3][4], s[3][5], s[3][6], s[3][7], s[3][8]], 
                [s[3][0], s[3][1], s[3][2], s[4][3], s[4][4], s[4][5], s[4][6], s[4][7], s[4][8]],
                [s[5][0], s[5][1], s[5][2], s[5][3], s[5][4], s[5][5], s[5][6], s[5][7], s[5][8]]
            ];
        case "U'":
            return applyMove(applyMove(applyMove(s, "U"), "U"), "U");
        case "U2":
        case "U2'":
            return applyMove(applyMove(s, "U"), "U");
        case "R":
            return [
                [s[0][0], s[0][1], s[1][2], s[0][3], s[0][4], s[1][5], s[0][6], s[0][7], s[1][8]],
                [s[1][0], s[1][1], s[5][8], s[1][3], s[1][4], s[5][5], s[1][6], s[1][7], s[5][2]],
                [s[2][0], s[2][1], s[2][2], s[2][3], s[2][4], s[2][5], s[2][6], s[2][7], s[2][8]],
                [s[3][0], s[3][1], s[0][8], s[3][3], s[3][4], s[0][5], s[3][6], s[3][7], s[0][2]], 
                [s[4][2], s[4][5], s[4][8], s[4][1], s[4][4], s[4][7], s[4][0], s[4][3], s[4][6]],
                [s[5][0], s[5][1], s[3][2], s[5][3], s[5][4], s[3][5], s[5][6], s[5][7], s[3][8]]
            ];
        case "R'":
            return applyMove(applyMove(applyMove(s, "R"), "R"), "R");
        case "R2":
        case "R2'":
            return applyMove(applyMove(s, "R"), "R");
        case "F":
            return [
                [s[0][0], s[0][1], s[0][2], s[0][3], s[0][4], s[0][5], s[2][8], s[2][5], s[2][2]],
                [s[1][6], s[1][3], s[1][0], s[1][7], s[1][4], s[1][1], s[1][8], s[1][5], s[1][2]],
                [s[2][0], s[2][1], s[5][6], s[2][3], s[2][4], s[5][7], s[2][6], s[2][7], s[5][8]],
                [s[3][0], s[3][1], s[3][2], s[3][3], s[3][4], s[3][5], s[3][6], s[3][7], s[3][8]], 
                [s[4][0], s[4][1], s[0][6], s[4][3], s[4][4], s[0][7], s[4][6], s[4][7], s[0][8]],
                [s[5][0], s[5][1], s[5][2], s[5][3], s[5][4], s[5][5], s[4][8], s[4][5], s[4][2]]
            ];
        case "F'":
            return applyMove(applyMove(applyMove(s, "F"), "F"), "F");
        case "F2":
        case "F2'":
            return applyMove(applyMove(s, "F"), "F");
        case "D":
            return [
                [s[0][0], s[0][1], s[0][2], s[0][3], s[0][4], s[0][5], s[0][6], s[0][7], s[0][8]],
                [s[1][0], s[1][1], s[1][2], s[1][3], s[1][4], s[1][5], s[2][6], s[2][7], s[2][8]],
                [s[2][0], s[2][1], s[2][2], s[2][3], s[2][4], s[2][5], s[3][8], s[3][7], s[3][6]],
                [s[3][0], s[3][1], s[3][2], s[3][3], s[3][4], s[3][5], s[4][6], s[4][7], s[4][8]], 
                [s[4][0], s[4][1], s[4][2], s[4][3], s[4][4], s[4][5], s[1][8], s[1][7], s[1][6]],
                [s[5][2], s[5][5], s[5][8], s[5][1], s[5][4], s[5][7], s[5][0], s[5][3], s[5][6]]
            ];
        case "D'":
            return applyMove(applyMove(applyMove(s, "D"), "D"), "D");
        case "D2":
        case "D2'":
            return applyMove(applyMove(s, "D"), "D");
        case "L":
            return [
                [s[3][6], s[0][1], s[0][2], s[3][3], s[0][4], s[0][5], s[3][0], s[0][7], s[0][8]],
                [s[0][0], s[1][1], s[1][2], s[0][3], s[1][4], s[1][5], s[0][6], s[1][7], s[1][8]],
                [s[2][6], s[2][3], s[2][0], s[2][7], s[2][4], s[2][1], s[2][8], s[2][5], s[2][2]],
                [s[5][0], s[3][1], s[3][2], s[5][3], s[3][4], s[3][5], s[5][6], s[3][7], s[3][8]], 
                [s[4][0], s[4][1], s[4][2], s[4][3], s[4][4], s[4][5], s[4][6], s[4][7], s[4][8]],
                [s[1][6], s[5][1], s[5][2], s[1][3], s[5][4], s[5][5], s[1][0], s[5][7], s[5][8]]
            ];
        case "L'":
            return applyMove(applyMove(applyMove(s, "L"), "L"), "L");
        case "L2":
        case "L2'":
            return applyMove(applyMove(s, "L"), "L");
        case "B":
            return [
                [s[4][0], s[4][3], s[4][6], s[0][3], s[0][4], s[0][5], s[0][6], s[0][7], s[0][8]],
                [s[1][0], s[1][1], s[1][2], s[1][3], s[1][4], s[1][5], s[1][6], s[1][7], s[1][8]],
                [s[0][2], s[2][1], s[2][2], s[0][1], s[2][4], s[2][5], s[0][0], s[2][7], s[2][8]],
                [s[3][2], s[3][5], s[3][8], s[3][1], s[3][4], s[3][7], s[3][0], s[3][3], s[3][6]], 
                [s[5][2], s[4][1], s[4][2], s[5][1], s[4][4], s[4][5], s[5][0], s[4][7], s[4][8]],
                [s[2][0], s[2][3], s[2][6], s[5][3], s[5][4], s[5][5], s[5][6], s[5][7], s[5][8]]
            ];
        case "B'":
            return applyMove(applyMove(applyMove(s, "B"), "B"), "B");
        case "B2":
        case "B2'":
            return applyMove(applyMove(s, "B"), "B");
        case "M":
            return [
                [s[0][0], s[3][7], s[0][2], s[0][3], s[3][4], s[0][5], s[0][6], s[3][1], s[0][8]],
                [s[1][0], s[0][1], s[1][2], s[1][3], s[0][4], s[1][5], s[1][6], s[0][7], s[1][8]],
                [s[2][0], s[2][1], s[2][2], s[2][3], s[2][4], s[2][5], s[2][6], s[2][7], s[2][8]],
                [s[3][0], s[5][1], s[3][2], s[3][3], s[5][4], s[3][5], s[3][6], s[5][7], s[3][8]], 
                [s[4][0], s[4][1], s[4][2], s[4][3], s[4][4], s[4][5], s[4][6], s[4][7], s[4][8]],
                [s[5][0], s[1][7], s[5][2], s[5][3], s[1][4], s[5][5], s[5][6], s[1][1], s[5][8]]
            ];
        case "M'":
            return applyMove(applyMove(applyMove(s, "M"), "M"), "M");
        case "M2":
        case "M2'":
            return applyMove(applyMove(s, "M"), "M");
        case "x":
            return [
                [s[1][0], s[1][1], s[1][2], s[1][3], s[1][4], s[1][5], s[1][6], s[1][7], s[1][8]],
                [s[5][6], s[5][7], s[5][8], s[5][3], s[5][4], s[5][5], s[5][0], s[5][1], s[5][2]],
                [s[2][2], s[2][5], s[2][8], s[2][1], s[2][4], s[2][7], s[2][0], s[2][3], s[2][6]],
                [s[0][6], s[0][7], s[0][8], s[0][3], s[0][4], s[0][5], s[0][0], s[0][1], s[0][2]], 
                [s[4][2], s[4][5], s[4][8], s[4][1], s[4][4], s[4][7], s[4][0], s[4][3], s[4][6]],
                [s[3][0], s[3][1], s[3][2], s[3][3], s[3][4], s[3][5], s[3][6], s[3][7], s[3][8]]
            ];
        case "x'":
            return applyMove(applyMove(applyMove(s, "x"), "x"), "x");
        case "x2":
        case "x2'":
            return applyMove(applyMove(s, "x"), "x");
        case "y":
            return [
                [s[0][6], s[0][3], s[0][0], s[0][7], s[0][4], s[0][1], s[0][8], s[0][5], s[0][2]],
                [s[4][2], s[4][1], s[4][0], s[4][5], s[4][4], s[4][3], s[4][8], s[4][7], s[4][6]],
                [s[1][0], s[1][1], s[1][2], s[1][3], s[1][4], s[1][5], s[1][6], s[1][7], s[1][8]],
                [s[2][2], s[2][1], s[2][0], s[2][5], s[2][4], s[2][3], s[2][8], s[2][7], s[2][6]], 
                [s[3][0], s[3][1], s[3][2], s[3][3], s[3][4], s[3][5], s[3][6], s[3][7], s[3][8]],
                [s[5][6], s[5][3], s[5][0], s[5][7], s[5][4], s[5][1], s[5][8], s[5][5], s[5][2]]
            ];
        case "y'":
            return applyMove(applyMove(applyMove(s, "y"), "y"), "y");
        case "y2":
        case "y2'":
            return applyMove(applyMove(s, "y"), "y");
        case "z":
            return [
                [s[2][6], s[2][3], s[2][0], s[2][7], s[2][4], s[2][1], s[2][8], s[2][5], s[2][2]],
                [s[1][6], s[1][3], s[1][0], s[1][7], s[1][4], s[1][1], s[1][8], s[1][5], s[1][2]],
                [s[5][0], s[5][3], s[5][6], s[5][1], s[5][4], s[5][7], s[5][2], s[5][5], s[5][8]],
                [s[3][6], s[3][3], s[3][0], s[3][7], s[3][4], s[3][1], s[3][8], s[3][5], s[3][2]], 
                [s[0][6], s[0][3], s[0][0], s[0][7], s[0][4], s[0][1], s[0][8], s[0][5], s[0][2]],
                [s[4][6], s[4][3], s[4][0], s[4][7], s[4][4], s[4][1], s[4][8], s[4][5], s[4][2]]
            ];
        case "z'":
            return applyMove(applyMove(applyMove(s, "z"), "z"), "z");
        case "z2":
        case "z2'":
            return applyMove(applyMove(s, "z"), "z");
        case "u":
            return applyMove(applyMove(s, "D"), "y");
        case "u'":
            return applyMove(applyMove(s, "D'"), "y'");
        case "u2":
        case "u2'":
            return applyMove(applyMove(s, "D2"), "y2");
        case "r":
            return applyMove(applyMove(s, "L"), "x");
        case "r'":
            return applyMove(applyMove(s, "L'"), "x'");
        case "r2":
        case "r2'":
            return applyMove(applyMove(s, "L2"), "x2");
        case "f":
            return applyMove(applyMove(s, "B"), "z");
        case "f'":
            return applyMove(applyMove(s, "B'"), "z'");
        case "f2":
        case "f2'":
            return applyMove(applyMove(s, "B2"), "z2");
        case "d":
            return applyMove(applyMove(s, "U"), "y'");
        case "d'":
            return applyMove(applyMove(s, "U'"), "y");
        case "d2":
        case "d2'":
            return applyMove(applyMove(s, "U2"), "y2");
        case "l":
            return applyMove(applyMove(s, "R"), "x'");
        case "l'":
            return applyMove(applyMove(s, "R'"), "x");
        case "l2":
        case "l2'":
            return applyMove(applyMove(s, "R2"), "x2");
        case "b":
            return applyMove(applyMove(s, "F"), "z'");
        case "b'":
            return applyMove(applyMove(s, "F'"), "z");
        case "b2":
        case "b2'":
            return applyMove(applyMove(s, "F2"), "z2");
    }
}
