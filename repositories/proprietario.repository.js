import Proprietario from "../models/proprietario.model.js";

async function insertProprietario(proprietario) {
  try {
    Proprietario.create(proprietario);
  } catch (err) {
    throw err;
  }
}

async function getProprietarios() {
  try {
    return await Proprietario.findAll();
  } catch (err) {
    throw err;
  }
}

async function getProprietario(id) {
  try {
    return await Proprietario.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function updateProprietario(proprietario) {
  try {
    await Proprietario.update(
      proprietario,
      {
        nome: proprietario.nome,
        telefone: proprietario.telefone,
      },
      {
        where: {
          proprietarioId: proprietario.proprietarioId,
        },
      }
    );
    // return await getProprietario(proprietario.proprietarioId);
  } catch (err) {
    throw err;
  }
}

async function deleteProprietario(id) {
  try {
    Proprietario.destroy({
      where: {
        proprietarioId: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

export default {
  insertProprietario,
  getProprietarios,
  getProprietario,
  updateProprietario,
  deleteProprietario,
};
