"use strict";

alert("Draw your space invader here");


let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

backGround();
drawBoxes();

function backGround(){

context.fillStyle = 'black';
    context.beginPath();
    context.fillRect(25, 25, 300, 300);
    context.stroke();

}

function drawBoxes(){
    context.fillStyle = 'lime';
    context.beginPath();
    context.fillRect(50, 50, 50, 100);
    context.stroke();

    context.beginPath();
    context.fillRect(150, 50, 50, 50);
    context.stroke();

    context.beginPath();
    context.fillRect(250, 50, 50, 100);
    context.stroke();


    context.beginPath();
    context.fillRect(100, 150, 150, 100);
    context.stroke();


    context.beginPath();
    context.fillRect(100, 250, 50, 50);
    context.stroke();

    context.beginPath();
    context.fillRect(200, 250, 50, 50);
    context.stroke();
    
}