var c_dob;
$(document).ready(function () {
  $.ajaxSetup({cache: false});

    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();

    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

        var $target = $(e.target);

        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

  //   $('.combine').on('change', function(){
  //      var date = $('#day').val() + '/' + $('#month').val() + '/' + $('#year').val();
  //      c_bod=$('#DOB').val(date);
  //  });


    $(".next-step").click(function(e) {
    	// var fmid=$("form[class='form']").attr("id");
    	// var fmid=$(this).find('.form').attr("id");
    	// console.log(fmid);
    	// var form = $(this).parents('form:first');
    	// console.log($(form).attr('id'))
	var tab_id=$(this).closest("div").attr("id");
	console.log(tab_id);
		var form_id=$("div[id='"+tab_id+"']").find("form").attr('id');
	console.log(form_id);
	if(form_id=="basic_form"){
    // $("#basic_form input,#basic_form select").each(function(){
		// 	if($(this).val()==''){
		// 		$(this).next().html("This field is required");
		// 	}else{
    //     var $active = $('.wizard .nav-tabs li.active');
    //         $active.next().removeClass('disabled');
    //         nextTab($active);
    //   }
		// 		 $(this).keyup(function(){
		// 			 $(this).next().html("");
		//     	});
    //
		// });
		if($("#basic_form input,#basic_form select").val()==""){
			console.log("empty");

			$('#basic_form span').text("This field is required");
		}
		else{
			var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);
		}


	}
	else if(form_id=="edu_form"){
		if($("#edu_form input,#edu_form select").val()==""){
			console.log("empty");

			$('#edu_form span').text("This field is required");
		}
		else{
			var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);
		}

	}
	else if(form_id=="fre_form"){
		if($("#fre_form input,#fre_form select").val()==""){
			console.log("empty");

			$('#fre_form span').text("This field is required");
		}
				else{
					var $active = $('.wizard .nav-tabs li.active');
		        $active.next().removeClass('disabled');
		        nextTab($active);
				}

	}
	else if(form_id=="exp_form"){
		if($("#exp_form input,#exp_form select").val()==""){
			console.log("empty");

			$('#exp_form span').text("This field is required");
		}
		else{
			var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);
		}

	}

    });

    $(".prev-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

    });
});

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}


//according menu

