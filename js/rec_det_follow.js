var skills;
var jpost;
var skl = "";
var skillArray = [];
var followDiv;
var can_id;
var id;
$(document).ready(function(){
	$.ajaxSetup({cache: false});

	$.ajax({
		type:"GET",
		url:"php/rec_det_follow.php",
		cache:false,
		success:function(data){
			console.log(data)
			var obj=JSON.parse(data);
			console.log(obj);
			for(var i=0;i<obj.length;i++){
				jpost=obj[i]['posts'];
				skills=obj[i]['skills'];
				can_id=obj[i]['session_id'];
				// console.log(can_id)
				for(var c=0;c<can_id.length;c++){
					id=can_id[c]
				}
					// console.log(id)
				for(var j=0;j<jpost.length;j++){
					// console.log(jpost[j].j_id)
					for(var k=0;k<skills.length;k++){
						// console.log(skills[k].jpost_id)
						if(skills[k].jpost_id==jpost[j].j_id){

							skl = skills[k].rskill_name;
							// console.log(skl)
                            skillArray.push(skl.charAt(0).toUpperCase() + skl.slice(1))
                            skl="";
						}
						// console.log(skillArray)
					}
					followDiv+='<div class="post-content box" id="news_feed" style="height:400px;">'+
'<div class="post-container" style="padding-bottom:0px;">'+
  '<img src="http://www.isc.hbs.edu/Style%20Library/hbs/images/home/icons/large-circles/business-person-icon.png" alt="user" class="profile-photo-md pull-left">'+

'<div class="post-detail">'+
  '<div class="user-info">'+
      '<h4  style="text-transfrom:capitalize;margin:0px"><a href="#" class="profile-link follow_rec" name="'+jpost[j].r_id+'" id="'+jpost[j].r_compname+'" name="'+jpost[j].r_id+'">'+jpost[j].r_compname+'</a> </h4>'+
      '<p class="text-muted"> Published a photo about 3 mins ago</p>'+
  '</div>'+
  // '<div class="reaction">'+
  //     // <!--  <a class="pop">View </a> -->

  //     '<a href="#" class="btn text-green pop" name="betasolutions" id="11" data-toggle="modal" onclick="viewJob($(this).attr('id'),$(this).attr('name'),$(this).attr())" style="color:#27aae1"><i class="fa fa-eye"></i> View</a>'+
  //                                      '<a href="#" class="btn  text-green pop apply_btn" name="1" id="11" style="color:#27aae1"><i class="fa fa-check"></i> Applied</a>'+

  //     // <!-- <a href="#" class="b÷tn  text-green pop apply_btn" name="1" id="11" style="color:#27aae1" onclick="applyJob($(this).attr('id'),$(this).attr('name'),$(this).attr('class'))"><i class="fa fa-check"></i> Apply</a> -->
  // '</div>'+
'</div>'+
'<div class="line-divider"></div>'+
'<div class="post-text" style="height:250px;">'+
'<h5><a href="#" class="profile-link" id="j_title">'+jpost[j].j_title+' with '+jpost[j].j_exp+' Experience</a> </h5>'+

'<div class="container" style="height:150px;background:#f8f8f8;width:100%;line-height:20px;padding-top:5px;border-radius:8px;">'+
  '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Years of Exp &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>2 to 4 years</p>'+
  '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Job Role    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;    :&nbsp; </span>Developer</p>'+
  '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Mandatory Skills &nbsp;&nbsp;:&nbsp; </span> ' + skillArray.join(',') +' </p>'+
  '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Preferred Skills &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>' + skillArray.join(',') +'</p>'+
  '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Job Location &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>Visakhapatnam</p>'+
  '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Conditions &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>Night Shift</p>'+
  '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Package &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>3.5 - 5 P.A</p>'+

'</div>'+
'<div class="container" style="width:100%">'+
  '<p style="text-align:justify;line-height:20px;"><span style="font-weight:bold">Job Description &nbsp;&nbsp;&nbsp;:&nbsp; </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>'+

'</div>'+
'</div>'+
'<div class="line-divider"></div>'+
'<div class="row" style="text-align:center;color:grey;margin-bottom:10px">'+
  '<div class="col-md-4" style="border-right:1px solid #c0c0c0">'+
      '<button class="btn btn-primary">Share</button>'+
  '</div>'+
  '<div class="col-md-4" style="border-right:1px solid #c0c0c0">'+
      '<button class="btn btn-primary view" name="'+jpost[j].r_compname+'" id="'+jpost[j].j_id+'">View</button>'+
  '</div>'+
  '<div class="col-md-4">'+
      '<button class="btn btn-primary apply_btn" name="'+id+'" id="'+jpost[j].j_id+'" onclick="applyJob('+jpost[j].j_id+','+id+')">Apply</button>'+
  '</div>'+
'</div>'+
'</div>'+
'</div>';
                    skillArray.length = 0;


				}
			}
			$("#follow_post").append(followDiv);
		}
	})
})
