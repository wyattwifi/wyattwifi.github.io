"use strict";



/*
saySpiel(["Hi there", "I'm way out here in the middle of nowhere","because I'm angry at my brother","He stole our yo-yo"],()=>{},()=>{
	
})


function saySpiel( spielText, onSucess, onFailure){
	
}

let state = {
	interrupted:false,
	metPlayer:false,
}*/
let npcText = ""
function say(text){
	npcText = text
}

class NPC extends Sprite{
	constructor(x,y){
		super(x*32 + 1,y*32, 30, 30,"villager.bmp")
		
		this.interrupted = false
		this.metPlayer = false
		
		
		this.inSpiel = false
		// this.spielTime = 0
		
		this.currentSpiel = undefined
		this.currentSectionOfSpiel = 0
		this.charsOfSection = 0
		
		this.hasPlayerLeftSinceLastChat = true
		
	}
	update(){
		
		if( this.distToPlayer() < 3 * 32 && !this.inSpiel && this.hasPlayerLeftSinceLastChat){ // if the player just showed up
			this.startSpiel()
			this.interrupted = false // clear it
			this.metPlayer = true // set it
			this.hasPlayerLeftSinceLastChat = false
		}
		
		if( this.distToPlayer() > 5 * 32 ){ 
			this.hasPlayerLeftSinceLastChat = true
		}
		if( this.distToPlayer() > 5 * 32 && this.inSpiel){ // if the player just left
			this.interrupted = true
			this.inSpiel = false
		}
		
		if( this.inSpiel){ // if it is the middle of a conversation
			this.charsOfSection++
			this.charsOfSection = Math.min(this.charsOfSection, this.currentSpiel[this.currentSectionOfSpiel].length) // don't go past the end
			say( this.currentSpiel[this.currentSectionOfSpiel].substring( 0, this.charsOfSection + 1) )
			
			if( this.charsOfSection == this.currentSpiel[this.currentSectionOfSpiel].length && key["KeyZ"]) {// potentially go on to the next section of the spiel
				this.charsOfSection = 0
				this.currentSectionOfSpiel++
				if( this.currentSectionOfSpiel == this.currentSpiel.length){ // the spiel is finished
					this.inSpiel = false
				}
				if(typeof this.currentSpiel[this.currentSectionOfSpiel] === 'function'){ // if it is a function do the function and go on to the next thing
					this.currentSpiel[this.currentSectionOfSpiel]()
					this.currentSectionOfSpiel++
					if( this.currentSectionOfSpiel == this.currentSpiel.length){ // the spiel is finished
						this.inSpiel = false
					}
				}
			}
		}
	}
	startSpiel(){
		
		this.inSpiel = true
		this.currentSectionOfSpiel = 0
		this.charsOfSection = 0
		
		
		this.currentSpiel = ["Hi","Bye"]
		return
		
	}
	distToPlayer(){
		return Math.abs( this.x - p1.x) + Math.abs( this.y - p1.y)
	}
}



class EastBrother extends NPC {
	
	startSpiel(){
		
		let spiels = {
			intro: ["Hi there", "I'm way out here in the middle of nowhere","to be away from my brother","I'm angry at him because he stole our yo-yo."],
			gotYoYo:["Is that our yo-yo? It is!","You found the yo-yo!","You say it was just lost all along?!","I'll go tell my brother sorry","[He leaves, just imagine he walked away]"],
			interrupted:["Hey, you left while I was still talking.", "As I was saying, I'm way out here in the middle of nowhere","to be away from my brother","I'm angry at him because he stole our yo-yo."],
			again: ["Hi again", "As I said before, I'm way out here in the middle of nowhere","to be away from my brother","I'm angry at him because he stole our yo-yo.","Could you get him to give it back perhaps please?"],
		}
		
		this.inSpiel = true
		this.currentSectionOfSpiel = 0
		this.charsOfSection = 0
		
		if( p1.hasYoYo){
			this.currentSpiel = spiels.gotYoYo
			return
		}
		
		if( !this.metPlayer){
			this.currentSpiel = spiels.intro
			return
		}
		
		if( this.interrupted){
			this.currentSpiel = spiels.interrupted
			return
		}
		
		this.currentSpiel = spiels.again
		return
		
	}
}



class WestBrother extends NPC {
	
	startSpiel(){
		
		let spiels = {
			intro: ["Hi there", "I'm way out here in the middle of nowhere","to be away from my brother","I'm angry at him because he stole our yo-yo.","Also, if you're looking for treasure..","try in my basement","I haven't gone in there since I bought the house","so who knows whats there","Help yourself",()=>{
				roomStates[4][3].locked = false
				loadedSection.reloadChunk( 4, 3)
			}],
			gotYoYo:["Is that our yo-yo? It is!","You found the yo-yo!","You say it was just lost all along?!","I'll go tell my brother sorry","[He leaves, just imagine he walked away]"],
			interrupted:["Hey, you left while I was still talking.", "As I was saying, I'm way out here in the middle of nowhere","to be away from my brother","I'm angry at him because he stole our yo-yo.","Also, if you're looking for treasure..","try in my basement","I haven't gone in there since I bought the house","so who knows whats there","Help yourself",()=>{
				roomStates[4][3].locked = false
				loadedSection.reloadChunk( 4, 3)
			}],
			again: ["Hi again", "As I said before, I'm way out here in the middle of nowhere","to be away from my brother","I'm angry at him because he stole our yo-yo.","Could you get him to give it back perhaps please?","Also as before, if you're looking for treasure..","try in my basement","I haven't gone in there since I bought the house","so who knows whats there",()=>{
				roomStates[4][3].locked = false
				loadedSection.reloadChunk( 4, 3)
			},"Maybe there's pizza!"],
		}
		
		this.inSpiel = true
		this.currentSectionOfSpiel = 0
		this.charsOfSection = 0
		
		if( p1.hasYoYo){
			this.currentSpiel = spiels.gotYoYo
			return
		}
		
		if( !this.metPlayer){
			this.currentSpiel = spiels.intro
			return
		}
		
		if( this.interrupted){
			this.currentSpiel = spiels.interrupted
			return
		}
		
		this.currentSpiel = spiels.again
		return
		
	}
}



// new EastBrother(407,97)
// new WestBrother(136,76)