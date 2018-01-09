$(document).ready(function(){
  $.ajaxSetup({cache: false});

  $.ajax({
    url:'php/r_jobfeed.php',
    method:'GET',
    cache:false,
    success:function(data){
      $("#JobFeed").load("php/r_jobfeed.php #news_feed");
      $("#JobFeed").show();
      $("#jobView").hide();

    }

  })

});
