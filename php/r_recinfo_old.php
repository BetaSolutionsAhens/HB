<?php
include("dbconfig.php");
session_start();
$r_id=$_SESSION['rec_id'];
// echo $r_id;
$basic_info=mysqli_query($connect,"select * from r_reginfo where r_id='$r_id'");
while($fet_basic=mysqli_fetch_assoc($basic_info)){
	$jobPost['basic'][]=$fet_basic;
}
$query=mysqli_query($connect,"select * from r_jobpost inner join r_reginfo on r_jobpost.r_id=r_reginfo.r_id where r_jobpost.r_id='$r_id'");
while($fet_query=mysqli_fetch_assoc($query)){
	$jobPost['post'][]=$fet_query;
$skills=mysqli_query($connect,"select distinct(rskill_name),rec_id from rec_skills where `rec_id`='$r_id' and `jpost_id`='$fet_query[j_id]'");
while($fet_skills=mysqli_fetch_assoc($skills)){
	$jobPost['skills_used'][]=$fet_skills;
}
}
echo json_encode(array($jobPost));
?>
