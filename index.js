import readline from "readline";

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let total = 0;
process.stdin.on('end', () => { console.log(total); process.exit(0); });
process.stdin.resume()
rl.on('line', function (data) {
        data = data.split(' ');
        total += parseInt(data[0]) || 0;
        total += parseInt(data[1]) || 0;

        // console.log(total)
});