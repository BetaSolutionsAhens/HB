<?php
require_once('dbconfig.php');
session_start();

// LOGIN SELECT
$sel_id=mysqli_query($connect,"select * from r_reginfo order by log_id desc");
$sel2=mysqli_fetch_array($sel_id);
$_SESSION['log_id']=$sel2['log_id'];
$us_id=$_SESSION['log_id'];
$data = $_POST["details"];
  if(isset($_POST["details"])){
    $data = $_POST["details"];
    $title=$data["job_title"];
    $content=$data["job_des"];
    $exp=$data["job_exp"];
    $sal=$data["job_sal"];
    $skill=$data["job_skill"]
    $sql = "INSERT INTO r_jobpost (``, ``, ``, ``, ``, ``)VALUES ('".$title."','".$content."','".$exp."','".$sal."','".$mail."','".$amail."');";
    // $sql;
    if ($connect->query($sql) === TRUE) {
        echo "success";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

  }

?>
