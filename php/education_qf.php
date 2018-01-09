<?php include("dbconfig.php");
session_start();
$us_id=$_SESSION['cand_id'];
echo $us_id;
?>

<!DOCTYPE html>
<html lang="en">
    <head>

        <!-- Title -->
         <title>Alpha | Responsive Admin Dashboard Template</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
        <meta charset="UTF-8">
        <meta name="description" content="Responsive Admin Dashboard Template" />
        <meta name="keywords" content="admin,dashboard" />
        <meta name="author" content="Steelcoders" />

        <!-- Styles -->
        <!-- <link type="text/css" rel="stylesheet" href="assets/plugins/materialize/css/materialize.min.css"/> -->
       <!--  <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href="assets/plugins/material-preloader/css/materialPreloader.min.css" rel="stylesheet">
        <link href="assets/plugins/datatables/css/jquery.dataTables.min.css" rel="stylesheet">
 -->

        <!-- Theme Styles -->
<!--         <link href="assets/css/alpha.min.css" rel="stylesheet" type="text/css"/>
 -->
 <!-- <link href="assets/css/custom.css" rel="stylesheet" type="text/css"/> -->

    </head>
    <body>
      <?php //echo $_SESSION['cand_id']?>

        <div class="mn-content fixed-sidebar" id="abc">

            <main class="mn-inner">
                <div class="row" id="tbl">
                    <div class="col s12">
                        <div class="page-title">Course</div>
                    </div>

                    <div class="col s12 m12 l12">
                        <div class="card">
                            <div class="card-content">

                                <table>
                                    <thead>
                                        <tr>
                                            <th data-field="id">S.No</th>
                                            <th data-field="name">Qualification</th>
                                            <th data-field="price">Course</th>
                                             <th data-field="name">Specialization</th>
                                              <th data-field="name">Course Type</th>
                                               <th data-field="name">Marks</th>
                                                <th data-field="name">Passing Year</th>
                                                 <th data-field="name">Institute</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <?php
                                    $count=0;
                                    $sel=mysqli_query($connect,"select * from qualification where `q_uid`='$us_id'");
                                    while($sel2=mysqli_fetch_array($sel)){
                                    ?>
                                        <tr>
                                            <td><?php echo ++$count;?></td>
                                            <td><?php echo $sel2['q_qual'];?></td>
                                            <td><?php echo $sel2['q_cs'];?></td>
                                            <td><?php echo $sel2['q_spz'];?></td>
                                            <td><?php echo $sel2['q_ctype'];?></td>
                                            <td><?php echo $sel2['q_mks'];?></td>
                                            <td><?php echo $sel2['q_yr'];?></td>
                                            <td><?php echo $sel2['q_inst'];?></td>
                                        </tr>
                                        <?php }?>
                                    </tbody>
                                </table>
                            </div>
                        </div>


                    </div>

                </div>
            </main>
           </div>


           <!-- project fresher -->


           <div class="mn-content fixed-sidebar" id="proj_fsh">

            <main class="mn-inner">
                <div class="row" id="tbl">
                    <div class="col s12">
                        <div class="page-title">Course</div>
                    </div>

                    <div class="col s12 m12 l12">
                        <div class="card">
                            <div class="card-content">

                                <table>
                                    <thead>
                                        <tr>
                                            <th data-field="id">S.No</th>
                                            <th data-field="name">Project Name</th>
                                            <th data-field="price">Project Desc</th>
                                             <th data-field="name">Workshop</th>
                                              <th data-field="name">Workshop Description</th>
                                               <th data-field="name">Presentation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <?php
                                    $count=0;
                                    $sel3=mysqli_query($connect,"select * from fresher where `fs_uid`='$us_id'");
                                    while($sel4=mysqli_fetch_array($sel3)){
                                    ?>
                                        <tr>
                                            <td><?php echo ++$count;?></td>
                                            <td><?php echo $sel4['fs_proj_nm'];?></td>
                                            <td><?php echo $sel4['fs_proj_desc'];?></td>
                                            <td><?php echo $sel4['fs_w_nm'];?></td>
                                            <td><?php echo $sel4['fs_w_desc'];?></td>
                                            <td><?php echo $sel4['fs_part'];?></td>
                                        </tr>
                                        <?php }?>
                                    </tbody>
                                </table>
                            </div>
                        </div>


                    </div>

                </div>
            </main>
           </div>




           <div class="mn-content fixed-sidebar" id="proj_exp">

            <main class="mn-inner">
                <div class="row" id="tbl">
                    <div class="col s12">
                        <div class="page-title">Exp Project</div>
                    </div>

                    <div class="col s12 m12 l12">
                        <div class="card">
                            <div class="card-content">

                                <table>
                                    <thead>
                                        <tr>
                                            <th data-field="id">S.No</th>
                                            <th data-field="name">Project Name</th>
                                            <th data-field="price">Domain</th>
                                             <th data-field="name">Client</th>
                                              <th data-field="name">Project Duration</th>
                                               <th data-field="name">Role inProject</th>
                                               <th>Skills</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <?php
                                    $count=0;
                                    $sel5=mysqli_query($connect,"select * from exp_project where `pj_uid`='$us_id'");
                                    while($sel6=mysqli_fetch_array($sel5)){
                                    ?>
                                        <tr>
                                            <td><?php echo ++$count;?></td>
                                            <td><?php echo $sel6['pj_nm'];?></td>
                                            <td><?php echo $sel6['pj_domaim'];?></td>
                                            <td><?php echo $sel6['pj_client'];?></td>
                                            <td><?php echo $sel6['pj_duration'];?></td>
                                            <td><?php echo $sel6['pj_role'];?></td>
                                            <td><?php echo $sel6['pj_skill'];?></td>
                                        </tr>
                                        <?php }?>
                                    </tbody>
                                </table>
                            </div>
                        </div>


                    </div>

                </div>
            </main>
           </div>


       <!--  <script src="assets/plugins/jquery/jquery-2.2.0.min.js"></script>
        <script src="assets/plugins/materialize/js/materialize.min.js"></script>
        <script src="assets/plugins/material-preloader/js/materialPreloader.min.js"></script>
        <script src="assets/plugins/jquery-blockui/jquery.blockui.js"></script>
        <script src="assets/plugins/datatables/js/jquery.dataTables.min.js"></script>
        <script src="assets/js/alpha.min.js"></script>
        <script src="assets/js/pages/table-data.js"></script> -->
    </body>
</html>
