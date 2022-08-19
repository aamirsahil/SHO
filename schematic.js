class Bob {
    constructor(mass, x0, v0){
        // pos wrt bob coordinates
        this.width = 20;
        this.height = 20;
        this.pos = {
            x: x0, y: 0
        };
        this.vel = {
            vx: v0, vy: 0
        };
        this.mass = mass;
    }
    move(){
        this.pos.x += this.vel.vx;
        // this.pos.y += this.vel.vy;
    }
    reflect(amplitude, max, wall){
        if(this.pos.x >= amplitude || this.pos.x >= max){
            this.vel.vx = -1;
        } 
        else if(this.pos.x <= -amplitude || this.pos.x <= wall){
            this.vel.vx = +1;
        } 
    }
    calculate_velocity(omega_2, dt){
        this.vel.vx += (-omega_2)*this.pos.x*dt;
    }
}
class Spring {
    constructor(k){
        this.no_of_spikes = 10;
        this.full_spring_length = 200;
        this.equilibrium = 100;// wrt from wall
        this.amplitude = 10//wrt from equilibrium
        this.k = k;
    }
    vertex(length){
        // length = bobPosX - wallWidth
        // pos wrt spring coordinate
        let vertex = [[0, 0]];
        for(let i=0; i<(2*this.no_of_spikes); i++){
            let j = [1, 0, -1, 0];
            let x_stride = length/2/this.no_of_spikes;
            let y_stride = j[i%4]*Math.sqrt(Math.pow(this.full_spring_length/2/this.no_of_spikes, 2) - Math.pow(x_stride, 2));
            vertex.push([x_stride + vertex[i][0], y_stride]);
        }
        return vertex;
    }
}
class Schematic {
    constructor(initial_values){
        this.canvas = document.getElementById("schematic");
        this.ctx = this.canvas.getContext("2d");
        this.bob = new Bob(initial_values.mass, initial_values.x0, initial_values.v0);
        this.spring = new Spring(initial_values.k);
        this.wall = {
            x0: 0, y0: 0,
            width: this.canvas.width/10, height: this.canvas.height
        };
        this.ground = {
            x0: this.wall.width, y0: this.canvas.height/1.5,
            width: this.canvas.width - this.wall.width, height: this.canvas.height - this.canvas.height/1.5
        };
    }
    // clear frame
    clear_frame(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); 
    }
    // draw back ground
    draw_background(){
        // background
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        // title
        this.ctx.font = "15px Comic Sans MS";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.fillText("Schematic", this.canvas.width/2, 15);
        // wall
        this.ctx.fillStyle = "grey";
        this.ctx.fillRect(this.wall.x0, this.wall.y0, this.wall.width, this.wall.height);
        // ground
        this.ctx.fillRect(this.ground.x0, this.ground.y0, this.ground.width, this.ground.height);
    }
    // draw bob
    draw_bob(){
        let to_canvas_axis = (pos) => {
            return pos + this.spring.equilibrium + this.wall.width;
        }
        let bob_rect = {
            x0: to_canvas_axis(this.bob.pos.x) - this.bob.width/2, y0: this.ground.y0 - this.bob.height,
            width: this.bob.width, height: this.bob.height
        }
        this.ctx.fillStyle = "yellow";
        this.ctx.fillRect(bob_rect.x0, bob_rect.y0, bob_rect.width, bob_rect.height);
    }
    // draw spring
    draw_spring(){
        let to_canvas_axis = (pos_x, pos_y) => {
            return [pos_x + this.wall.width, this.ground.y0 - (this.bob.height/2 + pos_y)];
        }
        let vertex = this.spring.vertex(this.bob.pos.x + this.spring.equilibrium - this.bob.width/2);

        this.ctx.strokeStyle = 'blue'
        this.ctx.beginPath();
        let pos = to_canvas_axis(vertex[0][0], vertex[0][1]);
        this.ctx.moveTo(pos[0], pos[1]);
        for(let i=1; i<vertex.length; i++){
            pos = to_canvas_axis(vertex[i][0], vertex[i][1]);
            this.ctx.lineTo(pos[0], pos[1]);
        }
        this.ctx.stroke();
    }
}