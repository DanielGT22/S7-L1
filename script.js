class user {
  constructor(_name, _surName, _age, _location) {
    this.name = _name;
    this.surName = _surName;
    this.age = _age;
    this.location = _location;
  }

  showPerson() {
    return (
      "My name is " +
      this.name +
      " " +
      this.surName +
      "." +
      "I am " +
      this.age +
      " years old. " +
      "My house is in the northeast section of " +
      this.location +
      "."
    );
  }
}
const kira = new user("Kira", "Yoshikage", "33", "Morioh");
console.log(kira);
console.log(kira.showPerson());

const jojo = new user("Josuke", "Higashikata", "17", "Morioh");
console.log(jojo.showPerson());

const older =
  kira.age > jojo.age
    ? "Kira is older than " + jojo.name
    : "Jojo is older than " + kira.name;
console.log(older);

//
//
//
//

const petNameInput = document.getElementById("petName");
const ownerInput = document.getElementById("ownerName");
const speciesInput = document.getElementById("species");
const breedInput = document.getElementById("breed");

const pets = [];
class pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
}

const petList = function () {
  const contactsList = document.querySelector("ul");
  contactsList.innerHTML = "";
  pets.forEach((pet) => {
    const newLi = document.createElement("li");
    newLi.innerText = `${pet.petName} ${pet.ownerName} ${pet.species} ${pet.breed}`;
    contactsList.appendChild(newLi);
  });
};
const formReference = document.querySelector("form");
formReference.addEventListener("submit", function (e) {
  e.preventDefault();
  const newPet = new pet(
    petNameInput.value,
    ownerInput.value,
    speciesInput.value,
    breedInput.value
  );

  console.log("Pet added", newPet);
  pets.push(newPet);
  petNameInput.value = "";
  ownerInput.value = "";
  speciesInput.value = "";
  breedInput.value = "";
  petList();
});
const ownerNames = [];
const same = [];

function sameOwner(params) {
  for (let i = 0; i < pets.length; i++) {
    const element = array[i];
  }
}
