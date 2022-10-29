const clientsRepository = require('../repositories/ClientsRepository');

class ClientsController {
  async index(request, response) {
    const { orderBy } = request.query;
    const clients = await clientsRepository.findAll(orderBy);

    response.json(clients);
  }
}

module.exports = new ClientsController();
