var pcan_det1;
var gcan_det1;
var pcan_skill1;
var gcan_skill1;
var exp_det1;
var fre_det1;
var exp_loc1;
var fre_loc1;
var psk1 = "";
var gsk1 = "";
var gskillArray1 = [];
var pskillArray1 = [];
var DivTag1;
var year1;
var designation1;
var ctc1;


var pcan_det;
var gcan_det;
var pcan_skill;
var gcan_skill;
var exp_det;
var fre_det;
var status;
var psk = "";
var gsk = "";
var gskillArray = [];
var pskillArray = [];
var DivTag;
var year;
var designation;
var ctc;
var exp_loc;
var fre_loc;
    $(document).ready(function(){
      $.ajaxSetup({cache: false});

      $("#filters").hide();
      $("#aTools").click(function(){
        $("#filters").show();
      })
      $("#searchclass").click(function(){
        var array1=$("input[id='skillSearch']").val();
        alert (array1)
           var strarr = array1.split(',');
           for (var i = 0; i < strarr.length; i++) {
              //  console.log(strarr[i]);
           }
        var exp =$("#exp").val()
        var loc= $("#loc").val();
        var sal = $("#ctc").val();
        $.ajax({
          type:'POST',
          url:'php/rs.php',
          cache:false,
          // dataType:'json',
          data:{skills:strarr},
          success: function(data) {
              console.log(data);
              var obj=JSON.parse(data);
              console.log(obj);
              for(var i=0;i<obj.length;i++){
                pcan_det=obj[i]['canDetails'];
                gcan_det=obj[i]['gencanDetails'];
                pcan_skill=obj[i]['pskills'];
                gcan_skill=obj[i]['cgenskills'];
                exp_det=obj[i]['expDetails'];
                fre_det=obj[i]['freDetails'];
                status=obj[i]['status'];
                for(var j=0;j<pcan_det.length;j++){
                  for(var pk=0;pk<pcan_skill.length;pk++){
                    if(pcan_det[j].cl_id==pcan_skill[pk].proj_sk_uid){
                    psk=pcan_skill[pk].proj_sk_nm;
                            pskillArray.push(psk.charAt(0).toUpperCase() + psk.slice(1))
                            psk="";
                          }
                  }
                  // for(var pd=0;pd<exp_det.length;pd++){
                  //   // console.log(exp_det[pd])
                  //   if(exp_det[pd].ex_uid==pcan_det[j].cl_id){
                  //   ctc=exp_det[pd].ex_exp_comps;
                  //   designation=exp_det[pd].ex_desc;
                  //   year=exp_det[pd].ex_years;
                  // }
                  // }


                      DivTag += '<div id="collapseOne" class="panel-collapse collapse in">' +
                                '<div class="panel-body" id="' + pcan_det[j].cl_id + '">' +
                                '<div class="post-content box" id="news_feed">' +
                                '<div class="post-container" style="padding-bottom:0px;">' +
                                '<img src="img/' + pcan_det[j].b_pic + '" onerror="this.src="img/img12.jpg"" alt="user" class="profile-photo-md pull-left" />' +
                                '<div class="post-detail">' +
                                '<div class="user-info">' +
                                '<h5><a href="#" class="profile-link" id="applicant_name">' + pcan_det[j].cl_un + '</a> </h5>' +
                                '<p class="text-muted"><a href="#" class="coName" id=""></a> Applied about 3 mins ago</p>' +
                                '</div>' +
                                '<div class="reaction">' +
                                '<div class="popup-gallery">' +
                                '<a href="#" class="btn text-green pop viewClass" name="' + pcan_det[j].cl_id + '" id="' + pcan_det[j].cl_id + '" onclick="candidateView(' + pcan_det[j].cl_id + ',' + pcan_det[j].cl_id + ');"  style="color:#27aae1"><i class="fa fa-eye"></i> View</a>' +
                                '</div>' +
                                '<a href="#" class="btn  text-green pop" name="' + pcan_det[j].cl_id + '" id="' + pcan_det[j].cl_id + '" style="color:#27aae1"><i class="fa fa-check"></i> Shortlist</a>' +
                                '</div>' +
                                '</div>' +

                                '<div class="line-divider"></div>' +
                                '<div class="post-text"><b>Key Skills: &nbsp;&nbsp;&nbsp;</b>' +

                                '<span>' + pskillArray.join(',') + '</span>' +
                                '</div>' +
                                '<div class="post-text"><b>Email: &nbsp;&nbsp;&nbsp;</b>' +

                                '<span>' + pcan_det[j].cl_em + '</span>' +
                                '</div>' +
                                '<div class="line-divider"></div>' +
                                '<div class="row" style="text-align:center;color:grey;margin-bottom:10px">' +
                                '<div class="col-md-4" style="border-right:1px solid #c0c0c0">' +
                                '<span>Exp:&nbsp;&nbsp;' + pcan_det[j].ex_years + 'Years</span>' +
                                '</div>' +
                                '<div class="col-md-4" style="border-right:1px solid #c0c0c0">' +
                                '<span>Designation:&nbsp;&nbsp;'+pcan_det[j].ex_desc+'</span>' +
                                '</div>' +
                                '<div class="col-md-4">' +
                                '<span>Expected CTC:&nbsp;&nbsp;'+pcan_det[j].ex_exp_comps+'</span>' +
                                '</div></div></div></div></div></div>';
                    pskillArray.length = 0;
                }

                for(var k=0;k<gcan_det.length;k++){
                  for(var l=0;l<gcan_skill.length;l++){
                    // console.log(gcan_skill[l])
                    if(gcan_det[k].cl_id==gcan_skill[l].g_sk_uid){
                    gsk=gcan_skill[l].g_sk_nm;
                            gskillArray.push(gsk.charAt(0).toUpperCase() + gsk.slice(1))
                            gsk="";
                    }
                  }

                DivTag += '<div id="collapseOne" class="panel-collapse collapse in">' +
                                '<div class="panel-body" id="' + gcan_det[k].cl_id + '">' +
                                '<div class="post-content box" id="news_feed">' +
                                '<div class="post-container" style="padding-bottom:0px;">' +
                                '<img src="img/' + gcan_det[k].b_pic + '" onerror="this.src="img/img12.jpg"" alt="user" class="profile-photo-md pull-left" />' +
                                '<div class="post-detail">' +
                                '<div class="user-info">' +
                                '<h5><a href="#" class="profile-link" id="applicant_name">' + gcan_det[k].cl_un + '</a> </h5>' +
                                '<p class="text-muted"><a href="#" class="coName" id=""></a> Applied about 3 mins ago</p>' +
                                '</div>' +
                                '<div class="reaction">' +
                                '<div class="popup-gallery">' +
                                '<a href="#" class="btn text-green pop viewClass" name="' + gcan_det[k].cl_id + '" id="' + gcan_det[k].cl_id + '" onclick="candidateView(' + gcan_det[k].cl_id + ',' + gcan_det[k].cl_id + ');"  style="color:#27aae1"><i class="fa fa-eye"></i> View</a>' +
                                '</div>' +
                                '<a href="#" class="btn  text-green pop shortlist" name="' + gcan_det[k].cl_id + '" id="' + gcan_det[k].cl_id + '" style="color:#27aae1"><i class="fa fa-check"></i> Shortlist</a>' +
                                '</div>' +
                                '</div>' +

                                '<div class="line-divider"></div>' +
                                '<div class="post-text"><b>Key Skills: &nbsp;&nbsp;&nbsp;</b>' +

                                '<span>' + gskillArray.join(',') + '</span>' +
                                '</div>' +
                                '<div class="post-text"><b>Email: &nbsp;&nbsp;&nbsp;</b>' +

                                '<span>' + gcan_det[k].cl_em + '</span>' +
                                '</div>' +
                                '<div class="line-divider"></div>' +
                                '<div class="row" style="text-align:center;color:grey;margin-bottom:10px">' +
                                '<div class="col-md-4" style="border-right:1px solid #c0c0c0">' +
                                '<span>Exp:&nbsp;&nbsp;' + 0 + 'Years</span>' +
                                '</div>' +
                                '<div class="col-md-4" style="border-right:1px solid #c0c0c0">' +
                                '<span>Designation:&nbsp;&nbsp;</span>' +
                                '</div>' +
                                '<div class="col-md-4">' +
                                '<span>Expected CTC:&nbsp;&nbsp;</span>' +
                                '</div></div></div></div></div></div>';
                    gskillArray.length = 0;

                }
              }
              $("#applied1").append(DivTag)

            $("#can_filter").click(function(){
              var exp =$("#exp").val();
              var loc= $("#loc").val();
              var sal = $("#ctc").val();
              // console.log(exp+loc+sal)
              var filter=obj;
              // console.log(filter)
              for(var fob=0;fob<filter.length;fob++){
                // console.log(filter[fob]['canDetails'])
                pcan_det1=filter[fob]['canDetails'];
                // console.log(pcan_det1)
                gcan_det1=filter[fob]['gencanDetails'];
                pcan_skill1=filter[fob]['pskills'];
                gcan_skill1=filter[fob]['cgenskills'];
                exp_det1=filter[fob]['expDetails'];
                fre_det1=filter[fob]['freDetails'];
                exp_loc1=filter[fob]['plocation'];
                fre_loc1=filter[fob]['flocation'];
                for(var pd=0;pd<pcan_det1.length;pd++){
                  // console.log(pcan_det1[pd])
                  for(var pl=0;pl<exp_loc1.length;pl++){
                    if(exp_loc1[pl].pref_loc_uid==pcan_det1[pd].cl_id && (exp_loc1[pl].pref_loc_name==loc && pcan_det1[pd].ex_years==exp && pcan_det1[pd].ex_exp_comps==sal)){
                    // console.log(exp_loc1[pl].pref_loc_uid)
                    for(var pk=0;pk<pcan_skill1.length;pk++){
                    if(exp_loc1[pl].pref_loc_uid==pcan_skill1[pk].proj_sk_uid){
                    psk1=pcan_skill1[pk].proj_sk_nm;
                            pskillArray1.push(psk1.charAt(0).toUpperCase() + psk1.slice(1))
                            psk1="";
                          }
                        }
                  //       for(var ed=0;ed<exp_det1.length;ed++){
                  //   // console.log(exp_det[pd])
                  //   if(exp_det1[ed].ex_uid==exp_loc1[pl].pref_loc_uid && exp_det1[ed].ex_years==exp){
                  //   ctc1=exp_det1[ed].ex_exp_comps;
                  //   designation1=exp_det1[ed].ex_desc;
                  //   year1=exp_det1[ed].ex_years;
                  // }
                  // }
                          // console.log(pskillArray1)
                          DivTag1 += '<div id="collapseOne" class="panel-collapse collapse in">' +
                                '<div class="panel-body" id="' + pcan_det1[pd].cl_id + '">' +
                                '<div class="post-content box" id="news_feed">' +
                                '<div class="post-container" style="padding-bottom:0px;">' +
                                '<img src="img/' + pcan_det1[pd].b_pic + '" onerror="this.src="img/img12.jpg"" alt="user" class="profile-photo-md pull-left" />' +
                                '<div class="post-detail">' +
                                '<div class="user-info">' +
                                '<h5><a href="#" class="profile-link" id="applicant_name">' + pcan_det1[pd].cl_un + '</a> </h5>' +
                                '<p class="text-muted"><a href="#" class="coName" id=""></a> Applied about 3 mins ago</p>' +
                                '</div>' +
                                '<div class="reaction">' +
                                '<div class="popup-gallery">' +
                                '<a href="#" class="btn text-green pop viewClass" name="' + pcan_det1[pd].cl_un + '" id="' + pcan_det1[pd].cl_id + '" onclick="candidateView(' + pcan_det[pd].cl_id + ',' + pcan_det[pd].cl_id + ');"  style="color:#27aae1"><i class="fa fa-eye"></i> View</a>' +
                                '</div>' +
                                '<a href="#" class="btn  text-green pop" name="' + pcan_det1[pd].cl_un + '" id="' + pcan_det1[pd].cl_id + '" style="color:#27aae1"><i class="fa fa-check"></i> Shortlist</a>' +
                                '</div>' +
                                '</div>' +

                                '<div class="line-divider"></div>' +
                                '<div class="post-text"><b>Key Skills: &nbsp;&nbsp;&nbsp;</b>' +

                                '<span>' + pskillArray1.join(',') + '</span>' +
                                '</div>' +
                                '<div class="post-text"><b>Email: &nbsp;&nbsp;&nbsp;</b>' +

                                '<span>' + pcan_det1[pd].cl_em + '</span>' +
                                '</div>' +
                                '<div class="line-divider"></div>' +
                                '<div class="row" style="text-align:center;color:grey;margin-bottom:10px">' +
                                '<div class="col-md-4" style="border-right:1px solid #c0c0c0">' +
                                '<span>Exp:&nbsp;&nbsp;' + pcan_det1[pd].ex_years + 'Years</span>' +
                                '</div>' +
                                '<div class="col-md-4" style="border-right:1px solid #c0c0c0">' +
                                '<span>Designation:&nbsp;&nbsp;'+pcan_det1[pd].ex_desc+'</span>' +
                                '</div>' +
                                '<div class="col-md-4">' +
                                '<span>Expected CTC:&nbsp;&nbsp;'+pcan_det1[pd].ex_exp_comps+'</span>' +
                                '</div></div></div></div></div></div>';
                    pskillArray1.length = 0;


                    }
                  }
                }
              //   for(var i=0;i<pcan_det.length;i++){
              //   }

              for(var c=0;c<gcan_det1.length;c++){
                for(var fl=0;fl<fre_loc1.length;fl++){
                  if(fre_loc1[fl].pref_loc_uid==gcan_det1[c].cl_id && fre_loc1[fl].pref_loc_name==loc){
                   for(var l=0;l<gcan_skill1.length;l++){
                    // console.log(gcan_skill[l])
                    if(fre_loc1[fl].pref_loc_uid==gcan_skill1[l].g_sk_uid){
                    gsk1=gcan_skill1[l].g_sk_nm;
                            gskillArray1.push(gsk1.charAt(0).toUpperCase() + gsk1.slice(1))
                            gsk1="";
                    }
                  }
                  DivTag1 += '<div id="collapseOne" class="panel-collapse collapse in">' +
                                '<div class="panel-body" id="' + gcan_det1[c].cl_id + '">' +
                                '<div class="post-content box" id="news_feed">' +
                                '<div class="post-container" style="padding-bottom:0px;">' +
                                '<img src="img/' + gcan_det1[c].b_pic + '" onerror="this.src="img/img12.jpg"" alt="user" class="profile-photo-md pull-left" />' +
                                '<div class="post-detail">' +
                                '<div class="user-info">' +
                                '<h5><a href="#" class="profile-link" id="applicant_name">' + gcan_det1[c].cl_un + '</a> </h5>' +
                                '<p class="text-muted"><a href="#" class="coName" id=""></a> Applied about 3 mins ago</p>' +
                                '</div>' +
                                '<div class="reaction">' +
                                '<div class="popup-gallery">' +
                                '<a href="#" class="btn text-green pop viewClass" name="' + gcan_det1[c].cl_un + '" id="' + gcan_det1[c].cl_id + '" onclick="candidateView(' + gcan_det1[c].cl_un + ',' + gcan_det1[c].cl_id + ');"  style="color:#27aae1"><i class="fa fa-eye"></i> View</a>' +
                                '</div>' +
                                '<a href="#" class="btn  text-green pop shortlist" name="' + gcan_det1[c].cl_un + '" id="' + gcan_det1[c].cl_id + '" style="color:#27aae1"><i class="fa fa-check"></i> Shortlist</a>' +
                                '</div>' +
                                '</div>' +

                                '<div class="line-divider"></div>' +
                                '<div class="post-text"><b>Key Skills: &nbsp;&nbsp;&nbsp;</b>' +

                                '<span>' + gskillArray1.join(',') + '</span>' +
                                '</div>' +
                                '<div class="post-text"><b>Email: &nbsp;&nbsp;&nbsp;</b>' +

                                '<span>' + gcan_det1[c].cl_em + '</span>' +
                                '</div>' +
                                '<div class="line-divider"></div>' +
                                '<div class="row" style="text-align:center;color:grey;margin-bottom:10px">' +
                                '<div class="col-md-4" style="border-right:1px solid #c0c0c0">' +
                                '<span>Exp:&nbsp;&nbsp;' + 0 + 'Years</span>' +
                                '</div>' +
                                '<div class="col-md-4" style="border-right:1px solid #c0c0c0">' +
                                '<span>Designation:&nbsp;&nbsp;</span>' +
                                '</div>' +
                                '<div class="col-md-4">' +
                                '<span>Expected CTC:&nbsp;&nbsp;</span>' +
                                '</div></div></div></div></div></div>';
                    gskillArray1.length = 0;

                  }
                }
              }
              }
              $("#applied1").hide();
              $("#filter_data").append(DivTag1);

            })
          }
        })
      })
    })


// $(document).ready(function(){
//   $("#can_filter").click(function(){
//     var exp =$("#exp").val();
//     var loc= $("#loc").val();
//     var sal = $("#ctc").val();
//     // console.log(exp+loc+sal)
//     $.ajax({
//       type:"",
//       url:"php/rs.php",
//       success:function(det){
//         console.log(det);
//       }
//     })
//   })
// })
// $(document).on('click','#can_filter',function(){
//   console.log("hjgjhg")
// })
