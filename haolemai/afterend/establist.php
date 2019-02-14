<?php
   
   $con = mysql_connect("localhost","root","root");
   
   mysql_select_db("mylist");
   
    $username = @$_REQUEST["username"];
    $password = @$_REQUEST["password"];
   
   
   if(!$username || !$password){
            die('{"state":"error","errorType":"参数不能为空","stateCode":"2"}');
      }
   
   
   $select_query = "SELECT username FROM newdata";
   $select_res = mysql_query($select_query);
   
   while($row = mysql_fetch_array($select_res)){
            if($username === $row["username"]){
                  mysql_close($con);
                  die('{"state":"error","stateCode":"用户名重复","errorState":"4"}');
            }
      }
    
	$password = md5($password);
      $inster_query = "INSERT INTO newdata (username , password) VALUES ('$username','$password')";

      $insert_res =  mysql_query($inster_query);

      if($insert_res){
            die('{"state":"success","errorType":"null","stateCode":"1"}');
      }else{
            die('{"state":"error","errorType":"数据库写入失败","stateCode":"5"}');
      }

?>