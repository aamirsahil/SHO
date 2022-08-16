var canvas_schematic = document.getElementById("schematic");
var ctx_schematic = canvas_schematic.getContext("2d");
// background
ctx_schematic.fillStyle = "black";
ctx_schematic.fillRect(0, 0, canvas_schematic.width, canvas_schematic.height);
// title
ctx_schematic.font = "15px Comic Sans MS";
ctx_schematic.fillStyle = "white";
ctx_schematic.textAlign = "center";
ctx_schematic.fillText("Schematic", canvas_schematic.width/2, 15);
// schematic objects->wall & ground
var wall_rect = {
    x: 0, y: 0,
    width: canvas_schematic.width/10, height: canvas_schematic.height
};
var ground_rect = {
    x: wall_rect.width, y: canvas_schematic.height/1.5,
    width: canvas_schematic.width - wall_rect.width, height: canvas_schematic.height - canvas_schematic.height/1.5
};
ctx_schematic.fillStyle = "grey";
// wall
ctx_schematic.fillRect(wall_rect.x, wall_rect.y, wall_rect.width, wall_rect.height);
// ground
ctx_schematic.fillRect(ground_rect.x, ground_rect.y, ground_rect.width, ground_rect.height);
// spring
// bob
ctx_schematic.fillStyle = "yellow";
var equilibrium_pos = 150;
var bob_height = 20;
var bob_width = 20;
var bob_rect = {
    x: equilibrium_pos - bob_width/2, y: ground_rect.y - bob_height,
    width: bob_width, height: bob_height
};
ctx_schematic.fillRect(bob_rect.x, bob_rect.y, bob_rect.width, bob_rect.height);