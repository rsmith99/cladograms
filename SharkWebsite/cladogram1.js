function draw_chart() {

	var c = document.getElementById("cladoshark");
	c.width = window.innerWidth;
	c.height = window.innerHeight;
	var ctx = c.getContext("2d");

	var node_ids = ['elasmo','hexan','heter','oreet','squal','lamni','charc','squan',
					'echni','prist']
	var node_coords = [[480,90],[360,170],[720,170],[100,300],[800,300],[200,400],
						[400,400],[850,380],[900,460],[1100,460]]

	for(i=0;i<node_ids.length;i++) {
		d = document.getElementById(node_ids[i])
		d.style.position = 'absolute';
		d.style.left = node_coords[i][0]+'px';
		d.style.top = node_coords[i][1]+'px';
	};


  	coords = [[600,100], [780,100], [780,130], [780,100], [900,100], [900,250], [860,250],
  				[860,300], [860,250], [960,250], [960,400], [910,400], [910,430], [910,400],
  				[1065,400], [1065,500], [980,500], [980,550], [980,500], [1180,500], [1180,550],
  				[600,100], [420,100], [420,130], [420,100], [300,100], [300,250], [200,250],
  				[200,300], [200,250], [360,250], [360,400], [270,400], [270,450], [270,400],
  				[480,400], [480,450]]

  	ctx.moveTo(600, 60);
  	ctx.strokeStyle='white';
  	ctx.lineWidth=5;
  	for(i=0; i<coords.length; i++){
  		if(i==21){
  			ctx.moveTo(coords[i][0],coords[i][1]);
  		};

  		x = coords[i][0];
  		y = coords[i][1];
  		ctx.lineTo(x, y);
  	};
	ctx.stroke();

	document.getElementById("charc").onmouseover = function() {mouseOver()};

	function mouseOver() {
    	document.getElementById("info-title").innerHTML = Carcharniniformes_title;
    	document.getElementById("info-description").innerHTML = Carcharniniformes_Description;
    	document.getElementById('info-image').src = 'http://imgc.allpostersimages.com/images/P-473-488-90/69/6997/L77W100Z/posters/fishes-carcharhiniformes-school-of-sharks-galeorhinus-galeus-illustration.jpg'

	}



};