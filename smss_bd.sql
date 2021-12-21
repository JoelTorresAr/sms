/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 50733
 Source Host           : localhost:3306
 Source Schema         : smss_bd

 Target Server Type    : MySQL
 Target Server Version : 50733
 File Encoding         : 65001

 Date: 19/12/2021 22:48:28
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for category_client
-- ----------------------------
DROP TABLE IF EXISTS `category_client`;
CREATE TABLE `category_client`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `client_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `category_client_client_id_foreign`(`client_id`) USING BTREE,
  CONSTRAINT `category_client_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for clients
-- ----------------------------
DROP TABLE IF EXISTS `clients`;
CREATE TABLE `clients`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `code` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `place` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `phone_number` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tipo_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `status` enum('A','I') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'A',
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `clients_tipo_id_foreign`(`tipo_id`) USING BTREE,
  CONSTRAINT `clients_tipo_id_foreign` FOREIGN KEY (`tipo_id`) REFERENCES `tipos` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of clients
-- ----------------------------
INSERT INTO `clients` VALUES (1, '123456', 'DENIS JOEL', 'KENNEDY', 'CHICLAYO', '51926219958', 1, 'A', '2021-12-18 11:30:55', '2021-12-18 11:30:55');

-- ----------------------------
-- Table structure for companys
-- ----------------------------
DROP TABLE IF EXISTS `companys`;
CREATE TABLE `companys`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ruc` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `correo` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `representante` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `video` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `youtube` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `facebook` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `instagram` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `likeding` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `configuracion` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for failed_jobs
-- ----------------------------
DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE `failed_jobs`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `failed_jobs_uuid_unique`(`uuid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for files
-- ----------------------------
DROP TABLE IF EXISTS `files`;
CREATE TABLE `files`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `path` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `filename` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of files
-- ----------------------------
INSERT INTO `files` VALUES (1, 'http://127.0.0.1:8000/storage/user/wAOJftkCJY_celular.jpg', 'wAOJftkCJY_celular.jpg', '2021-12-08 17:52:06', '2021-12-08 17:52:06');
INSERT INTO `files` VALUES (2, 'http://127.0.0.1:8000/storage/user/58DGLosdM6_hppppp.jpg', '58DGLosdM6_hppppp.jpg', '2021-12-08 17:52:07', '2021-12-08 17:52:07');
INSERT INTO `files` VALUES (3, 'http://127.0.0.1:8000/storage/user/b393sBW2zd_celular.jpg', 'b393sBW2zd_celular.jpg', '2021-12-08 18:00:23', '2021-12-08 18:00:23');
INSERT INTO `files` VALUES (4, 'http://127.0.0.1:8000/storage/user/rmbqpg6fMO_hppppp.jpg', 'rmbqpg6fMO_hppppp.jpg', '2021-12-08 18:00:23', '2021-12-08 18:00:23');
INSERT INTO `files` VALUES (5, 'http://sms_main_5.test/storage/user/Dzb3CPYscU_35-huawei-p20-pro.jpg', 'Dzb3CPYscU_35-huawei-p20-pro.jpg', '2021-12-08 23:21:40', '2021-12-08 23:21:40');
INSERT INTO `files` VALUES (6, 'http://sms_main_5.test/storage/user/p46eEQtiCi_fox-715588__480.jpg', 'p46eEQtiCi_fox-715588__480.jpg', '2021-12-08 23:21:40', '2021-12-08 23:21:40');
INSERT INTO `files` VALUES (7, 'http://sms_main_5.test/storage/user/zhgHRH53sR_fox-715588__480.jpg', 'zhgHRH53sR_fox-715588__480.jpg', '2021-12-08 23:24:43', '2021-12-08 23:24:43');

-- ----------------------------
-- Table structure for form
-- ----------------------------
DROP TABLE IF EXISTS `form`;
CREATE TABLE `form`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombres` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `mail` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `direction` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `telephone` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  `pago` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `fechapago` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type_id` int(10) UNSIGNED NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `form_type_id_foreign`(`type_id`) USING BTREE,
  CONSTRAINT `form_type_id_foreign` FOREIGN KEY (`type_id`) REFERENCES `type` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of form
-- ----------------------------
INSERT INTO `form` VALUES (1, 'Torres Farro Denis Joel', '12/10/2021', '', '', '2021-12-13 02:58:51', '2021-12-13 02:58:51', '', '', NULL);

