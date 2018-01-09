<?php
require_once('dbconfig.php');
session_start();
$rec_id=$_SESSION['cand_id'];
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="This is social network html5 template available in themeforest......" />
        <meta name="keywords" content="Social Network, Social Media, Make Friends, Newsfeed, Profile Page" />
        <meta name="robots" content="index, follow" />
        <title>Hawk Eye </title>
        <!-- Stylesheets
    ================================================= -->
        <link rel="stylesheet" href="../css/bootstrap.min.css" />
        <link rel="stylesheet" href="../css/style.css" />
        <link rel="stylesheet" href="../css/magnific-popup.css" />
        <link rel="stylesheet" href="../css/ionicons.min.css" />
        <link rel="stylesheet" href="../css/font-awesome.min.css" />
        <link rel="stylesheet" href="../css/custom.css" />
        <link href="../css/emoji.css" rel="stylesheet">
        <!--Google Font-->
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700,700i" rel="stylesheet">
        <!--Favicon-->
        <link rel="shortcut icon" type="image/png" href="../images/fav.png" />
    </head>
    <body>
      <!-- <input type="hidden" id="candidate_name_1" value="<?php //echo $can_sel['cl_n']?>"> -->
      <?php
$sql = "SELECT * FROM r_jobpost inner join r_reginfo on r_reginfo.r_id=r_jobpost.r_id";
$result = $connect->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $data[]=array("titile"=> $row['j_title'],"Desc"=>$row['j_desc'],"sal"=>$row['j_salary'],"exp"=>$row['j_exp'],"comp_name"=>$row['r_compname'],"j_id"=>$row['j_id']);

        // $jobfeed = '
        ?>
        <!-- <div class="box"> -->
              <div class="post-content box" id="news_feed" style="height:400px;">
                  <div class="post-container" style="padding-bottom:0px;">
                      <img src="http://www.isc.hbs.edu/Style%20Library/hbs/images/home/icons/large-circles/business-person-icon.png" alt="user" class="profile-photo-md pull-left">
                      <div class="post-detail">
                          <div class="user-info">
                              <h4  style="text-transfrom:capitalize;margin:0px"><a href="#" class="profile-link follow_rec" id="<?php echo $row['r_compname'];?>" name="<?php echo $row['r_id'];?>"><?php echo $row['r_compname'];?></a> </h4>
                              <p class="text-muted"> Published a photo about 3 mins ago</p>
                          </div>
                          <!-- <div class="reaction">
                              <!-  <a class="pop">View </a> ->

                              <a href="#" class="btn text-green pop" name="betasolutions" id="11" data-toggle="modal" onclick="viewJob($(this).attr('id'),$(this).attr('name'),$(this).attr('class'))" style="color:#27aae1"><i class="fa fa-eye"></i> View</a>
                                                               <a href="#" class="btn  text-green pop apply_btn" name="1" id="11" style="color:#27aae1"><i class="fa fa-check"></i> Applied</a>

                              <!- <a href="#" class="b÷tn  text-green pop apply_btn" name="1" id="11" style="color:#27aae1" onclick="applyJob($(this).attr('id'),$(this).attr('name'),$(this).attr('class'))"><i class="fa fa-check"></i> Apply</a> ->
                          </div> -->
                      </div>
                      <div class="line-divider"></div>
                      <div class="post-text" style="height:250px;">
                        <h5><a href="#" class="profile-link" id="j_title"><?php echo $row['j_title']?> with <?php echo $row['j_exp'];?> Experience</a> </h5>

                        <div class="container" style="height:150px;background:#f8f8f8;width:100%;line-height:20px;padding-top:5px;border-radius:8px;">
                          <p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Years of Exp &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span><?php echo $row['j_exp'];?> years</p>
                          <p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Job Role    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;    :&nbsp; </span>Developer</p>
                          <p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Mandatory Skills &nbsp;&nbsp;:&nbsp; </span><?php
                            $sl="select * from rec_skills where `rec_id` = '$row[r_id]' and `jpost_id` = '$row[j_id]'";

                            $rs = mysqli_query($connect,$sl);
                            while($rc_sk = mysqli_fetch_assoc($rs)){
                              $Array = array(ucwords($rc_sk['rskill_name']));
                              echo implode('<br>',$Array);
                            }
                            // echo $sl;
                           ?></p>
                          <p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Preferred Skills &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>Css,Html,Bootstrap,Php</p>
                          <p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Job Location &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>Visakhapatnam</p>
                          <p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Conditions &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span>Night Shift</p>
                          <p style="text-align:justify;margin-bottom:0px;"><span style="font-weight:bold">Package &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </span><?php echo $row['j_salary'];?> P.A</p>

                        </div>
                        <div class="container" style="width:100%">
                          <p style="text-align:justify;line-height:20px;"><span style="font-weight:bold">Job Description &nbsp;&nbsp;&nbsp;:&nbsp; </span><?php echo $row['j_desc'];?></p>

                        </div>
                      </div>
                      <div class="line-divider"></div>
                      <div class="row" style="text-align:center;color:grey;margin-bottom:10px">
                          <div class="col-md-4" style="border-right:1px solid #c0c0c0">
                              <button class="btn btn-primary">Share</button>
                          </div>
                          <div class="col-md-4" style="border-right:1px solid #c0c0c0">
                              <span><button class="btn btn-primary" name="<?php echo $row['r_compname'];?>" id="<?php echo $row['j_id'];?>" onclick="viewJob($(this).attr('id'),$(this).attr('name'),$(this).attr('class'))">View</button></span>
                          </div>
                          <?php
                              $btnQury = "SELECT * FROM resume_status where cv_jb_id ='$row[j_id]' and cv_can_id = '$rec_id'";
                              $res = $connect->query($btnQury);
                              $row1 = $res->fetch_assoc();
                              if($row1['jb_applied'] == '1'){
                                ?>
                          <div class="col-md-4">
                              <span><button class="btn btn-primary apply_btn"  name="<?php echo $rec_id;?>" id="<?php echo $row['j_id'];?>">Applied</button></span>
                          </div>
                          <?php
                              }
                              else{
                                ?>
                                 <div class="col-md-4">
                              <span><button class="btn btn-primary apply_btn"  name="<?php echo $rec_id;?>" id="<?php echo $row['j_id'];?>" onclick="applyJob($(this).attr('id'),$(this).attr('name'),$(this).attr('class'))">Apply</button></span>
                          </div>
                          <?php

                              }
                              ?>
                      </div>
                  </div>
              </div>

              
<?php
}
} else {
    echo "0 results";
}
?>
</body>


<script src="../js/jquery-3.1.1.min.js"></script>
<script src="../js/bootstrap.min.js"></script>
<script src="../js/jquery.magnific-popup.min.js"></script>
<script src="../js/jquery.sticky-kit.min.js"></script>
<script src="../js/jquery.scrollbar.min.js"></script>
<script src="../js/script.js"></script>
<!-- <script src="js/c_jobView.js"></script> -->

<!-- <script src="../js/c_jobView.js"></script> -->
<!-- insert resume -->
<!-- <script src="../js/jobfeed.js"></script> -->

<script type="text/javascript">


   // $(document).ready(function(){

   //  alert("gcf")
   //  $("a[class='apply_btn']").click(function(){
   //    alert("ghj")
   // console.log($(this).attr("id"));

   //  })
  // })
</script>
</html>
<!-- <?php
//$candidate_name=$_POST['']
?> -->
