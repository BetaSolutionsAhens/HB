<?php

include "dbconfig.php";
// $connect=mysqli_connect("localhost","root","root","hawkeye");

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


// $sel=mysqli_query($connect,"select distinct(pref_loc_name) from pref_loc");
// while($sel2=mysqli_fetch_assoc($sel)){
// 	$loc=$sel2['pref_loc_name'];
// 	$loc_array[]=array(
// 					"loc" => $loc,);
// }
// echo json_encode($loc_array);
?>
