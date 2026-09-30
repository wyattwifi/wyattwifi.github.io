"use strict"
//TODO  lava entry is buggy, 1st boss sign broken, revisiting farmer after get yoyo causes error, make freeing coder change his spiel, lava loop already unlocked

var theCanvas = document.getElementById("canvasid");
var drawing = theCanvas.getContext("2d");


var key = [];
window.addEventListener("keydown", function(e) {
	key[e.code] = true;
	if (e.keyCode == 86) theCanvas.requestFullscreen();
	
	
});
window.addEventListener("keyup", function(e) {
	key[e.code] = false;
});


let chunkWidth = 20 + 8
let chunkHeight = 15 + 6
let loadedSection = {
	x:100, // in rooms
	y:100,
	width:3, // in chunks
	height:3,
	data:[[],[],[]],// hardcoded width of 3
	update:function(){
		
		// shift over the section of loaded chunks, if needed
		let targetX = Math.floor(p1.x / 32 / chunkWidth) - 1
		let targetY = Math.floor(p1.y / 32 / chunkHeight) - 1
		
		if( targetX == this.x && targetY == this.y){ return}
		
		this.x = targetX
		this.y = targetY
		
		for( let i = 0; i < this.width; i++){
			for( let j = 0; j < this.height; j++){
				this.loadChunk( this.x + i, this.y + j, i, j)
			}
		}
		
		
	},
	loadChunk:function( srcX, srcY, destX, destY){
		// source x and y are in rooms relative to the wordl
		// dest coords are in rooms relative to the loaded section
		
		if( world[srcX] == undefined || world[srcX][srcY] == undefined ) { // if it is out of the world fill it with dirt
			this.data[destX][destY] = new Array(chunkWidth).fill(new Array(chunkHeight).fill(1))
		} else {
			// if it is in the world fill it with the raw data
			this.data[destX][destY] = JSON.parse(JSON.stringify(world[srcX][srcY]))
		}
		
		// now the raw data has been loaded, so go through and process it
		for( let k = 0; k < chunkWidth; k++){
			for( let l = 0; l < chunkHeight; l++){
				if( blockData[this.data[destX][destY][k][l]].replaceWith){ // this returns -1 for default
					let original = this.data[destX][destY][k][l]
					this.data[destX][destY][k][l] = blockData[this.data[destX][destY][k][l]].replaceWith( srcX * chunkWidth + k, srcY * chunkHeight + l)
					if( this.data[destX][destY][k][l] == -1){
						this.data[destX][destY][k][l] = original
					}
				}
			}
		}
		
		
	},
	reloadChunk: function( xInRoomsRelToWorld, yInRoomsRelToWorld){
		
		let destX = xInRoomsRelToWorld - this.x
		if( destX < 0 || destX >= this.width ){ return} // if it is not loaded anyway, do nothing
		let destY = yInRoomsRelToWorld - this.y
		if (destY < 0 || destY >= this.height) { return } // if it is not loaded anyway, do nothing
		
		this.loadChunk( xInRoomsRelToWorld, yInRoomsRelToWorld, destX, destY)
		
		
	},
	getBlock:function(x,y){
		
		let chunkX = Math.floor(x / chunkWidth)
		let moduloX = x - chunkX * chunkWidth
		
		
		let chunkY = Math.floor(y / chunkHeight)
		let moduloY = y - chunkY * chunkHeight
		
		const UNLOADED_CHUNK_DEFAULT_RETURN = 1
		
		if( chunkX < this.x){ return UNLOADED_CHUNK_DEFAULT_RETURN}
		if( chunkX >= this.x + this.width){ return UNLOADED_CHUNK_DEFAULT_RETURN}
		if( chunkY < this.y){ return UNLOADED_CHUNK_DEFAULT_RETURN}
		if( chunkY >= this.y + this.height){ return UNLOADED_CHUNK_DEFAULT_RETURN}
		
		return this.data[chunkX - this.x][chunkY - this.y][moduloX][moduloY]
		
		
	}
}

function getBlock( x, y){ // in blocks, returns index
	return loadedSection.getBlock(x,y)
}


const imgPath = "./imgs/"
var img = [];






//TODO keep track of progress tward different endings, each path like a segment

