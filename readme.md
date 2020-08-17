# WKP7 - Library

### My steps

1. I declare three books to be stored in the local when nobody adds a new book.
2. I grabbed those elements which I needed to use.
3. I declared an empty array called **items**.
4. I created a function to generate the form. Inside of this I declare a new object template and push it to the **items** array.
5. I mapped the **items** to add a new book. And I listen for form submit to add a new book.
6. I set the **items** to the local storage. To do that, I had to stringify the **object** inside of the **item**. Then I stored it there. When the user add a new books, the three books and the new one is there. Although the users don't add, the three books is always stored to the list.
7. I set an iternary condition in html template for the checkbox. When the user select the status as read, the checkbox is checked. Contrary, it is not checked. I tried to work on when the book is alread stored in the list, the user can check the checkbox after they have read the book. But it still doesn't work.
8. About the delete button. I set an id as a parameter of the deleteItem function. And filter the items to remove an item. But when I compare the items.id and id parameter, they don't match to each other. So I did get the delete buttons work.

### If I had more time, I would have got the checkbox and delete button work properly as expected.

### I learnt a lot from this project.
- I konw how important to store things in local storage is. But I need to careful though.
- I know the use of **pareInt**.

### The most challenging
- To get the delete button and checkbox work.
- To store the books to the local storage.

### Even if I undersdant how to set an array objet to the local, I sitll want more clarificationabout it.

## I enjoyed this challenge. Thank you so much!
