<?php
error_reporting(E_ALL);
require_once('dbconfig.php');
if(isset($_POST["country_id"]) && !empty($_POST["country_id"])){
    //Get all state data
    $query = $connect->query("SELECT * FROM states WHERE country_id = ".$_POST['country_id']."  ORDER BY name ASC");
    //Count total number of rows
    $rowCount = $query->num_rows;

    //Display states list
    if($rowCount > 0){
        while($row = $query->fetch_assoc()){
          $states[]=  array('s_id' => $row['id'] , 's_name' => $row['name'] ) ;
        }
        echo json_encode($states);

    }else{
        echo 'State not available';
    }
}

if(isset($_POST["state_id"]) && !empty($_POST["state_id"])){
    //Get all city data
    $query = $connect->query("SELECT * FROM cities WHERE state_id = ".$_POST['state_id']." ORDER BY name ASC");

    //Count total number of rows
    $rowCount = $query->num_rows;

    //Display cities list
    if($rowCount > 0){
        while($row = $query->fetch_assoc()){
          $cities[]=  array('ci_id' => $row['id'] , 'ci_name' => $row['name'] ) ;
        }
        echo json_encode($cities);
    }else{
        echo 'City not available';
    }
}
?>
