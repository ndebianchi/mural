CREATE DATABASE  IF NOT EXISTS `muralbeta` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `muralbeta`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: muralbeta
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.11-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `agenda`
--

DROP TABLE IF EXISTS `agenda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `agenda` (
  `id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_agenda_post1_idx` (`post_id`),
  CONSTRAINT `fk_agenda_post1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agenda`
--

LOCK TABLES `agenda` WRITE;
/*!40000 ALTER TABLE `agenda` DISABLE KEYS */;
INSERT INTO `agenda` VALUES (1,1);
/*!40000 ALTER TABLE `agenda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apartamento_usuarios`
--

DROP TABLE IF EXISTS `apartamento_usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `apartamento_usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `apartamento_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_apartamento_id` (`apartamento_id`),
  KEY `fk_usuario_id` (`usuario_id`),
  CONSTRAINT `fk_apartamento_id` FOREIGN KEY (`apartamento_id`) REFERENCES `apartamentos` (`id`),
  CONSTRAINT `fk_apartamento_usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apartamento_usuarios`
--

LOCK TABLES `apartamento_usuarios` WRITE;
/*!40000 ALTER TABLE `apartamento_usuarios` DISABLE KEYS */;
INSERT INTO `apartamento_usuarios` VALUES (1,1,1),(2,2,2),(3,3,3),(4,4,4),(5,5,5);
/*!40000 ALTER TABLE `apartamento_usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apartamentos`
--

DROP TABLE IF EXISTS `apartamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `apartamentos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bloco` varchar(64) DEFAULT NULL,
  `numero` int(12) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apartamentos`
--

LOCK TABLES `apartamentos` WRITE;
/*!40000 ALTER TABLE `apartamentos` DISABLE KEYS */;
INSERT INTO `apartamentos` VALUES (1,'A',101),(2,'Alfa',2022),(3,'B',10178),(4,'C',101),(5,'Céu Azul',7987);
/*!40000 ALTER TABLE `apartamentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feed_posts`
--

DROP TABLE IF EXISTS `feed_posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `feed_posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `post_id` int(11) NOT NULL,
  `foto` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_post_id` (`post_id`),
  CONSTRAINT `fk_post_feed_id` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feed_posts`
--

LOCK TABLES `feed_posts` WRITE;
/*!40000 ALTER TABLE `feed_posts` DISABLE KEYS */;
INSERT INTO `feed_posts` VALUES (1,3,NULL),(2,4,NULL),(3,5,NULL),(4,6,NULL),(5,7,NULL),(6,8,NULL),(7,9,NULL),(8,10,NULL);
/*!40000 ALTER TABLE `feed_posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes_vistos`
--

DROP TABLE IF EXISTS `likes_vistos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `likes_vistos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `post_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_post_id` (`post_id`),
  KEY `fk_usuario_id` (`usuario_id`),
  CONSTRAINT `post_id` FOREIGN KEY (`id`) REFERENCES `posts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes_vistos`
--

LOCK TABLES `likes_vistos` WRITE;
/*!40000 ALTER TABLE `likes_vistos` DISABLE KEYS */;
INSERT INTO `likes_vistos` VALUES (1,1,1),(2,1,2),(3,1,3);
/*!40000 ALTER TABLE `likes_vistos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `locais`
--

DROP TABLE IF EXISTS `locais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `locais` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(64) NOT NULL,
  `descricao` varchar(45) DEFAULT NULL,
  `foto` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locais`
--

