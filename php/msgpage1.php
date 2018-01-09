<?php
  include('dbconfig.php');
  $rid = $_POST['r_id'];
  $cid = $_POST['c_id'];
  $sid = $_POST['s_id'];
  $reid = $_POST['rev_id'];
  $msgdesc =$_POST['msgtxt'];
  date_default_timezone_set("Asia/Kolkata");
  $datetime = date("Y-m-d h:i:s");
  // echo $datetime;

  $sql = "INSERT INTO `messages_tbl`(`rec_id`, `can_id`, `messageText`, `sender_id`, `receiver_id`, `msg_status`, `msg_datetime`)
  VALUES ('$rid','$cid','$msgdesc','$sid','$reid','1','$datetime') ";
  // $result = $connect->query($sql);
  if ($connect->query($sql) === TRUE) {
    echo "inserted";
  } else {
      echo "Error: " . $sql . "<br>" . $connect->error;
  }



?>
