const s = (sketch) => {

    let x = 100;
    let y = 100;
    let r = 40;
    let d;

    sketch.setup = () => {
        sketch.createCanvas(window.innerWidth, window.innerHeight);
        d = setTimeout(draw2, 1000)
    };

    let hW = window.innerWidth / 2;
    let hH = window.innerHeight / 2;
    let pIndex = 0;

    let draw2 = async() => {
        sketch.background(255);
        d = await sleep(1000);
        if (pIndex !== patterns.length) {

            sketch.fill(255, 0, 0);
            let [xx, yy] = pos2vec(patterns[pIndex])
            console.log(xx, yy);

            let [px, py] = paddings(r + 20, yy, xx);
            sketch.ellipse(xx * hW + px, yy * hH + py, 2 * r);
            pIndex++;
        } else {
            const end = document.createElement("div");
            end.textContent = "Vége"
            end.className = "end";
            document.body.appendChild(end);
            clearTimeout(d);
            return
        }
        d = setTimeout(draw2, 2000)
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const pos2vec = (n) => {
    //decomposite
    return [n % 3, Math.floor(n / 3)]
}

let paddings = (P, i, j) => {
    const k = [
        [
            [P, P],
            [0, P],
            [-P, P]
        ],
        [
            [P, 0],
            [0, 0],
            [-P, 0]
        ],
        [
            [P, -P],
            [0, -P],
            [-P, -P]
        ],

    ]
    return k[i][j]
}
let patterns = [0, 3, 8, 4, 2, 5, 0, 3, 1, 7, 9, 6];
/*

    O O O  |  0 1 2
    O O O  |  3 4 5
    O O O  |  6 7 8

    screen poses:
    top left , top center , top right etc...

 */


const generatePattern = (n) => {
    const k = []
    let i = 0;
    while (k.length != n) {
        const r = Math.floor(Math.random() * 10);
        if (!k.slice(k.length - 2, k.length).includes(r)) {
            k.push(r)
        }
    }
    return k;
}