
$(document).ready(function(){
  $.ajaxSetup({cache: false});

  $("#recru_sub").click(function(){
    // alert("dfvbsf")
    var fname= $("#name").val()
    var uname= $("#u_name").val()
    var mobile= $("#contact").val()
    var lnum = $("#landline").val()
    var mail= $("#log_mail").val()
    var altmail= $("#alt_mail").val()
    var pass= $("#log_psw").val()
    var cname= $("#comp_name").val()
    var desg= $("#desig").val()
    var ins= $("#industry_type").val()
    var country= $("#countryId").val()
    var state= $("#stateId").val()
    var city=$("#cityId").val()
    var pincode= $("#pincode").val()
    var button=$("#recru_sub").val()
    var taskArray = new Array();
    $("#signup_form input, #signup_form select").each(function(){
      if($(this).val()==''){
				$(this).next().html("This field is required");
			}
				 $(this).keyup(function(){
					 $(this).next().html("");
		    	});

		});
    var details= {
            f_name:fname,
            u_name:uname,
            contact:mobile,
            l_num:lnum,
            email:mail,
            alt_mail:altmail,
            psw:pass,
            c_name:cname,
            desgn:desg,
            inds:ins,
            coun:country,
            r_state:state,
            r_city:city,
            r_pin:pincode
          };
          console.log(details);
    // if($("#signup_form input, #signup_form select").val()!=""){
      $.ajax({
        type:"POST",
        url:"php/r_info.php",
        data:{"details":details},
        cache:false,
        success:function(response){
          console.log(response);
          // alert(response)
          if(response == "success"){
            window.location.href='index-register.html'
          }
          else if(response == "fail"){
            alert("Please Try again later")
          }
          else{
            alert("Something Went Wrong")

          }
        }
      })
  })

})
