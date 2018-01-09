var candbasic;
var eduInfo;
// var freInfo;
var ex_projInfo;
var fre_projInfo;

var c_img;
var c_nm;
var c_em;
var c_phn;
var c_loc;
var c_dob;
var c_gen;
var c_mstatus;
var projInfo;
var c_img;
var c_nm;
var c_em;
var c_phn;
var c_loc;
var c_dob;
var c_gen;
var c_mstatus;
var popDiv;
var markup;
var canId;
var q_board;
var q_inst;
var q_spc;
var q_year;
var can_type;
var f_prnm;
var f_prdsc;
var f_wnm;
var f_wdsc;
var f_prst;
var f_uid;
var p_client ;
var p_domain ;
var p_duration;
var p_nm;
var p_id;
var p_uid;

var p;

var popupdata=[];
var data1 =""
$.ajaxSetup({cache: false});

function shortlistJob(job_id,cand_id){
  console.log(job_id);
  console.log(cand_id)
  // console.log("hu")
  $.ajax({
    url:'php/job_shortlist.php',
    method:'POST',
    data:{jid:job_id,cid:cand_id},
    cache:false,
    success:function(data){
      console.log(data);
      if(data=="Updated"){
        // $("#news_feed").load()
        console.log("one")
        $("a[id="+job_id+"][name$="+cand_id+"]").html("<i class='fa fa-check'></i>Shortlisted");
      }
    }
  })
}
function candidateView(job_id,cand_id){
  console.log(cand_id);
  console.log(job_id);
  $.ajax({
    url:'php/r_canView.php',
    type:'POST',
    data:{cid:cand_id,jid:job_id},
    cache:false,
    success:function(data){
      // console.log(data);
      var obj = JSON.parse(data);
      for (var i = 0; i < obj.length; i++) {
        // console.log(obj[i]['basic'])
        // console.log(obj[i]['edu'])
        // console.log(obj[i]['expPro']);
        // console.log(obj[i]['frepro']);

        candbasic = obj[i]['basic'];
        eduInfo = obj[i]['edu'];
        ex_projInfo = obj[i]['expPro'];
        fre_projInfo = obj[i]['frepro'];

        //
        for (var j = 0; j < candbasic.length; j++) {


          c_img = candbasic[j].b_pic;
          c_nm = candbasic[j].cl_n;
          c_em = candbasic[j].cl_em;
          canId = candbasic[j].cl_id;
          c_phn = candbasic[j].cl_phn;
          can_type = candbasic[j].e_cn_type;
          c_loc = candbasic[j].b_loc;
          c_dob = candbasic[j].b_dob;
          c_gen =candbasic[j].b_gen;
          c_mstatus = candbasic[j].b_mstatus;
          p ={img:c_img,name:c_nm,mail:c_em,cid:canId,phone:c_phn,canType:can_type,location:c_loc,dob:c_dob,gen:c_gen,mstatus:c_mstatus}
          // console.log(c_gen)
        //  opupdata.push(c_img)
        // popupdata.push(c_nm);
        // popupdata.push(c_em);
        // popupdata.push(canId);
        // popupdata.push(c_phn);
        // popupdata.push(can_type);
        // popupdata.push(c_loc);
        // popupdata.push(c_dob);
        // popupdata.push(c_gen);
        // popupdata.push(p);

          for (var k = 0; k < eduInfo.length; k++) {
            q_board = eduInfo[k].q_cs;
            q_inst = eduInfo[k].q_inst;
            q_spc = eduInfo[k].q_spz;
            q_year = eduInfo[k].q_yr;
            if(canId == eduInfo[k].q_uid){
              // console.log(q_inst);
              $.extend(p, { board:q_board,institute:q_inst,spc:q_spc,year:q_year});
              // p ={board:q_board,institute:q_inst,spc:q_spc,year:q_year}

            }

          }

          if(can_type =='fre'){

          for (var l = 0; l < fre_projInfo.length; l++) {

            f_prnm = fre_projInfo[l].fs_proj_nm;
            f_prdsc = fre_projInfo[l].fs_proj_desc;
            f_wnm = fre_projInfo[l].fs_w_nm;
            f_wdsc = fre_projInfo[l].fs_w_desc;
            f_prst = fre_projInfo[l].fs_part;
            f_uid = fre_projInfo[l].fs_uid;

            $.extend(p, { prnm:f_prnm,prdsc:f_prdsc,wnm:f_wnm,prst:f_prst,uid:f_uid});

              // console.log(f_prnm);
            }
          }

            else{
              for (var m = 0; m < ex_projInfo.length; m++) {
                p_client =  ex_projInfo[m].pj_client;
                p_domain = ex_projInfo[m].pj_domaim;
                p_duration = ex_projInfo[m].pj_duration;
                p_nm = ex_projInfo[m].pj_nm;
                p_id = ex_projInfo[m].pj_id;
                p_uid = ex_projInfo[m].pj_uid;
                // console.log(p_domain)
                $.extend(p, { client:p_client,domain:p_domain,duration:p_duration,pnm:p_nm,pid:p_id,puid:p_uid});


              }
            }


          // markup +='<div class="row post-content box" id="overlay_popup">'+
          //   '<div class="col-md-12" style="margin:10px">'+
          //     '<img src="img/img12.jpg" class="profile-photo-md pull-left"/>'+
          //   '</div>'+
          //   '<div class="col-md-12">'+
          //     '<div class="col-md-6">'+
          //       '<div class="post-text"><b>Name:&nbsp;&nbsp;&nbsp;</b>'+
          //         '<span>'+c_nm+'</span>'+
          //       '</div>'+
          //       '<div class="post-text"><b>Email:&nbsp;&nbsp;&nbsp;</b>'+
          //         '<span>'+c_em+'</span>'+
          //       '</div>'+
          //       '<div class="post-text"><b>Phone No:&nbsp;&nbsp;&nbsp;</b>'+
          //         '<span>'+c_phn+'</span>'+
          //       '</div>'+
          //     '</div>'+
          //     '<div class="col-md-6">'+
          //       '<div class="post-text"><b>Name:&nbsp;&nbsp;&nbsp;</b>'+
          //         '<span>swaroopa</span>'+
          //       '</div>'+
          //       '<div class="post-text"><b>Name:&nbsp;&nbsp;&nbsp;</b>'+
          //         '<span>swaroopa</span>'+
          //       '</div>'+
          //       '<div class="post-text"><b>Name:&nbsp;&nbsp;&nbsp;</b>'+
          //         '<span>swaroopa</span>'+
          //       '</div>'+
          //       '<div class="post-text"><b>Name:&nbsp;&nbsp;&nbsp;</b>'+
          //         '<span>swaroopa</span>'+
          //       '</div>'+
          //     '</div>'+
          //   '</div>'+
          // '</div>'+
          popupdata.push(p);
          // console.log(popupdata)
          var d = popupdata

        }
        console.log(d)
//

for (var i = 0; i < popupdata.length; i++) {
  //console.log(popupdata[i].name)
  data1 += popupdata[i].name;
  //console.log(data1)
  // alert(popupdata[i].name)

}
      }
//       function popupview(data){
//       var data =[
//         for (var i = 0; i < popupdata.length; i++) {
//           //console.log(popupdata[i].name)
//           data1 += popupdata[i].name;
//           //console.log(data1)
//           // alert(popupdata[i].name)
//           {
//             username: popupdata[i].name ;
//           },
//
//         }
//       ]
// }

      // popupview(obj);
      $('.viewClass').magnificPopup({
        key: 'my-popup',
        items: data,
        type: 'inline',
        inline: {

          // Define markup. Class names should match key names.
          markup: '<div class="white-popup"><div class="mfp-close"><div class="username"></div></div>'




        },
        gallery: {
          enabled: false
        },
        callbacks: {
          markupParse: function(template, values, item) {

            // optionally apply your own logic - modify "template" element based on data in "values"
            // console.log('Parsing:', template, values, item);
          }
        }

      });
    }
  })

}
// function popupview(data){
//   console.log("pop")
  // var data = [
    // {
    //   username: "Brad Frost", // Key "username" means that Magnific Popup will look for an element with class "mfp-username" in markup and will replace its inner HTML with the value.
    //
    //   userWebsite_href: 'http://www.bradfrostweb.com', // Key "userWebsite_href" means that Magnific Popup will look for an element with class "mfp-userWebsite" and will change its "href" attribute. Instead of ending "href" you may put any other attribute.
    //
    //   userAvatarUrl_img: 'https://si0.twimg.com/profile_images/1561258552/brad_frost_bigger.png', // Prefix "_img" is special. With it Magnific Popup finds an  element "userAvatarUrl" and replaces it completely with image tag.
    //
    //   userLocation: 'Pittsburgh, PA'
    // },
  //
  //   {
  //     username: "Paul Irish",
  //     userWebsite_href: 'http://paulirish.com',
  //     userAvatarUrl_img: 'https://si0.twimg.com/profile_images/2910976341/7d972c32f3882f715ff84a67685e6acf_bigger.jpeg',
  //     userLocation: 'San Francisco'
  //
  //   },
  //
  //   {
  //     username: "Chris Coyier",
  //     userWebsite_href: 'https://css-tricks.com',
  //     userAvatarUrl_img: 'https://si0.twimg.com/profile_images/1668225011/Gravatar2_bigger.png',
  //     userLocation: 'Palo Alto, California'
  //   }
  // ];
  // console.log(data);
    // alert(canId)
    // var id = canId;
    // var jobid = jobId;
//     $('.viewClass').magnificPopup({
//       key: 'my-popup',
//       items: data,
//       type: 'inline',
//       inline: {
//         // Define markup. Class names should match key names.
//         markup: '<div class="white-popup"><div class="mfp-close"></div>'+
//                   '<a class="mfp-userWebsite">'+
//                     '<div class="mfp-userAvatarUrl"></div>'+
//                     '<h2 class="mfp-username"></h2>'+
//                   '</a>'+
//                   '<div class="mfp-userLocation"></div>'+
//                 '</div>'
//       },
//       gallery: {
//         enabled: true
//       },
//       callbacks: {
//         markupParse: function(template, values, item) {
//
//           // optionally apply your own logic - modify "template" element based on data in "values"
//           // console.log('Parsing:', template, values, item);
//         }
//       }
//     });
// // }