-- ----------------------------
-- Table structure for invoices
-- ----------------------------
DROP TABLE IF EXISTS `invoices`;
CREATE TABLE `invoices`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `status` enum('A','I') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'A',
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for logs
-- ----------------------------
DROP TABLE IF EXISTS `logs`;
CREATE TABLE `logs`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `model` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `description` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `response` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `logs_user_id_foreign`(`user_id`) USING BTREE,
  CONSTRAINT `logs_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 49 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of logs
-- ----------------------------
INSERT INTO `logs` VALUES (1, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Navegar Logs\",\"slug\":\"log.index\",\"updated_at\":\"2021-12-08T17:10:49.000000Z\",\"created_at\":\"2021-12-08T17:10:49.000000Z\",\"id\":1}', '2021-12-08 17:10:49', '2021-12-08 17:10:49');
INSERT INTO `logs` VALUES (2, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Escritorio\",\"slug\":\"Escritorio\",\"updated_at\":\"2021-12-08T17:10:49.000000Z\",\"created_at\":\"2021-12-08T17:10:49.000000Z\",\"id\":2}', '2021-12-08 17:10:49', '2021-12-08 17:10:49');
INSERT INTO `logs` VALUES (3, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Navegar Permisos\",\"slug\":\"permiso.index\",\"updated_at\":\"2021-12-08T17:10:50.000000Z\",\"created_at\":\"2021-12-08T17:10:50.000000Z\",\"id\":3}', '2021-12-08 17:10:50', '2021-12-08 17:10:50');
INSERT INTO `logs` VALUES (4, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Crear Permiso\",\"slug\":\"permiso.crear\",\"updated_at\":\"2021-12-08T17:10:50.000000Z\",\"created_at\":\"2021-12-08T17:10:50.000000Z\",\"id\":4}', '2021-12-08 17:10:50', '2021-12-08 17:10:50');
INSERT INTO `logs` VALUES (5, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Editar Permiso\",\"slug\":\"permiso.editar\",\"updated_at\":\"2021-12-08T17:10:50.000000Z\",\"created_at\":\"2021-12-08T17:10:50.000000Z\",\"id\":5}', '2021-12-08 17:10:50', '2021-12-08 17:10:50');
INSERT INTO `logs` VALUES (6, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Navegar Roles\",\"slug\":\"rol.index\",\"updated_at\":\"2021-12-08T17:10:50.000000Z\",\"created_at\":\"2021-12-08T17:10:50.000000Z\",\"id\":6}', '2021-12-08 17:10:50', '2021-12-08 17:10:50');
INSERT INTO `logs` VALUES (7, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Crear Rol\",\"slug\":\"rol.crear\",\"updated_at\":\"2021-12-08T17:10:51.000000Z\",\"created_at\":\"2021-12-08T17:10:51.000000Z\",\"id\":7}', '2021-12-08 17:10:51', '2021-12-08 17:10:51');
INSERT INTO `logs` VALUES (8, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Editar Rol\",\"slug\":\"rol.editar\",\"updated_at\":\"2021-12-08T17:10:51.000000Z\",\"created_at\":\"2021-12-08T17:10:51.000000Z\",\"id\":8}', '2021-12-08 17:10:51', '2021-12-08 17:10:51');
INSERT INTO `logs` VALUES (9, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Navegar Usuarios\",\"slug\":\"usuario.index\",\"updated_at\":\"2021-12-08T17:10:51.000000Z\",\"created_at\":\"2021-12-08T17:10:51.000000Z\",\"id\":9}', '2021-12-08 17:10:51', '2021-12-08 17:10:51');
INSERT INTO `logs` VALUES (10, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Crear Usuario\",\"slug\":\"usuario.crear\",\"updated_at\":\"2021-12-08T17:10:51.000000Z\",\"created_at\":\"2021-12-08T17:10:51.000000Z\",\"id\":10}', '2021-12-08 17:10:51', '2021-12-08 17:10:51');
INSERT INTO `logs` VALUES (11, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Editar Usuario\",\"slug\":\"usuario.editar\",\"updated_at\":\"2021-12-08T17:10:51.000000Z\",\"created_at\":\"2021-12-08T17:10:51.000000Z\",\"id\":11}', '2021-12-08 17:10:51', '2021-12-08 17:10:51');
INSERT INTO `logs` VALUES (12, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Ver Usuario\",\"slug\":\"usuario.ver\",\"updated_at\":\"2021-12-08T17:10:51.000000Z\",\"created_at\":\"2021-12-08T17:10:51.000000Z\",\"id\":12}', '2021-12-08 17:10:51', '2021-12-08 17:10:51');
INSERT INTO `logs` VALUES (13, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Activar Usuario\",\"slug\":\"usuario.activar\",\"updated_at\":\"2021-12-08T17:10:51.000000Z\",\"created_at\":\"2021-12-08T17:10:51.000000Z\",\"id\":13}', '2021-12-08 17:10:51', '2021-12-08 17:10:51');
INSERT INTO `logs` VALUES (14, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Desactivar Usuario\",\"slug\":\"usuario.desactivar\",\"updated_at\":\"2021-12-08T17:10:51.000000Z\",\"created_at\":\"2021-12-08T17:10:51.000000Z\",\"id\":14}', '2021-12-08 17:10:51', '2021-12-08 17:10:51');
INSERT INTO `logs` VALUES (15, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Permiso Usuario\",\"slug\":\"usuario.permiso\",\"updated_at\":\"2021-12-08T17:10:52.000000Z\",\"created_at\":\"2021-12-08T17:10:52.000000Z\",\"id\":15}', '2021-12-08 17:10:52', '2021-12-08 17:10:52');
INSERT INTO `logs` VALUES (16, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Perfil Usuario\",\"slug\":\"usuario.perfil\",\"updated_at\":\"2021-12-08T17:10:52.000000Z\",\"created_at\":\"2021-12-08T17:10:52.000000Z\",\"id\":16}', '2021-12-08 17:10:52', '2021-12-08 17:10:52');
INSERT INTO `logs` VALUES (17, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Navegar Tipos\",\"slug\":\"tipo.index\",\"updated_at\":\"2021-12-08T17:10:52.000000Z\",\"created_at\":\"2021-12-08T17:10:52.000000Z\",\"id\":17}', '2021-12-08 17:10:52', '2021-12-08 17:10:52');
INSERT INTO `logs` VALUES (18, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Crear Tipo\",\"slug\":\"tipo.crear\",\"updated_at\":\"2021-12-08T17:10:52.000000Z\",\"created_at\":\"2021-12-08T17:10:52.000000Z\",\"id\":18}', '2021-12-08 17:10:52', '2021-12-08 17:10:52');
INSERT INTO `logs` VALUES (19, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Editar Tipo\",\"slug\":\"tipo.editar\",\"updated_at\":\"2021-12-08T17:10:52.000000Z\",\"created_at\":\"2021-12-08T17:10:52.000000Z\",\"id\":19}', '2021-12-08 17:10:52', '2021-12-08 17:10:52');
INSERT INTO `logs` VALUES (20, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Configurar Tel\\u00e9fono\",\"slug\":\"telefono.configurar\",\"updated_at\":\"2021-12-08T17:10:52.000000Z\",\"created_at\":\"2021-12-08T17:10:52.000000Z\",\"id\":20}', '2021-12-08 17:10:52', '2021-12-08 17:10:52');
INSERT INTO `logs` VALUES (21, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Navegar Clientes\",\"slug\":\"cliente.index\",\"updated_at\":\"2021-12-08T17:10:52.000000Z\",\"created_at\":\"2021-12-08T17:10:52.000000Z\",\"id\":21}', '2021-12-08 17:10:52', '2021-12-08 17:10:52');
INSERT INTO `logs` VALUES (22, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Crear Cliente\",\"slug\":\"cliente.crear\",\"updated_at\":\"2021-12-08T17:10:53.000000Z\",\"created_at\":\"2021-12-08T17:10:53.000000Z\",\"id\":22}', '2021-12-08 17:10:53', '2021-12-08 17:10:53');
INSERT INTO `logs` VALUES (23, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Editar Cliente\",\"slug\":\"cliente.editar\",\"updated_at\":\"2021-12-08T17:10:53.000000Z\",\"created_at\":\"2021-12-08T17:10:53.000000Z\",\"id\":23}', '2021-12-08 17:10:53', '2021-12-08 17:10:53');
INSERT INTO `logs` VALUES (24, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Importar Cliente\",\"slug\":\"cliente.importar\",\"updated_at\":\"2021-12-08T17:10:53.000000Z\",\"created_at\":\"2021-12-08T17:10:53.000000Z\",\"id\":24}', '2021-12-08 17:10:53', '2021-12-08 17:10:53');
INSERT INTO `logs` VALUES (25, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Activar Cliente\",\"slug\":\"cliente.activar\",\"updated_at\":\"2021-12-08T17:10:53.000000Z\",\"created_at\":\"2021-12-08T17:10:53.000000Z\",\"id\":25}', '2021-12-08 17:10:54', '2021-12-08 17:10:54');
INSERT INTO `logs` VALUES (26, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Desactivar Cliente\",\"slug\":\"cliente.desactivar\",\"updated_at\":\"2021-12-08T17:10:54.000000Z\",\"created_at\":\"2021-12-08T17:10:54.000000Z\",\"id\":26}', '2021-12-08 17:10:54', '2021-12-08 17:10:54');
INSERT INTO `logs` VALUES (27, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Envira SMS\",\"slug\":\"sms.index\",\"updated_at\":\"2021-12-08T17:10:54.000000Z\",\"created_at\":\"2021-12-08T17:10:54.000000Z\",\"id\":27}', '2021-12-08 17:10:54', '2021-12-08 17:10:54');
INSERT INTO `logs` VALUES (28, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Navegar Mensajes Predeterminados\",\"slug\":\"mensaje.predeterminado.index\",\"updated_at\":\"2021-12-08T17:10:54.000000Z\",\"created_at\":\"2021-12-08T17:10:54.000000Z\",\"id\":28}', '2021-12-08 17:10:54', '2021-12-08 17:10:54');
INSERT INTO `logs` VALUES (29, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Crear Mensaje Predeterminado\",\"slug\":\"mensaje.predeterminado.crear\",\"updated_at\":\"2021-12-08T17:10:54.000000Z\",\"created_at\":\"2021-12-08T17:10:54.000000Z\",\"id\":29}', '2021-12-08 17:10:54', '2021-12-08 17:10:54');
INSERT INTO `logs` VALUES (30, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Editar Mensaje Predeterminado\",\"slug\":\"mensaje.predeterminado.editar\",\"updated_at\":\"2021-12-08T17:10:54.000000Z\",\"created_at\":\"2021-12-08T17:10:54.000000Z\",\"id\":30}', '2021-12-08 17:10:54', '2021-12-08 17:10:54');
INSERT INTO `logs` VALUES (31, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Eliminar Mensaje Predeterminado\",\"slug\":\"mensaje.predeterminado.eliminar\",\"updated_at\":\"2021-12-08T17:10:54.000000Z\",\"created_at\":\"2021-12-08T17:10:54.000000Z\",\"id\":31}', '2021-12-08 17:10:55', '2021-12-08 17:10:55');
INSERT INTO `logs` VALUES (32, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Mi landing page\",\"slug\":\"landing.page\",\"updated_at\":\"2021-12-08T17:10:55.000000Z\",\"created_at\":\"2021-12-08T17:10:55.000000Z\",\"id\":32}', '2021-12-08 17:10:55', '2021-12-08 17:10:55');
INSERT INTO `logs` VALUES (33, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Crear producto\",\"slug\":\"producto.crear\",\"updated_at\":\"2021-12-08T17:10:55.000000Z\",\"created_at\":\"2021-12-08T17:10:55.000000Z\",\"id\":33}', '2021-12-08 17:10:55', '2021-12-08 17:10:55');
INSERT INTO `logs` VALUES (34, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Editar producto\",\"slug\":\"producto.editar\",\"updated_at\":\"2021-12-08T17:10:55.000000Z\",\"created_at\":\"2021-12-08T17:10:55.000000Z\",\"id\":34}', '2021-12-08 17:10:55', '2021-12-08 17:10:55');
INSERT INTO `logs` VALUES (35, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Activar producto\",\"slug\":\"producto.activar\",\"updated_at\":\"2021-12-08T17:10:55.000000Z\",\"created_at\":\"2021-12-08T17:10:55.000000Z\",\"id\":35}', '2021-12-08 17:10:55', '2021-12-08 17:10:55');
INSERT INTO `logs` VALUES (36, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"name\":\"Desactivar producto\",\"slug\":\"producto.desactivar\",\"updated_at\":\"2021-12-08T17:10:55.000000Z\",\"created_at\":\"2021-12-08T17:10:55.000000Z\",\"id\":36}', '2021-12-08 17:10:55', '2021-12-08 17:10:55');
INSERT INTO `logs` VALUES (37, 'App\\Models\\Role', NULL, 'Rol creado exitosamente', '{\"name\":\"Administrador\",\"slug\":\"Administrador\",\"updated_at\":\"2021-12-08T17:10:55.000000Z\",\"created_at\":\"2021-12-08T17:10:55.000000Z\",\"id\":1}', '2021-12-08 17:10:55', '2021-12-08 17:10:55');
INSERT INTO `logs` VALUES (38, 'App\\Models\\User', NULL, 'Usuario creado exitosamente', '{\"name\":\"Sisy Carrasco Choez\",\"email\":\"test@gmail.com\",\"email_verified_at\":\"2021-12-08T17:10:56.000000Z\",\"username\":\"sisy\",\"status\":\"A\",\"created_by\":1,\"updated_by\":1,\"updated_at\":\"2021-12-08T17:10:56.000000Z\",\"created_at\":\"2021-12-08T17:10:56.000000Z\",\"id\":1,\"status_name\":\"Activo\"}', '2021-12-08 17:10:56', '2021-12-08 17:10:56');
INSERT INTO `logs` VALUES (39, 'App\\Models\\File', 1, 'Archivo creado exitosamente', '{\"path\":\"http:\\/\\/127.0.0.1:8000\\/storage\\/user\\/wAOJftkCJY_celular.jpg\",\"filename\":\"wAOJftkCJY_celular.jpg\",\"updated_at\":\"2021-12-08T17:52:06.000000Z\",\"created_at\":\"2021-12-08T17:52:06.000000Z\",\"id\":1}', '2021-12-08 17:52:06', '2021-12-08 17:52:06');
INSERT INTO `logs` VALUES (40, 'App\\Models\\File', 1, 'Archivo creado exitosamente', '{\"path\":\"http:\\/\\/127.0.0.1:8000\\/storage\\/user\\/58DGLosdM6_hppppp.jpg\",\"filename\":\"58DGLosdM6_hppppp.jpg\",\"updated_at\":\"2021-12-08T17:52:07.000000Z\",\"created_at\":\"2021-12-08T17:52:07.000000Z\",\"id\":2}', '2021-12-08 17:52:07', '2021-12-08 17:52:07');
INSERT INTO `logs` VALUES (41, 'App\\Models\\File', 1, 'Archivo creado exitosamente', '{\"path\":\"http:\\/\\/127.0.0.1:8000\\/storage\\/user\\/b393sBW2zd_celular.jpg\",\"filename\":\"b393sBW2zd_celular.jpg\",\"updated_at\":\"2021-12-08T18:00:23.000000Z\",\"created_at\":\"2021-12-08T18:00:23.000000Z\",\"id\":3}', '2021-12-08 18:00:23', '2021-12-08 18:00:23');
INSERT INTO `logs` VALUES (42, 'App\\Models\\File', 1, 'Archivo creado exitosamente', '{\"path\":\"http:\\/\\/127.0.0.1:8000\\/storage\\/user\\/rmbqpg6fMO_hppppp.jpg\",\"filename\":\"rmbqpg6fMO_hppppp.jpg\",\"updated_at\":\"2021-12-08T18:00:23.000000Z\",\"created_at\":\"2021-12-08T18:00:23.000000Z\",\"id\":4}', '2021-12-08 18:00:23', '2021-12-08 18:00:23');
INSERT INTO `logs` VALUES (43, 'App\\Models\\File', 1, 'Archivo creado exitosamente', '{\"path\":\"http:\\/\\/sms_main_5.test\\/storage\\/user\\/Dzb3CPYscU_35-huawei-p20-pro.jpg\",\"filename\":\"Dzb3CPYscU_35-huawei-p20-pro.jpg\",\"updated_at\":\"2021-12-08T23:21:40.000000Z\",\"created_at\":\"2021-12-08T23:21:40.000000Z\",\"id\":5}', '2021-12-08 23:21:40', '2021-12-08 23:21:40');
INSERT INTO `logs` VALUES (44, 'App\\Models\\File', 1, 'Archivo creado exitosamente', '{\"path\":\"http:\\/\\/sms_main_5.test\\/storage\\/user\\/p46eEQtiCi_fox-715588__480.jpg\",\"filename\":\"p46eEQtiCi_fox-715588__480.jpg\",\"updated_at\":\"2021-12-08T23:21:40.000000Z\",\"created_at\":\"2021-12-08T23:21:40.000000Z\",\"id\":6}', '2021-12-08 23:21:40', '2021-12-08 23:21:40');
INSERT INTO `logs` VALUES (45, 'App\\Models\\File', 1, 'Archivo creado exitosamente', '{\"path\":\"http:\\/\\/sms_main_5.test\\/storage\\/user\\/zhgHRH53sR_fox-715588__480.jpg\",\"filename\":\"zhgHRH53sR_fox-715588__480.jpg\",\"updated_at\":\"2021-12-08T23:24:43.000000Z\",\"created_at\":\"2021-12-08T23:24:43.000000Z\",\"id\":7}', '2021-12-08 23:24:43', '2021-12-08 23:24:43');
INSERT INTO `logs` VALUES (46, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"slug\":\"statistics.index\",\"name\":\"Visualizar Estadisticas\",\"updated_at\":\"2021-12-19T23:18:23.000000Z\",\"created_at\":\"2021-12-19T23:18:23.000000Z\",\"id\":37}', '2021-12-19 18:18:23', '2021-12-19 18:18:23');
INSERT INTO `logs` VALUES (47, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"slug\":\"statistics.index\",\"name\":\"Visualizar Estadisticas\",\"updated_at\":\"2021-12-19T23:18:35.000000Z\",\"created_at\":\"2021-12-19T23:18:35.000000Z\",\"id\":38}', '2021-12-19 18:18:35', '2021-12-19 18:18:35');
INSERT INTO `logs` VALUES (48, 'App\\Models\\Permission', NULL, 'Permiso creado exitosamente', '{\"slug\":\"statistics.index\",\"name\":\"Visualizar Estadisticas\",\"updated_at\":\"2021-12-19T23:21:03.000000Z\",\"created_at\":\"2021-12-19T23:21:03.000000Z\",\"id\":39}', '2021-12-19 18:21:03', '2021-12-19 18:21:03');

-- ----------------------------
-- Table structure for messages
-- ----------------------------
DROP TABLE IF EXISTS `messages`;
CREATE TABLE `messages`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `message` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `company_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of messages
-- ----------------------------
INSERT INTO `messages` VALUES (1, 'Es un mensaje de prueba para {NOMBRE}', NULL, '2021-12-08 17:10:57', '2021-12-08 17:10:57');

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 37 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO `migrations` VALUES (1, '2011_03_21_152355_create_files_table', 1);
INSERT INTO `migrations` VALUES (2, '2014_10_12_000000_create_users_table', 1);
INSERT INTO `migrations` VALUES (3, '2014_10_12_100000_create_password_resets_table', 1);
INSERT INTO `migrations` VALUES (4, '2019_08_19_000000_create_failed_jobs_table', 1);
INSERT INTO `migrations` VALUES (5, '2020_09_22_023342_create_roles_table', 1);
INSERT INTO `migrations` VALUES (6, '2020_09_22_023432_create_permissions_table', 1);
INSERT INTO `migrations` VALUES (7, '2020_09_22_025337_create_role_user_table', 1);
INSERT INTO `migrations` VALUES (8, '2020_09_22_030257_create_permission_user_table', 1);
INSERT INTO `migrations` VALUES (9, '2020_09_22_030819_create_permission_role_table', 1);
INSERT INTO `migrations` VALUES (10, '2021_04_02_173122_create_logs_table', 1);
INSERT INTO `migrations` VALUES (11, '2021_04_15_004057_create_phones_table', 1);
INSERT INTO `migrations` VALUES (12, '2021_04_16_001713_create_messages_table', 1);
INSERT INTO `migrations` VALUES (13, '2021_04_16_003558_create_tipos_table', 1);
INSERT INTO `migrations` VALUES (14, '2021_05_16_001618_create_clients_table', 1);
INSERT INTO `migrations` VALUES (15, '2021_05_16_002156_create_sms_table', 1);
INSERT INTO `migrations` VALUES (16, '2021_10_28_034143_create_invoices_table', 1);
INSERT INTO `migrations` VALUES (17, '2021_10_28_134803_create_sales', 1);
INSERT INTO `migrations` VALUES (18, '2021_11_07_193426_create_category_client_table', 1);
INSERT INTO `migrations` VALUES (19, '2021_11_07_193521_create_category_table', 1);
INSERT INTO `migrations` VALUES (20, '2021_11_07_232559_create_tipomedia_table', 1);
INSERT INTO `migrations` VALUES (21, '2021_11_07_232946_create_tipomoneda_table', 1);
INSERT INTO `migrations` VALUES (22, '2021_11_07_234024_create_companys_table', 1);
INSERT INTO `migrations` VALUES (23, '2021_11_08_063407_create_products_table', 1);
INSERT INTO `migrations` VALUES (24, '2021_11_10_201028_create_form_table', 1);
INSERT INTO `migrations` VALUES (25, '2021_12_03_053706_add_column_video_url_to_products_table', 1);
INSERT INTO `migrations` VALUES (26, '2021_12_03_233538_add_column_pago_is_to_products_table', 1);
INSERT INTO `migrations` VALUES (27, '2021_12_11_134957_create_type_table', 2);
INSERT INTO `migrations` VALUES (28, '2021_12_11_135201_create_form_table', 3);
INSERT INTO `migrations` VALUES (29, '2021_12_11_135201_alter_form_table', 4);
INSERT INTO `migrations` VALUES (35, '2021_12_18_123611_alter_column_to_sms_table', 5);
INSERT INTO `migrations` VALUES (36, '2021_12_19_181352_add_statistics_permission_table', 5);

