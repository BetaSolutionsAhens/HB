<?php
require_once('dbconfig.php');
session_start();

// LOGIN SELECT
$r_id=$_SESSION['rec_id'];

$data = $_POST["details"];
  if(isset($_POST["details"])){
    $data = $_POST["details"];
    $title=$data["job_title"];
    $content=$data["job_des"];
    $exp=$data["job_exp"];
    $sal=$data["job_sal"];
    $skill=$data["job_skill"];
    $prefskill=$data["pskill"];
    $loc=$data["job_loc"];
    $role=$data["job_role"];
    $con=$data["job_con"];
    $date =
    $sql = "INSERT INTO r_jobpost (`j_title`, `j_desc`, `j_exp`, `j_salary`, `r_id`,`j_location`,`j_role`,`j_condition`)VALUES ('".$title."','".$content."','".$exp."','".$sal."','$r_id','".$loc."','".$role."','".$con."');";
    // $sql;
    if ($connect->query($sql) === TRUE) {
        echo "success";
        $sel=mysqli_query($connect,"select * from r_jobpost order by j_id desc");
        $fet_sel=mysqli_fetch_assoc($sel);
    foreach ($skill as $sk) {
      $skl=$sk;
      $ins=mysqli_query($connect,"insert into rec_skills(`rskill_name`,`rec_id`,`jpost_id`) values('$skl','$r_id','$fet_sel[j_id]')");
    }
    foreach ($prefskill as $psk) {
      $pskl=$psk;
      $ins2=mysqli_query($connect,"insert into pref_skills(`pref_sname`,`pref_rid`,`pref_post_id`) values('$pskl','$r_id','$fet_sel[j_id]')");
    }
    } else {
        echo "Error: " . $sql . "<br>" . $connect->error;
    }

  }

?>
