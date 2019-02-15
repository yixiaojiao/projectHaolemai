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
	
	
	
	$json_array = array();

        while($row = mysql_fetch_array($select_res)){
             array_push($json_array,$row);
        }

    $json_array = json_encode($json_array);

      echo "{
            \"list\":$json_array
      }";
	
//	$flag = false;
//	
//  while($row = mysql_fetch_array($select_res)){
//      if(md5($password) === $row["password"]){
//      	die('{"state":"error","errorType":"账号密码错误","stateCode":"5"}');
//      }
//  }
?>