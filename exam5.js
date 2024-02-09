import { createInterface } from 'readline';
var rl = createInterface({
    input:process.stdin,
    output:process.stdout
});


process.stdin.on('end', () => { process.exit(0); });

let n = 0
let m = 0
let q = 0

let counted = []
let pairs = {}
let madePairs = 0
let madeActions = 0

rl.on('line', (data)=> {
    if(n === 0){
        data = data.split(" ").map(e => parseInt(e))

        n = data[0]
        m = data[1]
        q = data[2]
        return
    }

    if(counted.length == 0){
        counted = data.split(" ").map(e => parseInt(e))
        return
    }

    if(madePairs < m){
        data = data.split(" ").map(e => parseInt(e))
        if(pairs[data[0]] == undefined){
            pairs[data[0]] = []
        }
        pairs[data[0]].push(data[1])

        if(pairs[data[1]] == undefined){
            pairs[data[1]] = []
        }
        pairs[data[1]].push(data[0])

        madePairs += 1
        return
    }


    if(madeActions < q){
        data = data.split(" ")

        let event = data[0]
    
        switch(event){
            case "+":
                pairs[parseInt(data[1])].forEach(element => {
                    counted[element-1] += parseInt(data[2])
                })
                break
    
            case "?":
                console.log(counted[parseInt(data[1])-1])
                break
        }

        madeActions += 1
    }
    
})