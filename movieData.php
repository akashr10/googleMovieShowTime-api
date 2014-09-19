<?php
	$city = $_GET['city'];
	$city=urlencode($city);
	$response = file_get_contents("http://www.google.co.in/movies?near=$city");
	echo $response;
?>