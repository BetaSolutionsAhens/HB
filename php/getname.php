  <?php
require_once('dbconfig.php');
session_start();
$rec_id=$_SESSION['cand_id'];
$rec_nm="select * from c_log where cl_id=$rec_id";
$can=$connect->query($rec_nm);
if($can->num_rows > 0){
  $can_sel=$can->fetch_assoc();
  $can_nm[]=array("candidate_name"=>$can_sel['cl_n'],"cid"=>$can_sel['cl_id']);
}
echo json_encode($can_nm);
?>
