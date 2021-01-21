class MysteriousObject{
    constructor(){
        this.image = loadImage("apple.png");
        this.visibility = 255;
    }
    display(){
        this.visibility = this.visibility - 5;
        tint(255,this.visibility);
        image(this.image,Math.random(500,500),Math.random(500,500));
    }
}