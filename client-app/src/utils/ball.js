function Ball(x, y, radius, color) {
    if (radius === undefined) {
        radius = 40;
    }
    if (color === undefined) {
        // color = "#adfd1d";
        color = "#fd1dad";
    }
    this.x = x || 0;
    this.y = y || 0;
    this.radius = radius;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    debugger
    this.color = window.utils.parseColor(color);
    this.lineWidth = 1;
}
Ball.prototype.draw = function (context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX, this.scaleY);
    context.lineWidth = this.lineWidth;
    context.fillStyle = this.color;
    context.beginPath();
    //x, y, radius, start_angle, end_angle, anti-clockwise
    context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
    context.closePath();
    context.fill();
    if (this.lineWidth > 0) {
        context.stroke();
    }
    context.restore();
};

Ball.prototype.dance = function(action, angle) {
    this.color = `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`
    switch(action){
        case 1:
            this.y = this.y + Math.sin(angle) * 50;
            break;
        case 2:
            this.x = this.x + Math.cos(angle) * 50;
            break
        case 3:
            this.x = this.x +Math.cos(angle) * 50;
            this.y = this.y + Math.sin(angle) * 50;
            break;
        case 4:
            this.x = this.x  + Math.sin(angle) * 50;
            this.y = this.y  + Math.cos(angle) * 50;
            break;
        case 5:
            this.x = this.x + Math.sin(angle) * 50;
            this.y = this.y + Math.sin(angle) * 50;
            break;   
    }
}

export default Ball;