/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : zjx

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-01-08 20:01:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodlist
-- ----------------------------
DROP TABLE IF EXISTS `goodlist`;
CREATE TABLE `goodlist` (
  `name` varchar(255) NOT NULL,
  `color` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `l_price` decimal(10,2) NOT NULL,
  `f_price` decimal(10,2) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of goodlist
-- ----------------------------

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `l_price` decimal(10,2) NOT NULL,
  `f_price` decimal(10,2) NOT NULL,
  `color` varchar(255) CHARACTER SET utf8 COLLATE utf8_latvian_ci DEFAULT NULL,
  `size` varchar(255) CHARACTER SET utf8 COLLATE utf8_latvian_ci NOT NULL DEFAULT '',
  `category` varchar(255) CHARACTER SET utf8 COLLATE utf8_latvian_ci NOT NULL DEFAULT '',
  `qty` int(11) DEFAULT '1',
  `add_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=61 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('31', 'adidas阿迪达斯 男鞋黑武士跑步鞋17新品', '138.00', '338.00', null, '35,36,37,38,39', '', '1', '2018-01-05 20:33:24');
INSERT INTO `list` VALUES ('32', 'ADIDAS阿迪达斯 新款男子galaxy3系列鞋跑', '438.00', '538.00', null, '35,36,37', '', '1', '2018-01-05 20:33:24');
INSERT INTO `list` VALUES ('33', '阿迪达斯三叶�?Stan Smith 男女情侣绿尾', '238.00', '338.00', null, '35,36,37,38,39', '', '1', '2018-01-05 20:33:24');
INSERT INTO `list` VALUES ('34', 'Adidas阿迪达斯女鞋 2017春季新款三叶�?', '638.00', '738.00', null, '35,36,37,38,39', '', '1', '2018-01-05 20:33:24');
INSERT INTO `list` VALUES ('35', 'adidas阿迪达斯 男鞋黑武士跑步鞋17新品', '538.00', '838.00', null, '35,36,37,38,39', '', '1', '2018-01-05 20:33:24');
INSERT INTO `list` VALUES ('36', 'Adidas 阿迪达斯 三叶草男�?小白�?017�?', '738.00', '938.00', null, '35,37,38,39', '', '1', '2018-01-05 20:33:24');
INSERT INTO `list` VALUES ('37', 'adidas阿迪达斯 男鞋黑武士跑步鞋17新品', '838.00', '1338.00', null, '35,38,39', '', '1', '2018-01-05 20:33:24');
INSERT INTO `list` VALUES ('38', 'adidas阿迪达斯 男鞋黑武士跑步鞋17新品', '538.00', '738.00', null, '35,36,37,38,39', '', '1', '2018-01-05 20:33:24');
INSERT INTO `list` VALUES ('39', 'adidas 阿迪达斯 男鞋 冬季新品 运动网球�?', '238.00', '398.00', null, '37,38,39,40,41,42,44', '', '1', '2018-01-05 20:33:24');
INSERT INTO `list` VALUES ('40', 'adidas阿迪达斯 男鞋黑武士跑步鞋17新品', '438.00', '938.00', null, '40,41,42,43,45', '', '1', '2018-01-05 20:33:24');
INSERT INTO `list` VALUES ('41', 'adidas阿迪达斯 男鞋黑武士跑步鞋17新品', '138.00', '338.00', null, '37,38,39', '', '1', '2018-01-05 20:33:24');
INSERT INTO `list` VALUES ('42', '1CONVERSE匡威2017新款春秋低帮平底�?', '188.00', '438.00', null, '35,38,39', '', '1', '2018-01-05 20:33:24');
INSERT INTO `list` VALUES ('43', 'adidas阿迪达斯 男鞋黑武士跑步鞋17新品', '368.00', '438.00', null, '38,39,40,43,44,45', '', '1', '2018-01-05 20:33:24');
INSERT INTO `list` VALUES ('44', 'ADIDAS阿迪达斯 新款男子galaxy3系列鞋跑', '938.00', '1338.00', null, '35,36,37,38,39', '', '1', '2018-01-05 20:33:24');
INSERT INTO `list` VALUES ('45', 'adidas 阿迪达斯 男鞋 冬季新品 运动网球�?', '638.00', '1738.00', null, '40,41,42,44,45', '', '1', '2018-01-05 20:33:24');
INSERT INTO `list` VALUES ('46', 'adidas阿迪达斯 男鞋黑武士跑步鞋17新品', '138.00', '338.00', null, '40,41,42,43,45', '', '1', '2018-01-05 20:33:24');
INSERT INTO `list` VALUES ('47', 'adidas阿迪达斯 男鞋黑武士跑步鞋17新品', '166.00', '338.00', null, '37,38,39', '', '1', '2018-01-05 20:33:24');
INSERT INTO `list` VALUES ('48', '1CONVERSE匡威2017新款春秋低帮平底�?', '138.00', '678.00', null, '35,38,39', '', '1', '2018-01-05 20:33:24');
INSERT INTO `list` VALUES ('49', 'adidas阿迪达斯 男鞋黑武士跑步鞋17新品', '198.00', '538.00', null, '38,39,40,43,44,45', '', '1', '2018-01-05 20:33:24');
INSERT INTO `list` VALUES ('50', 'adidas阿迪达斯 男鞋黑武士跑步鞋17新品', '138.00', '338.00', null, '35,36,37,38,39', '', '1', '2018-01-05 20:33:24');
INSERT INTO `list` VALUES ('51', 'ADIDAS阿迪达斯 新款男子galaxy3系列鞋跑', '438.00', '538.00', null, '35,36,37', '', '1', '2018-01-05 20:33:24');
INSERT INTO `list` VALUES ('52', '阿迪达斯三叶�?Stan Smith 男女情侣绿尾', '238.00', '338.00', null, '35,36,37,38,39', '', '1', '2018-01-05 20:33:24');
INSERT INTO `list` VALUES ('53', 'Adidas阿迪达斯女鞋 2017春季新款三叶�?', '638.00', '738.00', null, '35,36,37,38,39', '', '1', '2018-01-05 20:33:24');
INSERT INTO `list` VALUES ('54', 'adidas阿迪达斯 男鞋黑武士跑步鞋17新品', '538.00', '838.00', null, '35,36,37,38,39', '', '1', '2018-01-05 20:33:24');
INSERT INTO `list` VALUES ('55', 'Adidas 阿迪达斯 三叶草男�?小白�?017�?', '738.00', '938.00', null, '35,37,38,39', '', '1', '2018-01-05 20:33:24');
INSERT INTO `list` VALUES ('56', 'adidas阿迪达斯 男鞋黑武士跑步鞋17新品', '138.00', '338.00', null, '35,38,39', '', '1', '2018-01-05 20:33:24');
INSERT INTO `list` VALUES ('57', 'adidas阿迪达斯 男鞋黑武士跑步鞋17新品', '138.00', '338.00', null, '35,36,37,38,39', '', '1', '2018-01-05 20:33:24');
INSERT INTO `list` VALUES ('58', 'adidas 阿迪达斯 男鞋 冬季新品 运动网球�?', '138.00', '338.00', null, '37,38,39,40,41,42,44', '', '1', '2018-01-05 20:33:24');
INSERT INTO `list` VALUES ('59', 'adidas阿迪达斯 男鞋黑武士跑步鞋17新品', '138.00', '338.00', null, '40,41,42,43,45', '', '1', '2018-01-05 20:33:24');
INSERT INTO `list` VALUES ('60', '阿迪达斯三叶�?Stan Smith 男女情侣绿尾', '238.00', '338.00', null, '35,36,37,38,39', '', '1', '2018-01-05 20:33:24');

-- ----------------------------
-- Table structure for reg
-- ----------------------------
DROP TABLE IF EXISTS `reg`;
CREATE TABLE `reg` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_icelandic_ci DEFAULT NULL,
  `houseAddress` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `tel` varchar(255) CHARACTER SET utf8 COLLATE utf8_latvian_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of reg
-- ----------------------------
INSERT INTO `reg` VALUES ('1', '13137543929password=123456a', 'e10adc3949ba59abbe56e057f20f883e', null, null, null);
INSERT INTO `reg` VALUES ('2', '18565478426', '9cbf8a4dcb8e30682b927f352d6559a0', null, null, null);
INSERT INTO `reg` VALUES ('3', '17127533929', '9cbf8a4dcb8e30682b927f352d6559a0', null, null, null);
INSERT INTO `reg` VALUES ('4', '18211672566', '9cbf8a4dcb8e30682b927f352d6559a0', null, null, null);
INSERT INTO `reg` VALUES ('7', 'qwewq', 'f1737e5248f7fb526068fbd0acf28cee', null, null, null);
INSERT INTO `reg` VALUES ('6', '13133562288', '9cbf8a4dcb8e30682b927f352d6559a0', null, null, null);
INSERT INTO `reg` VALUES ('8', 'qwq', 'a078b88157431887516448c823118d83', null, null, null);
INSERT INTO `reg` VALUES ('9', 'd', 'd41d8cd98f00b204e9800998ecf8427e', null, null, null);
INSERT INTO `reg` VALUES ('10', 'wqdwqd', 'f9bcc73593d503c08ac85a19cf17f465', null, null, null);
INSERT INTO `reg` VALUES ('11', 'asas', 'baa7a52965b99778f38ef37f235e9053', null, null, null);
INSERT INTO `reg` VALUES ('12', 'asa', 'd41d8cd98f00b204e9800998ecf8427e', null, null, null);
INSERT INTO `reg` VALUES ('13', 'asd', 'f970e2767d0cfe75876ea857f92e319b', null, null, null);
INSERT INTO `reg` VALUES ('14', 'as', 'a8a64cef262a04de4872b68b63ab7cd8', null, null, null);
INSERT INTO `reg` VALUES ('15', 'sas', 'a8a64cef262a04de4872b68b63ab7cd8', null, null, null);
INSERT INTO `reg` VALUES ('16', 'asaq', 'f970e2767d0cfe75876ea857f92e319b', null, null, null);
INSERT INTO `reg` VALUES ('17', 'swde', 'f970e2767d0cfe75876ea857f92e319b', null, null, null);
INSERT INTO `reg` VALUES ('18', 'a', '0cc175b9c0f1b6a831c399e269772661', null, null, null);
INSERT INTO `reg` VALUES ('19', '13456789123', '9cbf8a4dcb8e30682b927f352d6559a0', null, null, null);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_romanian_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_latvian_ci NOT NULL,
  `l_price` varchar(255) CHARACTER SET utf8 COLLATE utf8_romanian_ci NOT NULL,
  `f_price` varchar(155) CHARACTER SET utf8 COLLATE utf8_romanian_ci NOT NULL,
  `color` varchar(255) DEFAULT NULL,
  `size` varchar(255) NOT NULL,
  `qty` int(11) NOT NULL DEFAULT '1',
  `category` varchar(255) CHARACTER SET utf8 COLLATE utf8_latvian_ci NOT NULL DEFAULT '鞋子',
  `num` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('18', 'null', 'ADIDAS%E9%98%BF%E8%BF%AA%E8%BE%BE%E6%96%AF%20%E6%96%B0%E6%AC%BE%E7%94%B7%E5%AD%90galaxy3%E7%B3%BB%E5%88%97%E9%9E%8B%E8%B7%91', '%EF%BF%A5438', '%EF%BF%A5538', null, '35,36,37', '1', '鞋子', '2');
SET FOREIGN_KEY_CHECKS=1;
