import Servico from "../models/servico.model.js";
import Proprietario from "../models/proprietario.model.js";
import Animal from "../models/animal.model.js";

async function insertServico(servico) {
  try {
    Servico.create(servico);
  } catch (err) {
    throw err;
  }
}

async function getServicos(proprietarioId) {
  try {
    return await Servico.findAll();
  } catch (err) {
    throw err;
  }
}

async function getServico(id) {
  try {
    return await Servico.findByPk(id, {
      include: {
        model: Animal,
        include: Proprietario,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function updateServico(servico) {
  try {
    return await Servico.update(servico, {
      where: {
        servicoId: servico.servicoId,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function deleteServico(id) {
  try {
    Servico.destroy({
      where: {
        servicoId: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function getServiceByProprietarioId(proprietarioId) {
  try {
    return await Servico.findAll({
      include: [
        {
          model: Animal,
          where: {
            proprietarioId,
          },
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

export default {
  insertServico,
  getServicos,
  getServico,
  updateServico,
  deleteServico,
  getServiceByProprietarioId,
};
