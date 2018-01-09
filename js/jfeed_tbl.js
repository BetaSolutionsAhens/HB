var tblDiv;
var posts;
var skill_nm;
var skills;
var gskillArray = [];
$(document).ready(function(){
  $.ajaxSetup({cache: false});

$.ajax({
      type:"POST",
      url:"php/jfeed_tbl.php",
      data:{rec_id:rid,job_id:jid},
      cache:false,
      success:function(tab_det){
        // console.log(tab_det)
        var dt=JSON.parse(tab_det)
        console.log(dt)
        for(var i=0;i<dt.length;i++){
          skills=dt[i]['skills'];
          posts=dt[i]['posts'];

          // console.log(posts.j_title)
          // console.log(skills.pref_sname)

          for(var j=0;j<posts.length;j++){
          //   console.log(posts[j])
          if(!skills){
            tblDiv='<div align="left" style="line-height:16px;margin-bottom:10px;padding-bottom:10px;">'+
                            '<h4>Job Posting id #'+rid+''+jid+'</h4>'+
                          // <!--   <span style="font-weight:bold">Preferred Skills :</span><span> Html,css,php</span><br />
                            // <span style="font-weight:bold">Mandatory Skills :</span><span> Html,css,php</span><br /> -->
                            '<table class="table table-responsive table-bordered">'+
                             ' <tbody>'+
                                '<tr>'+
                                  '<td style="font-weight:bold;width:20%" >Job Post Title</td>'+
                                '<td>'+posts[j].j_title+'</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<td style="font-weight:bold;width:20%" >Preferred Skills</td>'+
                                '<td>skills not defined</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<td style="font-weight:bold;width:20%" >Condition</td>'+
                                '<td>Night Shift</td>'+
                                '</tr>'+
                              '</tbody>'+
                            '</table>'+

                          '</div>';
          }
          else{
            for(var k=0;k<skills.length;k++){
            // console.log(skills[k].pref_sname)
            skill_nm=skills[k].pref_sname;
            gskillArray.push(skill_nm.charAt(0).toUpperCase() + skill_nm.slice(1))
          }
          console.log(gskillArray)
          tblDiv='<div align="left" style="line-height:16px;margin-bottom:10px;padding-bottom:10px;">'+
                            '<h4>Job Posting id #'+rid+''+jid+'</h4>'+
                          // <!--   <span style="font-weight:bold">Preferred Skills :</span><span> Html,css,php</span><br />
                            // <span style="font-weight:bold">Mandatory Skills :</span><span> Html,css,php</span><br /> -->
                            '<table class="table table-responsive table-bordered">'+
                             ' <tbody>'+
                                '<tr>'+
                                  '<td style="font-weight:bold;width:20%" >Job Post Title</td>'+
                                '<td>'+posts[j].j_title+'</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<td style="font-weight:bold;width:20%" >Preferred Skills</td>'+
                                '<td>'+gskillArray.join(',')+'</td>'+
                                '</tr>'+
                                '<tr>'+
                                  '<td style="font-weight:bold;width:20%" >Condition</td>'+
                                '<td>Night Shift</td>'+
                                '</tr>'+
                              '</tbody>'+
                            '</table>'+

                          '</div>';
                        }
                      }
        }
        // console.log(tblDiv)
        $(".jfeed_tbl").append(tblDiv)
      }
    })
})
