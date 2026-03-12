const express = require("express");
const router = express.Router();
const Usuario = require("../models/Usuario");
const verificarToken = require("../middleware/auth");

// LISTAR TODOS
router.get("/", verificarToken, async (req, res) => {
    try {
        const usuarios = await
         Usuario.find().select("-senha");
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});


// BUSCAR POR ID
router.get("/:id", async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id).select("-senha");
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});


// CRIAR USUÁRIO
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
    try {

        const senhaCriptografada = await bcrypt.hash(req.body.senha, 10);

        const usuario = new Usuario({
            nome: req.body.nome,
            email: req.body.email,
            senha: senhaCriptografada
        });

        await usuario.save();

        res.status(201).json(usuario);

    } catch (error) {

    if (error.code === 11000) {
        return res.status(400).json({ erro: "Email já cadastrado" });
    }

    res.status(500).json({ erro: error.message });
}
});


// ATUALIZAR
router.put("/:id", async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});


// DELETAR
router.delete("/:id", async (req, res) => {
    try {
        await Usuario.findByIdAndDelete(req.params.id);
        res.json({ mensagem: "Usuário deletado" });
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

const jwt = require("jsonwebtoken");

// LOGIN
router.post("/login", async (req, res) => {
  try {

    const { email, senha } = req.body;

    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(404).json({ erro: "Usuário não encontrado" });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      return res.status(401).json({ erro: "Senha inválida" });
    }

    const token = jwt.sign(
      { id: usuario._id },
      "segredo_super_backend",
      { expiresIn: "1d" }
    );

    res.json({
      mensagem: "Login realizado com sucesso",
      token
    });

  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});
module.exports = router;