
$(document).on('click', '.rfollow', function(){
     // Your Code
    //  alert("hi")
    var rid = $(this).attr('name')
    var jid = $(this).attr('id')
    var text = $(this).text();
    console.log(text)
    console.log(jid)
    if(text == "FOLLOW"){
      var fstatus='1';
      $.ajax({
        url:'php/rfollow.php',
        type:'POST',
        data:{r_id:rid,j_id:jid,fst:fstatus},
        success:function(data){
          console.log(data);
          if(data == "follow"){
            $(".rfollow").html("UN-FOLLOW")
          }
          else if (data == "unfollow") {
            $(".rfollow").html("FOLLOW")
          }
          else{

          }
          // else{
          //   alert(data)
          // }
        }
      })
    }
    else{
      var fstatus='0';
      $.ajax({
        url:'php/rfollow.php',
        type:'POST',
        data:{r_id:rid,j_id:jid,fst:fstatus},
        success:function(data){
          console.log(data);
          if(data == "follow"){
            $(".rfollow").html("<i class='fa fa-eye'></i>UN-FOLLOW")
          }
          else if (data == "unfollow") {
            $(".rfollow").html("<i class='fa fa-eye'></i>FOLLOW")
          }
          else{

          }
          // if(data == "updated"){
          //   $(".rfollow").html("<i class='fa fa-eye'></i>FOLLOW")
          // }else if (data == "0") {
          //   $(".rfollow").html("<i class='fa fa-eye'></i> UN-FOLLOW")
          // }
          // else{
          //   alert(data)
          // }
        }
      })
    }

    // $("#myModal").modal('show')
    // window.location.href="r_jobfeed.html?r_id="+encodeURIComponent(rid)+"&j_id="+encodeURIComponent(jid) ;

});






var rName;
var rId;
var obj;
var obj1;
var obj2;
var can_id;
var divTag = "";
var gskills;
var cand;
var pskills;
var psk = "";
var gsk = "";
var gskillArray = [];
var pskillArray = [];
var freDetails;
var ExpDetails;
var expyears;
var expComp;
var expdesg;
var cand;
var skills;




var divDetails1;
var divDetails2;

// load more data
var lm_obj;
var lm_can_id;
var lm_divTag = "";
var lm_gskill;
var lm_pskills;
var lm_cand;
var lm_psk = "";
var lm_gsk = "";
var lm_gskillArray = [];
var lm_pskillArray = [];
var lm_freDetails;
var lm_ExpDetails;
var lm_expyears;
var lm_expdesg;
var lm_skills;
var lm_ctype;
var lm_excomp;

// var candidate_id=$("#cid").text();
// console.log(candidate_name)


