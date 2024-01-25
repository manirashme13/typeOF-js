function countVariables(...args) {
    const halghe = {
        "string": 0,
        "number": 0,
        "boolean": 0,
        "object": 0,
        "array": 0
    };

    for (const arg of args) {
        const halgh2 = Array.isArray(arg) ? 'array' : typeof arg;
        
        if (halgh2 in halghe) {
            halghe[halgh2] += 1;
        } else {
            halghe[halgh2] = 1;
        }
    }

    return halghe;
}

const a = "mani";
const b = "ali";
const c = [100, 200];
const e = 3.14;
const f = true;
const g = "23";
const h = 10;
const i = 20;
const j = 30;
const k = {
    name:"bmw",
    color:"white"};
const l = [200,300]
const variables = [a, b, c, e, f, g, h, i, j,k,l];
console.log(countVariables(...variables));