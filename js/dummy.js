$(document).ready(function(){
  $.getJSON('php/newsfeed.php',function(data){
    alert(data)
    var title='';
    // var data = JSON.parse(data)
    console.log(data);
    var value= data
    for (var i = 0; i < data.length; i++) {
      // console.log(data[i].titile)
      // title =data[i].titile;:
      // var id+='  <h5><a href="#" class="profile-link"></a>'+data[i].titile+' </h5>'+

      // +'<p class="text-muted"><a href="#"> Beta Solutions </a>  Published a photo about 3 mins ago</p>'
      // $.each(data, function (key, value) {
                //  $("#myModalBody").append($("<p>").text(value.childId + ": " + value.value));
                 /* If you're re-using these variables you can uncomment these lines
                 childId = value.ChildNodeId;
                 deviceValue = value.DeviceValue;
                 count++;
                 */
                //  title += value.titile;
                 console.log(title);
                //  title +='<div class="box">'+
                //     +'<div class="post-content">'+
                //         +'<div class="post-container" style="padding-bottom:0px;">'+
                //         +'<img src="http://placehold.it/300x300" alt="user" class="profile-photo-md pull-left" />'+
                //         +'<div class="post-detail">'+
                //           +'  <div class="user-info" id="j_heading">'+
                //               +'  <h5><a href="#" class="profile-link" id="j_title"></a>'+value[i].titile+' with '+value[i].exp+' </h5>'+
                //                 +'<p class="text-muted"><a href="#"> '+value[i].comp_name+' </a>  Published a photo about 3 mins ago</p>'+
                //           +'  </div>'+
                //           +'  <div class="reaction">'+
                //               +'  <a href="overlay.html" class="btn text-green pop" style="color:#27aae1"><i class="fa fa-eye"></i> View</a>'+
                //               +'  <a class="btn" style="color:#27aae1"><i class="fa fa-check"></i> Apply</a>'+
                //         +'  </div>'+
                //       +'  </div>'+
                //         +'<div class="line-divider"></div>'+
                //       +'  <div class="post-text">'+
                //           +'  <p style="text-align:justify">'+value[i].Desc+''+
                //             +'<i class="em em-anguished"></i> <i class="em em-anguished"></i> <i class="em em-anguished"></i></p>'+
                //         +'</div>'+
                //       +'  <div class="line-divider"></div>'+
                //         +'<div class="row" style="text-align:center;color:grey;margin-bottom:10px">'+
                //           +'  <div class="col-md-4" style="border-right:1px solid #c0c0c0">'+
                //             +'    <span>+99 Views</span>'+
                //             +'</div>'+
                //             +'<div class="col-md-4" style="border-right:1px solid #c0c0c0">'+
                //               +'  <span>+99 Applied</span>'+
                //             +'</div>'+
                //             +'<div class="col-md-4">'+
                //               +'  <span>'+value[i].sal+' P.A</span>'+
                //             +'</div>'+
                //       +'  </div>'+
                //     +'  </div>'+
                //   +'  </div>'+
                // +'</div>';
                // +'</br>'+
                // +'</br>';
                // $("#jobfeed").append(title);

    //


    // title=  '<h5><a href="#" class="profile-link" id="j_title">'+data[i].titile+'</a> </h5>  <p class="text-muted"><a href="#"> '+data[i].comp_name+' </a>  Published a photo about 3 mins ago</p>';

    }



})
});
