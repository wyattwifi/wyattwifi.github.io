"use strict";


let sprites = []




class Sprite{
	constructor(x, y, width, height, name){
		
		this.x = x
		this.y = y
		this.width = width
		this.height = height
		this.name = name
		this.img = new Image()
		this.img.src = "imgs/" + name
		
		
		sprites.push( this)
		
	}
	draw(){
		drawing.drawImage(this.img, this.x - camera.x, this.y - camera.y, this.width, this.height)
	}
	update(){
		
	}
	moveX(amount) {
		var xb = ~~(this.x / 32);
		var yb = ~~(this.y / 32);
		var xm = this.x % 32;
		var ym = this.y % 32;
		
		
		const isColBlocking = ( xInBlocksOffsetFromPlayer) => { // or, in other words, xb + param is the col to check. This checks if that column is solid or if it is okay for the player to move into it
			return blockData[getBlock( xb + xInBlocksOffsetFromPlayer, yb)].solid || (blockData[getBlock( xb + xInBlocksOffsetFromPlayer, yb + 1)].solid && ym + this.height > 32)
		}
		
		
		if (amount > 0) {
			if (amount > 31) amount = 31;
			
			
			if (xm + this.width + amount < 32) {
				this.x += amount;
				return;
			}
			if ( isColBlocking(1) ) {
				this.x = xb * 32 + 32 - this.width;
				return;
			}
			if (xm + amount + this.width < 32 * 2) {
				this.x += amount;
				return;
			}
			if ( isColBlocking(2)) {
				this.x = xb * 32 + 32 * 2 - this.width;
				return;
			}
			this.x += amount;
			return;
		}
		if (amount < 0) {

			if (amount < -31) amount = -31;
			if (xm + amount > 0) {
				this.x += amount;
				return;
			}
			if ( isColBlocking( -1)) {
				this.x = xb * 32;
				return;
			}

			this.x += amount;
			return;

		}
		return;
	}
	onGround() {
		var xb = ~~(this.x / 32);
		var yb = ~~(this.y / 32);
		var xm = this.x % 32;
		var ym = this.y % 32;
		if (ym + this.height != 32) return false;
		return blockData[getBlock( xb, yb + 1)].solid || (blockData[getBlock( xb + 1, yb + 1)].solid && xm + this.width > 32)
	}
	onLWall() {
		var xb = ~~(this.x / 32);
		var yb = ~~(this.y / 32);
		var xm = this.x % 32;
		var ym = this.y % 32;
		if (xm != 0) return false;
		return blockData[getBlock( xb - 1, yb)].solid || (blockData[getBlock( xb - 1, yb + 1)].solid && ym + this.height > 32)
	}
	onRWall() {
		var xb = ~~(this.x / 32);
		var yb = ~~(this.y / 32);
		var xm = this.x % 32;
		var ym = this.y % 32;
		if (xm + this.width != 32) return false;
		return blockData[getBlock( xb + 1, yb)].solid || (blockData[getBlock( xb + 1, yb + 1)].solid && ym + this.height > 32)
	}
	onCeiling() {
		var xb = ~~(this.x / 32);
		var yb = ~~(this.y / 32);
		var xm = this.x % 32;
		var ym = this.y % 32;
		if (ym != 0) return false;
		return blockData[getBlock( xb, yb - 1)].solid || (blockData[getBlock( xb + 1, yb - 1)].solid && xm + this.width > 32)
	}
	moveY(amount) {

		var xb = ~~(this.x / 32);
		var yb = ~~(this.y / 32);
		var xm = this.x % 32;
		var ym = this.y % 32;
		
		
		let isRowBlocking = ( yInBlocksOffsetFromPlayer) => { //see the col version for specs
			return blockData[getBlock( xb, yb + yInBlocksOffsetFromPlayer)].solid || (blockData[getBlock( xb + 1, yb + yInBlocksOffsetFromPlayer)].solid && xm + this.width > 32)
		}
		
		
		if (amount > 0) {
			if (amount > 31) amount = 31;
			if (ym + this.height + amount < 32) {
				this.y += amount;
				return;
			}
			if ( isRowBlocking( 1)) {
				this.y = yb * 32 + 32 - this.height;
				return;
			}
			if (ym + amount + this.height < 32 * 2) {
				this.y += amount;
				return;
			}
			if ( isRowBlocking(2) ) {
				this.y = yb * 32 + 32 * 2 - this.height;
				return;
			}
			this.y += amount;
			return;
		}
		if (amount < 0) {
			if (amount < -31) amount = -31;

			if (ym + amount > 0) {
				this.y += amount;
				return;
			}
			if ( isRowBlocking( -1)) {
				this.y = yb * 32;
				return;
			}

			this.y += amount;
			return;

		}
		return;
	}
	isCollidingWith( otherSprite){
		
		if ( this.x >= otherSprite.x + otherSprite.w) { // it is to the left of the other sprite
			return false
		}
		if ( this.y >= otherSprite.y + otherSprite.h) { // it is below the other sprite
			return false
		}
		if ( this.x + this.width <= otherSprite.x) { // it is to the right of the other sprite
			return false
		}
		if ( this.y + this.height <= otherSprite.y) { // it is above the other sprite
			return false
		}
		
		// it is not any of the above four, so it must be in it
		return true
		
	}
	setState(stateIn){}
	getState(){return {x:0,y:0}}
	
}



