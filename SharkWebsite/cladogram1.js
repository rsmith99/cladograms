function draw_chart() {

	var c = document.getElementById("cladoshark");
	c.width = window.innerWidth;
	c.height = window.innerHeight;
	var ctx = c.getContext("2d");

	var node_ids = ['elasmo','hexan','heter','oreet','squal','lamni','charc','squan',
					'echni','prist']
	var node_coords = [[480,110],[360,200],[720,200],[100,300],[800,300],[200,400],
						[400,400],[850,400],[900,500],[1100,500]]

	for(i=0;i<node_ids.length;i++) {
		d = document.getElementById(node_ids[i])
		d.style.position = 'absolute';
		d.style.left = node_coords[i][0]+'px';
		d.style.top = node_coords[i][1]+'px';
	};


  	coords = [[600,100], [780,100], [780,130], [780,100], [900,100], [900,200], [860,200],
  				[860,230], [860,200], [960,200], [960,300], [910,300], [910,330], [910,300],
  				[1065,300], [1065,400], [980,400], [980,430], [980,400], [1180,400], [1180,430],
  				[600,100], [420,100], [420,130], [420,100], [300,100], [300,200], [200,200],
  				[200,230], [200,200], [360,200], [360,300], [270,300], [270,330], [270,300],
  				[480,300], [480,330]]

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

};