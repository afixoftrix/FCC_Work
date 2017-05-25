$(document).ready(function(){

var val='', srch = [];
/*
  $('#input').on('keyup', function (word){
    val = this.value;
    console.log( "Handler for .keypress() called." );
    if (val.length >= 3) {
      openSearch(val);
        console.log(val);
    }
  });
*/


$('.magglass').on('click', function search(){
  var vari = $("#input").val();
  console.log(vari);});



$("#input").on('keyup', function autoComplete(e){
  val = this.value;

    $.ajax({
        url: "http://en.wikipedia.org/w/api.php",
        dataType: "jsonp",
        data: {
            'action': "opensearch",
            'format': "json",
            'search': val,
            'limit': 7
        },
        success: function(data) {
            $('.list').html('');
            srch = data[1];
            srch.map(function toDom(item) {
              //counter++;
              var link = data[3].indexOf(item);
              return $('.list').append("<div class='items'>"+item+"</div>");
            });


            function appendInfo() {
              var indexNumber = data[1].indexOf(val);
              var info = data[3][indexNumber];
              if (indexNumber<0) {
                return $('.container').append('<div class="info"><div class="btx"><i class="fa fa-times-circle-o" aria-hidden="true"></i><br></div><h3 id ="error"> Error! Your search query doesnt have a match.</h3></div>');
              }
              $('.container').append('<div class="info"><div class="btx"><i class="fa fa-times-circle-o" aria-hidden="true"></i><br></div><h3 class="topic">' + val + '</h3><br><div></div><p>' + info + '</p><br><a href='+data[3][indexNumber]+' class="itemlink"><h4>More Info</h4></a></div>');
            }
            if(e.which == 13) {
              alert('You pressed enter!');
            }
            $('.items').on('click', function postData() {
              $('div.info').detach();
              var index = $(this).index();//gets index number in relation to its sibling elements.
              var item = data[1][index];
              console.log(item);
              $('.info').html('');//remove the info side section
              var info = data[2][index];
              //<div class="info"></div> info into .search
              $('.container').append('<div class="info"><div class="btx"><i class="fa fa-times-circle-o" aria-hidden="true"></i><br></div><h3 class="topic">' + item + '</h3><br><div></div><p>' + info + '</p><br><a href=' + data[3][index] + ' class="itemlink"><h4>More Info</h4></a></div>');
              $('.btx').on('click', function closeInfoBar() {
                $('div.info').detach();
              });
            });
        }
    });

});








/*
function openSearch(){
  $.ajax({
    url: "https://en.wikipedia.org/w/api.php",
    jsonp: "callback",
    dataType: 'jsonp',
    data: {
      "action": "opensearch",
      "format": "jsonfm",
      "search": val,
      "namespace": "0",
      "limit": "10"
    },
    xhrFields: {
      withCredentials: true
    },
    success: function(data){
      console.log(data);
    }
  });
}



    $.ajax( {
      type: 'GET',
      url: 'https://en.wikipedia.org/w/api.php',
      data: {
	         "action": "opensearch",
	         "format": "jsonfm",
	         "search": "api",
	         "namespace": "0",
	         "limit": "10"
      },
      success: function success() {
        alert('success!');
      }
    });
    */

});
