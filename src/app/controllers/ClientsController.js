const jwt = require('jsonwebtoken');
const clientsRepository = require('../repositories/ClientsRepository');

class ClientsController {
  async index(request, response) {
    const { orderBy } = request.body;
    const clients = await clientsRepository.findAll(orderBy);

    response.json(clients);
  }

  async auth(request, response) {
    const { email, password } = request.body;
    const user = await clientsRepository.findClient(email, password);

    if (!user[0]) {
      return response.status(404).json({ Error: 'User not found' });
    }

    return response.json({
      user,
      token: jwt.sign(user[0], 'PRIVATEKEY'),
    });
  }

  async createUser(request, response) {
    const { username, email, password } = request.body;

    if (!username || !email || !password) {
      return response.status(400).json({ error: 'Please insert data' });
    }

    const newUser = await clientsRepository.createClient(username, email, password);

    response.status(201).json(newUser);
  }
}

module.exports = new ClientsController();
