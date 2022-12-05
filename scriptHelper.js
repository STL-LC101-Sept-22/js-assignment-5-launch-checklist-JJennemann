
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
}

function validateInput(testInput){
    if (testInput === ''){
        return 'Empty'
    } else if (isNaN(testInput)){
        return 'Not a Number'
    } else if (!isNaN(testInput)){
        return 'Is a Number'
    }
}


list.style.visibility = 'hidden';

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {


const pilotStatus = document.getElementById('pilotStatus');
const copilotStatus = document.getElementById('copilotStatus');
const fuelStatus = document.getElementById('fuelStatus');
const cargoStatus = document.getElementById('cargoStatus');
const launchStatus = document.getElementById('launchStatus');



// form.addEventListener('submit', function(event){

if (validateInput(pilot) !== 'Not a Number' || validateInput(copilot) !== 'Not a Number' || validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number'){
    alert("Make sure to enter valid information for each field");
    list.style.visibility='hidden';
    launchStatus.innerHTML = 'Awaiting Information Before Launch';
    launchStatus.style.color = 'black';
}; 

if(validateInput(pilot) === 'Not a Number' && validateInput(copilot) === 'Not a Number' && validateInput(fuelLevel) !== 'Not a Number' && validateInput(cargoLevel) !== 'Not a Number' &&fuelLevel >=10000 && cargoLevel <10000){
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    launchStatus.innerHTML = "Shuttle is Ready for Launch";
    launchStatus.style.color = 'rgb(65, 159, 106)';
    list.style.visibility = 'visible';
    console.log(pilotStatus.textContent)
};

if(validateInput(pilot) === 'Not a Number' && validateInput(copilot) === 'Not a Number' && validateInput(fuelLevel) !== 'Not a Number' && validateInput(cargoLevel) !== 'Not a Number' &&fuelLevel<10000 && cargoLevel < 10000){
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelStatus.innerHTML = "Fuel level too low for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = 'rgb(199, 37, 78)';
    list.style.visibility = 'visible';
};

if(validateInput(pilot) === 'Not a Number' && validateInput(copilot) === 'Not a Number' && validateInput(fuelLevel) !== 'Not a Number' && validateInput(cargoLevel) !== 'Not a Number' &&fuelLevel>=10000 && cargoLevel >= 10000){
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = 'rgb(199, 37, 78)';
    list.style.visibility = 'visible';
};

if(validateInput(pilot) === 'Not a Number' && validateInput(copilot) === 'Not a Number' && validateInput(fuelLevel) !== 'Not a Number' && validateInput(cargoLevel) !== 'Not a Number' &&fuelLevel<10000 && cargoLevel >= 10000){
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelStatus.innerHTML = "Fuel level too low for launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = 'rgb(199, 37, 78)';
    list.style.visibility = 'visible';
};

// preventDefault();
// });
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
