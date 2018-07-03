<?php
	include 'php/public.php';
	//操作数据 库
	//4.编写sql语句
	$sql = "SELECT * FROM `goods` WHERE gid = '1'";
	//5.执行sql语句
	$set = mysql_query($sql);
	//将集合转为数组
	$arr = mysql_fetch_array($set);
	echo json_encode($arr);
	