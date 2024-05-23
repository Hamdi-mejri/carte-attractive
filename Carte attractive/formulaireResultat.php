<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Document sans titre</title>
<link href="styleFormResultat.css" rel="stylesheet" type="text/css" />
<head>
    <script type="text/javascript">
      function RedirectionJavascript(){
        document.location.href="http://localhost/appl/map_google.html";
      }
   </script>
  </head>
</head>

<body onLoad="setTimeout('RedirectionJavascript()', 3000)">


<div id="msg" >Les propriétés a été envoyées avec succès<br />
chargement de la page ...

</div>


<?php

$v1=$_POST['v1'];
$v2=$_POST['v2'];
$v3=$_POST['v3'];
$v4=$_POST['v4'];
$r1=$_POST['r1'];
$r2=$_POST['r2'];
$r3=$_POST['r3'];

$strColor=$_POST['strColor'];
$sOpacityEx=$_POST['sOpacityEx'];
$sOpacity=$_POST['sOpacity'];
$sWeight=$_POST['sWeight'];

$fColorEx=$_POST['fColorEx'];
$fColorZ1=$_POST['fColorZ1'];
$fColorZ2=$_POST['fColorZ2'];
$fColorZ3=$_POST['fColorZ3'];
$fOpacity=$_POST['fOpacity'];


$params = array (
            'v1' => $v1,
            'v2' => $v2,
            'v3' => $v3,
            'v4' => $v4,
			'r1' => $r1,
			'r2' => $r2,
			'r3' => $r3,
			
			'strColor' => $strColor,
			'sOpacityEx' => $sOpacityEx,
			'sOpacity' => $sOpacity,
			'sWeight' => $sWeight,
			
			'fColorEx' => $fColorEx,
			'fColorZ1' => $fColorZ1,
			'fColorZ2' => $fColorZ2,
			'fColorZ3' => $fColorZ3,
			'fOpacity' => $fOpacity,
			
			);
				$data= json_encode($params);
				$fp = fopen("data.json","w+"); 		//creation du fichier
        		
				fputs($fp, $data); 					// on écrit les données dans le data.json
        		fclose($fp); 		 				//on ferme le data.json	




?>

		


</body>
</html>