function tickUp() {
    let counter = document.getElementById("counter");
    counter.textContent = parseInt(counter.textContent) + 1;
}

function tickDown() {
    let counter = document.getElementById("counter");
    counter.textContent = parseInt(counter.textContent) - 1;
}


function runForLoop() {
    let counter = parseInt(document.getElementById("counter").textContent);
    let result = "";
    
    for (let i = 0; i <= counter; i++) {
        result += i + " ";
    }
    
    document.getElementById("forLoopResult").textContent = result.trim();
}


function showOddNumbers() {
    let counter = parseInt(document.getElementById("counter").textContent);
    let result = "";
    
    for (let i = 1; i <= counter; i++) {
        if (i % 2 !== 0) {
            result += i + " ";
        }
    }
    
    document.getElementById("oddNumberResult").textContent = result.trim();
}


function addMultiplesToArray() {
    let counter = parseInt(document.getElementById("counter").textContent);
    let multiplesArray = [];
    
    for (let i = counter; i >= 5; i--) {
        if (i % 5 === 0) {
            multiplesArray.push(i);
        }
    }
    
    console.log(multiplesArray);
}


function printCarObject() {
    let carType = document.getElementById("carType").value;
    let carMPG = document.getElementById("carMPG").value;
    let carColor = document.getElementById("carColor").value;
    
    let carObject = {
        cType: carType,
        cMPG: carMPG,
        cColor: carColor
    };
    
    console.log(carObject);
}


function loadCar(carNumber) {
    let carObject;
    
    if (carNumber === 1) {
        carObject = carObject1;
    } else if (carNumber === 2) {
        carObject = carObject2;
    } else if (carNumber === 3) {
        carObject = carObject3;
    }
    
    document.getElementById("carType").value = carObject.cType;
    document.getElementById("carMPG").value = carObject.cMPG;
    document.getElementById("carColor").value = carObject.cColor;
}


function changeColor(colorNumber) {
    let paragraph = document.getElementById("styleParagraph");
    
    if (colorNumber === 1) {
        paragraph.style.color = "red";
    } else if (colorNumber === 2) {
        paragraph.style.color = "green";
    } else if (colorNumber === 3) {
        paragraph.style.color = "blue";
    }
}
