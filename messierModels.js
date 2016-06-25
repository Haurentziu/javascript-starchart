//Symbols of messier objects
function drawGlobularCluster(x, y, size){
	ctx.lineWidth=1;
	ctx.beginPath();
	ctx.arc(x, y, size, 0, 2*Math.PI);
	ctx.stroke();
	
	ctx.beginPath();	
	ctx.moveTo(x-size, y);
	ctx.lineTo(x+size, y);
	ctx.stroke();
	
	ctx.beginPath();	
	ctx.moveTo(x, y-size);
	ctx.lineTo(x, y+size);
	ctx.closePath();
	ctx.stroke();		
}

function drawGalaxy(x, y, height, width){
	ctx.lineWidth=0.5;
	ctx.save(); 
    ctx.translate(x-width, y-height);
    ctx.scale(height, width);
	ctx.beginPath();
    ctx.arc(1, 1, 1, 0, 2 * Math.PI, false);
	ctx.stroke();
	ctx.closePath();
    ctx.restore(); 
       
}

function drawNebula(x, y, height, width){
	ctx.closePath();
	ctx.lineWidth=1.2;
	ctx.strokeRect(x, y, height, width);
}

function drawPlanetaryNebula(x, y, size){
	ctx.lineWidth=1;
	ctx.beginPath();
	ctx.arc(x, y, size, 0, 2*Math.PI);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.lineWidth=1.5;
	ctx.moveTo(x+size, y);
	ctx.lineTo(x+size+3, y);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(x-size, y);
	ctx.lineTo(x-size-3, y);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(x, y+size);
	ctx.lineTo(x, y+size+3);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(x, y-size);
	ctx.lineTo(x, y-size-3);
	ctx.closePath();
	ctx.stroke();
}

function drawOpenCluster(x, y, size){
	ctx.lineWidth=2;
	ctx.setLineDash([2, 2]);
	ctx.beginPath();
	ctx.arc(x, y, size, 0, 2*Math.PI);
	ctx.closePath();
	ctx.stroke();
	ctx.setLineDash([5, 0]);
}