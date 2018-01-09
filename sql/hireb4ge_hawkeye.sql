-- phpMyAdmin SQL Dump
-- version 4.0.10.14
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Jan 08, 2018 at 05:02 AM
-- Server version: 5.6.33-79.0-log
-- PHP Version: 5.4.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `hireb4ge_hawkeye`
--

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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

--
-- Dumping data for table `basic_info`
--

INSERT INTO `basic_info` (`b_id`, `b_uid`, `b_pic`, `b_dob`, `b_gen`, `b_mstatus`, `b_loc`) VALUES
(1, 1, 'Penguins.jpg', '17/January/2003', 'female', 'married', 'vskp'),
(2, 3, 'img12.jpg', '15/April/2000', 'male', 'single', 'vskp'),
(4, 2, 'WIN_20171117_211917.JPG', '13/July/1997', 'female', 'single', 'anakapalli'),
(5, 4, 'Tulips.jpg', '2/May/1996', 'female', 'single', 'visakhapatnam'),
(6, 5, 'Lighthouse.jpg', '15/January/1997', 'female', 'single', 'aarilova'),
(7, 6, 'WIN_20171117_211841.JPG', '16/September/1999', 'female', 'single', 'srikakulam'),
(8, 7, '6179593-profile-pics.png', '1/July/1994', 'male', 'single', 'Visakhapatnam'),
(9, 8, '6179593-profile-pics.png', '2/February/2012', 'male', 'married', 'Vizag'),
(10, 0, 'image.jpg', '16/February/1997', 'female', 'single', 'vizag'),
(12, 11, 'b.jpg', '2/February/2011', 'female', 'single', 'vizag'),
(13, 17, 'WIN_20171212_114608.JPG', '3/February/2004', 'female', 'single', 'visakhapatnam'),
(14, 19, '74dfb37afa8fd4f6829be5af03056b9e--virat-kohli-kolkata.jpg', '12/April/1978', 'male', 'married', 'Visakhapatnam');

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE IF NOT EXISTS `cities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `state_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

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
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=29 ;

--
-- Dumping data for table `c_l`
--

INSERT INTO `c_l` (`log_id`, `log_psw`, `log_un`, `status`) VALUES
(1, '123456', 'swaroopa@123', 0),
(2, 'sowji123', 'sowjanya@betasolutions.in', 0),
(3, '123456', 'vamsi@betasolutions.in', 0),
(4, '123456', 'swara@betasolutions.in', 0),
(5, '123456', 'chandu@gmail.com', 0),
(6, '123456', 'sanju@mail.com', 0),
(7, 'admin', 'venki@gmail.com', 0),
(8, 'admin', 'vara@gmail.com', 0),
(9, '', 'keerthi@betasolutions.in', 0),
(10, '', 'keerthi@betasolutions.in', 0),
(11, '12345', 'keerthi@betasolutions.in', 0),
(12, '123456', 'keerthi@12345', 0),
(13, '12345', 'kommojukeerthi@gmail.com', 0),
(14, '12345', 'kommojukeerthi@gmail.com', 0),
(15, '12345', 'eswar@gmail.com', 0),
(16, '12345', 'eswar@gmail.com', 0),
(17, '123', 'ganesh@gamil.com', 0),
(18, '123', 'joyuday@gmail.com', 0),
(19, '123', 'prani@gmail.com', 0),
(20, 'loveu2', 'mandavaraprasad@gmail.com', 0),
(21, 'Loveu2', 'mandavaraprasad@gmail.com', 0),
(22, 'Loveu2', 'manda@gmail.com', 0),
(23, 'Loveu2', 'suji.dhanalakota@gmail.com', 0),
(24, '123456', 'krish@123', 0),
(25, '1234', '314w', 0),
(26, 'srinu@123', 'srinu@betasolutions.in', 0),
(27, 'sfhvbshjfnv', 'sdvbhsjfbv', 0),
(28, 'sdcsdc', 'sdvsdv', 0);

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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=27 ;

--
-- Dumping data for table `c_log`
--

INSERT INTO `c_log` (`cl_id`, `cl_phn`, `cl_pwd`, `cl_time`, `cl_status`, `cl_n`, `cl_em`, `cl_un`, `status`) VALUES
(1, '1234567890', '123456', '2017-11-10 07:40:56', 'i agree', 'swaroopa', 'swaroopa@123', 'swaroopa', 1),
(2, '9876543210', 'sowji123', '2017-11-13 12:53:34', 'i agree', 'sowjanya', 'sowjanya@betasolutions.in', 'sowji', 1),
(3, '1234567890', '123456', '2017-11-13 12:55:06', 'i agree', 'vamsi krishna', 'vamsi@betasolutions.in', 'vamsi', 1),
(4, '1234567890', '123456', '2017-11-20 08:58:56', 'i agree', 'swara', 'swara@betasolutions.in', 'swara', 1),
(5, '8897708152', '123', '2017-11-21 08:34:54', 'i agree', 'chandu', 'chandu@gmail.com', 'chandu', 1),
(6, '1234567890', '123456', '2017-12-01 08:39:00', 'i agree', 'sanjana', 'sanju@mail.com', 'sanju', 1),
(7, '9059091056', 'admin', '2017-12-14 08:38:45', 'i agree', 'Venkatesh', 'venki@gmail.com', 'Venki', 1),
(8, '9999999999', 'admin', '2017-12-14 08:58:54', 'i agree', 'Vara', 'vara@gmail.com', 'vara', 1),
(13, '999999999', '12345', '2017-12-22 03:41:31', 'i agree', 'keerthi', 'kommojukeerthi@gmail.com', 'keerthi', 0),
(12, '9999999999', '123456', '2017-12-22 03:39:46', 'i agree', 'keerthi', 'keerthi@12345', 'keerthi1232', 0),
(11, '999999999', '12345', '2017-12-21 02:12:17', 'i agree', 'keerthi', 'keerthi@betasolutions.in', 'keerthi123', 1),
(14, '9999999999', '12345', '2017-12-22 03:43:32', 'i agree', 'keerthi', 'kommojukeerthi@gmail.com', 'keerthi', 0),
(15, '9010460780', '123', '2018-01-04 07:12:58', 'i agree', 'ganesh', 'ganesh@gamil.com', 'ganesh123', 0),
(16, '9059009515', '123', '2018-01-04 07:14:16', 'i agree', 'uday', 'joyuday@gmail.com', 'uday9', 1),
(17, '1234567890', '123', '2018-01-04 09:15:03', 'i agree', 'pranathi', 'prani@gmail.com', 'prani', 1),
(18, '7675805221', 'loveu2', '2018-01-05 05:27:06', 'i agree', 'Varaprasad', 'mandavaraprasad@gmail.com', 'Vara', 0),
(19, '7675805221', 'Loveu2', '2018-01-05 05:28:13', 'i agree', 'Varaprasad', 'mandavaraprasad@gmail.com', 'Vara', 1),
(20, '7675805221', 'Loveu2', '2018-01-05 05:29:03', 'i agree', 'Prasad', 'manda@gmail.com', 'prasad123', 0),
(21, '9703016455', 'Loveu2', '2018-01-05 05:29:59', 'i agree', 'Sujatha', 'suji.dhanalakota@gmail.com', 'Sujatha123', 0),
(22, '123434', '123456', '2018-01-05 05:30:30', 'i agree', 'krishna', 'krish@123', 'KRISH', 0),
(24, '7386789456', 'srinu@123', '2018-01-05 09:13:03', 'i agree', 'Srinivas', 'srinu@betasolutions.in', 'srinu', 0),
(25, '0', 'sfhvbshjfnv', '2018-01-05 09:21:31', 'i agree', 'srinu', 'sdvbhsjfbv', 'sfhbvhudgfsv', 0),
(26, '0', 'sdcsdc', '2018-01-05 10:23:23', 'i agree', 'sdsfv', 'sdvsdv', 'sjdvb', 0);

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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- Dumping data for table `edu_qf`
--