let mistBuffer = document.createElement("canvas")
mistBuffer.width = 640
mistBuffer.height = 480
let mistDrawing = mistBuffer.getContext("2d")
mistDrawing.fillStyle = "grey"



class Mist extends Sprite{
	constructor(x,y,width,height){
		super(x*32,y*32,width*32,height*32,"air.bmp")
		
		this.isMist = true
		
	}
	draw(){
		
		mistDrawing.fillRect( this.x - camera.x, this.y - camera.y, this.width, this.height)
		// this is the first step, the other stuff gets taken care of in the main update loop
	}
}
function drawMist(){
	// the part of drawing the grey on the buffer happens since mist is a sprite
	// this gets run each frame
	
	const MIST_RADIUS = 32*2.5
	
	
	const gradient = mistDrawing.createRadialGradient(
		p1.x - camera.x, p1.y - camera.y, 0,
		p1.x - camera.x, p1.y - camera.y, MIST_RADIUS
	);

	// center fully removes fog
	gradient.addColorStop(0, "rgba(0,0,0,1)");

	// edge removes nothing
	gradient.addColorStop(1, "rgba(0,0,0,0)");

	mistDrawing.save();

	// erase alpha from existing fog
	mistDrawing.globalCompositeOperation = "destination-out";

	mistDrawing.fillStyle = gradient;
	mistDrawing.beginPath();
	mistDrawing.arc(p1.x - camera.x, p1.y - camera.y, MIST_RADIUS, 0, Math.PI * 2);
	mistDrawing.fill();

	mistDrawing.restore();
	
	// copy the mistBuffer to the main buffer
	drawing.drawImage(mistBuffer, 0,0,640,480)
	
	// clear it all for the next frame
	mistDrawing.clearRect(0,0,640,480)
	
	
	// set it up for drawing all the mists
	mistDrawing.fillStyle = "grey"
}


//these locations are in blocks hardcoded from the map
new Mist(114+28*4,42+21*3,17,20)
new Mist(83+28*4,61+21*3,142-83,80-61)


new Mist(316,189,335-316,212-189)
new Mist(316,212,391-316,25)
// new Mist(0,0,100,100)



class NPCOld extends Sprite{
	constructor(x,y){
		super(x*32 + 1,y*32, 30, 30,"villager.bmp")
		
		
	}
	update(){
		
		if( this.distToPlayer() < 3 * 32){
			amIInAChat = true
		}
	}
	distToPlayer(){
		return Math.abs( this.x - p1.x) + Math.abs( this.y - p1.y)
	}
}
new NPCOld(144,155)
