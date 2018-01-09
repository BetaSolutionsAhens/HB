<?php
require_once('dbconfig.php');
// echo $_POST['compName'];
if(isset($_POST['compName']) && isset($_POST['j_id'])){
  $co_name=$_POST['compName'];
  // echo $co_name;
  $j_id=$_POST['j_id'];
  // echo $j_id;
  $can_id=$_POST['cid'];
  // echo $can_id;
  // echo $can_id;
  $sql = "select * from r_jobpost INNER JOIN r_reginfo on r_jobpost.r_id=r_reginfo.r_id where j_id='$j_id'";
  // echo $sql;
  $result = $connect->query($sql);

  if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {
        // $data[]=array("name"=>$row['r_fname'],"id"=>$row['r_id'],"job title"=>$row['j_title'],"job desc"=>$row['j_desc'],"exp required"=>$row['j_exp'],"salary"=>$row['j_salary']);
        $postDetails['details'][]=$row;
        $rec_id=$row['r_id'];
        $post_id=$row['j_id'];
        // select * from `rec_skills` inner join `rec_follow` on rec_skills.rec_id=rec_follow.rec_id where rec_skills.rec_id='9' and rec_follow.rec_id='9' and rec_follow.can_id='1' and rec_follow.j_id ='11'
        $sl="select distinct(rskill_name) from `rec_skills` where rec_skills.rec_id='$rec_id' and jpost_id='$post_id'";
        // echo $sl;
        $sk_sel=mysqli_query($connect,$sl);
        while($fet_skill=mysqli_fetch_assoc($sk_sel)){
          // $data[]=array("name"=>$fet_skill['rskill_name']);
          $postDetails['skills'][]=$fet_skill;
        }

      }
      echo json_encode(array($postDetails));
    }
}

?>
