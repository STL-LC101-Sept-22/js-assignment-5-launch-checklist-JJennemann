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

console.log(list);
// console.log(document, list, pilot, copilot, fuelLevel, cargoLevel)
document.addEventListener('submit', function(event){


if (validateInput(pilot.value) !== 'Not a number' || validateInput(copilot.value) !== 'Not a number' || validateInput(fuelLevel.value) !== 'Is a number' || validateInput(cargoLevel.value) !== 'Is a number'){
    // alert("Make sure to enter valid information for each field");
    alert(`${validateInput(pilot.value)} ${pilot.value}
    ${validateInput(copilot.value)} ${copilot.value}
    ${validateInput(fuelLevel.value)} ${fuelLevel.value}
    ${validateInput(cargoLevel.value)} ${cargoLevel.value}
   `)
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
