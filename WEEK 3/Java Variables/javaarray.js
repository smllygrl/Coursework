// DRY
// Don't Repeat Yourself

let pet = "Oat";
let otherPet = "Fitzy";

function feedMyPet(petName) {
  console.log(petName + " gets fed");
}

feedMyPet(pet);
feedMyPet(pet, otherPet);
