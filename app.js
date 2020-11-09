//Javascript Skilaverkefni 4
// Elfar Snær Arnarson

var data = [
    {
        item: 'USB',
        price: 15
    },
    {
        item: 'Mouse',
        price: 55,
    },
    {
        item: 'Keyboard',
        price: 85,
    },
    {
        item: '360hz Screen',
        price: 140,
    },
    {
        item: 'Computer',
        price: 250,
    }
];





// find max price in array
var maxInArray = 0;

for(i=0;i<data.length;i++){
    if(maxInArray < data[i].price){
        var maxInArray = data[i].price;
    }
}


// find min price in array
var minInArray = 0;
var maxHelper = maxInArray;

for(i=0;i<data.length;i++){
    // 1. if 400 is bigger than price, data[0] = 10
    // 2-5. if 10 is bigger than price
    if(maxHelper > data[i].price){
        // mininarray = 10
        var minInArray = data[i].price;
        // 400 -> 10
        maxHelper = data[i].price;
    }
}

// find middle value

var middleValue = (maxInArray + minInArray) / 2;





// Slider created

var divSlider = document.getElementById("slider");
var slider = document.createElement("input");


slider.type = "range";
slider.id = 'rangeInput';
slider.max = maxInArray;
slider.min = minInArray;
slider.value = middleValue;


divSlider.appendChild(slider);





// Value Input created
var valueInput = document.createElement("input");

valueInput.type = "text";
valueInput.id = "inputValue";
valueInput.value = slider.value;

divSlider.appendChild(valueInput);




// SLIDER FUNCTIONS **



// Showing changes to value

// get value from slider and call function updateInput
document.getElementById("rangeInput").oninput = function(){
    updateInput(this.value)
}

// get value from textbox and call function updateSlider
document.getElementById("inputValue").oninput = function(){
    updateSlider(this.value)
}


// updates textbox value to the same as the slider
function updateInput(val){
    document.getElementById('inputValue').value=val;
    showData(val);
}

// updates slider value to the same as the textbox
function updateSlider(val){
    slider.value = val;
    showData(val);
}





// TABLE **
var table = document.getElementById('table');

// creating table head items
var first_tr = document.createElement('tr');
var first_th = document.createElement('th');
var itemTable = document.createTextNode("Item");
var second_th = document.createElement('th');
var priceTable = document.createTextNode("Price");


table.appendChild(first_tr);
first_tr.appendChild(first_th).appendChild(itemTable);
first_tr.appendChild(second_th).appendChild(priceTable);


// data in table

for(i in data){
    let trTable = document.createElement("tr");
    // put id attribute on new elemnt so i can find it.
    trTable.setAttribute("id", i);
    trTable.style.display = "none";

    table.appendChild(trTable);

    let tdItem = document.createElement("td");
    let tdPrice = document.createElement("td");

    let item = document.createTextNode(data[i].item)
    let Price = document.createTextNode(data[i].price)


    trTable.appendChild(tdItem).appendChild(item);
    trTable.appendChild(tdPrice).appendChild(Price);
    if(slider.value <= data[i].price){
        trTable.style.display = "table-row";
    }

}

// show data depending on slider value
function showData(val){
    for(i in data){
        if(val <= data[i].price){
            // get the id of previous created elements
           document.getElementById(i).style.display = 'table-row';
        } else {
            document.getElementById(i).style.display = 'none';
        }
    }


}