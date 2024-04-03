-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 28, 2024 at 11:37 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fullstack`
--

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `userid` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `name`, `password`, `userid`) VALUES
(1, 'shetty', '123', 'shetty@gmail.com'),
(2, 'bvc', '1234', 'bvc@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `quiz`
--

CREATE TABLE `quiz` (
  `id` int(11) NOT NULL,
  `answer` varchar(255) DEFAULT NULL,
  `difficulty_level` varchar(255) DEFAULT NULL,
  `option1` varchar(255) DEFAULT NULL,
  `option2` varchar(255) DEFAULT NULL,
  `option3` varchar(255) DEFAULT NULL,
  `option4` varchar(255) DEFAULT NULL,
  `question_title` varchar(255) DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quiz`
--

INSERT INTO `quiz` (`id`, `answer`, `difficulty_level`, `option1`, `option2`, `option3`, `option4`, `question_title`, `category`) VALUES
(51, 'Paris', 'Easy', 'Paris', 'London', 'Berlin', 'Rome', 'What is the capital of France?', 'Geography'),
(52, 'Leonardo da Vinci', 'Medium', 'Leonardo da Vinci', 'Vincent van Gogh', 'Pablo Picasso', 'Michelangelo', 'Who painted the Mona Lisa?', 'Art'),
(53, 'Mitochondria', 'Easy', 'Nucleus', 'Cell membrane', 'Mitochondria', 'Endoplasmic reticulum', 'What is the powerhouse of the cell?', 'Biology'),
(54, '1912', 'Medium', '1912', '1914', '1908', '1920', 'What year did the Titanic sink?', 'History'),
(55, 'Mars', 'Easy', 'Jupiter', 'Venus', 'Mars', 'Saturn', 'Which planet is known as the Red Planet?', 'Astronomy'),
(56, 'H2O', 'Medium', 'H2O', 'CO2', 'NaCl', 'O2', 'What is the chemical symbol for water?', 'Chemistry'),
(57, 'William Shakespeare', 'Easy', 'William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain', 'Who wrote \"Romeo and Juliet\"?', 'Literature'),
(58, 'Skin', 'Medium', 'Liver', 'Heart', 'Skin', 'Lungs', 'What is the largest organ in the human body?', 'Biology'),
(59, 'Alexander Graham Bell', 'Easy', 'Thomas Edison', 'Alexander Graham Bell', 'Nikola Tesla', 'Albert Einstein', 'Who is credited with inventing the telephone?', 'History'),
(60, 'Au', 'Medium', 'Au', 'Ag', 'Fe', 'Hg', 'What is the chemical symbol for gold?', 'Chemistry'),
(403, 'r', NULL, 'ab', 'cd', 'ed', 'gf', NULL, 'ef'),
(404, 'bsd', NULL, 'hi', 'hlo', 'bye', 'lvd', NULL, 'nerpun'),
(405, '', NULL, '', '', '', '', NULL, ''),
(406, 'k', NULL, 'j', 'd', 'e', 'h', NULL, 'p'),
(407, 'f', '', 'b', 'c', 'd', 'e', '', 'h');

-- --------------------------------------------------------

--
-- Table structure for table `quiz_seq`
--

CREATE TABLE `quiz_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quiz_seq`
--

INSERT INTO `quiz_seq` (`next_val`) VALUES
(101);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `address`, `name`) VALUES
(1, 'u', 'j'),
(2, 'u', 'j'),
(3, 'bvc', 'ui');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `quiz`
--
ALTER TABLE `quiz`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=408;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
