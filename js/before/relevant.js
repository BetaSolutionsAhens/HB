var rec_det;
var rec_skills;
var skl = "";
var skillArray = [];
var divTag;
var candidate_id;
var id;
var stat;
$(document).ready(function(){
	$.ajax({
		type:"GET",
		url:"php/c_relaventJob.php",
		success:function(data){
			// console.log(data);
			// console.log("dsfc")
			var obj=JSON.parse(data);
			console.log(obj);
			for(var i=0;i<obj.length;i++){
				rec_det=obj[i].canDetails;
				rec_skills=obj[i].pskills;
				candidate_id=obj[i].can_id;
				stat=obj[i].r_status;
				// console.log(candidate_id)
				for(var cd=0;cd<candidate_id.length;cd++){
					id=candidate_id[cd];
				}
					// console.log(id)
				for(var j=0;j<rec_det.length;j++){
					// console.log(rec_det[j])
					for(k=0;k<rec_skills.length;k++){
						if(rec_skills[k].jpost_id==rec_det[j].j_id){
							skl = rec_skills[k].rskill_name;
                            skillArray.push(skl.charAt(0).toUpperCase() + skl.slice(1))
                            skl="";
						}
					}
					// for(var s=0;s<stat.length;s++){
					// 	if(stat[s].cv_jb_id==rec_det[j].j_id){
					// 	}
					// 	var b=stat[s].cv_jb_id
					// 	console.log(_.uin(stat[s].cv_jb_id))
					// }

					divTag+='<div class="post-content box" id="news_feed" style="height:400px;">'+
'<div class="post-container" style="padding-bottom:0px;">'+
  '<img src="http://www.isc.hbs.edu/Style%20Library/hbs/images/home/icons/large-circles/business-person-icon.png" alt="user" class="profile-photo-md pull-left">'+

'<div class="post-detail">'+
  '<div class="user-info">'+
      '<h4  style="text-transfrom:capitalize;margin:0px"><a href="#" class="profile-link" id="'+rec_det[j].r_compname+'">'+rec_det[j].r_compname+'</a> </h4>'+
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
'<h5><a href="#" class="profile-link" id="j_title">'+rec_det[j].j_title+' with '+rec_det[j].j_exp+' Experience</a> </h5>'+

'<div class="container" style="height:150px;background:#f8f8f8;width:100%;line-height:20px;padding-top:5px;border-radius:8px;">'+
  '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Years of Exp &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>2 to 4 years</p>'+
  '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Job Role    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;    :&nbsp; </span>Developer</p>'+
  '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Mandatory Skills &nbsp;&nbsp;:&nbsp; </span> '+ skillArray.join(',') +' </p>'+
  '<p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Preferred Skills &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>'+ skillArray.join(',') +'</p>'+
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
      '<button class="btn btn-primary view_rel" name="'+rec_det[j].r_compname+'" id="'+rec_det[j].j_id+'">View</button>'+
  '</div>'+
  '<div class="col-md-4">'+
      '<button class="btn btn-primary apply_btn" name="'+id+'" id="'+rec_det[j].j_id+'" onclick="applyJob('+rec_det[j].j_id+','+id+')" >Apply</button>'+
  '</div>'+
'</div>'+
'</div>'+
'</div>';

                    skillArray.length = 0;

				}
			}
			$("#relevant_post").append(divTag);
		}
	})
})