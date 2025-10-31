const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//建立蛇蛇、蘋果物件    
snake = {//身體位置    
body: [ { x: MAP_SIZE / 2, y: MAP_SIZE / 2 } ],  
//身體長度    
size: 5, 
//行進方向 
direction: { x: 0, y: -1 }, 
//畫蛇
    drawSnake: function () {
    },
    //移動蛇
    moveSnake: function () {
    },

 }

apple = {//蘋果位置
x: 5,
y: 5,
//畫蘋果
    drawApple: function () {
    },
    //放蘋果
    putApple: function () {
    },

 }
