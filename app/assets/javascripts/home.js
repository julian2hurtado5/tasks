homeTask = function(){
  $.ajax({
  url: "http://localhost:3000/api/v1/tasks",
  method: "get",
  success: function(task){
    $.each(task, function(index, row){
      var newRowContent;

      if (!row.done) {
        // console.log(row.done);
        newRowContent =
        `<tr>
        <a href="http://localhost:3000/api/v1/tasks/+${row.id}"><td class="${row.done}" id="${row.id}">${row.description}</td></a>
        <td></td>
        </tr>`
      }
      else {
        newRowContent =
        `<tr>
        <td></td>
        <td class="${row.done}" id="${row.id}">${row.description}</td>
        </tr>`
      }
      $("tbody").append(newRowContent);
    })
  }
  })

  $("#table").on('click', 'td', function(e){
    var dataTask = {}
    if ($(this).attr("class") === "true") {
      dataTask =
        {
          "task":
          {
            "done": false,
            "description": $(this).html()
          }
        }
    }
    else {
      dataTask =
      {
        "task":
        {
          "done": true,
          "description": $(this).html()
        }
      }
    }
    console.log(dataTask);
      if ($(this).attr('id') >= 0) {

        $.ajax({
          url: "http://localhost:3000/api/v1/tasks/" + $(this).attr('id'),
          type: "put",
          data: JSON.stringify(dataTask),
          contenType: "application/json",
          dataType: "json",
          success: function(e){
            console.log("Entro succes");
          }
        })
      }
  })
}
