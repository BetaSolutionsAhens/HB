<?php
// error_reporting(E_ALL);
error_reporting(0);
require_once('dbconfig.php');
session_start();
$rec_id=$_SESSION['rec_id'];
//echo $rec_id;
$jobid= $_POST['j_id'];
//$jobid = 11;
 //
$sl = "select distinct(rskill_name) from `rec_skills` where  `jpost_id` ='$jobid' and `rec_id` = '$rec_id'";
//echo $sl;
$rs = mysqli_query($connect,$sl);
while($dt=mysqli_fetch_assoc($rs)){
    // print_r( $dt['rskill_name']);
  if(isset($dt))
  {

    foreach($dt as $proj_skill)
    {
      $pj_skl=$proj_skill;
      //echo $pj_skl;
      $sl1="SELECT DISTINCT(proj_sk_uid) as psk_uid FROM `proj_skill` WHERE proj_sk_nm='".$pj_skl."'";
      //echo $sl1;
      $sl2 = "SELECT DISTINCT(g_sk_uid) as gsk_uid FROM `g_skill` WHERE g_sk_nm='".$pj_skl."'";
      //echo $sl2;
      $sk_chck_ps=mysqli_query($connect,$sl1);
      $sk_chck_gs=mysqli_query($connect,$sl2);
        while($fet_pr_sk=mysqli_fetch_assoc($sk_chck_ps))
        {
          $psk_uid=$fet_pr_sk['psk_uid'];
        $canDetails['pskills'][]=$psk_uid;
        $ckid['i'][]=$psk_uid;
         }
        while ($fet_gr_sk=mysqli_fetch_assoc($sk_chck_gs))
         {
        $gsk_id= $fet_gr_sk['gsk_uid'];
        $ckgid['i'][]=$gsk_id;
         }
         // print_r($ckid);
         // print_r($ckgid);
         $res_gk=array_diff($ckgid['i'],$ckid['i']);
          // print_r($res_gk);
          foreach($res_gk as $fin_id)
          {
                $canDetails['gskills'][]=$fin_id;
          }
        $psk_uid="";
       // print_r($canDetails);
        // print_r(array_unique($canDetails['gskills']));
        // print_r(array_unique($canDetails['pskills']));
        // SELECT * FROM proj_skill WHERE MATCH(proj_sk_nm) AGAINST('("html")("bootstrap")("css")("angularjs")' IN NATURAL LANGUAGE MODE)
        $pj_skill[]=$pj_skl;

    }
  }
}
    $encode= json_encode($pj_skill);
     //echo $encode;
     // echo json_encode($canDetails['pskills']);
    $order=array_unique($canDetails['pskills']);
    //echo json_encode($order);
    $last=end($order);
      foreach ($order as $key => $value)
      {
        if($value == $last)
        {
          $query_uni .= "select COUNT(DISTINCT(proj_sk_nm) ) as skill,proj_sk_uid FROM proj_skill WHERE MATCH(proj_sk_nm) AGAINST('$encode' IN NATURAL LANGUAGE MODE) AND proj_sk_uid='$value'  ";
        }else {
          $query_uni .= "select COUNT(DISTINCT(proj_sk_nm) ) as skill,proj_sk_uid FROM proj_skill WHERE MATCH(proj_sk_nm) AGAINST('$encode' IN NATURAL LANGUAGE MODE) AND proj_sk_uid='$value' UNION ";
        }
      }
      $final_sort_query_psk="select * from($query_uni) results order by skill desc";
    //  echo  " - .$final_sort_query_psk. -";
  //  print_r($final_sort_query_psk);
      // $result1 = $connect->query($final_sort_query_psk);
      $result1=mysqli_query($connect,$final_sort_query_psk);
      while($s_id = mysqli_fetch_assoc($result1)){

      $sid=$s_id['proj_sk_uid'];
     // echo $sid;
        $sql="select * from resume_status inner join c_log on c_log.cl_id=resume_status.cv_can_id inner join basic_info on basic_info.b_uid=resume_status.cv_can_id inner join edu_qf on edu_qf.e_uid=resume_status.cv_can_id where c_log.cl_id = ' $sid' limit 4  ";
        $sel=mysqli_query($connect,$sql);
        while ($sel2=mysqli_fetch_assoc($sel)){
         $sql1 ="select distinct(proj_sk_nm),cv_can_id from resume_status inner join proj_skill on proj_skill.proj_sk_uid = resume_status.cv_can_id where proj_skill.proj_sk_uid= '$sid'";
        // echo $sql1;

        $result = $connect->query($sql1);

        if ($result->num_rows > 0) {
            // output data of each row
            while($proSkills = $result->fetch_assoc()) {

         		$canD['pskills'][] = $proSkills;

            }
        } else {
            // echo "0 results";
        	$gskillsql= "select g_sk_nm,cv_can_id from resume_status inner join g_skill on g_skill.g_sk_uid = resume_status.cv_can_id where g_skill.g_sk_uid = '$sid' ";
        		$gsk=mysqli_query($connect, $gskillsql);
        		while($gsk1=mysqli_fetch_assoc($gsk)){
         			$canD['gskills'][] = $gsk1;
        	// echo $select2;
         		// $canDetails['skills'][]=$row['g_sk_nm'];
         	}

        }

          $canid = $sel2['cl_id'];

        $canD['canDetails'][] = $sel2;
         // }
          // echo $sel2;
          $sql3 ="select * from resume_status inner join exp on exp.ex_uid=resume_status.cv_can_id where exp.ex_uid = '$sid'";
          $expDetails=mysqli_query($connect,$sql3);
          while($expD = mysqli_fetch_assoc($expDetails)){
            $canD['expDetails'][]=$expD;
          }
          $sql4 ="select * from resume_status inner join fresher on fresher.fs_uid=resume_status.cv_can_id where exp.ex_uid = '$sid'";
          $freDetails=mysqli_query($connect,$sql4);
          while($freD = mysqli_fetch_assoc($freDetails)){
            $canD['freDetails'][]=$freD;
          }
        }

        // $sql5= "select * from qualification inner join resume_status on resume_status.cv_can_id=qualification.q_uid";
        // $qualDetails = mysqli_query($connect,$sql5);
        // while($qualD = mysqli_fetch_assoc($qualDetails)){
        //   $canDetails['qualification'][]=$qualD;
        // }
      }

  // }

// }
//echo json_encode(array($canD['pskills']));
echo json_encode(array($canD));



?>
