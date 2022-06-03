const s = ( sketch ) => {

    let x = 100;
    let y = 100;
    let r = 40;
    sketch.setup = () => {
        sketch.createCanvas(window.innerWidth, window.innerHeight);
        setTimeout(draw2, 1000)
    };
    let pIndex = 0;
    let t1,t2;

    let draw2 = ()=>{
        sketch.background(255);
        sketch.fill(255,0,0);
        sketch.ellipse(2*r + 2, 2*r+2, 2*r);

        setTimeout(draw2, 1000)
    }
    sketch.draw = async () => {


    };
};

const pos2vec =(n) => {
        //decomposite
    return [Math.floor(n / 3), n % 3]
}

let patterns = [0, 2 ,6 ,8]
/*

    O O O  |  0 1 2
    O O O  |  3 4 5
    O O O  |  6 7 8

    screen poses:
    top left , top center , top right etc...

 */
