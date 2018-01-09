<?php
include 'dbconfig.php';
session_start();
// LOGIN SELECT
// $sel_id=mysqli_query($connect,"select * from c_l order by log_id desc");
// $sel2=mysqli_fetch_array($sel_id);
// $_SESSION['log_id']=$sel2['log_id'];
$us_id=$_SESSION['cand_id'];


// insert qualification
if(isset($_POST['qf_sub'])){
	$qf_btn=$_POST['qf_sub'];
	// echo $qf_btn;
	$board=$_POST['board'];
	// echo $board;
	$course=$_POST['course'];
	// echo $course;
	$special=$_POST['special'];
	// echo $special;
	$c_type=$_POST['c_type'];
	$marks=$_POST['marks'];
	$yop=$_POST['yop'];
	$inst=$_POST['inst'];
	if($board=='' || $course=='' || $special=='' || $c_type=='' || $marks=='' || $yop=='' || $inst==''){
		echo '<script>alert("data not inserted")</script>';
	}
	else{

	$ins=mysqli_query($connect,"insert into qualification(`q_uid`,`q_qual`,`q_cs`,`q_spz`,`q_ctype`,`q_mks`,`q_yr`,`q_inst`) values('$us_id','$board','$course','$special','$c_type','$marks','$yop','$inst')");
}
}

if(isset($_POST['lev_3_sub'])){
	// $cert=$_POST['cert'];
	$industry=$_POST['inds_type'];
	$prefloc=$_POST['prefloc'];
	$candidate_type=$_POST['cand_type'];
	$lev_3_sub=$_POST['lev_3_sub'];
	$ar=$_POST['skill'];
	if($industry=='' || $candidate_type==''){
		echo '<script>alert("data not inserted")</script>';
	}
	else{
		$ins=mysqli_query($connect,"insert into edu_qf(`e_uid`,`e_ind`,`e_cn_type`) values('$us_id','$industry','$candidate_type')");
		foreach ($ar as $array) {
			$sk_ar=$array;
			$ins2=mysqli_query($connect,"insert into g_skill(`g_sk_uid`,`g_sk_nm`) values('$us_id','$sk_ar')");
		}
	foreach ($prefloc as $location_pf) {
			$pf_loc1=$location_pf;
			$ins3=mysqli_query($connect,"insert into pref_loc(`pref_loc_uid`,`pref_loc_name`) values('$us_id','$pf_loc1')");
		}
	// if($ins)
	// {
	// 	echo '<script>alert("Inserted Sucessfully") </script>';
	// }
	// else
	// {
	// 	echo '<script>alert("Not Inserted ") </script>';
	// }
}
}

// project insert fresher
if(isset($_POST['lev_4a'])){
	$projectname_fs=$_POST['projectname_fs'];
	$pj_desc=$_POST['pj_desc'];
	$wksp=$_POST['wksp'];
	$wksp_desc=$_POST['wksp_desc'];
	// $c_type=$_POST['c_type'];
	$present=$_POST['present'];
	$lev_4a=$_POST['lev_4a'];

// 	$sel_fsh=mysqli_query($connect,"select * from edu_qf order by e_id desc");
// 	$sel_fsh2=mysqli_fetch_array($sel_fsh);
// 	$ctype_name=$sel_fsh2['e_cn_type'];
// 	$ctype_id=$sel_fsh2['e_id'];
// if($ctype_name=='fre'){
	$ins=mysqli_query($connect,"insert into fresher(`fs_uid`,`fs_proj_nm`,`fs_w_nm`,`fs_w_desc`,`fs_proj_desc`,`fs_part`) values('$us_id','$projectname_fs','$wksp','$wksp_desc','$pj_desc','$present')");
// }
}


