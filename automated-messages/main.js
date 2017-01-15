'use strict';
/*
Automated Messages
*/
		
console.log('[Automated-Messages] Online!');

const chat = jcmp.events.Call('get_chat')[0];

var msg = [

    /*To add a new message just copy this line:

	{ message: 'Your message here', color: new RGB(0,255,0) },
	
	You can get color codes here: http://www.colorpicker.com/
	*/
	{ message: 'Welcome to the server!', color: new RGB(0,255,0) },
	{ message: 'Rules: Have fun!' , color: new RGB(0,0,255) }
];



//By default it'll pick a random one every 5 minutes!
var minutes = 5
var the_interval = minutes * 60 * 1000;
setInterval(function() {
	var rand = parseInt(Math.random()*msg.length);

	chat.broadcast(msg[rand].message, msg[rand].color);

}, the_interval);
