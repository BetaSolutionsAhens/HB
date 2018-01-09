<?php 
require_once('dbconfig.php');
session_start();
$rec_id=$_SESSION['rec_id'];

// 
 $sel_gskill=mysqli_query($connect,"select * from g_skill inner join resume_status on resume_status.cv_can_id=g_skill.g_sk_uid");
  while ($sel_gskill2=mysqli_fetch_assoc($sel_gskill)) {
    // $cid=array($sel_gskill2['g_sk_uid']);
    $canDetails[]=array("id"=>$sel_gskill2['g_sk_uid'],"skill"=>$sel_gskill2['g_sk_nm']);
    // $canDetails[]=array($sel_gskill2);

  }
// // echo json_encode($canSkill);

//  $sel_gskill=mysqli_query($connect,"select * from proj_skill inner join resume_status on resume_status.cv_can_id=proj_skill.proj_sk_uid");
//   while ($sel_gskill2=mysqli_fetch_assoc($sel_gskill)) {
//     // $cid=array($sel_gskill2['g_sk_uid']);
//     $canDetails[]=array("id"=>$sel_gskill2['proj_sk_uid'],"skill"=>$sel_gskill2['proj_sk_nm']);

//   }
echo json_encode($canDetails);
// echo json_encode($canProjSkill);

// echo json_encode($gskill);
?>
              
