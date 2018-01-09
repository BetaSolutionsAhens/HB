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


$(document).ready(function() {
    $.ajax({
        url: 'php/r_job_applied.php',
        method: 'GET',
        success: function(data) {
            var obj = JSON.parse(data);
            console.log(obj)
            for (var i = 0; i < obj.length; i++) {
                console.log(obj[i]['gskills'])
                gskills = obj[i]['gskills'];
                pskill = obj[i]['pskills'];
                cand = obj[i]['canDetails'];
                expDetails = obj[i]['expDetails'];
                for (var i = 0; i < cand.length; i++) {
                    console.log(cand[i].cl_un)
                    console.log(cand[i].e_cn_type)
                    var cantype = cand[i].e_cn_type;
                    if (cantype == "fre") {
                        for (var k = 0; k < gskills.length; k++) {
                            gsk = gskills[k].g_sk_nm;
                            gskillArray.push(gsk.charAt(0).toUpperCase() + gsk.slice(1))
                        }

                        divTag += '<div id="collapseOne" class="panel-collapse collapse in">' +
                            '<div class="panel-body" id="divId" name="' + cand[i].cv_jb_id + '">' +
                            '<div class="post-content box" id="news_feed">' +
                            '<div class="post-container" style="padding-bottom:0px;">' +
                            '<img src="img/' + cand[i].b_pic + '" onerror="this.src="img/img12.jpg"" alt="user" class="profile-photo-md pull-left" />' +
                            '<div class="post-detail">' +
                            '<div class="user-info">' +
                            '<h5><a href="#" class="profile-link" id="applicant_name">' + cand[i].cl_un + '</a> </h5>' +
                            '<p class="text-muted"><a href="#" class="coName" id=""></a> Applied about 3 mins ago</p>' +
                            '</div>' +
                            '<div class="reaction">' +
                            '<div class="popup-gallery">' +
                            '<a href="#" class="btn text-green pop viewClass" name="' + cand[i].cv_can_id + '" id="' + cand[i].cv_jb_id + '"  style="color:#27aae1"><i class="fa fa-eye"></i> View</a>' +
                            '</div>' +
                            '<a href="#" class="btn  text-green pop" name="' + cand[i].cv_can_id + '" id="' + cand[i].cv_jb_id + '" style="color:#27aae1" onclick="shortlistJob(' + cand[i].cv_jb_id + ',' + cand[i].cv_can_id + ');" ><i class="fa fa-check"></i> Shortlist</a>' +
                            '</div>' +
                            '</div>' +

                            '<div class="line-divider"></div>' +
                            '<div class="post-text"><b>Key Skills: &nbsp;&nbsp;&nbsp;</b>' +

                            '<span>' + gskillArray.join(',') + '</span>' +
                            '</div>' +
                            '<div class="post-text"><b>Email: &nbsp;&nbsp;&nbsp;</b>' +

                            '<span>' + cand[i].cl_em + '</span>' +
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
                    } else {
                        for (var j = 0; j < pskill.length; j++) {
                            if (pskill[j].cv_can_id == cand[i].cl_id) {
                                psk = psk + pskill[j].proj_sk_nm;
                                pskillArray.push(psk.charAt(0).toUpperCase() + psk.slice(1))

                                psk = "";
                            }
                        }
                        for (var l = 0; l < expDetails.length; l++) {
                            if (expDetails[l].cv_can_id == cand[i].cv_can_id) {
                                expyears = expDetails[l].ex_years;
                                expComp = expDetails[l].ex_exp_comps;
                                expdesg = expDetails[l].ex_desc;
                            }
                        }
                        divTag += '<div id="collapseOne" class="panel-collapse collapse in">' +
                            '<div class="panel-body" id="divId" name="' + cand[i].cv_can_id + '">' +
                            '<div class="post-content box" id="news_feed">' +
                            '<div class="post-container" style="padding-bottom:0px;">' +
                            '<img src="img/' + cand[i].b_pic + '" onError="this.onerror=null;this.src="/img/img12.jpg";" alt="img" class="profile-photo-md pull-left" />' +
                            '<div class="post-detail">' +
                            '<div class="user-info">' +
                            '<h5><a href="#" class="profile-link" id="applicant_name">' + cand[i].cl_un + '</a> </h5>' +
                            '<p class="text-muted"><a href="#" class="coName" id=""></a> Applied about 3 mins ago</p>' +
                            '</div>' +
                            '<div class="reaction">' +
                            '<div class="popup-gallery">' +
                            '<a href="#" class="btn text-green pop viewClass" name="' + cand[i].cv_can_id + '" id="' + cand[i].cv_jb_id + '" onclick="viewCand(' + cand[i].cv_jb_id + ',' + cand[i].cv_can_id + ');" style="color:#27aae1"><i class="fa fa-eye"></i> View</a>' +
                            '</div>' +
                            '<a href="#" class="btn  text-green pop" name="' + cand[i].cv_can_id + '" id="' + cand[i].cv_jb_id + '" style="color:#27aae1" onclick="shortlistJob(' + cand[i].cv_jb_id + ',' + cand[i].cv_can_id + ');" ><i class="fa fa-check"></i> Shortlist</a>' +
                            '</div>' +
                            '</div>' +
                            '<div class="line-divider"></div>' +
                            '<div class="post-text"><b>Key Skills: &nbsp;&nbsp;&nbsp;</b>' +
                            '<span>' + pskillArray.join(',') + '</span>' +
                            '</div>' +
                            '<div class="post-text"><b>Email: &nbsp;&nbsp;&nbsp;</b>' +
                            '<span>' + cand[i].cl_em + '</span>' +
                            '</div>' +
                            '<div class="line-divider"></div>' +
                            '<div class="row" style="text-align:center;color:grey;margin-bottom:10px">' +
                            '<div class="col-md-4" style="border-right:1px solid #c0c0c0">' +
                            '<span>Exp:&nbsp;&nbsp;' + expyears + 'Years</span>' +
                            '</div>' +
                            '<div class="col-md-4" style="border-right:1px solid #c0c0c0">' +
                            '<span>Designation:&nbsp;&nbsp;' + expdesg + '</span>' +
                            '</div>' +
                            '<div class="col-md-4">' +
                            '<span>Expected CTC:&nbsp;&nbsp;' + expComp + '</span>' +
                            '</div></div></div></div></div></div>';
                    }
                    pskillArray.length = 0;
                }
                $("#applied1").append(divTag)
            }
        }
    })
    var last_id = $("#divId").attr("name");
    // loadMoreData(last_id);
    console.log(last_id)

    // scroll
$(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() >= $(document).height()) {
            var last_id = $(".panel-body:last").attr("id");
            loadMoreData(last_id);
            console.log(last_id)
        }
    });

    function loadMoreData(last_id){
      $.ajax(
            {
                url: 'php/loadMoreData.php?last_id=' + last_id,
                type: "GET",
                data:"text",
                success: function(data_lm)
                {
                    $('.ajax-load').show();
                    // alert("dfd")
                    var lm_obj = JSON.parse(data_lm);
            console.log(lm_obj);
            for(var lm = 0;lm < lm_obj.length; lm++){
                lm_gskill=lm_obj[lm]['gskills'];
                lm_pskills=lm_obj[lm]['pskills'];
                lm_cand=lm_obj[lm]['canDetails'];
                lm_ExpDetails=lm_obj[lm]['expDetails'];
                for(var lmi = 0;lmi < lm_cand.length;lmi++){
                    lm_ctype=lm_cand[lmi].e_cn_type;
                    // console.log(lm_ctype);
                    if(lm_ctype == "fre"){
                        for(var lmi_sk = 0;lmi_sk<lm_gskill.length;lmi_sk++){
                            lm_gsk=lm_gskill[lmi_sk].g_sk_nm;
                            lm_gskillArray.push(lm_gsk.charAt(0).toUpperCase() + lm_gsk.slice(1))
                        }
                         // if data

                        lm_divTag += '<div id="collapseOne" class="panel-collapse collapse in">' +
                            '<div class="panel-body " id="'+lm_cand[lmi].cv_id+'">' +
                            '<div class="post-content box" id="news_feed">' +
                            '<div class="post-container" style="padding-bottom:0px;">' +
                            '<img src="img/' + lm_cand[lmi].b_pic + '" onerror="this.src="img/img12.jpg"" alt="user" class="profile-photo-md pull-left" />' +
                            '<div class="post-detail">' +
                            '<div class="user-info">' +
                            '<h5><a href="#" class="profile-link" id="applicant_name">' + lm_cand[lmi].cl_un + '</a> </h5>' +
                            '<p class="text-muted"><a href="#" class="coName" id=""></a> Applied about 3 mins ago</p>' +
                            '</div>' +
                            '<div class="reaction">' +
                            '<div class="popup-gallery">' +
                            '<a href="#" class="btn text-green pop viewClass" name="' + lm_cand[lmi].cv_can_id + '" id="' + lm_cand[lmi].cv_jb_id + '"  style="color:#27aae1"><i class="fa fa-eye"></i> View</a>' +
                            '</div>' +
                            '<a href="#" class="btn  text-green pop" name="' + lm_cand[lmi].cv_can_id + '" id="' + lm_cand[lmi].cv_jb_id + '" style="color:#27aae1" onclick="shortlistJob(' + lm_cand[lmi].cv_jb_id + ',' + lm_cand[lmi].cv_can_id + ');" ><i class="fa fa-check"></i> Shortlist</a>' +
                            '</div>' +
                            '</div>' +

                            '<div class="line-divider"></div>' +
                            '<div class="post-text"><b>Key Skills: &nbsp;&nbsp;&nbsp;</b>' +

                            '<span>' + lm_gskillArray.join(',') + '</span>' +
                            '</div>' +
                            '<div class="post-text"><b>Email: &nbsp;&nbsp;&nbsp;</b>' +

                            '<span>' + lm_cand[lmi].cl_em + '</span>' +
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
                    }
                    else{
                        for(var lmj = 0;lmj<lm_pskills.length;lmj++){
                            if(lm_pskills[lmj].cv_can_id == lm_cand[lmi].cl_id){
                                lm_psk = lm_psk + lm_pskills[lmj].proj_sk_nm;
                                lm_pskillArray.push(lm_psk.charAt(0).toUpperCase() + lm_psk.slice(1))

                                lm_psk = "";
                            }
                        }
                        for(var lmj_exp = 0;lmj_exp<lm_ExpDetails.length;lmj_exp++){
                            if(lm_ExpDetails[lmj_exp].cv_can_id == lm_cand[lmi].cv_can_id){
                                lm_expyears=lm_ExpDetails[lmj_exp].ex_years;
                                lm_expdesg=lm_ExpDetails[lmj_exp].ex_desc;
                                lm_excomp=lm_ExpDetails[lmj_exp].ex_exp_comps;
                            }
                        }
                        // else data
                        lm_divTag += '<div id="collapseOne" class="panel-collapse collapse in">' +
                            '<div class="panel-body " id="'+lm_cand[lmi].cv_id+'">' +
                            '<div class="post-content box" id="news_feed">' +
                            '<div class="post-container" style="padding-bottom:0px;">' +
                            '<img src="img/' + lm_cand[lmi].b_pic + '" onError="this.onerror=null;this.src="/img/img12.jpg";" alt="img" class="profile-photo-md pull-left" />' +
                            '<div class="post-detail">' +
                            '<div class="user-info">' +
                            '<h5><a href="#" class="profile-link" id="applicant_name">' + lm_cand[lmi].cl_un + '</a> </h5>' +
                            '<p class="text-muted"><a href="#" class="coName" id=""></a> Applied about 3 mins ago</p>' +
                            '</div>' +
                            '<div class="reaction">' +
                            '<div class="popup-gallery">' +
                            '<a href="#" class="btn text-green pop viewClass" name="' + lm_cand[lmi].cv_can_id + '" id="' + lm_cand[lmi].cv_jb_id + '" onclick="viewCand(' + lm_cand[lmi].cv_jb_id + ',' + lm_cand[lmi].cv_can_id + ');" style="color:#27aae1"><i class="fa fa-eye"></i> View</a>' +
                            '</div>' +
                            '<a href="#" class="btn  text-green pop" name="' + lm_cand[lmi].cv_can_id + '" id="' + lm_cand[lmi].cv_jb_id + '" style="color:#27aae1" onclick="shortlistJob(' + lm_cand[lmi].cv_jb_id + ',' + lm_cand[lmi].cv_can_id + ');" ><i class="fa fa-check"></i> Shortlist</a>' +
                            '</div>' +
                            '</div>' +
                            '<div class="line-divider"></div>' +
                            '<div class="post-text"><b>Key Skills: &nbsp;&nbsp;&nbsp;</b>' +
                            '<span>' + lm_pskillArray.join(',') + '</span>' +
                            '</div>' +
                            '<div class="post-text"><b>Email: &nbsp;&nbsp;&nbsp;</b>' +
                            '<span>' + lm_cand[lmi].cl_em + '</span>' +
                            '</div>' +
                            '<div class="line-divider"></div>' +
                            '<div class="row" style="text-align:center;color:grey;margin-bottom:10px">' +
                            '<div class="col-md-4" style="border-right:1px solid #c0c0c0">' +
                            '<span>Exp:&nbsp;&nbsp;' + lm_expyears + 'Years</span>' +
                            '</div>' +
                            '<div class="col-md-4" style="border-right:1px solid #c0c0c0">' +
                            '<span>Designation:&nbsp;&nbsp;' + lm_expdesg + '</span>' +
                            '</div>' +
                            '<div class="col-md-4">' +
                            '<span>Expected CTC:&nbsp;&nbsp;' + lm_excomp + '</span>' +
                            '</div></div></div></div></div></div>';
                    }
                }
            }


                }
            })
            .done(function(data)
            {
                $('.ajax-load').hide();
                $("#applied1").append(lm_divTag);
                // $(".test_load").afterhtml('#applied1');
                // $('#applied1').load("divTag");
            })
            .fail(function(jqXHR, ajaxOptions, thrownError)
            {
                  alert('server not responding...');
            });
    }


    $("#tabshort").click(function() {
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
        $.ajax({
            url: 'php/c_job_shortlist.php',
            method: 'POST',

            success: function(data) {
                var obj = JSON.parse(data);
                console.log(obj)
                for (var i = 0; i < obj.length; i++) {
                    console.log(obj[i]['gskills'])
                    gskills = obj[i]['gskills'];
                    pskill = obj[i]['pskills'];
                    cand = obj[i]['canDetails'];
                    expDetails = obj[i]['expDetails'];
                    for (var i = 0; i < cand.length; i++) {
                        console.log(cand[i].cl_un)
                        console.log(cand[i].e_cn_type)
                        var cantype = cand[i].e_cn_type;
                        if (cantype == "fre") {
                            for (var k = 0; k < gskills.length; k++) {
                                gsk = gskills[k].g_sk_nm;
                                gskillArray.push(gsk.charAt(0).toUpperCase() + gsk.slice(1))
                            }

                            divTag += '<div id="collapseOne" class="panel-collapse collapse in">' +
                                '<div class="panel-body">' +
                                '<div class="post-content box" id="news_feed">' +
                                '<div class="post-container" style="padding-bottom:0px;">' +
                                '<img src="img/' + cand[i].b_pic + '" alt="user" class="profile-photo-md pull-left" />' +
                                '<div class="post-detail">' +
                                '<div class="user-info">' +
                                '<h5><a href="#" class="profile-link" id="applicant_name">' + cand[i].cl_un + '</a> </h5>' +
                                '<p class="text-muted"><a href="#" class="coName" id=""></a> Applied about 3 mins ago</p>' +
                                '</div>' +
                                '<div class="reaction">' +
                                '<div class="popup-gallery">' +
                                '<a href="#" class="btn text-green pop viewClass" name="' + cand[i].cv_can_id + '" id="' + cand[i].cv_jb_id + '" onclick="viewCand(' + cand[i].cv_jb_id + ',' + cand[i].cv_can_id + ');" style="color:#27aae1"><i class="fa fa-eye"></i> View</a>' +
                                '</div>' +
                                '</div>' +
                                '</div>' +

                                '<div class="line-divider"></div>' +
                                '<div class="post-text"><b>Key Skills: &nbsp;&nbsp;&nbsp;</b>' +

                                '<span>' + gskillArray.join(',') + '</span>' +
                                '</div>' +
                                '<div class="post-text"><b>Email: &nbsp;&nbsp;&nbsp;</b>' +

                                '<span>' + cand[i].cl_em + '</span>' +
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
                        } else {
                            for (var j = 0; j < pskill.length; j++) {

                                if (pskill[j].cv_can_id == cand[i].cl_id) {

                                    psk = psk + pskill[j].proj_sk_nm;

                                    pskillArray.push(psk.charAt(0).toUpperCase() + psk.slice(1))

                                    psk = "";
                                }

                            }



                            for (var l = 0; l < expDetails.length; l++) {
                                if (expDetails[l].cv_can_id == cand[i].cv_can_id) {
                                    expyears = expDetails[l].ex_years;
                                    expComp = expDetails[l].ex_exp_comps;
                                    expdesg = expDetails[l].ex_desc;

                                }

                            }
                            divTag += '<div id="collapseOne" class="panel-collapse collapse in">' +
                                '<div class="panel-body">' +
                                '<div class="post-content box" id="news_feed">' +
                                '<div class="post-container" style="padding-bottom:0px;">' +
                                '<img src="img/' + cand[i].b_pic + '" alt="user" class="profile-photo-md pull-left" />' +
                                '<div class="post-detail">' +
                                '<div class="user-info">' +
                                '<h5><a href="#" class="profile-link" id="applicant_name">' + cand[i].cl_un + '</a> </h5>' +
                                '<p class="text-muted"><a href="#" class="coName" id=""></a> Applied about 3 mins ago</p>' +
                                '</div>' +
                                '<div class="reaction">' +
                                '<div class="popup-gallery">' +
                                '<a href="#" class="btn text-green pop viewClass" name="' + cand[i].cv_can_id + '" id="' + cand[i].cv_jb_id + '" onclick="viewCand(' + cand[i].cv_jb_id + ',' + cand[i].cv_can_id + ');" style="color:#27aae1"><i class="fa fa-eye"></i> View</a>' +
                                '</div>' +
                                '</div>' +
                                '</div>' +

                                '<div class="line-divider"></div>' +
                                '<div class="post-text"><b>Key Skills: &nbsp;&nbsp;&nbsp;</b>' +

                                '<span>' + pskillArray.join(',') + '</span>' +


                                '</div>' +
                                '<div class="post-text"><b>Email: &nbsp;&nbsp;&nbsp;</b>' +

                                '<span>' + cand[i].cl_em + '</span>' +
                                '</div>' +
                                '<div class="line-divider"></div>' +
                                '<div class="row" style="text-align:center;color:grey;margin-bottom:10px">' +
                                '<div class="col-md-4" style="border-right:1px solid #c0c0c0">' +
                                '<span>Exp:&nbsp;&nbsp;' + expyears + 'Years</span>' +
                                '</div>' +
                                '<div class="col-md-4" style="border-right:1px solid #c0c0c0">' +
                                '<span>Designation:&nbsp;&nbsp;' + expdesg + '</span>' +
                                '</div>' +
                                '<div class="col-md-4">' +
                                '<span>Expected CTC:&nbsp;&nbsp;' + expComp + '</span>' +
                                '</div></div></div></div></div></div>';
                        }


                        pskillArray.length = 0;


                    }
                    $("#shortlisted").append(divTag)

                }


            }
        })
    })
})


