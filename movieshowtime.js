var testelement;
var json;


function getShowtimes(cityName,foo)
{
$.get("movieData.php?city="+cityName,function(data){testelement=data;

json='{"results" : [{'
var noOfTheaters=$(testelement).find('.theater').length;
$(testelement).find('.theater').each(function(indexTheater)   //new version
{

  
       json+='"theater" : { "name" : "' +$(this).find(".desc .name").text() + '", ';
       json+='"info":"'+$(this).find(".desc .info").text()+'",';
        json+='"movies": [';

        var noOfMovies=$(this).find('.movie').length;
        $(this).find('.movie').each(function(index){
            var poster;


  json+='{"name":"'+$(this).find(".name").text()+'",';
    json+='"info":"'+$(this).find(".info").text()+'",';
    json+='"time":"'+$(this).find(".times").text()+'"';

   // $.get("moviePoster.php?moviename="+$(this).find(".name").text(),function(data)
   //   {
   // json+='"poster":"'+data+'"';
   //   });




    json+="}";
  if(index!=noOfMovies-1)
  {
    json+=',';
  }
        });


        json+=']}';

        if(indexTheater!=noOfTheaters-1)
        {
            json+=',';
        }
    

})
json+='}]}';
//console.log(json);
foo(json);

});

}

function getMoviePoster(moviename, posterURL)
{
  $.ajax({
    url:"moviePoster.php",
    data:{"moviename":moviename},
    type:"GET",
    success: function(data){posterURL(data)}
  })
}

//old version--> $(testelement).each(function() 

