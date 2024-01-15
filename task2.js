import { createInterface } from 'readline';
var rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

let parts = 0;

process.stdin.on('end', () =>{
    console.log(parts);
    process.exit(0);
});

export const getParts = (data) =>{
    return Math.ceil(Math.log(parseInt(data))/Math.log(2));
}

rl.on('line', (data)=> {
    parts = getParts(data)
    console.log(parts)
});