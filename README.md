# Post Management System
A simple web-based application for managing posts. This project allows users to create, display, and delete posts, all while using local storage to persist data.

## Features
Add Posts: Users can add new posts by providing a title, author, and body content.

Display Posts: All posts are displayed in a table format.

Delete Posts: Users can delete posts by clicking the delete icon next to each post.

Persist Posts: Posts are stored in the browser's local storage and persist between page reloads.

## Technologies Used
HTML

CSS (Bootstrap for styling)

JavaScript (ES6)

Local Storage

## Getting Started
To get started with this project, follow these steps:

Clone the repository:

sh
git clone https://github.com/aria-chalipa/add-post-OOP.git
cd post-management-system
Open the index.html file in your browser to start using the application.

## Code Overview
### Post Class
Represents a single post with a title, author, and body.

javascript
class Post {
    constructor(title, author, body) {
        this.title = title;
        this.author = author;
        this.body = body;
    }
}
UI Class
Handles the User Interface tasks such as adding posts to the list, deleting posts, clearing input fields, and showing alerts.

javascript
class UI {
    // Add a post to the list
    addPostTolist(post) {
        // Code for adding post to the list
    }

    // Delete a post from the list
    deletePost(e) {
        // Code for deleting post from the list
    }

    // Clear input fields
    clearFields() {
        // Code for clearing input fields
    }

    // Show alert message
    showAlert(message, className) {
        // Code for showing alert messages
    }
}
Store Class
Handles the storage of posts in local storage.

javascript
class Store {
    // Retrieve posts from local storage
    static getPost() {
        // Code for getting posts from local storage
    }

    // Add a new post to local storage
    static addPost(post) {
        // Code for adding post to local storage
    }

    // Display all posts from local storage
    static displayPosts() {
        // Code for displaying posts from local storage
    }

    // Delete a post from local storage
    static deletPost(title) {
        // Code for deleting post from local storage
    }
}
### Event Listeners
Handles the form submission and deletion of posts.

javascript
document.addEventListener('DOMContentLoaded', Store.displayPosts);
form.addEventListener('submit', (e) => {
    // Code for form submission
});
tbody.addEventListener('click', (e) => {
    // Code for deleting a post
});
## How to Contribute
If you'd like to contribute to this project, please follow these steps:

Fork the repository.

Create a new branch (git checkout -b feature-branch).

Make your changes.

Commit your changes (git commit -m 'Add some feature').

Push to the branch (git push origin feature-branch).

Open a pull request.
