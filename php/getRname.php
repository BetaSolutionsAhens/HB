<?php
require_once('dbconfig.php');
session_start();

// LOGIN SELECT
$r_id=$_SESSION['rec_id'];
// echo $r_id;
$query = "SELECT * from `r_reginfo` where `r_id`='$r_id'";
// echo $query;
$result = $connect->query($query);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
      // $_SESSION['rec_id']=$row['r_id'];
      // echo $row['r_fname'];
        $data[] = array('id'=>$row['r_id'],'name' => $row['r_fname'],'uname' => $row['r_uname'] );

    }
    echo json_encode($data);
}
else{
  echo "Nope";
}
?>
