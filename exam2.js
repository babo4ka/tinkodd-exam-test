import { createInterface } from 'readline';
var rl = createInterface({
    input:process.stdin,
    output:process.stdout
});

let dataCount = 0
process.stdin.on('end', () => { process.exit(0); });

let workers = 0

rl.on('line', (data)=> {
   if(dataCount === 0){
        dataCount = parseInt(data)
        return
   }

    if(workers === 0){
        workers = parseInt(data)
        
       }else{
        if(workers === 1){
            console.log("Yes")
        }else{
            let a = data.split(" ").map(e => parseInt(e))
    
            let sum = 0
        
            a.forEach(e => sum+=e)
        
            if(sum/2 === workers-1){
                console.log("Yes")
            }else{
                console.log("No")
            }
        }
        

        workers = 0
        
       } 
})