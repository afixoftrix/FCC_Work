$(document).ready(function(){

var val='', srch = [], outer = [];

$("#input").on('keyup', function autoComplete(e){
    val = this.value;

      $.ajax({
          url: "https://en.wikipedia.org/w/api.php",
          dataType: "jsonp",
          data: {
              'action': "opensearch",
              'format': "json",
              'search': val,
              'limit': 7
          },
          success: function(data) {
            outer = data;
              $('.list').html('');
              srch = data[1];
              srch.map(function toDom(item) {
                //counter++;
                //var link = data[3].indexOf(item);
                return $('.list').append("<div class='items'>"+item+"</div>");
              });

              $('.items').on('click', function postData() {
                $('div.info').detach();
                $('.info').html('');//remove the info side section
                var index = $(this).index();//gets index number in relation to its sibling elements.
                var item = data[1][index];
                var info = data[2][index];
                var link = data[3][index];
                //<div class="info"></div> info into .search
                $('.container').append('<div class="info"><div class="btx"><i class="fa fa-times-circle-o" aria-hidden="true"></i><br></div><h3 class="topic"><span class="topicDecor">' + item + '</span></h3><br><div></div><p class="infoData">' + info + '</p><br><a href='+ link +' class="itemlink"><h4 class="morefo">Wiki</h4></a></div>');
                $('.btx').on('click', function closeInfoBar() { $('div.info').detach();});
              });
          }
      });


  });
  function search(input) {
      console.log(srch[1]);
      $('div.info').detach();
      $('.info').html('');//remove the info side section
      var item = outer[1][0];
      var info = outer[2][0];
      var link = outer[3][0];
      //<div class="info"></div> info into .search
      $('.container').append('<div class="info"><div class="btx"><i class="fa fa-times-circle-o" aria-hidden="true"></i><br></div><h3 class="topic"><span class="topicDecor">' + item + '</span></h3><br><div></div><p class="infoData">' + info + '</p><br><a href='+ link +' class="itemlink"><h4 class="morefo">Wiki</h4></a></div>');
      $('.btx').on('click', function closeInfoBar() { $('div.info').detach();});


  }

  $("#searchForm").submit(function() {
      search($("#input").get(0));
      return false;
    });

  $('.magglass').on('click', function search(){
    $('div.info').detach();
    $('.info').html('');//remove the info side section
    var item = outer[1][0];
    var info = outer[2][0];
    var link = outer[3][0];
    //<div class="info"></div> info into .search
    $('.container').append('<div class="info"><div class="btx"><i class="fa fa-times-circle-o" aria-hidden="true"></i><br></div><h3 class="topic"><span class="topicDecor">' + item + '</span></h3><br><div></div><p class="infoData">' + info + '</p><br><a href='+ link +' class="itemlink"><h4 class="morefo">Wiki</h4></a></div>');
    $('.btx').on('click', function closeInfoBar() { $('div.info').detach();});

    });
});
