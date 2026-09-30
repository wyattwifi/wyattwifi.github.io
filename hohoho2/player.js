"use strict"



class Player extends Sprite{

	constructor(){
		super( 32 * 8 + 32*28*(3+4),32 * 4 + 32*21*(1+3),20,20, "p1") // main real thing
		// super( 32 * 406,32 * 93,20,20, "air.bmp")// edge dev
		// super( 32 * 278,32 * 174,20,20, "p1")// center dev
		// super( 32 * 221,32 * 166,20,20, "p1")// mine dev
		// super( 32 * 268,32 * 50, 20, 20, "p1") // greenhouse dev
		// super( 32 * 154,32 * 172, 20, 20, "p1") // lava dev
		
		this.dx = 0
		this.dy = 0
		this.jmpTime = 0
		this.jmpTimeMax = 10
		this.jmpAmount = 2
		this.hpMax = 1
		this.hp = 1
		this.saveX = this.x
		this.saveY = this.y
		
		this.nJmp = 0 //1jmp 2jmp3jmp ... Njmp except minus one
		this.nJmpMax = 0
		this.canClimb = false
		this.points = 0
		this.dashFramesMax = 10
		this.dashFramesLeft = 0
		this.dashesLeft = 0 // the number of times player can still dash before touching the ground
		this.dashesLeftMax = 0 // the number of times player can dash before touching the ground overall not nessinarily at this instant if some are already used
		this.dashAmountPerFrame = 10
		this.dashKeyHasBeenRaisedSinceLastPressed = true
		this.hasBoots = false //heat-resistant boots
		this.shards = 0
		this.hasMap = false
		this.inWater = false
		this.losses = 0
		
		// this is an item the player can have. When they press a key it gets set to that loc. When they press a different key the player teleports there
		this.homer = {
			had:false,
			x:0,
			y:0,
			setKey:"KeyC",
			useKey:"KeyX",
		}
		
		this.castleKey = false
		
		// this is sometimes used to actually keep track of the state, but it is more made with the GUI in mind
		// this.backpack = {
		// 	dash:false,
		// 	dashExpander:false,
		// 	nJump:0,
		// 	hamburger:0,
		// 	keyShard:0,
		// 	castleKey:false,
		// 	map:false,
		// 	boots:false,
		// 	homer:false,
		// }
		
		// dev stuff
		// this.nJmpMax=2;this.canClimb=true;this.dashesLeftMax=1;this.dashFramesMax=20;this.homer.had=true
		
	}
	
	lose() {
		if (inQuiz) endQuiz();
		
		this.x = this.saveX;
		this.y = this.saveY;
		this.hp = this.hpMax;
		this.dx = 0;
		this.dy = 0;
		this.losses++
		
	}
	leftKeyPressed() {
		return key["ArrowLeft"]
	}
	upKeyPressed() {
		return key["ArrowUp"]
	}
	rightKeyPressed() {
		return key["ArrowRight"]
	}
	dashKeyPressed() {
		return key["ArrowDown"]
	}

	update() {
		// if( timer % 2 == 0){return}

		var midDash = false;
		
		if( this.homer.had){
			if(key[this.homer.useKey]){
				this.x = this.homer.x
				this.y = this.homer.y
				this.dx = 0
				this.dy = 0
				//TODO account for dashes and njmps already being used or whatever
			}
			if(key[this.homer.setKey]){
				this.homer.x = this.x
				this.homer.y = this.y
			}
		}
		
		


		if (this.hp <= 0 ) this.lose();
		var xb = ~~(this.x / 32);
		var yb = ~~(this.y / 32);
		var xm = this.x % 32;
		var ym = this.y % 32;



		
		
		
		if( this.onGround()){
			this.dashesLeft = this.dashesLeftMax
		}
		
		if( !this.dashKeyPressed()){
			this.dashKeyHasBeenRaisedSinceLastPressed = true
		}
		
		if( this.dashesLeft > 0 && this.dashKeyPressed() && this.dashKeyHasBeenRaisedSinceLastPressed){
			// start a dash
			
			this.dashesLeft--
			this.dashKeyHasBeenRaisedSinceLastPressed = false
			
			this.dashFramesLeft = this.dashFramesMax
		}
		
		if( this.dashFramesLeft > 0){
			
			if( ! this.dashKeyPressed()){ this.dashFramesLeft = 0}
			
			this.dashFramesLeft--
			
			if (this.rightKeyPressed()) {
				this.moveX( this.dashAmountPerFrame)
			}
			if (this.leftKeyPressed()) {
				this.moveX(-this.dashAmountPerFrame)
			}
			this.dx = 0
			midDash = true
			
		} else {
			
			if (this.rightKeyPressed()) {
				this.dx++
			}
			if (this.leftKeyPressed()) {
				this.dx--
			}
			
			this.dx *= .87;
			this.moveX(this.dx)
		}


		



		if (this.onCeiling()) {
			this.dy = 0;
			this.moveY(1);
			this.jmpTime = 0;
		}
		if (this.onGround()) {
			this.dy = 0;
			this.nJmp = this.nJmpMax;
			if ( this.upKeyPressed() ) this.jmpTime = this.jmpTimeMax;
		} else {
			this.dy++; // gravity
		}
		if (this.jmpTime > 0 ) {
			this.jmpTime--;
			if( this.upKeyPressed()){
				this.dy -= this.jmpAmount
			}
		}
		
		
		if (this.dy > 0 && this.nJmp > 0 && this.upKeyPressed()) {
			this.nJmp--;
			this.dy = -1;
			this.jmpTime = this.jmpTimeMax;
		}

		if (this.canClimb && this.upKeyPressed() && (this.onLWall() || this.onRWall()) && this.dy > -3) {
			this.dy = -3;
		}

		if (this.inWater) {
			if (this.upKeyPressed()) {
				this.dy = -1
			} else {
				this.dy = 1
			}
			this.dx *= .9
		}


		if (midDash ) {
			this.dy = 0
		}


		this.moveY(this.dy);
		
		

		this.inWater = false // it will be reset by the block effect if it is still true

		blockData[ getBlock( xb, yb)].effect(xb, yb, this);
		if (xm + this.width > 32) blockData[ getBlock( xb + 1, yb)].effect(xb + 1, yb, this);
		if (ym + this.height > 32) blockData[ getBlock( xb, yb + 1)].effect(xb, yb + 1, this);
		if (xm + this.width > 32 && ym + this.height > 32) blockData[ getBlock( xb + 1, yb + 1)].effect(xb + 1, yb + 1, this);



	}
	draw() {
		
		
		drawing.fillStyle = "red"
		drawing.fillRect(this.x-camera.x, this.y-camera.y, this.width, this.height)
	}
	setState(stateIn){}
	getState(){
		const { x, y, dx, dy, jmpTime, jmpTimeMax, jmpAmount, hpMax, hp, saveX, saveY, nJmp, nJmpMax, canClimb, points, dashFramesLeft, dashFramesMax, dashesLeft, dashesLeftMax, dashAmountPerFrame, dashKeyHasBeenRaisedSinceLastPressed, hasBoots, hasMap, inWater, shards, castleKey } = this
		
		return { x, y, dx, dy, jmpTime, jmpTimeMax, jmpAmount, hpMax, hp, saveX, saveY, nJmp, nJmpMax, canClimb, points, dashFramesLeft, dashFramesMax, dashesLeft, dashesLeftMax, dashAmountPerFrame, dashKeyHasBeenRaisedSinceLastPressed, hasBoots, hasMap, inWater, shards, castleKey }
		
	}
}

let p1 = new Player()
Object.seal(p1)

