// event listeners and animation
var hit_right = false;
function start() {
    let id = null;
    reset(id);
    id = setInterval(animate, 5);
    function animate() {
        // clear frame
        ctx_schematic.clearRect(0, 0, canvas_schematic.width, canvas_schematic.height); 
        // title
        ctx_schematic.font = "15px Comic Sans MS";
        ctx_schematic.fillStyle = "white";
        ctx_schematic.textAlign = "center";
        ctx_schematic.fillText("Schematic", canvas_schematic.width/2, 15);
        // wall
        ctx_schematic.fillStyle = "grey";
        ctx_schematic.fillRect(wall_rect.x, wall_rect.y, wall_rect.width, wall_rect.height);
        // ground
        ctx_schematic.fillRect(ground_rect.x, ground_rect.y, ground_rect.width, ground_rect.height);
        // bob
        ctx_schematic.fillStyle = "yellow";
        ctx_schematic.fillRect(bob_rect.x, bob_rect.y, bob_rect.width, bob_rect.height);
        // spring
        ctx_schematic.strokeStyle = 'blue'
        ctx_schematic.beginPath();
        ctx_schematic.moveTo(spring_rect.x1, spring_rect.y1);
        for(let i=0; i<(2*no_of_spikes); i++){
            let j = [1, 0, -1, 0];
            let x_stride = (bob_rect.x - wall_rect.width)/2/no_of_spikes;
            let y_stride = j[i%4]*Math.sqrt(Math.pow(full_spring_length/2/no_of_spikes, 2) - Math.pow(x_stride, 2));
            ctx_schematic.lineTo(spring_rect.x1 + (i + 1)*x_stride, spring_rect.y1 - y_stride);
        }
        ctx_schematic.stroke();
        // 
        if((bob_rect.x - wall_rect.width) >= full_spring_length){
            hit_right = true;
        } 
        if(bob_rect.x <= wall_rect.width){
            hit_right = false;
        }
        if(hit_right){
            bob_rect.x -= 1;
        }
        else{
            bob_rect.x += 1;
        }
    }
} 

function reset(id) {
    clearInterval(id);
}

start();