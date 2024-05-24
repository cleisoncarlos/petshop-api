import AnimalRepository from "../repositories/animal.repository.js";

async function createAnimal(animal) {
  return await AnimalRepository.insertAnimal(animal);
}

async function getAnimals(productId) {

  if(productId){
    return await AnimalRepository.getAnimalsByProprietarioId(productId);  
  }
  return await AnimalRepository.getAnimals();
}

async function getAnimal(id) {
  return await AnimalRepository.getAnimal(id);
}

async function deleteAnimal(id) {
    await AnimalRepository.deleteAnimal(id);
  }


  async function updateAnimal(animal) {
    await AnimalRepository.updateAnimal(animal);
  }


  async function findByProprietarioId(id) {
    return await AnimalRepository.findByProprietarioId(id);
  }
  


export default {
  createAnimal,
  getAnimals,
  getAnimal,
  deleteAnimal,
  updateAnimal,
  findByProprietarioId
 

};
