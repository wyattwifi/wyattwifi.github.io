(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,9,9,9,0,0,0,0,0,0,0,0,0,0,1],[1,9,9,0,0,0,8,0,0,0,10,0,0,0,1],[1,9,9,9,0,0,0,0,0,0,0,0,0,0,1],[1,9,9,0,0,0,0,0,0,0,1,0,0,0,1],[1,9,0,0,0,0,0,1,0,0,0,0,0,0,1],[1,9,9,9,0,0,0,0,0,0,0,0,0,0,1],[1,9,0,0,0,10,0,8,0,0,0,0,7,6,1],[1,9,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,9,9,0,0,0,0,0,0,0,1,0,0,0,1],[1,9,0,0,0,0,0,0,0,0,0,0,0,10,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,10,7,7,6,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,2],[1,0,0,0,0,0,0,0,0,10,1,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,2],[1,1,1,1,1,0,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,0,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,2],[1,0,0,0,0,0,0,0,0,3,1,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,9,9,0,0,0,0,0,0,0,0,0,0,0,2],[1,9,1,9,0,0,0,0,0,0,0,0,0,0,2],[1,9,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,2],[1,9,9,0,0,0,0,0,0,0,1,0,0,0,2],[1,9,0,0,0,0,0,0,0,0,1,0,0,0,2],[1,9,9,9,0,0,0,0,0,0,1,0,0,0,2],[1,9,0,0,0,0,0,0,0,0,1,0,0,0,2],[1,9,1,0,0,0,0,0,0,0,1,0,0,0,2],[1,9,1,1,1,0,0,0,0,0,1,1,1,1,2],[1,9,9,0,1,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,1,0,0,0,0,0,0,0,0,0,2],[1,9,0,1,1,0,0,0,0,0,0,0,0,0,2],[1,1,1,1,1,1,1,1,1,1,0,0,0,0,2],[1,10,10,10,10,10,10,10,10,10,10,10,1,0,2],[1,10,10,0,10,10,10,0,0,0,0,3,1,0,2],[1,10,0,0,0,10,10,10,0,0,0,0,1,0,2],[1,10,0,0,0,10,10,10,10,10,0,0,1,0,2],[1,9,0,0,0,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,10,10,10,10,10,10,1],[1,9,9,9,0,0,0,0,0,0,0,0,10,10,1],[1,9,0,0,0,0,0,0,0,0,0,0,0,10,1],[1,9,9,0,0,0,0,0,0,0,8,7,7,6,1],[1,9,9,9,9,9,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,0,0,0,0,1],[1,9,9,0,0,0,0,0,0,0,0,0,0,0,1],[1,9,9,9,9,0,0,0,0,0,0,0,0,0,1],[1,9,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,9,9,0,1,1,1,1,1,1,1,1,1,1,1],[1,9,0,0,1,1,1,1,1,1,1,1,1,1,1],[1,9,9,9,10,10,10,10,10,10,10,10,10,10,1],[1,1,1,1,1,1,1,1,1,1,10,10,10,10,1],[1,10,10,10,10,10,10,10,10,10,10,10,10,10,1],[1,0,0,0,0,10,10,10,10,10,10,10,10,10,1],[1,0,0,0,0,10,10,10,10,10,10,10,10,10,1],[1,0,0,0,0,10,10,10,10,10,10,10,10,10,1],[1,0,0,0,3,1,10,10,10,10,10,10,10,10,1],[1,0,0,0,0,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,1,1,1,1,1,1,1,1,1,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,1,1,1,1,1,1,1,0,2,2],[1,0,0,0,0,1,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,1,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,1,0,0,0,0,0,0,0,2,2],[1,0,0,0,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,1,1,1,1,1,1,1,1,1,2,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,1,0,0,0,0,1,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,1,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,3,1,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,1,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,1,0,0,0,1,0,0,0,0,0,2,2],[1,0,0,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,1,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,9,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,9,9,9,0,0,0,0,0,0,0,0,0,0,1],[1,9,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,9,9,0,0,0,0,0,0,0,0,0,0,0,1],[1,9,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,9,9,0,0,0,0,0,0,0,0,0,0,0,1],[1,9,9,9,1,0,0,0,0,0,8,7,7,6,1],[1,9,9,9,0,0,0,0,0,0,0,0,0,0,1],[1,9,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,9,9,0,0,1,1,1,1,1,1,1,1,1,1],[1,9,9,0,0,0,0,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,3,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],t=1e3/60,n=class{constructor(e,t,n,r,i){this.x=e,this.y=t,this.w=n,this.h=r,this.name=i,this.img=new Image}draw(){}update(){}moveX(t){var n=this.x%32,r=~~(this.x/32),i=this.y%32,a=~~(this.y/32);if(t>0){if(t>31&&(t=31),n+this.w+t<32){this.x+=t;return}if(G[e[r+1][a]]||G[e[r+1][a+1]]&&i+this.h>32){this.x=(r+1)*32-this.w;return}if(n+this.w+t<64){this.x+=t;return}if(G[e[r+2][a]]||G[e[r+2][a+1]]&&i+this.h>32){this.x=(r+2)*32-this.w;return}this.x+=t;return}if(t<0){if(t<-31&&(t=-31),n+t>0){this.x+=t;return}if(G[e[r-1][a]]||G[e[r-1][a+1]]&&i+this.h>32){this.x=r*32;return}this.x+=t;return}}moveY(t){var n=this.x%32,r=~~(this.x/32),i=this.y%32,a=~~(this.y/32);if(t>0){if(t>31&&(t=31),i+this.h+t<32){this.y+=t;return}if(G[e[r][a+1]]||G[e[r+1][a+1]]&&n+this.w>32){this.y=(a+1)*32-this.h;return}if(i+this.h+t<64){this.y+=t;return}if(G[e[r][a+2]]||G[e[r+1][a+2]]&&n+this.w>32){this.y=(a+2)*32-this.h;return}this.y+=t;return}if(t<0){if(t<-31&&(t=-31),i+t>0){this.y+=t;return}if(G[e[r][a-1]]||G[e[r+1][a-1]]&&n+this.w>32){this.y=a*32;return}this.y+=t;return}}onFloor(){var t=~~(this.x/32),n=~~(this.y/32),r=this.x%32;return this.y%32+this.h==32?G[e[t][n+1]]||G[e[t+1][n+1]]&&r+this.w>32:!1}onLWall(){var t=~~(this.x/32),n=~~(this.y/32),r=this.x%32,i=this.y%32;return r==0?G[e[t-1][n]]||G[e[t-1][n+1]]&&i+this.h>32:!1}onRWall(){var t=~~(this.x/32),n=~~(this.y/32),r=this.x%32,i=this.y%32;return r+this.w==32?G[e[t+1][n]]||G[e[t+1][n+1]]&&i+this.h>32:!1}onRoof(){var t=~~(this.x/32),n=~~(this.y/32),r=this.x%32;return this.y%32==0?G[e[t][n-1]]||G[e[t+1][n-1]]&&r+this.w>32:!1}isCollidingWith(e){return!(this.x>=e.x+e.w||this.y>=e.y+e.h||this.x+this.w<=e.x||this.y+this.h<=e.y)}},r=class extends n{constructor(){super(96,96,20,20,`player`),this.dx=0,this.dy=0,this.direction=`Right`,this.ddx=.44,this.jumpTimeMax=10,this.currentJumpTime=0,this.jumpPowerPerFrame=1.7,this.gravity=ye,this.drag=.85,this.bounce=.2,this.spawnXPx=this.x,this.spawnYPx=this.y,this.canDash=!0,this.dashTime=0,this.dashTimeMax=10,this.dashSpeed=15,this.wallJumpTimeMax=10,this.wallJumpTimeCurrent=0,this.wallJumpPowerPerFrameX=1.5,this.wallJumpPowerPerFrameY=1.4,this.wallJumpDdxSign=0,this.closeCall=5,this.hitbox={x:this.x+this.closeCall,w:this.w-this.closeCall*2,y:this.y+this.closeCall,h:this.h-this.closeCall*2,update:function(){this.x=U.x+U.closeCall,this.y=U.y+U.closeCall}},this.jumpKey=`KeyZ`,this.runLeftKey=`ArrowLeft`,this.runRightKey=`ArrowRight`,this.dashKey=`KeyX`,Object.preventExtensions(this)}update(e){(this.dashTime>0||this.hasUltraDash)&&W[this.dashKey]?(this.dashTime-=e/t*1,this.direction==`Right`&&this.moveX(this.dashSpeed*(e/t)),this.direction==`Left`&&this.moveX(-this.dashSpeed*(e/t)),this.currentJumpTime=0,this.dy=0):(this.dx*=this.drag,(this.onLWall()||this.onRWall())&&(this.dx*=-this.bounce),W[this.runLeftKey]&&!W[this.healKey]&&(this.dx-=this.ddx*(e/t),this.direction=`Left`),W[this.runRightKey]&&!W[this.healKey]&&(this.dx+=this.ddx*(e/t),this.direction=`Right`),this.wallJumpTimeCurrent>0&&W[this.jumpKey]&&(this.dx+=this.wallJumpDdxSign*this.wallJumpPowerPerFrameX*(e/t)),this.moveX(this.dx*(e/t)),this.onRoof()&&(this.dy*=-this.bounce),this.dy+=this.gravity,this.onFloor()&&(this.dy=0),this.onFloor()&&W[this.jumpKey]&&(this.currentJumpTime=this.jumpTimeMax),(this.onRWall()||this.onLWall())&&W[this.jumpKey]&&this.dy>0&&(this.wallJumpTimeCurrent=this.wallJumpTimeMax,this.dy=0,this.onRWall()&&(this.wallJumpDdxSign=-1),this.onLWall()&&(this.wallJumpDdxSign=1)),this.currentJumpTime>0&&(this.currentJumpTime--,W[this.jumpKey]&&(this.dy-=this.jumpPowerPerFrame)),this.wallJumpTimeCurrent>0&&(this.wallJumpTimeCurrent--,W[this.jumpKey]&&(this.dy-=this.wallJumpPowerPerFrameY)),this.moveY(this.dy)),this.onFloor()&&this.canDash&&(this.dashTime=this.dashTimeMax),W[this.lookUpKey]&&(this.direction=`Up`),W[this.lookDownKey]&&(this.direction=`Down`),this.hitbox.update()}draw(){}};function i(e,t,n){let r=e.createShader(e.VERTEX_SHADER);e.shaderSource(r,t),e.compileShader(r);let i=e.getShaderInfoLog(r);if(i.length>0)throw console.log(t),i;let a=e.createShader(e.FRAGMENT_SHADER);if(e.shaderSource(a,n),e.compileShader(a),i=e.getShaderInfoLog(a),i.length>0)throw console.log(n),i;let o=e.createProgram();if(e.attachShader(o,r),e.attachShader(o,a),e.linkProgram(o),!e.getProgramParameter(o,e.LINK_STATUS)){let t=e.getProgramInfoLog(o);throw console.error(`Shader program linking failed:`),console.error(t),e.deleteProgram(o),e.deleteShader(r),e.deleteShader(a),Error(t)}return o}function a(e,t,n){let r=e.createTexture();return e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,t,n,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),r}function o(e,t){let n=e.createTexture();return e.bindTexture(e.TEXTURE_2D,n),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),n}function s(e,t,n,r){let i=e.getAttribLocation(t,n);e.bindBuffer(e.ARRAY_BUFFER,r),e.vertexAttribPointer(i,2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(i),e.bindBuffer(e.ARRAY_BUFFER,null)}function c(e,t,n){n.activeTexture(n.TEXTURE0+e),n.bindTexture(n.TEXTURE_2D,t)}function l(e,t){let n=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}function u(){D.bindFramebuffer(D.FRAMEBUFFER,null)}var d,f,p=[],m=`
	attribute vec2 coordinatesC; // given in world coordinates
	varying vec2 vCoord; // given in world pixel coordinates
	
	uniform float viewX;
	
	void main( void ){
		
		
		// basically all we do is take the coordinate attribute and scale it to the coord varying. Also, we factor in the view position
		vec2 coordinates = coordinatesC;
		
		
		vec2 coord = coordinates;
		
		coord.y = 480.0 - coord.y;
		
		coord.x -= viewX;
		coord.x /= 640.0;
		coord.y /= 480.0;
		
		coord.x *= 2.0;
		coord.y *= 2.0;
		
		coord -= vec2( 1.0, 1.0 );
		
		
		
		gl_Position = vec4( coord, -0.01, 1.0);
		
		
		vCoord = coordinates;
		
	}
	`,h=`
	precision mediump float;

	varying vec2 vCoord; // given in world pixel coordinates
	
	uniform float lavaTime;
	
	float rand(vec2 p) {
		// from https://www.shadertoy.com/view/4djSRW by iq
		p = fract(p * vec2(127.1, 311.7));
		p += dot(p, p + 34.345);
		return fract(p.x * p.y);
	}
	
	
	
	
	float rand3(vec3 p) {
		
		p = mod( p, 1000.0); // to prevent errors from it getting too big
		
		p = fract(p * vec3(127.1, 311.7, 74.7));
		p += dot(p, p.yzx + 19.19);
		return fract((p.x + p.y) * p.z);
	}
	
	
	
	// returns value noise for the vec3.  There is a distance of 1 between corners, so take scaling into account in the imlpementation, it is not taken care of here
	float noise( vec3 x ){
		
		
		vec3 xm = fract( x );
		vec3 xb = x - xm;
		
		return mix(
			mix(
				mix(
					rand3( vec3(xb.x, xb.y, xb.z) ),
					rand3( vec3(xb.x + 1.0, xb.y, xb.z)),
					xm.x
				),
				mix(
					rand3( vec3(xb.x, xb.y + 1.0, xb.z) ),
					rand3( vec3(xb.x + 1.0, xb.y + 1.0, xb.z)),
					xm.x
				),
				xm.y
			),
			mix(
				mix(
					rand3( vec3(xb.x, xb.y, xb.z + 1.0) ),
					rand3( vec3(xb.x + 1.0, xb.y, xb.z + 1.0)),
					xm.x
				),
				mix(
					rand3( vec3(xb.x, xb.y + 1.0, xb.z + 1.0) ),
					rand3( vec3(xb.x + 1.0, xb.y + 1.0, xb.z + 1.0)),
					xm.x
				),
				xm.y
			),
			xm.z
		);
	}
	
	void main(void) {
		
		vec3 x = vec3( vCoord / 15.0, lavaTime / 130.0 );
		
		x.x -= lavaTime / 37.0; // to have the lava slowly move
		
		
		
		float result = noise( x );
		
		// add the second octave
		result *= 0.7;  // to make sure that it does not go over 1
		result += 0.3 * noise( x * 2.0 );
		
		// add the 3rd octave
		result *= 0.7;  // to make sure that it does not go over 1
		result += 0.3 * noise( x * 0.03 );
		
		
		
		
		gl_FragColor = vec4( 1.0, result, 0.0, 1.0 );
		
		
	}
`;function g(){d=i(D,m,h),D.useProgram(d),f=D.createBuffer(),p=[];let e=function(e,t,n,r){let i=e+n,a=t+r;p[p.length]=e,p[p.length]=t,p[p.length]=i,p[p.length]=t,p[p.length]=e,p[p.length]=a,p[p.length]=i,p[p.length]=a,p[p.length]=i,p[p.length]=t,p[p.length]=e,p[p.length]=a};for(let t=0;t<160;t++)for(let n=0;n<15;n++)Se(t,n)==2&&e(t*32,n*32,32,32);D.bindBuffer(D.ARRAY_BUFFER,f),D.bufferData(D.ARRAY_BUFFER,new Float32Array(p),D.STATIC_DRAW);let t=D.getAttribLocation(d,`coordinatesC`);D.vertexAttribPointer(t,2,D.FLOAT,!1,0,0),D.enableVertexAttribArray(t),D.bindBuffer(D.ARRAY_BUFFER,null)}function _(e,t){D.useProgram(d),s(D,d,`coordinatesC`,f),D.uniform1f(D.getUniformLocation(d,`lavaTime`),t),D.uniform1f(D.getUniformLocation(d,`viewX`),e),D.drawArrays(D.TRIANGLES,0,p.length/2)}function v(t){let n=e.map(e=>e.map(e=>e==1)),r=[];for(let e=0;e<8;e++)r.push(te(t,n.slice(e*20,(e+1)*20),0,0));return r}function ee(e,t){let n=t.length,r=t[0].length,i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`);for(let e=0;e<n;e++)for(let n=0;n<r;n++)a.fillStyle=t[e][n]?`rgb(255,255,255)`:`rgb(0,0,0)`,a.fillRect(e,n,1,1);return o(e,i)}function te(e,t,n,r){let o=ee(e,t),s=t.length*32,c=t[0].length*32,u=a(e,s,c);l(e,u),e.viewport(0,0,s,c),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT);let d=i(e,`
	attribute vec2 coordIn; // spans the whole thing in clip coords
	
	varying vec2 vCoord; // spans the whole thing in uv coords
	
	void main ( void ){
		
		gl_Position = vec4( coordIn, -0.1, 1.0);
		vCoord = (coordIn / 2.0) + vec2( 0.5, 0.5);
	}
	`,`
	precision mediump float;
	
	uniform sampler2D uLayoutDataTex;
	
	uniform float texWidth;
	
	
	uniform float foggyness;
	
	uniform float noiseXOffset; // measured in pixels relative to world
	
	varying vec2 vCoord;
	
	
	float rand(vec2 co){
		return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
	}
	
	
	float werlin( float x) {
		
		
		float xm = fract( x );
		
		float xb = x - xm;
		float bottom = rand( vec2( xb, 1.0 ));
		float top = rand( vec2( xb + 1.0, 1.0 ));
		
		return mix( bottom, top, xm );
		
		
	}
	
	
	
	
	
	float rand3( vec3 inputVar ){
		
		return rand( vec2( inputVar.x + 17.0 * inputVar.z, inputVar.y + 13.0 * inputVar.z ));
	}
	
	
	
	// returns value noise for the vec3.  There is a distance of 1 between corners, so take scaling into account in the imlpementation, it is not taken care of here
	float noise( vec3 x ){
		
		
		vec3 xm = fract( x );
		vec3 xb = x - xm;
		
		return mix(
			mix(
				mix(
					rand3( vec3(xb.x, xb.y, xb.z) ),
					rand3( vec3(xb.x + 1.0, xb.y, xb.z)),
					xm.x
				),
				mix(
					rand3( vec3(xb.x, xb.y + 1.0, xb.z) ),
					rand3( vec3(xb.x + 1.0, xb.y + 1.0, xb.z)),
					xm.x
				),
				xm.y
			),
				mix(
					mix(
						rand3( vec3(xb.x, xb.y, xb.z + 1.0) ),
						rand3( vec3(xb.x + 1.0, xb.y, xb.z + 1.0)),
						xm.x
					),
				mix(
					rand3( vec3(xb.x, xb.y + 1.0, xb.z + 1.0) ),
					rand3( vec3(xb.x + 1.0, xb.y + 1.0, xb.z + 1.0)),
					xm.x
				),
				xm.y
			 ),
			 xm.z
		);
	}
	
	
	void main ( void ){
		
		
		vec2 locInPixels = vCoord;
		locInPixels.x *= texWidth;
		locInPixels.x += noiseXOffset;
		locInPixels.y *= 480.0;
		// now that we have multiplied in those numbers locInPixels actually lives up to its name. It is measured relative to the world
		
		
		float isInUpperStalagtites = step( 0.0, 100.0 * werlin( locInPixels.x / 5.0 ) + 200.0 *werlin( locInPixels.x / 50.0 ) - 100.0  - (480.0 - locInPixels.y) );// for some unknown reason I need that 480-y part to flip the y
		
		vec2 offset = vec2( noise( vec3(locInPixels / 30.0, 1.0)), noise( vec3(locInPixels / 30.0, 2.0))) - vec2(0.5, 0.5);
		
		locInPixels += offset * 10.0;
		
		vec2 bottomLeftCorner = locInPixels - mod( locInPixels, 32.0);
		
		// vec4 stone = vec4( texture2D( uLayoutDataTex, vCoord ) );
		vec4 stone = vec4( texture2D( uLayoutDataTex, (bottomLeftCorner+ vec2(16.0,16.0) ) / vec2( texWidth,480.0) ) ); // we need to add the 16s because that put it in the center of the block, instead of at the corner (16 is half of 32). That is important so that it samples from the middle of the pixel, not the corner where it may be blended with other stuff
		
		
		
		if( stone.x + isInUpperStalagtites < 0.5){ // if it is not stone at all nor stalagtite
			discard;
		}
		
		
		
		
		float color = 0.0; // the basic stone color
		color = noise( vec3( locInPixels /100.0, 7.0 ) ); // base stone octave 1
		
		color *= 0.8;
		color += 0.2 * noise( vec3( locInPixels / 10.0, 8.0 ) ); // add base stone octave 2
		
		// make color be a variation of grey, not 0 to 1
		color *= 0.4;
		color += 0.3;
		
		float mossness = 0.7 * noise( vec3( locInPixels * 0.07, 9.0 ) ) + 0.3 * noise( vec3( locInPixels * 0.2, 10.0 ) );
		mossness *= 0.6;
		mossness = smoothstep( 0.25, 0.6, mossness );
		
		vec4 stoneColor = vec4( color, color, color, 1.0 );
		
		float msClrFlt = noise( vec3( locInPixels * 0.1, 11.0 ) );
		vec4 mossColor = vec4( 0.0, msClrFlt, 0.0, 1.0 );
		
		vec4 endColor = mix( stoneColor, mossColor, mossness );
		
		
		vec4 fogColor = vec4( 0.9, 0.9, 1.0, 1.0);
		
		gl_FragColor = mix( endColor, fogColor, foggyness);
		
		
		if( isInUpperStalagtites > 0.5){ // if it is in the upper stalagtites, that takes priority, so overwrite our previous work
			gl_FragColor = vec4( 0.5, 0.5, 0.5, 1 );
		}
		
	}
	
	
	`);e.useProgram(d);let f=[-1,-1,-1,1,1,1,-1,-1,1,-1,1,1],p=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,p),e.bufferData(e.ARRAY_BUFFER,new Float32Array(f),e.STATIC_DRAW);let m=e.getAttribLocation(d,`coordIn`);e.vertexAttribPointer(m,2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(m),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o);let h=e.getUniformLocation(d,`foggyness`);return e.uniform1f(h,n),e.uniform1f(e.getUniformLocation(d,`texWidth`),s),e.uniform1f(e.getUniformLocation(d,`noiseXOffset`),r),e.drawArrays(e.TRIANGLES,0,f.length/2),e.bindFramebuffer(e.FRAMEBUFFER,null),u}var ne=`
attribute vec2 clipSpaceSpanningVertLoc;

// all of these are measured in pixels
uniform float xDrawingAreaStart; // relative to screen, can be negative, in pixels
uniform float xOfTexStart; // relative to tex, in pixels
uniform float widthOfTexToUse; // in pixels
uniform float texTotalWidth; // in pixels
uniform float xOfLightmapStart; // relative to lightmap tex, in pixels

uniform float depth;


//uniform float textureWidth;
//uniform float xPositionOfTexture;// in pixels relative to the screen, usually or always a negative number


varying vec2 uvOfParalaxTexture;
varying vec2 uvOfLightmap;


void main(void){
	
	// first we will figure out the clip space location on the screen
	vec2 position = clipSpaceSpanningVertLoc * 0.5 + vec2(0.5,0.5);
	position *= vec2( widthOfTexToUse, 480.0);
	position.x += xDrawingAreaStart;
	position /= vec2( 640.0, 480.0);
	gl_Position = vec4( position * 2.0 - vec2( 1.0, 1.0), depth, 1.0);
	
	// now, we figure out the uv for the paralax texture
	vec2 texUV = clipSpaceSpanningVertLoc * 0.5 + vec2(0.5,0.5);
	texUV.x *= widthOfTexToUse / texTotalWidth; // it is 0 or 1 to start, this puts it to 0 or widthOfTexToUse/texTotalWidth
	texUV.x += xOfTexStart / texTotalWidth; // this should get us to the result we want
	uvOfParalaxTexture = texUV;
	
	
	// now, figure out the lightmap UV
	vec2 lightmapUV = clipSpaceSpanningVertLoc * 0.5 + vec2(0.5,0.5);
	lightmapUV.x *= widthOfTexToUse / 640.0; // it is 0 or 1 to start, this puts it to 0 or widthOfTexToUse/texTotalWidth
	lightmapUV.x += xOfLightmapStart / 640.0; // this should get us to the result we want
	lightmapUV.y = 1.0 - lightmapUV.y; // for whatever unknown reason, flip the y
	uvOfLightmap = lightmapUV;
	
	
}
`,re=`
precision mediump float;

uniform sampler2D utexture;
uniform sampler2D lightmap;

varying vec2 vCoord; // location in clip space

varying vec2 uvOfParalaxTexture;
varying vec2 uvOfLightmap;

void main ( void ){
	
	
	vec4 resultWithoutLighting = texture2D( utexture, uvOfParalaxTexture);
	if( resultWithoutLighting.a < 1.0){
		discard;
	}
	
	vec4 lighting = texture2D( lightmap, uvOfLightmap);
	
	gl_FragColor = lighting * resultWithoutLighting;
}


`;function y(e,t,n,r,o){let s=t,c=[-1,-1,-1,1,1,1,-1,-1,1,-1,1,1],u=a(e,s,480);l(e,u),e.viewport(0,0,s,480),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT);let d=i(e,`
	precision lowp float;
	
	
	attribute vec2 coordIn;
	
	
	uniform float textureWidth;
	
	varying vec2 vCoord;
	
	void main ( void ){
		
		
		gl_Position = vec4( coordIn, 0.0, 1.0);
		
		
		
		// for now just shifts from clipspace to pixels
		
		
		vCoord = coordIn;
		vCoord /= 2.0;
		vCoord += vec2( 0.5, 0.5 );
		// now x and y both range from 0 to 1
		
		vCoord.x *= textureWidth;
		vCoord.y *= 480.0;
	}
	
	
	
	`,`
	precision lowp float;
	
	varying vec2 vCoord;
	
	
	uniform float stoneHeight;
	uniform float textureWidth;
	uniform float fogAmount;
	uniform float noiseStartSpot; // this is the place that the noise will be treated as starting
	
	// at least some code from other places, including https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
	
	float rand(float n){return fract(sin(n) * 43758.5453123);}
	
	
	float noise1D(float p){
		float fl = floor(p);
		float fc = fract(p);
		return mix(rand(fl), rand(fl + 1.0), fc);
	}
	
	
	float rand(vec2 co){
	    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
	}


	float rand3( vec3 inputVar ){
		
		return rand( vec2( inputVar.x + 17.0 * inputVar.z, inputVar.y + 13.0 * inputVar.z ));
	}
	
	
	
	// returns value noise for the vec3.  There is a distance of 1 between corners, so take scaling into account in the imlpementation, it is not taken care of here
	float noise( vec3 x ){
		
		
		vec3 xm = fract( x );
		vec3 xb = x - xm;
		
		return mix(
			mix(
				mix(
					rand3( vec3(xb.x, xb.y, xb.z) ),
					rand3( vec3(xb.x + 1.0, xb.y, xb.z)),
					xm.x
				),
				mix(
					rand3( vec3(xb.x, xb.y + 1.0, xb.z) ),
					rand3( vec3(xb.x + 1.0, xb.y + 1.0, xb.z)),
					xm.x
				),
				xm.y
			),
			mix(
				mix(
					rand3( vec3(xb.x, xb.y, xb.z + 1.0) ),
					rand3( vec3(xb.x + 1.0, xb.y, xb.z + 1.0)),
					xm.x
				),
				mix(
					rand3( vec3(xb.x, xb.y + 1.0, xb.z + 1.0) ),
					rand3( vec3(xb.x + 1.0, xb.y + 1.0, xb.z + 1.0)),
					xm.x
				),
				xm.y
			),
			xm.z
		);
	}

	
	
	void main(void) {
		
		// coord is in pixels
		vec2 coord = vCoord;
		coord.x += noiseStartSpot; // this makes it so that all the noises start at a different spot. That also makes it so that texture sections generated at different times line up with each other
		
		float TOP_THICKNESS = stoneHeight; // 0 < this < 1; this < .5 for no overlap
		float BOTTOM_THICKNESS = TOP_THICKNESS;
		
		float stalagtiteThickness = noise1D( coord.x / 50.0 );
		stalagtiteThickness += noise1D( coord.x / 10.0) * 0.2;
		stalagtiteThickness += noise1D( coord.x / 5.0) * 0.1;
		
		
		float stalagmiteThickness = noise1D( (coord.x + textureWidth + 50.0) / 50.0 );
		stalagmiteThickness += noise1D( (coord.x + textureWidth + 50.0) / 10.0) * 0.2;
		stalagmiteThickness += noise1D( (coord.x + textureWidth + 50.0) / 5.0) * 0.1;
		
		float stoneness = 0.0;
		
		float topStoneness = step( 0.0, coord.y / 480.0 - ( TOP_THICKNESS * stalagtiteThickness + ( 1.0 - TOP_THICKNESS ) ) );
		
		
		float bottomStoneness = step( 0.0, BOTTOM_THICKNESS * stalagmiteThickness  - coord.y / 480.0 );
		
		
		stoneness = max( bottomStoneness, topStoneness); // if it is bottom || top
		
		// now stoneness has 0 if it is air, and 1 if it is stone
		
		// now, add variations to the stone's greyness
		
		float stoneColorFloat = noise( vec3( vCoord / 50.0, 1.0 ));
		stoneColorFloat = stoneColorFloat * 0.2 + 0.4;
		// octive 2
		stoneColorFloat = stoneColorFloat * 0.91 + 0.09 * noise( vec3( vCoord / 1.0, 2.0 ));
		
		
		
		vec4 stoneColor = vec4( stoneColorFloat, stoneColorFloat, stoneColorFloat, 1.0 );
		vec4 fogColor = vec4( 0.9, 0.9, 1.0, 1.0 );
		
		
		vec4 color = mix( stoneColor, fogColor, fogAmount );
		
		
		gl_FragColor = vec4( color.rgb, stoneness);
		
		
		
	}
	`);e.useProgram(d);let f=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,f),e.bufferData(e.ARRAY_BUFFER,new Float32Array(c),e.STATIC_DRAW);let p=e.getAttribLocation(d,`coordIn`);return e.vertexAttribPointer(p,2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(p),e.uniform1f(e.getUniformLocation(d,`stoneHeight`),n),e.uniform1f(e.getUniformLocation(d,`textureWidth`),s),e.uniform1f(e.getUniformLocation(d,`fogAmount`),r),e.uniform1f(e.getUniformLocation(d,`noiseStartSpot`),o),e.drawArrays(e.TRIANGLES,0,c.length/2),e.bindFramebuffer(e.FRAMEBUFFER,null),u}var b=[`air`,`air`,`air`,`air`,`air`,`air`,`air`],x=[0,0,0,1,0,0,4,5,6,3,0,2],S=[],C=b.length,w=[],T=document.createElement(`canvas`);T.width=5120,T.height=480;function ie(e){return new Promise(e=>{for(let t=0;t<b.length;t++)ae(document.getElementById(b[t]),n=>{if(S[t]=n,C--,C==0){for(let e=0;e<x.length;e++)w[e]=S[x[e]];oe(),e()}})})}function ae(e,t){let n=new XMLSerializer().serializeToString(e),r=new Blob([n],{type:`image/svg+xml;charset=utf-8`}),i=URL.createObjectURL(r),a=new Image;a.onload=()=>{URL.revokeObjectURL(i),t(a)},a.onerror=e=>{console.error(`Error loading SVG image`,e)},a.src=i}function oe(){T.width=5120,T.height=480;let t=T.getContext(`2d`);for(let n=0;n<160;n++)for(let r=0;r<15;r++)t.drawImage(w[e[n][r]],n*32,r*32,32,32)}var se=`
uniform vec2 p1Coord;

attribute vec2 coordIn;

uniform float viewX;

void main ( void ){

	// p1Coord and viewX are both in pixels with y == 0 at the top
	// coordIn values are -1,-1; 1,1; -1,1; and 1,-1


	vec2 normalizedCoordIn = 0.5 * ( coordIn + 1.0 );

	vec2 topLeftPx = vec2( p1Coord.x - viewX, p1Coord.y ); // relative to the screen in view

	vec2 thisCoordPx = topLeftPx + normalizedCoordIn * 20.0;

	vec2 result = vec2( thisCoordPx.x / 640.0, 1.0 - thisCoordPx.y / 480.0 );
	result *= 2.0;
	result -= 1.0;

	gl_Position = vec4( result, 0.0, 1.0);

}
`,ce=`
precision mediump float;


void main ( void ){
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0);

}
`,le=`
attribute vec2 coordIn;
varying vec2 vCoord;
void main(void){
	vCoord = coordIn;
	gl_Position = vec4( coordIn, 0.0, 1.0);
}`,ue=`
precision mediump float;
varying vec2 vCoord;
uniform vec3 centerColor;
void main(void){
	
	gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0);
	float distanceFromCenter = sqrt( dot( vCoord, vCoord) );
	float midCalculationValue = max( 0.0, 1.0 - distanceFromCenter);
	float brightness = midCalculationValue * midCalculationValue;
	gl_FragColor = vec4( centerColor * brightness, 1.0);
	
	
	// the alpha records the amount of lack of shadow
	
}
`,de=`
attribute vec4 coordIn;
uniform float lightRadius;
varying vec2 vShadowCoord;
void main(void){
	// the x and y of coordIn is the x and y of the point on this wall
	// the w coordinate is the w coordinate
	
	// the z of coordIn (only important if w==0) is ...
	// <.5 for go off counterclockwise part of light
	// >.5 for go off clockwise part of light
	// .25 < z < .75 this is not shaded, otherwise shaded
	
	// if w is 1, then just return the original x and y
	// if w is 0, find the vector from the correct side of the light to this point and set w to 0
	
	
	if( coordIn.w == 1.0){
		gl_Position = vec4( coordIn.x, coordIn.y, 0.0, 1.0);
	} else {
		// find the vec from the appropriate edje of the light to this point
		// use the approximation of taking the normalization of the vec from the light to here (eazy since the light is centered at 0,0)...
		vec2 fromLightToPointNormalized = normalize( coordIn.xy);
		//... and then rotating it 90 degrees
		vec2 edgeOfLight;
		if( coordIn.z < 0.5){ // todo do it right (or is it right?)
			edgeOfLight = vec2( -fromLightToPointNormalized.y, fromLightToPointNormalized.x) * lightRadius; // counterclockwise
		} else {
			edgeOfLight = vec2( fromLightToPointNormalized.y, -fromLightToPointNormalized.x) * lightRadius; //clockwise
		}
		gl_Position = vec4( coordIn.xy - edgeOfLight, 0.0, 0.0);
	}
	
	vShadowCoord.x = 1.0 - coordIn.w;
	vShadowCoord.y = 0.0;
	
	// set it to 1 if it is shaded
	if( coordIn.z < 0.25){
		vShadowCoord.y = 1.0;
	}
	if( coordIn.z > 0.75){
		vShadowCoord.y = 1.0;
	}
	
	
	if( coordIn.w == 1.0){
		vShadowCoord.y = 0.0;
	}
	
	
	
	
}`,fe=`
precision mediump float;
varying vec2 vShadowCoord;
// imagine a triangle on the coordinate plane w/ points @ 0,0 1,0 and 1,1
// then imagine it shaded based on y/x with 1 being completely black and 0 all white
// that is kind of what is given in vShadowCoord, this then shades it

