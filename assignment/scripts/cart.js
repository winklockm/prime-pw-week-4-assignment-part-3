console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function addItem(item){
    basket.push(item);
    console.log('add:', item);
    console.log('in your basket', basket);
    return true;
} // end addItem

function empty() {
    basket = [];
    console.log('basket emptied:')
    return basket;   //instructions did not say to do a return but I did here
} // end empty

function isFull()   {
    if(basket.length < maxItems){
        return false;
    }
    else{
        return true;
    }
} // end isFull


function listItems(){
    for(item of basket){
        console.log(item);
    }
} // end listItems



// Testing

console.log('expecting true:', addItem('banana'));
console.log('expecting true:', addItem('spinach'));
console.log('expecting true:', addItem('strawberries'));

console.log(listItems()); //console shows "undefined" because function's return is not defined
console.log('expecting []', empty());


console.log('testing isFull- expecting false', isFull());
console.log(addItem('grapes'));
console.log(addItem('milk'));
console.log(addItem('apples'));
console.log('testing isFull- expecting false', isFull());
console.log(addItem('blueberries'));
console.log(addItem('kiwi'));
console.log('testing isFull- expecting true', isFull());