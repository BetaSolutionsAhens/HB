<?php
require_once('dbconfig.php');
session_start();
$rec_id=$_SESSION['rec_id'];
// echo "hi";
// if(isset($_POST['cid']) && isset($_POST['jid'])){
  // $candidate= $_POST['cid'];
  $Jobid = $_POST['jid'];
  // echo $candidate;
  $sql = "SELECT * FROM `basic_info` INNER JOIN `c_log` ON c_log.cl_id = basic_info.b_uid INNER JOIN `edu_qf` on edu_qf.e_uid = basic_info.b_uid";
  $result = $connect->query($sql);
  if ($result->num_rows > 0) {
      // output data of each row
      while($basicInfo = $result->fetch_assoc()) {

          $canDetail_p['basic'][] = $basicInfo;

          if($basicInfo['e_cn_type'] == 'fre'){
            $sql2 ="SELECT * FROM fresher";
            $result2 = $connect->query($sql2);
            if($result2 ->num_rows>0){
              while($freProj = $result2->fetch_assoc()){
                $canDetail_p['project'][] = $freProj;
              }
            }
          }else{
            $sql3 ="SELECT * FROM exp_project ";
            $result3 = $connect->query($sql3);
            if($result3 ->num_rows>0){
              while($expProj = $result3->fetch_assoc()){
                $canDetail_p['project'][] = $expProj;
              }
            }
          }

      }
  }
  $sql1 ="SELECT * FROM qualification";
  $result1 = $connect->query($sql1);
  if($result1->num_rows > 0){
    while($eduInfo = $result1->fetch_assoc()){
      $canDetail_p['edu'][] = $eduInfo;
    }
  }
// }
echo json_encode(array($canDetail_p));

?>
