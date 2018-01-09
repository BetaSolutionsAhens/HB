<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE);
require_once('dbconfig.php');
session_start();
$can_id=$_SESSION['cand_id'];
$rec_id=$_SESSION['rec_id'];
ini_set('error_reporting', E_ALL);
// echo "string";
if(isset($_POST['new']) && isset($_POST['old'])){
  $oldpswd=$_POST['old'];
  $newpswd=$_POST['new'];
  // $id=$_POST['r_id'];
  // $oldpswd='sujisuji';
  // $newpswd='suji';
  // $id=2;
  if(isset($can_id)){
    $id=$can_id;
    $query ="SELECT * FROM c_log WHERE `cl_id`='$id'";
    // echo $query;
    $result = $connect->query($query);
    //
    // echo $result;
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
          // echo $row['cl_pwd'];
          // echo "dcbndj";
          if($row['cl_pwd']== $oldpswd){
            if($row['cl_pwd']!=$newpswd){
              $update= "UPDATE c_log SET `cl_pwd` = '$newpswd' WHERE `cl_id`='$id'";
              // echo $update;
              $result1 = $connect->query($update);
              if ($result1) {
                  echo "Updated";
              } else {
                  echo "NotUpdated";
              }
            }
            else{
              echo "new";
            }
          }
          else{
              echo "old";
            }
          }
    }
    else {
      echo "fail";
    }
  }
  elseif (isset($rec_id)) {
  $id=$rec_id;
  $query ="SELECT * FROM r_reginfo WHERE `r_id`='$id'";
  // echo $query;
  $result = $connect->query($query);
  //
  // echo $result;
  if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {
        // echo $row['r_pswd'];
        // echo "dcbndj";
          if($row['r_pswd']!=$newpswd){
            $update= "UPDATE r_reginfo SET `r_pswd` = '$newpswd' WHERE `r_id`='$id'";
            $result1 = $connect->query($update);
            if ($result1 === TRUE) {
                echo "Updated";
            } else {
                echo "NotUpdated";
            }
          }
          else{
            echo "change";
          }
      }
  }
  else {
    echo "fail";
  }
  }
  else{
    echo '<script>alert("undefined person")</script>';
  }


}
?>
