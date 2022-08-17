var canvas_schematic = document.getElementById("schematic");
var ctx_schematic = canvas_schematic.getContext("2d");
// background
ctx_schematic.fillStyle = "black";
ctx_schematic.fillRect(0, 0, canvas_schematic.width, canvas_schematic.height);
// schematic objects->wall & ground
var wall_rect = {
    x: 0, y: 0,
    width: canvas_schematic.width/10, height: canvas_schematic.height
};
var ground_rect = {
    x: wall_rect.width, y: canvas_schematic.height/1.5,
    width: canvas_schematic.width - wall_rect.width, height: canvas_schematic.height - canvas_schematic.height/1.5
};
// bob
var bob_pos = 120;
var bob_height = 20;
var bob_width = 20;
var bob_rect = {
    x: bob_pos - bob_width/2, y: ground_rect.y - bob_height,
    width: bob_width, height: bob_height
};
// spring
var no_of_spikes = 10
var full_spring_length = 150 /* x axis stride = bos_rect.x/2/no_of_spike 
                                y axis stride = sqrt(x_stride**2 + (full_spring_length/2/no_of_spikes)**2) */
var spring_rect = {
    x1: wall_rect.width, y1: ground_rect.y - bob_rect.height/2,
    x2: bob_rect.x, y2: ground_rect.y - bob_rect.height/2
};

// canvas_schematic.addEventListener("mousemove", function(e) { 
//     var cRect = canvas_schematic.getBoundingClientRect();        // Gets CSS pos, and width/height
//     var canvasX = Math.round(e.clientX - cRect.left);  // Subtract the 'left' of the canvas 
//     var canvasY = Math.round(e.clientY - cRect.top);   // from the X/Y positions to make  
//     ctx_schematic.clearRect(0, 0, canvas_schematic.width, canvas_schematic.height);  // (0,0) the top left of the canvas
//     ctx_schematic.fillText("X: "+canvasX+", Y: "+canvasY, 10, 20);
// });