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

  	ctx.moveTo(600, 50);
	ctx.lineTo(600,100);
	ctx.stroke();

};