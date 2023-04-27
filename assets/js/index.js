$("#add_book").submit(function (event) {
  alert("Dados adicionados com sucesso!");
});

$("#update_book").submit(function (event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {};

  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });

  var request = {
    url: `http://localhost:3000/api/books/${data.id}`,
    method: "PUT",
    data: data,
  };

  $.ajax(request).done(function (response) {
    alert("Dados atualizados com sucesso!");
  });
});

if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    var id = $(this).attr("data-id");

    var request = {
      url: `http://localhost:3000/api/books/${id}`,
      method: "DELETE",
    };

    if (confirm("Você realmente quer deletar esses dados ?")) {
      $.ajax(request).done(function (response) {
        alert("Dados deletados com sucesso!");
        location.reload();
      });
    }
  });
}
