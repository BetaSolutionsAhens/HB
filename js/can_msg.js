var cname;
var cid;
var tag ="";
var msgdiv="";
$(document).ready(function(){
  $.ajaxSetup({cache: false});
  
  $(document).on('click', '.msg', function(){
       // Your Code
      //  alert("hi")
      var cid = $(this).attr('name')
      var rid = $(this).attr('id')
      console.log(cid)
    // $('a[href="#tab5"]').tab('show');
      // $("#myModal").modal('show')
      window.location.href="newsfeed-messages.html?r_id="+encodeURIComponent(rid)+"&c_id="+encodeURIComponent(cid) ;

  });
      // $.ajax({
      //   url:'php/getname.php',
      //   method:'GET',
      //   success:function(data){
      //     console.log("asd")
      //     console.log(data);
      //     var obj=JSON.parse(data);
      //     console.log(obj)
      //     // console.log(data.candidate_name);
      //     for (var i = 0; i < obj.length; i++) {
      //       // data[i]
      //       // console.log(obj[i].candidate_name);
      //       console.log(obj[i].candidate_name)
      //       cname = obj[i].candidate_name;
      //       cid = obj[i].cid;
      //       console.log(cid)
      //       tag += '<a href="timeline.html" class="text-white" name="'+cid+'" id="candidate_name">'+cname+'</a>'
      //     }
      //     $("#c_name").append(tag)
      //     var c_id = $("#candidate_name").attr("name");
      //       $.ajax({
      //     url:'php/can_msg.php',
      //     method:'POST',
      //     data:{cid:c_id},
      //     success:function(data){
      //         console.log(data);
      //         var res=JSON.parse(data);
      //         console.log(res)
      //         for (var i = 0; i < res.length; i++) {
      //           // res[i]
      //           msgdiv += '<li>'+
      //               '<div style="border-bottom:1px solid #c0c0c0">'+
      //                 ' <a href="" style="color:#149AC9">Profile</a>'+
      //               '</div>'+
      //           '</li>';
      //         }
      //         // console.log("hi")
      //     }
      // })
      //   }
      // });
//      var c_id = $("p:hidden").text();
//      console.log(c_id)

});