// basic info
if(isset($_POST['bt'])){
//
	$btn1=$_POST['bt'];
	$file=$_FILES['file']['name'];
	$tg_file=$_FILES['file']['tmp_name'];
	move_uploaded_file($tg_file,"../img/".$file);
	$bdt=$_POST['dt'];
$gr=$_POST['select1'];
$lct=$_POST['text'];
$mtst=$_POST['select2'];
if($file=='' || $lct=='' || $mtst==''){
	echo '<script>alert("empty") </script>';
}
else{
$ins=mysqli_query($connect,"insert into basic_info(`b_uid`,`b_pic`,`b_dob`,`b_gen`,`b_loc`,`b_mstatus`) values('$us_id','$file','$bdt','$gr','$lct','$mtst')");
if($ins){
	echo '<script>alert("Inserted Sucessfully") </script>';
	// echo "succ";
}
else{
	echo '<script>alert("not Sucessfully") </script>';
	// echo "not succ";
}
}
}


// insert exp
if(isset($_POST['lev_4b'])){
	$var=$_POST['years'];
	$cc=$_POST['current_comp'];
	$dg=$_POST['designation'];
	$cjt=$_POST['currjtype'];
	$pjt=$_POST['preferjtype'];
	$comp=$_POST['currcomp'];
	$exomp=$_POST['expcomp'];
	$lev_4b=$_POST['lev_4b'];
	$month=$_POST['month'];
	$notice=$_POST['notice'];

	// $sel_exp=mysqli_query($connect,"select * from edu_qf order by e_id desc");
	// $sel_exp2=mysqli_fetch_array($sel_exp);
	// $exp_type=$sel_exp2['e_cn_type'];
	// $exp_uid=$sel_exp2['e_id'];
	// if($exp_type=='exp'){
	$insert=mysqli_query($connect,"insert into exp(`ex_uid`,`ex_month`,`ex_notice`,`ex_years`, `ex_cc`, `ex_desc`, `ex_cjob_type`, `ex_prefjob_type`, `ex_c_comp`, `ex_exp_comps`) values('$us_id','$month','$notice','$var','$cc','$dg','$cjt','$pjt','$comp','$exomp')");
	if($insert)
	{
		$upd=mysqli_query($connect,"update c_log set status='1' where cl_id='$us_id'");
		if($upd){
			echo "updated";
		}
		else{
			echo "not update";
		}
	}
// 	else
// 	{
// 		echo '<script>alert("Not Inserted ") </script>';
// 	}
// }
// $upd_sta=mysqli_query($connect,"UPDATE c_log SET status='1'");
}

// insert exp proj
if (isset($_POST['eadd'])) {
	$projName=$_POST['projNam'];
	$domain=$_POST['domain'];
	$client=$_POST['client'];
	$duration=$_POST['duration'];
	$role=$_POST['role'];
	$skill=$_POST['skill'];
	$eadd=$_POST['eadd'];

	$proj_exp=mysqli_query($connect,"select * from edu_qf order by e_id desc");
	$proj_exp2=mysqli_fetch_array($proj_exp);
	$can_type=$proj_exp2['e_cn_type'];
	$can_id=$proj_exp2['e_id'];
	if($can_type=='exp'){
	$ins=mysqli_query($connect,"insert into exp_project(`pj_uid`,`pj_nm`,`pj_domaim`,`pj_client`,`pj_duration`,`pj_role`) values('$us_id','$projName','$domain','$client','$duration','$role')");
	if($ins){
    	$sel_exp=mysqli_query($connect,"select * from exp_project order by pj_id desc limit 1");
		$fet_sel_exp=mysqli_fetch_array($sel_exp);
	foreach($skill as $proj_skill){
		$pj_skl=$proj_skill;
		$insert_pj_skill=mysqli_query($connect,"insert into proj_skill (`proj_sk_nm`,`proj_sk_uid`,`proj_id`) value('$pj_skl','$us_id','$fet_sel_exp[pj_id]')");
	}
	}
}
}


// fresher_status_update
if(isset($_POST['update_fsh'])){
// status_update();
$upd=mysqli_query($connect,"update c_log set status='1' where cl_id='$us_id'");
if($upd){
	echo "updated";
}
else{
	echo "not update";
}
}
// function status_update(){
//
// }
?>
