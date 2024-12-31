// Selecting DOM elements for the form and table
let title = document.querySelector('#title');
let author = document.querySelector('#author');
let body = document.querySelector('#body');
let form = document.querySelector('#post-form');
let tbody = document.querySelector('#post-list');

// Class representing a single post
class Post {
    constructor(title, author, body) {
        this.title = title;
        this.author = author;
        this.body = body;
    }
}

// Class for UI-related tasks
class UI {
    // Add a post to the list (table body)
    addPostTolist(post) {
        let tr = document.createElement('tr');
        let th = document.createElement('th');
        let td = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let i = document.createElement('i');

        th.textContent = post.title;
        td.textContent = post.author;
        td2.textContent = post.body;
        i.className = 'delete fas fa-times text-danger';

        td3.appendChild(i);
        tr.appendChild(th);
        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tbody.appendChild(tr);
    }

    // Delete a post from the list
    deletePost(e) {
        e.parentElement.parentElement.remove();
    }

    // Clear input fields
    clearFields() {
        title.value = '';
        author.value = '';
        body.value = '';
    }

    // Show alert message
    showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;

        div.appendChild(document.createTextNode(message));

        const col = document.querySelector('.col-sm-8');
        col.insertBefore(div , form);

        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

// Class for storing and retrieving posts from local storage
class Store {
    // Retrieve posts from local storage
    static getPost() {
        let posts;
        if (localStorage.getItem('posts') === null) {
            posts = [];
        } else {
            posts = JSON.parse(localStorage.getItem('posts'));
        }
        return posts;
    }

    // Add a new post to local storage
    static addPost(post) {
        const posts = Store.getPost();
        posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));
    }

    // Display all posts from local storage to the UI
    static displayPosts() {
        const posts = Store.getPost();

        if (Array.isArray(posts) && posts.length > 0) {
            posts.forEach(function(post) {
                const ui = new UI();

                // Add post to UI
                ui.addPostTolist(post);
            });
        } else {
            console.error('No posts found or posts is not an array');
        }
    }

    // Delete a post from local storage
    static deletPost(title) {
        const posts = Store.getPost();

        posts.forEach(function(post, index) {
            if (post.title === title) {
                posts.splice(index, 1);
            }
        });
        localStorage.setItem('posts', JSON.stringify(posts));
    }
}

// Event: Display posts when the DOM is loaded
document.addEventListener('DOMContentLoaded', Store.displayPosts);

// Event: Add a post
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const post = new Post(title.value, author.value, body.value);
    const ui = new UI();

    // Validate input fields
    if (title.value === '' || author.value === '' || body.value === '') {
        ui.showAlert('تمامی فیلد ها الزامی هستند', 'danger');
    } else {
        ui.showAlert('پست با موفقیت ایجاد شد', 'success');

        ui.addPostTolist(post);
        ui.clearFields();
        Store.addPost(post);
    }
});

// Event: Remove a post
tbody.addEventListener('click', (e) => {
    const ui = new UI();

    if (e.target.classList.contains('delete')) {
        const tr = e.target.parentElement.parentElement;
        const title = tr.firstElementChild.textContent;

        Store.deletPost(title);
        ui.deletePost(e.target);
        ui.showAlert('پست با موفقیت حذف شد', 'success');
    }
});



