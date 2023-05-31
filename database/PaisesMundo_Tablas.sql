-- MySQL Script generated by MySQL Workbench
-- Fri Feb 18 10:26:44 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema paisesmundo
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `paisesmundo` ;

-- -----------------------------------------------------
-- Schema paisesmundo
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `paisesmundo` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema paisesmundo
-- -----------------------------------------------------
USE `paisesmundo` ;

-- -----------------------------------------------------
-- Table `paisesmundo`.`continente`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `paisesmundo`.`continente` ;

CREATE TABLE IF NOT EXISTS `paisesmundo`.`continente` (
  `idcontinente` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`idcontinente`))
ENGINE = InnoDB;

-- CREATE INDEX `fk_pais_continente1_idx` ON `paisesmundo`.`continente` (`nombre` ASC) VISIBLE;

-- -----------------------------------------------------
-- Table `paisesmundo`.`pais`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `paisesmundo`.`pais` ;

CREATE TABLE IF NOT EXISTS `paisesmundo`.`pais` (
  `idpais` INT NOT NULL AUTO_INCREMENT,
  `nombrepais` VARCHAR(45) NULL,
  `capitalpais` VARCHAR(45) NULL,
  `cod_tel` VARCHAR(45) NULL,
  `iso2` VARCHAR(2) NULL,
  `iso3` VARCHAR(3) NULL,
  `idcontinente` INT NULL,
  PRIMARY KEY (`idpais`),
  CONSTRAINT `fk_pais_continente1`
    FOREIGN KEY (`idcontinente`)
    REFERENCES `paisesmundo`.`continente` (`idcontinente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- CREATE INDEX `fk_habitante_pais1_idx` ON `paisesmundo`.`pais` (`nombrepais` ASC) VISIBLE;

-- -----------------------------------------------------
-- Table `paisesmundo`.`habitante`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `paisesmundo`.`habitante` ;

CREATE TABLE IF NOT EXISTS `paisesmundo`.`habitante` (
  `idhabitante` INT NOT NULL,
  `usuario` VARCHAR(45) NOT NULL,
  `contraseña` VARCHAR(45) NOT NULL,
  `imagen` BIT NULL,
  `nombre` VARCHAR(45) NULL,
  `apellidos` VARCHAR(45) NULL,
  `telefono` VARCHAR(10) NULL,
  `fechanac` DATE NULL,
  `idpais` INT NULL,
  PRIMARY KEY (`idhabitante`),
  CONSTRAINT `fk_habitante_pais`
    FOREIGN KEY (`idpais`)
    REFERENCES `paisesmundo`.`pais` (`idpais`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;




