const fish = {
    name: 'hilsa',
    color: 'yellow',
    age: 24,
    price: 4000
}

// const name = fish.name;
// console.log(name);

const {price} = fish;
console.log(price);


const {version} = {version: 2.0, total: 'all the best'};
console.log(version);

const {color} = fish;
console.log(color);


//  array distructarig

const [first, second] = [20, 30, 52, 24, 65];
console.log(first);

const nayoks = ['bappi', 'anonto', 'raj'];
const [king, kong, supper] = nayoks;
console.log(kong);

function getArray (){
    return ['Alim', 'Halim'];
}

const [baba, chacha] = getArray();
console.log(chacha, baba);
