<?php
include("dbconfig.php");
session_start();
$can_id=$_SESSION['cand_id'];
// echo $can_id;
$sel_fallow=mysqli_query($connect,"select * from rec_follow where can_id='$can_id' and f_status='1'");
while($fet_follow=mysqli_fetch_assoc($sel_fallow)){
	// echo $fet_follow['rec_id'];
	$r_id=$fet_follow['rec_id'];
	// $j_id=$fet_follow['j_id'];
	// $sel_jpost=mysqli_query($connect,"select * from r_reginfo inner join r_jobpost on r_reginfo.r_id=r_jobpost.r_id inner join resume_status on r_jobpost.j_id=resume_status.cv_jb_id where r_reginfo.r_id='$r_id'");
	$sel_jpost=mysqli_query($connect,"select * from r_reginfo inner join r_jobpost on r_reginfo.r_id=r_jobpost.r_id where r_reginfo.r_id='$r_id'");
	while($fet_jpost=mysqli_fetch_assoc($sel_jpost)){
	$sel_skill=mysqli_query($connect,"select * from rec_skills where rec_id='$fet_jpost[r_id]' and jpost_id='$fet_jpost[j_id]'");
	while($fet_skill=mysqli_fetch_assoc($sel_skill)){
		$jpostDet['skills'][]=$fet_skill;
	}
		$jpostDet['posts'][]=$fet_jpost;
	}
	// $jpostDet['']
}
$jpostDet['session_id'][]=$can_id;
echo json_encode(array($jpostDet));
?>