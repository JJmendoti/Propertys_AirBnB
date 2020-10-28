-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-10-2020 a las 01:16:15
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `airbnb_propertys`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `properties`
--

CREATE TABLE `properties` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `type` varchar(20) NOT NULL,
  `address` varchar(50) NOT NULL,
  `rooms` int(11) NOT NULL,
  `price` double NOT NULL,
  `area` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `properties`
--

INSERT INTO `properties` (`id`, `title`, `type`, `address`, `rooms`, `price`, `area`, `id_user`) VALUES
(8, 'Casa en Bello', 'Casa', 'cra 41 5448', 3, 1500000, 200, 3),
(9, 'Habitación amoblada', 'Habitación', 'cra 41 574 -96', 1, 650000, 25, 5),
(10, 'hostal en Medellin', 'Hostal', 'cra 41 58 -65', 10, 200000, 150, 2),
(11, 'HotelesJ', 'Casa', 'cra 41 # 34edsdaf', 1, 100000, 50, 1),
(12, 'Habitacion', 'Habitación', 'cra 41 55-78', 1, 50000, 75, 2),
(13, 'Casa', 'Casa', 'cra 41 # 34esfa', 2, 900000, 80, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `type_identification` varchar(5) NOT NULL,
  `identification` varchar(20) NOT NULL,
  `name` varchar(40) NOT NULL,
  `lastname` varchar(40) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `type_identification`, `identification`, `name`, `lastname`, `email`, `password`) VALUES
(1, 'PAS', '74548951', 'pepito', 'caro', 'Pepito@correo.net', 'aswed1d!¿'),
(2, 'pas', '74548951a', 'pepito', 'caro', 'Pepito@correo.net', 'aswed1d!¿'),
(3, 'PAS', '548979121', 'JUANITO', 'PEREZ', 'JUANITO@correo.net', 'asdasdklasf1'),
(4, 'cc', '100245153', 'leo', 'Barrera', 'leo@correo.net', 'assdwe7!?'),
(5, 'pas', '1234asd41', 'Joaquina', 'Suarez', 'Joaquina@correo.com', 'aswed1d!¿'),
(6, 'Pas', '74548951a', 'pepito', 'caro', 'Pepito@correo.net', 'aswed1d!¿'),
(7, 'CC', '100245153', 'Jhon', 'Mendoza', 'Jhon@correo.com', 'akdlaoirhal742#$'),
(8, 'Pas', 'qwes471d', 'Andrea', 'Barrera', 'andrea@correo.net', '1andreitab!#'),
(9, 'Cc', '10034051', 'Jhon', 'Mendoza', 'Jhon@correo.com', 'hjsewa2!#'),
(10, 'Cc', '10034051', 'Jhon', 'Mendoza', 'Jhon@correo.com', 'hjsewa2!#'),
(11, 'Cc', '14785412', 'Jhon J', 'Mendoza', 'andrea@correo.net', 'asdfgh1#!'),
(12, 'cc', '10034051', 'sdaasawe', 'sdadas', 'asdsss@correo.com', '1andreitab!#'),
(13, 'Cc', '1003604147', 'Juanito', 'mendoza', 'Juanito@correo.com', 'asdfvcc!2#$'),
(14, 'Pas', 'asdsd74', 'Juanito', 'Zapata', 'Juanito@correo.com', 'asdfreas1#$'),
(15, 'Pas', '78965412', 'john ', 'mendoza', 'jmendoti21@gmail.com', 'adafas2$%$'),
(16, 'Cc', '78965412', 'Guia', 'mendoza', 'jmendoti21@gmail.com', 'asdfgds2$#'),
(17, 'Cc', '78965412', 'juan', 'adasdasf', 'jmendoti21@gmail.com', 'asdfvgf1$%'),
(18, 'Cc', '78965412', 'juan', 'mendoza', 'jmendoti21@gmail.com', 'asdsedsr1$$'),
(19, 'Pas', '7896a5412', 'juan', 'mendoza', 'mendoza21990@gmail.com', 'asdsaedf#1'),
(20, 'Pas', '78965412', 'juan', 'mendoza', 'juan@correo.com', 'asdfghjk1#$'),
(21, 'Cc', '78965412', 'juan', 'mendoza', 'juan@correo.com', 'asxcdfvg2?!'),
(22, 'Cc', '78965412', 'juan', 'mendoza', 'juan@correo.com', 'qwedswexd1!$'),
(23, 'Cc', '78965412', 'juan', 'mendoza', 'juan@correo.com', 'aqwsaxsde2$$');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `properties`
--
ALTER TABLE `properties`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `properties`
--
ALTER TABLE `properties`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `properties`
--
ALTER TABLE `properties`
  ADD CONSTRAINT `properties_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