let camera = {
	x:0,
	y:0,
	width:640,
	height:480,
	update:function(){
		
		let target = {
			x:p1.x - (this.width - p1.width)/2,
			y:p1.y - (this.height - p1.height)/2,
		}
		
		let speed = .1
		
		this.x += speed * (target.x - this.x)
		this.y += speed * (target.y - this.y)
		
		// currently, the block-drawing code uses modulo which fails for negative numbers
		this.x = Math.max( this.x, 0)
		this.y = Math.max( this.y, 0)
		
	}
}




function getRoomState( x, y){
	return roomStates[x][y]
}


let roomStates = []
for( let i = 0; i < 12+8; i++){
	roomStates[i] = []
	for( let j = 0; j < 8+6; j++){
		roomStates[i][j] = {bossBeat:false,locked:true,pointUsed:false,chestUsed:false,roomVisited:false}
	}
}


// initialize some stuff, the boss rooms start out open
roomStates[2+4][5+3].locked = false
roomStates[6+4][4+3].locked = false
roomStates[10+4][2+3].locked = false
roomStates[10+4][7+3].locked = false
roomStates[13][10].locked = false
roomStates[8][9].locked = false
roomStates[5][10].locked = false

//msg1="A yo-yo!";

//function(x,y){if(!key[32])return;p1.dashAmount+=10;};



function getStrictlyChestFunction( roomX, roomY){// actually gives back an object containing the function, not the function itself
	
	
	let data = [
		{x:6, y:5, effect:()=>{p1.points++;return "It is a hamburger!"}},
		{x:10, y:2, effect:()=>{greenhouseLocked = false; return "It is the off switch!"}}, // greenhouse loop
		{x:8, y:3, effect:()=>{
			roomStates[8+4][3+3].locked = false
			talkStrings[9][3] = ["Thank you for unlocking that well!","That is so nice","I can water the plants now!","Since you're such a good adventurer, I'll give you this yo-yo.","I've been looking for the rightful owners","Maybe you can find them"]
			return "It is a lever"}}, // well lock
		{x:9, y:1, effect:()=>{p1.canClimb = true; return "It is climbing gear!"}},
		{x:8, y:1, effect:()=>{roomStates[12][4].locked = false; return "It is a cold lever"}},// ice lock
		{x:2, y:0, effect:()=>{p1.hasMap= true; return "It is a map. Press Z to use it"}},
		{x:0, y:0, effect:()=>{roomStates[4][4].locked = false; return "It appears jammed shut./A Trapdoor!"}}, // lava entry
		{x:4-4, y:9-3, effect:()=>{roomStates[4][9].locked = false; return "It is a lever"}}, // lava corner fall
		{x:0, y:7, effect:()=>{p1.shards++;return "You found a shard of a key!"}}, // lava corner
		{x:2, y:5, effect:()=>{roomStates[2+4][5+3].locked = false; return "It is a lever"}}, // lava loop
		{x:6-4, y:9-3, effect:()=>{
			if(p1.shards == 3){
				roomStates[6][9].locked = false
				; return "It is a lever"
			}else{
			return "nop"	
		}}},// lava final entrance
		{x:8-4, y:8-3, effect:()=>{
			if(p1.castleKey){
				roomStates[8][8].locked = false
				; return "It is a lever"
			}else{
			return "nop"	
		}}},// castle lower
		{x:4, y:4, effect:()=>{p1.nJmpMax++; return "It is a device to let you triple jump!"}}, // csalte upper
		{x:3, y:1, effect:()=>{roomStates[3+4][1+3].locked = false; return "It is a lever"}}, // end 2 start
		{x:2, y:4, effect:()=>{p1.nJmpMax++; return "It's a device to let you double jump!"}}, // jungle boss
		{x:5, y:4, effect:()=>{p1.dashesLeftMax++; return "Press Down to dash, including in mid-air!"}},// first boss
		{x:13-4, y:10-3, effect:()=>{
			// delete the mist
			sprites = sprites.filter(s=>!s.isMist)
			
			
			return "It's a switch to turn off the mist machines!"
		}},// mist boss
		{x:7-4, y:7-3, effect:()=>{roomStates[7][7].locked = false; return "It is a lever"}},// mine loop
		{x:5-4, y:7-3, effect:()=>{roomStates[5][7].locked = false; return "It is a lever"}},// trapped tech loop
		{x:8-4, y:3-3, effect:()=>{
			p1.homer.had = true
			p1.homer.x = p1.x
			p1.homer.y = p1.y
			return "It is a teleporter! Press C to set and X to use"}},// platueau get homer
		{x:8-4, y:2-3, effect:()=>{p1.castleKey = true;return "You got a rusted key"}},// platueau end
		{x:8-4, y:9-3, effect:()=>{p1.shards++; return "You got a shard of a key!"}},// castle boss
	]
	
	
	for( let datem of data){
		if( datem.x == roomX - 4 && datem.y == roomY - 3){
			return datem
		}
	}
	throw "err"
}

