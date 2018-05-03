# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Hôte: 127.0.0.1 (MySQL 5.7.21)
# Base de données: portfolio
# Temps de génération: 2018-04-30 11:28:07 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Affichage de la table infos
# ------------------------------------------------------------

DROP TABLE IF EXISTS `infos`;

CREATE TABLE `infos` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `value` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `infos` WRITE;
/*!40000 ALTER TABLE `infos` DISABLE KEYS */;

INSERT INTO `infos` (`id`, `name`, `value`)
VALUES
	(1,'mail','brandon.sueur@outlook.fr'),
	(2,'search_job','true'),
	(3,'available_freelance','true');

/*!40000 ALTER TABLE `infos` ENABLE KEYS */;
UNLOCK TABLES;


# Affichage de la table projects
# ------------------------------------------------------------

DROP TABLE IF EXISTS `projects`;

CREATE TABLE `projects` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `description` text NOT NULL,
  `slug` varchar(255) NOT NULL DEFAULT '',
  `website` varchar(255) NOT NULL DEFAULT '',
  `visible` int(1) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT '',
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;

INSERT INTO `projects` (`id`, `name`, `description`, `slug`, `website`, `visible`, `status`, `created_at`)
VALUES
	(1,'Moosta','Un petit tchat réalisé pour apprendre SocketIO mais aussi pouvoir discuter avec des amis autre que Discord pour juste expérimenté et testé des fonctionnalités sympas.','moosta','https://github.com/brandonsueur/Moosta',1,'completed',NULL),
	(2,'IntermarcheTV','Création d\'une application web avec CakePHP 3 pendant mon stage chez Intermarché. L\'idée est d\'afficher toute les promotions et les fêtes sur les téléviseurs dans le magasin.\n\n','intermarchetv','https://github.com/brandonsueur/IntermarcheTV',1,'completed',NULL),
	(3,'Ticki','Un projet réalisé avec CakePHP afin de l\'apprendre. L\'objectif étant de créer des tickets et des personnes répondrons à vos tickets afin de résoudre votre ticket.','ticki','',1,'cancelled',NULL),
	(4,'Gity','Une plateforme pour vos des statistiques GitHub. L\'intérêt principal c\'est de centraliser le tout et réussir à avoir des informations intéressantes tel que vos unfollowers.','gity','',1,'cancelled',NULL);

/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;


# Affichage de la table links
# ------------------------------------------------------------

DROP TABLE IF EXISTS `links`;

CREATE TABLE `links` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `icon` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL DEFAULT '',
  `url` varchar(255) NOT NULL DEFAULT '',
  `visible` int(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `links` WRITE;
/*!40000 ALTER TABLE `links` DISABLE KEYS */;

INSERT INTO `links` (`id`, `icon`, `name`, `url`, `visible`)
VALUES
	(1,'fa fa-medium','Medium','https://medium.com/@brandonsueur',1),
	(2,'fa fa-github','GitHub','https://github.com/brandonsueur',1),
	(3,'fa fa-linkedin','Linkedin','https://www.linkedin.com/in/brandonsueur/',1),
	(4,'fa fa-twitter','Twitter','https://twitter.com/gynidark',1),
	(5,'fa fa-dribbble','Dribbble','https://dribbble.com/brandonsueur',1);

/*!40000 ALTER TABLE `links` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
