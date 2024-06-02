import Animal from "../models/animal.model.js";
import Proprietario from "../models/proprietario.model.js";

async function insertAnimal(animal) {
  try {
    Animal.create(animal);
  } catch (err) {
    throw err;
  }
}

async function getAnimals() {
  try {
    return await Animal.findAll({
      include: {
        model: Proprietario,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function getAnimalsByProprietarioId(proprietarioId) {
  try {
    return await Animal.findAll({
      where: {
        proprietarioId,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function getAnimal(id) {
  try {
    return await Animal.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function updateAnimal(animal) {
  try {
    return await Animal.update(animal, {
      where: {
        animalId: animal.animalId,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function deleteAnimal(id) {
  try {
    Animal.destroy({
      where: {
        animalId: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function findByProprietarioId(proprietarioId) {
  try {
    return await Animal.findAll({
      include: [
        {
          model: Proprietario,
          where: {
            proprietarioId: proprietarioId,
          },
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

export default {
  insertAnimal,
  getAnimals,
  getAnimal,
  getAnimalsByProprietarioId,
  updateAnimal,
  deleteAnimal,
  findByProprietarioId,
};
