class Plot {
    constructor(){
        this.canvas = document.getElementById("plot");
        this.ctx = this.canvas.getContext("2d");
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }
    // clear frame
    clear_frame(){
        this.ctx.clearRect(0, 0, this.width, this.height); 
    }
    // draw back ground
    draw_background(){
        // background
        this.ctx.fillStyle = "azure";
        this.ctx.fillRect(0, 0, this.width, this.height);
        // title
        this.ctx.font = "15px Comic Sans MS";
        this.ctx.fillStyle = "Black";
        this.ctx.textAlign = "center";
        this.ctx.fillText("Graph", this.width/2, 15);
        // x - axis
        this.ctx.strokeStyle = 'blue'
        this.ctx.beginPath();
        this.ctx.moveTo(10, this.height/2);
        this.ctx.lineTo(this.width-10, this.height/2);
        this.ctx.stroke();
        // y - axis
        this.ctx.strokeStyle = 'blue'
        this.ctx.beginPath();
        this.ctx.moveTo(10, 10);
        this.ctx.lineTo(10, this.height-10);
        this.ctx.stroke();
    }
    // draw graph
    draw_graph(plot_data){
        if(plot_data.length == 0)
            return;
        plot_data = this.convert_data(plot_data);
        this.ctx.strokeStyle = 'red'
        this.ctx.beginPath();
        this.ctx.moveTo(plot_data[0][0], plot_data[0][1]);
        for(let i=1; i<plot_data.length; i++)
            this.ctx.lineTo(plot_data[i][0], plot_data[i][1]);
        this.ctx.stroke(); 
    }
    // convert data to graph coordinates
    convert_data(plot_data){
        // x-0=10, x-10=width
        let x1 = 10;
        let dx1 = 0;
        let x2 = this.width-10;
        let dx2 = 10;
        let mx = (dx2 - dx1)/(x2 - x1);
        let x_convert = (d) => {
            return (d - dx1)/mx + x1;
        }
        // y-0=height/2, y-100=10
        let y1 = this.height/2;
        let dy1 = 0;
        let y2 = 10;
        let dy2 = 100;
        let my = (dy2 - dy1)/(y2 - y1);
        let y_convert = (d) => {
            return (d - dy1)/my + y1;
        }
        plot_data = plot_data.map( (d) => {
            let x = x_convert(d[0]);
            let y = y_convert(d[1]);
            return [x, y];
        });
        return plot_data;
    }
}