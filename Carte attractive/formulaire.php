

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Document sans nom</title>
<link href="StyleFormulaire.css" rel="stylesheet" type="text/css" />
</head>
 
<body>

<form  action="formulaireResultat.php" method="post">
<fieldset>
	<legend>Les propriétés des zones</legend>
    
	<span id="titre">-- les noms des villes --</span><br />
			
			<label>ville 1 :</label>
            	<input type="text" name="v1" /><br />
            <label>ville 2 :</label>
            	<input type="text" name="v2" /><br />
            <label>ville 3 :</label>
            	<input type="text" name="v3" /><br />
            <label>ville 4 :</label>
            	<input type="text" name="v4" /><br />
                
   
   
    <span id="titre">-- Radius : --</span><br />         
    
             <label>rayon 1 </label>
    			<input type="text" name="r1" /><br />
             <label>rayon 2</label>
    			<input type="text" name="r2" />  <br />       	 
                <label>rayon 3 </label>
    			<input type="text" name="r3" />		   <br />          
                
                
    <span id="titre">-- Stroke --</span><br />
              <label>Couleur : </label>
    			<input type="text" name="strColor" /><br />
             <label>Opacité extérieure</label>
    			<input type="text" name="sOpacityEx" /><br />
             <label>Opacité</label>
    			<input type="text" name="sOpacity" /><br />
             <label>taille</label>
    			<input type="text" name="sWeight" />       <br />  	 
                
                
    <span id="titre">-- Fill --</span><br />
              <label>Couleur extérieure :</label>
    			<input type="text" name="fColorEx" /><br />
               <label>Couleur zone 1 :</label>
    			<input type="text" name="fColorZ1" /><br />
             <label>Couleur zone 2 :</label>
    			<input  type="text" name="fColorZ2" /><br />
             <label>Couleur zone 3 :</label>
    			<input  type="text" name="fColorZ3" /> <br />
             <label>Opacité :</label>
    			<input type="text" name="fOpacity" /><br>
    
<input id="b1" type="submit" value="envoyer" />
<input id="b2" type="reset" value="annuler" />				
                  


</fieldset>
</form>


				
				


</body>
</html>
