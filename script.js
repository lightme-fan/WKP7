const books = [
    {
        id: 'Litle woman',
        title: 'Little woman',
        author: 'Louisa',
        genre: 'Romantic',
        pages: 759,
        status: false,
    },
    {
        id: 'Harry Potter',
        title: 'Harry Potter',
        author: 'J.k Rowling',
        genre: 'Fantasy fiction',
        pages: 978,
        status: true,
    },
    {
        id: 'Educated',
        title: 'Educated',
        author: 'Tara Westover',
        genre: 'Biography',
        pages: 352,
        status: true,
    }
];

const form = document.querySelector('form');
const input = form.querySelectorAll('input');
// const title = form.querySelectorAll('.title');
// const author = form.querySelectorAll('.author');
// const genre = form.querySelectorAll('.genre');
// const pages = form.querySelectorAll('.pages');
const select = form.querySelector('select');
const bookList = document.querySelector('tbody');
const addbutton = form.querySelector('.add-btn');

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
            <td><input type="checkbox" name="${book.author}" id="${book.id}" ${book.status ? 'checked' : ''}></td>
            <td><button class="delete">Delete</button></td>
        </tr>  `
    ).join('');
    bookList.innerHTML = html;
}

// Handling add button 
const addBooks = (e) => {
    e.preventDefault();
    const title = event.target.item.value;

    // const html = `
    // <tr>
    //     <td>${title}</td>
    //     <td>${author}</td>
    //     <td>${genre}</td>
    //     <td>${pages}</td>
    //     <td><input type="checkbox" name="${title}" id="${title}" ${status ? 'checked' : ''}></td>
    //     <td><button class="delete">Delete</button></td>
    // </tr>  
    // `;
    // bookList.insertAdjacentHTML('beforeend', html);
}

// Add event listener the listOFBook function
window.addEventListener('DOMContentLoaded', listOfBooks);

// Listening to the add button
addbutton.addEventListener('click', addBooks);
