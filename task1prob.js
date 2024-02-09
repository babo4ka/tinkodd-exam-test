import { createInterface } from 'readline';
var rl = createInterface({
    input:process.stdin,
    output:process.stdout
});

let sum = 0;
process.stdin.on('end', ()=>{
    console.log(sum);
    process.exit(0);
});


rl.on('line', (data)=> {
    data = data.split(" ")
    sum = parseInt(data[0]) + parseInt(data[1])

    console.log(sum)
});