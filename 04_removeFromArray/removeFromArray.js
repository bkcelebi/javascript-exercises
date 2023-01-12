const removeFromArray = function(array, ...removedItems) {

    for (const removedItem of removedItems) {

        const index = array.indexOf(removedItem);

        // console.log(index)
        if (index === -1){
            continue;
        }

        array.splice(index, 1);

    }

    console.log(array);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
