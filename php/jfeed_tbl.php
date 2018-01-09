<?php
include("dbconfig.php");
session_start();
$rec_id=$_SESSION['rec_id'];
// echo $_POST['rec_id'];
// echo $_POST['job_id'];
$rid=$_POST['rec_id'];
$jid=$_POST['job_id'];
$sel_post=mysqli_query($connect,"select * from r_jobpost where r_id='$rid' and j_id='$jid'");
while($fet_post=mysqli_fetch_assoc($sel_post)){
	$tbDet['posts'][]=$fet_post;
	$sel_skill=mysqli_query($connect,"select * from pref_skills where pref_rid='$fet_post[r_id]' and pref_post_id='$fet_post[j_id]'");
	while($fet_skill=mysqli_fetch_assoc($sel_skill)){
		$tbDet['skills'][]=$fet_skill;
	}

}
echo json_encode(array($tbDet));
?>