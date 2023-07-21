let cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
});
//Info Needed For Tests (above)

function destructivelyAppendCat(name){
    cats.push(name);
};

function destructivelyPrependCat(name){
    cats.unshift(name);
};

function destructivelyRemoveLastCat(name){
    cats.pop();
};

function destructivelyRemoveFirstCat(){
    cats.shift();
};

function appendCat(name){
    return[...cats, name];
};

function prependCat(name){
    return[name, ...cats];
};

function removeLastCat(){
    return[...cats.slice(0,2)];
};

function removeFirstCat(){
    return[...cats.slice(1,3)];
};