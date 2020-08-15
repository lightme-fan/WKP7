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

// Showing the list of books 
const listOfBooks = () => {
    // Filtering books by using spread method
    const allBook = [...books];
    const html = allBook.map(book => 
        `
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.genre}</td>
            <td>${book.pages}</td>
            <td><input type="checkbox" name="${book.author}" ${book.status === 'read' ? 'checked' : ''}></td>
            <td><button class="delete" value=${book.id}>Delete</button></td>
        </tr>  `
    ).join('');
    bookList.innerHTML = html;
}

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

const showingItems = () => {
    const html = items.map(book => 
        `
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.genre}</td>
            <td>${book.pages}</td>
            <td><input type="checkbox" value="${book.id}" ${book.status === 'read' ? 'checked' : ''}></td>
            <td><button class="delete" value=${book.id}>Delete</button></td>
        </tr> 
        `    
    ).join('');
    bookList.insertAdjacentHTML('beforeend', html);
}

// Deleting items
const deleteBook = (id) => {
    items = items.filter(item => item.id == id);
    console.log(items)
}

// Mark as read
const readBook = (id) => {
    console.log(id);
    const itemStatus = items.find(item => item.id === id);
    itemStatus.status = !itemRef.status;
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
    
}

// Storing the books to local storage
const mirrorBook = () => {
    const object = JSON.stringify(items)
    localStorage.setItem('items', object);
}

//
const storeFromLocal = () => {
    const store = JSON.parse(localStorage.getItem('items'));
    if (store) {
        items.push(...store);
        bookList.dispatchEvent(new CustomEvent('bookUpdated'))
    }
}

// Add event listener the listOFBook function
window.addEventListener('DOMContentLoaded', listOfBooks);

// Listening for submit form
libraryForm.addEventListener('submit', addBooks);

//
bookList.addEventListener('bookUpdated', showingItems);

//
window.addEventListener('click', (e) => {
    if (e.target.matches('button')) {
        deleteBook(parseInt(e.target.value));
    }

    if (e.target.matches('input[type="checkbox"]')) {
        readBook(parseInt(e.target.value));
    }
});

//
bookList.addEventListener('bookUpdated', mirrorBook);

//
storeFromLocal();
