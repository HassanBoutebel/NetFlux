-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: netflux
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `actors`
--

DROP TABLE IF EXISTS `actors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text,
  `imgURL` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actors`
--

LOCK TABLES `actors` WRITE;
/*!40000 ALTER TABLE `actors` DISABLE KEYS */;
INSERT INTO `actors` (`id`, `name`, `imgURL`) VALUES (1,'Jennifer Lawrence','/img/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_UX32_CR0,0,32,44_AL_.jpg'),(2,'Chris Pratt','/img/MV5BNzg3MTgwOTgzMV5BMl5BanBnXkFtZTgwODIxMTUwMjE@._V1_UX32_CR0,0,32,44_AL_.jpg'),(3,'Michael Sheen','/img/MV5BMTg0MjI4NjY2M15BMl5BanBnXkFtZTcwOTgwNjQzMg@@._V1_UX32_CR0,0,32,44_AL_.jpg'),(4,'Laurence Fishburne','/img/MV5BMTc0NjczNDc1MV5BMl5BanBnXkFtZTYwMDU0Mjg1._V1_UX32_CR0,0,32,44_AL_.jpg'),(5,'Andy Garcia','/img/MV5BMjM3NDA5NTgxNl5BMl5BanBnXkFtZTgwMzU3NDc4NDE@._V1_UY44_CR1,0,32,44_AL_.jpg'),(6,'Vince Foster','/img/MV5BNzhjMDg3YmItZjAzMC00Yzk4LTljMjUtNjk3NTJlZjg4YWZjXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UX32_CR0,0,32,44_AL_.jpg'),(7,'Matt Damon','/img/MV5BMTM0NzYzNDgxMl5BMl5BanBnXkFtZTcwMDg2MTMyMw@@._V1_UY44_CR0,0,32,44_AL_.jpg'),(8,'Tian Jing','/img/MV5BMTc1MDMzMjg1OV5BMl5BanBnXkFtZTgwODcxMzM0MzE@._V1_UX32_CR0,0,32,44_AL_.jpg'),(9,'Willem Dafoe','/img/MV5BMTcyNjU2MTYyM15BMl5BanBnXkFtZTgwMjY5MDY4NDE@._V1_UY44_CR1,0,32,44_AL_.jpg'),(10,'Andy Lau','/img/MV5BMzQzNDkxMjMxMl5BMl5BanBnXkFtZTYwMzMzODA3._V1_UY44_CR16,0,32,44_AL_.jpg'),(11,'Pedro Pascal','/img/MV5BMjI2NDU2MTM0MF5BMl5BanBnXkFtZTcwNzAxNzU3OA@@._V1_UY44_CR26,0,32,44_AL_.jpg'),(12,'Hanyu Zhang','/img/MV5BMTA4NjM2MTQ1MzFeQTJeQWpwZ15BbWU4MDQwNDA4NTkx._V1_UY44_CR26,0,32,44_AL_.jpg'),(13,'Han Lu','/img/MV5BMTA4NjM2MTQ1MzFeQTJeQWpwZ15BbWU4MDQwNDA4NTkx._V1_UY44_CR26,0,32,44_AL_.jpg'),(14,'Kenny Lin','/img/MV5BMTkzNDYyNjA4OF5BMl5BanBnXkFtZTgwNjAwNjY4MzE@._V1_UY44_CR17,0,32,44_AL_.jpg');
/*!40000 ALTER TABLE `actors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `imgURL` text,
  `title` text,
  `description` text,
  `year` int DEFAULT NULL,
  `duration` int DEFAULT NULL,
  `director` text,
  `is_featured` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` (`id`, `imgURL`, `title`, `description`, `year`, `duration`, `director`, `is_featured`) VALUES (1,'/img/MV5BMTYxODU3NTc2NF5BMl5BanBnXkFtZTgwMzAyNzU0MDI@._V1_SX1500_CR0,0,1500,999_AL_.jpg','Passengers',' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel purus accumsan, sagittis magna non, molestie nibh. Donec scelerisque, nulla at sodales feugiat, justo metus bibendum metus, ac efficitur sem arcu a lectus. Proin eu tellus porttitor, aliquam nisi ac, consectetur massa. Suspendisse non urna sit amet arcu tempor lobortis. Suspendisse eu ligula mi. Ut urna nibh, laoreet non suscipit nec, tempor semper sapien. Integer commodo urna in laoreet pretium. Nam viverra venenatis dolor cursus iaculis. Aliquam non facilisis velit. Nullam non tempus mi, non auctor augue. Praesent orci velit, sagittis tincidunt convallis nec, lobortis ut nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',2016,116,'Morten Tyldum',0),(2,'/img/MV5BMjM0MDY1NzUzOF5BMl5BanBnXkFtZTgwODQzODc0MTI@._V1_SX1777_CR0,0,1777,950_AL_.jpg','La gran muralla',' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel purus accumsan, sagittis magna non, molestie nibh. Donec scelerisque, nulla at sodales feugiat, justo metus bibendum metus, ac efficitur sem arcu a lectus. Proin eu tellus porttitor, aliquam nisi ac, consectetur massa. Suspendisse non urna sit amet arcu tempor lobortis. Suspendisse eu ligula mi. Ut urna nibh, laoreet non suscipit nec, tempor semper sapien. Integer commodo urna in laoreet pretium. Nam viverra venenatis dolor cursus iaculis. Aliquam non facilisis velit. Nullam non tempus mi, non auctor augue. Praesent orci velit, sagittis tincidunt convallis nec, lobortis ut nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',2016,103,'Yimou Zhang',0),(3,'/img/MV5BNzljZGQ2NzYtNzFiMi00MWU1LTk0MWUtMDU2ZGY1ZGEwMDRjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTk5MjkzMjU@._V1_SX1777_CR0,0,1777,999_AL_.jpg','7 años',' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel purus accumsan, sagittis magna non, molestie nibh. Donec scelerisque, nulla at sodales feugiat, justo metus bibendum metus, ac efficitur sem arcu a lectus. Proin eu tellus porttitor, aliquam nisi ac, consectetur massa. Suspendisse non urna sit amet arcu tempor lobortis. Suspendisse eu ligula mi. Ut urna nibh, laoreet non suscipit nec, tempor semper sapien. Integer commodo urna in laoreet pretium. Nam viverra venenatis dolor cursus iaculis. Aliquam non facilisis velit. Nullam non tempus mi, non auctor augue. Praesent orci velit, sagittis tincidunt convallis nec, lobortis ut nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',2016,77,'Roger Gual',0),(4,'/img/MV5BMjExNTQxOTE1Ml5BMl5BanBnXkFtZTcwMDE3MDgzNA@@._V1_SY1000_CR0,0,1506,1000_AL_.jpg','Destino oculto',' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel purus accumsan, sagittis magna non, molestie nibh. Donec scelerisque, nulla at sodales feugiat, justo metus bibendum metus, ac efficitur sem arcu a lectus. Proin eu tellus porttitor, aliquam nisi ac, consectetur massa. Suspendisse non urna sit amet arcu tempor lobortis. Suspendisse eu ligula mi. Ut urna nibh, laoreet non suscipit nec, tempor semper sapien. Integer commodo urna in laoreet pretium. Nam viverra venenatis dolor cursus iaculis. Aliquam non facilisis velit. Nullam non tempus mi, non auctor augue. Praesent orci velit, sagittis tincidunt convallis nec, lobortis ut nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',2011,105,'George Nolfi',0),(5,'/img/MV5BNTc3NzQxOTAxMV5BMl5BanBnXkFtZTgwMzA0NDQ1MDI@._V1_SY1000_CR0,0,1601,1000_AL_.jpg','La llegada',' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel purus accumsan, sagittis magna non, molestie nibh. Donec scelerisque, nulla at sodales feugiat, justo metus bibendum metus, ac efficitur sem arcu a lectus. Proin eu tellus porttitor, aliquam nisi ac, consectetur massa. Suspendisse non urna sit amet arcu tempor lobortis. Suspendisse eu ligula mi. Ut urna nibh, laoreet non suscipit nec, tempor semper sapien. Integer commodo urna in laoreet pretium. Nam viverra venenatis dolor cursus iaculis. Aliquam non facilisis velit. Nullam non tempus mi, non auctor augue. Praesent orci velit, sagittis tincidunt convallis nec, lobortis ut nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',2016,116,'Denis Villeneuve',1),(6,'/img/MV5BMjEwNzIyMDAzNV5BMl5BanBnXkFtZTcwMDA5MjMzMw@@._V1_SX1777_CR0,0,1777,955_AL_.jpg','Crank: Veneno en la sangre',' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel purus accumsan, sagittis magna non, molestie nibh. Donec scelerisque, nulla at sodales feugiat, justo metus bibendum metus, ac efficitur sem arcu a lectus. Proin eu tellus porttitor, aliquam nisi ac, consectetur massa. Suspendisse non urna sit amet arcu tempor lobortis. Suspendisse eu ligula mi. Ut urna nibh, laoreet non suscipit nec, tempor semper sapien. Integer commodo urna in laoreet pretium. Nam viverra venenatis dolor cursus iaculis. Aliquam non facilisis velit. Nullam non tempus mi, non auctor augue. Praesent orci velit, sagittis tincidunt convallis nec, lobortis ut nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',2006,84,'Mark Neveldine',0),(7,'/img/MV5BMjY4NTQ4MzIwOV5BMl5BanBnXkFtZTgwOTU2MzE3MDI@._V1_.jpg','Rogue One: Una historia de Star Wars',' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel purus accumsan, sagittis magna non, molestie nibh. Donec scelerisque, nulla at sodales feugiat, justo metus bibendum metus, ac efficitur sem arcu a lectus. Proin eu tellus porttitor, aliquam nisi ac, consectetur massa. Suspendisse non urna sit amet arcu tempor lobortis. Suspendisse eu ligula mi. Ut urna nibh, laoreet non suscipit nec, tempor semper sapien. Integer commodo urna in laoreet pretium. Nam viverra venenatis dolor cursus iaculis. Aliquam non facilisis velit. Nullam non tempus mi, non auctor augue. Praesent orci velit, sagittis tincidunt convallis nec, lobortis ut nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',2016,134,'Gareth Edwards',1),(8,'/img/MV5BMzEzOTI1NzkyNF5BMl5BanBnXkFtZTgwNzM2NzYzMjE@._V1._SX688_CR0,00,688,403_.jpg','Vengadores: La era de Ultrón',' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel purus accumsan, sagittis magna non, molestie nibh. Donec scelerisque, nulla at sodales feugiat, justo metus bibendum metus, ac efficitur sem arcu a lectus. Proin eu tellus porttitor, aliquam nisi ac, consectetur massa. Suspendisse non urna sit amet arcu tempor lobortis. Suspendisse eu ligula mi. Ut urna nibh, laoreet non suscipit nec, tempor semper sapien. Integer commodo urna in laoreet pretium. Nam viverra venenatis dolor cursus iaculis. Aliquam non facilisis velit. Nullam non tempus mi, non auctor augue. Praesent orci velit, sagittis tincidunt convallis nec, lobortis ut nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',2015,143,'Joss Whedon',0);
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies_has_actors`
--

DROP TABLE IF EXISTS `movies_has_actors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies_has_actors` (
  `movies_id` int NOT NULL,
  `actors_id` int NOT NULL,
  PRIMARY KEY (`movies_id`,`actors_id`),
  KEY `fk_movies_has_actors_actors1_idx` (`actors_id`),
  KEY `fk_movies_has_actors_movies_idx` (`movies_id`),
  CONSTRAINT `fk_movies_has_actors_actors1` FOREIGN KEY (`actors_id`) REFERENCES `actors` (`id`),
  CONSTRAINT `fk_movies_has_actors_movies` FOREIGN KEY (`movies_id`) REFERENCES `movies` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies_has_actors`
--

LOCK TABLES `movies_has_actors` WRITE;
/*!40000 ALTER TABLE `movies_has_actors` DISABLE KEYS */;
INSERT INTO `movies_has_actors` (`movies_id`, `actors_id`) VALUES (1,1),(1,2),(1,3),(1,4),(1,5),(1,6),(2,7),(3,7),(5,7),(6,7),(7,7),(8,7),(2,8),(3,8),(5,8),(6,8),(7,8),(8,8),(2,9),(3,9),(5,9),(6,9),(7,9),(8,9),(2,10),(3,10),(5,10),(6,10),(7,10),(8,10),(2,11),(3,11),(5,11),(6,11),(7,11),(8,11),(2,12),(3,12),(5,12),(6,12),(7,12),(8,12),(2,13),(3,13),(5,13),(6,13),(7,13),(8,13),(2,14),(3,14),(4,14),(5,14),(6,14),(7,14),(8,14);
/*!40000 ALTER TABLE `movies_has_actors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `series`
--

DROP TABLE IF EXISTS `series`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `series` (
  `id` int NOT NULL AUTO_INCREMENT,
  `imgURL` text,
  `title` text,
  `description` text,
  `seasons` int DEFAULT NULL,
  `is_featured` int DEFAULT NULL,
  `creators` json DEFAULT NULL,
  `year_end` int DEFAULT NULL,
  `year_start` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `series`
--

LOCK TABLES `series` WRITE;
/*!40000 ALTER TABLE `series` DISABLE KEYS */;
INSERT INTO `series` (`id`, `imgURL`, `title`, `description`, `seasons`, `is_featured`, `creators`, `year_end`, `year_start`) VALUES (1,'/img/MV5BMTc2OTAxOTU4NF5BMl5BanBnXkFtZTgwNDU3MzE0MzI@._V1_SX1500_CR0,0,1500,999_AL_.jpg','Perdidos',' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel purus accumsan, sagittis magna non, molestie nibh. Donec scelerisque, nulla at sodales feugiat, justo metus bibendum metus, ac efficitur sem arcu a lectus. Proin eu tellus porttitor, aliquam nisi ac, consectetur massa. Suspendisse non urna sit amet arcu tempor lobortis. Suspendisse eu ligula mi. Ut urna nibh, laoreet non suscipit nec, tempor semper sapien. Integer commodo urna in laoreet pretium. Nam viverra venenatis dolor cursus iaculis. Aliquam non facilisis velit. Nullam non tempus mi, non auctor augue. Praesent orci velit, sagittis tincidunt convallis nec, lobortis ut nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',6,0,'[\"J.J. Abrams\", \"Jeffrey Lieber\", \"Mumbadouf\"]',2010,2004),(2,'/img/MV5BMjQ5MTc3NDg3MF5BMl5BanBnXkFtZTgwNTI2MTU5NTM@._V1_SY1000_CR0,0,1498,1000_AL_.jpg','Breaking Bad',' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel purus accumsan, sagittis magna non, molestie nibh. Donec scelerisque, nulla at sodales feugiat, justo metus bibendum metus, ac efficitur sem arcu a lectus. Proin eu tellus porttitor, aliquam nisi ac, consectetur massa. Suspendisse non urna sit amet arcu tempor lobortis. Suspendisse eu ligula mi. Ut urna nibh, laoreet non suscipit nec, tempor semper sapien. Integer commodo urna in laoreet pretium. Nam viverra venenatis dolor cursus iaculis. Aliquam non facilisis velit. Nullam non tempus mi, non auctor augue. Praesent orci velit, sagittis tincidunt convallis nec, lobortis ut nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',5,1,'[\"Vince Gilligan\"]',2013,2008),(3,'/img/MV5BMTU3MTE2Nzc2OV5BMl5BanBnXkFtZTgwMzc1OTgyNDM@._V1_SY1000_CR0,0,1503,1000_AL_.jpg','Dark',' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel purus accumsan, sagittis magna non, molestie nibh. Donec scelerisque, nulla at sodales feugiat, justo metus bibendum metus, ac efficitur sem arcu a lectus. Proin eu tellus porttitor, aliquam nisi ac, consectetur massa. Suspendisse non urna sit amet arcu tempor lobortis. Suspendisse eu ligula mi. Ut urna nibh, laoreet non suscipit nec, tempor semper sapien. Integer commodo urna in laoreet pretium. Nam viverra venenatis dolor cursus iaculis. Aliquam non facilisis velit. Nullam non tempus mi, non auctor augue. Praesent orci velit, sagittis tincidunt convallis nec, lobortis ut nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',2,1,'[\"Baran bo Odar\", \"Jantje Friese\"]',0,2017),(4,'/img/MV5BMTg0NTY2MTkxMl5BMl5BanBnXkFtZTgwNjMyNjQ1MDI@._V1_SY1000_CR0,0,1306,1000_AL_.jpg','Star Trek: La nueva generación',' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel purus accumsan, sagittis magna non, molestie nibh. Donec scelerisque, nulla at sodales feugiat, justo metus bibendum metus, ac efficitur sem arcu a lectus. Proin eu tellus porttitor, aliquam nisi ac, consectetur massa. Suspendisse non urna sit amet arcu tempor lobortis. Suspendisse eu ligula mi. Ut urna nibh, laoreet non suscipit nec, tempor semper sapien. Integer commodo urna in laoreet pretium. Nam viverra venenatis dolor cursus iaculis. Aliquam non facilisis velit. Nullam non tempus mi, non auctor augue. Praesent orci velit, sagittis tincidunt convallis nec, lobortis ut nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',7,1,'[\"Gene Roddenberry\"]',1994,1987),(5,'/img/MV5BMjMzODQwNTE2NV5BMl5BanBnXkFtZTgwOTI5MzM0MjE@._V1_.jpg','Frasier',' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel purus accumsan, sagittis magna non, molestie nibh. Donec scelerisque, nulla at sodales feugiat, justo metus bibendum metus, ac efficitur sem arcu a lectus. Proin eu tellus porttitor, aliquam nisi ac, consectetur massa. Suspendisse non urna sit amet arcu tempor lobortis. Suspendisse eu ligula mi. Ut urna nibh, laoreet non suscipit nec, tempor semper sapien. Integer commodo urna in laoreet pretium. Nam viverra venenatis dolor cursus iaculis. Aliquam non facilisis velit. Nullam non tempus mi, non auctor augue. Praesent orci velit, sagittis tincidunt convallis nec, lobortis ut nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',11,0,'[\"David Angell\", \"Peter Casey\", \"David Lee\"]',2004,1993),(6,'/img/MV5BZjI3YzRiMDItNTI1Yi00YWI4LWJhNDEtOTY5MDFiZjU4OTViXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_.jpg','Los informáticos',' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel purus accumsan, sagittis magna non, molestie nibh. Donec scelerisque, nulla at sodales feugiat, justo metus bibendum metus, ac efficitur sem arcu a lectus. Proin eu tellus porttitor, aliquam nisi ac, consectetur massa. Suspendisse non urna sit amet arcu tempor lobortis. Suspendisse eu ligula mi. Ut urna nibh, laoreet non suscipit nec, tempor semper sapien. Integer commodo urna in laoreet pretium. Nam viverra venenatis dolor cursus iaculis. Aliquam non facilisis velit. Nullam non tempus mi, non auctor augue. Praesent orci velit, sagittis tincidunt convallis nec, lobortis ut nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',5,0,'[\"Grahan Linehan\"]',2013,2006),(7,'/img/MV5BMTgyODEzMDYxOV5BMl5BanBnXkFtZTgwMzU0MTcyNzE@._V1_.jpg','Weeds',' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel purus accumsan, sagittis magna non, molestie nibh. Donec scelerisque, nulla at sodales feugiat, justo metus bibendum metus, ac efficitur sem arcu a lectus. Proin eu tellus porttitor, aliquam nisi ac, consectetur massa. Suspendisse non urna sit amet arcu tempor lobortis. Suspendisse eu ligula mi. Ut urna nibh, laoreet non suscipit nec, tempor semper sapien. Integer commodo urna in laoreet pretium. Nam viverra venenatis dolor cursus iaculis. Aliquam non facilisis velit. Nullam non tempus mi, non auctor augue. Praesent orci velit, sagittis tincidunt convallis nec, lobortis ut nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',8,0,'[\"Jenji Kohan\"]',2012,2005),(8,'/img/MV5BMjMyMzk4MjMxMF5BMl5BanBnXkFtZTgwNTA2MDEzMjE@._V1_.jpg','Cómo conocí a vuestra madre',' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel purus accumsan, sagittis magna non, molestie nibh. Donec scelerisque, nulla at sodales feugiat, justo metus bibendum metus, ac efficitur sem arcu a lectus. Proin eu tellus porttitor, aliquam nisi ac, consectetur massa. Suspendisse non urna sit amet arcu tempor lobortis. Suspendisse eu ligula mi. Ut urna nibh, laoreet non suscipit nec, tempor semper sapien. Integer commodo urna in laoreet pretium. Nam viverra venenatis dolor cursus iaculis. Aliquam non facilisis velit. Nullam non tempus mi, non auctor augue. Praesent orci velit, sagittis tincidunt convallis nec, lobortis ut nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',9,0,'[\"Carter Bays\", \"Craig Thomas\", \"hassan\"]',2014,2005);
/*!40000 ALTER TABLE `series` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `series_has_actors`
--

DROP TABLE IF EXISTS `series_has_actors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `series_has_actors` (
  `series_id` int NOT NULL,
  `actors_id` int NOT NULL,
  PRIMARY KEY (`series_id`,`actors_id`),
  KEY `fk_series_has_actors_actors1_idx` (`actors_id`),
  KEY `fk_series_has_actors_series1_idx` (`series_id`),
  CONSTRAINT `fk_series_has_actors_actors1` FOREIGN KEY (`actors_id`) REFERENCES `actors` (`id`),
  CONSTRAINT `fk_series_has_actors_series1` FOREIGN KEY (`series_id`) REFERENCES `series` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `series_has_actors`
--

LOCK TABLES `series_has_actors` WRITE;
/*!40000 ALTER TABLE `series_has_actors` DISABLE KEYS */;
INSERT INTO `series_has_actors` (`series_id`, `actors_id`) VALUES (1,1),(1,2),(1,3),(1,4),(1,5),(1,6),(2,7),(3,7),(5,7),(6,7),(7,7),(8,7),(2,8),(3,8),(5,8),(6,8),(7,8),(8,8),(2,9),(3,9),(5,9),(6,9),(7,9),(8,9),(2,10),(3,10),(5,10),(6,10),(7,10),(8,10),(2,11),(3,11),(5,11),(6,11),(7,11),(8,11),(2,12),(3,12),(5,12),(6,12),(7,12),(8,12),(2,13),(3,13),(5,13),(6,13),(7,13),(8,13),(2,14),(3,14),(4,14),(5,14),(6,14),(7,14),(8,14);
/*!40000 ALTER TABLE `series_has_actors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trailers`
--

DROP TABLE IF EXISTS `trailers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trailers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` text,
  `url` text,
  `imgURL` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trailers`
--

LOCK TABLES `trailers` WRITE;
/*!40000 ALTER TABLE `trailers` DISABLE KEYS */;
INSERT INTO `trailers` (`id`, `title`, `url`, `imgURL`) VALUES (1,'Ghost in the Shell','https://youtu.be/xXT2h67MlDc','/img/df26e30b8ae53afd91676744930adaf4bf217e0f.jpg'),(2,'La primavera de Christine','https://youtu.be/Xt5d_NnmEsU','/img/0e85df16dbe889ff795b1999faf342ecf18d056c.jpg'),(3,'Omega','https://youtu.be/pHldmE27HZ8','/img/df26e30b8bc63afd91676744930adaf4bf217e0f.jpg');
/*!40000 ALTER TABLE `trailers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-01 16:06:34
