<?php
  include('dbconfig.php');
  $rid = $_POST['r_id'];
  $cid = $_POST['c_id'];
  // echo $cid;
  // $rid = '9';
  // $cid = '3';
  if(isset($rid)){
    $sql = "SELECT cl_n,cl_id,b_pic FROM  `c_log` inner join `basic_info` on c_log.cl_id = basic_info.b_uid where `cl_id` = '$cid'";
    // echo $sql;
    $result = $connect->query($sql);
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            $cnameArray['individual'][]=$row;
            $sl1= "SELECT distinct(can_id) FROM  `messages_tbl` where `rec_id` = '$rid'";
            $rs1 = $connect->query($sl1);
            // if ($rs1->num_rows > 0) {

            while($row1 = $rs1->fetch_assoc()){
              $canid=$row1['can_id'];
              if($canid!=$cid){
                $sl = "SELECT cl_n,cl_id,b_pic FROM  `c_log` inner join `basic_info` on c_log.cl_id = basic_info.b_uid where `cl_id` = '$canid'";
                $rs = $connect->query($sl);
                while($row2 = $rs->fetch_assoc()){
                  $cnameArray['multi'][]=$row2;

                }
              }

            }
        }
        echo json_encode(array($cnameArray));

    }
  }
  else{
    $sql = "SELECT distinct(rec_id) FROM  `messages_tbl` where `can_id` = '$cid'";
    // echo $sql;
    $result = $connect->query($sql);
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
          $rid = $row['rec_id'];
          // echo $rid;
          // $sl= "SELECT * FROM `messages_tbl` where `rec_id` = '$rid'";
          // $rs = $connect->query($sl);
          // while($row2 = $rs->fetch_assoc()){
          //   $cnameArray['all'][]=$row1;
          // }
          $sql1 = "SELECT r_id,r_fname,r_uname FROM  `r_reginfo` where `r_id` = '$rid'";
          // echo $sql1;
          $result1 = $connect->query($sql1);
          if ($result1->num_rows > 0) {
              // output data of each row
              while($row1 = $result1->fetch_assoc()) {
                // $rid = $row['rec_id'];
                $cnameArray[]=$row1;

                  // $cnameArray['individual'][]=$row1;
              }
          }
            // $cnameArray[]=$row;
        }
        echo json_encode($cnameArray);
    }
  }




?>
