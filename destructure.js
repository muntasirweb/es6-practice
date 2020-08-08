const friends = {
    name: 'Rownak', 
    age: 26, 
    hobby: 'sleeping',
    info: {address: 'Gazipur', hometown:'Sirajganj'}
};

const {name} = friends;
const {hometown} = friends.info;

console.log(name);
console.log(hometown);