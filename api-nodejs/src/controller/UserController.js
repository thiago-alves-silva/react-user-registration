const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const User = mongoose.model('User');

const checkExistingUser = async (email, cpf) => 
  await User.findOne({email}).count() || await User.findOne({cpf}).count();

module.exports = {
  async allUsers(req, res) {
    const users = await User.find();
    return res.json(users);
  },
  async createUser(req, res) {
    try {
      const checkUser = await checkExistingUser(req.body.email, req.body.cpf);
      if(!checkUser) {
        const user = await User.create(req.body);

        user.password = null
        return res.json(user);
      } else return res.send({ error: "Usuário já cadastrado" });
    } catch(err) {
      return res.send({ error: "Falha no cadastro do usuário" });
    }
  },
  async readUser(req, res) {
    try {
      const user = await User.findById(req.params.id)
      return res.json(user)
    } catch(err) {
      return res.send({ error: "Falha ao buscar as informações de usuário" })
    }
  },
  async checkUser(req, res) {
    try {
      const user = await User.findOne({ email: req.params.email}).select('+password');
      if(!user) return res.send({ error: "Usuário não encontrado" });
      
      const passwordComparison = await bcrypt.compare(req.params.password, user.password)
      if(!passwordComparison) return res.
        send({ error: "A senha informada está incorreta" });

      user.password = null

      return res.json(user);
    } catch(err) {
      return res.send({ error: "Falha na verificação de usuário" });
    }
  }
}