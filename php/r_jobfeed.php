<?php
require_once('dbconfig.php');
session_start();
if (isset($_POST['id']) && isset($_POST['name'])) {
 $r_id = $_POST['id'];
 $r_name = $_POST['name'];
}
else{
$r_id=$_SESSION['rec_id'];
  // $r_id ='6';
}
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
$sql = "SELECT * FROM r_jobpost inner join r_reginfo on r_reginfo.r_id=r_jobpost.r_id where r_reginfo.r_id='$r_id'";
$result = $connect->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $data[]=array("titile"=> $row['j_title'],"Desc"=>$row['j_desc'],"sal"=>$row['j_salary'],"exp"=>$row['j_exp'],"comp_name"=>$row['r_compname']);
        // $jobfeed = '
        ?>
        <!-- <div class="box"> -->

              <div class="post-content box" id="news_feed">
                  <div class="post-container" style="padding-bottom:0px;">
                      <img src="http://placehold.it/300x300" alt="user" class="profile-photo-md pull-left" />
                      <div class="post-detail">
                          <div class="user-info">
                              <h5><a href="#" class="profile-link" id="j_title"><?php echo $row['j_title']?> with <?php echo $row['j_exp'];?> Experience</a> </h5>
                              <p class="text-muted"><a href="#"> <?php echo $row['r_compname'];?> </a>  Published a photo about 3 mins ago</p>
                          </div>
                          <div class="reaction">
                            <a href="javascript:void(0)" class="btn text-green pop r_jView" name="<?php echo $r_id;?>" id="<?php echo $row['j_id'];?>" style="color:#27aae1"><i class="fa fa-eye"></i> View</a>

                              <!-- <a href="overlay.html" class="btn text-green pop" style="color:#27aae1"><i class="fa fa-eye"></i> View</a>
                              <a class="btn" style="color:#27aae1"><i class="fa fa-check"></i> Apply</a> -->
                          </div>
                      </div>
                      <div class="line-divider"></div>
                      <div class="post-text">
                          <p style="text-align:justify"><?php echo $row['j_desc'];?> <i class="em em-anguished"></i> <i class="em em-anguished"></i> <i class="em em-anguished"></i></p>
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
                              <span><?php echo $row['j_salary'];?> P.A</span>
                          </div>
                      </div>
                  </div>
              </div>
          <!-- </div> -->
          <br />
          <br />

<?php
}
} else {
    echo "0 results";
}
?>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
<!--
<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script> -->
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>

<script src="../js/jquery.magnific-popup.min.js"></script>
<script src="../js/jquery.sticky-kit.min.js"></script>
<script src="../js/jquery.scrollbar.min.js"></script>
<script src="../js/script.js"></script>
<script src="../js/c_jobView.js"></script>
<script type="text/javascript">

// }
</script>
<!-- <script src="../js/c_jobView.js"></script> -->
<!-- insert resume -->
<!-- <script src="../js/jobfeed.js"></script> -->
</html>
