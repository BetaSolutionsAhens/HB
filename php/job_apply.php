<?php
require_once('dbconfig.php');
$can=$_POST['cid'];
$job=$_POST['jid'];
$status=1;
if (isset($can) && isset($job)) {
	$sel=mysqli_query($connect,"select * from resume_status where `jb_applied`='1' and `cv_can_id`='$can' and `cv_jb_id`='$job'");
	$sel2=mysqli_fetch_array($sel);
	$res_can_id=$sel2['cv_can_id'];
	$res_job_id=$sel2['cv_jb_id'];
	// echo $res_job_id;
	// echo $res_can_id;
	// echo $can;
	// echo $job;
	if($res_can_id==$can && $res_job_id==$job){
		echo "already applied";
	}
	else{
	$job_ins=mysqli_query($connect,"insert into resume_status(`cv_jb_id`,`cv_can_id`,`jb_applied`) values('$job','$can','$status')");
	// if($job_ins){
	echo "applied";
	// }
}
}
?>