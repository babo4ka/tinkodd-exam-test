import { createInterface } from 'readline';
var rl = createInterface({
    input: process.stdin,
    output: process.stdout
});


let result = 0

process.stdin.on('end', ()=>{
    console.log(result);
    process.exit(0);
});

export const countTests = (data) =>{
    data = data.split(' ').map(d => parseInt(d));

    let countLast = data[1].toString().length;
    let smallest = 1;
    let deg = 1;
    let count = 0;

    while(smallest.toString().length <= countLast){
        if(smallest * 1 > data[1] || smallest * 9 < data[0]){
            smallest += Math.pow(10, deg);
            deg+=1;
            continue;
        }

        for(let i=0;i<10;i++){
            if(i*smallest >= data[0] && i*smallest <= data[1]){
                count+=1;
            }
        }
        
        smallest += Math.pow(10, deg);
        deg+=1;
    }

    return count;
};

rl.on('line', (data)=>{
    result = countTests(data);
    console.log(result);
});