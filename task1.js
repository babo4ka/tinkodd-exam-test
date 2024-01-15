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

export const countMoney = (data) =>{
    data = data.split(' ').map(d => parseInt(d));

    return data[0] + ((data[3] - data[1]) >0 ?
    data[2] * (data[3] - data[1]) : 0)
}

rl.on('line', (data)=> {
    sum += countMoney(data)

    console.log(sum)
});


export default { countMoney }