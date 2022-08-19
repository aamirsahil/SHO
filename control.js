// event listeners and animation
function start() {
    set_text();
    let initial_values = {
        mass: parseFloat(document.getElementById("mass").value),
        k: parseFloat(document.getElementById("k").value),
        x0: parseFloat(document.getElementById("x0").value),
        v0: parseFloat(document.getElementById("v0").value),
    }
    console.log(initial_values);
    let schematic = new Schematic(initial_values);
    let id = null;
    let dt = document.getElementById("dt").value;
    let paused = false;
    reset(id);
    id = setInterval(animate, dt*1000);
    function animate(){
        if(!paused){
            schematic.clear_frame();
            schematic.draw_background();
            schematic.draw_bob();
            schematic.draw_spring();
            let omega_2 = schematic.spring.k/schematic.bob.mass;
            schematic.bob.calculate_velocity(omega_2, dt);
            schematic.bob.move();
        }
    }
    // call event listeners
    call_event_listeners(schematic, id, animate);
    // pause simulation
    document.getElementById("pause").addEventListener("click", () => {
        paused = !paused;
    });
    // time step control
    document.getElementById("dt").addEventListener("input", () => {
        let dt = document.getElementById("dt").value;
        reset(id);
        set_text();
        id = setInterval(animate, dt*1000);
    });
}

function reset(id) {
    clearInterval(id);
}
function set_text(){
    let mass = document.getElementById("mass").value;
    let k = document.getElementById("k").value;
    let dt = document.getElementById("dt").value;
    let x0 = parseFloat(document.getElementById("x0").value);
    let v0 = parseFloat(document.getElementById("v0").value);
    
    document.getElementById("mass_text").innerHTML = mass;
    document.getElementById("k_text").innerHTML = k;
    document.getElementById("dt_text").innerHTML = dt;
    document.getElementById("x0_text").innerHTML = x0;
    document.getElementById("v0_text").innerHTML = v0;
}
start();