$(document).ready(function()
{
    //Add Inactive Class To All Accordion Headers
	$('.accordion-header').toggleClass('inactive-header');

	//Set The Accordion Content Width
	var contentwidth = $('.accordion-header').width();
	$('.accordion-content').css({});

	//Open The First Accordion Section When Page Loads
	$('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
	$('.accordion-content').first().slideDown().toggleClass('open-content');

	// The Accordion Effect
	$('.accordion-header').click(function () {
		if($(this).is('.inactive-header')) {
			$('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
			$(this).toggleClass('active-header').toggleClass('inactive-header');
			$(this).next().slideToggle().toggleClass('open-content');
		}

		else {
			$(this).toggleClass('active-header').toggleClass('inactive-header');
			$(this).next().slideToggle().toggleClass('open-content');
		}
	});

	return false;
});

// qualification table
// $(document).ready(function(){
//     $("#qua_table").load("education_qf.php #abc");
// });

// table inserting

$(document).ready(function(){
  $.ajaxSetup({cache: false});

	$("#qf_sub").click(function(){
		var board=$("#board").val();
		var course=$("#course").val();
		var special=$("#special").val();
		var course_type=$("#course_type").val();
		var marks=$("#marks").val();
		var yop=$("#yop").val();
		var qf_sub=$("#qf_sub").val();
		var inst=$("#inst").val();
		$.ajax({
			type:"POST",
			url:"php/ins.php",
			data:{board:board,course:course,special:special,c_type:course_type,marks:marks,yop:yop,qf_sub:qf_sub,inst:inst},
      cache:false,
      success:function(data){
				console.log(data);
// $('#form')[0].reset();
				$.ajax({
					type:"GET",
					url:"php/education_qf.php",
          cache:false,
					success: function(data) {
                     $("#qua_table").load("php/education_qf.php #abc");
        // alert('Done.');
     }
				});
			}
		});
	});
});

// edu_qf table insert
$(document).ready(function(){
	$("#lev_3").click(function(){
		// var cert=$("#skills_ins").val();
		// var industry=$("#industry").val();
		//var prefloc=$("#prefloc").val();
		// var candidate_type=$("#candidate_type").val();

		var ins_type=$("#industry_type").val();
		var cn_type=$("#candidate_type").val();
		var lev_3_sub=$("#lev_3").val();
		if(cn_type=="fre"){
			 $('#exp_form').hide();
			            $('#fre_form').show();
		}
		else{
			 $('#fre_form').hide();
			 $('#exp_form').show();

			            // $('#fdiv').show();
		}

		var array1=$("input[name='skname']").val();
       var strarr = array1.split(',');
       for (var i = 0; i < strarr.length; i++) {
           //alert(strarr[i]);
       }

       var pf_loc=$("input[name='prefloc']").val();
       var pf_loc_2 = pf_loc.split(',');
       for (var j = 0; j < pf_loc_2.length; j++) {
           //alert(strarr[i]);
       }
		$.ajax({
			type:"POST",
			url:"php/ins.php",
			data:{inds_type:ins_type,cand_type:cn_type,prefloc:pf_loc_2,lev_3_sub:lev_3_sub,skill:strarr},
      cache:false,
			success:function(data){
				alert(data);
			}
		});
	});
});

// fresher insert
$(document).ready(function(){
	$("#lev_4a").click(function(){
		var projectname_fs=$("#projectname_fs").val();
		var pj_desc=$("#pj_desc").val();
		var wksp=$("#wksp").val();
		var wksp_desc=$("#wksp_desc").val();
		var present=$("#present").val();
		// var yop=$("#yop").val();
		var lev_4a=$("#lev_4a").val();
		$.ajax({
			type:"POST",
			url:"php/ins.php",
			data:{projectname_fs:projectname_fs,pj_desc:pj_desc,wksp:wksp,wksp_desc:wksp_desc,present:present,lev_4a:lev_4a},
      cache:false,
			success:function(data){
				// alert(data);

				$.ajax({
					type:"GET",
					url:"php/education_qf.php",
          cache:false,
					success: function(data) {
                     $("#project_table").load("php/education_qf.php #proj_fsh");
        // alert('Done.');
     }
				});
			}
		});
	});
});

// basic info


$(document).ready(function(){
  $.ajaxSetup({cache: false});

	$("#bf_sub").click(function(){
		var f_up=$("#gender").val();
		// var b_dt=$("#birthdate").val();
		var ct=$("#city").val();
    c_dob=$('#day').val() + '/' + $('#month').val() + '/' + $('#year').val()
    console.log(c_dob);
		var stat=$("#stat").val();
		var btn=$("#bf_sub").val();
		// var form_id=$("form[name='loginform']").attr('id');


		 var file_data = $("#pic").prop("files")[0];   // Getting the properties of file from file field
    var form_data = new FormData();                  // Creating object of FormData class
    form_data.append("file", file_data);
    form_data.append("text", ct);
    form_data.append("select1", f_up);
    form_data.append("select2", stat);
    form_data.append("dt",c_dob);
    form_data.append("bt",btn);



		$.ajax({
			url:"php/ins.php",
			type:"POST",
			cache: false,
      contentType: false,
      processData: false,
			data:form_data,
			success:function(data) {
				// body...
				// alert(data);
				// if(data=="succ"){
				// 	window.location.href='education_qf.php';
				// }
				// else{
				// 	alert("not inserted");
				// }
			}
		});
	});
});

// tagged input





// separation
// 	$(function(){
// 		$('#lev_3').click(function(){

// 			$('#candidate_type').change(function(){
// 				// event.preventDefault();
// 				var opt = $(this).val();
// 			        if(opt == 'fre'){
// 			            $('#ediv').hide();
// 			            $('#fdiv').show();
// 			        }else{
// 			            $('#ediv').show();
// 			            $('#fdiv').hide();
// 			        }
// event.preventDefault();
// 			});
// 		});
// 	});

// final_status_update
$(document).ready(function(){
  $("#lev_4").click(function(){
    var upd_fsh=$("#lev_4").val();
    $.ajax({
      type:"post",
      url:"php/ins.php",
      data:{update_fsh:upd_fsh},
      cache:false,
      success:function(data){
        if(data=="updated"){
          window.location.href="newsfeed.html";
        }
        else{
          console.log("not update");
        }
      }
    })
  })
})


	// experienced candidates

	$(document).ready(function(){
	$("#lev_4b").click(function(){
		var noyrs = $("#noy").val();
    var nomon = $("#can_months").val();
    var notice = $("#notice").val();
		var cc = $("#current_company").val();
		var desig = $("#designation").val();
		var cjt = $("#currentjob_type").val();
		var pjt = $("#preferedjob_type").val();
		var ccomp = $("#current_comp").val();
		var ecomp = $("#exp_comp").val();
		var lev_4b=$("#lev_4b").val();

		$.ajax({
			type:"POST",
			url:"php/ins.php",
			data:{years:noyrs,month:nomon,notice:notice,current_comp:cc,designation:desig,currjtype:cjt,preferjtype:pjt,currcomp:ccomp,expcomp:ecomp,lev_4b:lev_4b},
      cache:false,
			success:function(data){
				// alert(data);
				if(data=="updated"){
					window.location.href='newsfeed.html';
				}
			}
		});
	});
});


	// exp_project insertion

	$(document).ready(function(){
	$("#expadd").click(function(){
		var projectname_exp=$("#projectName").val();
		var dom=$("#domain").val();
		var clnt=$("#client").val();
		var dur=$("#duration").val();
		var rol=$("#role").val();
		//var skl=$("#skills").val();
		var expadd=$("#expadd").val();

		var skill=$("input[name='skills_proj']").val();
       var skl = skill.split(',');
       for (var i = 0; i < skl.length; i++) {
           //alert(strarr[i]);
       }
		$.ajax({
			type:"POST",
			url:"php/ins.php",
			data:{projNam:projectname_exp,domain:dom,client:clnt,duration:dur,role:rol,skill:skl,eadd:expadd},
      cache:false,
			success:function(data){
				// alert(data);

				$.ajax({
					// type:"GET",
					url:"php/education_qf.php",
          cache:false,
					success: function(data) {
                     $("#project_table_exp").load("php/education_qf.php #proj_exp");
        // alert('Done.');
     }
				});
			}
		});
	});
});


// var skillTag;
// 	$(document).ready(function(){
//     $.ajax({
//         url: 'tst.php',
//         type: 'get',
//         dataType: 'JSON',
//         success: function(response){
//             var len = response.length;
//             for(var i=0; i<len; i++){
//                 // var id = response[i].id;
//                 // var username = response[i].username;
//                 var name = response[i].name;
// console.log(name);
//                 skillTag = "<option value='"+name+"'>"

//                 // var email = response[i].email;
// console.log(skillTag);


//                 $("#skills").append(skillTag);
//             }

//         }
//     });
// });



// tagged input
$(function(){
		var sampleTags = ['Hyderabad', 'chennai', 'viskhapatnam'];
var ar1=[];
// var loc1=[];
		$(document).ready(function(){
      $.ajaxSetup({cache: false});


	$.getJSON('php/tst.php',function(data){
		$.each(data,function(i){
			// console.log(data[i].name);
			var ar2=ar1.push(data[i].name);

		});

		console.log(ar1);
		$("#skills_ins").tagit({
				availableTags: ar1,
			});
		$("#skills").tagit({
			availableTags:ar1,
		});
		$("#prefloc").tagit({
			availableTags:sampleTags,
		});
	});
		});

	});

// $(document).ready(function(){
//     // var array=[];
//    $("#sub").click(function(){
//        //var val1=$("#singleFieldTags2").val();
//        var array1=$("input$[name='tags']").val();
//        var strarr = array1.split(',');
//        for (var i = 0; i < strarr.length; i++) {
//            //alert(strarr[i]);
//        }
//        $.ajax({
//            type:"POST",
//            url:"php/post.php",
//            data:{data1:strarr},
//            success:function(data){
//                alert(data);
//            }
//        });

//    });
// });
//      counter = 0;
