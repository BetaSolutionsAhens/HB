-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 11, 2017 at 08:58 PM
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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `basic_info`
--

INSERT INTO `basic_info` (`b_id`, `b_uid`, `b_pic`, `b_dob`, `b_gen`, `b_mstatus`, `b_loc`) VALUES
(1, 1, 'Penguins.jpg', '17/January/2003', 'female', 'married', 'vskp'),
(2, 3, 'img12.jpg', '15/April/2000', 'male', 'single', 'vskp'),
(4, 2, 'WIN_20171117_211917.JPG', '13/July/1997', 'female', 'single', 'anakapalli'),
(5, 4, 'Tulips.jpg', '2/May/1996', 'female', 'single', 'visakhapatnam'),
(6, 5, 'Lighthouse.jpg', '15/January/1997', 'female', 'single', 'aarilova'),
(7, 6, 'WIN_20171117_211841.JPG', '16/September/1999', 'female', 'single', 'srikakulam');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `c_l`
--

INSERT INTO `c_l` (`log_id`, `log_psw`, `log_un`, `status`) VALUES
(1, '123456', 'swaroopa@123', 0),
(2, 'sowji123', 'sowjanya@betasolutions.in', 0),
(3, '123456', 'vamsi@betasolutions.in', 0),
(4, '123456', 'swara@betasolutions.in', 0),
(5, '123456', 'chandu@gmail.com', 0),
(6, '123456', 'sanju@mail.com', 0);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `c_log`
--

INSERT INTO `c_log` (`cl_id`, `cl_phn`, `cl_pwd`, `cl_time`, `cl_status`, `cl_n`, `cl_em`, `cl_un`, `status`) VALUES
(1, '1234567890', '123456', '2017-11-10 07:40:56', 'i agree', 'swaroopa', 'swaroopa@123', 'swaroopa', 1),
(2, '9876543210', 'sowji123', '2017-11-13 12:53:34', 'i agree', 'sowjanya', 'sowjanya@betasolutions.in', 'sowji', 1),
(3, '1234567890', '123456', '2017-11-13 12:55:06', 'i agree', 'vamsi', 'vamsi@betasolutions.in', 'vamsi', 1),
(4, '1234567890', '123456', '2017-11-20 08:58:56', 'i agree', 'swara', 'swara@betasolutions.in', 'swara', 1),
(5, '8897708152', '123', '2017-11-21 08:34:54', 'i agree', 'chandu', 'chandu@gmail.com', 'chandu', 1),
(6, '1234567890', '123456', '2017-12-01 08:39:00', 'i agree', 'sanjana', 'sanju@mail.com', 'sanju', 1);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `edu_qf`
--

INSERT INTO `edu_qf` (`e_id`, `e_uid`, `e_ind`, `e_cn_type`) VALUES
(1, 1, 'it', 'fre'),
(2, 3, 'it', 'exp'),
(4, 2, 'it', 'exp'),
(5, 4, 'it', 'exp'),
(6, 5, 'it', 'fre'),
(7, 6, 'it', 'exp');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `exp`
--

INSERT INTO `exp` (`ex_id`, `ex_cc`, `ex_uid`, `ex_desc`, `ex_cjob_type`, `ex_prefjob_type`, `ex_c_comp`, `ex_exp_comps`, `ex_years`) VALUES
(1, 'betasolutions', 3, 'senior developer', 'experienced', 'experienced', '20000', '25000', 3),
(2, 'betasolutions', 2, 'senior developer', 'experienced', 'experienced', '3L', '4L', 3),
(3, 'betasolutions', 4, 'senior developer', 'experienced', 'experienced', '2L', '3L', 1),
(4, 'betasolutions', 6, 'web developer', 'experienced', 'experienced', '1.5 L', '2L', 2);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `exp_project`
--

