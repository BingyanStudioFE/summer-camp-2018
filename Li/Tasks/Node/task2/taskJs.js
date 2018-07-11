'use strict'
const keypress = require('keypress');
const member = require('./member');
const colors = require('colors');

function lfm() {
  console.log('here are our all members');
  console.log(member);
}

function msg() {
    console.log('command not found'.red);
}

function wal() {
    console.log('command not found'.red);
}

function loop(){
  console.log("welcome to this system,let's see what do you want");
  console.log('1.looking for a member'.yellow);
  console.log('2.message about us'.blue);
  console.log('3.write us a letter'.green);
  console.log('  ');
  // make `process.stdin` begin emitting "keypress" events
  keypress(process.stdin);
  // listen for the "keypress" event
  process.stdin.on('keypress', function (ch, key) {
    if(key && key.ctrl && key.name == 'c'){
        process.stdin.pause();
    }
    if (key) {
        switch(key.name){
            case 'l' :lfm();break;
            case 'm' :msg();break;
            case 'w' :wal();break;
        }
    };
    
  });
   
  process.stdin.setRawMode(true);
  process.stdin.resume();
}
  loop();
  
  
  
  