var can_id;
var rec_id;
$(document).ready(function(){
	$.ajaxSetup({cache: false});
	// CANDIDATE REGISTRATION FORM FUNCTIONALITY
	$("#c_regbtn").click(function(){
		var name=$("#fullname").val();
		// alert(name)

		var user=$("#uname").val();
		var con=$("#contact").val();
		var em=$("#email").val();
		var psw=$("#password").val();
		var chk=$("#chk").val();
		var sg_sub=$("#c_regbtn").val();
		$("#register_form input, #register_form select").each(function(){
			if($(this).val()==''){
				$(this).next().html("This field is required");
			}
				 $(this).keyup(function(){
					 $(this).next().html(" ");
		    	});

		});
		var data={name:name,un:user,contact:con,email:em,password:psw,chk:chk,sg_sub:sg_sub}
  	if($("#register_form input, #register_form select").val()!=''){
		$.ajax({
			type:"POST",
			url:"php/insert.php",
			data:{c_reg:data},
			success:function(data){
				// alert("hiii")
				// alert(data);
				console.log(data)
				if(data=="success1")
				{
					alert("Registered Successfully")

					document.getElementById("register_form").reset();
					// $("#login").tabs('show');
					$("#login").removeClass("active");

					 $("#register").addClass("active");

					 window.location.href="index.html";

				}
				else{
					alert("registration not success");
					document.getElementById("register_form").reset();

				}

			}
		});

		}
	});
// LOGIN FORM FUNCTIONALITY
	var msg="This field is required";
// for login
// $(document).ready(function(){
	$("#log_sub").click(function(){

		// debugger;
		var mail = $("#log_mail").val();
		// alert(mail)
		var pass = $("#log_psw").val();
		// alert(pass)
		var log_btn=$("#log_sub").val();
		var radioValue = $("input[name='user_type']:checked").val();
		alert(radioValue)

		$("#login_form input, #login_form select").each(function(){
			if($(this).val()==''){
				$(this).next().html("This field is required")
				console.log("hgfhf");
			}
			else{
				$('#login_form span').text("")
			}
			$(this).keyup(function(){
				$(this).next().html(" ")
				// $("#login_form span").text("");
			});
		});
		if(mail!="" && pass!="" && radioValue=="Candidate"){
			$.ajax({
				method: "POST",
				url: "php/insert.php",
				data: {m:mail,p:pass,login_btn:log_btn},
				success:function(data){
					console.log(data);
					// alert(data)
					// alert("sdbcyusdvcsdyu")
					// return {data}

					// $("#login_error").html(data);
					if(data==0){
							// alert("success");
							console.log("first");
							window.location.href='can_3steps.html';
						}
						else if(data==1){
							console.log("second");
							window.location.href='newsfeed.html';
						}
						else{
							alert("Invalid username or Password");
						}
				}
			})
		}
		else if(mail!="" && pass!="" && radioValue=="Recuriter"){
			$.ajax({
				method: "POST",
				url: "php/r_login.php",
				data: {m:mail,p:pass,radiobtn:radioValue},
				cache:false,
				success:function(data){
					console.log(data);
					if(data==0){
							// alert("success");
							console.log("first");
							window.location.href='r_jobpost.html';
						}
						else if(data==1){
							console.log("second");
							window.location.href='r_jobpost.html';
						}
						else{
							alert("Invalid username or Password");
						}
				}
			})
		}
	});
// RESET PASSWORD
	$("#fp_sub").click(function(){
		var fp_email=$("#fp_mail").val();
		//var login_pass=$("#user_name").val();
		var fp_btn=$("#fp_sub").val();
		$.ajax({
			type:"POST",
			url:"php/insert.php",
			data:{fp_email:fp_email,fp_btn:fp_btn},
			cache:false,
			success:function(data){
				alert(data);

			}
		});
	});
// UPDATE PASSWORD
	$("#up_sub").click(function(){
		var update_ps1=$("#up_ps1").val();
		var update_ps2=$("#up_ps2").val();
		var up_btn=$("#up_sub").val();
		$.ajax({
			type:"POST",
			url:"php/insert.php",
			data:{update_ps1:update_ps1,update_ps2:update_ps2,up_btn:up_btn},
			cache:false,
			success:function(data){
				//alert(data);
				if(data=="not_done") {
          			alert("password udated");
        } else {
          // alert("password not udated");
          window.location="blank.html";
        }
			}
			//window.location="blank.html";
		});
	});
});



// LOAD LINK.HTML
// $(function(){
// 	$("#link").load("link.php");
// })

// 	$("#user_name").focusout(function(){
// 		check_username();
// 	});
// 	$("#contact").focusout(function(){
// 		check_phone();
// 	});
// 	$("#email").focusout(function(){
// 		check_email();
// 		// check_email_availability()
// 	});
// 	$("#password").focusout(function(){
// 		check_password();
// 	});

// 	function check_name(){
// 		var name_length = $("#name").val().length;
// 		if(name_length < 5 || name_length > 30){
// 			$("#name_error_message").html("Should be between 5-30 characters");
// 			$("#name_error_message").show();
// 			error_name = true;
// 		}else{
// 			$("#name_error_message").hide();
// 		}
// 	}