INSERT INTO `edu_qf` (`e_id`, `e_uid`, `e_ind`, `e_cn_type`) VALUES
(1, 1, 'it', 'fre'),
(2, 3, 'it', 'exp'),
(4, 2, 'it', 'exp'),
(5, 4, 'it', 'exp'),
(6, 5, 'it', 'fre'),
(7, 6, 'it', 'exp'),
(8, 7, 'it', 'exp'),
(9, 8, 'it', 'exp'),
(12, 11, 'it', 'fre'),
(13, 16, 'it', 'exp'),
(14, 17, 'it', 'fre'),
(15, 19, 'it', 'exp'),
(16, 19, 'it', 'exp');

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
  `ex_years` varchar(100) NOT NULL,
  `ex_notice` varchar(100) NOT NULL,
  `ex_month` varchar(100) NOT NULL,
  PRIMARY KEY (`ex_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `exp`
--

INSERT INTO `exp` (`ex_id`, `ex_cc`, `ex_uid`, `ex_desc`, `ex_cjob_type`, `ex_prefjob_type`, `ex_c_comp`, `ex_exp_comps`, `ex_years`, `ex_notice`, `ex_month`) VALUES
(1, 'betasolutions', 3, 'senior developer', 'experienced', 'experienced', '20000', '25000', '3', '', ''),
(2, 'betasolutions', 2, 'senior developer', 'experienced', 'experienced', '3L', '4L', '3', '', ''),
(3, 'betasolutions', 4, 'senior developer', 'experienced', 'experienced', '2L', '3L', '1', '', ''),
(4, 'betasolutions', 6, 'web developer', 'experienced', 'experienced', '1.5 L', '2L', '2', '', ''),
(5, 'Beta Solutions', 7, 'Developer', 'fresher', 'experienced', '14000', '25000', '2', '', ''),
(6, '', 8, 'DEVELOPER', 'fresher', 'experienced', '3.5', '5', '14', '', ''),
(7, 'beta solutions', 16, 'all', 'experienced', 'experienced', '100000', '200000', '9', '', ''),
(8, 'ADP', 19, 'Technical Lead', 'select Current Job Type', 'select Preferred Job Type', '13,95,000 LPA', '20,00,000 LPA', '10', '', '');

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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=28 ;

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
(9, 6, 'project hawkeye', 'hawkeye.com', 'he', '3 months', 'full stack developer', ''),
(10, 7, 'Hawkeye', 'HR', 'Axis Minds', '3 months', 'Team Lead', ''),
(11, 7, 'Cms', 'Police', 'Vspcsb', '3 months', 'Team Lead', ''),
(12, 7, '', '', '', '', '', ''),
(13, 7, 'Project Name', 'Domain', 'Client Name', 'Project Duration', 'Your Role', ''),
(14, 7, 'Project Name', 'Domain', 'Client Name', 'Project Duration', 'Your Role', ''),
(15, 7, 'Project Name', 'Domain', 'Client Name', 'Project Duration', 'Your Role', ''),
(16, 7, 'Project Name', 'Domain', 'Client Name', 'Project Duration', 'Your Role', ''),
(17, 7, 'Project Name', 'Domain', 'Client Name', 'Project Duration', 'Your Role', ''),
(18, 7, 'Project Name', 'Domain', 'Client Name', 'Project Duration', 'Your Role', ''),
(19, 7, 'Project Name', 'Domain', 'Client Name', 'Project Duration', 'Your Role', ''),
(20, 8, 'Hawk Eye', 'HR', 'Axis Minds', '3 months', 'Team Lead', ''),
(21, 16, 'project mars', 'mars.com', 'moon', 'life time', 'pilot', ''),
(22, 19, 'Hireblocks', 'ecommerce', 'Axisminds', '1 year', 'Technical Lead', ''),
(23, 19, 'Hireblocks', 'ecommerce', 'Axisminds', '1 year', 'Technical Lead', ''),
(24, 19, 'Hireblocks', 'ecommerce', 'Axisminds', '1 year', 'Technical Lead', ''),
(25, 19, 'Hireblocks', 'ecommerce', 'Axisminds', '1 year', 'Technical Lead', ''),
(26, 19, 'Hireblocks', 'ecommerce', 'Axisminds', '1 year', 'Technical Lead', ''),
(27, 19, 'Hireblocks', 'ecommerce', 'Axisminds', '1 year', 'Technical Lead', '');

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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `fresher`
--

INSERT INTO `fresher` (`fs_id`, `fs_uid`, `fs_proj_nm`, `fs_proj_desc`, `fs_w_nm`, `fs_w_desc`, `fs_part`) VALUES
(1, 1, 'project1', 'project_desc', 'workshop1', '', 'presentetion1'),
(2, 5, '8051 micro controller', 'description of 8051 micro controller and its pin diagram', 'workshop 1', '', 'powerpoint presentation on micro processor'),
(3, 5, 'hawk eye', 'Project Description', 'Workshop Name', '', 'Presentation'),
(4, 11, 'dfgdgfdg', 'sdfdsfgdf', 'sfgsdf', '', 'sdfdgdgdf'),
(5, 17, 'project1', 'project desc1', 'workshop1', 'work desc', 'presentation');

-- --------------------------------------------------------

--
-- Table structure for table `f_p`
--

CREATE TABLE IF NOT EXISTS `f_p` (
  `f_id` int(11) NOT NULL AUTO_INCREMENT,
  `f_uid` varchar(100) NOT NULL,
  `f_em` varchar(100) NOT NULL,
  PRIMARY KEY (`f_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `g_skill`
--

CREATE TABLE IF NOT EXISTS `g_skill` (
  `g_sk_id` int(11) NOT NULL AUTO_INCREMENT,
  `g_sk_uid` int(11) NOT NULL,
  `g_sk_nm` varchar(100) NOT NULL,
  PRIMARY KEY (`g_sk_id`),
  FULLTEXT KEY `g_sk_nm` (`g_sk_nm`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=85 ;

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
(45, 6, 'java'),
(46, 7, 'photoshop'),
(47, 7, 'grunt'),
(48, 7, 'gulp'),
(49, 7, 'angular'),
(50, 8, 'html'),
(51, 8, 'gulp'),
(52, 8, 'gruntjs'),
(53, 8, 'nodejs'),
(54, 8, 'angularjs'),
(55, 8, 'python'),
(56, 8, 'cinema4d'),
(57, 8, 'swift'),
(58, 8, 'objective-c'),
(67, 11, 'php'),
(66, 11, 'css'),
(65, 11, 'html'),
(68, 16, 'all'),
(69, 17, 'sass'),
(70, 17, 'datastage'),
(71, 17, 'angularjs'),
(72, 17, 'nodejs'),
(73, 19, 'Java'),
(74, 19, 'struts'),
(75, 19, 'pl/sql'),
(76, 19, 'soap'),
(77, 19, 'jdbc'),
(78, 19, 'web'),
(79, 19, 'Java'),
(80, 19, 'struts'),
(81, 19, 'pl/sql'),
(82, 19, 'soap'),
(83, 19, 'jdbc'),
(84, 19, 'web');

-- --------------------------------------------------------

--
-- Table structure for table `messages_tbl`
--

CREATE TABLE IF NOT EXISTS `messages_tbl` (
  `msg_id` int(111) NOT NULL AUTO_INCREMENT,
  `rec_id` int(111) NOT NULL,
  `can_id` int(111) NOT NULL,
  `messageText` varchar(5000) NOT NULL,
  `sender_id` varchar(111) NOT NULL,
  `receiver_id` varchar(111) NOT NULL,
  `msg_status` int(1) NOT NULL DEFAULT '0',
  `rec_accept_can` int(1) NOT NULL DEFAULT '0',
  `rec_request` int(11) NOT NULL DEFAULT '0',
  `can_request` int(11) NOT NULL DEFAULT '0',
  `msg_datetime` datetime NOT NULL,
  PRIMARY KEY (`msg_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=296 ;

--
-- Dumping data for table `messages_tbl`
--

INSERT INTO `messages_tbl` (`msg_id`, `rec_id`, `can_id`, `messageText`, `sender_id`, `receiver_id`, `msg_status`, `rec_accept_can`, `rec_request`, `can_request`, `msg_datetime`) VALUES
(192, 9, 3, 'mummy', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 03:12:59'),
(191, 9, 3, 'capeta', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 03:12:42'),
(190, 9, 3, 'naruto', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 03:12:28'),
(5, 9, 3, 'vamsi', 's_9', 'r_3', 1, 0, 0, 0, '2017-12-20 05:59:41'),
(6, 9, 3, 'R u there?', 's_9', 'r_3', 1, 0, 0, 0, '2017-12-20 06:07:26'),
(7, 9, 3, 'Hello', 's_9', 'r_3', 1, 0, 0, 0, '2017-12-20 06:07:54'),
(8, 9, 3, 'Swaroopa', 's_3', 'r_9', 1, 0, 0, 0, '2017-12-20 06:08:48'),
(9, 9, 3, 'swaroopa', 's_9', 'r_3', 1, 0, 0, 0, '2017-12-20 06:11:18'),
(10, 9, 3, 'suji', 's_9', 'r_3', 1, 0, 0, 0, '2017-12-20 06:11:38'),
(11, 9, 3, 'Rajesh', 's_9', 'r_3', 1, 0, 0, 0, '2017-12-20 06:12:57'),
(12, 9, 1, 'hi', 's_1', 'r_9', 1, 0, 0, 0, '2017-12-20 06:14:27'),
(13, 9, 1, 'hello', 's_1', 'r_9', 1, 0, 0, 0, '2017-12-21 01:57:07'),
(14, 9, 1, 'hi', 's_1', 'r_9', 1, 0, 0, 0, '2017-12-21 02:47:21'),
(15, 9, 3, 'hi', 's_3', 'r_9', 1, 0, 0, 0, '2017-12-21 03:06:10'),
(16, 9, 3, 'how are you', 's_3', 'r_9', 1, 0, 0, 0, '2017-12-21 03:10:35'),
(17, 9, 1, 'ya am gud', 's_1', 'r_9', 1, 0, 0, 0, '2017-12-21 04:50:34'),
(18, 9, 1, 'what about you', 's_1', 'r_9', 1, 0, 0, 0, '2017-12-21 05:01:08'),
(19, 9, 1, 'pagal', 's_1', 'r_9', 1, 0, 0, 0, '2017-12-21 05:02:25'),
(20, 9, 1, 'mental', 's_1', 'r_9', 1, 0, 0, 0, '2017-12-21 05:03:22'),
(21, 9, 3, 'gud', 's_9', 'r_3', 1, 0, 0, 0, '2017-12-21 06:00:00'),
(22, 9, 3, 'ya', 's_3', 'r_9', 1, 0, 0, 0, '2017-12-21 06:00:51'),
(23, 9, 3, '', 's_3', 'r_9', 1, 0, 0, 0, '2017-12-21 06:00:52'),
(24, 9, 3, 'h', 's_9', 'r_3', 1, 0, 0, 0, '2017-12-21 06:13:01'),
(25, 9, 3, 'hello', 's_9', 'r_3', 1, 0, 0, 0, '2017-12-21 06:13:14'),
(26, 9, 3, 'ya', 's_3', 'r_9', 1, 0, 0, 0, '2017-12-21 06:19:58'),
(27, 9, 3, 'hmm', 's_9', 'r_3', 1, 0, 0, 0, '2017-12-21 06:28:13'),
(28, 9, 3, 'hl', 's_3', 'r_9', 1, 0, 0, 0, '2017-12-21 06:31:36'),
(29, 9, 3, 'hw', 's_9', 'r_3', 1, 0, 0, 0, '2017-12-21 06:32:25'),
(30, 9, 3, 'g', 's_9', 'r_3', 1, 0, 0, 0, '2017-12-21 06:34:36'),
(31, 9, 1, 'haa', 's_9', 'r_1', 1, 0, 0, 0, '2017-12-22 01:57:57'),
(32, 9, 2, 'hi suji', 's_9', 'r_2', 1, 0, 0, 0, '2017-12-22 02:00:59'),
(33, 9, 2, 'ela unnav', 's_9', 'r_2', 1, 0, 0, 0, '2017-12-22 02:01:08'),
(34, 9, 1, 'hi', 's_9', 'r_1', 1, 0, 0, 0, '2017-12-22 02:01:38'),
(35, 9, 3, 'Hi swaroopa', 's_9', 'r_1', 1, 0, 0, 0, '2017-12-26 12:40:53'),
(36, 9, 3, 'hi swaroopa', 's_9', 'r_1', 1, 0, 0, 0, '2017-12-26 12:44:42'),
(37, 9, 3, 'Hi swaroopa', 's_9', 'r_3', 1, 0, 0, 0, '2017-12-26 01:02:24'),
(38, 9, 3, 'hi', 's_9', 'r_3', 1, 0, 0, 0, '2017-12-26 01:03:46'),
(39, 9, 3, 'hello swaru', 's_9', 'r_3', 1, 0, 0, 0, '2017-12-26 01:30:59'),
(40, 9, 1, 'hello swaru', 's_9', 'r_1', 1, 0, 0, 0, '2017-12-26 01:32:37'),
(41, 9, 4, 'hi swara', 's_9', 'r_4', 1, 0, 0, 0, '2017-12-27 01:03:27'),
(42, 10, 1, 'hi Swara', 's_10', 'r_1', 1, 0, 0, 0, '2017-12-27 01:34:38'),
(43, 10, 7, 'Hi Venky', 's_10', 'r_7', 1, 0, 0, 0, '2017-12-27 01:35:01'),
(44, 10, 1, 'hi', 's_10', 'r_1', 1, 0, 0, 0, '2017-12-27 01:37:11'),
(45, 9, 1, 'hello Rajesh', 's_1', 'r_9', 1, 0, 0, 0, '2017-12-28 11:51:29'),
(46, 9, 1, 'Hi Nirajan', 's_1', 'r_9', 1, 0, 0, 0, '2017-12-29 03:11:59'),
(47, 9, 1, 'Hi Niranjan', 's_1', 'r_9', 1, 0, 0, 0, '2017-12-29 03:15:40'),
(48, 9, 1, 'hello', 's_1', 'r_9', 1, 0, 0, 0, '2017-12-29 03:22:25'),
(49, 9, 1, 'hello', 's_1', 'r_9', 1, 0, 0, 0, '2017-12-29 03:22:55'),
(50, 9, 1, 'hi', 's_1', 'r_9', 1, 0, 0, 0, '2017-12-29 03:23:21'),
(51, 10, 1, 'hello', 's_1', 'r_10', 1, 0, 0, 0, '2017-12-29 03:25:22'),
(52, 10, 1, 'Nirajan', 's_1', 'r_10', 1, 0, 0, 0, '2017-12-29 03:29:22'),
(53, 10, 1, 'Hi Nirajan', 's_1', 'r_10', 1, 0, 0, 0, '2017-12-29 03:30:23'),
(54, 9, 1, 'Hi rajesh, Final testing msg', 's_1', 'r_9', 1, 0, 0, 0, '2017-12-29 03:31:16'),
(55, 9, 1, 'hello Swaroopa', 's_9', 'r_1', 1, 0, 0, 0, '2017-12-29 03:57:25'),
(56, 9, 1, 'hi', 's_1', 'r_9', 1, 0, 0, 0, '2018-01-02 12:13:06'),
(57, 9, 3, 'hi', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 04:30:02'),
(58, 9, 3, 'hi', 's_9', 'r_3', 1, 0, 0, 0, '2018-01-02 04:34:58'),
(59, 9, 3, 'Hi Rajesh From Vamsi', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 04:42:44'),
(60, 9, 3, 'Hi vamsi From Rajesh', 's_9', 'r_3', 1, 0, 0, 0, '2018-01-02 04:47:54'),
(61, 9, 3, 'Hellooooooooooooooooooooooooooooooooooooooooooooo', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 04:49:39'),
(62, 9, 3, 'hi', 's_9', 'r_3', 1, 0, 0, 0, '2018-01-02 04:50:04'),
(63, 9, 3, 'hiiiiiii', 's_9', 'r_3', 1, 0, 0, 0, '2018-01-02 04:53:02'),
(64, 9, 3, 'Hllo', 's_9', 'r_3', 1, 0, 0, 0, '2018-01-02 04:54:17'),
(65, 9, 3, 'Helloooooo', 's_9', 'r_3', 1, 0, 0, 0, '2018-01-02 04:55:41'),
(66, 9, 3, 'hi', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 05:02:57'),
(67, 9, 3, 'helloooo w', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 05:04:11'),
(68, 9, 3, 'qqqqqq', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 05:06:03'),
(69, 9, 3, 'abcdefgh', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 05:11:27'),
(70, 9, 3, 'xyz', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 05:13:09'),
(71, 9, 3, 'pqrs', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 05:13:54'),
(72, 9, 3, 'ijkl', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 05:15:11'),
(73, 9, 3, 'new year', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 05:16:31'),
(74, 9, 3, '2018', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 05:19:14'),
(75, 9, 3, 'sudha', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 05:21:29'),
(76, 9, 3, 'kiran', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 05:21:50'),
(77, 9, 3, 'uday', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 05:22:16'),
(78, 9, 3, 'swaroopa', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 05:23:47'),
(79, 9, 3, 'suji', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 05:28:09'),
(80, 9, 3, 'sjwhuhiuhuhu', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 05:28:27'),
(81, 9, 3, 'uhiunijnin', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 05:28:49'),
(82, 9, 3, 'wjkqnuiiu', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 05:29:22'),
(83, 9, 3, 'skajfsalkjfsoai', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 05:32:07'),
(84, 9, 3, 'askfjsoijefoihjif', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 05:32:21'),
(85, 9, 3, ';jsaiejroijw', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 05:33:06'),
(86, 9, 3, 'fish', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 05:33:23'),
(87, 9, 3, 'cat', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 05:33:54'),
(88, 9, 3, '', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 05:39:27'),
(89, 9, 3, 'frog', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 05:59:59'),
(90, 9, 3, 'frog', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 05:59:59'),
(91, 9, 3, 'chicken lollypop', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 06:04:34'),
(92, 9, 3, 'chicken lollypop', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 06:04:37'),
(93, 9, 3, 'rose', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 06:05:27'),
(94, 9, 3, 'flower', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 06:18:39'),
(95, 9, 3, 'kjoijoj', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 06:18:55'),
(96, 9, 3, 'kjoijoj', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 06:19:01'),
(97, 9, 3, 'rajjijl', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 06:19:20'),
(98, 9, 3, 'ramudu', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 06:19:51'),
(99, 9, 3, 'rajesh', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 06:20:19'),
(100, 9, 3, 'okati', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 06:26:04'),
(101, 9, 3, 'inokati', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 06:26:25'),
(102, 9, 3, 'god', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 06:27:08'),
(103, 9, 3, 'kjlkjsljso', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 06:28:37'),
(104, 9, 3, 'apple', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 06:29:10'),
(105, 9, 3, 'orange', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 06:29:35'),
(106, 9, 3, 'hello', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-02 06:34:04'),
(197, 9, 3, 'working or not working', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 03:20:48'),
(199, 9, 3, 'fasfasdfad', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 03:29:34'),
(198, 9, 3, 'jsklafjalskjsljf', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 03:27:09'),
(196, 9, 3, 'Business', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 03:16:15'),
(114, 9, 3, 'hellooo', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 10:30:42'),
(189, 9, 3, 'gimmy', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 02:49:48'),
(116, 9, 3, 'hell', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 10:32:30'),
(117, 9, 3, 'What the hell', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 10:46:03'),
(118, 9, 3, 'its true', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 10:46:38'),
(119, 9, 3, 'Helllllllllllllllllllllll', 's_9', 'r_3', 1, 0, 0, 0, '2018-01-03 10:47:41'),
(120, 9, 3, 'itsssssssssssssssss', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 10:48:02'),
(121, 9, 3, 'bull Shite', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 10:48:56'),
(122, 9, 3, 'Wha the hellllllllllllllll', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 11:05:02'),
(123, 9, 3, 'idiot', 's_9', 'r_3', 1, 0, 0, 0, '2018-01-03 11:05:53'),
(124, 9, 3, 'Idiotttt', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 11:06:02'),
(125, 9, 3, 'Stupid', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 11:06:13'),
(126, 9, 3, 'plssssssssssssssss', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 11:07:52'),
(127, 9, 3, 'PLSSSS get it', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 11:08:19'),
(128, 9, 3, 'heyyyyyyyyyyyyyyyyyyyyyyyyyyyy', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 11:09:32'),
(129, 9, 3, 'Nasty Fellow', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 11:11:48'),
(130, 9, 3, 'oh godddd..', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 11:43:09'),
(131, 9, 3, 'torcher', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 11:44:16'),
(132, 9, 3, 'Really torcher', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 11:45:03'),
(133, 9, 3, 'plssssssssssssssssssss', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 11:46:00'),
(134, 9, 3, 'come on mannnnn', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 11:46:54'),
(135, 9, 3, 'hellllllllllllllllllllllllllllllllllllllllllllllllllllllllll', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 11:47:47'),
(136, 9, 3, 'plsss god', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 11:49:10'),
(137, 9, 3, 'succeess', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 11:50:31'),
(138, 9, 3, 'happy', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 11:50:45'),
(139, 9, 3, 'sad', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 11:52:00'),
(140, 9, 3, 'happy', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 11:52:11'),
(141, 9, 3, 'happpyyyyhhhh', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 11:54:20'),
(142, 9, 3, 'hapyyyjjj', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 11:54:33'),
(143, 9, 3, 'for', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 11:57:08'),
(144, 9, 3, 'bus', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 11:57:19'),
(145, 9, 3, 'irritating', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 12:05:00'),
(146, 9, 3, 'tiffin chesara', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 12:21:36'),
(147, 9, 3, 'tiffin chesara', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 12:21:40'),
(148, 9, 3, 'nenu cheyaledu', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 12:22:06'),
(149, 9, 3, 'idli', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 12:25:57'),
(150, 9, 3, 'dosa', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 12:27:48'),
(151, 9, 3, 'rava dosa', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 12:28:55'),
(152, 9, 3, 'masala dosa', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 12:29:11'),
(153, 9, 3, 'vada', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 12:40:58'),
(154, 9, 3, 'perugu vada', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 12:41:27'),
(155, 9, 3, 'hire blocks', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 12:41:54'),
(156, 9, 3, 'Apple', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 12:45:18'),
(157, 9, 3, 'Apple', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 12:45:21'),
(158, 9, 3, 'success', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 12:47:59'),
(159, 9, 3, 'kalyan', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 12:48:35'),
(160, 9, 3, 'venki', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 12:49:21'),
(161, 9, 3, 'vamsi', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 12:49:32'),
(162, 9, 3, 'Robo', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 12:52:06'),
(193, 9, 3, 'sowji', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 03:13:02'),
(164, 9, 3, 'Robo 3', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 12:52:56'),
(195, 9, 3, 'appandi', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 03:14:36'),
(166, 9, 3, 'sowjanya', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 01:10:24'),
(167, 9, 3, 'keerthi', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 01:10:52'),
(168, 9, 3, 'sowjanya', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 01:12:19'),
(169, 9, 3, 'sowjanya', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 01:14:06'),
(170, 9, 3, 'sbhkdagdkgak', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 01:14:45'),
(171, 9, 3, '', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 01:14:55'),
(172, 9, 3, 'Hiiii Venky', 's_9', 'r_3', 1, 0, 0, 0, '2018-01-03 01:16:01'),
(173, 9, 3, 'dghsjg', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 01:16:40'),
(174, 9, 3, 'Haiii', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 01:20:28'),
(175, 9, 3, 'tommy', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 01:25:09'),
(176, 9, 3, 'gimmy', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 01:26:26'),
(177, 9, 3, 'gimmy', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 01:27:26'),
(178, 9, 3, 'mll', 's_9', 'r_3', 1, 0, 0, 0, '2018-01-03 01:27:30'),
(179, 9, 3, 'tommy', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 01:29:24'),
(180, 9, 3, ',mmmm', 's_9', 'r_3', 1, 0, 0, 0, '2018-01-03 01:29:47'),
(181, 9, 3, '', 's_9', 'r_3', 1, 0, 0, 0, '2018-01-03 01:29:47'),
(182, 9, 3, 'huhkjhkhi', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 01:30:01'),
(194, 9, 3, 'dummy', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 03:13:41'),
(184, 9, 3, 'thaliva', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 02:35:23'),
(185, 9, 3, 'thaliva', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 02:35:52'),
(186, 9, 3, 'Suji', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 02:36:41'),
(187, 9, 3, 'ho', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 02:38:51'),
(188, 9, 3, 'ho', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 02:40:20'),
(200, 9, 3, 'jijiji', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 03:29:44'),
(201, 9, 3, 'asdasdvasd', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 03:31:47'),
(202, 9, 3, 'sdvcasdcas', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 03:31:57'),
(203, 9, 3, 'hiii', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 03:32:03'),
(204, 9, 3, 'kjkjaljlaskjfsk', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 03:51:23'),
(205, 9, 3, 'skajorlanflaj', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 03:51:48'),
(206, 9, 3, 'car van ', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 03:54:20'),
(207, 9, 3, 'frog', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 03:57:03'),
(208, 9, 3, 'jobfeed', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 03:58:09'),
(209, 9, 3, 'best', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 03:58:38'),
(210, 9, 3, 'holaaa', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 04:20:38'),
(211, 9, 3, 'conooo', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 04:20:44'),
(212, 9, 3, 'coabi', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 04:24:18'),
(213, 9, 3, 'holla', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 04:24:23'),
(214, 9, 3, 'casdc', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 04:25:13'),
(215, 9, 3, 'user', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 04:26:17'),
(216, 9, 3, '1111', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 04:27:57'),
(217, 9, 3, 'wing', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 04:31:29'),
(218, 9, 3, 'aoc', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 04:36:28'),
(219, 9, 3, 'pod', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 04:40:43'),
(220, 9, 3, 's_log', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 04:41:26'),
(221, 9, 3, 'rank', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 04:42:04'),
(222, 9, 3, 'aoc', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 04:43:33'),
(223, 9, 3, 'a_log', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 05:01:27'),
(224, 9, 3, 'u_log', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 05:02:13'),
(225, 9, 3, 'event', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 05:03:20'),
(226, 9, 3, 'bonda plate punukulu', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 05:06:14'),
(227, 9, 3, 'sambar idli', 's_9', 'r_3', 1, 0, 0, 0, '2018-01-03 05:06:43'),
(228, 9, 3, '', 's_9', 'r_3', 1, 0, 0, 0, '2018-01-03 05:06:44'),
(229, 9, 3, 'aaaaa', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 05:07:46'),
(230, 9, 3, 'accomodation', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 05:08:26'),
(231, 9, 3, 'rep', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 05:09:02'),
(232, 9, 3, 'masala dosa allam chetni', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 05:10:29'),
(233, 9, 3, '', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 05:11:39'),
(234, 9, 3, '', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 05:11:45'),
(235, 9, 3, 'appandi', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 05:13:13'),
(236, 9, 3, 'fal', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 05:13:41'),
(237, 9, 3, 'det', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 05:14:33'),
(238, 9, 3, 'traced', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 05:17:21'),
(239, 9, 3, 'com', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 05:18:33'),
(240, 9, 3, 'rama', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 05:21:40'),
(241, 9, 3, 'sita', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 05:24:08'),
(242, 9, 3, 'pt', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 05:25:02'),
(243, 9, 3, 'cr', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 05:25:55'),
(244, 9, 3, 'SI', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 05:27:05'),
(245, 9, 3, 'ACP', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 05:27:16'),
(246, 9, 3, 'sowjanya', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 05:30:56'),
(247, 9, 3, 'bahu', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 05:31:18'),
(248, 9, 3, 'alludu', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 05:31:44'),
(249, 9, 3, 'ohla', 's_9', 'r_3', 1, 0, 0, 0, '2018-01-03 05:46:34'),
(250, 9, 3, '', 's_9', 'r_3', 1, 0, 0, 0, '2018-01-03 05:46:34'),
(251, 9, 3, 'abt', 's_9', 'r_3', 1, 0, 0, 0, '2018-01-03 05:47:13'),
(252, 9, 3, 'abt', 's_9', 'r_3', 1, 0, 0, 0, '2018-01-03 05:47:13'),
(253, 9, 3, 'hi', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 05:47:17'),
(254, 9, 3, 'yeah', 's_9', 'r_3', 1, 0, 0, 0, '2018-01-03 05:47:32'),
(255, 9, 3, 'query ', 's_9', 'r_3', 1, 0, 0, 0, '2018-01-03 05:47:52'),
(256, 9, 3, 'vicks', 's_9', 'r_3', 1, 0, 0, 0, '2018-01-03 05:48:10'),
(257, 9, 3, 'jerry', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 05:48:38'),
(258, 9, 3, 'Hello', 's_9', 'r_3', 1, 0, 0, 0, '2018-01-03 05:50:39'),
(259, 9, 3, 'Heelooo1', 's_9', 'r_3', 1, 0, 0, 0, '2018-01-03 05:52:27'),
(260, 9, 3, 'rajesh', 's_9', 'r_3', 1, 0, 0, 0, '2018-01-03 06:01:54'),
(261, 9, 3, '', 's_9', 'r_3', 1, 0, 0, 0, '2018-01-03 06:01:55'),
(262, 9, 3, 'sweet', 's_9', 'r_3', 1, 0, 0, 0, '2018-01-03 06:02:40'),
(263, 9, 3, 'hot', 's_9', 'r_3', 1, 0, 0, 0, '2018-01-03 06:02:52'),
(264, 9, 3, 'gold', 's_9', 'r_3', 1, 0, 0, 0, '2018-01-03 06:04:04'),
(265, 9, 3, 'silver', 's_9', 'r_3', 1, 0, 0, 0, '2018-01-03 06:05:15'),
(266, 9, 3, 'Hi Uday', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-03 06:07:07'),
(267, 9, 3, 'gg', 's_9', 'r_3', 1, 0, 0, 0, '2018-01-03 06:17:05'),
(268, 9, 3, 'mkn', 's_9', 'r_3', 1, 0, 0, 0, '2018-01-03 06:20:38'),
(269, 9, 3, 'am Recruiter', 's_9', 'r_3', 1, 0, 0, 0, '2018-01-04 11:55:15'),
(270, 9, 1, 'hi rajesh', 's_1', 'r_9', 1, 0, 0, 0, '2018-01-04 11:58:29'),
(271, 9, 3, 'Hello', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-04 11:59:23'),
(272, 9, 3, 'hi', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-04 11:59:35'),
(273, 9, 1, 'hi suji', 's_1', 'r_9', 1, 0, 0, 0, '2018-01-04 12:00:04'),
(274, 9, 3, 'ku8i', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-04 12:14:56'),
(275, 9, 1, 'Hi Rajesh Reddy', 's_1', 'r_9', 1, 0, 0, 0, '2018-01-04 02:27:02'),
(276, 9, 1, 'Hi', 's_9', 'r_1', 1, 0, 0, 0, '2018-01-04 02:38:05'),
(277, 9, 1, 'Hello', 's_1', 'r_9', 1, 0, 0, 0, '2018-01-04 02:39:00'),
(278, 9, 1, 'Heelooooooo Raj', 's_1', 'r_9', 1, 0, 0, 0, '2018-01-04 02:42:55'),
(279, 9, 1, 'hi', 's_9', 'r_1', 1, 0, 0, 0, '2018-01-04 03:24:31'),
(280, 9, 1, 'Helo Rajesh', 's_1', 'r_9', 1, 0, 0, 0, '2018-01-04 03:24:42'),
(281, 9, 1, 'swaroooo', 's_1', 'r_9', 1, 0, 0, 0, '2018-01-04 03:26:26'),
(282, 9, 1, 'helloooo', 's_1', 'r_9', 1, 0, 0, 0, '2018-01-04 03:26:46'),
(283, 9, 1, 'hi rajesh', 's_1', 'r_9', 1, 0, 0, 0, '2018-01-04 03:58:08'),
(284, 9, 1, 'rajesh ela unnav', 's_1', 'r_9', 1, 0, 0, 0, '2018-01-04 03:58:28'),
(285, 9, 1, 'suji', 's_1', 'r_9', 1, 0, 0, 0, '2018-01-04 03:58:42'),
(286, 9, 1, 'suji,vamsi,swaroopa', 's_1', 'r_9', 1, 0, 0, 0, '2018-01-04 03:59:21'),
(287, 9, 1, 'suji sowji', 's_1', 'r_9', 1, 0, 0, 0, '2018-01-04 04:01:53'),
(288, 9, 3, 'cmr', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-04 04:04:59'),
(289, 9, 3, 'ramadevi', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-04 04:05:22'),
(290, 9, 1, 'cheppu enti', 's_1', 'r_9', 1, 0, 0, 0, '2018-01-04 04:05:44'),
(291, 9, 1, 'hello', 's_1', 'r_9', 1, 0, 0, 0, '2018-01-04 04:20:28'),
(292, 9, 3, 'kjfdlk;asjkl;saj', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-04 04:20:33'),
(293, 9, 3, 'iralio', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-04 04:26:34'),
(294, 9, 1, 'hi suji', 's_1', 'r_9', 1, 0, 0, 0, '2018-01-04 04:27:18'),
(295, 9, 3, 'hi', 's_3', 'r_9', 1, 0, 0, 0, '2018-01-05 10:48:41');

-- --------------------------------------------------------

--
-- Table structure for table `msg`
--

CREATE TABLE IF NOT EXISTS `msg` (
  `msg_id` int(11) NOT NULL AUTO_INCREMENT,
  `msg_sid` int(11) NOT NULL,
  `msg_rid` int(11) NOT NULL,
  `msf_desc` varchar(1000) NOT NULL,
  `msg_sdt` datetime NOT NULL,
  PRIMARY KEY (`msg_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=29 ;

--
-- Dumping data for table `msg`
--

INSERT INTO `msg` (`msg_id`, `msg_sid`, `msg_rid`, `msf_desc`, `msg_sdt`) VALUES
(1, 5, 10, '', '2017-12-19 00:00:00'),
(2, 5, 10, 'safsadgadsfgasdf', '2017-12-19 00:00:00'),
(3, 10, 5, 'safsdasd', '2017-12-19 00:00:00'),
(4, 5, 10, 'asdfasdfasd', '2017-12-19 00:00:00'),
(5, 10, 5, 'asdfsdasd sadgasdfasdfv sdfasdfasdf', '2017-12-19 00:00:00'),
(6, 10, 5, 'sdfasdfasd', '2017-12-19 00:00:00'),
(7, 10, 5, 'agsfgsfdg', '2017-12-19 00:00:00'),
(8, 5, 10, 'asdasdfasdf', '2017-12-19 00:00:00'),
(9, 10, 5, 'agsfgsfdg', '2017-12-19 00:00:00'),
(10, 5, 10, 'bzdbsdzfgadfsga', '2017-12-19 00:00:00'),
(11, 10, 5, 'ghdsfghdhd', '2017-12-19 00:00:00'),
(12, 16, 5, 'hola Bonita from rajesh', '2017-12-19 00:00:00'),
(13, 10, 5, 'sdhdghdtghdf', '2017-12-19 00:00:00'),
(14, 5, 10, 'sdfghsdfgsadfg', '2017-12-19 00:00:00'),
(15, 5, 16, 'agafsdgasfdgadf', '2017-12-19 00:00:00'),
(16, 10, 5, 'czxxzcbzx', '2017-12-19 00:00:00'),
(17, 16, 10, 'sbvxbzvcbx', '2017-12-19 00:00:00'),
(18, 5, 16, 'advdasvfasdvcADc', '2017-12-19 00:00:00'),
(19, 10, 5, 'sgfasdfgasdfgas', '2017-12-19 00:00:00'),
(20, 16, 10, 'sgdsfghsdghd', '2017-12-19 00:00:00'),
(21, 16, 10, 'dhdsghsdgh', '2017-12-19 00:00:00'),
(22, 10, 16, 'sjfhdfhdfh', '2017-12-19 00:00:00'),
(23, 5, 16, 'fgdcfbxbxcvb', '2017-12-19 00:00:00'),
(24, 5, 16, 'venki', '2017-12-19 00:00:00'),
(25, 16, 10, 'raj', '2017-12-19 00:00:00'),
(26, 5, 16, 'asdfasdfasd', '2017-12-19 00:00:00'),
(27, 10, 5, 'ghhghgcgchg', '2017-12-19 00:00:00'),
(28, 5, 16, 'sowji', '2017-12-19 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `pref_loc`
--

CREATE TABLE IF NOT EXISTS `pref_loc` (
  `pref_loc_id` int(11) NOT NULL AUTO_INCREMENT,
  `pref_loc_uid` int(11) NOT NULL,
  `pref_loc_name` varchar(100) NOT NULL,
  PRIMARY KEY (`pref_loc_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=37 ;

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
(15, 6, 'chennai'),
(16, 7, 'Visakhapatnam'),
(17, 7, 'bangalore'),
(18, 7, 'Hyderabad'),
(19, 8, 'Visakhapatnam'),
(20, 8, 'Hyderabad'),
(21, 8, 'Bangalore'),
(23, 11, 'vizag'),
(24, 11, 'vizag'),
(25, 16, 'vizag'),
(26, 17, 'hyderabad'),
(27, 17, 'chennai'),
(28, 17, 'rajamundry'),
(29, 19, 'visakhapatnam'),
(30, 19, 'bangalore'),
(31, 19, 'hyderabad'),
(32, 19, 'chennai'),
(33, 19, 'visakhapatnam'),
(34, 19, 'bangalore'),
(35, 19, 'hyderabad'),
(36, 19, 'chennai');

-- --------------------------------------------------------

--
-- Table structure for table `pref_skills`
--

CREATE TABLE IF NOT EXISTS `pref_skills` (
  `pref_id` int(11) NOT NULL AUTO_INCREMENT,
  `pref_sname` varchar(100) NOT NULL,
  `pref_rid` int(11) NOT NULL,
  `pref_post_id` int(11) NOT NULL,
  PRIMARY KEY (`pref_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=27 ;

--
-- Dumping data for table `pref_skills`
--

INSERT INTO `pref_skills` (`pref_id`, `pref_sname`, `pref_rid`, `pref_post_id`) VALUES
(1, 'html', 9, 20),
(2, 'php', 9, 20),
(3, 'bootstrap', 9, 20),
(4, 'java', 9, 20),
(5, 'c', 9, 20),
(6, 'php', 9, 25),
(7, 'mysqli', 9, 25),
(8, 'java', 9, 25),
(9, 'ajax', 9, 25),
(10, 'javascript', 9, 25),
(11, 'jquery', 9, 25),
(12, 'angularjs', 9, 25),
(13, 'php', 9, 26),
(14, 'mysqli', 9, 26),
(15, 'java', 9, 26),
(16, 'ajax', 9, 26),
(17, 'javascript', 9, 26),
(18, 'jquery', 9, 26),
(19, 'angularjs', 9, 26),
(20, 'php', 9, 27),
(21, 'mysqli', 9, 27),
(22, 'java', 9, 27),
(23, 'ajax', 9, 27),
(24, 'javascript', 9, 27),
(25, 'jquery', 9, 27),
(26, 'angularjs', 9, 27);

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
  FULLTEXT KEY `proj_sk_nm` (`proj_sk_nm`),
  FULLTEXT KEY `proj_sk_nm_2` (`proj_sk_nm`),
  FULLTEXT KEY `proj_sk_nm_3` (`proj_sk_nm`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=119 ;

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
(64, 6, 'ajax', 9),
(65, 0, 'html', 0),
(66, 0, 'grunt', 0),
(67, 0, 'gulp', 0),
(68, 0, 'angular', 0),
(69, 0, 'nodejs', 0),
(70, 0, 'html', 0),
(71, 0, 'grunt', 0),
(72, 0, 'gulp', 0),
(73, 0, 'angular', 0),
(74, 0, 'nodejs', 0),
(75, 0, 'js', 0),
(76, 0, 'bootstrap', 0),
(77, 0, 'html', 0),
(78, 0, 'grunt', 0),
(79, 0, 'gulp', 0),
(80, 0, 'angular', 0),
(81, 0, 'nodejs', 0),
(82, 0, 'js', 0),
(83, 0, 'bootstrap', 0),
(84, 0, 'Html', 0),
(85, 0, 'css', 0),
(86, 0, 'gulp', 0),
(87, 0, 'gruntjs', 0),
(88, 0, 'angularjs', 0),
(89, 0, 'cinema4d', 0),
(90, 16, 'jskfsjaorejijflaskjoajeo', 21),
(91, 16, 'kjfalj', 21),
(92, 16, 'adsfas', 21),
(93, 19, '', 22),
(94, 19, 'Java', 23),
(95, 19, 'struts', 23),
(96, 19, 'pl/sql', 23),
(97, 19, 'ajax', 23),
(98, 19, 'javascript', 23),
(99, 19, 'Java', 24),
(100, 19, 'struts', 24),
(101, 19, 'pl/sql', 24),
(102, 19, 'ajax', 24),
(103, 19, 'javascript', 24),
(104, 19, 'Java', 25),
(105, 19, 'struts', 25),
(106, 19, 'pl/sql', 25),
(107, 19, 'ajax', 25),
(108, 19, 'javascript', 25),
(109, 19, 'Java', 26),
(110, 19, 'struts', 26),
(111, 19, 'pl/sql', 26),
(112, 19, 'ajax', 26),
(113, 19, 'javascript', 26),
(114, 19, 'Java', 27),
(115, 19, 'struts', 27),
(116, 19, 'pl/sql', 27),
(117, 19, 'ajax', 27),
(118, 19, 'javascript', 27);

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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=35 ;

--
-- Dumping data for table `qualification`
--

INSERT INTO `qualification` (`q_id`, `q_uid`, `q_qual`, `q_cs`, `q_spz`, `q_ctype`, `q_mks`, `q_yr`, `q_inst`) VALUES
(1, 1, 'SSc', 'ghfg', 'fghf', 'hjghj', 234, 675, 'hjgj'),
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
(19, 5, 'Board', 'Qualification', '', '', 0, 0, 'Institute'),
(20, 7, 'btech', 'cse', 'btech', 'btech', 96, 2015, 'sankethika'),
(21, 7, 'ssc', '-', '-', 'Board', 96, 2009, 'Bhashyam Public School'),
(22, 8, 'ssc', '-', '-', 'Board', 98, 2002, 'Pollocks School'),
(23, 8, 'Btech', 'Cse', 'btech', 'Graduation', 98, 2005, 'Gitam'),
(25, 11, 'btech', 'cse', 'cse', 'cse', 88, 2018, 'asjd'),
(26, 11, 'btech', 'cse', 'cse', 'cse', 88, 2018, 'asjd'),
(27, 11, 'btech', 'cse', 'cse', 'cse', 88, 2018, 'asjd'),
(28, 16, 'ssc', 'Bsc', 'i am special', 'any course', 100, 2019, 'all colleges'),
(29, 17, 'state', 'intermediate', 'Intermediate', 'regular', 77, 2016, 'jr college'),
(30, 19, 'AU', 'BTech', 'Computer Science', 'Full time', 10, 2003, 'Andhra University'),
(31, 19, 'AU', 'Intermediate', 'MPC', 'Full time', 10, 1998, 'Andhra University'),
(32, 19, 'SSC', '10th', 'Social', 'Full time', 10, 1996, 'SSC'),
(33, 19, 'SSC', '10th', 'Social', 'Full time', 10, 1996, 'SSC'),
(34, 19, 'SSC', '10th', 'Social', 'Full time', 10, 1996, 'SSC');

-- --------------------------------------------------------

--
-- Table structure for table `rec_follow`
--

CREATE TABLE IF NOT EXISTS `rec_follow` (
  `fID` int(11) NOT NULL AUTO_INCREMENT,
  `f_status` int(1) NOT NULL DEFAULT '0',
  `rec_id` int(11) DEFAULT NULL,
  `can_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`fID`),
  KEY `can_id` (`can_id`),
  KEY `rec_id` (`rec_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=16 ;

--
-- Dumping data for table `rec_follow`
--

INSERT INTO `rec_follow` (`fID`, `f_status`, `rec_id`, `can_id`) VALUES
(15, 1, 10, 3),
(14, 1, 9, 3),
(13, 0, 9, 1);

-- --------------------------------------------------------

--
-- Table structure for table `rec_skills`
--

CREATE TABLE IF NOT EXISTS `rec_skills` (
  `rskill_id` int(11) NOT NULL AUTO_INCREMENT,
  `rskill_name` varchar(111) NOT NULL,
  `rec_id` int(11) NOT NULL,
  `jpost_id` int(11) NOT NULL,
  PRIMARY KEY (`rskill_id`),
  FULLTEXT KEY `rskill_name` (`rskill_name`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=113 ;

--
-- Dumping data for table `rec_skills`
--

INSERT INTO `rec_skills` (`rskill_id`, `rskill_name`, `rec_id`, `jpost_id`) VALUES
(1, 'css', 9, 11),
(2, 'html', 9, 11),
(3, 'bootstrap', 9, 11),
(4, 'php', 9, 11),
(86, '.net', 10, 19),
(87, 'jquery', 10, 19),
(88, 'ajax', 10, 19),
(89, 'php', 10, 19),
(90, 'html', 10, 19),
(91, 'css', 10, 19),
(92, 'javascript', 9, 20),
(93, 'htm', 9, 20),
(94, 'css', 9, 20),
(95, 'php', 9, 20),
(96, 'ajax', 9, 20),
(97, 'java', 9, 19),
(98, 'Android', 9, 19),
(99, 'phonegap', 9, 19),
(100, 'cordova', 9, 19),
(101, 'cordova', 9, 19),
(102, 'html', 9, 19),
(103, 'phonegap', 9, 19),
(104, 'gulp', 9, 19),
(105, 'grunt', 9, 19),
(106, 'css', 9, 19),
(107, 'html', 9, 19),
(108, 'javascript', 9, 19),
(109, 'jquery', 9, 19),
(110, 'jso', 9, 19),
(111, 'angularjs', 9, 19),
(112, 'angular', 9, 19);

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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=111 ;

--
-- Dumping data for table `resume_status`
--

INSERT INTO `resume_status` (`cv_jb_id`, `cv_can_id`, `jb_applied`, `cv_saveltr`, `cv_shortlisted`, `cv_suggested`, `cv_id`) VALUES
(11, 3, 1, 0, 1, 0, 2),
(11, 2, 1, 0, 1, 0, 3),
(11, 4, 1, 0, 1, 0, 4),
(11, 1, 1, 0, 1, 0, 74),
(19, 1, 1, 0, 0, 0, 75),
(11, 5, 1, 0, 1, 0, 76),
(20, 5, 1, 0, 0, 0, 77),
(20, 1, 1, 0, 0, 0, 78),
(21, 1, 1, 0, 0, 0, 79),
(11, 7, 1, 0, 0, 0, 80),
(20, 7, 1, 0, 0, 0, 81),
(21, 7, 1, 0, 0, 0, 82),
(19, 7, 1, 0, 0, 0, 83),
(22, 7, 1, 0, 0, 0, 84),
(22, 8, 1, 0, 0, 0, 85),
(11, 8, 1, 0, 0, 0, 86),
(20, 8, 1, 0, 0, 0, 87),
(21, 8, 1, 0, 0, 0, 88),
(22, 1, 1, 0, 0, 0, 91),
(19, 2, 1, 0, 0, 0, 108),
(23, 11, 1, 0, 0, 0, 107),
(22, 11, 1, 0, 0, 0, 106),
(21, 11, 1, 0, 0, 0, 105),
(20, 11, 1, 0, 0, 0, 104),
(19, 11, 1, 0, 0, 0, 103),
(11, 11, 1, 0, 0, 0, 102),
(23, 1, 1, 0, 0, 0, 101),
(19, 3, 1, 0, 0, 0, 109),
(11, 16, 1, 0, 0, 0, 110);

-- --------------------------------------------------------

--
-- Table structure for table `r_jobpost`
--

CREATE TABLE IF NOT EXISTS `r_jobpost` (
  `j_id` int(111) NOT NULL AUTO_INCREMENT,
  `j_title` varchar(111) DEFAULT NULL,
  `j_condition` varchar(100) NOT NULL,
  `j_desc` varchar(1000) DEFAULT NULL,
  `j_exp` varchar(111) DEFAULT NULL,
  `j_salary` varchar(111) DEFAULT NULL,
  `r_id` int(111) DEFAULT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `j_location` varchar(100) NOT NULL,
  `j_role` varchar(100) NOT NULL,
  `j_shift` varchar(50) NOT NULL,
  PRIMARY KEY (`j_id`),
  KEY `r_id` (`r_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=28 ;

--
-- Dumping data for table `r_jobpost`
--

INSERT INTO `r_jobpost` (`j_id`, `j_title`, `j_condition`, `j_desc`, `j_exp`, `j_salary`, `r_id`, `date`, `j_location`, `j_role`, `j_shift`) VALUES
(11, 'PHP DEVELOPER', '', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore m', '1-2', '2L', 9, '2017-12-18 02:28:09', '', '', ''),
(19, 'PHP Developer', '', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '1-2', '2 L', 10, '2017-12-18 02:28:09', '', '', ''),
(20, 'Android developer', '', 'Wanted Android Developer with 3 years Experience having knowledge on Java and Android Studio.', '1-2', '25000', 9, '2017-12-18 02:28:09', '', '', ''),
(21, 'Test jobs ', '', 'gasgfgdfs', '0-1', '3.5-5', 9, '2017-12-18 02:28:09', '', '', ''),
(22, 'Gulpjs developer required', '', 'asvasvasf\nasfvafvasfvasfvasf\navasfvasdvas', '0-1', '35000', 9, '2017-12-18 02:28:09', '', '', ''),
(23, 'AngularJs Developer', '', 'wanted JS developers with 2 years experience. Having Knowledge on JavaScript, j Query, Angular JS.', '1-2', '20000', 9, '2017-12-18 02:41:28', '', '', ''),
(25, 'Sr. Software Developer ', 'Regular', 'Developing ERP Based Projects\nCreate connection pools, tabels and defined primary key foreign key joins, complex joins in the hysical layer of the repository.\nCustomised Jasper reports\nperformance tuninng complex queries\nDevelop complex reports', '1-2', '300000', 9, '2017-12-30 12:18:12', 'hyderabad', 'Senior Developer', ''),
(26, 'Sr. Software Developer ', 'Regular', 'Developing ERP Based Projects\nCreate connection pools, tabels and defined primary key foreign key joins, complex joins in the hysical layer of the repository.\nCustomised Jasper reports\nperformance tuninng complex queries\nDevelop complex reports', '1-2', '300000', 9, '2017-12-30 12:18:14', 'hyderabad', 'Senior Developer', ''),
(27, 'Sr. Software Developer ', 'Regular', 'Developing ERP Based Projects\nCreate connection pools, tabels and defined primary key foreign key joins, complex joins in the hysical layer of the repository.\nCustomised Jasper reports\nperformance tuninng complex queries\nDevelop complex reports', '1-2', '300000', 9, '2017-12-30 12:18:14', 'hyderabad', 'Senior Developer', '');

-- --------------------------------------------------------

--
-- Table structure for table `r_jobpost_old`
--

CREATE TABLE IF NOT EXISTS `r_jobpost_old` (
  `j_id` int(111) NOT NULL AUTO_INCREMENT,
  `j_title` varchar(111) DEFAULT NULL,
  `j_desc` varchar(111) DEFAULT NULL,
  `j_exp` varchar(111) DEFAULT NULL,
  `j_salary` varchar(111) DEFAULT NULL,
  `r_id` int(111) DEFAULT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`j_id`),
  KEY `r_id` (`r_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=24 ;

--
-- Dumping data for table `r_jobpost_old`
--

INSERT INTO `r_jobpost_old` (`j_id`, `j_title`, `j_desc`, `j_exp`, `j_salary`, `r_id`, `date`) VALUES
(11, 'PHP DEVELOPER', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore m', '1-2', '2L', 9, '2017-12-18 02:28:09'),
(19, 'PHP Developer', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '1-2', '2 L', 10, '2017-12-18 02:28:09'),
(20, 'Android developer', 'Wanted Android Developer with 3 years Experience having knowledge on Java and Android Studio.', '1-2', '25000', 9, '2017-12-18 02:28:09'),
(21, 'Test jobs ', 'gasgfgdfs', '0-1', '3.5-5', 9, '2017-12-18 02:28:09'),
(22, 'Gulpjs developer required', 'asvasvasf\nasfvafvasfvasfvasf\navasfvasdvas', '0-1', '35000', 9, '2017-12-18 02:28:09'),
(23, 'AngularJs Developer', 'wanted JS developers with 2 years experience. Having Knowledge on JavaScript, j Query, Angular JS.', '1-2', '20000', 9, '2017-12-18 02:41:28');

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
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=26 ;

--
-- Dumping data for table `r_reginfo`
--

INSERT INTO `r_reginfo` (`r_id`, `r_fname`, `r_uname`, `r_mobile`, `r_landline`, `r_mail`, `r_altmail`, `r_pswd`, `r_compname`, `r_desgn`, `r_inds`, `r_country`, `r_state`, `r_city`, `r_pincode`, `r_status`) VALUES
(9, 'Rajesh Reddy', 'Rajesh', '9010460780', '2781166', 'rajesh@betasolutions.in', 'stevejobs1024@gmail.com', '123', 'betasolutions', 'CEO', 'IT', '', '', '', 530041, 0),
(10, 'niranjan', 'Niranjan ', '9010460780', '2781166', 'niranjan@betasolutions.in', 'niru@gmail.com', '1234', 'kapsodi', 'ceo', 'IT', '', '', '', 530041, 0),
(11, 'keerthi', 'keerthi', '999999999', '99999999', 'keerthi@123', 'keerthi@12', '12345', 'retredre', 'sdfdf', 'IT', '', '', '', 45454, 0),
(12, 'keerthi', 'keerthi', '999999999', '99999999', 'keerthi@123', 'keerthi@12', '', 'retredre', 'sdfdf', 'IT', '', '', '', 45454, 0),
(13, 'keerthi', 'keerthi', '999999999', '99999999', 'keerthi@123', 'keerthi@12', '12345', 'retredre', 'sdfdf', 'IT', '', '', '', 45454, 0),
(14, 'keerthi', 'keerthi', '999999999', '99999999', 'keerthi@123', 'keerthi@12', '12345', 'retredre', 'sdfdf', 'IT', '', '', '', 45454, 0),
(15, 'keerthi', 'keerthi', '999999999', '99999999', 'keerthi@123', 'keerthi@12', '12345', 'retredre', 'sdfdf', 'IT', '', '', '', 45454, 0),
(16, 'keerthi', 'keerthi', '999999999', '99999999', 'keerthi@123', 'keerthi@12', '12345', 'retredre', 'sdfdf', 'IT', '', '', '', 45454, 0),
(17, 'keerthi', 'keerthi', '999999999', '99999999', 'keerthi@123', 'keerthi@12', '12345', 'retredre', 'sdfdf', 'IT', '', '', '', 45454, 0),
(18, 'keerthi', 'dfdf', '4545454', '44444444', 'keerthi@123', 'keerthi@12345', '12345', 'ijsdf', 'ksdokj', 'IT', '', '', '', 666666, 0),
(19, 'keerthi', 'dfdf', '4545454', '44444444', 'keerthi@123', 'keerthi@12345', '12345', 'ijsdf', 'ksdokj', 'IT', '', '', '', 666666, 0),
(20, 'keerthi', 'dfdf', '4545454', '44444444', 'keerthi@123', 'keerthi@12345', '', 'ijsdf', 'ksdokj', 'IT', '', '', '', 666666, 0),
(21, 'keerthi', 'dfdf', '4545454', '44444444', 'keerthi@123', 'keerthi@12345', '12345', 'ijsdf', 'ksdokj', 'IT', '', '', '', 666666, 0),
(22, 'keerthi', 'dfdf', '4545454', '44444444', 'keerthi@123', 'keerthi@12345', '12345', 'ijsdf', 'ksdokj', 'IT', '', '', '', 666666, 0),
(23, 'keerthi', 'dfdf', '4545454', '44444444', 'keerthi@123', 'keerthi@12345', '', 'ijsdf', 'ksdokj', 'IT', '', '', '', 666666, 0),
(24, 'gfhgf', 'gfgfhg', '5656565', '565656', 'keerthi@123', 'keerthi@ndfd', '123', 'dfgdgf', 'fgdgf', 'IT', '', '', '', 4334534, 0),
(25, 'gfhgf', 'gfgfhg', '5656565', '565656', 'keerthi@123', 'keerthi@ndfd', '123', 'dfgdgf', 'fgdgf', 'IT', '', '', '', 4334534, 0);

-- --------------------------------------------------------

--
-- Table structure for table `states`
--

CREATE TABLE IF NOT EXISTS `states` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `country_id` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
