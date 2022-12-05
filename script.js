// // Write your JavaScript code here!



window.addEventListener("load", function() {
    let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let selectedPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image)
   })

//    const doc = window.document;
   
const form = document.querySelector('form');    

form.addEventListener('submit', function(event){
    const list = document.getElementById('faultyItems');
    const pilotInput = document.getElementById('pilotName');
    const copilotInput = document.querySelector('[name=copilotName]');
    const fuelInput = document.querySelector('[name=fuelLevel]');
    const cargoInput = document.querySelector('[name=cargoMass]');
   console.log(pilotInput["value"])
   
   formSubmission(window.document, list, pilotInput["value"], copilotInput["value"], fuelInput["value"], cargoInput["value"]);
   event.preventDefault();
    })

});
