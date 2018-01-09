<?php
error_reporting(0);
require_once('dbconfig.php');
session_start();
$can_id=$_SESSION['cand_id'];
$sl = "SELECT proj_sk_nm FROM proj_skill where proj_sk_uid = '$can_id'
UNION
SELECT g_sk_nm FROM g_skill where g_sk_uid ='$can_id'
ORDER BY proj_sk_nm";
$rs = mysqli_query($connect,$sl);
while($dt=mysqli_fetch_assoc($rs)){
  if(isset($dt))
  {

    foreach($dt as $proj_skill)
    {
      $pj_skl=$proj_skill;
      $sl1="SELECT DISTINCT(jpost_id) as psk_uid FROM `rec_skills` WHERE rskill_name='".$pj_skl."'";
      $sk_chck_ps=mysqli_query($connect,$sl1);
        while($fet_pr_sk=mysqli_fetch_assoc($sk_chck_ps))
        {
          $psk_uid=$fet_pr_sk['psk_uid'];
        $canDetails['skills'][]=$psk_uid;
         }
        $pj_skill[]=$pj_skl;

    }
  }
}
    $encode= json_encode($pj_skill);
    $order=array_unique($canDetails['skills']);
    // echo json_encode($order);
    $last=end($order);
      foreach ($order as $key => $value)
      {
        if($value == $last)
        {
          
          $query_uni .="select COUNT(DISTINCT(rskill_name) ) as skill,jpost_id FROM rec_skills WHERE MATCH(rskill_name) AGAINST('$encode' IN NATURAL LANGUAGE MODE) AND jpost_id='$value'";
        }
        else
    {
      $query_uni.= "select COUNT(DISTINCT(rskill_name) ) as skill,jpost_id FROM rec_skills WHERE MATCH(rskill_name) AGAINST('$encode' IN NATURAL LANGUAGE MODE) AND jpost_id='$value' UNION ";
    }
      }





  $final_sort_query_psk = "select * from($query_uni) results order by skill desc";

  // echo $final_sort_query_psk;
  // $result1 = $connect->query($final_sort_query_psk);

  $result1 = mysqli_query($connect, $final_sort_query_psk);
  while ($s_id = mysqli_fetch_assoc($result1))
  {

    $sid = $s_id['jpost_id'];
    // echo $sid;
    $sql = "select * from r_reginfo inner join r_jobpost on r_reginfo.r_id=r_jobpost.r_id where r_jobpost.j_id='$sid'";
    $sel = mysqli_query($connect, $sql);
    while ($sel2 = mysqli_fetch_assoc($sel))
    {
      $sql1 = "select distinct(rskill_name),jpost_id from rec_skills where jpost_id= '$sid' and rec_id='$sel2[r_id]'";

      // echo $sql1;

      $result = $connect->query($sql1);
      if ($result->num_rows > 0)
      {

        // output data of each row

        while ($proSkills = $result->fetch_assoc())
        {
          $canD['pskills'][] = $proSkills;
        }
      }

      // $canid = $sel2['cl_id'];
      $canD['canDetails'][] = $sel2;
    }
  }

$sel_query=mysqli_query($connect,"SELECT cv_jb_id FROM `resume_status` where cv_can_id='$can_id' and jb_applied='1'");
while($fet_query=mysqli_fetch_assoc($sel_query)){
  $canD['r_status'][]=$fet_query;
}

  $canD['can_id'][]=$can_id;
  echo json_encode(array($canD));








      // $final_sort_query_psk="select * from($query_uni) results order by skill desc";
      // $result1=mysqli_query($connect,$final_sort_query_psk);
      // while($s_id = mysqli_fetch_assoc($result1)){
      // $sid=$s_id['jpost_id'];
      //   $sql="select * from r_jobpost inner join r_reginfo on r_jobpost.r_id=r_reginfo.r_id where r_jobpost.j_id='$sid' ";
      //   $sel=mysqli_query($connect,$sql);
      //   while ($sel2=mysqli_fetch_assoc($sel)){
      //     // echo $sel2;
      //     $canD['rec_details'][]=$sel2;
      //     // echo json_encode($canD['rec'])
      //    $sql1 ="select distinct(rskill_name) from rec_skills where jpost_id= '$sid'";
      //   $result = $connect->query($sql1);
      //   if ($result->num_rows > 0) {
      //       while($recskills = $result->fetch_assoc()) {
      //    		$canD['rec_skills'][] = $recskills;
      //       }
      //   } 

      //   }

      // }

  // }

// }
//echo json_encode(array($canD['pskills']));
// echo json_encode(array($canD));



?>
