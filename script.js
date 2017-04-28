$(document).ready(function (){

  $('#search').click(function(){
    var searchTerm =$('#searchTerm').val();
    var url = "https://crossorigin.me/https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +
    "&limit=10&namespace=0&format=json";

    $.ajax({
      type: "GET",
      url: url,
      async:false,
      dataType: "json",
      success: function(data){
      // heading console.log(data[1][0]);
      // desc console.log(data[2][0]);
      //link  console.log(data[3][0]);
        $("#output").html("");
        for (var i = 0; i<data.length; i++){
        $("#output").append("<li><a href =" +data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
        }
      },
      error: function(errorMessage){
        console.alert("Error!");
      }
    });
  });
});
