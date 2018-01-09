<?php

// error_reporting(E_ALL);

error_reporting(0);
require_once ('dbconfig.php');

session_start();
$rec_id = $_SESSION['rec_id'];
$skillSearch = $_POST['skills'];

if (isset($skillSearch))
{
  foreach($skillSearch as $proj_skill)
  {
    $pj_skl = $proj_skill;
    $sk_chck_ps = mysqli_query($connect, "SELECT DISTINCT(proj_sk_uid) as psk_uid FROM `proj_skill` WHERE proj_sk_nm='" . $pj_skl . "'");
    $sk_chck_gs = mysqli_query($connect, "SELECT DISTINCT(g_sk_uid) as gsk_uid FROM `g_skill` WHERE g_sk_nm='" . $pj_skl . "'");
    while ($fet_pr_sk = mysqli_fetch_assoc($sk_chck_ps))
    {
      $psk_uid = $fet_pr_sk['psk_uid'];
      $canDetails['pskills'][] = $psk_uid;
      $ckid['i'][] = $psk_uid;
    }

    while ($fet_gr_sk = mysqli_fetch_assoc($sk_chck_gs))
    {
      $gsk_id = $fet_gr_sk['gsk_uid'];
      $ckgid['i'][] = $gsk_id;
    }

    $res_gk = array_diff($ckgid['i'], $ckid['i']);

    // print_r($res_gk);

    foreach($res_gk as $fin_id)
    {
      $canDetails['gskills'][] = $fin_id;
    }

    $psk_uid = "";
    $pj_skill[] = $pj_skl;
  }

  $encode = json_encode($pj_skill);
  $order = array_unique($canDetails['pskills']);
  $order2 = array_unique($canDetails['gskills']);
  $last = end($order);
  $last2 = end($order2);
  foreach($order as $key => $value)
  {
    if ($value == $last)
    {
      $query_uni.= "select COUNT(DISTINCT(proj_sk_nm) ) as skill,proj_sk_uid FROM proj_skill WHERE MATCH(proj_sk_nm) AGAINST('$encode' IN NATURAL LANGUAGE MODE) AND proj_sk_uid='$value'  ";
    }
    else
    {
      $query_uni.= "select COUNT(DISTINCT(proj_sk_nm) ) as skill,proj_sk_uid FROM proj_skill WHERE MATCH(proj_sk_nm) AGAINST('$encode' IN NATURAL LANGUAGE MODE) AND proj_sk_uid='$value' UNION ";
    }
  }

  $final_sort_query_psk = "select * from($query_uni) results order by skill desc";

  // echo $final_sort_query_psk;
  // $result1 = $connect->query($final_sort_query_psk);

  $result1 = mysqli_query($connect, $final_sort_query_psk);
  while ($s_id = mysqli_fetch_assoc($result1))
  {
    $sid = $s_id['proj_sk_uid'];
    $sql = "select * from c_log inner join basic_info on basic_info.b_uid=c_log.cl_id inner join edu_qf on edu_qf.e_uid=c_log.cl_id inner join exp on c_log.cl_id=exp.ex_uid where c_log.cl_id = ' $sid' limit 4 ";
    $sel = mysqli_query($connect, $sql);
    while ($sel2 = mysqli_fetch_assoc($sel))
    {
      $sql1 = "select distinct(proj_sk_nm),proj_sk_uid from proj_skill where proj_sk_uid= '$sid'";

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

      $canid = $sel2['cl_id'];
      $canD['canDetails'][] = $sel2;
      $sel_location1=mysqli_query($connect,"select * from pref_loc where pref_loc_uid='$sid'");
    while($fet_loc1=mysqli_fetch_assoc($sel_location1)){
      $canD['plocation'][]=$fet_loc1;
    }
    }

    // }
    // echo $sel2;

    $sql3 = "select * from exp where ex_uid = '$sid'";
    $expDetails = mysqli_query($connect, $sql3);
    while ($expD = mysqli_fetch_assoc($expDetails))
    {
      $canD['expDetails'][] = $expD;
    }
  }
  foreach($order2 as $key2 => $value2)
  {
    if ($value2 == $last2)
    {
      $query_uni2.= "select COUNT(DISTINCT(g_sk_nm) ) as gskill,g_sk_uid FROM g_skill WHERE MATCH(g_sk_nm) AGAINST('$encode' IN NATURAL LANGUAGE MODE) AND g_sk_uid='$value2'  ";
    }
    else
    {
      $query_uni2.= "select COUNT(DISTINCT(g_sk_nm) ) as gskill,g_sk_uid FROM g_skill WHERE MATCH(g_sk_nm) AGAINST('$encode' IN NATURAL LANGUAGE MODE) AND g_sk_uid='$value2' UNION ";
    }
  }

  $final_sort_query_psk2 = "select * from($query_uni2) results order by gskill desc";
  $results1 = mysqli_query($connect, $final_sort_query_psk2);

  while ($s_id2 = mysqli_fetch_assoc($results1))
  {
    $sid2 = $s_id2['g_sk_uid'];
    $sql2 = "select * from c_log inner join basic_info on basic_info.b_uid=c_log.cl_id inner join edu_qf on edu_qf.e_uid=c_log.cl_id where c_log.cl_id = '$sid2' limit 4 ";
    $sel2 = mysqli_query($connect, $sql2);
    while ($sel3 = mysqli_fetch_assoc($sel2))
    {
      $sql3 = "select distinct(g_sk_nm),g_sk_uid from g_skill where g_sk_uid= '$sid2'";
      $results2 = $connect->query($sql3);
      if ($results2->num_rows > 0)
      {
        while ($genSkills = $results2->fetch_assoc())
        {
          $canD['cgenskills'][] = $genSkills;
        }
      }

      $canid2 = $sel3['cl_id'];
      $canD['gencanDetails'][] = $sel3;
    }

    $sql5 = "select * from fresher where fs_uid = '$sid2'";
    $freDetails2 = mysqli_query($connect, $sql5);
    while ($freDet = mysqli_fetch_assoc($freDetails2))
    {
      $canD['freDetails'][] = $freDet;
    }
    $sel_location=mysqli_query($connect,"select * from pref_loc where pref_loc_uid='$sid2'");
    while($fet_loc=mysqli_fetch_assoc($sel_location)){
      $canD['flocation'][]=$fet_loc;
    }
  }

  $sel_status=mysqli_query($connect,"select * from resume_status where cv_shortlisted='1'");
  while($fet_status=mysqli_fetch_assoc($sel_status)){
    $canD['status'][]=$fet_status;
  }

  echo json_encode(array($canD));
}

?>





  

 
 

 

 
 
