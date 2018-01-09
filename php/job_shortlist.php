<?php
require_once('dbconfig.php');
$can=$_POST['cid'];
// echo $can;
$job=$_POST['jid'];
// echo $job;
$shortlist_status=1;

if (isset($can) && isset($job)) {
	$sql = "SELECT * FROM resume_status where `cv_jb_id` = '$job' and `cv_can_id`='$can'";
	// echo $sql;
	$result = $connect->query($sql);

	if ($result->num_rows > 0) {
	    while($row = $result->fetch_assoc()) {
        // echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
    	if($row["cv_jb_id"] == $job && $row['cv_can_id'] == $can){
    		$updatequery="UPDATE resume_status SET cv_shortlisted=1 WHERE `cv_can_id`='$can' AND `cv_jb_id`='$job'";
    		// echo $updatequery;
    		$job_ins=mysqli_query($connect,$updatequery);
			if($job_ins){
				echo "Updated";
			}else{
				echo "NotUpdated";
			}

    	}
    	else{
    		$job_ins=mysqli_query($connect,"insert into resume_status(`cv_jb_id`,`cv_can_id`,`cv_shortlisted`) values('$job','$can','$shortlist_status')");
    		if($job_ins){
    			echo "inserted";

    		}else{
    			echo "NotInserted";
    		}
		}
    }

	} else {
	    echo "0 results";
	}


}
?>
