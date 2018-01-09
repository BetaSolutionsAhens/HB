-- phpMyAdmin SQL Dump
-- version 3.5.8.2
-- http://www.phpmyadmin.net
--
-- Host: sql211.epizy.com
-- Generation Time: Dec 22, 2017 at 11:23 AM
-- Server version: 5.6.35-81.0
-- PHP Version: 5.3.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `epiz_21238309_hawkeye`
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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

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
(12, 11, 'b.jpg', '2/February/2011', 'female', 'single', 'vizag');

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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

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
(14, '12345', 'kommojukeerthi@gmail.com', 0);

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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

--
-- Dumping data for table `c_log`
--

INSERT INTO `c_log` (`cl_id`, `cl_phn`, `cl_pwd`, `cl_time`, `cl_status`, `cl_n`, `cl_em`, `cl_un`, `status`) VALUES
(1, '1234567890', '123456', '2017-11-10 07:40:56', 'i agree', 'swaroopa', 'swaroopa@123', 'swaroopa', 1),
(2, '9876543210', 'sowji123', '2017-11-13 12:53:34', 'i agree', 'sowjanya', 'sowjanya@betasolutions.in', 'sowji', 1),
(3, '1234567890', '123456', '2017-11-13 12:55:06', 'i agree', 'vamsi', 'vamsi@betasolutions.in', 'vamsi', 1),
(4, '1234567890', '123456', '2017-11-20 08:58:56', 'i agree', 'swara', 'swara@betasolutions.in', 'swara', 1),
(5, '8897708152', '123', '2017-11-21 08:34:54', 'i agree', 'chandu', 'chandu@gmail.com', 'chandu', 1),
(6, '1234567890', '123456', '2017-12-01 08:39:00', 'i agree', 'sanjana', 'sanju@mail.com', 'sanju', 1),
(7, '9059091056', 'admin', '2017-12-14 08:38:45', 'i agree', 'Venkatesh', 'venki@gmail.com', 'Venki', 1),
(8, '9999999999', 'admin', '2017-12-14 08:58:54', 'i agree', 'Vara', 'vara@gmail.com', 'vara', 1),
(13, '999999999', '12345', '2017-12-22 03:41:31', 'i agree', 'keerthi', 'kommojukeerthi@gmail.com', 'keerthi', 0),
(12, '9999999999', '123456', '2017-12-22 03:39:46', 'i agree', 'keerthi', 'keerthi@12345', 'keerthi1232', 0),
(11, '999999999', '12345', '2017-12-21 02:12:17', 'i agree', 'keerthi', 'keerthi@betasolutions.in', 'keerthi123', 1),
(14, '9999999999', '12345', '2017-12-22 03:43:32', 'i agree', 'keerthi', 'kommojukeerthi@gmail.com', 'keerthi', 0);

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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

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
(12, 11, 'it', 'fre');

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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `exp`
--

INSERT INTO `exp` (`ex_id`, `ex_cc`, `ex_uid`, `ex_desc`, `ex_cjob_type`, `ex_prefjob_type`, `ex_c_comp`, `ex_exp_comps`, `ex_years`) VALUES
(1, 'betasolutions', 3, 'senior developer', 'experienced', 'experienced', '20000', '25000', 3),
(2, 'betasolutions', 2, 'senior developer', 'experienced', 'experienced', '3L', '4L', 3),
(3, 'betasolutions', 4, 'senior developer', 'experienced', 'experienced', '2L', '3L', 1),
(4, 'betasolutions', 6, 'web developer', 'experienced', 'experienced', '1.5 L', '2L', 2),
(5, 'Beta Solutions', 7, 'Developer', 'fresher', 'experienced', '14000', '25000', 2),
(6, '', 8, 'DEVELOPER', 'fresher', 'experienced', '3.5', '5', 14);

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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=21 ;

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
(20, 8, 'Hawk Eye', 'HR', 'Axis Minds', '3 months', 'Team Lead', '');

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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `fresher`
--

