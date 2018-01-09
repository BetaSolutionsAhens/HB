$(document).ready(function(){
  $.ajaxSetup({cache: false});

  // console.log("swaroopa swara")
  $("#rec_profile_upd").click(function(){
    // console.log("dddddddd")
    var rec_name=$("#name").val();
    var rec_uname=$("#uname").val();
    var rec_mobile=$("#mobile").val();
    var rec_email=$("#email").val();
    var rec_company=$("#compname").val();
    var rec_desg=$("#designation").val();
    var rec_ind=$("#industry").val();
    var rec_pincode=$("#pincode").val();
    var rec_button=$("#rec_profile_upd").val();

    // console.log(rec_name+rec_uname+rec_pincode+rec_ind+rec_desg+rec_company+rec_email+rec_mobile)
    $.ajax({
      type:"POST",
      url:"php/profile_updation.php",
      data:{button:rec_button,name:rec_name,uname:rec_uname,mobile:rec_mobile,email:rec_email,company:rec_company,desgnation:rec_desg,industry:rec_ind,pincode:rec_pincode},
      cache:false,
      successs:function(data){
        console.log(data)
      }
    })
  })
})
var details;
var skills;
var posts;
var name;
var uname;
var mobile;
var email;
var company;
var designation;
var industry;
var pincode;
var post_id;
var job_title;
var description;
var experience;
var salary;
var j_rid;
var divTag;
var gskillArray = [];
$(document).ready(function(){
  $.ajax({
    type:"GET",
    url:"php/r_recinfo.php",
    cache:false,
    success:function(data){
       obj = JSON.parse(data);
      console.log(obj);
      for (var i = 0; i < obj.length; i++) {
        details=obj[i].basic;
        posts=obj[i].post;
        skills=obj[i].skills_used;
        for(var d=0;d<details.length;d++){
          name=details[d].r_fname;
          // console.log(name)
          uname=details[d].r_uname;
          mobile=details[d].r_mobile;
          email=details[d].r_mail;
          designation=details[d].r_desgn;
          company=details[d].r_compname;
          industry=details[d].r_inds;
          pincode=details[d].r_pincode;

          $("#name").val(name);
          $("#uname").val(uname);
          $("#mobile").val(mobile);
          $("#email").val(email);
          $("#compname").val(company);
          $("#designation").val(designation);
          $("#industry").val(industry);
          $("#pincode").val(pincode);
          // $("#mypic").attr('src',"img/"+c_pic+"" );
          $("#rname").html(name)
        }
        for(var p=0;p<posts.length;p++){
          post_id=posts[p].j_id;
          job_title=posts[p].j_title;
          description=posts[p].j_desc;
          experience=posts[p].j_exp;
          salary=posts[p].j_salary;
          j_rid=posts[p].r_id;
          for(var s=0;s<skills.length;s++){
            var skl=skills[s].rskill_name;
                            gskillArray.push(skl.charAt(0).toUpperCase() + skl.slice(1));
                            skl="";
          }
          divTag+='<div class="box">'+
                            '<div class="post-content">'+
                                '<div class="post-container" style="padding-bottom:0px;">'+
                                    '<img src="http://placehold.it/300x300" alt="user" class="profile-photo-md pull-left" />'+
                                    '<div class="post-detail">'+
                                        '<div class="user-info">'+
                                            '<h5><a href="#" class="profile-link">'+job_title+' Required'+experience+' years</a> </h5>'+
                                            '<p class="text-muted"><a href="#"> '+posts[p].r_compname+' </a>  Post ago 3 mins ago</p>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="line-divider"></div>'+
                                    '<div class="post-text">'+
                                        '<p style="text-align:justify">'+description+'. <i class="em em-anguished"></i> <i class="em em-anguished"></i> <i class="em em-anguished"></i></p>'+
                                    '</div>'+
                                     '<div class="line-divider"></div>' +
                            '<div class="post-text"><b>Key Skills: &nbsp;&nbsp;&nbsp;</b>' +

                            '<span>' + gskillArray.join(',') + '</span>' +
                            '</div>' +
                                    '<div class="line-divider"></div>'+
                                    '<div class="row" style="text-align:center;color:grey;margin-bottom:10px">'+
                                        '<div class="col-md-4" style="border-right:1px solid #c0c0c0">'+
                                            '<span>+99 Views</span>'+
                                        '</div>'+
                                        '<div class="col-md-4" style="border-right:1px solid #c0c0c0">'+
                                            '<span>+99 Applied</span>'+
                                        '</div>'+
                                        '<div class="col-md-4">'+
                                            '<span>3.5 - 5 P.A</span>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>';
        }
                    gskillArray.length = 0;

      }
      $("#post_single").append(divTag);
    }
  })
})
