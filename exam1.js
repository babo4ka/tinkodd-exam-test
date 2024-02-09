import { createInterface } from 'readline';
	var rl = createInterface({
	    input: process.stdin,
	    output: process.stdout
	});

process.stdin.on('end', () => { process.exit(0); });

let lines = []

let t = 0

rl.on('line', (data)=> {
    if ( t === 0){
        t = parseInt(data)
        return
    }

    if(lines.length < t){
        lines.push(data)
    }

    if(lines.length === t){
       
        for(let i=0;i<lines.length;i++){
            if(lines[i].toString().length !== 7){
                console.log("No")
                continue
            }
            
            let letters = ["T", "I", "N", "K", "O", "F", "F"]
            
            lines[i].toString().toUpperCase().split("").forEach(element => {
                let id = letters.indexOf(element)
        
                if(id < 0){
                    console.log("No")
                    return
                }

                letters.splice(id, 1)
            });
            console.log("Yes")
        }
    }
})