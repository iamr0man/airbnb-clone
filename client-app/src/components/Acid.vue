<template>
    <canvas id="canvas" width="1920" height="1080"></canvas>
</template>

<script>
import '../utils/utils.js'
import Ball from '../utils/ball.js'
export default {
    mounted(){
        debugger
        let canvas = document.getElementById('canvas'),
            mouse = window.utils.captureMouse(canvas),
            context = canvas.getContext('2d'),
            ball = new Ball(),
            ball1 = new Ball(),
            ball2 = new Ball(),
            ball3 = new Ball(),
            ball4 = new Ball(),
            angle = 0;

        const array = []
        for(let i = 0; i < 30; i++){
            array.push(new Ball(Math.random() * canvas.width, Math.random() * canvas.height))
        }

        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;

        ball1.x = canvas.width / 4;
        ball1.y = canvas.height / 4;
        
        ball2.x = canvas.width / 1.3;
        ball2.y = canvas.height / 4;
        
        ball3.x = canvas.width / 4;
        ball3.y = canvas.height / 1.3;
        
        ball4.x = canvas.width / 1.3;
        ball4.y = canvas.height / 1.3;


        (function drawFrame() {
            window.requestAnimationFrame(drawFrame, canvas);
            context.clearRect(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * canvas.width / 4, Math.random() * canvas.height / 4);

            ball.y = canvas.height / 2 + Math.sin(angle) * 50;

            ball1.x = canvas.width / 4 + Math.cos(angle) * 50;
            ball1.color = `rgb(${Math.random()*16},${Math.random()*16},${Math.random()*70})`

            ball2.x = canvas.width / 1.3+ Math.cos(angle) * 50;
            ball2.y = canvas.height / 4 + Math.sin(angle) * 50;
            ball2.color = `rgb(${Math.random()*17},${Math.random()*17},${Math.random()*50})`

            ball3.x = canvas.width / 4 + Math.sin(angle) * 50;
            ball3.y = canvas.height / 1.3 + Math.cos(angle) * 50;
            ball3.color = `rgb(${Math.random()*18},${Math.random()*18},${Math.random()*200})`

            ball4.x = canvas.width / 1.3 + Math.sin(angle) * 50;
            ball4.y = canvas.height / 1.3 + Math.sin(angle) * 50;
            ball4.color = `rgb(${Math.random()*19},${Math.random()*19},${Math.random()*228})`
            
            angle += 1;

            ball.draw(context);
            ball1.draw(context)
            ball2.draw(context)
            ball3.draw(context)
            ball4.draw(context)

            array.forEach(v => v.draw(context))
            array.forEach(v => {
                v.dance(parseInt(Math.random() * 5), angle)

                context.beginPath();
                context.strokeStyle = "#adfd1d";
                context.moveTo(v.x, v.y);
                // context.quadraticCurveTo(v.x, v.y, arr[i+1].x, arr[i+1].y)
                context.lineTo(mouse.x, mouse.y);
                context.closePath()
                context.stroke();
            })
        }());
    }
}
</script>

<style>

</style>