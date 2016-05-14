function draw_chart() {

	var c = document.getElementById("cladoshark");
	c.width = window.innerWidth;
	c.height = window.innerHeight;
	var ctx = c.getContext("2d");

  	ctx.fillStyle="#00090A";
  	ctx.font="30px sans-serif";
  	ctx.fillText("Elasmobranchii (Chondrichthyes)", 400, 50);

  	ctx.fillStyle="#00090A";
  	ctx.font="20px sans-serif";
  	ctx.fillText("Hexanchiformes", 350, 150);

  	ctx.fillStyle="#00090A";
  	ctx.font="20px sans-serif";
  	ctx.fillText("Heterodontiformes", 700, 150);

  	ctx.fillStyle="#00090A";
  	ctx.font="20px sans-serif";
  	ctx.fillText("Oreetolobiformes", 100, 250);

  	ctx.fillStyle="#00090A";
  	ctx.font="20px sans-serif";
  	ctx.fillText("Squaliformes", 800, 250);

  	ctx.fillStyle="#00090A";
  	ctx.font="20px sans-serif";
  	ctx.fillText("Lammiformes", 200, 350);

  	ctx.fillStyle="#00090A";
  	ctx.font="20px sans-serif";
  	ctx.fillText("Carcharniniformes", 400, 350);

  	ctx.fillStyle="#00090A";
  	ctx.font="20px sans-serif";
  	ctx.fillText("Squantiformes", 850, 350);

  	ctx.fillStyle="#00090A";
  	ctx.font="20px sans-serif";
  	ctx.fillText("Echinorhiniformes", 900, 450);

  	ctx.fillStyle="#00090A";
  	ctx.font="20px sans-serif";
  	ctx.fillText("Pristiophoriformes", 1100, 450);

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