$(document).ready(function(){
  var htmlRender = "";

  $('body').on('click', '[data-use="button"]', function(){
    var query = $('#search').val();
    var url = "http://api.tvmaze.com/search/shows?q=" + query;

    $.ajax({
      url : url
    }).done(function(data){
        htmlRender = htmlRender + "<ul>";
        $.each(data, function(index, value){
            htmlRender = htmlRender + "<li data-id='" + value.show.id + "'>" + value.show.name + "</li>";
        });
        htmlRender += "</ul>";
        $('[data-use="list"]').html(htmlRender);

      });
  });

  //DETAIL
  $('body').on('click', '[data-use="list"] li', function(){
    var query = $(this).data('id');

    var url = "http://api.tvmaze.com/shows/" + query;

    $.ajax({
      url : url
    }).done(function(data){
      var show = data.name;
      var language = data.language;
      var genres = data.genres;
      var runtime = data.runtime;
      var summary = data.summary;
      var htmlRender = "";
      htmlRender += "<ul><li><p class='titre'> Nom : </p> " + show + "</li>";
      htmlRender += '<li><p class="titre"> Langage : </p>' + language + '</li>';
      htmlRender += "<li><p class='titre'> Genre : </p>" + genres + "</li>";
      htmlRender += "<li><p class='titre'> Durée : </p>" + runtime + " mn </li>";
      htmlRender += "<li><p class='titre'> Sommaire : </p>" + summary + "</li></ul>";
      $('[data-use="detail"]').html(htmlRender);
    });
  });

});
