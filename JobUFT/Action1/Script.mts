Browser("Produits électroniques,").Page("Produits électroniques,").WebEdit("_nkw").Set "star wars" @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Produits électroniques,").Page("Produits électroniques,").WebButton("Rechercher").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Produits électroniques,").Page("star wars en vente | eBay").Link("5Pcs Star Wars Clone Pilot").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Produits électroniques,").Page("5Pcs Star Wars Clone Pilot").WebElement("prcIsum").Check CheckPoint("prcIsum") @@ script infofile_;_ZIP::ssf4.xml_;_
