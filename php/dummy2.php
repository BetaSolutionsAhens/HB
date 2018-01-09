<?php 
require_once('dbconfig.php');
session_start();
$rec_id=$_SESSION['rec_id'];
// $sel=mysqli_query($connect,"select * from resume_status inner join r_jobpost on resume_status.cv_jb_id=r_jobpost.j_id inner join c_log on c_log.cl_id=resume_status.cv_can_id inner join basic_info on basic_info.b_uid=resume_status.cv_can_id inner join edu_qf on edu_qf.e_uid=resume_status.cv_can_id inner join qualification on qualification.q_uid=resume_status.cv_can_id where r_jobpost.r_id='$rec_id'");
$sql="select * from resume_status inner join c_log on c_log.cl_id=resume_status.cv_can_id inner join basic_info on basic_info.b_uid=resume_status.cv_can_id inner join qualification on qualification.q_uid=resume_status.cv_can_id inner join edu_qf on edu_qf.e_uid=resume_status.cv_can_id";
$sel=mysqli_query($connect,$sql);
$canDetails=array();
while ($sel2=mysqli_fetch_assoc($sel)){   
 

  $canid = $sel2['cl_id'];
$sql1 ="select * from g_skill inner join proj_skill on g_sk_id=proj_sk_id where `proj_sk_uid`='$sel2[cv_can_id]' or `g_sk_uid`='$sel2[cv_can_id]'";
// echo $sql1;
$select = mysqli_query($connect, $sql1);
while ($select2 = mysqli_fetch_assoc($select)) {
 	$canDetails['skills']=$select2;
$canDetails['canDetails'] = $sel2;
echo json_encode($canDetails);
 } 
  // echo $sel2;

}


?>
              
select * from resume_status inner join proj_skill on proj_skill.proj_sk_uid = resume_status.cv_can_id


select * from resume_status inner join g_skill on g_skill.g_sk_uid = resume_status.cv_can_id