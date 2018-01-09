-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 13, 2017 at 01:10 PM
-- Server version: 5.6.11
-- PHP Version: 5.5.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `hawkeye`
--
CREATE DATABASE IF NOT EXISTS `hawkeye` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `hawkeye`;

-- --------------------------------------------------------

--
-- Table structure for table `basic_info`
--

CREATE TABLE IF NOT EXISTS `basic_info` (
  `b_id` int(11) NOT NULL AUTO_INCREMENT,
  `b_uid` int(11) NOT NULL,
  `b_pic` varchar(300) NOT NULL,
  `b_dob` varchar(100) NOT NULL,
  `b_gen` varchar(100) NOT NULL,
  `b_mstatus` varchar(100) NOT NULL,
  `b_loc` varchar(100) NOT NULL,
  PRIMARY KEY (`b_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `basic_info`
--

INSERT INTO `basic_info` (`b_id`, `b_uid`, `b_pic`, `b_dob`, `b_gen`, `b_mstatus`, `b_loc`) VALUES
(1, 1, 'Penguins.jpg', '17/January/2003', 'female', 'married', 'vskp'),
(2, 3, 'img12.jpg', '15/April/2000', 'male', 'single', 'vskp');

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE IF NOT EXISTS `cities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `state_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE IF NOT EXISTS `countries` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sortname` varchar(3) NOT NULL,
  `name` varchar(150) NOT NULL,
  `phonecode` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `c_l`
--

CREATE TABLE IF NOT EXISTS `c_l` (
  `log_id` int(11) NOT NULL AUTO_INCREMENT,
  `log_psw` varchar(100) NOT NULL,
  `log_un` varchar(100) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`log_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `c_l`
--

INSERT INTO `c_l` (`log_id`, `log_psw`, `log_un`, `status`) VALUES
(1, '123456', 'swaroopa@123', 0),
(2, 'sowji123', 'sowjanya@betasolutions.in', 0),
(3, '123456', 'vamsi@betasolutions.in', 0);

-- --------------------------------------------------------

--
-- Table structure for table `c_log`
--

CREATE TABLE IF NOT EXISTS `c_log` (
  `cl_id` int(11) NOT NULL AUTO_INCREMENT,
  `cl_phn` varchar(15) NOT NULL,
  `cl_pwd` varchar(100) NOT NULL,
  `cl_time` datetime NOT NULL,
  `cl_status` varchar(100) NOT NULL,
  `cl_n` varchar(100) NOT NULL,
  `cl_em` varchar(100) NOT NULL,
  `cl_un` varchar(100) NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`cl_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `c_log`
--

INSERT INTO `c_log` (`cl_id`, `cl_phn`, `cl_pwd`, `cl_time`, `cl_status`, `cl_n`, `cl_em`, `cl_un`, `status`) VALUES
(1, '1234567890', '123456', '2017-11-10 07:40:56', 'i agree', 'swaroopa', 'swaroopa@123', 'swaroopa', 1),
(2, '9876543210', 'sowji123', '2017-11-13 12:53:34', 'i agree', 'sowjanya', 'sowjanya@betasolutions.in', 'sowji', 0),
(3, '1234567890', '123456', '2017-11-13 12:55:06', 'i agree', 'vamsi', 'vamsi@betasolutions.in', 'vamsi', 1);

-- --------------------------------------------------------

--
-- Table structure for table `edu_qf`
--

CREATE TABLE IF NOT EXISTS `edu_qf` (
  `e_id` int(11) NOT NULL AUTO_INCREMENT,
  `e_uid` int(11) NOT NULL,
  `e_ind` varchar(100) NOT NULL,
  `e_cn_type` varchar(100) NOT NULL,
  PRIMARY KEY (`e_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `edu_qf`
--

INSERT INTO `edu_qf` (`e_id`, `e_uid`, `e_ind`, `e_cn_type`) VALUES
(1, 1, 'it', 'fre'),
(2, 3, 'it', 'exp');

-- --------------------------------------------------------

--
-- Table structure for table `exp`
--

CREATE TABLE IF NOT EXISTS `exp` (
  `ex_id` int(11) NOT NULL AUTO_INCREMENT,
  `ex_cc` varchar(100) NOT NULL,
  `ex_uid` int(11) NOT NULL,
  `ex_desc` varchar(100) NOT NULL,
  `ex_cjob_type` varchar(100) NOT NULL,
  `ex_prefjob_type` varchar(100) NOT NULL,
  `ex_c_comp` varchar(100) NOT NULL,
  `ex_exp_comps` varchar(100) NOT NULL,
  `ex_years` int(11) NOT NULL,
  PRIMARY KEY (`ex_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `exp`
--

INSERT INTO `exp` (`ex_id`, `ex_cc`, `ex_uid`, `ex_desc`, `ex_cjob_type`, `ex_prefjob_type`, `ex_c_comp`, `ex_exp_comps`, `ex_years`) VALUES
(1, 'betasolutions', 3, 'senior developer', 'experienced', 'experienced', '20000', '25000', 3);

-- --------------------------------------------------------

--
-- Table structure for table `exp_project`
--

CREATE TABLE IF NOT EXISTS `exp_project` (
  `pj_id` int(11) NOT NULL AUTO_INCREMENT,
  `pj_uid` int(11) NOT NULL,
  `pj_nm` varchar(100) NOT NULL,
  `pj_domaim` varchar(100) NOT NULL,
  `pj_client` varchar(100) NOT NULL,
  `pj_duration` varchar(100) NOT NULL,
  `pj_role` varchar(100) NOT NULL,
  `pj_skill` varchar(100) NOT NULL,
  PRIMARY KEY (`pj_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `exp_project`
--

INSERT INTO `exp_project` (`pj_id`, `pj_uid`, `pj_nm`, `pj_domaim`, `pj_client`, `pj_duration`, `pj_role`, `pj_skill`) VALUES
(1, 3, 'project_he', 'www.he.com', 'he client', '3 months', 'developer', '');

-- --------------------------------------------------------

--
-- Table structure for table `fresher`
--

CREATE TABLE IF NOT EXISTS `fresher` (
  `fs_id` int(11) NOT NULL AUTO_INCREMENT,
  `fs_uid` int(11) NOT NULL,
  `fs_proj_nm` varchar(100) NOT NULL,
  `fs_proj_desc` varchar(1000) NOT NULL,
  `fs_w_nm` varchar(100) NOT NULL,
  `fs_w_desc` varchar(1000) NOT NULL,
  `fs_part` varchar(1000) NOT NULL,
  PRIMARY KEY (`fs_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `fresher`
--

INSERT INTO `fresher` (`fs_id`, `fs_uid`, `fs_proj_nm`, `fs_proj_desc`, `fs_w_nm`, `fs_w_desc`, `fs_part`) VALUES
(1, 1, 'project1', 'project_desc', 'workshop1', 'worksho desxc', 'presentetion1');

-- --------------------------------------------------------

--
-- Table structure for table `f_p`
--

CREATE TABLE IF NOT EXISTS `f_p` (
  `f_id` int(11) NOT NULL AUTO_INCREMENT,
  `f_uid` varchar(100) NOT NULL,
  `f_em` varchar(100) NOT NULL,
  PRIMARY KEY (`f_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `g_skill`
--

CREATE TABLE IF NOT EXISTS `g_skill` (
  `g_sk_id` int(11) NOT NULL AUTO_INCREMENT,
  `g_sk_uid` int(11) NOT NULL,
  `g_sk_nm` varchar(100) NOT NULL,
  PRIMARY KEY (`g_sk_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `g_skill`
--

INSERT INTO `g_skill` (`g_sk_id`, `g_sk_uid`, `g_sk_nm`) VALUES
(1, 1, 'html'),
(2, 1, 'css'),
(3, 1, 'bootstrap'),
(4, 3, 'html'),
(5, 3, 'java'),
(6, 3, 'css'),
(7, 3, 'ajax'),
(8, 3, 'javascript'),
(9, 3, 'json');

-- --------------------------------------------------------

--
-- Table structure for table `pref_loc`
--

CREATE TABLE IF NOT EXISTS `pref_loc` (
  `pref_loc_id` int(11) NOT NULL AUTO_INCREMENT,
  `pref_loc_uid` int(11) NOT NULL,
  `pref_loc_name` varchar(100) NOT NULL,
  PRIMARY KEY (`pref_loc_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `pref_loc`
--

INSERT INTO `pref_loc` (`pref_loc_id`, `pref_loc_uid`, `pref_loc_name`) VALUES
(1, 1, 'hyderabad'),
(2, 1, 'chennai'),
(3, 3, 'hyderabad'),
(4, 3, 'chennai');

-- --------------------------------------------------------

--
-- Table structure for table `proj_skill`
--

CREATE TABLE IF NOT EXISTS `proj_skill` (
  `proj_sk_id` int(11) NOT NULL AUTO_INCREMENT,
  `proj_sk_uid` int(11) NOT NULL,
  `proj_sk_nm` varchar(100) NOT NULL,
  PRIMARY KEY (`proj_sk_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `proj_skill`
--

INSERT INTO `proj_skill` (`proj_sk_id`, `proj_sk_uid`, `proj_sk_nm`) VALUES
(1, 3, 'ajax'),
(2, 3, 'html'),
(3, 3, 'css'),
(4, 3, 'bootstrap'),
(5, 3, 'php'),
(6, 3, 'javascript'),
(7, 3, 'jquery'),
(8, 3, 'json');

-- --------------------------------------------------------

--
-- Table structure for table `qualification`
--

CREATE TABLE IF NOT EXISTS `qualification` (
  `q_id` int(11) NOT NULL AUTO_INCREMENT,
  `q_uid` int(11) NOT NULL,
  `q_qual` varchar(100) NOT NULL,
  `q_cs` varchar(100) NOT NULL,
  `q_spz` varchar(100) NOT NULL,
  `q_ctype` varchar(100) NOT NULL,
  `q_mks` int(11) NOT NULL,
  `q_yr` int(11) NOT NULL,
  `q_inst` varchar(100) NOT NULL,
  PRIMARY KEY (`q_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `qualification`
--

INSERT INTO `qualification` (`q_id`, `q_uid`, `q_qual`, `q_cs`, `q_spz`, `q_ctype`, `q_mks`, `q_yr`, `q_inst`) VALUES
(1, 1, 'SSc', 'ghfg', 'fghf', 'hjghj', 0, 675, 'hjgj'),
(2, 3, 'ssc', 'ssc', 'ssc', 'regular', 98, 2000, 'abcd');

-- --------------------------------------------------------

--
-- Table structure for table `rec_skills`
--

CREATE TABLE IF NOT EXISTS `rec_skills` (
  `rskill_id` int(11) NOT NULL AUTO_INCREMENT,
  `rskill_name` varchar(111) NOT NULL,
  `rec_id` int(11) NOT NULL,
  PRIMARY KEY (`rskill_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `rec_skills`
--

INSERT INTO `rec_skills` (`rskill_id`, `rskill_name`, `rec_id`) VALUES
(1, 'css', 9),
(2, 'html', 9),
(3, 'bootstrap', 9),
(4, 'php', 9);

-- --------------------------------------------------------

--
-- Table structure for table `resume_status`
--

CREATE TABLE IF NOT EXISTS `resume_status` (
  `cv_jb_id` int(11) DEFAULT NULL,
  `cv_can_id` int(11) DEFAULT NULL,
  `jb_applied` int(1) NOT NULL DEFAULT '0',
  `cv_saveltr` int(1) NOT NULL DEFAULT '0',
  `cv_shortlisted` int(1) NOT NULL DEFAULT '0',
  `cv_suggested` int(1) NOT NULL DEFAULT '0',
  `cv_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`cv_id`),
  KEY `cv_jb_id` (`cv_jb_id`),
  KEY `cv_can_id` (`cv_can_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `resume_status`
--

INSERT INTO `resume_status` (`cv_jb_id`, `cv_can_id`, `jb_applied`, `cv_saveltr`, `cv_shortlisted`, `cv_suggested`, `cv_id`) VALUES
(11, 1, 1, 0, 0, 0, 1),
(11, 3, 1, 0, 0, 0, 2);

-- --------------------------------------------------------

--
-- Table structure for table `r_jobpost`
--

CREATE TABLE IF NOT EXISTS `r_jobpost` (
  `j_id` int(111) NOT NULL AUTO_INCREMENT,
  `j_title` varchar(111) DEFAULT NULL,
  `j_desc` varchar(111) DEFAULT NULL,
  `j_exp` varchar(111) DEFAULT NULL,
  `j_salary` varchar(111) DEFAULT NULL,
  `r_id` int(111) DEFAULT NULL,
  PRIMARY KEY (`j_id`),
  KEY `r_id` (`r_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `r_jobpost`
--

INSERT INTO `r_jobpost` (`j_id`, `j_title`, `j_desc`, `j_exp`, `j_salary`, `r_id`) VALUES
(11, 'PHP DEVELOPER', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore m', '1-2', '2L', 9);

-- --------------------------------------------------------

--
-- Table structure for table `r_jobskills`
--

CREATE TABLE IF NOT EXISTS `r_jobskills` (
  `js_id` int(111) NOT NULL AUTO_INCREMENT,
  `j_id` int(111) DEFAULT NULL,
  `r_id` int(111) DEFAULT NULL,
  `j_skill` varchar(111) DEFAULT NULL,
  PRIMARY KEY (`js_id`),
  KEY `r_id` (`r_id`),
  KEY `j_id` (`j_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `r_reginfo`
--

CREATE TABLE IF NOT EXISTS `r_reginfo` (
  `r_id` int(111) NOT NULL AUTO_INCREMENT,
  `r_fname` varchar(111) DEFAULT NULL,
  `r_uname` varchar(111) DEFAULT NULL,
  `r_mobile` varchar(15) DEFAULT NULL,
  `r_landline` varchar(15) DEFAULT NULL,
  `r_mail` varchar(111) DEFAULT NULL,
  `r_altmail` varchar(111) DEFAULT NULL,
  `r_pswd` varchar(111) DEFAULT NULL,
  `r_compname` varchar(111) DEFAULT NULL,
  `r_desgn` varchar(111) DEFAULT NULL,
  `r_inds` varchar(111) DEFAULT NULL,
  `r_country` varchar(111) DEFAULT NULL,
  `r_state` varchar(111) DEFAULT NULL,
  `r_city` varchar(111) DEFAULT NULL,
  `r_pincode` int(10) DEFAULT NULL,
  `r_status` int(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`r_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `r_reginfo`
--

INSERT INTO `r_reginfo` (`r_id`, `r_fname`, `r_uname`, `r_mobile`, `r_landline`, `r_mail`, `r_altmail`, `r_pswd`, `r_compname`, `r_desgn`, `r_inds`, `r_country`, `r_state`, `r_city`, `r_pincode`, `r_status`) VALUES
(9, 'Rajesh Reddy', 'Rajesh', '9010460780', '2781166', 'rajesh@betasolution.in', 'stevejobs1024@gmail.com', '123456', 'betasolutions', 'CEO', 'IT', '', '', '', 530041, 0);

-- --------------------------------------------------------

--
-- Table structure for table `states`
--

CREATE TABLE IF NOT EXISTS `states` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `country_id` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `resume_status`
--
ALTER TABLE `resume_status`
  ADD CONSTRAINT `resume_status_ibfk_1` FOREIGN KEY (`cv_jb_id`) REFERENCES `r_jobpost` (`j_id`),
  ADD CONSTRAINT `resume_status_ibfk_2` FOREIGN KEY (`cv_can_id`) REFERENCES `c_log` (`cl_id`);

--
-- Constraints for table `r_jobpost`
--
ALTER TABLE `r_jobpost`
  ADD CONSTRAINT `r_jobpost_ibfk_1` FOREIGN KEY (`r_id`) REFERENCES `r_reginfo` (`r_id`);

--
-- Constraints for table `r_jobskills`
--
ALTER TABLE `r_jobskills`
  ADD CONSTRAINT `r_jobskills_ibfk_1` FOREIGN KEY (`r_id`) REFERENCES `r_reginfo` (`r_id`),
  ADD CONSTRAINT `r_jobskills_ibfk_2` FOREIGN KEY (`j_id`) REFERENCES `r_jobpost` (`j_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
