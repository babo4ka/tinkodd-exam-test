import { createInterface } from 'readline';
var rl = createInterface({
    input:process.stdin,
    output:process.stdout
})

process.stdin.on('end', () => { process.exit(0) })

let n = 0
let q = 0

let a = []

let madeReqs = 0

rl.on('line', (data)=> {
    if(n === 0){
        data = data.split(" ").map(e => parseInt(e))

        n = data[0]
        q = data[1]
        return
    }

    if(a.length === 0){
        a = data.split(" ").map(e => parseInt(e))
        return
    }

    if(madeReqs < q){
        data = data.split(" ")

        let event = data[0]

        switch(event){
            case "+":
                a = a.map((e, i) => {
                    if(i >= parseInt(data[1])-1 && i <= parseInt(data[2])-1){
                        e += parseInt(data[3])
                    }
                    return e
                })
                break

            case "?":
                let ai = Math.max.apply(null, a.slice(parseInt(data[1])-1, parseInt(data[2])))
                console.log(Math.min(ai, parseInt(data[3]) * (a.indexOf(ai) + 1) + parseInt(data[4])))
                break
        }

        madeReqs += 1
    }
})