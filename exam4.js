import { createInterface } from 'readline';
	var rl = createInterface({
	    input: process.stdin,
	    output: process.stdout
})


process.stdin.on('end', () => { process.exit(0) })

let n = 0
let k = 0

let companies = []

let filledV = 0
let vs = {}

rl.on('line', (data)=> {
    if(n === 0){
        data = data.split(" ").map(e => parseInt(e))


        n = data[0]
        k = data[1]

        return
    }

    if(companies.length < k){
        companies.push(data)
        return
    }

    if(filledV < n){
        let d = data.split(" ")

        if(d[0] == 0){
            vs[filledV + 1] = {
                    parent:parseInt(d[0]),
                    price:parseInt(d[1]),
                    name:d[2],
                    childs:{}
            }
        }else{
            
        }

        filledV += 1
        
    }



})