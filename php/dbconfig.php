<?php
//db details
$dbHost = 'localhost';
$dbUsername = 'root';
$dbPassword = 'sun007';
$dbName = 'hireblocks';
// $dbHost = 'localhost';
// $dbUsername = 'hireb4ge_the2912';
// $dbPassword = 'Ahen$14794';
// $dbName = 'hireb4ge_hawkeye';

//Connect and select the database
$connect = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);
// if($connect){
  // echo "success";

// }
if ($connect->connect_error) {
  die("Connection failed: " . $connect->connect_error);
}

?>