// 	function check_username(){
// 		var username_length = $("#user_name").val().length;
// 		if(username_length < 5 || username_length > 30){
// 			$("#username_error_message").html("Should be between 5-30 characters");
// 			$("#username_error_message").show();
// 			error_name = true;
// 		}else{
// 			$("#username_error_message").hide();
// 		}
// 	}

// 	function check_phone(){
// 		var phone_length = $("#contact").val().length;
// 		if(phone_length < 10 || phone_length > 10){
// 			$("#phone_error_message").html("Should be only 10");
// 			$("#phone_error_message").show();
// 			error_name = true;
// 		}else{
// 			$("#phone_error_message").hide();
// 		}
// 	}

// 	function check_email(){
// 		var pattern = new RegExp(/^[+a-zA-Z0-9,_-]+@[a-zA-Z0-9,_-]+\,[a-zA-Z]{2,4}$/i);
// 		if(pattern.test($("#email").val())){
// 			$("#email_error_message").hide();
// 		}else{
// 			$("#email_error_message").html("Invalid email address");
// 			$("#email_error_message").show();
// 			error_email = true;
// 		}
//  }

// // 	function check_email_availability(){
// // 	if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
// // 		echo '<label class="text-danger"><span class="glyphicon glyphicon-remove"></span>Invalid Email</label>';
// // 	}
// // 	else{
// // 		$this->load->model("dbcontroller");
// // 		if ($this->dbcontroller->is_email_available($_POST["email"])) {
// // 			echo '<label class="text-danger"><span class="glyphicon glyphicon-remove"></span>Email Already register</label>';
// // 		}else{
// // 			echo '<label class="text-danger"><span class="glyphicon glyphicon-remove"></span>Email Available</label>';
// // 		}
// // 	}
// // }

// 	function check_password(){
// 		var password_length = $("#password").val().length;
// 		if(password_length < 6){
// 			$("#password_error_message").html("At least 6 characters");
// 			$("#password_error_message").show();
// 			error_password = true;
// 		}else{
// 			$("#email_error_message").hide();
// 		}
// 	}

// });

// $(document).ready(function() {
//     var x_timer;
//     $("email").keyup(function (e){
//         clearTimeout(x_timer);
//         var user_name = $(this).val();
//         x_timer = setTimeout(function(){
//             check_username_ajax(user_name);
//         }, 1000);
//     });

// function check_username_ajax(username){
//     $("#email_error_message").html('<img src="ajax-loader.gif" />');
//     $.post('email-checker.php', {'email':email}, function(data) {
//       $("#email_error_message").html(data);
//     });
// }
// });


// for link
// $(document).ready(function(){
// 	$("#link").load("link.php");
// });



// function checkForm()
// {
// //fetching values from all input fields and storing them in variables
//     var name = document.getElementById("name").value;
//     var username = document.getElementById("user_name").value;
//     var phone = document.getElementById("contact").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;


// //Check input Fields Should not be blanks.
//     if (name == '' || username == '' || phone == '' || email == '' || password == '')
//     {
//         alert("Fill All Fields");
//     }

//     else
//     {

// 	//Notifying error fields
// 	var name1 = document.getElementById("name1");
// 	var username1 = document.getElementById("username1");
// 	var phone1 = document.getElementById("phone");
// 	var email1 = document.getElementById("email1");
//     var password1 = document.getElementById("password1");


// 	//Check All Values/Informations Filled by User are Valid Or Not.If All Fields Are invalid Then Generate alert.
//         if (name1 == 'name already exists' || username1.innerHTML == 'user name already exists' || phone1.innerHTML == 'Invalid phone' || email1.innerHTML == 'Invalid email' || password1.innerHTML == 'Password too short')
//         {
//             alert("Fill Valid Information");
//         }
//         else
//         {
// 		//Submit Form When All values are valid.
//             document.getElementById("myForm").submit();
//         }
//     }
// }

// //AJAX Code to check  input field values when onblur event triggerd.
// function validate(field, query)
// {
// 	var xmlhttp;

// if (window.XMLHttpRequest)
//   {// for IE7+, Firefox, Chrome, Opera, Safari
//   xmlhttp=new XMLHttpRequest();
//   }
// else
//   {// for IE6, IE5
//   xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
//   }

//     xmlhttp.onreadystatechange = function()
//     {
//         if (xmlhttp.readyState != 4 && xmlhttp.status == 200)
//         {
//             document.getElementById(field).innerHTML = "Validating..";
//         }
//         else if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
//         {
//             document.getElementById(field).innerHTML = xmlhttp.responseText;
//         }
//         else
//         {
//             document.getElementById(field).innerHTML = "Error Occurred. <a href='index.html'>Reload Or Try Again</a> the page.";
//         }
//     }
//     xmlhttp.open("GET", "validation.php?field=" + field + "&query=" + query, false);
//     xmlhttp.send();
// }

// $(function(){

// 	$("#name_error_message").hide();
// 	$("#username_error_message").hide();
// 	$("#phone_error_message").hide();
// 	$("#email_error_message").hide();
// 	$("#password_error_message").hide();

// 	var error_name = false;
// 	var error_username = false;
// 	var error_phone = false;
// 	var error_email = false;
// 	var error_password = false;

// 	$("#name").focusout(function(){
// 		check_name();
// 	});

// });
