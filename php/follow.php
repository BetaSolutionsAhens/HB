<?php
include("dbconfig.php");
session_start();
$canid=$_SESSION['cand_id'];
$rid=$_POST['rid'];
$sel_rec=mysqli_query($connect,"select * from r_reginfo where r_id='$rid'");
while($fet_rec=mysqli_fetch_assoc($sel_rec)){
	$recDetails['rec']=$fet_rec;
}
echo json_encode(array($recDetails));
?>