INSERT INTO `fresher` (`fs_id`, `fs_uid`, `fs_proj_nm`, `fs_proj_desc`, `fs_w_nm`, `fs_w_desc`, `fs_part`) VALUES
(1, 1, 'project1', 'project_desc', 'workshop1', 'worksho desxc', 'presentetion1'),
(2, 5, '8051 micro controller', 'description of 8051 micro controller and its pin diagram', 'workshop 1', '', 'powerpoint presentation on micro processor'),
(3, 5, 'hawk eye', 'Project Description', 'Workshop Name', '', 'Presentation'),
(4, 11, 'dfgdgfdg', 'sdfdsfgdf', 'sfgsdf', '', 'sdfdgdgdf');

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
  PRIMARY KEY (`g_sk_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=68 ;

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
(65, 11, 'html');

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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=35 ;

--
-- Dumping data for table `messages_tbl`
--

INSERT INTO `messages_tbl` (`msg_id`, `rec_id`, `can_id`, `messageText`, `sender_id`, `receiver_id`, `msg_status`, `rec_accept_can`, `rec_request`, `can_request`, `msg_datetime`) VALUES
(1, 9, 3, 'hi', 's_9', 'r_3', 1, 0, 0, 0, '2017-12-20 01:25:27'),
(2, 9, 3, 'hi', 's_9', 'r_3', 1, 0, 0, 0, '2017-12-20 01:25:55'),
(3, 9, 3, 'sowji', 's_9', 'r_3', 1, 0, 0, 0, '2017-12-20 01:26:22'),
(4, 9, 3, 'How are you?', 's_9', 'r_3', 1, 0, 0, 0, '2017-12-20 01:42:16'),
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
(34, 9, 1, 'hi', 's_9', 'r_1', 1, 0, 0, 0, '2017-12-22 02:01:38');

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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=25 ;

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
(24, 11, 'vizag');

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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=90 ;

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
(89, 0, 'cinema4d', 0);

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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=28 ;

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
(19, 5, 'Board', 'Qualification', '', '', 0, 0, 'Institute'),
(20, 7, 'btech', 'cse', 'btech', 'btech', 96, 2015, 'sankethika'),
(21, 7, 'ssc', '-', '-', 'Board', 96, 2009, 'Bhashyam Public School'),
(22, 8, 'ssc', '-', '-', 'Board', 98, 2002, 'Pollocks School'),
(23, 8, 'Btech', 'Cse', 'btech', 'Graduation', 98, 2005, 'Gitam'),
(25, 11, 'btech', 'cse', 'cse', 'cse', 88, 2018, 'asjd'),
(26, 11, 'btech', 'cse', 'cse', 'cse', 88, 2018, 'asjd'),
(27, 11, 'btech', 'cse', 'cse', 'cse', 88, 2018, 'asjd');

-- --------------------------------------------------------

--
-- Table structure for table `rec_follow`
--

CREATE TABLE IF NOT EXISTS `rec_follow` (
  `fID` int(11) NOT NULL AUTO_INCREMENT,
  `f_status` int(1) NOT NULL DEFAULT '0',
  `rec_id` int(11) DEFAULT NULL,
  `can_id` int(11) DEFAULT NULL,
  `j_id` int(111) NOT NULL,
  PRIMARY KEY (`fID`),
  KEY `can_id` (`can_id`),
  KEY `rec_id` (`rec_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `rec_follow`
--

INSERT INTO `rec_follow` (`fID`, `f_status`, `rec_id`, `can_id`, `j_id`) VALUES
(1, 1, 9, 1, 11),
(5, 1, 9, 1, 20),
(6, 0, 9, 1, 23),
(7, 1, 10, 2, 19),
(8, 1, 9, 2, 20),
(9, 1, 9, 11, 20);

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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=109 ;

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
(23, 1, 1, 0, 0, 0, 101);

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
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`j_id`),
  KEY `r_id` (`r_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=24 ;

--
-- Dumping data for table `r_jobpost`
--

INSERT INTO `r_jobpost` (`j_id`, `j_title`, `j_desc`, `j_exp`, `j_salary`, `r_id`, `date`) VALUES
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
