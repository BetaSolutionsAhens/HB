var name;
var cid;
var id;
   $(document).ready(function(){
     $.ajaxSetup({cache: false});

      $.ajax({
        url:'php/getname.php',
        method:'GET',
        cache:false,
        success:function(data){
          // console.log("asd")
          console.log(data);
          var obj=JSON.parse(data);
          console.log(obj)
          // console.log(data.candidate_name);
          for (var i = 0; i < obj.length; i++) {
            // data[i]
            // console.log(obj[i].candidate_name);
            console.log(obj[i].candidate_name)
            name = obj[i].candidate_name;
            cid = obj[i].cid;
            console.log(cid)
          }
          $("#candidate_name").append(name)
          $("#cid").text(cid)
          $("#msglink").attr('name',cid)



        }
      })
      $.ajax({
        url:'php/newsfeed.php',
        method:'GET',
        cache:false,
        success:function(data){
          $("#JobFeed").load("php/newsfeed.php #news_feed");
          id = $("#cid").text();
        }

      })
      $("#msglink").click(function(){
        var can = $(this).attr("name");
        window.location.href="c_messages.html?c_id="+encodeURIComponent(can);

      })
    });
