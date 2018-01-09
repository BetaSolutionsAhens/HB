<?php 
require_once('dbconfig.php');
session_start();
$rec_id=$_SESSION['rec_id'];
echo $rec_id;
$res_sel=mysqli_query($connect,"select * from resume_status inner join r_jobpost on resume_status.cv_jb_id=r_jobpost.j_id inner join r_reginfo on r_jobpost.r_id=r_reginfo.r_id where `r`='$rec_id'");
while($res_sel2=mysqli_fetch_assoc($res_sel)){

echo $res_sel2['cv_jb_id'];
// $sql = "select * from g_skill inner join proj_skill on g_sk_id=proj_sk_id inner join resume_status on resume_status.cv_can_id=g_skill.g_sk_uid where `proj_skill.proj_sk_uid`='$res_sel2[cv_can_id]' or `g_skill.g_sk_uid`='$res_sel2[cv_can_id]'";
// $sel_gskill=mysqli_query($connect,$sql);
//   while ($sel_gskill2=mysqli_fetch_assoc($sel_gskill)) {
//     // $cid=array($sel_gskill2['g_sk_uid']);
    // $canDetails[]=$res_sel2;

    // array("id"=>$sel_gskill2['proj_sk_uid'],"projskill"=>$sel_gskill2['proj_sk_nm'],"gskill"=>$sel_gskill2['g_sk_nm']);
  // }
}
// echo json_encode($canDetails);
// echo json_encode($canProjSkill);

// echo json_encode($gskill);
?>
              