LOCK TABLES `locais` WRITE;
/*!40000 ALTER TABLE `locais` DISABLE KEYS */;
INSERT INTO `locais` VALUES (1,'Piscina','Aberta',NULL),(2,'Churrasqueira',NULL,NULL),(3,'Piscina','Aquecida',NULL),(4,'Salão de Festas','26º Andar',NULL),(5,'Salão de Festas','Térreo',NULL);
/*!40000 ALTER TABLE `locais` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ocorrencia_posts`
--

DROP TABLE IF EXISTS `ocorrencia_posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ocorrencia_posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `post_id` int(11) NOT NULL,
  `foto` varchar(256) DEFAULT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_post_id` (`post_id`),
  CONSTRAINT `fk_post_ocorrencia_id` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ocorrencia_posts`
--

LOCK TABLES `ocorrencia_posts` WRITE;
/*!40000 ALTER TABLE `ocorrencia_posts` DISABLE KEYS */;
INSERT INTO `ocorrencia_posts` VALUES (1,4,NULL,1);
/*!40000 ALTER TABLE `ocorrencia_posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `perdidos_posts`
--

DROP TABLE IF EXISTS `perdidos_posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `perdidos_posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `post_id` int(11) NOT NULL,
  `foto` varchar(256) DEFAULT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_post_id` (`post_id`),
  CONSTRAINT `fk_post_perdidos_id` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perdidos_posts`
--

LOCK TABLES `perdidos_posts` WRITE;
/*!40000 ALTER TABLE `perdidos_posts` DISABLE KEYS */;
INSERT INTO `perdidos_posts` VALUES (1,11,NULL,1),(2,12,NULL,2);
/*!40000 ALTER TABLE `perdidos_posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post_categorias`
--

DROP TABLE IF EXISTS `post_categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post_categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_categorias`
--

LOCK TABLES `post_categorias` WRITE;
/*!40000 ALTER TABLE `post_categorias` DISABLE KEYS */;
INSERT INTO `post_categorias` VALUES (1,'Aviso'),(2,'Post'),(3,'Ocorrência'),(4,'Anúncio'),(5,'Classificados'),(6,'Serviços'),(7,'Eventos'),(8,'Achados e Perdidos');
/*!40000 ALTER TABLE `post_categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` int(11) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `mensagem` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_categoria_id` (`categoria_id`),
  KEY `fk_usuario_id` (`usuario_id`),
  CONSTRAINT `fk_post_categoria_id` FOREIGN KEY (`categoria_id`) REFERENCES `post_categorias` (`id`),
  CONSTRAINT `fk_post_usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,1,1,'Boa tarde, a partir de segunda feira (22/05) estaremos distribuindo mascaras no hall'),(2,1,1,'Boa noite, odeio todos vocês. Passar bem.'),(3,2,2,'Caracas, acho que peguei corona do Murilo'),(4,2,3,'Os cachorros do Murilo são fofos demais e me desconcentram durante a aula ;('),(5,3,4,'Doando filhotes de cachorrineos'),(6,3,5,'Alugo minha vaga por R$50,00 mensais'),(7,4,6,'Faço o seu banco de dados por comida'),(8,4,7,'Aula de SQL grátis online dia 20/04'),(9,5,2,'QQ TA COM TESENO?'),(10,5,2,'Gente? alô?'),(11,1,8,'Mochila perdida '),(12,1,8,'Bebê Perdido');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservas`
--

DROP TABLE IF EXISTS `reservas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reservas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` int(11) NOT NULL,
  `local_id` int(11) NOT NULL,
  `data` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_local_id` (`local_id`),
  KEY `fk_usuario_id` (`usuario_id`),
  CONSTRAINT `fk_local_reserva_id` FOREIGN KEY (`local_id`) REFERENCES `locais` (`id`),
  CONSTRAINT `fk_usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservas`
--

LOCK TABLES `reservas` WRITE;
/*!40000 ALTER TABLE `reservas` DISABLE KEYS */;
INSERT INTO `reservas` VALUES (1,1,1,'2020-12-25 20:00:00'),(2,2,2,'2020-12-25 20:00:00'),(3,3,3,'2020-12-25 20:00:00'),(4,4,4,'2020-12-25 20:00:00'),(5,5,5,'2020-12-25 20:00:00');
/*!40000 ALTER TABLE `reservas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_tipos`
--

DROP TABLE IF EXISTS `usuario_tipos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario_tipos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_tipos`
--

LOCK TABLES `usuario_tipos` WRITE;
/*!40000 ALTER TABLE `usuario_tipos` DISABLE KEYS */;
INSERT INTO `usuario_tipos` VALUES (1,'Síndico'),(2,'Morador'),(3,'Funcionário');
/*!40000 ALTER TABLE `usuario_tipos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_tipo_id` int(11) NOT NULL,
  `nome` varchar(64) NOT NULL,
  `sobrenome` varchar(64) DEFAULT NULL,
  `email` varchar(64) NOT NULL,
  `senha` varchar(64) NOT NULL,
  `telefone` varchar(32) DEFAULT NULL,
  `foto` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tipo_usuario_id` (`usuario_tipo_id`),
  CONSTRAINT `fk_usuario_tipo_usuario_id` FOREIGN KEY (`usuario_tipo_id`) REFERENCES `usuario_tipos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,1,'Nicolas','Debianchi','nicolas@mural.com','$2b$10$oBkKH0HAGeeuoOYoOLyR7uAtvbAIaF/FJvmTiIc3ztdDmYJtUjtBC','123456789','nicolas.jpg'),(2,2,'Aguiaia','Ximenes','aguiaia@mural.com','$2b$10$oBkKH0HAGeeuoOYoOLyR7uAtvbAIaF/FJvmTiIc3ztdDmYJtUjtBC','123456789','aguiaia.jpg'),(3,2,'Murilo','Ignaccio','murilo@mural.com','$2b$10$oBkKH0HAGeeuoOYoOLyR7uAtvbAIaF/FJvmTiIc3ztdDmYJtUjtBC','123456789','murilo.jpg'),(4,3,'Elon','Castro','elon@mural.com','$2b$10$oBkKH0HAGeeuoOYoOLyR7uAtvbAIaF/FJvmTiIc3ztdDmYJtUjtBC','123456789','elon.jpg'),(5,3,'Eric','Reis','eric@mural.com','$2b$10$oBkKH0HAGeeuoOYoOLyR7uAtvbAIaF/FJvmTiIc3ztdDmYJtUjtBC','123456','eric.jpg');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-19 16:04:08
