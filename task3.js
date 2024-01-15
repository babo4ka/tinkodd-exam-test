import { createInterface } from 'readline';
var rl = createInterface({
    input: process.stdin,
    output: process.stdout
});


let minimum = 0;

process.stdin.on('end', ()=>{
    console.log(minimum);
    process.exit(0);
});

export const countSpaces = (lines)=>{
    let min = 0;
    let data = lines[0].split(' ').map(d => parseInt(d));
    let floors = lines[1].split(' ').map(f => parseInt(f));
    let worker = parseInt(lines[2])-1;
    let lastFloor = floors[floors.length-1]

    if(floors[worker] - 1 < data[1] || lastFloor - floors[worker] < data[1]){
        min+=lastFloor-1
    }else{
        min+= floors[worker]-1<lastFloor-floors[worker]?
        (floors[worker]-1) + (lastFloor-1)
        :(lastFloor-floors[worker]) +(lastFloor-1);
    }

    return min;
}

let lines = []
rl.on('line', line=>{
    lines.push(line)

    if(lines.length === 3){
        minimum = countSpaces(lines)
        console.log(minimum)
    }
})
