console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item){
    basket.push(item);
    console.log('add:', item);
    console.log('in your basket', basket);
    return true;
}



// Testing

console.log('expecting true: ', addItem('banana'));