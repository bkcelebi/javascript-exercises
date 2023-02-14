const getTheTitles = function(books) {

    const len = books.length;

    let nameOfBooks = [];

    for(let i = 0; i < len; i++){
        nameOfBooks.push(books[i].title); 
    };
    
    return nameOfBooks;
};

// Do not edit below this line
module.exports = getTheTitles;
