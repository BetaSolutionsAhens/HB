<?php
require_once('dbconfig.php');
session_start();
$rec_id=$_SESSION['rec_id'];
// $canDetails=array();
// $canDetails1=array();
//
// $canDetails2=array();


// $sel=mysqli_query($connect,"select * from resume_status inner join r_jobpost on resume_status.cv_jb_id=r_jobpost.j_id inner join c_log on c_log.cl_id=resume_status.cv_can_id inner join basic_info on basic_info.b_uid=resume_status.cv_can_id inner join edu_qf on edu_qf.e_uid=resume_status.cv_can_id inner join qualification on qualification.q_uid=resume_status.cv_can_id where r_jobpost.r_id='$rec_id'");

// $sql="select * from resume_status inner join c_log on c_log.cl_id=resume_status.cv_can_id inner join basic_info on basic_info.b_uid=resume_status.cv_can_id inner join qualification on qualification.q_uid=resume_status.cv_can_id inner join edu_qf on edu_qf.e_uid=resume_status.cv_can_id ";
// $sel=mysqli_query($connect,$sql);
// while ($sel2=mysqli_fetch_assoc($sel)){
//  $sql1 ="select proj_sk_nm,cv_can_id from resume_status inner join proj_skill on proj_skill.proj_sk_uid = resume_status.cv_can_id where proj_skill.proj_sk_uid='$sel2[cl_id]'";
// // echo $sql1;
//
// $result = $connect->query($sql1);
//
// if ($result->num_rows > 0) {
//     // output data of each row
//     while($proSkills = $result->fetch_assoc()) {
//
//  		$canDetails['pskills'][] = $proSkills;
//
//     }
// } else {
//     // echo "0 results";
// 	$gskillsql= "select g_sk_nm,cv_can_id from resume_status inner join g_skill on g_skill.g_sk_uid = resume_status.cv_can_id where g_skill.g_sk_uid = '$sel2[cl_id]' ";
// 		$gsk=mysqli_query($connect, $gskillsql);
// 		while($gsk1=mysqli_fetch_assoc($gsk)){
//  			$canDetails['gskills'][] = $gsk1;
// 	// echo $select2;
//  		// $canDetails['skills'][]=$row['g_sk_nm'];
//  	}
//
// }
//
//   $canid = $sel2['cl_id'];
//
// $canDetails['canDetails'][] = $sel2;
 // }
  // echo $sel2;
  $sql3 ="select * from resume_status inner join exp on exp.ex_uid=resume_status.cv_can_id";
  $expDetails=mysqli_query($connect,$sql3);
  while($expD = mysqli_fetch_assoc($expDetails)){
    $canDetails['expDetails'][]=$expD;
  }
  // $sql4 ="select * from resume_status inner join fresher on fresher.fs_uid=resume_status.cv_can_id";
  // $freDetails=mysqli_query($coonect,$sql4);
  // while($freD = mysqli_fetch_assoc($freDetails)){
  //   $canDetails['freDetails'][]=$freD;
  // }
// }

echo json_encode(array($canDetails));
// echo json_encode($canDetails1);
// echo json_encode($canDetails2);


?>
