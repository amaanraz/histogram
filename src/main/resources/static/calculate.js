// Students
var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03,
    49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];

// Lower bounds -> subject to change
var bounds = [100.00,95.00,90.00,85.00,80.00,75.00,70.00,65.00,60.00,55.00,50.00,0.00];

// window.alert(grades.length);
updatecount();

function updatecount(){
    // counters for each grade
    var countAPlus = 0;
    var countA = 0;
    var countAMinus = 0;
    var countBPlus = 0;
    var countB = 0;
    var countBMinus = 0;
    var countCPlus = 0;
    var countC = 0;
    var countCMinus = 0;
    var countD = 0;
    var countF = 0;

    // progress bar for each grade
    var APlus = document.getElementById("A+");
    var A_ = document.getElementById("A");
    var AMinus = document.getElementById("A-");
    var BPlus = document.getElementById("B+");
    var B_ = document.getElementById("B");
    var BMinus = document.getElementById("B-");
    var CPlus = document.getElementById("C+");
    var C_ = document.getElementById("C");
    var CMinus = document.getElementById("C-");
    var D_ = document.getElementById("D1");
    var F_ = document.getElementById("F1");
    
    
    for(var i = 0; i < grades.length; i++){
        var current = grades[i];

        if ((current >= bounds[11]) && (current < bounds[10])) {
            countF++
            
            console.log(current + " in F " + countF);
        } else if ((current >= bounds[10]) && (current < bounds[9])) {
            countD++
            
            console.log(current + " in D " + countD);
        } else if ((current >= bounds[9]) && (current < bounds[8])) {
            countCMinus++
            
            console.log(current + " in C- " + countCMinus);
        } else if ((current >= bounds[8]) && (current < bounds[7])) {
            countC++
            
            console.log(current + " in C " + countC);
        } else if ((current >= bounds[7]) && (current < bounds[6])) {
            countCPlus++
            
            console.log(current + " in C+ " + countCPlus);
        } else if ((current >= bounds[6]) && (current < bounds[5])) {
            countBMinus++
            
            console.log(current + " in B- " + countBMinus);
        } else if ((current >= bounds[5]) && (current < bounds[4])) {
            countB++
            
            console.log(current + " in B " + countB);
        } else if ((current >= bounds[4]) && (current < bounds[3])) {
            countBPlus++
            
            console.log(current + " in B+ " + countBPlus);
        } else if ((current >= bounds[3]) && (current < bounds[2])) {
            countAMinus++
            
            console.log(current + " in A- " + countAMinus);
        } else if ((current >= bounds[2]) && (current < bounds[1])) {
            countA++
            
            console.log(current + " in A " + countA);
        } else if ((current >= bounds[1]) && (current < bounds[0])) {
            countAPlus++
            console.log(current + " in A+ " + countAPlus);
            
        }

        updateProgressBar(F_, countF);
        updateProgressBar(D_, countD);
        updateProgressBar(CMinus, countCMinus);
        updateProgressBar(C_, countC);
        updateProgressBar(CPlus, countCPlus);
        updateProgressBar(B_, countB);
        updateProgressBar(BMinus, countBMinus);
        updateProgressBar(BPlus, countBPlus);
        updateProgressBar(AMinus, countAMinus);
        updateProgressBar(A_, countA);
        updateProgressBar(APlus, countAPlus);
    }
}

function isnum(val, index, max){
    var parsedValue = parseFloat(val);
    // window.alert(parsedValue);
    var isNumeric = !isNaN(parsedValue) && isFinite(parsedValue);

    var bounded;

    if(index == 10){
        bounded = (parsedValue < bounds[index]);
    } else {
        bounded = (parsedValue < bounds[index]) && (parsedValue > bounds[index+2])
    }
    
  
    if (!isNumeric) {
        newalert("Input is not a numeric value or empty field.");
    }else if (!bounded && !max && (index != 10)) {
        newalert("Bounds Overlap! Please make sure each input is smaller than the values above, and greater than the values below");
    }else if(max && !(parsedValue > bounds[index+1])){
        newalert("Bounds Overlap! Please make sure each input is smaller than the values above, and greater than the values below");
    }

    // adjust max
    if(max && parsedValue > bounds[index+1]){
        return isNumeric && parsedValue > bounds[index+1];
    }

    return isNumeric && (bounded);
}