-- ----------------------------
-- Table structure for password_resets
-- ----------------------------
DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE `password_resets`  (
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  INDEX `password_resets_email_index`(`email`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for permission_role
-- ----------------------------
DROP TABLE IF EXISTS `permission_role`;
CREATE TABLE `permission_role`  (
  `permission_id` int(10) UNSIGNED NOT NULL,
  `role_id` int(10) UNSIGNED NOT NULL,
  INDEX `permission_role_permission_id_foreign`(`permission_id`) USING BTREE,
  INDEX `permission_role_role_id_foreign`(`role_id`) USING BTREE,
  CONSTRAINT `permission_role_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `permission_role_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of permission_role
-- ----------------------------
INSERT INTO `permission_role` VALUES (1, 1);
INSERT INTO `permission_role` VALUES (2, 1);
INSERT INTO `permission_role` VALUES (3, 1);
INSERT INTO `permission_role` VALUES (4, 1);
INSERT INTO `permission_role` VALUES (5, 1);
INSERT INTO `permission_role` VALUES (6, 1);
INSERT INTO `permission_role` VALUES (7, 1);
INSERT INTO `permission_role` VALUES (8, 1);
INSERT INTO `permission_role` VALUES (9, 1);
INSERT INTO `permission_role` VALUES (10, 1);
INSERT INTO `permission_role` VALUES (11, 1);
INSERT INTO `permission_role` VALUES (12, 1);
INSERT INTO `permission_role` VALUES (13, 1);
INSERT INTO `permission_role` VALUES (14, 1);
INSERT INTO `permission_role` VALUES (15, 1);
INSERT INTO `permission_role` VALUES (16, 1);
INSERT INTO `permission_role` VALUES (17, 1);
INSERT INTO `permission_role` VALUES (18, 1);
INSERT INTO `permission_role` VALUES (19, 1);
INSERT INTO `permission_role` VALUES (20, 1);
INSERT INTO `permission_role` VALUES (21, 1);
INSERT INTO `permission_role` VALUES (22, 1);
INSERT INTO `permission_role` VALUES (23, 1);
INSERT INTO `permission_role` VALUES (24, 1);
INSERT INTO `permission_role` VALUES (25, 1);
INSERT INTO `permission_role` VALUES (26, 1);
INSERT INTO `permission_role` VALUES (27, 1);
INSERT INTO `permission_role` VALUES (28, 1);
INSERT INTO `permission_role` VALUES (29, 1);
INSERT INTO `permission_role` VALUES (30, 1);
INSERT INTO `permission_role` VALUES (31, 1);
INSERT INTO `permission_role` VALUES (32, 1);
INSERT INTO `permission_role` VALUES (33, 1);
INSERT INTO `permission_role` VALUES (34, 1);
INSERT INTO `permission_role` VALUES (35, 1);
INSERT INTO `permission_role` VALUES (36, 1);
INSERT INTO `permission_role` VALUES (39, 1);

-- ----------------------------
-- Table structure for permission_user
-- ----------------------------
DROP TABLE IF EXISTS `permission_user`;
CREATE TABLE `permission_user`  (
  `permission_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  INDEX `permission_user_permission_id_foreign`(`permission_id`) USING BTREE,
  INDEX `permission_user_user_id_foreign`(`user_id`) USING BTREE,
  CONSTRAINT `permission_user_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `permission_user_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for permissions
-- ----------------------------
DROP TABLE IF EXISTS `permissions`;
CREATE TABLE `permissions`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `slug` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `permissions_slug_unique`(`slug`) USING BTREE,
  UNIQUE INDEX `permissions_name_unique`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 40 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of permissions
-- ----------------------------
INSERT INTO `permissions` VALUES (1, 'log.index', 'Navegar Logs', '2021-12-08 17:10:49', '2021-12-08 17:10:49');
INSERT INTO `permissions` VALUES (2, 'Escritorio', 'Escritorio', '2021-12-08 17:10:49', '2021-12-08 17:10:49');
INSERT INTO `permissions` VALUES (3, 'permiso.index', 'Navegar Permisos', '2021-12-08 17:10:50', '2021-12-08 17:10:50');
INSERT INTO `permissions` VALUES (4, 'permiso.crear', 'Crear Permiso', '2021-12-08 17:10:50', '2021-12-08 17:10:50');
INSERT INTO `permissions` VALUES (5, 'permiso.editar', 'Editar Permiso', '2021-12-08 17:10:50', '2021-12-08 17:10:50');
INSERT INTO `permissions` VALUES (6, 'rol.index', 'Navegar Roles', '2021-12-08 17:10:50', '2021-12-08 17:10:50');
INSERT INTO `permissions` VALUES (7, 'rol.crear', 'Crear Rol', '2021-12-08 17:10:51', '2021-12-08 17:10:51');
INSERT INTO `permissions` VALUES (8, 'rol.editar', 'Editar Rol', '2021-12-08 17:10:51', '2021-12-08 17:10:51');
INSERT INTO `permissions` VALUES (9, 'usuario.index', 'Navegar Usuarios', '2021-12-08 17:10:51', '2021-12-08 17:10:51');
INSERT INTO `permissions` VALUES (10, 'usuario.crear', 'Crear Usuario', '2021-12-08 17:10:51', '2021-12-08 17:10:51');
INSERT INTO `permissions` VALUES (11, 'usuario.editar', 'Editar Usuario', '2021-12-08 17:10:51', '2021-12-08 17:10:51');
INSERT INTO `permissions` VALUES (12, 'usuario.ver', 'Ver Usuario', '2021-12-08 17:10:51', '2021-12-08 17:10:51');
INSERT INTO `permissions` VALUES (13, 'usuario.activar', 'Activar Usuario', '2021-12-08 17:10:51', '2021-12-08 17:10:51');
INSERT INTO `permissions` VALUES (14, 'usuario.desactivar', 'Desactivar Usuario', '2021-12-08 17:10:51', '2021-12-08 17:10:51');
INSERT INTO `permissions` VALUES (15, 'usuario.permiso', 'Permiso Usuario', '2021-12-08 17:10:52', '2021-12-08 17:10:52');
INSERT INTO `permissions` VALUES (16, 'usuario.perfil', 'Perfil Usuario', '2021-12-08 17:10:52', '2021-12-08 17:10:52');
INSERT INTO `permissions` VALUES (17, 'tipo.index', 'Navegar Tipos', '2021-12-08 17:10:52', '2021-12-08 17:10:52');
INSERT INTO `permissions` VALUES (18, 'tipo.crear', 'Crear Tipo', '2021-12-08 17:10:52', '2021-12-08 17:10:52');
INSERT INTO `permissions` VALUES (19, 'tipo.editar', 'Editar Tipo', '2021-12-08 17:10:52', '2021-12-08 17:10:52');
INSERT INTO `permissions` VALUES (20, 'telefono.configurar', 'Configurar Teléfono', '2021-12-08 17:10:52', '2021-12-08 17:10:52');
INSERT INTO `permissions` VALUES (21, 'cliente.index', 'Navegar Clientes', '2021-12-08 17:10:52', '2021-12-08 17:10:52');
INSERT INTO `permissions` VALUES (22, 'cliente.crear', 'Crear Cliente', '2021-12-08 17:10:53', '2021-12-08 17:10:53');
INSERT INTO `permissions` VALUES (23, 'cliente.editar', 'Editar Cliente', '2021-12-08 17:10:53', '2021-12-08 17:10:53');
INSERT INTO `permissions` VALUES (24, 'cliente.importar', 'Importar Cliente', '2021-12-08 17:10:53', '2021-12-08 17:10:53');
INSERT INTO `permissions` VALUES (25, 'cliente.activar', 'Activar Cliente', '2021-12-08 17:10:53', '2021-12-08 17:10:53');
INSERT INTO `permissions` VALUES (26, 'cliente.desactivar', 'Desactivar Cliente', '2021-12-08 17:10:54', '2021-12-08 17:10:54');
INSERT INTO `permissions` VALUES (27, 'sms.index', 'Envira SMS', '2021-12-08 17:10:54', '2021-12-08 17:10:54');
INSERT INTO `permissions` VALUES (28, 'mensaje.predeterminado.index', 'Navegar Mensajes Predeterminados', '2021-12-08 17:10:54', '2021-12-08 17:10:54');
INSERT INTO `permissions` VALUES (29, 'mensaje.predeterminado.crear', 'Crear Mensaje Predeterminado', '2021-12-08 17:10:54', '2021-12-08 17:10:54');
INSERT INTO `permissions` VALUES (30, 'mensaje.predeterminado.editar', 'Editar Mensaje Predeterminado', '2021-12-08 17:10:54', '2021-12-08 17:10:54');
INSERT INTO `permissions` VALUES (31, 'mensaje.predeterminado.eliminar', 'Eliminar Mensaje Predeterminado', '2021-12-08 17:10:54', '2021-12-08 17:10:54');
INSERT INTO `permissions` VALUES (32, 'landing.page', 'Mi landing page', '2021-12-08 17:10:55', '2021-12-08 17:10:55');
INSERT INTO `permissions` VALUES (33, 'producto.crear', 'Crear producto', '2021-12-08 17:10:55', '2021-12-08 17:10:55');
INSERT INTO `permissions` VALUES (34, 'producto.editar', 'Editar producto', '2021-12-08 17:10:55', '2021-12-08 17:10:55');
INSERT INTO `permissions` VALUES (35, 'producto.activar', 'Activar producto', '2021-12-08 17:10:55', '2021-12-08 17:10:55');
INSERT INTO `permissions` VALUES (36, 'producto.desactivar', 'Desactivar producto', '2021-12-08 17:10:55', '2021-12-08 17:10:55');
INSERT INTO `permissions` VALUES (39, 'statistics.index', 'Visualizar Estadisticas', '2021-12-19 18:21:03', '2021-12-19 18:21:03');

-- ----------------------------
-- Table structure for phones
-- ----------------------------
DROP TABLE IF EXISTS `phones`;
CREATE TABLE `phones`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `phone_number` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of phones
-- ----------------------------
INSERT INTO `phones` VALUES (1, '14157386170', '2021-12-08 17:10:57', '2021-12-08 17:10:57');

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `description` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `detalle` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `titulo` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `price` decimal(8, 2) UNSIGNED NULL DEFAULT NULL,
  `media` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `ubicacion` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `telefono` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `descripcion` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `pago` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `correo_notificacion` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `image_fondo` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `titulo_formulario` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `promesa` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `color` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `colorcabezera` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `colorformulario` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `tamañoletra` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `company_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `tipomedia_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `tipomoneda_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `file_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `status` enum('A','I') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'A',
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  `video_url` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `pago_is` tinyint(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `products_company_id_foreign`(`company_id`) USING BTREE,
  INDEX `products_tipomedia_id_foreign`(`tipomedia_id`) USING BTREE,
  INDEX `products_tipomoneda_id_foreign`(`tipomoneda_id`) USING BTREE,
  INDEX `products_file_id_foreign`(`file_id`) USING BTREE,
  CONSTRAINT `products_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companys` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `products_file_id_foreign` FOREIGN KEY (`file_id`) REFERENCES `files` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `products_tipomedia_id_foreign` FOREIGN KEY (`tipomedia_id`) REFERENCES `tipomedia` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `products_tipomoneda_id_foreign` FOREIGN KEY (`tipomoneda_id`) REFERENCES `tipomoneda` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES (1, 'nombre', 'DETALLE', 'TITULO', NULL, NULL, 'LOS TREBOLES', '929967144', NULL, '765.8', 'SCARRASCO@INGYTAL.COM', '2', 'TITULO FORMULARIO', 'PROMESA', '', '', '', '', NULL, 1, 1, 1, 'A', '2021-12-08 17:52:08', '2021-12-08 17:52:08', NULL, 1);
INSERT INTO `products` VALUES (2, 'nombre 2', 'DETALLE 2', 'TITULO 2', NULL, NULL, 'LOS TREBOLES', '929967144', NULL, '765.8', 'SCARRASCO@INGYTAL.COM', '4', 'TITULO FORMULARIO 2', 'PROMESA 2', '#EC4646', '#D37373', '#43A6AD', '', NULL, 1, 1, 3, 'A', '2021-12-08 18:00:24', '2021-12-08 18:00:24', NULL, 1);
INSERT INTO `products` VALUES (3, 'huawei p20 pro', 'DETALLES', 'TITULO', NULL, NULL, 'UBICACION', '926219958', NULL, '', 'CORREO@GMAIL.COM', '6', 'TITULO', 'PROMESA', '#FF7B00', '', '', '', NULL, 1, 1, 5, 'A', '2021-12-08 23:21:41', '2021-12-08 23:21:41', NULL, 0);
INSERT INTO `products` VALUES (4, 'NOMBRES', 'DETALLES', 'TITULO', NULL, NULL, 'UBICACION', '926219958', NULL, '', 'DJOEL_TORRES@HOTMAIL.COM', '7', 'TITULO FORMULARIO', 'PROMESA', '', '', '', '', NULL, 2, 1, NULL, 'A', '2021-12-08 23:24:43', '2021-12-08 23:24:43', 'https://www.youtube.com/watch?v=OJmexGzugm4', 0);

-- ----------------------------
-- Table structure for role_user
-- ----------------------------
DROP TABLE IF EXISTS `role_user`;
CREATE TABLE `role_user`  (
  `role_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  INDEX `role_user_role_id_foreign`(`role_id`) USING BTREE,
  INDEX `role_user_user_id_foreign`(`user_id`) USING BTREE,
  CONSTRAINT `role_user_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `role_user_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of role_user
-- ----------------------------
INSERT INTO `role_user` VALUES (1, 1);

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `slug` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `roles_slug_unique`(`slug`) USING BTREE,
  UNIQUE INDEX `roles_name_unique`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO `roles` VALUES (1, 'Administrador', 'Administrador', '2021-12-08 17:10:55', '2021-12-08 17:10:55');

-- ----------------------------
-- Table structure for sales
-- ----------------------------
DROP TABLE IF EXISTS `sales`;
CREATE TABLE `sales`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sms
-- ----------------------------
DROP TABLE IF EXISTS `sms`;
CREATE TABLE `sms`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `to` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `body` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `from` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `client_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `message_uuid` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `status` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT 'S',
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `sms_client_id_foreign`(`client_id`) USING BTREE,
  CONSTRAINT `sms_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sms
-- ----------------------------
INSERT INTO `sms` VALUES (1, '51926219958', 'Es un mensaje de prueba para DENIS JOEL', '14157386170', 1, '1', 'S', NULL, NULL);
INSERT INTO `sms` VALUES (2, '51926219958', 'Es un mensaje de prueba para DENIS JOEL', '14157386170', 1, 'b0f7d5ee-3811-46d3-bd79-92cdb14a643f', 'ENTREGADO', NULL, '2021-12-18 13:25:03');

-- ----------------------------
-- Table structure for tipomedia
-- ----------------------------
DROP TABLE IF EXISTS `tipomedia`;
CREATE TABLE `tipomedia`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tipomedia
-- ----------------------------
INSERT INTO `tipomedia` VALUES (1, 'imagen', NULL, NULL);
INSERT INTO `tipomedia` VALUES (2, 'video', NULL, NULL);

-- ----------------------------
-- Table structure for tipomoneda
-- ----------------------------
DROP TABLE IF EXISTS `tipomoneda`;
CREATE TABLE `tipomoneda`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tipomoneda
-- ----------------------------
INSERT INTO `tipomoneda` VALUES (1, 'sol', NULL, NULL);

-- ----------------------------
-- Table structure for tipos
-- ----------------------------
DROP TABLE IF EXISTS `tipos`;
CREATE TABLE `tipos`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tipos
-- ----------------------------
INSERT INTO `tipos` VALUES (1, 'PERSONA NATURAL', '2021-12-08 17:10:56', '2021-12-08 17:10:56');
INSERT INTO `tipos` VALUES (2, 'PERSONA JURÍDICA', '2021-12-08 17:10:57', '2021-12-08 17:10:57');
INSERT INTO `tipos` VALUES (3, 'SUCESIÓN INDIVISA', '2021-12-08 17:10:57', '2021-12-08 17:10:57');
INSERT INTO `tipos` VALUES (4, 'SOCIEDAD CONYUGAL', '2021-12-08 17:10:57', '2021-12-08 17:10:57');
INSERT INTO `tipos` VALUES (5, 'SOCIEDAD IRREGULAR', '2021-12-08 17:10:57', '2021-12-08 17:10:57');
INSERT INTO `tipos` VALUES (6, 'MENOR DE EDAD', '2021-12-08 17:10:57', '2021-12-08 17:10:57');

-- ----------------------------
-- Table structure for type
-- ----------------------------
DROP TABLE IF EXISTS `type`;
CREATE TABLE `type`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `email_verified_at` timestamp(0) NULL DEFAULT NULL,
  `username` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `status` enum('A','I') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'A',
  `created_by` int(10) UNSIGNED NOT NULL,
  `updated_by` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `users_email_unique`(`email`) USING BTREE,
  INDEX `users_file_id_foreign`(`file_id`) USING BTREE,
  INDEX `users_created_by_index`(`created_by`) USING BTREE,
  INDEX `users_updated_by_index`(`updated_by`) USING BTREE,
  CONSTRAINT `users_file_id_foreign` FOREIGN KEY (`file_id`) REFERENCES `files` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'Sisy Carrasco Choez', 'test@gmail.com', '2021-12-08 17:10:56', 'sisy', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, '7g6aG4KxRK', 'A', 1, 1, '2021-12-08 17:10:56', '2021-12-08 17:10:56');

SET FOREIGN_KEY_CHECKS = 1;
