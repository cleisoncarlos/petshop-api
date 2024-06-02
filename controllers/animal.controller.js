import AnimalService from "../services/animal.service.js";

async function createAnimal(req, res, next) {
  try {
    let animal = req.body;
    if (!animal.nome || !animal.tipo || !animal.proprietario_id) {
      throw new Error("Todas as informações são obrigatórias !");
    }
    animal = await AnimalService.createAnimal(animal);
    res.send(animal);
    logger.info(`POST / animal - ${JSON.stringify(animal)}`);
  } catch (err) {
    next(err);
  }
}

//=======================================================

async function getAnimals(req, res, next) {
  try {
    const animals = await AnimalService.getAnimals(req.query.proprietarioId);
    res.send(animals);
    logger.info("GET /animal");
  } catch (err) {
    next(err);
  }
}

//=======================================================

async function getAnimal(req, res, next) {
  try {
    res.send(await AnimalService.getAnimal(req.params.id));
    logger.info("GET /animal");
  } catch (err) {
    next(err);
  }
}

//=======================================================

async function deleteAnimal(req, res, next) {
  try {
    await AnimalService.deleteAnimal(req.params.id);
    res.end();
    logger.info("DELETE /animal");
  } catch (err) {
    next(err);
  }
}

//========================================================

async function updateAnimal(req, res, next) {
  try {
    let animal = req.body;
    if (
      !animal.animal_id ||
      !animal.nome ||
      !animal.tipo ||
      !animal.proprietario_id
    ) {
      throw new Error("Todas as informações são obrigatórias!");
    }
    if (!animal) {
      return res.status(404).send({ message: "Animal não encontrado" });
    }
    res.send(animal);
    logger.info(`PUT / animal - ${JSON.stringify(animal)}`);
    animal = await AnimalService.updateAnimal(animal);
  } catch (err) {
    next(err);
  }
}

export default {
  createAnimal,
  getAnimals,
  getAnimal,
  deleteAnimal,
  updateAnimal,
};