function getMax() {
    var val = document.getElementById("max");
    if(isnum(val.value,0,true) == false){
        val.value = bounds[0];
        return;
    };
    // check that this wont overlap
    bounds[0] = val.value;
    // window.alert(bounds[0] + " has been set as Max");
    updatecount();
}

function getA1() {
    var val = document.getElementById("A1");
    if(isnum(val.value,0,false) == false){
        val.value = bounds[1];
        return;
    };
    // check that this wont overlap
    bounds[1] = val.value;
    // window.alert(bounds + " has been set as A+");
    updatecount();
}

function getA2() {
    var val = document.getElementById("A2");
    if(isnum(val.value,1,false) == false){
        val.value = bounds[2];
        return;
    };
    // check that this wont overlap
    bounds[2] = val.value;
    // window.alert(bounds + " has been set as A+");
    updatecount();
}

function getA3() {
    var val = document.getElementById("A3");
    if(isnum(val.value,2,false) == false){
        val.value = bounds[3];
        return;
    };
    // check that this wont overlap
    bounds[3] = val.value;
    // window.alert(bounds + " has been set as A+");
    updatecount();
}

function getB1() {
    var val = document.getElementById("B1");
    if(isnum(val.value,3,false) == false){
        val.value = bounds[4];
        return;
    };
    // check that this wont overlap
    bounds[4] = val.value;
    // window.alert(bounds + " has been set as A+");
    updatecount();
}

function getB2() {
    var val = document.getElementById("B2");
    if(isnum(val.value,4,false) == false){
        val.value = bounds[5];
        return;
    };
    // check that this wont overlap
    bounds[5] = val.value;
    // window.alert(bounds + " has been set as A+");
    updatecount();
}

function getB3() {
    var val = document.getElementById("B3");
    if(isnum(val.value,5,false) == false){
        val.value = bounds[6];
        return;
    };
    // check that this wont overlap
    bounds[6] = val.value;
    // window.alert(bounds + " has been set as A+");
    updatecount();
}

function getC1() {
    var val = document.getElementById("C1");
    if(isnum(val.value,6,false) == false){
        val.value = bounds[7];
        return;
    };
    // check that this wont overlap
    bounds[7] = val.value;
    // window.alert(bounds + " has been set as A+");
    updatecount();
}

function getC2() {
    var val = document.getElementById("C2");
    if(isnum(val.value,7,false) == false){
        val.value = bounds[8];
        return;
    };
    // check that this wont overlap
    bounds[8] = val.value;
    // window.alert(bounds + " has been set as A+");
    updatecount();
}

function getC3() {
    var val = document.getElementById("C3");
    if(isnum(val.value,8,false) == false){
        val.value = bounds[9];
        return;
    };
    // check that this wont overlap
    bounds[9] = val.value;
    // window.alert(bounds + " has been set as A+");
    updatecount();
}

function getD() {
    var val = document.getElementById("D");
    if(isnum(val.value,9,false) == false){
        val.value = bounds[10];
        return;
    };
    // check that this wont overlap
    bounds[10] = val.value;
    // window.alert(bounds + " has been set as A+");
    updatecount();
}

function getF() {
    var val = document.getElementById("F");
    if(isnum(val.value,10,false) == false){
        val.value = bounds[11];
        return;
    };
    // check that this wont overlap
    bounds[11] = val.value;
    // window.alert(bounds);
    updatecount();
}

// progress bar
function updateProgressBar(progressBar, value) {
    // value = Math.round(value);
    var percentfill = (value/grades.length) * 100;
    progressBar.querySelector(".progress__fill").style.width = `${percentfill*1.4}%`;
    progressBar.querySelector(".progress__text").textContent = `${value}`;
}

function add(){
    var newgrade = document.getElementById("newgrade")
    var parsedValue = parseFloat(newgrade.value);
    // window.alert(parsedValue)
    // check if newgrade is num in between 0 and 100
    if(isNaN(parsedValue)){
        // window.alert("Not a number or empty field");
        newalert("Not a number or empty field");
        newgrade.value = "";
    } else if(parsedValue > bounds[0] || parsedValue < bounds[11]){
        newalert("Has to be between "+ bounds[11] + " and " + bounds[0]);
        newgrade.value = "";
    }

    // valid grade PUSH TO grades array and update histogram
    grades.push(parsedValue);
    updatecount();
    newgrade.value = "";
}
  

function newalert(message){
    var alert = document.getElementById("alert");
    var mess = document.getElementById("mess");
    mess.innerHTML = message;
    alert.style.display = "block";
}