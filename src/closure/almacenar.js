function createPetList() {
    const petList = []
    return function(pet){
        if(pet){
          petList.push(pet)
          return petList
        }
        return petList
    }
  }
const myPetList = createPetList();

console.log(myPetList("michi"));
  
console.log(myPetList("firulais"));
  
console.log(myPetList());