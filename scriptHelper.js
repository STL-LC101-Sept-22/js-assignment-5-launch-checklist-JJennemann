
// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   const missionTarget = document.getElementById('missionTarget');

   missionTarget.innerHTML = `
   <h2>Mission Destination</h2>
   <ol>
       <li>Name: ${name} </li>
       <li>Diameter: ${diameter} </li>
       <li>Star: ${star}</li>
       <li>Distance from Earth: ${distance} </li>
       <li>Number of Moons: ${moons} </li>
   </ol>
   <img src="${imageUrl}">
   `
   
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
//    } else if (typeof testInput === 'Number'){
//     return "Is a Number";
//    } else if (typeof testInput !== 'Number'){
//     return "Not a Number";
//    }

// }   

function validateInput(testInput){
    if (testInput === ''){
        return 'Empty'
    } else if (isNaN(testInput)){
        return 'Not a Number'
    } else if (!isNaN(testInput)){
        return 'Is a Number'
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

const form = document.querySelector('form');
const pilotStatus = this.document.getElementById('pilotStatus');
const copilotStatus = this.document.getElementById('copilotStatus');
const fuelStatus = this.document.getElementById('fuelStatus');
const cargoStatus = this.document.getElementById('cargoStatus');

const launchStatus = document.querySelector('h2');

form.addEventListener('submit', function(event){

if (validateInput(pilot.value) !== 'Not a Number' || validateInput(copilot.value) !== 'Not a Number' || validateInput(fuelLevel.value) === 'Not a Number' || validateInput(cargoLevel.value) === 'Not a Number'){
    alert("Make sure to enter valid information for each field");
}; 

if(fuelLevel.value >=10000 && cargoLevel.value <10000){
    pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
    fuelStatus.innerHTML = "Fuel level is high enough for launch";
    cargoStatus.innerHTML = "Cargo level is low enough for launch";
    launchStatus.innerHTML = "Shuttle Ready for Launch";
    launchStatus.style.color = 'green';
    list.style.visibility = 'visible';
};

if(fuelLevel.value<10000 && cargoLevel.value < 10000){
    pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
    fuelStatus.innerHTML = "Fuel level is too low for launch";
    cargoStatus.innerHTML = "Cargo level is low enough for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = 'red';
    list.style.visibility = 'visible';
};

if(fuelLevel.value>=10000 && cargoLevel.value >= 10000){
    pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
    fuelStatus.innerHTML = "Fuel level is high enough for launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = 'red';
    list.style.visibility = 'visible';
};

if(fuelLevel.value<10000 && cargoLevel.value >= 10000){
    pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
    fuelStatus.innerHTML = "Fuel level is too low for launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = 'red';
    list.style.visibility = 'visible';
};

event.preventDefault();
});
};

async function myFetch() {
    

    let response = await fetch('https://handlers.education.launchcode.org/static/planets.json');
    let planetsReturned = await response.json();

    return planetsReturned;

    // ----original myFetch() code 
    // let planetsReturned;

    // planetsReturned = await fetch("").then( function(response) {
    //    response.json() });

    // return planetsReturned;
}

function pickPlanet(planets) {

    let i = Math.floor(Math.random() * 5)

    return planets[i];

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
