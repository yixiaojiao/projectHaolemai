<?php
    header("Content-Type: text/html;charset=utf-8");
	
	$con = mysql_connect("localhost","root","root");
   
    mysql_select_db("mylist");
	
	$username = @$_POST["username"];
    $password = @$_POST["password"];
	
	if(!$username || !$password ){
            die('{"state":"error","errorType":"参数不全","stateCode":"2"}');
      }
	
	$select_query = "SELECT * FROM newdata";

    $select_res = mysql_query($select_query);
	
	$flag = false;
	
    while($row = mysql_fetch_array($select_res)){
//          if($row["username"] !== $username){
//          	die('{"state":"error","errorType":"账号不正确","stateCode":"5"}');
//          }
//			if($row["username"] === $username && $row["password"] !== md5($password)){
//          	die('{"state":"error","errorType":"密码不正确","stateCode":"6"}');
//          }
            if($row["username"] === $username){
                die('{"state":"success","errorType":"null","stateCode":"1"}');
				$flag = true;
            }
			if($flag = false){
				die('{"state":"error","errorType":"账号不正确","stateCode":"5"}');
			}
    
      }
?>