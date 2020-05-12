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
  `agenda_id` int(11) NOT NULL AUTO_INCREMENT,
  `post_id` int(11) NOT NULL,
  PRIMARY KEY (`agenda_id`),
  KEY `fk_agenda_post1_idx` (`post_id`),
  CONSTRAINT `fk_agenda_post1` FOREIGN KEY (`post_id`) REFERENCES `post` (`post_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
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
-- Table structure for table `apartamento`
--

DROP TABLE IF EXISTS `apartamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `apartamento` (
  `apartamento_id` int(11) NOT NULL AUTO_INCREMENT,
  `bloco` varchar(64) DEFAULT NULL,
  `numero` int(12) NOT NULL,
  PRIMARY KEY (`apartamento_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apartamento`
--

LOCK TABLES `apartamento` WRITE;
/*!40000 ALTER TABLE `apartamento` DISABLE KEYS */;
INSERT INTO `apartamento` VALUES (1,'A',101),(2,'Alfa',2022),(3,'B',10178),(4,'C',101),(5,'Céu Azul',7987);
/*!40000 ALTER TABLE `apartamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apartamento_usuario`
--

DROP TABLE IF EXISTS `apartamento_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `apartamento_usuario` (
  `apartamento_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  KEY `fk_apartamento_id` (`apartamento_id`),
  KEY `fk_usuario_id` (`usuario_id`),
  CONSTRAINT `fk_apartamento_id` FOREIGN KEY (`apartamento_id`) REFERENCES `apartamento` (`apartamento_id`),
  CONSTRAINT `fk_apartamento_usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apartamento_usuario`
--

LOCK TABLES `apartamento_usuario` WRITE;
/*!40000 ALTER TABLE `apartamento_usuario` DISABLE KEYS */;
INSERT INTO `apartamento_usuario` VALUES (1,1),(2,2),(3,3),(4,4),(5,5);
/*!40000 ALTER TABLE `apartamento_usuario` ENABLE KEYS */;
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
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post` (
  `post_id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` int(11) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `mensagem` text NOT NULL,
  `data_cricao` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`post_id`),
  KEY `fk_categoria_id` (`categoria_id`),
  KEY `fk_usuario_id` (`usuario_id`),
  CONSTRAINT `fk_post_categoria_id` FOREIGN KEY (`categoria_id`) REFERENCES `post_categoria` (`categoria_id`),
  CONSTRAINT `fk_post_usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,1,1,'Boa tarde, a partir de segunda feira (22/05) estaremos distribuindo mascaras no hall','2020-04-05 20:00:00'),(2,1,1,'Boa noite, odeio todos vocês. Passar bem.','2020-04-06 20:00:00'),(3,2,2,'Caracas, acho que peguei corona do Murilo','2020-04-07 20:00:00'),(4,2,3,'Os cachorros do Murilo são fofos demais e me desconcentram durante a aula ;(','2020-04-08 20:00:00'),(5,3,4,'Doando filhotes de cachorrineos','2020-04-09 20:00:00'),(6,3,5,'Alugo minha vaga por R$50,00 mensais','2020-04-10 20:00:00'),(7,4,6,'Faço o seu banco de dados por comida','2020-04-11 20:00:00'),(8,4,7,'Aula de SQL grátis online dia 20/04','2020-04-12 20:00:00'),(9,5,2,'QQ TA COM TESENO?','2020-04-13 20:00:00'),(10,5,2,'Gente? alô?','2020-04-14 20:00:00'),(11,1,8,'Mochila perdida ','2020-04-10 20:00:00'),(12,1,8,'Bebê Perdido','2020-04-10 20:00:00');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post_categoria`
--

DROP TABLE IF EXISTS `post_categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post_categoria` (
  `categoria_id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(32) NOT NULL,
  PRIMARY KEY (`categoria_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_categoria`
--

LOCK TABLES `post_categoria` WRITE;
/*!40000 ALTER TABLE `post_categoria` DISABLE KEYS */;
INSERT INTO `post_categoria` VALUES (1,'Aviso'),(2,'Post'),(3,'Ocorrência'),(4,'Anúncio'),(5,'Classificados'),(6,'Serviços'),(7,'Eventos'),(8,'Achados e Perdidos');
/*!40000 ALTER TABLE `post_categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post_feed`
--

DROP TABLE IF EXISTS `post_feed`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post_feed` (
  `post_feed_id` int(11) NOT NULL AUTO_INCREMENT,
  `post_id` int(11) NOT NULL,
  `foto` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`post_feed_id`),
  KEY `fk_post_id` (`post_id`),
  CONSTRAINT `fk_post_feed_id` FOREIGN KEY (`post_id`) REFERENCES `post` (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_feed`
--

LOCK TABLES `post_feed` WRITE;
/*!40000 ALTER TABLE `post_feed` DISABLE KEYS */;
INSERT INTO `post_feed` VALUES (1,3,NULL),(2,4,NULL),(3,5,NULL),(4,6,NULL),(5,7,NULL),(6,8,NULL),(7,9,NULL),(8,10,NULL);
/*!40000 ALTER TABLE `post_feed` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post_ocorrencia`
--

DROP TABLE IF EXISTS `post_ocorrencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post_ocorrencia` (
  `post_ocorrencia_id` int(11) NOT NULL AUTO_INCREMENT,
  `post_id` int(11) NOT NULL,
  `foto` varchar(256) DEFAULT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`post_ocorrencia_id`),
  KEY `fk_post_id` (`post_id`),
  CONSTRAINT `fk_post_ocorrencia_id` FOREIGN KEY (`post_id`) REFERENCES `post` (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_ocorrencia`
--

LOCK TABLES `post_ocorrencia` WRITE;
/*!40000 ALTER TABLE `post_ocorrencia` DISABLE KEYS */;
INSERT INTO `post_ocorrencia` VALUES (1,4,NULL,1);
/*!40000 ALTER TABLE `post_ocorrencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post_perdidos`
--

DROP TABLE IF EXISTS `post_perdidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post_perdidos` (
  `post_perdidos_id` int(11) NOT NULL AUTO_INCREMENT,
  `post_id` int(11) NOT NULL,
  `foto` varchar(256) DEFAULT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`post_perdidos_id`),
  KEY `fk_post_id` (`post_id`),
  CONSTRAINT `fk_post_perdidos_id` FOREIGN KEY (`post_id`) REFERENCES `post` (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_perdidos`
--

LOCK TABLES `post_perdidos` WRITE;
/*!40000 ALTER TABLE `post_perdidos` DISABLE KEYS */;
INSERT INTO `post_perdidos` VALUES (1,11,NULL,1),(2,12,NULL,2);
/*!40000 ALTER TABLE `post_perdidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post_usuario_aviso`
--

DROP TABLE IF EXISTS `post_usuario_aviso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post_usuario_aviso` (
  `post_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `tipo` varchar(32) NOT NULL,
  KEY `fk_post_id` (`post_id`),
  KEY `fk_usuario_id` (`usuario_id`),
  CONSTRAINT `fk_post_post_aviso_id` FOREIGN KEY (`post_id`) REFERENCES `post` (`post_id`),
  CONSTRAINT `fk_usuario_post_aviso_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_usuario_aviso`
--

LOCK TABLES `post_usuario_aviso` WRITE;
/*!40000 ALTER TABLE `post_usuario_aviso` DISABLE KEYS */;
INSERT INTO `post_usuario_aviso` VALUES (1,1,'Aviso'),(1,2,'Aviso'),(1,3,'Aviso');
/*!40000 ALTER TABLE `post_usuario_aviso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post_usuario_like`
--

DROP TABLE IF EXISTS `post_usuario_like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post_usuario_like` (
  `post_feed_post_feed_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `tipo` varchar(32) NOT NULL,
  KEY `fk_usuario_id` (`usuario_id`),
  KEY `fk_post_usuario_like_post_feed1_idx` (`post_feed_post_feed_id`),
  CONSTRAINT `fk_post_usuario_like_post_feed1` FOREIGN KEY (`post_feed_post_feed_id`) REFERENCES `post_feed` (`post_feed_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_id0` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_usuario_like`
--

LOCK TABLES `post_usuario_like` WRITE;
/*!40000 ALTER TABLE `post_usuario_like` DISABLE KEYS */;
INSERT INTO `post_usuario_like` VALUES (1,2,'Like'),(1,3,'Like'),(1,4,'Like'),(2,5,'Like'),(2,4,'Like'),(3,4,'Like'),(3,2,'Like'),(3,1,'Like'),(4,2,'Like');
/*!40000 ALTER TABLE `post_usuario_like` ENABLE KEYS */;
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
INSERT INTO `usuarios` VALUES (1,1,'Nicolas','Debianchi','nicolas@mural.com','mural1','123456789',NULL),(2,2,'Aguiaia','Ximenes','aguiaia@mural.com','mural1','123456789',NULL),(3,2,'Murilo','Ignaccio','murilo@mural.com','mural1','123456789',NULL),(4,3,'Elon','Castro','elon@mural.com','mural1','123456789',NULL),(5,3,'Eric','Reis','eric@mural.com','mural1','123456',NULL);
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

-- Dump completed on 2020-05-12 12:24:15
