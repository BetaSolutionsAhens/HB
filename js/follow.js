$(document).ready(function(){
  $.ajaxSetup({cache: false});

    var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
// rid = getUrlParameter("company_name");
// console.log(rid)
r_id = getUrlParameter("r_id");
  // console.log(jid)
$.ajax({

      url:"php/follow.php",
      type:"POST",
      data:{rid:r_id},
      cache:false,
      success:function(follow_data){
        // console.log(follow_data);
        var fobj=JSON.parse(follow_data);
        console.log(fobj);
        for(var i=0;i<fobj.length;i++){
          recDiv='<p><b>Name&nbsp:&nbsp</b><span>'+fobj[i]['rec'].r_fname+'</span> </p>'+
          '<p><b>Company Name&nbsp:&nbsp</b><span>'+fobj[i]['rec'].r_compname+'</span> </p>'+
          '<p><b>Industry Type&nbsp:&nbsp</b><span>'+fobj[i]['rec'].r_inds+'</span> </p>'+
          '<p><b>Designation&nbsp:&nbsp</b><span>'+fobj[i]['rec'].r_desgn+'</span> </p>'+
          '<p><b>Email&nbsp:&nbsp</b><span>'+fobj[i]['rec'].r_mail+'</span> </p>'+
          '<p><b>Mobile&nbsp:&nbsp</b><span>'+fobj[i]['rec'].r_mobile+'</span> </p>'+
          '<p><b>Pincode&nbsp:&nbsp</b><span>'+fobj[i]['rec'].r_pincode+'</span> </p>';

          recName='<p>'+fobj[i]['rec'].r_uname+'</p>';
          rbtn='<button class="btn-primary rfollow" name="'+fobj[i]['rec'].r_id+'">FOLLOW</button>';
        }
        $("#rec_details").append(recDiv);
        $("#rec_nm").append(recName)
        $("#follow_button").append(rbtn)
      }
    })
    })
