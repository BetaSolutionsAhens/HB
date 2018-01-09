<?php
require_once('dbconfig.php');
session_start();
if(isset($_POST['radiobtn'])){
	$r_n = $_POST['m'];
	// echo $r_n;
	$r_pwd = $_POST['p'];
	// echo $r_pwd;
	$query ="select * from r_reginfo where `r_mail`='$r_n' and `r_pswd`='$r_pwd'";
	// echo $query;
	$result = $connect->query($query);

	if ($result->num_rows > 0) {
	    // output data of each row
	    while($row = $result->fetch_assoc()) {
				$_SESSION['rec_id']=$row['r_id'];

					// $data[] = array('status' => $row['r_status'],'r_id' => $row['r_id'] );

					echo $row['r_status'];
	    }
			// echo json_encode($data);
	} else {
    $query ="select * from r_reginfo where `r_altmail`='$r_n' and `r_pswd`='$r_pwd'";
    // echo $query;
    $result = $connect->query($query);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
					$_SESSION['rec_id']=$row['r_id'];
						// $data[] = array('status' => $row['r_status'],'r_id' => $row['r_id'] );
						echo $row['r_status'];
        }
				// echo json_encode($data);
    }else{
      echo "0 results";

    }
	}
}
else{
	echo "string";
}
?>
