var Bookdb = require("../model/model");

exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    Bookdb.findById(id)
      .then((data) => {
        if (!data) {
          res
            .status(404)
            .send({ message: "Não foi possível encontrar o ID:" + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: "Erro ao retornar o livro com a ID descrita" + id });
      });
  } else {
    Bookdb.find()
      .then((book) => {
        res.send(book);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Erro ao tentar encontrar a informação",
        });
      });
  }
};

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Conteudo não pode ser criado!" });
    return;
  }

  const book = new Bookdb({
    titulo: req.body.titulo,
    editora: req.body.editora,
    anoPublicacao: req.body.anoPublicacao,
    situacao: req.body.situacao,
  });

  book
    .save(book)
    .then((data) => {
      //res.send(data);
      res.redirect("/add-book");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Algum erro ocorreu na operação de criação",
      });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res
      .status(400)
      .send({ message: "Os dados não podem ser atualizados, verifique!" });
  }

  const id = req.params.id;
  Bookdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Não foi possivel atualizar os dados do livro ${id}`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res
        .stats(500)
        .send({ message: "Erro ao atualizar as informações do livro" });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Bookdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Não foi possivel encontrar a id ${id}, talvez ela esteja errada`,
        });
      } else {
        res.send({ message: "Livro deletado com sucesso!" });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Não foi possivel deletar o livro com o id" + id,
      });
    });
};