function viewJob(id,cname,clas) {
  $("#JobFeed").hide();
  $("#jobView").show();
  // alert(cname)
  // alert(clas)
  console.log(clas)
  console.log(id)
  console.log(cname)
  var jobid = id
  var rName;
  var rId;
  var sk;
  var det;
  var gskillArray = [];
  var skill_nm;
  var divDetails;
  var comp_name=$(".coName").attr('id');
  // alert(comp_name);
  $.ajax({
    url:"php/c_jobview.php",
    method:"POST",
    data:{compName:cname,j_id:jobid,cid:cid},
    success:function(data){
      console.log(data);
      // console.log(cid);
      var obj = JSON.parse(data)
      console.log(obj)
      for (var i = 0; i < obj.length; i++) {
        console.log(obj[i]['skills'])
        sk=obj[i]['skills']
        det=obj[i]['details']
        for(var d=0;d<det.length;d++){
          if(!sk){
             divDetails ='<div class="post-content box" id="post_single" style="height:400px;">'+
                  '<div class="post-container" style="padding-bottom:0px;">'+
                      '<img src="http://www.isc.hbs.edu/Style%20Library/hbs/images/home/icons/large-circles/business-person-icon.png" alt="user" class="profile-photo-md pull-left">'+
                      '<div class="post-detail">'+
                          '<div class="user-info">'+
                              '<h4  style="text-transfrom:capitalize;margin:0px"><a href="#" class="profile-link" id="'+det[d].r_compname+'">'+det[d].r_compname+'</a> </h4>'+
                              '<p class="text-muted"> Published a photo about 3 mins ago</p>'+
                          '</div>'+
                      '</div>'+
                      '<div class="line-divider"></div>'+
                      '<div class="post-text" style="height:250px;">'+
                        '<h5><a href="#" class="profile-link" id="j_title">'+det[d].j_title+' with '+det[d].j_exp+' Experience</a> </h5>'+

                        '<div class="container" style="height:150px;background:#f8f8f8;width:100%;line-height:20px;padding-top:5px;border-radius:8px;">'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Years of Exp &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>'+det[d].j_exp+' years</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Job Role    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;    :&nbsp; </span>Developer</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Mandatory Skills &nbsp;&nbsp;:&nbsp; </span>skills are not specified</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Preferred Skills &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>skills are not specified</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Job Location &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>Visakhapatnam</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Conditions &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>Night Shift</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Package &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>3.5 - 5 P.A</p>'+

                        '</div>'+
                        '<div class="container" style="width:100%">'+
                          '<p style="text-align:justify;line-height:20px;"><span style="font-weight:bold">Job Description &nbsp;&nbsp;&nbsp;:&nbsp; </span>'+det[d].j_desc+'</p>'+

                        '</div>'+
                      '</div>'+
                      '<div class="line-divider"></div>'+
                      '<div class="row" style="text-align:center;color:grey;margin-bottom:10px">'+
                          '<div class="col-md-4" style="border-right:1px solid #c0c0c0">'+
                              '<button class="btn btn-primary">Share</button>'+
                          '</div>'+
                          '<div class="col-md-4" style="border-right:1px solid #c0c0c0">'+
                              '<span><button class="btn btn-primary rfollow" name="'+det[d].r_id+'" id="'+det[d].j_id+'"  >FOLLOW</button></span>'+
                          '</div>'+
                          '<div class="col-md-4">'+
                              '<span><button class="btn btn-primary apply_btn" name="'+cid+'" id="'+det[d].j_id+'" onclick="applyJob('+det[d].j_id+','+cid+')">Apply</button></span>'+
                          '</div>'+
                      '</div>'+
                  '</div>'+
              '</div>';
          }
          else{

          
          for(var j=0;j<sk.length;j++){
            console.log(sk[j].rskill_name)
            skill_nm=sk[j].rskill_name;
            gskillArray.push(skill_nm.charAt(0).toUpperCase() + skill_nm.slice(1))
          }
          divDetails ='<div class="post-content box" id="post_single" style="height:400px;">'+
                  '<div class="post-container" style="padding-bottom:0px;">'+
                      '<img src="http://www.isc.hbs.edu/Style%20Library/hbs/images/home/icons/large-circles/business-person-icon.png" alt="user" class="profile-photo-md pull-left">'+
                      '<div class="post-detail">'+
                          '<div class="user-info">'+
                              '<h4  style="text-transfrom:capitalize;margin:0px"><a href="#" class="profile-link" id="'+det[d].r_compname+'">'+det[d].r_compname+'</a> </h4>'+
                              '<p class="text-muted"> Published a photo about 3 mins ago</p>'+
                          '</div>'+
                      '</div>'+
                      '<div class="line-divider"></div>'+
                      '<div class="post-text" style="height:250px;">'+
                        '<h5><a href="#" class="profile-link" id="j_title">'+det[d].j_title+' with '+det[d].j_exp+' Experience</a> </h5>'+

                        '<div class="container" style="height:150px;background:#f8f8f8;width:100%;line-height:20px;padding-top:5px;border-radius:8px;">'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Years of Exp &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>'+det[d].j_exp+' years</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Job Role    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;    :&nbsp; </span>Developer</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Mandatory Skills &nbsp;&nbsp;:&nbsp; </span>'+gskillArray.join(',')+'</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Preferred Skills &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>'+gskillArray.join(',')+'</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Job Location &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>Visakhapatnam</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Conditions &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>Night Shift</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Package &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>3.5 - 5 P.A</p>'+

                        '</div>'+
                        '<div class="container" style="width:100%">'+
                          '<p style="text-align:justify;line-height:20px;"><span style="font-weight:bold">Job Description &nbsp;&nbsp;&nbsp;:&nbsp; </span>'+det[d].j_desc+'</p>'+

                        '</div>'+
                      '</div>'+
                      '<div class="line-divider"></div>'+
                      '<div class="row" style="text-align:center;color:grey;margin-bottom:10px">'+
                          '<div class="col-md-4" style="border-right:1px solid #c0c0c0">'+
                              '<button class="btn btn-primary">Share</button>'+
                          '</div>'+
                          '<div class="col-md-4" style="border-right:1px solid #c0c0c0">'+
                              '<span><button class="btn btn-primary rfollow" name="'+det[d].r_id+'" id="'+det[d].j_id+'"  >FOLLOW</button></span>'+
                          '</div>'+
                          '<div class="col-md-4">'+
                              '<span><button class="btn btn-primary apply_btn" name="'+cid+'" id="'+det[d].j_id+'" onclick="applyJob('+det[d].j_id+','+cid+')">Apply</button></span>'+
                          '</div>'+
                      '</div>'+
                  '</div>'+
              '</div>';
        }
      }
    }
      $("#jobView").append(divDetails)
        $.ajax({
          url:'php/rfollow.php',
          type:'POST',
          success:function(data){
            console.log(data);
            if(data == "1"){
              $(".rfollow").html("UN-FOLLOW")
            }
            else if (data == "0") {
              $(".rfollow").html("FOLLOW")
            }
            else{

            }
          }
      })
    }

  })

}
function applyJob(job_id,cand_id,clas){
  console.log(job_id);
  console.log(cand_id)
  $.ajax({
    url:'php/job_apply.php',
    method:'POST',
    data:{jid:job_id,cid:cand_id},
    success:function(data){
      console.log(data);
      if(data=="applied"){
        // $("#news_feed").load()
        console.log("one")
        $("a[id="+job_id+"][name$="+cand_id+"]").html("<i class='fa fa-check'></i>Applied");
      }
      else{
        // var app="Applied";
        alert("you already applied for this job")
      }
    }
  })
}
function viewCanDetails(id,cname,clas) {
  alert(cname)
  alert(clas)
  console.log(clas)
  var jobid = id
$(document).ready(function(){
  $('#myModal').modal('show')

})
}
// function r_viewCan(jid,rid,cls){
//   alert(jid)
// }
$(document).on('click', '.r_jView', function(){
     // Your Code
    //  alert("hi")
    var posts;
    var tblDiv;
    var rid = $(this).attr('name')
    var jid = $(this).attr('id')
    console.log(jid)
    // $("#myModal").modal('show')
    window.location.href="r_jobfeed.html?r_id="+encodeURIComponent(rid)+"&j_id="+encodeURIComponent(jid) ;
    

});




