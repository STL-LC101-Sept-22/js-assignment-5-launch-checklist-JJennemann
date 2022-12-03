// // Write your JavaScript code here!



window.addEventListener("load", function() {

//    let listedPlanets;
//    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//    let listedPlanetsResponse;
//    listedPlanetsResponse.then(function (result) {
//        listedPlanets = result;
//        console.log(listedPlanets);
//    }).then(function () {
//        console.log(listedPlanets);
//        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//    })
   
  
   const doc = document.querySelector('body');
   

   const pilotStatus = document.getElementById('pilotStatus');
   const copilotStatus = document.getElementById('copilotStatus');
   const fuelStatus = document.getElementById('fuelStatus');
   const cargoStatus = document.getElementById('cargoStatus');
   const list = [pilotStatus, copilotStatus, fuelStatus, cargoStatus];

   const pilotInput = document.getElementById('pilotName');
   const copilotInput = document.querySelector('[name=copilotName]');
   const fuelInput = document.querySelector('[name=fuelLevel]');
   const cargoInput = document.querySelector('[name=cargoMass]');
   
   

 

//    form.addEventListener('submit', function(){


   formSubmission(doc, list, pilotInput, copilotInput, fuelInput, cargoInput);
  
// })

});