//talkStrings[5][2] = ["Wow, dash!", "Can I have the dash?[down for yes]", "Bye!"]; "Climbing gear!" "A map! (Press Z )"
// 0 6 "A Trapdoor!" if (!p1.nJmpMax > 0) {msg1 = "It appears jammed shut.";}
// entry to lava from below jungle needs to account for having heat resistant, otherwise have jammed

/*
 * "You found the ice cream"
 * "Press down to dash, again!"
 * "A hidden book lever!"
 * 
 * msg1 = "You remember \"knowledge is power\""
		p1.dx *= .6;
		p1.dy *= .6;
 * 
 */





// the room is the map of the spot the player is currently at.  Around the outside edge is a solid wall, right inside that is a wall that has spaces in it, with spaces being where there are spaces on all squares right inside it.  These two rows are so that the player can be halfway on a square, and also not go too far off


const blockData = [
	{name:"air.bmp", solid:false, effect: function( x, y, player){}},
	{name:"dirt.bmp", solid:true, effect: function( x, y, player){}},
	{name:"lava.bmp", solid:false, effect: function( x, y, player){ p1.hp--}},
	{name:"sign.bmp", solid:false, effect: function( x, y, player){
		
		let xr = Math.floor( x / chunkWidth)
		let yr = Math.floor( y / chunkHeight)
		
		signMsg = signMsgBank[xr-4][yr-3]
		
	}}, 
	{name:"burger.bmp", solid:false, effect: function( x, y, player){
		let xr = Math.floor( x / chunkWidth)
		let yr = Math.floor( y / chunkHeight)
		
		
		p1.points++;
		roomStates[xr][yr].pointUsed = true;
		loadedSection.reloadChunk( xr, yr);
		
		
	}, replaceWith: function( x, y){
		if( getRoomState( ~~(x / chunkWidth), ~~( y / chunkHeight)).pointUsed){
			return 0 // air
		} else {
			return -1 // gets interpreted as do nothing
		}
	}},
	{name:"grass.bmp", solid:false, effect: function( x, y, player){}},
	{name:"dirt2.bmp", solid:true, effect: function( x, y, player){}}, 
	{name:"bush.bmp", solid:false, effect: function( x, y, player){ p1.hp--}}, 
	{name:"roofL.bmp", solid:true, effect: function( x, y, player){}},
	{name:"roofR.bmp", solid:true, effect: function( x, y, player){}}, 
	{name:"flower.bmp", solid:false, effect: function( x, y, player){}},
	{name:"stone.bmp", solid:true, effect: function( x, y, player){}},
	{name:"hedge.bmp", solid:true, effect: function( x, y, player){}}, 
	{name:"door.bmp", solid:false, effect: function( x, y, player){}},
	{name:"save.bmp", solid:false, effect: function( x, y, player){
		
		p1.saveX = x * 32;
		p1.saveY = y * 32;
		p1.hp = p1.hpMax;
	}},
	{name:"chest.bmp", solid:false, effect: function( x, y, player){
		
		if (!key["Space"]){ return}
		
		let xr = Math.floor( x / chunkWidth)
		let yr = Math.floor( y / chunkHeight)
		
		let message = getStrictlyChestFunction( xr, yr).effect()
		// console.log(message)
		
		chestMsg = message
		chestMsgTime = 60 * 3
		
		if( message != "nop"){
			roomStates[xr][yr].chestUsed = true;
		}
		
		loadedSection.reloadChunk( xr, yr);
		
	}, replaceWith: function( x, y){
		if( getRoomState( ~~(x / chunkWidth), ~~( y / chunkHeight)).chestUsed){
			return 0 // air
		} else {
			return -1 // gets interpreted as do nothing
		}
	}},
	{name:"badcomputer2.bmp", solid:true, effect: function( x, y, player){}},
	{name:"meltedMetal.bmp", solid:false, effect: function( x, y, player){ p1.hp--}}, 
	{name:"planks.bmp", solid:false, effect: function( x, y, player){}},
	{name:"villager.bmp", solid:false, effect: function( x, y, player){
		amIInAChat = true
		
	}},
	{name:"iceStone.bmp", solid:true, effect: function( x, y, player){}}, 
	{name:"iceSpike.bmp", solid:false, effect: function( x, y, player){ p1.hp--}},
	{name:"pane.bmp", solid:false, effect: function( x, y, player){}},
	{name:"web.png", solid:false, effect: function( x, y, player){p1.hp--}},//used to be metal
	{name:"plastic.bmp", solid:true, effect: function( x, y, player){}},
	{name:"brick.bmp", solid:true, effect: function( x, y, player){}},
	{name:"vine.bmp", solid:false, effect: function( x, y, player){}},
	{name:"air.bmp", solid:false, effect: function( x, y, player){//mist image currently
		// greenhouse door unlock
		
		let xr = Math.floor( x / chunkWidth)
		let yr = Math.floor( y / chunkHeight)
		
		roomStates[xr][yr].locked = false;
		loadedSection.reloadChunk( xr, yr);
	}},
	{name:"stone-spike.bmp", solid:false, effect: function( x, y, player){}},
	{name:"bars.bmp", solid:true, effect: function( x, y, player){}, replaceWith: function( x, y){
		if( !getRoomState( ~~(x / chunkWidth), ~~( y / chunkHeight)).locked){
			return 0 // air
		} else {
			return -1 // gets interpreted as do nothing
		}
	}},
	{name:"white.bmp", solid:true, effect: function( x, y, player){}},
	{name:"books.bmp", solid:false, effect: function( x, y, player){ // used to be edge, now is hidden book lever
		
		let xr = Math.floor( x / chunkWidth)
		let yr = Math.floor( y / chunkHeight)
		
		
		roomStates[xr][yr].locked = false;
		loadedSection.reloadChunk( xr, yr);
	}}, 
	{name:"offcomputer.bmp", solid:true, effect: function( x, y, player){}}, 
	{name:"goodcomputer.bmp", solid:true, effect: function( x, y, player){}}, 
	{name:"books.bmp", solid:false, effect: function( x, y, player){}}, 
	{name:"air.bmp", solid:false, effect: function( x, y, player){//cactus image in map maker
		// greenhouse door lock
		
		let xr = Math.floor( x / chunkWidth)
		let yr = Math.floor( y / chunkHeight)
		
		if(!greenhouseLocked){return}
		
		roomStates[xr][yr].locked = true;
		loadedSection.reloadChunk( xr, yr);
	}},
	{name:"lava.bmp", solid:true, effect: function( x, y, player){}},//solid lava, used to be sand
	{name:"water.bmp", solid:false, effect: function( x, y, player){
		p1.inWater = true
	}}, 
	{name:"water-spike.bmp", solid:false, effect: function( x, y, player){
		p1.inWater = true
		p1.hp--
	},}, 
	{name:"jump-booster.bmp", solid:false, effect: function( x, y, player){
		if( boostDelay > 0){return}
		p1.nJmp = p1.nJmpMax
		boostDelay = 15
	},},
	{name:"stone.bmp", solid:false, effect: function( x, y, player){}},// looks like stone but can go through it, hidden stuff
	{name:"air.bmp", solid:false, effect: function( x, y, player){
		// this starts the boss
		
		let xr = Math.floor( x / chunkWidth)
		let yr = Math.floor( y / chunkHeight)
		
		startQuiz( xr, yr) // this happens whenever the player is in it, but the logic in this fn takes care of not restarting the quiz
	}}, 
]

