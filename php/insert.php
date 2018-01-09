<?php
error_reporting(E_ALL);
// REGISTER
//$con=mysqli_connect("localhost", "root", "", "hawkeye");
session_start();
include 'dbconfig.php';
// $server="localhost";
// $user="root";
// $psw="";
// $db="hawkeye";
// $connect=mysqli_connect($server,$user,$psw);
// $con=mysqli_select_db($connect,$db);
// echo "string";
if(isset($_POST['c_reg'])){

$data = $_POST['c_reg'];
	$mail=$data['email'];
	$sg_sub=$data['sg_sub'];
	$un=$data['un'];
	$con=$data['contact'];
	$ps=$data['password'];
	$name=$data['name'];
	$date = date('Y/m/d h:i:s');
	$ch=$data['chk'];
	$sel=$connect->prepare("select cl_em,cl_un,cl_n from c_log");
	$sel->execute();
	$sel->bind_result($em,$nm,$n);
	$sel->store_result();
	$sel->fetch();
		if($nm==$un || $em==$mail || $n==$name){
			echo '<script> alert("data already exists")</script>';
		}
		else{
			$ins1=$connect->prepare("insert into c_log(`cl_n`,`cl_un`,`cl_phn`,`cl_em`,`cl_pwd`,`cl_time`,`cl_status`) values(?,?,?,?,?,?,?)");
			$ins1->bind_param('ssissss',$name,$un,$con,$mail,$ps,$date,$ch);
			$ins1->execute();

			if($ins1){
				$ins2=$connect->prepare("insert into c_l(`log_un`,`log_psw`) values(?,?)");
				$ins2->bind_param('ss',$mail,$ps);
				$ins2->execute();
				if($ins2){
					echo "success1";
				}
				else{
					echo "fail1";
				}

			}
			else{
				echo "fail1";


			}
		}

}
// LOGIN
if(isset($_POST['login_btn'])){
	// echo "hihihii";
	$u_n = $_POST['m'];
	// echo $u_n;
	$u_pwd = $_POST['p'];
	// echo $u_pwd;
	$query ="select * from c_log where `cl_em`='$u_n' and `cl_pwd`='$u_pwd'";
	// echo $query;
	$result = $connect->query($query);

	if ($result->num_rows > 0) {
	    // output data of each row
	    while($row = $result->fetch_assoc()) {
				$_SESSION['cand_id']=$row['cl_id'];
	        echo $row['status'];
					// echo "status".$row['status'];
	    }
	} else {
	    echo "0 results";
	}
}

// Forget Password
if(isset($_POST['fp_btn'])){
$forget_btn=$_POST['fp_btn'];
$forget_mail=$_POST['fp_email'];
// $f_sel=mysqli_query($connect,"select * from c_log where cl_em='$forget_mail'");
// $f_sel2=mysqli_fetch_array($f_sel);
// $c_log_uid=$f_sel2['cl_id'];
// $c_log_em=$f_sel2['cl_em'];
$f_sel=$connect->prepare("select cl_em,cl_id from c_log where `cl_em`=?");
$f_sel->bind_param('s',$forget_mail);
$f_sel->execute();
$f_sel->bind_result($c_log_em,$c_log_uid);
$f_sel->store_result();
$f_sel->fetch();
if($forget_mail==$c_log_em){
	$enc_mail=base64_encode($c_log_em);
	if($forget_mail==''){
		echo '<script> alert("please insert email")</script>';
	}
	else{
	// $fp_ins=mysqli_query($connect,"insert into f_p(`f_uid`,`f_em`) values('$c_log_uid','$enc_mail')");
		$fp_ins=$connect->prepare("insert into f_p(`f_uid`,`f_em`) values(?,?)");
		$fp_ins->bind_param('is',$c_log_uid,$enc_mail);
		$fp_ins->execute();
		echo '<script> alert("link has been send to your email")</script>';

	}
		// if($fp_ins){
	 // }
}
else{
	echo '<script> alert("undefined email")</script>';
}
}

// UPDATE PASSWORD
if(isset($_POST['up_btn'])){
$update_btn=$_POST['up_btn'];
$update_ps1=$_POST['update_ps1'];
$update_ps2=$_POST['update_ps2'];
$update_mail=base64_decode($_SESSION['email']);
if($update_ps1=='' || $update_ps2==''){
		echo '<sccript>alert("not valid1")</script>';
	}
else if($update_ps1==$update_ps2){
	// if($update_ps1=='' && $update_ps2==''){
	// 	echo '<sccript>alert("not valid1")</script>';
	// }
	// else{
	// $update=mysqli_query($connect,"update c_log set `cl_pwd`='$update_ps1' where `cl_em`='$update_mail'");
	$update=$connect->prepare("update c_log set `cl_pwd`=? where `cl_em`=?");
	$update->bind_param('ss',$update_ps1,$update_mail);
	$update->execute();
	if($update){
		echo "inserted";
	}
	else{
		echo "not_done";
	}
	//header("location:index.html");
	//echo '<META HTTP-EQUIV="Refresh" Content="0; URL=index.html">';
// }
}
else{
	echo '<script>alert("not valid")</script>';
}
}
?>
