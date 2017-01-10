'use strict';
/*
Automated Messages
*/
		
console.log('[Automated-Messages] Online!');

const chat = jcmp.events.Call('get_chat')[0];

/*
To add a new broadcast Just copy paste these lines

msg[0] = function(){
	chat.broadcast('1');
}

Make sure to change [0] to the next number!
*/

var msg = [];

msg[0] = function(){
	chat.broadcast('Welcome to the server!');
}
msg[1] = function(){

	chat.broadcast('Rules: Have fun!');
}

//By default it'll pick a random one every 5 minutes!
var minutes = 5, the_interval = minutes * 60 * 1000;
setInterval(function() {
	var rand = parseInt(Math.random()*msg.length);
	msg[rand]();
}, the_interval);