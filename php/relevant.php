<?php
include("dbconfig.php");
session_start();
$can_id=$_SESSION['cand_id'];
// echo $can_id;
$query=mysqli_query($connect,"select * from c_log inner join basic_info on c_log.cl_id=basic_info.b_uid inner join edu_qf on edu_qf.e_uid=c_log.cl_id where c_log.cl_id='$can_id'");
while($fet_query=mysqli_fetch_assoc($query)){
	echo $fet_query['e_cn_type'];
	$c_type=$fet_query['e_cn_type'];
	if($c_type=="exp"){
	$p_skill=mysqli_query($connect,"select distinct(proj_sk_nm) from proj_skill where proj_sk_uid='$can_id'");
	while($fet_pskill=mysqli_fetch_assoc($p_skill)){
		echo $fet_pskill['proj_sk_nm'];
		$pskill=$fet_pskill['proj_sk_nm'];
		$job_post=mysqli_query($connect,"select * from rec_skills where rskill_name='$pskill'");
		while($fet_jbpost=mysqli_fetch_assoc($job_post)){
			echo $fet_jbpost['rec_id'];
			$rec_id=$fet_jbpost['rec_id'];
			$rec_det=mysqli_query($connect,"select * from r_reginfo inner join r_jobpost on r_reginfo.r_id=r_jobpost.r_id where r_reginfo.r_id='$rec_id'");
			while($fet_recdet=mysqli_fetch_assoc($rec_det)){
				echo $fet_recdet['r_compname'];
			}
		}
	}
}
else{
	$g_skill=mysqli_query($connect,"select distinct(g_sk_nm) from g_skill where g_sk_uid='$can_id'");
	while($fet_gskill=mysqli_fetch_assoc($g_skill)){
		echo $fet_gskill['g_sk_nm'];
		$gskill=$fet_gskill['g_sk_nm'];
		$job_post=mysqli_query($connect,"select * from rec_skills where rskill_name='$gskill'");
		while($fet_jbpost=mysqli_fetch_assoc($job_post)){
			echo $fet_jbpost['rec_id'];
			$rec_id=$fet_jbpost['rec_id'];
			$rec_det=mysqli_query($connect,"select * from r_reginfo inner join r_jobpost on r_reginfo.r_id=r_jobpost.r_id where r_reginfo.r_id='$rec_id'");
			while($fet_recdet=mysqli_fetch_assoc($rec_det)){
				echo $fet_recdet['r_compname'];
			}
		}
	}
}
}
?>