// VIEW FOR FEC_DET_FOLLOW
$(document).on('click', '.view', function(){
     // Your Code
    //  alert("hi")
      $("#follow_post").hide();
  $("#follow_jobView").show();
    var comp_name = $(this).attr('name')
    var jid = $(this).attr('id')
    console.log(jid)
    $.ajax({
    url:"php/c_jobview.php",
    method:"POST",
    data:{compName:comp_name,j_id:jid,cid:id},
    success:function(rec_data){
      console.log(rec_data)
      var obj = JSON.parse(rec_data)
      console.log(obj)
      for (var i = 0; i < obj.length; i++) {
        console.log(obj[i]['skills'])
        sk=obj[i]['skills']
        det=obj[i]['details']
        for(var d=0;d<det.length;d++){
          if(!sk){
            divDetails1 ='<div class="post-content box" id="post_single" style="height:400px;">'+
                  '<div class="post-container" style="padding-bottom:0px;">'+
                      '<img src="http://www.isc.hbs.edu/Style%20Library/hbs/images/home/icons/large-circles/business-person-icon.png" alt="user" class="profile-photo-md pull-left">'+
                      '<div class="post-detail">'+
                          '<div class="user-info">'+
                              '<h4  style="text-transfrom:capitalize;margin:0px"><a href="#" class="profile-link" id="'+det[d].r_compname+'">'+det[d].r_compname+'</a> </h4>'+
                              '<p class="text-muted"> Published a photo about 3 mins ago</p>'+
                          '</div>'+
                      '</div>'+
                      '<div class="line-divider"></div>'+
                      '<div class="post-text" style="height:250px;">'+
                        '<h5><a href="#" class="profile-link" id="j_title">'+det[d].j_title+' with '+det[d].j_exp+' Experience</a> </h5>'+

                        '<div class="container" style="height:150px;background:#f8f8f8;width:100%;line-height:20px;padding-top:5px;border-radius:8px;">'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Years of Exp &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>'+det[d].j_exp+' years</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Job Role    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;    :&nbsp; </span>Developer</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Mandatory Skills &nbsp;&nbsp;:&nbsp; </span>Skills not defined</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Preferred Skills &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>Skills not defined</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Job Location &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>Visakhapatnam</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Conditions &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>Night Shift</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Package &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>3.5 - 5 P.A</p>'+

                        '</div>'+
                        '<div class="container" style="width:100%">'+
                          '<p style="text-align:justify;line-height:20px;"><span style="font-weight:bold">Job Description &nbsp;&nbsp;&nbsp;:&nbsp; </span>'+det[d].j_desc+'</p>'+

                        '</div>'+
                      '</div>'+
                      '<div class="line-divider"></div>'+
                      '<div class="row" style="text-align:center;color:grey;margin-bottom:10px">'+
                          '<div class="col-md-4" style="border-right:1px solid #c0c0c0">'+
                              '<button class="btn btn-primary">Share</button>'+
                          '</div>'+
                          '<div class="col-md-4" style="border-right:1px solid #c0c0c0">'+
                              '<span><button class="btn btn-primary rfollow" name="'+det[d].r_id+'" id="'+det[d].j_id+'"  >FOLLOW</button></span>'+
                          '</div>'+
                          '<div class="col-md-4">'+
                              '<span><button class="btn btn-primary apply_btn" name="'+cid+'" id="'+det[d].j_id+'" onclick="applyJob('+det[d].j_id+','+cid+')">Apply</button></span>'+
                          '</div>'+
                      '</div>'+
                  '</div>'+
              '</div>';
          }
          else{
          for(var j=0;j<sk.length;j++){
            console.log(sk[j].rskill_name)
            skill_nm=sk[j].rskill_name;
            gskillArray.push(skill_nm.charAt(0).toUpperCase() + skill_nm.slice(1))
          }
          divDetails1 ='<div class="post-content box" id="post_single" style="height:400px;">'+
                  '<div class="post-container" style="padding-bottom:0px;">'+
                      '<img src="http://www.isc.hbs.edu/Style%20Library/hbs/images/home/icons/large-circles/business-person-icon.png" alt="user" class="profile-photo-md pull-left">'+
                      '<div class="post-detail">'+
                          '<div class="user-info">'+
                              '<h4  style="text-transfrom:capitalize;margin:0px"><a href="#" class="profile-link" id="'+det[d].r_compname+'">'+det[d].r_compname+'</a> </h4>'+
                              '<p class="text-muted"> Published a photo about 3 mins ago</p>'+
                          '</div>'+
                      '</div>'+
                      '<div class="line-divider"></div>'+
                      '<div class="post-text" style="height:250px;">'+
                        '<h5><a href="#" class="profile-link" id="j_title">'+det[d].j_title+' with '+det[d].j_exp+' Experience</a> </h5>'+

                        '<div class="container" style="height:150px;background:#f8f8f8;width:100%;line-height:20px;padding-top:5px;border-radius:8px;">'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Years of Exp &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>'+det[d].j_exp+' years</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Job Role    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;    :&nbsp; </span>Developer</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Mandatory Skills &nbsp;&nbsp;:&nbsp; </span>'+gskillArray.join(',')+'</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Preferred Skills &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>'+gskillArray.join(',')+'</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Job Location &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>Visakhapatnam</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Conditions &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>Night Shift</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Package &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>3.5 - 5 P.A</p>'+

                        '</div>'+
                        '<div class="container" style="width:100%">'+
                          '<p style="text-align:justify;line-height:20px;"><span style="font-weight:bold">Job Description &nbsp;&nbsp;&nbsp;:&nbsp; </span>'+det[d].j_desc+'</p>'+

                        '</div>'+
                      '</div>'+
                      '<div class="line-divider"></div>'+
                      '<div class="row" style="text-align:center;color:grey;margin-bottom:10px">'+
                          '<div class="col-md-4" style="border-right:1px solid #c0c0c0">'+
                              '<button class="btn btn-primary">Share</button>'+
                          '</div>'+
                          '<div class="col-md-4" style="border-right:1px solid #c0c0c0">'+
                              '<span><button class="btn btn-primary rfollow" name="'+det[d].r_id+'" id="'+det[d].j_id+'"  >FOLLOW</button></span>'+
                          '</div>'+
                          '<div class="col-md-4">'+
                              '<span><button class="btn btn-primary apply_btn" name="'+cid+'" id="'+det[d].j_id+'" onclick="applyJob('+det[d].j_id+','+cid+')">Apply</button></span>'+
                          '</div>'+
                      '</div>'+
                  '</div>'+
              '</div>';
        }
      }
    }
      $("#follow_jobView").append(divDetails1)


    }
  })
    // $("#myModal").modal('show')
    // window.location.href="r_jobfeed.html?r_id="+encodeURIComponent(rid)+"&j_id="+encodeURIComponent(jid) ;

});




