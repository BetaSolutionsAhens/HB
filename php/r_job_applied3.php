<!DOCTYPE html>
<html>
<head>
  <title></title>


</head>
<body class="mfp-zoom-out-cur">
<?php

require_once('dbconfig.php');
session_start();
$rec_id=$_SESSION['rec_id'];
$sel=mysqli_query($connect,"select * from resume_status inner join r_jobpost on resume_status.cv_jb_id=r_jobpost.j_id inner join c_log on c_log.cl_id=resume_status.cv_can_id inner join basic_info on basic_info.b_uid=resume_status.cv_can_id inner join edu_qf on edu_qf.e_uid=resume_status.cv_can_id inner join qualification on qualification.q_uid=resume_status.cv_can_id where r_jobpost.r_id='$rec_id'");
// $canDetails=array();
while ($sel2=mysqli_fetch_assoc($sel)){ 
?>

<div id="collapseOne" class="panel-collapse collapse in">
          <div class="panel-body">
          <div class="post-content box" id="news_feed">
                  <div class="post-container" style="padding-bottom:0px;">
                      <img src="img/<?php echo $sel2['b_pic'];?>" alt="user" class="profile-photo-md pull-left" />
                      <div class="post-detail">
                          <div class="user-info">
                              <h5><a href="#" class="profile-link" id="applicant_name"><?php echo $sel2['cl_un'];?></a> </h5>
                              <p class="text-muted"><a href="#" class="coName" id=""></a>  Published a photo about 3 mins ago</p>
                          </div>
                          
                         <div class="reaction">
                              <!--  <a class="pop">View </a> -->

                              <div class="popup-gallery">
                              <a href="#" class="btn text-green pop" name="<?php echo $sel2['cv_can_id'];?>" id="<?php echo $rec_id;?>" onclick="" style="color:#27aae1"><i class="fa fa-eye"></i> View</a>
                              </div>
                              <a href="http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_b.jpg" title="The Cleaner"><img src="http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_s.jpg" width="75" height="75"></a>
        <a href="http://farm9.staticflickr.com/8382/8558295631_0f56c1284f_b.jpg" title="Winter Dance"><img src="http://farm9.staticflickr.com/8382/8558295631_0f56c1284f_s.jpg" width="75" height="75"></a>
        <a href="http://farm9.staticflickr.com/8225/8558295635_b1c5ce2794_b.jpg" title="The Uninvited Guest"><img src="http://farm9.staticflickr.com/8225/8558295635_b1c5ce2794_s.jpg" width="75" height="75"></a>
        <a href="http://farm9.staticflickr.com/8383/8563475581_df05e9906d_b.jpg" title="Oh no, not again!"><img src="http://farm9.staticflickr.com/8383/8563475581_df05e9906d_s.jpg" width="75" height="75"></a>
        <a href="http://farm9.staticflickr.com/8235/8559402846_8b7f82e05d_b.jpg" title="Swan Lake"><img src="http://farm9.staticflickr.com/8235/8559402846_8b7f82e05d_s.jpg" width="75" height="75"></a>
        <a href="http://farm9.staticflickr.com/8235/8558295467_e89e95e05a_b.jpg" title="The Shake"><img src="http://farm9.staticflickr.com/8235/8558295467_e89e95e05a_s.jpg" width="75" height="75"></a>
        <a href="http://farm9.staticflickr.com/8378/8559402848_9fcd90d20b_b.jpg" title="Who's that, mommy?"><img src="http://farm9.staticflickr.com/8378/8559402848_9fcd90d20b_s.jpg" width="75" height="75"></a>
                              </div>
                              <a href="#" class="btn  text-green pop" name="<?php echo $sel2['cv_jb_id'];?>" id="<?php echo $sel2['cv_can_id'];?>" style="color:#27aae1" onclick="shortlistJob($(this).attr('id'),$(this).attr('name'))" ><i class="fa fa-check"></i> Shortlist</a>
                          </div>
                      </div>

                      <div class="line-divider"></div>
                      <div class="post-text"><b>Key Skills:</b>
                      <?php
                      $sk_sel=mysqli_query($connect,"select * from g_skill inner join proj_skill on g_sk_id=proj_sk_id where `proj_sk_uid`='$sel2[cv_can_id]' or `g_sk_uid`='$sel2[cv_can_id]' ");
                      while($sk_sel2=mysqli_fetch_assoc($sk_sel)){

                      if($sk_sel2['proj_sk_nm']!=""){
                        ?>
                      <span><?php echo $sk_sel2['proj_sk_nm'].","?></span>
                      <?php
                      }
                      else{
                        ?>
                      <span><?php echo $sk_sel2['g_sk_nm'].","?></span>
                      <?php
                      }
                      }
                      ?>
                          <p style="text-align:justify"><i class="em em-anguished"></i> <i class="em em-anguished"></i> <i class="em em-anguished"></i></p>
                      </div>
                      <div class="line-divider"></div>
                      <div class="row" style="text-align:center;color:grey;margin-bottom:10px">
                          <div class="col-md-4" style="border-right:1px solid #c0c0c0">
                              <span>+99 Views</span>
                          </div>
                          <div class="col-md-4" style="border-right:1px solid #c0c0c0">
                              <span>+99 Applied</span>
                          </div>
                          <div class="col-md-4">
                              <span> P.A</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>

        
<!-- <script src="../js/jobfeed.js"></script> -->
        <?php }?>
        </body>
       

        </html>

        <!-- <script src="../js/jquery-3.1.1.min.js"></script>
<script src="../js/bootstrap.min.js"></script>
<script src="../js/jquery.magnific-popup.min.js"></script>
<script src="../js/jquery.sticky-kit.min.js"></script>
<script src="../js/jquery.scrollbar.min.js"></script>
<script src="../js/script.js"></script>
<script src="../js/job_shortlist.js"></script> -->

<!-- <script src="../js/c_jobView.js"></script> -->
<!-- insert resume -->