let boostDelay = 0// this keeps the same jump boost from activating twice.TODO this souhld be improved so it is boost specific

let greenhouseLocked = true

var img = [];
for (var i = 0; i < blockData.length; i++) {
	img[i] = new Image();
	img[i].src = imgPath + blockData[i].name;
}



loadedSection.update()


var signMsgBank = [
	[, "Hydrophonic garden", "More hydrophinics.  How else do spikes grow mid-air", , , "Yikes! Melted metal!"], //0
	[, "Welcome to ruins", , "Mist!"],
	[, , , , , , "Are you sure this is the way?"],
	["Welcome to the plate platues", "Use the arrow keys to move!"], //3
	["", "Caution! Hard-to-see grass spikes!", , , , , "Welcome to Castle Ruins"],
	[, , "Save at save spots like these", "Lots of mist ahead"], //5
	[0, 0, "Press space to talk to people", 0, 0, "Open chests w/ space!","Welcome to a crossroads"], //6
	[, , "Sinkhole!", "Beware, evil computer ahead", ,, "A Library (look for a hidden book lever)"], //7
	[, , "Beware of the Icy Mountains ahead"], //8
	[,,"Welcome to The Greenhouse"],
	[], //10
	[, "Magic!"],
];
// var talk = -1; //-1 for no conversation going on
var talkTime = 0;
var talkStrings = [
	[["Hi there", "I'm way out here in the middle of nowhere","because I'm angry at my brother","He stole our yo-yo","Also, if you're looking for treasure..","try in my basement","I haven't gone in there since I bought the house","so who knows whats there","Help yourself"]],
	[,,,,["Hi there.","I've been trapped by an evil supercomputer","Could you please free me?","I thought it would be fun and silly to try making a program to take over the world","I didn't consider that it might work... Oops","Anyway, could you please help me escape?","There's a lever to unlock the gate on the other side of this area, just out of my reach"]],
	[],
	[],
	[],
	[, ,
		["Welcome to A Village", "Hi, I'm lost", "Good luck.  By the way, I lost some burgers.", "You can have them if you can get them."]
	], //5
	[ //6
		,
		["I have a heat resistant suit", "Can I have it, please", "Okay", "It lets you touch on really hot rock,", "but it eedseven hotter things around", "It has its limits"],
		["Watch out for the grass spikes.", "They are decicious, but, raw, are not good.", "Keep any treasure you find,", "that is the gov.'s incentive to explore.", "By the way, if you want an adventure,", "try the sinkhole ahead", "No one who has entered recently has come back.", "Either it is full of danger,", "or it is full of treasure", "and they don't want to leave.", "Maybe both"]
	], //6
	[, , , , , , ["Welcome to New A Village.", "As you can see,", "we have a mist problem.", "As you can't see,", "we found treasure and are rich."]], //7
	[],//8
	[, , , ["Welcome to my greenhouse","As a door prize for being a good guest,","I'll give you this super dash powerup","Also, it would be really nice if","that well weren't barred off","Then I could get water","The exit is right over there","It automatically locks behind you","which is a real problem","If you could find the switch to turn","off that function that'd be reallly nice","After turning it off you would still need to come around and open it from this side though too..."]], //9
	[, ["Hi there", "I'm way out here in the middle of nowhere","because I'm angry at my brother","He stole our yo-yo"]] //10
];
//["Hi there", "I'm way out here in the middle of nowhere","because I'm looking for my lost yo-yo","Could you help me find it?","It might be in my basement","I haven't gone in there since I bought the house","so who knows whats there"]
var test = true;
// var talkLastFrame = -1;
var prntMsg;
var signMsg;


