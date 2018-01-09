  <?php
  require_once('dbconfig.php');
  session_start();
  $rec_id=$_SESSION['rec_id'];
  // echo $rec_id;
  $skillSearch= $_POST['skills'];
  // echo $skillSearch;

$can_details=mysqli_query($connect,"select * from resume_status inner join c_log on c_log.cl_id=resume_status.cv_can_id inner join basic_info on basic_info.b_uid=resume_status.cv_can_id inner join edu_qf on edu_qf.e_uid=resume_status.cv_can_id");
while($can_details2=mysqli_fetch_assoc()){
  foreach($skillSearch as $proj_skill){
    $pj_skl=$proj_skill;
    // echo $pj_skl;
    if($can_details2['e_cn_type']=="exp"){
      $sel_pj_sk=mysqli_query($connect,"select * from proj_skill where `proj_sk_uid`='$can_details2[cv_can_id]' and proj_sk_nm like '%$pj_skil%'");
      echo $sel_pj_sk;
      while($sel_pj_sk2=mysqli_fetch_assoc()){
        // echo $sel_pj_sk2['proj_sk_nm'];
      }
    }
    else{
      // echo "fresher"
    }
    // $sel_sk=mysqli_query($connect,"select * from proj_skill where ")
  }

}

  // echo $skillSearch;

    // $sql ="SELECT distinct(proj_sk_uid) FROM `proj_skill` WHERE `proj_sk_nm` IN('".$pj_skl."') ";
    // // echo $sql;
    // $result1 = $connect->query($sql);
    //
    // if ($result1->num_rows > 0) {
    //     // output data of each row
    //     while($ps = $result1->fetch_assoc()) {
    //       $GLOBALS['sk'] = $ps['proj_sk_uid'];
    //
    //       echo $sk;
    //
    //     }
    // } else {
    //     echo "0 results";
    //
    //
    //
    // }



  // echo "hi";
  // $canDetails=array();
  // $canDetails1=array();
  //
  // $canDetails2=array();


  // $sel=mysqli_query($connect,"select * from resume_status inner join r_jobpost on resume_status.cv_jb_id=r_jobpost.j_id inner join c_log on c_log.cl_id=resume_status.cv_can_id inner join basic_info on basic_info.b_uid=resume_status.cv_can_id inner join edu_qf on edu_qf.e_uid=resume_status.cv_can_id inner join qualification on qualification.q_uid=resume_status.cv_can_id where r_jobpost.r_id='$rec_id'");

  // $sql="select * from resume_status inner join c_log on c_log.cl_id=resume_status.cv_can_id inner join basic_info on basic_info.b_uid=resume_status.cv_can_id inner join edu_qf on edu_qf.e_uid=resume_status.cv_can_id ";
  // $sel=mysqli_query($connect,$sql);
  // while ($sel2=mysqli_fetch_assoc($sel)){
  //  $sql1 ="select distinct(proj_sk_nm),cv_can_id from resume_status inner join proj_skill on proj_skill.proj_sk_uid = resume_status.cv_can_id where proj_skill.proj_sk_uid='$sel2[cl_id]'";
  // // echo $sql1;
  //
  // $result = $connect->query($sql1);
  //
  // if ($result->num_rows > 0) {
  //     // output data of each row
  //     while($proSkills = $result->fetch_assoc()) {
  //
  //  		$canDetails['pskills'][] = $proSkills;
  //
  //     }
  // } else {
  //     // echo "0 results";
  // 	$gskillsql= "select g_sk_nm,cv_can_id from resume_status inner join g_skill on g_skill.g_sk_uid = resume_status.cv_can_id where g_skill.g_sk_uid = '$sel2[cl_id]' ";
  // 		$gsk=mysqli_query($connect, $gskillsql);
  // 		while($gsk1=mysqli_fetch_assoc($gsk)){
  //  			$canDetails['gskills'][] = $gsk1;
  // 	// echo $select2;
  //  		// $canDetails['skills'][]=$row['g_sk_nm'];
  //  	}
  //
  // }
  //
  //   $canid = $sel2['cl_id'];
  //
  // $canDetails['canDetails'][] = $sel2;
  //  // }
  //   // echo $sel2;
  //
  // }
  // $sql3 ="select * from resume_status inner join exp on exp.ex_uid=resume_status.cv_can_id";
  // $expDetails=mysqli_query($connect,$sql3);
  // while($expD = mysqli_fetch_assoc($expDetails)){
  //   $canDetails['expDetails'][]=$expD;
  // }
  // $sql4 ="select * from resume_status inner join fresher on fresher.fs_uid=resume_status.cv_can_id";
  // $freDetails=mysqli_query($connect,$sql4);
  // while($freD = mysqli_fetch_assoc($freDetails)){
  //   $canDetails['freDetails'][]=$freD;
  // }
  // $sql5= "select * from qualification inner join resume_status on resume_status.cv_can_id=qualification.q_uid";
  // $qualDetails = mysqli_query($connect,$sql5);
  // while($qualD = mysqli_fetch_assoc($qualDetails)){
  //   $canDetails['qualification'][]=$qualD;
  // }
  // echo json_encode(array($canDetails));
  // echo json_encode($canDetails1);
  // echo json_encode($canDetails2);


  ?>
