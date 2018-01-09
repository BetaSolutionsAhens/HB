$(document).ready(function(){
  $.ajaxSetup({cache: false});

  var name;
  var r_id;
  $.ajax({
    url:"php/getRname.php",
    method:"GET",
    cache:false,
    success:function(data){
      console.log(data)
      var obj = JSON.parse(data)
      for (var i = 0; i < obj.length; i++) {
        console.log(obj[i].name)
        name = obj[i].name;
      }
      $("#r_name").append(name)
    }
  })
  $("#post_sub").click(function(){
    var title=$("#job-tittle").val();
    var content=$("#job-content").val();
    var exp=$("#job-exp").val();
    var sal=$("#job-sal").val();
    var j_role=$("#jrole").val();
    var j_con=$("#jcondition").val();
    var j_loc=$("#jloc").val();


    // var skill=$("#skills_ins").val();
    var skill=$("input[name='skname']").val();
     var skilltag = skill.split(',');
     for (var i = 0; i < skilltag.length; i++) {
         //alert(strarr[i]);
     }
     var prefskill=$("input[name='pref_skname']").val();
     var skilltag1 = prefskill.split(',');
     for (var j = 0; j < skilltag1.length; j++) {
         //alert(strarr[i]);
     }
     $("#jobpost_form input, #jobpost_form textarea, #jobpost_form select").each(function(){
       if($(this).val()==""){
         $(this).next().html("This field is required");
       }
       $(this).keyup(function(){
         $(this).next().html("");
        });
     })
     var info={
       job_title:title,
       job_des:content,
       job_exp:exp,
       job_skill:skilltag,
       pskill:skilltag1,
       job_sal:sal,
       job_loc:j_loc,
       job_con:j_con,
       job_role:j_role
     }
     if($("#jobpost_form input, #jobpost_form textarea, #jobpost_form select").val()!=""){
       $.ajax({
         type:"POST",
         url:"php/jobPosting.php",
         data:{"details":info},
         cache:false,
         success:function(response){
           console.log(response);
          //  alert(response)
           if(response=="success"){
             document.getElementById('jobpost_form').reset();
             $("#skills_ins").val("");
             alert("Job Posted Successfully.")
           }
          //  if(response == "success"){
          //    window.location.href='index.html'
          //  }
          //  else if(response == "fail"){
          //    alert("Please Try again later")
          //  }
          //  else{
          //    alert("Something Went Wrong")
           //
          //  }
         }
       });
     }

  });
  // $("#skills_ins").tagit({placeholder: 'Enter Manditory Skills'})
})
