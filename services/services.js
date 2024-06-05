const axios = require("axios");
module.exports = class Services {
  //VERIFICAR USUÁRIO
  static async UsuarioLogin(req, res) {
    let valores = req.body;
    const options = {
      url: "https://abb2b1aa-f6aa-4404-ab1d-64b3f5457026-00-l77zeq8iim22.janeway.replit.dev/login",
      method: "POST",
      data: valores,
    };
    axios(options).then((usuario) => {
      if (usuario != undefined) {
        return res.render("logado");
      }
    });
  }
  //Create usuário
  static async UsuarioCreate(req, res) {
    let valores = req.body;
    const options = {
      url: "https://abb2b1aa-f6aa-4404-ab1d-64b3f5457026-00-l77zeq8iim22.janeway.replit.dev/add_usuario",
      method: "POST",
      data: valores,
    };
    axios(options);
    const mensagem = "Cadastro realizado com sucesso!";
    res.render("mensagem", { mensagem });
  }
  //Create produto
  static async ProdutoCreate(req, res) {
    let valores = req.body;
    const options = {
      url: "https://abb2b1aa-f6aa-4404-ab1d-64b3f5457026-00-l77zeq8iim22.janeway.replit.dev/add_produtos",
      method: "POST",
      data: valores,
    };
    axios(options);
    const mensagem = "Cadastro realizado com sucesso!";
    res.render("mensagem", { mensagem });
  }
  //LISTAR PRODUTOS
  static async ProdutoListar(req, res) {
    const options = {
      url: "https://abb2b1aa-f6aa-4404-ab1d-64b3f5457026-00-l77zeq8iim22.janeway.replit.dev/produtos",
      method: "GET",
      data: {},
    };
    axios(options).then((response) => {
      console.log(response.data);
      const produto = response.data;
      res.render("produtos/listar", { produto });
    });
  }
};
