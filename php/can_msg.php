<?php
    // echo "hii";
    include('dbconfig.php');
    $canid = $_POST['cid'];
    // echo $canid;
#    if(isset($canid)){
        $sql ="SELECT distinct(rec_id) FROM `rec_follow` where `can_id` = '$canid' and f_status = '1'";
        // echo $sql;
        $result = $connect->query($sql);

        if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
                $rec_id = $row['rec_id'];
                $sql1 ="select * from `r_reginfo` where `r_id` = '$rec_id'";
                // echo $sql1;
                $result1 = $connect->query($sql1);

                if ($result1->num_rows > 0) {
                    // output data of each row
                    while($row1 = $result1->fetch_assoc()) {
                        $rec_details[]=$row1;
                    }
                }
            }
            echo json_encode($rec_details);
        }
        else {
            echo "No Data Found";
        }
#    }

?>
