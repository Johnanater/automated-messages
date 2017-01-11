'use strict';
/*
Automated Messages
*/
		
console.log('[Automated-Messages] Online!');

const chat = jcmp.events.Call('get_chat')[0];

/*
	To add a new broadcast just add a new line into the array like this:
	
	COLOR 
	
	var msg = [
		{ message: 'Your new message', color: RGB(0,255,0) }, // YOUR NEW LINE
		{ message: 'Your new message' }, // Color is optional by default is white
		{ message: 'Welcome to the server!', color: RGB(0,255,0) },
		{ message: 'Rules: Have fun!' , color: new RGB(0,0,255) }
	];
	
*/

var msg = [
	{ message: 'Welcome to the server!', color: RGB(0,255,0) },
	{ message: 'Rules: Have fun!' , color: new RGB(0,0,255) }
];

/*
	Or you can do here
	msg.push({ message: 'Your message', color: new RGB(255,0,0) });
*/



//By default it'll pick a random one every 5 minutes!
var minutes = 5
var the_interval = minutes * 60 * 1000;
setInterval(function() {
	var rand = parseInt(Math.random()*msg.length);
	
	if(typeof(msg[rand].color === 'undefined') {
	   msg[rand].color = new RGB(255,255,255);
	}
	    
	chat.broadcast(msg[rand].message, msg[rand].color);

}, the_interval);
