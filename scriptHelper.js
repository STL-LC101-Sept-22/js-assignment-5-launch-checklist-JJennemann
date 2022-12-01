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

function validateInput(testInput) {
if (testInput === ""){
    return "Is empty";
   } else if (typeof testInput === 'number'){
    return "Is a number";
   } else if (typeof testInput !== 'number'){
    return "Not a number";
   }

}   


    

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

let form = document.querySelector('form');
form.addEventListener('submit', function(event){

let pilotInput = document.getElementById('pilotName');
let copilotInput = document.getElementById('copilotName');
let fuelInput = document.getElementById('fuelLevel');
let cargoInput = document.getElementById('cargoMass');

if (validateInput(pilotInput) !== 'Not a number' || validateInput(copilotInput !== 'Not a number' || fuelInput !== 'Is a number' || cargoInput !== 'Is a number')){
    alert("Make sure to enter valid information for each field");
    event.preventDefault();
}

})

}

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
