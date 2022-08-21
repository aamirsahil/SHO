// control class
class Control {
    constructor(){
        this.input_values = {
            mass: parseFloat(document.getElementById("mass").value),
            k: parseFloat(document.getElementById("k").value),
            x0: parseFloat(document.getElementById("x0").value),
            v0: parseFloat(document.getElementById("v0").value),
        }
        this.id = null;
        this.paused = true;
        this.time = 0;
        this.dt = parseFloat(document.getElementById("dt").value);
        this.animate = () => {
            this.draw();
            if(!this.paused)
                this.update();
        }
        // schematic
        this.schematic = new Schematic(this.input_values);
        // plot
        this.plot = new Plot();
        this.data = [];
    }
    draw(){
        // schematic
        this.schematic.clear_frame();
        this.schematic.draw_background();
        this.schematic.draw_bob();
        this.schematic.draw_spring(); 
        // plot
        this.plot.clear_frame();
        this.plot.draw_background();
        this.plot.draw_graph(this.data);
    }
    update(){
        this.time += this.dt;
        this.data.push([this.time, this.schematic.bob.pos.x]);
        console.log(this.data);
        let omega_2 = this.schematic.spring.k/this.schematic.bob.mass;
        this.schematic.bob.calculate_velocity(omega_2, this.dt);
        this.schematic.bob.move();
    }
    start_animation(){
        this.id = setInterval(this.animate, this.dt*1000);
    }
    stop_animation(){
        clearInterval(this.id);
    }
}
function start(){
    let control = new Control();
    call_event_listeners(control);
    control.start_animation();
}

set_text();
start();