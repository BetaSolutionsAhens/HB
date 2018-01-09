
<!DOCTYPE html>
<html>
<head>
  <title></title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script type="text/javascript">

    function preventBack(){
      window.history.forward();
    }
    setTimeout("preventBack()",0);
    window.onunload=function(){null};
  </script>
</head>
<body>
<?php
session_start();
// session_destroy();
session_unset();
    session_destroy();
    header("location:../index.html");
  //    if(!isset($_SESSION['cand_id'])){
  //   echo "cand";
    
  // }
  // elseif (!isset($_SESSION['rec_id'])) {
  //  echo "rec";
  // }
  // else{
  //  echo "null";
  // }

?>
</body>
</html>
