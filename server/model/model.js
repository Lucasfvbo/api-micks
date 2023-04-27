const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  editora: {
    type: String,
    required: true,
  },
  anoPublicacao: {
    type: Number,
    required: true,
  },
  situacao: {
    type: String,
    required: true,
  },
});

const Bookdb = mongoose.model("bookdb", schema);

module.exports = Bookdb;