void main(void){
	// remember, this uses reverse subtract blending, so white blocks the light
	
	
	float inverseBrightness = vShadowCoord.y / vShadowCoord.x;
	
	gl_FragColor = vec4( inverseBrightness, inverseBrightness, inverseBrightness, 1.0);
	
	// the alpha records the amount of lack of shadow
	gl_FragColor = vec4( 0.0, 0.0, 0.0, inverseBrightness);
	
}
`,E=`
attribute vec2 coordIn;
attribute vec2 aUV;
varying vec2 uv;
void main(void){
	uv = aUV;
	vec2 clipCoords = vec2(0.0,0.0);
	clipCoords.x = coordIn.x / (640.0);
	clipCoords.y = coordIn.y / 480.0;
	clipCoords *= 2.0;
	clipCoords -= vec2( 1.0, 1.0);
	
	gl_Position = vec4( clipCoords, 0.0, 1.0);
}
`,pe=`
precision mediump float;
varying vec2 uv;
uniform sampler2D utexture;
void main(void){
	
	// the alpha records the amount of lack of shadow
	// so, if it is completely shadowed, alpha is 0
	// this uses additive blending
	vec4 texInfo = texture2D( utexture, uv);
	
	gl_FragColor = vec4( texInfo.rgb * texInfo.a, 1.0);
	
}
`;function me(t){let n=performance.now(),r=[];for(let t=0;t<160;t++)for(let n=0;n<15;n++)e[t][14-n]==1&&r.push({x:t*32+4,y:n*32+4,w:24,h:24});let o=[];for(let e=0;e<r.length;e++){let t=r[e],n={x:t.x,y:t.y+t.h},i={x:t.x+t.w,y:t.y+t.h},a={x:t.x,y:t.y},s={x:t.x+t.w,y:t.y};o.push({x1:n.x,y1:n.y,x2:i.x,y2:i.y}),o.push({x1:i.x,y1:i.y,x2:s.x,y2:s.y}),o.push({x1:s.x,y1:s.y,x2:a.x,y2:a.y}),o.push({x1:a.x,y1:a.y,x2:n.x,y2:n.y})}console.log(`build shadow information`,performance.now()-n),n=performance.now();let d=[];for(let t=0;t<160;t++)for(let n=0;n<15;n++)e[t][14-n]==2&&(d.push({x:(t+.5)*32,y:(n+.5)*32,r:.15,g:.075,b:0,reachRadius:200,bulbRadius:18}),d.push({x:(t+.5)*32,y:(n+.5)*32,r:.05,g:.025,b:0,reachRadius:600,bulbRadius:18})),(e[t][14-n]==3||e[t][14-n]==8)&&d.push({x:(t+.5)*32,y:(n+.5)*32,r:1,g:1,b:1,reachRadius:288,bulbRadius:10});console.log(`build light raw data`,performance.now()-n),n=performance.now();let f=[],p=i(t,le,ue);t.useProgram(p);let m=i(t,de,fe);for(let e=0;e<d.length;e++){let n=d[e],r=a(t,n.reachRadius*2,n.reachRadius*2);l(t,r),t.viewport(0,0,n.reachRadius*2,n.reachRadius*2),t.useProgram(p);let i=[-1,-1,-1,1,1,1,-1,-1,1,-1,1,1],s=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,s),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW);let c=t.getAttribLocation(p,`coordIn`);t.vertexAttribPointer(c,2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(c),t.uniform3f(t.getUniformLocation(p,`centerColor`),n.r,n.g,n.b),t.drawArrays(t.TRIANGLES,0,i.length/2),t.useProgram(m);let h=[];for(let e=0;e<o.length;e++){let t=o[e],r,i,a,s,c=Math.atan2(t.y1-n.y,t.x1-n.x),l=Math.atan2(t.y2-n.y,t.x2-n.x);if(c<l&&(l-=2*Math.PI),c-l<=Math.PI)continue;r=(t.x1-n.x)/n.reachRadius,i=(t.y1-n.y)/n.reachRadius,a=(t.x2-n.x)/n.reachRadius,s=(t.y2-n.y)/n.reachRadius;let u=(e,t)=>t?e?1/8:3/8:e?7/8:5/8;h.push(r,i,u(!1,!0),0),h.push(r,i,u(!0,!1),0),h.push(r,i,u(!1,!0),1),h.push(a,s,u(!0,!0),0),h.push(a,s,u(!1,!1),0),h.push(a,s,u(!1,!0),1),h.push(r,i,u(!0,!0),1),h.push(r,i,u(!0,!1),0),h.push(a,s,u(!0,!0),0),h.push(r,i,u(!0,!0),1),h.push(a,s,u(!0,!0),1),h.push(a,s,u(!0,!0),0)}let g=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,g),t.bufferData(t.ARRAY_BUFFER,new Float32Array(h),t.STATIC_DRAW);let _=t.getAttribLocation(m,`coordIn`);t.vertexAttribPointer(_,4,t.FLOAT,!1,0,0),t.enableVertexAttribArray(_),t.blendFunc(t.ONE,t.ONE),t.blendEquation(t.FUNC_REVERSE_SUBTRACT);let v=n.bulbRadius/n.reachRadius;t.uniform1f(t.getUniformLocation(m,`lightRadius`),v),t.drawArrays(t.TRIANGLES,0,h.length/2),u(),t.blendEquation(t.FUNC_ADD),f.push(r)}console.log(`draw shadow gradient texes`,performance.now()-n),n=performance.now();let h=[];for(let e=0;e<8;e++)h.push(a(t,640,480));for(let e=0;e<h.length;e++){l(t,h[e]),t.viewport(0,0,640,480),t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.enable(t.BLEND),t.blendFunc(t.ONE,t.ONE);let r=(e,n,r,i)=>{let o=r*2,l=e-r,u=n-r,d=[l,u,l+o,u,l+o,u+o,l,u,l,u+o,l+o,u+o],f=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,f),t.bufferData(t.ARRAY_BUFFER,new Float32Array(d),t.STATIC_DRAW),s(t,a,`coordIn`,f);let p=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,p),t.bufferData(t.ARRAY_BUFFER,new Float32Array([0,1,1,1,1,0,0,1,0,0,1,0]),t.STATIC_DRAW),s(t,a,`aUV`,p),c(0,i,t),t.drawArrays(t.TRIANGLES,0,d.length/2)},a=i(t,E,pe);t.useProgram(a),t.uniform1i(t.getUniformLocation(a,`utexture`),0);for(let t=0;t<f.length;t++)r(d[t].x-e*640,480-d[t].y,d[t].reachRadius,f[t]);console.log(`draw lights to map`,performance.now()-n),n=performance.now(),u(),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA)}return h}var D,O,k,A,j,M,N=[],P,F,I,L,R,z,B=640,he=[-1,-1,-1,1,1,1,-1,-1,1,-1,1,1];function ge(){if(D=document.getElementById(`canvasId`).getContext(`webgl`,{antialias:!1}),!D)throw document.getElementById(`time`).innerHTML=`Sorry, it looks like your browser does not support WebGL, which this game requires`,`noWebgl`;k=D.createBuffer(),D.bindBuffer(D.ARRAY_BUFFER,k),D.bufferData(D.ARRAY_BUFFER,new Float32Array(he),D.STATIC_DRAW),D.bindBuffer(D.ARRAY_BUFFER,null),D.enable(D.DEPTH_TEST),D.enable(D.BLEND),D.blendFunc(D.SRC_ALPHA,D.ONE_MINUS_SRC_ALPHA),O=i(D,se,ce),j=v(D);for(let e=0;e<4;e++){let t=e/3,n=.2+.8*e/3,r=4480*(1-e/3)+640;N.push({totalWidth:r,depth:.8+.1*e/3,height:n,fogAmount:t,segments:[]});let i=4480*(1-e/3)+640,a=0,o=0;for(;i>B;)N[N.length-1].segments.push({x:a,width:B,texture:y(D,B,n,t,a),id:o}),a+=B,i-=B,o++;N[N.length-1].segments.push({x:a,width:i,texture:y(D,i,n,t,a)})}N.push({totalWidth:640,depth:.95,height:480,fogAmount:1,segments:[{x:0,width:640,texture:y(D,640,1e6,1,0)}]}),P=me(D),D.viewport(0,0,640,480),g(),A=i(D,ne,re),D.useProgram(A),s(D,A,`clipSpaceSpanningVertLoc`,k),F=D.getUniformLocation(A,`depth`),D.getUniformLocation(A,`xPositionOfTexture`),I=D.getUniformLocation(A,`utexture`),L=D.getUniformLocation(A,`lightmap`),D.getUniformLocation(A,`textureWidth`),R=D.getUniformLocation(O,`viewX`),z=D.getUniformLocation(O,`p1Coord`),M=a(D,1,1);let e=new Image;e.src=`src/white.png`,e.onload=()=>{M=o(D,e),console.log(`done`)}}function _e(){for(let e=0;e<N.length;e++){let t=J/4480*(5120-N[e].totalWidth)-J,n=0;for(;t<=-640;)n++,t+=B;V(N[e].segments[n].texture,t+J,N[e].segments[n].width,N[e].depth),N[e].segments[n+1]&&V(N[e].segments[n+1].texture,t+B+J,N[e].segments[n+1].width,N[e].depth)}}function V(e,t,n,r,i=!0){D.useProgram(A),D.disable(D.BLEND),D.uniform1i(I,0),D.uniform1i(L,1);let a=Math.floor(t/640);D.activeTexture(D.TEXTURE0+1),i?D.bindTexture(D.TEXTURE_2D,P[a]):(D.bindTexture(D.TEXTURE_2D,M),D.uniform1f(F,-.1)),s(D,A,`clipSpaceSpanningVertLoc`,k),D.activeTexture(D.TEXTURE0),D.bindTexture(D.TEXTURE_2D,e);let o=(a+1)*640;D.uniform1f(D.getUniformLocation(A,`xDrawingAreaStart`),t-J),D.uniform1f(D.getUniformLocation(A,`xOfTexStart`),0),D.uniform1f(D.getUniformLocation(A,`widthOfTexToUse`),o-t),D.uniform1f(D.getUniformLocation(A,`texTotalWidth`),n),D.uniform1f(D.getUniformLocation(A,`xOfLightmapStart`),t-a*640),D.uniform1f(D.getUniformLocation(A,`depth`),r),D.drawArrays(D.TRIANGLES,0,6),o<t+n&&(D.uniform1f(D.getUniformLocation(A,`xDrawingAreaStart`),o-J),D.uniform1f(D.getUniformLocation(A,`xOfTexStart`),o-t),D.uniform1f(D.getUniformLocation(A,`widthOfTexToUse`),n+t-o),D.uniform1f(D.getUniformLocation(A,`texTotalWidth`),n),D.uniform1f(D.getUniformLocation(A,`xOfLightmapStart`),0),D.uniform1f(D.getUniformLocation(A,`depth`),r),D.activeTexture(D.TEXTURE0+1),i?D.bindTexture(D.TEXTURE_2D,P[a+1]):D.bindTexture(D.TEXTURE_2D,M),D.drawArrays(D.TRIANGLES,0,6)),D.enable(D.BLEND)}function ve(){D.clearColor(.9,.9,1,1),D.clear(D.COLOR_BUFFER_BIT|D.DEPTH_BUFFER_BIT),_e(),D.useProgram(O),s(D,O,`coordIn`,k),D.uniform1f(R,J),D.uniform2f(z,U.x,U.y),D.drawArrays(D.TRIANGLES,0,6),_(J,Y),J/4480*0;let e=-J,t=0;for(;e<=-640;)t++,e+=640;V(j[t],e+J,640,-.1,!1),j[t+1]&&V(j[t+1],e+640+J,640,-.1,!1)}var ye=.7,H=document.getElementById(`canvasId`),U=new r,W=[],G=[!1,!0,!1],K=0;async function be(){await ie(),window.addEventListener(`keydown`,e=>W[e.code]=!0),window.addEventListener(`keyup`,e=>W[e.code]=!1),xe.setRealSize(H.width,H.height),ge(),window.requestAnimationFrame($)}window.addEventListener(`load`,()=>{be()});var q=[],xe={virtW:640,virtH:480,realW:640,realH:480,x:0,y:0,scale:1,setRealSize:function(e,t){H.width=e,H.height=t;let n=e/t,r=this.realW/this.realH;n==r&&(this.x=0,this.y=0,this.realW=e,this.realH=t,this.scale=this.realW/this.virtW),n<r&&(this.x=0,this.realW=e,this.realH=this.realW/r,this.y=(t-this.realH)/2,this.scale=this.realW/this.virtW),n>r&&(this.y=0,this.realH=t,this.realW=this.realH*r,this.x=(e-this.realW)/2,this.scale=this.realW/this.virtW)}},J=0,Y=0,X=[],Z=[],Q=!1;function $(t){if(performance.now(),Y++,U.x/32>158&&U.y/32>13&&!Q){let e=document.createElement(`p`);e.innerHTML=`You Won! Wow!`,document.body.appendChild(e),Q=!0}U.update(1e3/60*1);for(let e=0;e<q.length;e++)q[e].update(),Math.random()<1/30&&(q.splice(e,1),e--);for(let e=0;e<X.length;e++)X[e].update(),Math.random()<1/3&&(X.splice(e,1),e--);for(let e=0;e<Z.length;e++)Z[e].update();for(let t=0;t<160;t++)for(let n=0;n<15;n++)if(e[t][n]!=2||Math.random()>1/5)continue;var n=~~(U.x/32),r=~~(U.y/32),i=U.x%32,a=U.y%32;e[n][r]==3&&(U.spawnXPx=U.x,U.spawnYPx=U.y),U.x+=5,U.w-=10,n=~~(U.x/32),r=~~(U.y/32),i=U.x%32,a=U.y%32;let o=(t,n)=>e[t][n]==2||e[t][n]==11,s=!1;if(s||=o(n,r),s||=o(n+1,r)&&i+U.w>32,s||=o(n,r+1)&&a+U.h>32,s||=o(n+1,r+1)&&i+U.w>32&&a+U.h>32,s){K++;for(let e=0;e<1500;e++);U.x=U.spawnXPx-5,U.y=U.spawnYPx-5,U.dx=0,U.dy=0,W[U.jumpKey]=!1,W[U.runLeftKey]=!1,W[U.runRightKey]=!1,W[U.dashKey]=!1}U.x-=5,U.w+=10,J+=(U.x-320-J)*.1,J<0&&(J=0),J>4480&&(J=4480),ve(),window.requestAnimationFrame($)}function Se(t,n){return!e[t]||!e[t][n]?0:e[t][n]}