let amIInAChat = false

let chestMsg = ""
let chestMsgTime = 0

let textBorderImage = new Image()
textBorderImage.src = "imgs/" + "textBorder.png"
function drawText(stringIn){
	
	let drawerHandle = drawing
	let currentDialog = JSON.parse(JSON.stringify(stringIn))
	
	const textBoxWidth = 500
	const textBoxHeight = 200
	
	drawerHandle.drawImage( textBorderImage, (640 - textBoxWidth) / 2, 50, textBoxWidth, textBoxHeight)
	
	drawerHandle.fillStyle = "black"
	drawerHandle.font = "20px serif"
	
	let shouldPrintContinue = false // if there is a % char as the last char, it will print the word "continue" at the bottom
	if( currentDialog.indexOf("%") > -1) {
		currentDialog = currentDialog.split("%")[0]
		shouldPrintContinue = true
	}
	
	// add line breaks
	const maxLength = 40 // in chars
	let lines = [""]
	let words = currentDialog.split(" ")
	for( let i = 0; i < words.length; i++){
		words[i] += " " // add back in the space char
		if( words[i].length + lines[lines.length - 1].length <= maxLength){
			lines[lines.length - 1] += words[i]
		} else {
			lines.push( words[i])
		}
	}
	
	for ( let i = 0; i < lines.length; i++){
		drawerHandle.fillText( lines[i], 100, 100 + 30 * i)
	}
	
	if( shouldPrintContinue){
		drawerHandle.fillText( "Press Z to continue", 100, 50 + textBoxHeight - 50)
	}
}


const timePerSaying = 150;


