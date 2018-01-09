<?php
require_once('dbconfig.php');
session_start();
$rec_id=$_SESSION['rec_id'];
// echo "hi";
// if(isset($_POST['cid']) && isset($_POST['jid'])){
//   $candidate= $_POST['cid'];
//   $Jobid = $_POST['jid'];
  // echo $candidate;
  $sql = "select * from resume_status inner join c_log on c_log.cl_id=resume_status.cv_can_id inner join basic_info on basic_info.b_uid=resume_status.cv_can_id inner join edu_qf on edu_qf.e_uid=resume_status.cv_can_id order by resume_status.cv_id";
  $result = $connect->query($sql);
  if ($result->num_rows > 0) {
      // output data of each row
      while($basicInfo = $result->fetch_assoc()) {

          $canDetail['basic'][] = $basicInfo;

          // if($basicInfo['e_cn_type'] == 'fre'){


      // }
      $sql1 ="SELECT * FROM qualification where qualification.q_uid='$basicInfo[cv_can_id]'";
      $result1 = $connect->query($sql1);
      if($result1->num_rows > 0){
        while($eduInfo = $result1->fetch_assoc()){
          $canDetail['edu'][] = $eduInfo;
        }
      }
      $sql2 ="SELECT * FROM fresher where fresher.fs_uid='$basicInfo[cv_can_id]'";
      $result2 = $connect->query($sql2);
      if($result2 ->num_rows>0){
        while($freProj = $result2->fetch_assoc()){
          $canDetail['frepro'][] = $freProj;
        }
      }
    // }else{
      $sql3 ="SELECT * FROM exp_project where exp_project.pj_uid ='$basicInfo[cv_can_id]'";
      $result3 = $connect->query($sql3);
      if($result3 ->num_rows>0){
        while($expProj = $result3->fetch_assoc()){
          $canDetail['expPro'][] = $expProj;
        }
      }
    }
  }

// }
echo json_encode(array($canDetail));

?>
