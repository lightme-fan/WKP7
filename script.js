const books = [
    {
        id: Date.now(), 
        title: 'Little woman',
        author: 'Louisa',
        genre: 'Romantic',
        pages: 759,
        status: false,
    },
    {
        id: Date.now(),
        title: 'Harry Potter',
        author: 'J.k Rowling',
        genre: 'Fantasy fiction',
        pages: 978,
        status: true,
    },
    {
        id: Date.now(),
        title: 'Educated',
        author: 'Tara Westover',
        genre: 'Biography',
        pages: 352,
        status: true,
    }
];

const libraryForm = document.querySelector('.form');
const bookList = document.querySelector('tbody');

let items = [];

// Handling add button 
const addBooks = (e) => {
    e.preventDefault();
    const name = e.currentTarget;

    const item = {
        id: Date.now(),
        title: name.title.value,
        author: name.author.value,
        genre: name.genre.value,
        pages: name.pages.value,
        status: name.status.value
    }

    items.push(item);
    e.target.reset();

    bookList.dispatchEvent(new CustomEvent('bookUpdated'))
}

// Showing the items to the table list
const showingItems = () => {
    const html = items.map(book => 
        `
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.genre}</td>
            <td>${book.pages}</td>
            <td><input type="checkbox" value="${book.id}" ${book.status === 'read' ? 'checked' : ''}></td>
            <td><button class="delete" aria-label="Remove ${book.tile}" value=${book.id}>Delete</button></td>
        </tr> 
        `    
    ).join('');
    bookList.innerHTML = html;
}

// If the book is read, checkbox is checked
const readBook = (id) => {
    console.log(id);
    const itemStatus = items.find(item => item.id === id);
    itemStatus.status = !itemStatus.status;
    bookList.dispatchEvent(new CustomEvent('itemsUpdated'));
}

// Deleting items
const deleteItem = (id) => {
    console.log('id: ', id)
    items = items.filter(item => {
        return item.id !== id;
    });
    bookList.dispatchEvent(new CustomEvent('itemsUpdated'));
}

// Stringifying the books in order to store the to local storage
const mirrorBook = () => {
    const object = JSON.stringify(items)
    localStorage.setItem('items', object);
}

// Storing the objects to the local storage
const storeFromLocal = () => {
    const array = JSON.parse(localStorage.getItem('items'));
    // If array is truthy, push the array into items.
    if (array) {
        items.push(...array);
        bookList.dispatchEvent(new CustomEvent('bookUpdated'))
    } 
    // If array is not truthy, push the books.
    else {
        items.push(...books);
        mirrorBook();
        bookList.dispatchEvent(new CustomEvent('bookUpdated'))
    }
}

// Add event listener the showing items function
window.addEventListener('DOMContentLoaded', showingItems);

// Listening for submit form
libraryForm.addEventListener('submit', addBooks);

// Add event listener to add the new book to the tbody of the table
bookList.addEventListener('bookUpdated', showingItems);

// Event listener to mirror the books
bookList.addEventListener('bookUpdated', mirrorBook);

// Event listener for storing the books to local storage
storeFromLocal();

// Event listener for checkbox and delete button
bookList.addEventListener('click', (e) => {
    // Checkbox
    if (e.target.matches('input[type="checkbox"]')) {
        readBook(parseInt(e.target.value));
    }

    // Delete button
    if (e.target.matches('button.delete')) {
        deleteItem(parseInt(e.target.value));
    }
});

