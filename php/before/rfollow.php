<?php
require_once('dbconfig.php');
session_start();
$can_id=$_SESSION['cand_id'];
$rid=$_POST['r_id'];
$jid=$_POST['j_id'];
$fstatus = $_POST['fst'];
// echo $fstatus;
if(isset($rid,$jid,$fstatus)){
  if($fstatus=='1'){
    $sel= "SELECT * FROM `rec_follow` WHERE `rec_id`='$rid' and `can_id`='$can_id' and `j_id` ='$jid' ";
    // echo $sel;
    $result = $connect->query($sel);
        // output data of each row
        if ($result->num_rows > 0) {
          while($row = $result->fetch_assoc()) {
              $fs = $row['f_status'];
              // echo $fs;
              if($fs == '0'){
                $sql1 ="UPDATE `rec_follow` SET `f_status`='1' where `rec_id`='$rid' and `can_id`='$can_id' and `j_id` ='$jid'";
                  // echo $sql1;
                  if ($connect->query($sql1) === TRUE) {
                      echo "follow";
                  }
                }
                else{
                  $sql1 ="UPDATE `rec_follow` SET `f_status`='0' where `rec_id`='$rid' and `can_id`='$can_id' and `j_id` ='$jid'";
                    // echo $sql1;
                    if ($connect->query($sql1) === TRUE) {
                        echo "unfollow";
                    }
                }

              }
            }
            else{
              $sql="INSERT INTO `rec_follow`(`rec_id`,`can_id`,`j_id`,`f_status`) VALUES('$rid','$can_id','$jid','$fstatus')";
                    // echo $sql;
                if ($connect->query($sql) === TRUE) {
                    echo "following";
                }
            }
    }
    else{
      $sel= "SELECT * FROM `rec_follow` WHERE `rec_id`='$rid' and `can_id`='$can_id' and `j_id` ='$jid' ";
      // echo $sel;
      $result = $connect->query($sel);
          // output data of each row
          if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $fs = $row['f_status'];
                // echo $fs;
                if($fs == '0'){
                  $sql1 ="UPDATE `rec_follow` SET `f_status`='1' where `rec_id`='$rid' and `can_id`='$can_id' and `j_id` ='$jid'";
                    // echo $sql1;
                    if ($connect->query($sql1) === TRUE) {
                        echo "follow";
                    }
                  }
                  else{
                    $sql1 ="UPDATE `rec_follow` SET `f_status`='0' where `rec_id`='$rid' and `can_id`='$can_id' and `j_id` ='$jid'";
                      // echo $sql1;
                    if ($connect->query($sql1) === TRUE) {
                        echo "unfollow";
                    }
                }

              }
          }
    }
}
else{
  $sel= "SELECT * FROM `rec_follow` WHERE `rec_id`='$rid' and `can_id`='$can_id' and `j_id` ='$jid' ";
  // echo $sel;
  $result = $connect->query($sel);
      // output data of each row
      if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $fs = $row['f_status'];
            echo $fs;
          }
      }
}
  // $sel= "SELECT * FROM `rec_follow` WHERE `rec_id`='$rid' and `can_id`='$can_id' and `j_id` ='$jid' ";
  // // echo $sel;
  // $result = $connect->query($sel);
  //     // output data of each row
  //     if ($result->num_rows > 0) {
  //       while($row = $result->fetch_assoc()) {
  //           $fs = $row['f_status'];
  //           // echo $fs;
  //           if($fs == '1'){
  //             $sql1 ="UPDATE `rec_follow` SET `f_status`='0' where `rec_id`='$rid' and `can_id`='$can_id' and `j_id` ='$jid'";
  //             // echo $sql1;
  //             # code...
  //             if ($connect->query($sql1) === TRUE) {
  //                 echo "unfollow";
  //             }
  //             // echo "following";
  //           }
  //           else{
  //             $sql1 ="UPDATE `rec_follow` SET `f_status`='1' where `rec_id`='$rid' and `can_id`='$can_id' and `j_id` ='$jid'";
  //             // echo $sql1;
  //             # code...
  //             if ($connect->query($sql1) === TRUE) {
  //                 echo "following";
  //             }
  //           }
  //       }
  //     }
  //     else{
  //       $sql="INSERT INTO `rec_follow`(`rec_id`,`can_id`,`j_id`,`f_status`) VALUES('$rid','$can_id','$jid','$fstatus')";
  //       // echo $sql;
  //       if ($connect->query($sql) === TRUE) {
  //           echo "followed";
  //       }
  //     }



// }elseif ($fstatus=='1') {
//   $sel= "SELECT * FROM `rec_follow` WHERE `rec_id`='$rid' and `can_id`='$can_id' and `j_id` ='$jid' ";
//   // echo $sel;
//   $result = $connect->query($sel);
//       // output data of each row
//   while($row = $result->fetch_assoc()) {
//       $fs = $row['f_status'];
//       // echo $fs;
//       if($fs == '1'){
//
//       }
//       else{
//         echo $fs;
//       }
//   }
//
// }else{
//   echo "nope";
// }

?>
