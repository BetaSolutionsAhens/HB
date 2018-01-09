<?php
include 'dbconfig.php';
session_start();
$rec_id=$_SESSION['rec_id'];
$can_id=$_SESSION['cand_id'];
// echo $_POST['name'];
if(isset($_POST['button'])){
	$name=$_POST['name'];
	$uname=$_POST['uname'];
	$mobile=$_POST['mobile'];
	$email=$_POST['email'];
	$company=$_POST['company'];
	$desgnation=$_POST['desgnation'];
	$industry=$_POST['industry'];
	$pincode=$_POST['pincode'];

	$upd=mysqli_query($connect,"UPDATE `r_reginfo` SET `r_fname`='$name',`r_uname`='$uname',`r_mobile`='$mobile',`r_mail`='$email',`r_compname`='$company',`r_desgn`='$desgnation',`r_inds`='$industry',`r_pincode`='$pincode' WHERE r_id='$rec_id'");
	if($upd){
		echo "profile updated";
	}
	else{
		echo "not updated";
	}
}


if(isset($_POST['fbtn'])){
	$name=$_POST['name'];
	// $uname=$_POST['uname'];
	$mobile=$_POST['phone'];
	$email=$_POST['email'];
	// $company=$_POST['date'];
	$desgnation=$_POST['city'];
	$industry=$_POST['gender'];
	// $pincode=$_POST['pincode'];
	

	$upd=mysqli_query($connect,"UPDATE `c_log` SET `cl_phn`='$mobile',`cl_n`='$name',`cl_em`='$email' WHERE cl_id='$can_id'");
	if($upd){
		echo "profile updated";
	}
	else{
		echo "not updated";
	}
}
?>