INSERT INTO `exp_project` (`pj_id`, `pj_uid`, `pj_nm`, `pj_domaim`, `pj_client`, `pj_duration`, `pj_role`, `pj_skill`) VALUES
(1, 3, 'project_he', 'www.he.com', 'he client', '3 months', 'developer', ''),
(4, 2, 'project 1', 'www.proj1.com', 'proj 1 client', '3 months', 'back end developer', ''),
(5, 2, 'HeartN', 'www.heartn.org', 'ravi', '6 months', 'full stack developer', ''),
(6, 4, 'goldmax', 'www.goldmax.16mb.com', 'goldmax', '2 months', 'full stack developer', ''),
(7, 4, 'mymultisolutions', 'www.mymultisolutions.com', 'goldmaxmms', '3 months', 'full stack developer', ''),
(8, 6, 'project hawkeye', 'hawkeye.com', 'he', '3 months', 'full stack developer', ''),
(9, 6, 'project hawkeye', 'hawkeye.com', 'he', '3 months', 'full stack developer', '');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `fresher`
--

INSERT INTO `fresher` (`fs_id`, `fs_uid`, `fs_proj_nm`, `fs_proj_desc`, `fs_w_nm`, `fs_w_desc`, `fs_part`) VALUES
(1, 1, 'project1', 'project_desc', 'workshop1', 'worksho desxc', 'presentetion1'),
(2, 5, '8051 micro controller', 'description of 8051 micro controller and its pin diagram', 'workshop 1', '', 'powerpoint presentation on micro processor'),
(3, 5, 'hawk eye', 'Project Description', 'Workshop Name', '', 'Presentation');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=46 ;

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
(9, 3, 'json'),
(20, 2, 'html'),
(21, 2, 'java'),
(22, 2, 'c'),
(23, 2, 'c++'),
(24, 2, 'ajax'),
(25, 2, 'javascript'),
(26, 2, 'jquery'),
(27, 2, 'bootstrap'),
(28, 2, 'cordova'),
(29, 2, 'phonegap'),
(30, 4, 'html'),
(31, 4, 'css'),
(32, 4, 'bootstrap'),
(33, 4, 'java'),
(34, 4, 'c'),
(35, 4, 'c++'),
(36, 4, 'python'),
(37, 4, 'ajax'),
(38, 4, 'jquery'),
(39, 5, 'c'),
(40, 5, 'java'),
(41, 5, 'html'),
(42, 5, 'c++'),
(43, 6, '.net'),
(44, 6, 'cordova'),
(45, 6, 'java');

-- --------------------------------------------------------

--
-- Table structure for table `pref_loc`
--

