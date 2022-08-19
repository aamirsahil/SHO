function call_event_listeners(schematic){
    document.getElementById("mass").addEventListener("input", () => {
        let mass = document.getElementById("mass").value;
        schematic.bob.mass = mass;
        set_text();
    });
    document.getElementById("k").addEventListener("input", () => {
        let k = document.getElementById("k").value;
        schematic.spring.k = k;
        set_text();
    });
    document.getElementById("x0").addEventListener("input", () => {
        let x0 = parseFloat(document.getElementById("x0").value);
        let v0 = parseFloat(document.getElementById("v0").value);
        schematic.bob.pos.x = x0;
        schematic.bob.vel.vx = v0;
        set_text();
    });
    document.getElementById("v0").addEventListener("input", () => {
        let x0 = parseFloat(document.getElementById("x0").value);
        let v0 = parseFloat(document.getElementById("v0").value);
        schematic.bob.pos.x = x0;
        schematic.bob.vel.vx = v0;
        set_text();
    });
    document.getElementById("mass_text").oninput = function() { 
        document.getElementById("mass").value = parseInt(document.getElementById("mass_text").innerHTML);
        schematic.bob.mass = mass;
    }
    document.getElementById("k_text").oninput = function() { 
        document.getElementById("k").value = parseInt(document.getElementById("k_text").innerHTML);
        schematic.spring.k = k;
    }
    document.getElementById("dt_text").oninput = function() { 
        document.getElementById("dt").value = parseInt(document.getElementById("dt_text").innerHTML);
    }
    document.getElementById("x0_text").oninput = function() { 
        document.getElementById("x0").value = parseInt(document.getElementById("x0_text").innerHTML);
        schematic.bob.pos.x = x0;
    }
    document.getElementById("v0_text").oninput = function() { 
        document.getElementById("v0").value = parseInt(document.getElementById("v0_text").innerHTML);
        schematic.bob.vel.vx = v0;
    }
}