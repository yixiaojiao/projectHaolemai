<?php
    header("Content-Type: text/html;charset=utf-8");
	
	$con = mysql_connect("localhost","root","root");
   
    mysql_select_db("landing");
	
	if(!$con){
            die("数据库连接失败". mysql_error());
      }
	
	$username = @$_POST["username"];
    $password = @$_POST["password"];
	
	
	
	$select_query = "SELECT * FROM list1";

    $select_res = mysql_query($select_query);

    while($row = mysql_fetch_array($select_res)){
            if($row["account"] === $username){
                  if($row["password"] === md5($password)){
                   die('{"state":"succound"}');
                  }
            }
      }
?>