<?php
require_once('dbconfig.php');
$data = $_POST["details"];
  if(isset($_POST["details"])){
    $data = $_POST["details"];
    $name=$data["f_name"];
    // echo $name;
    $uname=$data["u_name"];
    $mobile=$data["contact"];
    $landline=$data["l_num"];
    $mail=$data["email"];
    $amail=$data["alt_mail"];
    $pswd=$data["psw"];
    $comp=$data["c_name"];
    $desg=$data["desgn"];
    $ins=$data["inds"];
    $coun=$data["coun"];
    $st=$data["r_state"];
    $ct=$data["r_city"];
    $pin=$data["r_pin"];
    $sql = "INSERT INTO r_reginfo (`r_fname`, `r_uname`, `r_mobile`, `r_landline`, `r_mail`, `r_altmail`, `r_pswd`, `r_compname`, `r_desgn`, `r_inds`, `r_country`, `r_state`, `r_city`, `r_pincode`)VALUES ('".$name."','".$uname."','".$mobile."','".$landline."','".$mail."','".$amail."','".$pswd."','".$comp."','".$desg."','".$ins."','".$coun."','".$st."','".$ct."','".$pin."');";
    // $sql;
    if ($connect->query($sql) === TRUE) {
        echo "success";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

  }

?>
