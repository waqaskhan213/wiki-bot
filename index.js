//initializations
const Discord = require('discord.js');
const { Client } = require('discord.js');
const variables = require('./variables.json');
const utility = require('./utility.js')
client = new Client()
first_invoker = false;
////////////////////////////////////////////////////////////////////////////////////////////////////

var flag = false;
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Hello') {
    msg.reply('Sup Nigger');
  }
  console.log("message received");
});

client.on('message', msg => {
  if (msg.content === 'hello') {
    msg.reply('Sup Nigger');
  }
  console.log("message received");
});

client.on('message', msg => {
  if (msg.content === 'Sup') {
    msg.reply('Sup Nigger');
  }
  console.log("message received");
});
    
client.on('message', msg => {
  if (msg.content === 'sup') {
    msg.reply('Sup Nigger');
  }
  console.log("message received");
});
        
client.on('message', msg => {
  if (msg.content === 'wassup') {
    msg.reply('Sup Nigger');
  }
  console.log("message received");
});

client.on('message', msg => {
  if (msg.content === 'Wassup') {
    msg.reply('Sup Nigger');
  }
  console.log("message received");
});

client.on('message', msg => {
  if (msg.content === 'oye') {
    msg.reply('Sup Nigger');
  }
  console.log("message received");
});

client.on('message', msg => {
  if (msg.content === 'Oye') {
    msg.reply('Sup Nigger');
  }
  console.log("message received");
});

client.on('message', msg => {
  if (msg.content === 'how are you') {
    msg.reply('I am fine Mate');
  }
  console.log("message received");
});

client.on('message', msg => {
  if (msg.content === 'gay') {
    msg.reply('you are gay');
  }
  console.log("message received");
});

client.on('message', msg => {
  if (msg.content === 'How are you') {
    msg.reply('I am fine Mate');
  }
  console.log("message received");
});

client.on('message', msg => {
  if (msg.content === 'gay bot') {
    msg.reply('I am fine Mate');
  }
  console.log("message received");
});

client.on('message', msg => {
  if (msg.content === 'shit') {
    msg.reply('STOP THE ABUSE');
  }
  else  if (msg.content === 'chutu') {
    msg.reply('not chutu');
  }
  console.log("message received");
});

client.on('message', msg => {
  if (msg.content === 'fuck') {
    msg.reply('Stop de abuse');
  }
  console.log("message received");
});

client.on('message', msg => {
  if (msg.content === 'fuck off') {
    msg.reply('U can fuck off ./.');
  }
  console.log("message received");
});

client.on('message', msg => {
  if (msg.content === 'being alone in 2021') {
    msg.reply('U have me mate');
  }
  console.log("message received");
});

client.on('message', msg => {
  if (msg.content === 'Goodnight') {
    msg.reply('Bye bro <3');
  }
  console.log("message received");
});

client.on('message', msg => {
  if (msg.content === 'goodnight') {
    msg.reply('Bye bro <3');
  }
  console.log("message received");
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bye') {
    msg.reply('Bye bro <3');
  }
  console.log("message received");
});


client.on('message', msg => {
  if (msg.content === 'Joke' || msg.content==='joke' ) {
    flag = true; 
    var x =Math.floor((Math.random() * 5));
      if(x=== 0){
    msg.reply('bolo pencil');}
    else if (x=== 1) {
            msg.reply('bolo gun');
        }
        else if (x===2){
            msg.reply('Bolo hire')
        }
        else if (x===3){
          msg.reply('TV')
      }
      else if (x===4){
        msg.reply('Bolo goku') 
      }    
      }
});

client.on('message', msg => {
  if (msg.content === 'Hi' || msg.content==='hi' ) {
      var x =Math.floor((Math.random() * 2));
      if(x=== 0){
    msg.reply('Lund pe char bye');}         
      else if (x=== 1) {
      msg.reply('Sup nigger');
  }
}});

client.on('message', msg => {
  if ( flag &&  (msg.content === 'Tv' || msg.content==='tv' )) {
    msg.reply('SHarukhan ki Bivi');
    flag = false;              
  }
  console.log("message received");
});

client.on('message', msg => {
  if ( flag &&  (msg.content === 'Gun' || msg.content==='gun' )) {
    msg.reply('Teri khuss me lun');
    flag = false;              
  }
  console.log("message received");
});

client.on('message', msg => {
  if ( flag &&  (msg.content === 'Pencil' || msg.content==='pencil' )) {
    msg.reply('teri shadi cancel');
    flag = false;              
  }
  console.log("message received");
});

client.on('message', msg => {
  if ( flag &&  (msg.content === 'Hire' || msg.content==='hire' )) {
    msg.reply('Teri khuss me fire');
    flag = false;              
  }
  console.log("message received");
});

client.on('message',msg=>{
  if(msg.content.includes("Bsdk gali nai deni")){
    msg.reply("bhai galti ho gai")
  }
})

client.on('message',msg =>{
  if(msg.content.toLowerCase() === 'whats going on'){ 
   msg.reply('wohi rage quit of niggers')
 }
})

client.on('message', msg => {
  if ( flag &&  (msg.content === 'goku' || msg.content==='Goku' )) {
    msg.reply('bund laa lun thokon');
    flag = false;              
  }
  console.log("message received");
});

client.on('message',msg =>{
  if(msg.content.toLowerCase() === 'not you bot'){ 
   msg.reply('oh sorry')
 }
})

client.on('message',msg =>{
  if(msg.content.toLowerCase() === 'I am fine'){ 
   msg.reply('me too')
 }
})

client.on('message',msg =>{
  if(msg.content.toLowerCase() === 'lun'){ 
   msg.reply('=Ricardo Milos BOT')
 }
})

client.login('ODIzODU3MDQ0MzM4OTAxMDAz.YFm6qQ.YE0nZpGXOzDuwAL0qSB55gCULt4');