// relevant view

$(document).on('click', '.view_rel', function(){
     // Your Code
    //  alert("hi")
      $("#relevant_post").hide();
  $("#relevant_jobView").show();
  
    var comp_name = $(this).attr('name')
    var jid = $(this).attr('id')
    console.log(jid)
    $.ajax({
    url:"php/c_jobview.php",
    method:"POST",
    data:{compName:comp_name,j_id:jid,cid:id},
    success:function(rec_data){
      console.log(rec_data)
      var obj = JSON.parse(rec_data)
      console.log(obj)
      for (var i = 0; i < obj.length; i++) {
        console.log(obj[i]['skills'])
        sk=obj[i]['skills']
        det=obj[i]['details']
        for(var d=0;d<det.length;d++){
          if(!sk){
            divDetails2 ='<div class="post-content box" id="post_single" style="height:400px;">'+
                  '<div class="post-container" style="padding-bottom:0px;">'+
                      '<img src="http://www.isc.hbs.edu/Style%20Library/hbs/images/home/icons/large-circles/business-person-icon.png" alt="user" class="profile-photo-md pull-left">'+
                      '<div class="post-detail">'+
                          '<div class="user-info">'+
                              '<h4  style="text-transfrom:capitalize;margin:0px"><a href="#" class="profile-link" id="'+det[d].r_compname+'">'+det[d].r_compname+'</a> </h4>'+
                              '<p class="text-muted"> Published a photo about 3 mins ago</p>'+
                          '</div>'+
                      '</div>'+
                      '<div class="line-divider"></div>'+
                      '<div class="post-text" style="height:250px;">'+
                        '<h5><a href="#" class="profile-link" id="j_title">'+det[d].j_title+' with '+det[d].j_exp+' Experience</a> </h5>'+

                        '<div class="container" style="height:150px;background:#f8f8f8;width:100%;line-height:20px;padding-top:5px;border-radius:8px;">'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Years of Exp &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>'+det[d].j_exp+' years</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Job Role    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;    :&nbsp; </span>Developer</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Mandatory Skills &nbsp;&nbsp;:&nbsp; </span>Skills not defined</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Preferred Skills &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>Skills not defined</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Job Location &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>Visakhapatnam</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Conditions &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>Night Shift</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Package &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>3.5 - 5 P.A</p>'+

                        '</div>'+
                        '<div class="container" style="width:100%">'+
                          '<p style="text-align:justify;line-height:20px;"><span style="font-weight:bold">Job Description &nbsp;&nbsp;&nbsp;:&nbsp; </span>'+det[d].j_desc+'</p>'+

                        '</div>'+
                      '</div>'+
                      '<div class="line-divider"></div>'+
                      '<div class="row" style="text-align:center;color:grey;margin-bottom:10px">'+
                          '<div class="col-md-4" style="border-right:1px solid #c0c0c0">'+
                              '<button class="btn btn-primary">Share</button>'+
                          '</div>'+
                          '<div class="col-md-4" style="border-right:1px solid #c0c0c0">'+
                              '<span><button class="btn btn-primary rfollow" name="'+det[d].r_id+'" id="'+det[d].j_id+'"  >FOLLOW</button></span>'+
                          '</div>'+
                          '<div class="col-md-4">'+
                              '<span><button class="btn btn-primary apply_btn" name="'+cid+'" id="'+det[d].j_id+'" onclick="applyJob('+det[d].j_id+','+cid+')">Apply</button></span>'+
                          '</div>'+
                      '</div>'+
                  '</div>'+
              '</div>';
          }
          else{
          for(var j=0;j<sk.length;j++){
            console.log(sk[j].rskill_name)
            skill_nm=sk[j].rskill_name;
            gskillArray.push(skill_nm.charAt(0).toUpperCase() + skill_nm.slice(1))
          }
          divDetails2 ='<div class="post-content box" id="post_single" style="height:400px;">'+
                  '<div class="post-container" style="padding-bottom:0px;">'+
                      '<img src="http://www.isc.hbs.edu/Style%20Library/hbs/images/home/icons/large-circles/business-person-icon.png" alt="user" class="profile-photo-md pull-left">'+
                      '<div class="post-detail">'+
                          '<div class="user-info">'+
                              '<h4  style="text-transfrom:capitalize;margin:0px"><a href="#" class="profile-link" id="'+det[d].r_compname+'">'+det[d].r_compname+'</a> </h4>'+
                              '<p class="text-muted"> Published a photo about 3 mins ago</p>'+
                          '</div>'+
                      '</div>'+
                      '<div class="line-divider"></div>'+
                      '<div class="post-text" style="height:250px;">'+
                        '<h5><a href="#" class="profile-link" id="j_title">'+det[d].j_title+' with '+det[d].j_exp+' Experience</a> </h5>'+

                        '<div class="container" style="height:150px;background:#f8f8f8;width:100%;line-height:20px;padding-top:5px;border-radius:8px;">'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Years of Exp &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>'+det[d].j_exp+' years</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Job Role    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;    :&nbsp; </span>Developer</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Mandatory Skills &nbsp;&nbsp;:&nbsp; </span>'+gskillArray.join(',')+'</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Preferred Skills &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>'+gskillArray.join(',')+'</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Job Location &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>Visakhapatnam</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Conditions &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>Night Shift</p>'+
                          '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Package &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>3.5 - 5 P.A</p>'+

                        '</div>'+
                        '<div class="container" style="width:100%">'+
                          '<p style="text-align:justify;line-height:20px;"><span style="font-weight:bold">Job Description &nbsp;&nbsp;&nbsp;:&nbsp; </span>'+det[d].j_desc+'</p>'+

                        '</div>'+
                      '</div>'+
                      '<div class="line-divider"></div>'+
                      '<div class="row" style="text-align:center;color:grey;margin-bottom:10px">'+
                          '<div class="col-md-4" style="border-right:1px solid #c0c0c0">'+
                              '<button class="btn btn-primary">Share</button>'+
                          '</div>'+
                          '<div class="col-md-4" style="border-right:1px solid #c0c0c0">'+
                              '<span><button class="btn btn-primary rfollow" name="'+det[d].r_id+'" id="'+det[d].j_id+'"  >FOLLOW</button></span>'+
                          '</div>'+
                          '<div class="col-md-4">'+
                              '<span><button class="btn btn-primary apply_btn" name="'+cid+'" id="'+det[d].j_id+'" onclick="applyJob('+det[d].j_id+','+cid+')">Apply</button></span>'+
                          '</div>'+
                      '</div>'+
                  '</div>'+
              '</div>';
        }
      }
      }
      $("#relevant_jobView").append(divDetails2)


    }
  })
    // $("#myModal").modal('show')
    // window.location.href="r_jobfeed.html?r_id="+encodeURIComponent(rid)+"&j_id="+encodeURIComponent(jid) ;

});






// }
// $(document).ready(function(){
//   $('.r_job'),click(function(){
//     // onclick="viewCanDetails($(this).attr('id'),$(this).attr('name'),$(this).attr('class'))":
//     alert($(this).attr('id'))
//   })
// })


  // var comp_name=$(".coName").attr('id');
  // alert(comp_name);
  // $.ajax({
  //   url:"php/c_jobview.php",
  //   method:"POST",
  //   data:{compName:cname,j_id:jobid},
  //   success:function(data){
  //     console.log(data);
  //     var obj = JSON.parse(data)
  //     // console.log(data.name)
  //     for (var i = 0; i < obj.length; i++) {
  //       console.log(obj[i].name)
  //       rName=obj[i].name;
  //       rId= obj[i].id;
  //     }
  //     $.ajax({
  //       url:'php/newsfeed.php',
  //       method:'POST',
  //       data:{id:rId,name:rName},
  //       success:function(data){
  //         console.log(data)
  //         $("#r_jobfeed").show()
  //         $("#r_jobfeed").load("php/r_jobfeed.php #news_feed");
  //         // $("#JobFeed").hide()
  //
  //
  //       }
  //
  //     })
  //   }
  // })

// }
