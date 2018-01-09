<?php
include("dbconfig.php");
error_reporting(E_ALL ^ E_NOTICE);
session_start();
$c_uid=$_SESSION['cand_id'];
// echo $c_uid;
$var=json_encode($_POST['fre']);
$var3=json_decode($var,true);
foreach ($var3 as  $key => $value) {
	// echo $value['fuid'];
	$proj_name=$value['project name'];
	$proj_desc=$value['project description'];
	$work_name=$value['workshop name'];
	$work_desc=$value['woekshop description'];
	$present=$value['presentation'];
	$tb_id=$value['fuid'];

	if($tb_id==""){
		$ins=mysqli_query($connect,"insert into fresher(`fs_uid`,`fs_proj_nm`,`fs_proj_desc`,`fs_w_nm`,`fs_w_desc`,`fs_part`) values('$c_uid','$proj_name','$proj_desc','$work_name','$work_desc','$present')");
		if($ins){
			echo "ins";
		}
		else{
			echo "not ins";
		}
	}
	else{
		$update=mysqli_query($connect,"update fresher set `fs_proj_nm`='$proj_name',`fs_proj_desc`='$proj_desc',`fs_w_nm`='$work_name',`fs_w_desc`='$work_desc',`fs_part`='$present' where `fs_id`='$tb_id' and `fs_uid`='$c_uid'");
		if($update){
			echo "upd";
		}
		else{
			echo "not upd";
		}
	}
}

// exp update

$exp_var=json_encode($_POST['exp']);
$exp_var2=json_decode($exp_var,true);
foreach ($exp_var2 as  $key => $ex_det) {
	$ex_proj=$ex_det['project name'];
	$ex_domain=$ex_det['domain'];
	$ex_client=$ex_det['client name'];
	$ex_duration=$ex_det['project duration'];
	$ex_id=$ex_det['exid'];
	$ex_role=$ex_det['your role'];
	if($ex_id==""){
		$ins=mysqli_query($connect,"insert into exp_project(`pj_uid`,`pj_nm`,`pj_domaim`,`pj_client`,`pj_duration`,`pj_role`) values('$c_uid','$ex_proj','$ex_domain','$ex_client','$ex_duration','$ex_role')");
		if($ins){
			echo "ins";
		}
		else{
			echo "not ins";
		}
	}
	else{
		$update=mysqli_query($connect,"update exp_project set `pj_nm`='$ex_proj',`pj_domaim`='$ex_domain',`pj_client`='$ex_client',`pj_duration`='$ex_duration',`pj_role`='$ex_role' where `pj_id`='$ex_id' and `pj_uid`='$c_uid'");
		if($update){
			echo "upd";
		}
		else{
			echo "not upd";
		}
	}
}
?>