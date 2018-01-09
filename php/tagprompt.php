<?php

include "dbconfig.php";
// $connect=mysqli_connect("localhost","root","","hawkeye");

$return_arr = array();

$query = "SELECT distinct(g_sk_nm) FROM `g_skill`";

// $query = "SELECT * FROM subjects ORDER BY sub_nm";

$result = mysqli_query($connect,$query);

while($row = mysqli_fetch_assoc($result)){
    $name = $row['g_sk_nm'];
    // $email = $row['email'];

    $return_arr[] = array(
                    "name" => $name,);

}

// Encoding array in JSON format
echo json_encode($return_arr);
?>
