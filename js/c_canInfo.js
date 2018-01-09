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
var c_name;
var c_unm;
var c_email;
var c_phone;
var c_dob;
var c_gen;
var c_loc;
var c_pic;
var candbasic;
var eduInfo;
// var freInfo;
var ex_projInfo;
var fre_projInfo;
var board;
var standard;
var specialization;
var edu_type;
var marks;
var passoutYear;
var institute;
var tableTd;
var SNo = 1;
var FSNo=1;
var ESNo=1;
var q_uid;
var sn;
var fsn;
var esn;
var mainTable;
var candidate_type;
var f_project;
var f_pj_desc;
var workshop;
var workshop_desc;
var presentation;
var fre_det;
var fre_det_main;
var project_name;
var domain;
var client;
var role;
var duration;
var close_btn_id;
var tb_id;
var fresher_id;
var fre_proj;
var ex_id;
var ex_proj;

$(document).ready(function(){
  $.ajaxSetup({cache: false});
  $.ajax({
    url:'php/c_candInfo.php',
    type:'GET',
    cache:false,
    success:function(data){
      // console.log(data);
      obj = JSON.parse(data);
      console.log(obj);
      for (var i = 0; i < obj.length; i++) {
                // console.log(obj[i]['gskills'])
                 cand = obj[i]['basic'];
            eduInfo = obj[i]['edu'];
            ex_projInfo = obj[i]['expPro'];
            fre_projInfo = obj[i]['frepro'];
            // console.log(ex_projInfo);
            // console.log(fre_projInfo);
                for (var i = 0; i < cand.length; i++) {
                  candidate_type=cand[i].e_cn_type;
                    // console.log(cand[i].cl_un)
                    // console.log(cand[i].e_cn_type)
                    for(var j=0;j<eduInfo.length;j++){
                      // console.log(SNo++)
                      sn=SNo++;
                      // console.log(sn);
                    //  console.log(eduInfo[j].q_cs)
                    // console.log(eduInfo[j].q_spz)
                    board=eduInfo[j].q_qual;
                    standard=eduInfo[j].q_cs;
                    specialization=eduInfo[j].q_spz;
                    edu_type=eduInfo[j].q_ctype;
                    marks=eduInfo[j].q_mks;
                    passoutYear=eduInfo[j].q_yr;
                    institute=eduInfo[j].q_inst;
                    q_uid=eduInfo[j].q_id;
                    // tb_id=eduInfo[j].q
                    // console.log(institute);
                    tableTd+='<tr id="tr'+j+'">'+
                        '<td contenteditable="true">'+sn+'</td>'+
                          '<td id="c_board'+j+'" contenteditable="true">'+board+'</td>'+
                          '<td id="c_standard'+j+'" contenteditable="true">'+standard+'('+specialization+')</td>'+
                          // '<td></td>'+
                          // '<td>"'+edu_type+'"</td>'+
                          '<td id="c_institute'+j+'" contenteditable="true">'+institute+'</td>'+
                          '<td id="c_mks'+j+'" contenteditable="true" >'+marks+'</td>'+
                          '<td id="c_year'+j+'" contenteditable="true">'+passoutYear+'</td>'+
                          '<td id="c_id" style="visibility:hidden">'+q_uid+'</td>'+
           //                '<td>'+
               //    '<span id="'+q_uid+'" class="table-remove glyphicon glyphicon-remove"></span>'+
                // '</td>'+
                          '</tr>';
                          // '<td>New York</td>'+
                          // '<td>USA</td>';
                    }
                    mainTable='<div class="table-responsive table-editable" id="table">'+
                    '<span id="cqualification" class="table-add glyphicon glyphicon-plus"></span>'+
                    '<table class="table">'+
                      '<thead>'+
                        '<tr class="edu_tb">'+
                          '<th>SNo</th>'+
                          '<th>Board</th>'+
                          '<th>Qualification</th>'+
                          '<th>Institute</th>'+
                          '<th>Marks</th>'+
                          '<th>Year Of Passing</th>'+
                          '<th style="visibility:hidden">uid</th>'+
                        '</tr>'+
                      '</thead>'+
                      '<tbody>'+
                        tableTd+
                        '<tr id="cqualification1" class="hide">'+
                        '<td contenteditable="true" placeholder="S.No"></td>'+
                        '<td contenteditable="true">Board</td>'+
                        '<td contenteditable="true">Qualification</td>'+
                        '<td contenteditable="true">Institute</td>'+
                        '<td contenteditable="true">Marks</td>'+
                        '<td contenteditable="true">Year Of Passing</td>'+
                        // '<td><span class="table-remove glyphicon glyphicon-remove"></span></td>'+
                        '</tr>'+
                      '</tbody>'+
                    '</table><br><br>'+
                    '<button id="qual_update" class="btn btn-primary">Update Qualification</button>'+
                  '</div><br><br>';
                  // console.log(mainTable);
                  // projrct details
                  if(candidate_type=="fre"){
                  for(var f=0;f<fre_projInfo.length;f++){
                    fsn=FSNo++;
                    f_project=fre_projInfo[f].fs_proj_nm;
                    f_pj_desc=fre_projInfo[f].fs_proj_desc;
                    workshop=fre_projInfo[f].fs_w_nm;
                    workshop_desc=fre_projInfo[f].fs_w_desc;
                    presentation=fre_projInfo[f].fs_part;
                    fresher_id=fre_projInfo[f].fs_id;
                    fre_det+='<tr>'+
                          '<td contenteditable="true">'+fsn+'</td>'+
                          '<td contenteditable="true">'+f_project+'</td>'+
                          '<td contenteditable="true">'+f_pj_desc+'</td>'+
                          '<td contenteditable="true">'+workshop+'</td>'+
                          '<td contenteditable="true">'+workshop_desc+'</td>'+
                          '<td contenteditable="true">'+presentation+'</td>'+
                          '<td style="visibility:hidden;">'+fresher_id+'</td>'+
                        '</tr>';
                  }
                  fre_det_main='<div id="tbl_fre" class="table-responsive">'+
                  '<span id="fresher" class="table-add glyphicon glyphicon-plus"></span>'+
                    '<table class="table">'+
                      '<thead>'+
                        '<tr>'+
                          '<th>SNo</th>'+
                          '<th>Project Name</th>'+
                          '<th>Project Description</th>'+
                          '<th>Workshop Name</th>'+
                          '<th>Workshop Description</th>'+
                          '<th>Presentation</th>'+
                          '<th style="visibility:hidden">fuid</th>'+
                        '</tr>'+
                      '</thead>'+
                      '<tbody>'+
                        fre_det+
                        '<tr id="fresher1" class="hide">'+
                        '<td contenteditable="true">SNo</td>'+
                        '<td contenteditable="true">Project Name</td>'+
                        '<td contenteditable="true">Project Description</td>'+
                        '<td contenteditable="true">Workshop Name</td>'+
                        '<td contenteditable="true">Workshop Description</td>'+
                        '<td contenteditable="true">Presentation</td>'+
                        // '<td><span class="table-remove glyphicon glyphicon-remove"></span></td>'+
                        '</tr>'+
                      '</tbody>'+
                    '</table><br>'+
                    '<button id="update_fre" class="btn btn-primary">Update Qualification</button><br><br>'+
                  '</div><br><br>';
                  // console.log(fre_det_main)
                  }
                  else{
                    for(var e=0;e<ex_projInfo.length;e++){
                      esn=ESNo++;
                      project_name=ex_projInfo[e].pj_nm;
                      domain=ex_projInfo[e].pj_domaim;
                      client=ex_projInfo[e].pj_client;
                      role=ex_projInfo[e].pj_role;
                      duration=ex_projInfo[e].pj_duration;
                      ex_id=ex_projInfo[e].pj_id;
                      fre_det+='<tr>'+
                          '<td contenteditable="true">'+esn+'</td>'+
                          '<td  contenteditable="true">'+project_name+'</td>'+
                          '<td contenteditable="true">'+domain+'</td>'+
                          '<td contenteditable="true">'+client+'</td>'+
                          '<td contenteditable="true">'+role+'</td>'+
                          '<td contenteditable="true">'+duration+'</td>'+
                          '<td style="visibility:hidden">'+ex_id+'</td>'+
                        '</tr>';
                    }
                    fre_det_main='<div id="tbl_exp" class="table-responsive">'+
                    '<span id="experience" class="table-add glyphicon glyphicon-plus"></span>'+
                    '<table class="table">'+
                      '<thead>'+
                        '<tr>'+
                          '<th>SNo</th>'+
                          '<th>Project Name</th>'+
                          '<th>Domain</th>'+
                          '<th>Client Name</th>'+
                          '<th>Your Role</th>'+
                          '<th>Project Duration</th>'+
                          '<th style="visibility:hidden">exid</th>'+
                        '</tr>'+
                      '</thead>'+
                      '<tbody>'+
                        fre_det+
                        '<tr id="experience1" class="hide">'+
                        '<td contenteditable="true">SNo</td>'+
                        '<td contenteditable="true">Project Name</td>'+
                        '<td contenteditable="true">Domain</td>'+
                        '<td contenteditable="true">Client Name</td>'+
                        '<td contenteditable="true">Your Role</td>'+
                        '<td contenteditable="true">Project Duration</td>'+
                      '</tbody>'+
                    '</table><br>'+
                    '<button id="update_exp" class="btn btn-primary">Update Qualification</button><br>'+
                  '</div><br><br>';
                  }
                    var cantype = cand[i].e_cn_type;
                    c_name  = cand[i].cl_n;
                    c_unm = cand[i].cl_un;
                    c_email = cand[i].cl_em;
                    c_phn = cand[i].cl_phn;
                    c_dob = cand[i].b_dob;
                    c_gen = cand[i].b_gen;
                    c_loc = cand[i].b_loc;
                    c_pic = cand[i].b_pic;

                }


        var d = new Date(c_dob);
    var month = d.getMonth()+1;
    console.log(month)
    var date = d.getDate();
    var year = d.getFullYear();
    var dobCan = year +'-'+ month +'-'+ date;

    $("#mypic").attr('src',"img/"+c_pic+"" );

    var $radios = $('input:radio[name=gender]');
    if(c_gen == 'male') {
        $radios.filter('[value=Male]').prop('checked', true);
    }else{
        $radios.filter('[value=Female]').prop('checked', true);

    }
    if(cantype == 'fre'){
      $("#desg").html("");
    }
    // console.log(dobCan)
        $("#dob").val(dobCan)
        $("#name").val(c_name);
                $("#email").val(c_email);
                $("#phone").val(c_phn);
                $("#city").val(c_loc);
                $("#uname").html(c_unm)



    //             $(" option").filter(function() {
        //     //may want to use $.trim in here
        //     return $(this).text() == text1;
        // }).prop('selected', true);

            }
            $("#education_det").append(mainTable);
            $("#work_exp").append(fre_det_main);




            // NEW ROW QUALIFICATION

  var $TABLE = $('#table');
var $BTN = $('#qual_update');


            $('#cqualification').click(function () {
  var $clone = $TABLE.find('tr#cqualification1').clone(true).removeClass('hide table-line').removeAttr('id');
  $TABLE.find('table').append($clone);
});


jQuery.fn.shift = [].shift;
console.log(jQuery.fn.shift = [].shift)


$BTN.click(function () {
  var $rows = $TABLE.find('tr:not(:hidden)');
  var headers = [];
  var data = [];

  // Get the headers (add special header logic here)
  $($rows.shift()).find('th:not(:empty)').each(function () {
    headers.push($(this).text().toLowerCase());
  });

  // Turn all existing rows into a loopable array
  $rows.each(function () {
    var $td = $(this).find('td');
    var h = {};

    // Use the headers from earlier to name our hash keys
    headers.forEach(function (header, i) {
      h[header] = $td.eq(i).text();
    });

    data.push(h);
  });

  // Output the result
  // $EXPORT.text(JSON.stringify(data));
  // console.log(JSON.stringify(data))
  var c_data=data;
  console.log(c_data);

  $.ajax({
    url:"php/c_qual_update.php",
    type:"POST",
    data:{cdetail:c_data},
    success:function(upd){
      console.log(upd);
       // $("#education_det").load();
       // $("#education_det").refresh();
       // $('#education_det').load('edit-profile-work-edu.html');
    }
  })
});


            // NEW ROW FRESHER


            var $TABLEFRE = $('#tbl_fre');
var $BTNFRE = $('#update_fre');
// var $EXPORT = $('#export');

$('#fresher').click(function () {
  var $clone = $TABLEFRE.find('tr#fresher1').clone(true).removeClass('hide table-line').removeAttr('id');
  $TABLEFRE.find('table').append($clone);
});

// $('.table-remove').click(function () {
//   $(this).parents('tr').detach();
// });

jQuery.fn.shift = [].shift;
console.log(jQuery.fn.shift = [].shift)


$BTNFRE.click(function () {
  var $rows = $TABLEFRE.find('tr:not(:hidden)');
  var headers = [];
  var data = [];

  // Get the headers (add special header logic here)
  $($rows.shift()).find('th:not(:empty)').each(function () {
    headers.push($(this).text().toLowerCase());
  });

  // Turn all existing rows into a loopable array
  $rows.each(function () {
    var $td = $(this).find('td');
    var h = {};

    // Use the headers from earlier to name our hash keys
    headers.forEach(function (header, i) {
      h[header] = $td.eq(i).text();
    });

    data.push(h);
  });

  // Output the result
  // $EXPORT.text(JSON.stringify(data));
  console.log(data);
    fre_proj=data;
    // console.log(fre_proj)
    $.ajax({
      type:"POST",
      url:"php/c_fre_update.php",
      data:{fre:fre_proj},
      cache:false,
      success:function(freshdet){
        console.log(freshdet);
      }
    })
});





// UPDATE EXPERIENCE


var $TABEXP = $('#tbl_exp');
var $BTNEXP = $('#update_exp');
// var $EXPORT = $('#export');

$('#experience').click(function () {
  var $clone = $TABEXP.find('tr#experience1').clone(true).removeClass('hide table-line').removeAttr('id');
  $TABEXP.find('table').append($clone);
});

jQuery.fn.shift = [].shift;
console.log(jQuery.fn.shift = [].shift)


$BTNEXP.click(function () {
  var $rows = $TABEXP.find('tr:not(:hidden)');
  var headers = [];
  var data = [];

  // Get the headers (add special header logic here)
  $($rows.shift()).find('th:not(:empty)').each(function () {
    headers.push($(this).text().toLowerCase());
  });

  // Turn all existing rows into a loopable array
  $rows.each(function () {
    var $td = $(this).find('td');
    var h = {};

    // Use the headers from earlier to name our hash keys
    headers.forEach(function (header, i) {
      h[header] = $td.eq(i).text();
    });

    data.push(h);
  });

  // Output the result
  // $EXPORT.text(JSON.stringify(data));
  console.log(data);
  var exp_det=data;
  $.ajax({
      type:"POST",
      url:"php/c_fre_update.php",
      data:{exp:exp_det},
      cache:false,
      success:function(expdet){
        console.log(expdet);
      }
    })
});

    }
  })
})


$(document).ready(function(){
  $.ajaxSetup({cache: false});

  $("#can_update").click(function(){
    var name=$("#name").val();
    var email=$("#email").val();
    var phone=$("#phone").val();
    var date=$("#date").val();
    var city=$("#city").val();
    var button=$("#can_update").val();
    // var name=$("#name").val();
    var gender= $('input[type="radio"]:checked').val();
    // console.log(gender)
    $.ajax({
      type:"POST",
      url:"php/profile_updation.php",
      data:{phone:phone,email:email,name:name,date:date,city:city,gender:gender,fbtn:button},
      cache:false,
      success:function(det){
        console.log(det)
      }
    })
  })
})
