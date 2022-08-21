function call_event_listeners(control){
    // pause button
    document.getElementById("pause").addEventListener("click", () => {
        control.paused = !control.paused;
    });
    // clear button
    document.getElementById("clear").addEventListener("click", () => {
        control.data = [];
        control.time = 0;
    });
    // mass -> range, field
    // range
    document.getElementById("mass").addEventListener("input", () => {
        set_text();
        set_values(control);
    });
    document.getElementById("mass").addEventListener("mousedown", () => {
        control.paused = true;
        document.getElementById("pause").checked = true;
    });
    // document.getElementById("mass").addEventListener("mouseup", () => {
    //     control.paused = false;
    //     document.getElementById("pause").checked = false;
    // });
    // field
    document.getElementById("mass_text").addEventListener("input", () => {
        set_range();
        set_values(control);
    });
    // document.getElementById("mass_text").oninput = function() { 
    //     document.getElementById("mass").value = parseInt(document.getElementById("mass_text").innerHTML);
    //     schematic.bob.mass = mass;
    // }    
    // k -> range, field
    // range
    document.getElementById("k").addEventListener("input", () => {
        set_text();
        set_values(control);
    });
    document.getElementById("k").addEventListener("mousedown", () => {
        control.paused = true;
        document.getElementById("pause").checked = true;
    });
    // document.getElementById("k").addEventListener("mouseup", () => {
    //     control.paused = false;
    //     document.getElementById("pause").checked = false;
    // });
    // field
    document.getElementById("k_text").addEventListener("input", () => {
        set_range();
        set_values(control);
    });
    // x0 -> range, field
    // range
    document.getElementById("x0").addEventListener("input", () => {
        set_text();
        set_values(control);
    });
    document.getElementById("x0").addEventListener("mousedown", () => {
        control.paused = true;
        document.getElementById("pause").checked = true;
    });
    // document.getElementById("x0").addEventListener("mouseup", () => {
    //     control.paused = false;
    //     document.getElementById("pause").checked = false;
    // });
    // field
    document.getElementById("x0_text").addEventListener("input", () => {
        set_range();
        set_values(control);
    });
    // v0 -> range, field
    // range
    document.getElementById("v0").addEventListener("input", () => {
        set_text();
        set_values(control);
    });
    document.getElementById("v0").addEventListener("mousedown", () => {
        control.paused = true;
        document.getElementById("pause").checked = true;
    });
    // document.getElementById("v0").addEventListener("mouseup", () => {
    //     control.paused = false;
    //     document.getElementById("pause").checked = false;
    // });
    // field
    document.getElementById("v0_text").addEventListener("input", () => {
        set_range();
        set_values(control);
    });
    // dt -> range, field
    // range
    document.getElementById("dt").addEventListener("input", () => {
        set_text();
        set_values(control);
    });
    document.getElementById("dt").addEventListener("mousedown", () => {
        control.paused = true;
        document.getElementById("pause").checked = true;
        control.stop_animation();
    });
    document.getElementById("dt").addEventListener("mouseup", () => {
        // control.paused = false;
        // document.getElementById("pause").checked = false;
        control.start_animation();
    });
    // field
    // document.getElementById("k_text").addEventListener("input", () => {
    //     set_range();
    //     set_values(control);
    // });
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
function set_range(){
    document.getElementById("mass").value = parseFloat(document.getElementById("mass_text").innerHTML);
    document.getElementById("k").value = parseFloat(document.getElementById("k_text").innerHTML);
    document.getElementById("dt").value = parseFloat(document.getElementById("dt_text").innerHTML);
    document.getElementById("x0").value = parseFloat(document.getElementById("x0_text").innerHTML);
    document.getElementById("v0").value = parseFloat(document.getElementById("v0_text").innerHTML);
}
function set_values(control){
    let mass = parseFloat(document.getElementById("mass_text").innerHTML);
    let k = parseFloat(document.getElementById("k_text").innerHTML);
    let dt = parseFloat(document.getElementById("dt_text").innerHTML);
    let x0 = parseFloat(document.getElementById("x0_text").innerHTML);
    let v0 = parseFloat(document.getElementById("v0_text").innerHTML);
    
    control.schematic.bob.mass = mass;
    control.schematic.spring.k = k;
    control.dt = dt;
    control.schematic.bob.pos.x = x0;
    control.schematic.bob.vel.vx = v0;
}