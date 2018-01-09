<?php
include("dbconfig.php");
error_reporting(E_ALL ^ E_NOTICE);
session_start();
$c_uid=$_SESSION['cand_id'];
echo $c_uid;
// $parsedata=json_encode($_POST['dt']);
// $ins=$parsedata[0]->state;
$var=json_encode($_POST['cdetail']);
// $var2=json_encode($_POST['ql']);
$var3=json_decode($var,true);
// $de=json_decode($var2,true);
// echo $var3[0]['institute'];
foreach ($var3 as  $key => $value) {
// echo $cand_id;
	# code...
	$bd=$value['board'];
	$ins=$value['institute'];
	$mk=$value['marks'];
	$ql=$value['qualification'];
	// echo $ql;
	$qual = explode("(",$ql,2)[0];
	// echo "swara".$first;
	 $a=explode("(",$ql);
	 $branch=substr($a[1],0,-1);
	// echo $mail;
	$yr=$value['year of passing'];
	$id=$value['uid'];
	// echo $id;
	if($id!=""){
	$upd=mysqli_query($connect,"update qualification set `q_qual`='$bd',`q_cs`='$qual',`q_spz`='$branch',`q_mks`='$mk',`q_yr`='$yr',`q_inst`='$ins' where `q_uid`='$c_uid' and `q_id`='$id'");
	// echo $upd;
	// echo $upd;
	if($upd){
		echo "yes";
	}
	else{

		echo "no";
	}
}
else{
	$insert=mysqli_query($connect,"insert into qualification(`q_uid`,`q_qual`,`q_cs`,`q_spz`,`q_mks`,`q_yr`,`q_inst`) values('$c_uid','$bd','$qual','$branch','$mk','$yr','$ins')");
	if($insert){
		echo "ok";
	}
	else{
		echo "not ok";
	}
}

}
// echo $var;
// $var3=$var;
// print_r($var2);
// foreach ($var2 as $key=>$value) {
// 	# code...
// 	$abc=$value;
// 	// echo $abc;
// 	// print_r($abc['institute']);
// 	echo implode("",$abc);
// 	// foreach ($abc as $val1) {
// 	// 	# code...
// 	// 	$asdf=$val1;
// 	// 	echo $asdf;
// 	// }
// 	// $length=count($abc);
// 	// for ($i=0,$length=count($abc);$i<$length;++$i){
// 	// 	$z=$abc;
// 	// 	echo $z;
// 	// }
// }
// echo $parsedata;
// echo $parsedata1;
// print_r($parsedata);
?>