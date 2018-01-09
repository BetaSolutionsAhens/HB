$(document).ready(function(){
  $.ajaxSetup({cache: false});
  var newpswd;
  var cnfrmpswd;
  function validate(){
    var newpswd=$("#new_pswd").val();
    var cnfrmpswd=$("#cnfrm_pswd").val();
    if(newpswd == cnfrmpswd){
      $("#pswd_err").html("")
    }else{
      $("#pswd_err").html("Password not Matches")
    }
  }
  $("#cnfrm_pswd").keyup(validate);

  $("#can_button").click(function(){
    var oldpswd=$("#old_pswd").val();
    var newpswd=$("#new_pswd").val();
    var cnfrmpswd=$("#cnfrm_pswd").val();
    // var rid=2;
    $("input[type='password']").each(function(){
      if($(this).val()==''){
				$(this).next().html("This field is required")
			}
			else{
        $(this).next().html("")

				// $('#pswd_change span').text("")
			}
			$(this).keyup(function(){
				$(this).next().html(" ")
        $("#cnfrm_pswd").keyup(validate);

				// $("#login_form span").text("");
			});
    })
    if(newpswd == cnfrmpswd){
      if(oldpswd!=""&&cnfrmpswd!="")
      {
        $.ajax({
          type:'POST',
          url:'php/accountsettings.php',
          data:{old:oldpswd,new:newpswd},
          cache:false,
          success:function(response){
            console.log(response)
            if(response=='Updated'){
              alert("Password Succesfully Updated.");
              document.getElementById('pswd_change').reset();
              // $("#pswd_change").reset();?
              window.location.href = 'php/log_out.php';

            }
            else if(response=='NotUpdated'){
              alert("Server down! Try again later.")
            }else if(response=='new'){
              $("#new_ps").html("Password should not be a previous one.")
            }else if(response == 'old'){
              console.log("bjsd")
              $("#old_ps").html("Incorrect passwoed.")

            }else{

            }
          }
        })
      }
    }
    else{
      $("#cnfrm_pswd").keyup(validate);
    }
  })
})
