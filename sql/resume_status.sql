-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 13, 2017 at 12:44 PM
-- Server version: 5.7.20-0ubuntu0.16.04.1
-- PHP Version: 7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hawkeye`
--

-- --------------------------------------------------------

--
-- Table structure for table `resume_status`
--

CREATE TABLE `resume_status` (
  `cv_id` int(11) NOT NULL,
  `cv_jb_id` int(11) DEFAULT NULL,
  `cv_can_id` int(11) DEFAULT NULL,
  `jb_applied` int(1) NOT NULL DEFAULT '0',
  `cv_saveltr` int(1) NOT NULL DEFAULT '0',
  `cv_shortlisted` int(1) NOT NULL DEFAULT '0',
  `cv_suggested` int(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `resume_status`
--
ALTER TABLE `resume_status`
  ADD PRIMARY KEY (`cv_id`),
  ADD KEY `cv_jb_id` (`cv_jb_id`),
  ADD KEY `cv_can_id` (`cv_can_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `resume_status`
--
ALTER TABLE `resume_status`
  ADD CONSTRAINT `resume_status_ibfk_1` FOREIGN KEY (`cv_jb_id`) REFERENCES `r_jobpost` (`j_id`),
  ADD CONSTRAINT `resume_status_ibfk_2` FOREIGN KEY (`cv_can_id`) REFERENCES `c_log` (`cl_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