var timer = 0; // number of frames since the start of the game
function cycle() {

	
	
	boostDelay--
	
	timer++;
	
	signMsg = undefined
	amIInAChat = false
	//update
	
	
	
	for( let i = 0; i < sprites.length; i++){
		sprites[i].update()
	}
	
	loadedSection.update()
	
	camera.update()


	quizCycle();






	//draw
	
	
	let floor = Math.floor
	
	const BLOCK_SIZE = 32
	
	let ib = ~~(camera.x / BLOCK_SIZE)
	let ip = ~~(-(camera.x % BLOCK_SIZE))
	while( ip < 640){
		
		let jb = ~~(camera.y / BLOCK_SIZE)
		let jp = ~~(-(camera.y % BLOCK_SIZE))
		
		while( jp < 480){
			
			drawing.drawImage( img[0], ip, jp, BLOCK_SIZE, BLOCK_SIZE)
			drawing.drawImage( img[getBlock(ib,jb)], ip, jp, BLOCK_SIZE, BLOCK_SIZE)
			jb++
			jp += BLOCK_SIZE
		}
		
		ib++
		ip += BLOCK_SIZE
	}
	
	for( let i = 0; i < sprites.length; i++){
		sprites[i].draw()
	}
	
	drawMist()
	
	
	
	if (key["KeyZ"] && p1.hasMap) drawMap();


	// quiz drawing
	quizDraw()
	
	
	if( signMsg !== undefined){
		drawText(signMsg)
	}
	
	// talking update
	if (amIInAChat) {

		talkTime++;
		
		let scentenceNum = ~~(talkTime / timePerSaying)
		
		
		let xr = Math.floor( p1.x / chunkWidth / 32)
		let yr = Math.floor( p1.y / chunkHeight / 32)
		
		let scentence = talkStrings[xr-4][yr-3][scentenceNum]
		
		if (scentence == "so who knows whats there"){
			roomStates[xr][yr].locked = false
			loadedSection.reloadChunk( xr, yr)
		}
		if (scentence == "Okay"){
			p1.hasBoots = true
		}
		if (scentence == "I'll give you this super dash powerup"){
			p1.dashFramesMax=20
		}
		if (scentence == "Since you're such a good adventurer, I'll give you this yo-yo."){
			talkStrings[0][0] = ["You found the yo-yo!","It was just lost all along?!","I'll go tell my brother sorry","[He leaves, just imagine he walked away]","abc"]
			talkStrings[10][1] = ["You found the yo-yo!","It was just lost all along?!","I'll go tell my brother sorry","[He leaves, so just imagine he walked away]","def"]
		}
		if (scentence == "def"){
			talkStrings[0][0] = ["Thank you for getting the yo-yo and getting us to get along","Here is a shard of a key as a reward","abc1"]
			talkStrings[10][1] = ["[Pretend he's not here]"]
		}
		if (scentence == "abc"){
			talkStrings[10][1] = ["Thank you for getting the yo-yo and getting us to get along","Here is a key shard as a reward","abc2"]
			talkStrings[0][0] = ["[Pretend he's not here]"]
		}
		if (scentence == "abc1"){
			talkStrings[0][0] = ["Thank you for getting the yo-yo and getting us to get along","We appreciate it"]
			p1.shards++
		}
		if (scentence == "abc2"){
			talkStrings[10][1] = ["Thank you for getting the yo-yo and getting us to get along","We appreciate it"]
			p1.shards++
		}
		
		if (scentence){
			
			drawText(scentence)
			
		}
		
		
	} else {
		talkTime = 0;
	}
	
	if( chestMsgTime > 0){
		chestMsgTime--
		drawText(chestMsg)
	}
	
	if( npcText != ""){
		drawText(npcText)
	}
	npcText = ""
	



	drawing.font = '30px sans-serif';
	drawing.fillStyle = 'black';

	
	


	//repeat
	window.requestAnimationFrame(cycle);
}

function drawMap() { // this draws the hand-held map, when the player is looking at it
/*
	const size = 50;
	const xOff = (640 - 12 * size) / 2;
	const yOff = (480 - 8 * size) / 2;
	for (var i = 0; i < 12; i++) {
		for (var j = 0; j < 8; j++) {

			if (getRoomState(i,j).roomVisited)
				drawing.fillStyle = "green";
			else
				drawing.fillStyle = "grey";
			if (i == xr && j == yr) drawing.fillStyle = "yellow";
			drawing.fillRect(i * size + xOff, j * size + yOff, size, size);
		}
	}*/
}


function start() {

	
	window.requestAnimationFrame(cycle);
}
