







var numOfQ = 4;//the number of questions needed to pass the current quiz
var qAnswered = 0;// the number of questions answered already
var inQuiz = false;
var qBank = ["What is the original watermellon color?","Yellow","Red","Orange","Blue","Original Koide formula deals with mass of...","Charged Leptons","Leptons","Quarks","Right-handed quarks","Not a charged lepton","Nutrino","electron","muon","taon","not a quark","left","up","down","top","cream of tartar production","wine","mining","ground seed","salt","Fermion","half integer spin","integer spin","complex spin","prime spin","quark flavor changing","weak nuclear","residual strog","electrmagnetism","gravity","10 electrons","d shell","s shell","f shell","p shell","2 electrons","s shell","d shell","f shell","p shell","6 electrons","p shell","s shell","f shell","d shell","14 electrons","f shell","s shell","d shell","p shell","Atomic number 1","hydrogen","carbon","helium","lithium","Atomic number 2","helium","carbon","hydrogen","lithium","atomic number 3","lithium","titanium","nitrogen","oxygen","Coal comes from","swamps","power plants","oil rigs","lightning","atomic number 4","berylium","pickle","carbon","nitrogen","atomic numer 5","boron","carbon","calcium","lithium","atomic number 6","carbon","nickle","nitrogen","gold","aprox. atomic weight of K","39","40","41","70",];//every 5th (starting with the first) is a question. It is followed by the correct answer, and then 3 wrong answers.




var answerKey //the key to press to get the right answer

var qAnswerString = "";//the string asking the current question
var qAString = "";
var qBString = "";
var qCString = "";
var qDString = "";
var qReadyForInput = true; // have they taken their finger off from answering the last question?

let currentQuizXR
let currentQuizYR


function startQuiz( xr, yr){
	
	if( inQuiz){ return} // don't do anything if already in a quiz. Those blocks keep firing whenever the player is in them
	
	if( getRoomState( xr, yr).bossBeat ){ return} // don't have them do the boss fight if they've already won it
	
	roomStates[xr][yr].locked = true;
	loadedSection.reloadChunk( xr, yr);
	
	currentQuizXR = xr
	currentQuizYR = yr
	
	qAnswered = 0;
	inQuiz = true;
	bossStartEnabled=false;
	newQ();
}





function newQ(){ // generates a new question and from it sets accordingly the variables qAString qBString qCString qDString qAnswerString answerKey
	let currentQ = ~~(Math.random()*qBank.length/5);
	qAnswerString = qBank[currentQ*5];
	
	
	
	qAString = ~~(Math.random()*4);
	qBString = ~~(Math.random()*4);
	qCString = ~~(Math.random()*4);
	qDString = ~~(Math.random()*4);
	
	while(qBString==qAString){qBString = ~~(Math.random()*4);}
	while(qCString==qAString||qCString==qBString){qCString = ~~(Math.random()*4);}
	while(qDString==qAString||qDString==qBString||qDString==qCString){qDString = ~~(Math.random()*4);}
	
	a=qAString;
	b=qBString;
	c=qCString;
	d=qDString;
	
	answerKey = 0;
	
	if(qAString==0)answerKey = "Digit1";
	if(qBString==0)answerKey = "Digit2";
	if(qCString==0)answerKey = "Digit3";
	if(qDString==0)answerKey = "Digit4";
	
	qAString = qBank[currentQ*5+qAString+1];
	qBString = qBank[currentQ*5+qBString+1];
	qCString = qBank[currentQ*5+qCString+1];
	qDString = qBank[currentQ*5+qDString+1];
	
	
	qReadyForInput = false;
	
	
}


// gets run every frame
function quizCycle(){
	if(!inQuiz)return;
	if(!(key["Digit1"]||key["Digit2"]||key["Digit3"]||key["Digit4"])){qReadyForInput = true;}
	
	if(qReadyForInput&&key[answerKey]){
		
		qAnswered++;
		if(qAnswered==numOfQ){
			//win
			endQuiz();
			numOfQ += 2;
		}
		newQ();
		
	}
	if(qReadyForInput&&(!key[answerKey])&&(key["Digit1"]||key["Digit2"]||key["Digit3"]||key["Digit4"])){
		qAnswered--;
		if(qAnswered<0) qAnswered = 0;
		newQ();
	}
}







function endQuiz(){
	
	roomStates[currentQuizXR][currentQuizYR].locked = false
	roomStates[currentQuizXR][currentQuizYR].bossBeat = true
	loadedSection.reloadChunk( currentQuizXR, currentQuizYR)
	
	
	// here is some hacky hardcoded stuff
	// mostly this is because boss chambers cross chunk boundaries, so if the boss is technically in one room the other side of the chamber needs unlocked too
	if(currentQuizXR == 2+4 && currentQuizYR == 3+3){ // jungle boss
		roomStates[2+4][4+3].locked = false
		loadedSection.reloadChunk(2+4,4+3)
	}
	
	
	
	qAnswered = 0;
	inQuiz = false;
	
}




// gets run every frame
function quizDraw(){ // this is called each frame
	
	if(inQuiz){
		drawing.fillStyle = 'green';
		drawing.fillRect(0,470,~~(640*qAnswered/numOfQ),10);
		drawing.font = '30px sans-serif';
		drawing.fillStyle = 'white';
		drawing.fillText(qAnswerString,30,50);
		drawing.fillText(qAString,30,90);
		drawing.fillText(qBString,30,140);
		drawing.fillText(qCString,30,180);
		drawing.fillText(qDString,30,220);
	}
	
}



