var cname;
var cid;
  
$(document).ready(function(){
    alert("hi");
      $.ajax({
        url:'php/getname.php',
        method:'GET',
        success:function(data){
          console.log("asd")
          console.log(data);
          var obj=JSON.parse(data);
          console.log(obj)
          // console.log(data.candidate_name);
          for (var i = 0; i < obj.length; i++) {
            // data[i]
            // console.log(obj[i].candidate_name);
            console.log(obj[i].candidate_name)
            cname = obj[i].candidate_name;
            cid = obj[i].cid;
            console.log(cid)
          }
          $("#candidate_name").append(name)
          $("#cid").text(cid)

        }
      })
});	