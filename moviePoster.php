<?php
	$movieName = $_GET['moviename'];
	$movieName=urlencode($movieName);
	$response = file_get_contents("https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=$movieName");
	$json = json_decode($response,true);
	echo $json["responseData"]["results"][0]["url"];
?>