CREATE TABLE IF NOT EXISTS `pref_loc` (
  `pref_loc_id` int(11) NOT NULL AUTO_INCREMENT,
  `pref_loc_uid` int(11) NOT NULL,
  `pref_loc_name` varchar(100) NOT NULL,
  PRIMARY KEY (`pref_loc_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=16 ;

--
-- Dumping data for table `pref_loc`
--

INSERT INTO `pref_loc` (`pref_loc_id`, `pref_loc_uid`, `pref_loc_name`) VALUES
(1, 1, 'hyderabad'),
(2, 1, 'chennai'),
(3, 3, 'hyderabad'),
(4, 3, 'chennai'),
(7, 2, 'hyderabad'),
(8, 2, 'chennnai'),
(9, 2, 'rajasthan'),
(10, 4, 'hyderabad'),
(11, 4, 'chennai'),
(12, 4, 'trivendram'),
(13, 4, 'mysore'),
(14, 5, 'visakhapatnam'),
(15, 6, 'chennai');

-- --------------------------------------------------------

--
-- Table structure for table `proj_skill`
--

CREATE TABLE IF NOT EXISTS `proj_skill` (
  `proj_sk_id` int(11) NOT NULL AUTO_INCREMENT,
  `proj_sk_uid` int(11) NOT NULL,
  `proj_sk_nm` varchar(100) NOT NULL,
  `proj_id` int(11) NOT NULL,
  PRIMARY KEY (`proj_sk_id`),
  FULLTEXT KEY `proj_sk_nm` (`proj_sk_nm`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=65 ;

--
-- Dumping data for table `proj_skill`
--

INSERT INTO `proj_skill` (`proj_sk_id`, `proj_sk_uid`, `proj_sk_nm`, `proj_id`) VALUES
(1, 3, 'ajax', 1),
(2, 3, 'html', 1),
(3, 3, 'css', 1),
(4, 3, 'bootstrap', 1),
(5, 3, 'php', 1),
(6, 3, 'javascript', 1),
(7, 3, 'jquery', 1),
(8, 3, 'json', 1),
(27, 2, 'css', 4),
(28, 2, 'java', 4),
(29, 2, 'html', 4),
(30, 2, 'cordova', 4),
(31, 2, 'bootstrap', 4),
(32, 2, 'js', 4),
(33, 2, 'angularjs', 4),
(34, 2, 'ajax', 4),
(35, 2, 'php', 4),
(36, 2, 'css', 5),
(37, 2, 'java', 5),
(38, 2, 'php', 5),
(39, 2, 'ajax', 5),
(40, 2, 'html', 5),
(41, 2, 'bootstrap', 5),
(42, 2, 'javascript', 5),
(43, 2, 'cordova', 5),
(44, 2, 'phonegap', 5),
(45, 4, 'css', 6),
(46, 4, 'html', 6),
(47, 4, 'bootstrap', 6),
(48, 4, 'ajax', 6),
(49, 4, 'jquery', 6),
(50, 4, 'css', 7),
(51, 4, 'html', 7),
(52, 4, 'bootstrap', 7),
(53, 4, 'ajax', 7),
(54, 4, 'jquery', 7),
(55, 6, 'css', 8),
(56, 6, 'html', 8),
(57, 6, 'php', 8),
(58, 6, 'jquery', 8),
(59, 6, 'ajax', 8),
(60, 6, 'css', 9),
(61, 6, 'html', 9),
(62, 6, 'php', 9),
(63, 6, 'jquery', 9),
(64, 6, 'ajax', 9);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

--
-- Dumping data for table `qualification`
--

INSERT INTO `qualification` (`q_id`, `q_uid`, `q_qual`, `q_cs`, `q_spz`, `q_ctype`, `q_mks`, `q_yr`, `q_inst`) VALUES
(1, 1, 'SSc', 'ghfg', 'fghf', 'hjghj', 0, 675, 'hjgj'),
(2, 3, 'state', 'inter', 'mpc', 'regular', 98, 2000, 'swara'),
(5, 2, 'State ', 'ssc', 'ssc', 'regular', 88, 2000, 'abc school'),
(6, 2, 'State ', 'intermediate', 'mpc', 'regular', 90, 2012, 'abc jr college'),
(7, 2, 'State ', 'BSc', 'mpcs', 'regular', 90, 2015, 'abc degree college'),
(8, 4, 'State', 'SSC', 'SSC', 'Regular', 60, 2000, 'once up on a time school'),
(9, 4, 'State', 'Intermediate', 'MPC', 'Regular', 70, 2012, 'once up on a time college'),
(10, 4, 'State', 'BSc', 'MECS', 'Regular', 80, 2015, 'once up on a time degree college'),
(11, 5, 'state', 'ssc', 'ssc', 'regular', 65, 2010, 'V.T.High School'),
(12, 5, 'state', 'Intermediate', 'mpc', 'regular', 70, 2012, 'Sri Chaitanya Jr College'),
(13, 5, 'state', 'degree ', 'bsc', 'regular', 71, 2016, 'Aditya Degree College'),
(14, 6, 'state', 'ssc', 'ssc', 'regular', 66, 2011, 'abcd'),
(15, 6, 'state', 'intermediate', 'mpc', 'regular', 66, 2013, 'abcd'),
(18, 5, 'state', 'MBA', 'HR', '', 75, 2017, 'gayatri college'),
(19, 5, 'Board', 'Qualification', '', '', 0, 0, 'Institute');

-- --------------------------------------------------------

--
-- Table structure for table `rec_skills`
--

CREATE TABLE IF NOT EXISTS `rec_skills` (
  `rskill_id` int(11) NOT NULL AUTO_INCREMENT,
  `rskill_name` varchar(111) NOT NULL,
  `rec_id` int(11) NOT NULL,
  PRIMARY KEY (`rskill_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=92 ;

--
-- Dumping data for table `rec_skills`
--

INSERT INTO `rec_skills` (`rskill_id`, `rskill_name`, `rec_id`) VALUES
(1, 'css', 9),
(2, 'html', 9),
(3, 'bootstrap', 9),
(4, 'php', 9),
(53, 'html', 10),
(54, 'css', 10),
(55, 'java', 10),
(56, 'jquery', 10),
(57, 'php', 10),
(58, 'abc', 10),
(59, 'abc', 10),
(60, 'values', 10),
(61, 'fdfg', 10),
(62, 'fdfg', 10),
(63, 'ghg', 10),
(64, 'fc', 10),
(65, 'css', 10),
(66, 'jkh', 10),
(67, 'nkjn', 10),
(68, 'html', 10),
(69, 'css', 10),
(70, 'jquery', 10),
(71, 'php', 10),
(72, 'cordova', 10),
(73, 'html', 10),
(74, 'css', 10),
(75, 'jquery', 10),
(76, 'php', 10),
(77, 'cordova', 10),
(78, 'java', 10),
(79, 'html', 10),
(80, 'html', 10),
(81, 'css', 10),
(82, 'hbj', 10),
(83, 'hgfghfgh', 10),
(84, 'fghf', 10),
(85, 'ghfghfh', 10),
(86, '.net', 10),
(87, 'jquery', 10),
(88, 'ajax', 10),
(89, 'php', 10),
(90, 'html', 10),
(91, 'css', 10);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=72 ;

--
-- Dumping data for table `resume_status`
--

INSERT INTO `resume_status` (`cv_jb_id`, `cv_can_id`, `jb_applied`, `cv_saveltr`, `cv_shortlisted`, `cv_suggested`, `cv_id`) VALUES
(11, 1, 1, 0, 1, 0, 1),
(11, 3, 1, 0, 1, 0, 2),
(11, 2, 1, 0, 1, 0, 3),
(11, 4, 1, 0, 0, 0, 4),
(11, 6, 0, 0, 0, 0, 11),
(11, 5, 1, 0, 0, 0, 71);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

--
-- Dumping data for table `r_jobpost`
--

INSERT INTO `r_jobpost` (`j_id`, `j_title`, `j_desc`, `j_exp`, `j_salary`, `r_id`) VALUES
(11, 'PHP DEVELOPER', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore m', '1-2', '2L', 9),
(19, 'PHP Developer', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '1-2', '2 L', 10);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `r_reginfo`
--

INSERT INTO `r_reginfo` (`r_id`, `r_fname`, `r_uname`, `r_mobile`, `r_landline`, `r_mail`, `r_altmail`, `r_pswd`, `r_compname`, `r_desgn`, `r_inds`, `r_country`, `r_state`, `r_city`, `r_pincode`, `r_status`) VALUES
(9, 'Rajesh Reddy', 'Rajesh', '9010460780', '2781166', 'rajesh@betasolutions.in', 'stevejobs1024@gmail.com', '123456', 'betasolutions', 'CEO', 'IT', '', '', '', 530041, 0),
(10, 'niranjan', 'Niranjan ', '9010460780', '2781166', 'niranjan@betasolutions.in', 'niru@gmail.com', '1234', 'kapsodi', 'ceo', 'IT', '', '', '', 530041, 0);

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
  ADD CONSTRAINT `r_jobPost_ibfk_1` FOREIGN KEY (`r_id`) REFERENCES `r_reginfo` (`r_id`);

--
-- Constraints for table `r_jobskills`
--
ALTER TABLE `r_jobskills`
  ADD CONSTRAINT `r_jobskills_ibfk_1` FOREIGN KEY (`r_id`) REFERENCES `r_reginfo` (`r_id`),
  ADD CONSTRAINT `r_jobskills_ibfk_2` FOREIGN KEY (`j_id`) REFERENCES `r_jobpost` (`j_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