// function viewCand(jobId,canId) {
  var data = [
    {
      username: "Brad Frost", // Key "username" means that Magnific Popup will look for an element with class "mfp-username" in markup and will replace its inner HTML with the value.

      userWebsite_href: 'http://www.bradfrostweb.com', // Key "userWebsite_href" means that Magnific Popup will look for an element with class "mfp-userWebsite" and will change its "href" attribute. Instead of ending "href" you may put any other attribute.

      userAvatarUrl_img: 'https://si0.twimg.com/profile_images/1561258552/brad_frost_bigger.png', // Prefix "_img" is special. With it Magnific Popup finds an  element "userAvatarUrl" and replaces it completely with image tag.

      userLocation: 'Pittsburgh, PA'
    },

    {
      username: "Paul Irish",
      userWebsite_href: 'http://paulirish.com',
      userAvatarUrl_img: 'https://si0.twimg.com/profile_images/2910976341/7d972c32f3882f715ff84a67685e6acf_bigger.jpeg',
      userLocation: 'San Francisco'

    },

    {
      username: "Chris Coyier",
      userWebsite_href: 'https://css-tricks.com',
      userAvatarUrl_img: 'https://si0.twimg.com/profile_images/1668225011/Gravatar2_bigger.png',
      userLocation: 'Palo Alto, California'
    }
  ];
    // alert(canId)
    // var id = canId;
    // var jobid = jobId;
    $('.popup-gallery').magnificPopup({
      key: 'my-popup',
      items: data,
      type: 'inline',
      inline: {
        // Define markup. Class names should match key names.
        markup: '<div class="white-popup"><div class="mfp-close"></div>'+
                  '<a class="mfp-userWebsite">'+
                    '<div class="mfp-userAvatarUrl"></div>'+
                    '<h2 class="mfp-username"></h2>'+
                  '</a>'+
                  '<div class="mfp-userLocation"></div>'+
                '</div>'
      },
      gallery: {
        enabled: true
      },
      callbacks: {
        markupParse: function(template, values, item) {
          // optionally apply your own logic - modify "template" element based on data in "values"
          // console.log('Parsing:', template, values, item);
        }
      }
    });
    // $.ajax({
    //     url: 'php/r_canView.php',
    //     method: 'POST',
    //     data:{cid:id,jid:jobid},
    //     success: function(data) {
    //       alert(data)
    //     }
    //   });
    // $.post("php/r_job_applied.php", {
    //         cid: id,
    //         jid: jobid
    //     },
    //     function(data, status) {
    //       alert(status)
    //         alert("Data: " + data);
    //     });

// }
