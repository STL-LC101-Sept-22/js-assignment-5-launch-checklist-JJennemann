// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

// function validateInput(testInput) {
// if (testInput === ""){
//     return "Is empty";
//    } else if (typeof testInput === 'number'){
//     return "Is a number";
//    } else if (typeof testInput !== 'number'){
//     return "Not a number";
//    }

// }   

function validateInput(testInput){
    if (testInput === ''){
        return "empty"
    } else if (isNaN(testInput)){
        return "Not a number"
    } else if (!isNaN(testInput)){
        return "Is a number"
    }
}



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

const form = document.querySelector('form');
const newPilot = list[0];
const newCopilot = list[1];
const newFuelLevel = list[2];
const newCargoLevel = list[3];
const launchStatus = document.querySelector('h2');
let launchStatusCheck = 0

// When I tried using an arry to check each step for ready for launch it would cause my page to reload immediately after hitting submit?

// let launchStatusCheck = [];
form.addEventListener('submit', function(event){

if (validateInput(pilot.value) !== 'Not a number' || validateInput(copilot.value) !== 'Not a number' || validateInput(fuelLevel.value) !== 'Is a number' || validateInput(cargoLevel.value) !== 'Is a number'){
    alert("Make sure to enter valid information for each field");
}; 

if (validateInput(pilot.value) === 'Not a number'){
    // launchStatusCheck.push(green);
    newPilot.style.visibility = 'visible';
    newPilot.innerHTML = `Pilot ${pilot.value} is ready for launch`;
    launchStatusCheck += 1;
};

if (validateInput(copilot.value) === 'Not a number'){
    newCopilot.style.visibility = 'visible';
    newCopilot.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
    // launchStatusCheck.push(green);
    launchStatusCheck += 1;
};

if(validateInput(fuelLevel.value) === 'Is a number' && fuelLevel.value >= 10000){
    newFuelLevel.style.visibility = 'visible';
    newFuelLevel.innerHTML = "Fuel level is high enough for launch";
    // launchStatusCheck.push(green);
    launchStatusCheck += 1;
};

if(validateInput(fuelLevel.value) === 'Is a number' && fuelLevel.value <= 10000){
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = 'red';
    newFuelLevel.style.visibility = 'visible';
    newFuelLevel.innerHTML = "Fuel level is too low for launch";
};

if(validateInput(cargoLevel.value) === 'Is a number' && cargoLevel.value <= 10000){
    newCargoLevel.style.visibility = 'visible';
    newCargoLevel.innerHTML = "Cargo level is low enough for launch"
    // launchStatusCheck.push(green);
    launchStatusCheck += 1;
};

if(validateInput(cargoLevel.value) === 'Is a number' && cargoLevel.value >= 10000){
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = 'red';
    newCargoLevel.style.visibility = 'visible';
    newCargoLevel.innerHTML = "Cargo mass too heavy for launch";
};

if(launchStatusCheck === 4){
    launchStatus.innerHTML = "Shuttle Ready for Launch";
    launchStatus.style.color = 'green';
}
    // newCopilot.style.visibility = 'visible';
    // newCopilot.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;

    // newPilot.style.visibility = 'visible';
    // newPilot.innerHTML = `Pilot ${pilot.value} is ready for launch`;

    // newPilot.style.visibility = 'visible';
    // newPilot.innerHTML = `Pilot ${pilot.value} is ready for launch`;
   
    event.preventDefault();
});

};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
