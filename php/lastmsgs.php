<?php
include('dbconfig.php');
$rid = $_POST['r_id'];
$cid = $_POST['c_id'];
// $rid = '9';
// $cid = '1';
if(isset($rid)){
  $sql1= "select distinct(can_id) from `messages_tbl` where rec_id='$rid' ";
  $result1 = $connect->query($sql1);
  if ($result1->num_rows > 0) {
      // output data of each row
      while($row1 = $result1->fetch_assoc()) {
          // $Array[]=$row1;
          $sql2= "select * from `messages_tbl` where can_id='$row1[can_id]' ORDER BY msg_id DESC LIMIT 1";
          // echo $sql2;
          $result2 = $connect->query($sql2);
              // output data of each row
          while($row2 = $result2->fetch_assoc()) {
            $Array[]=$row2;

          }
      }
      echo json_encode($Array);
  }
}
else{
  $sql1= "select distinct(rec_id) from `messages_tbl` where can_id='$cid' ";
  $result1 = $connect->query($sql1);
  if ($result1->num_rows > 0) {
      // output data of each row
      while($row1 = $result1->fetch_assoc()) {
          // $Array[]=$row1;
          $sql2= "select * from `messages_tbl` where rec_id='$row1[rec_id]' ORDER BY msg_id DESC LIMIT 1";
          // echo $sql2;
          $result2 = $connect->query($sql2);
              // output data of each row
          while($row2 = $result2->fetch_assoc()) {
            $Array[]=$row2;

          }
      }
      echo json_encode($Array);
  }
  }
//   // $sql1= "select distinct(rec_id) from `messages_tbl` where can_id = '$cid'";
//   // // select distinct(rec_id) from `messages_tbl` where can_id = '1'
//   // // echo $sql1;
//   // $result1 = $connect->query($sql1);
//   // if ($result1->num_rows > 0) {
//   //     // output data of each row
//   //     while($row1 = $result1->fetch_assoc()) {
//   //         // $Array[]=$row1;
//   //         $rid =$row1['rec_id'];
//           // echo $rid;
//           $sql= "select * from `messages_tbl` where can_id= '$cid' ORDER BY msg_datetime ASC ";
//           // echo $sql;
//           $result = $connect->query($sql);
//           if ($result->num_rows > 0) {
//               // output data of each row
//               while($row = $result->fetch_assoc()) {
//                   $Array[]=$row;
//               }
//               // echo json_encode($Array);
//           }
//           else{
//             echo "Nope";
//           }
//       // }
//       echo json_encode($Array);
//   }

// }

?>
