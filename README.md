# Blog App

This repository contains a full-stack blog application, consisting of a React frontend and a Node.js/Express backend. The app allows users to view a list of articles, read articles, and leave comments.

## Project Structure

```
.
├── blog-app-backend        # Node.js/Express backend
│   ├── package-lock.json   # Backend lockfile
│   ├── package.json        # Backend dependencies
│   └── src
│       ├── db.js           # MongoDB database connection setup
│       └── server.js       # Main Express server setup
├── blog-app-frontend       # React frontend
│   ├── README.md           # Frontend README
│   ├── public              # Public static files for the frontend
│   │   ├── favicon.ico
│   │   ├── index.html      # Entry HTML for React app
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── src
│       ├── App.js          # Main React component
│       ├── App.css         # Global CSS for the app
│       ├── NavBar.js       # Navigation bar component
│       ├── components      # Reusable components
│       │   ├── AddCommentForm.js
│       │   ├── ArticlesList.js
│       │   └── CommentsList.js
│       ├── pages           # Pages for different routes in the app
│       │   ├── AboutPage.js
│       │   ├── ArticlePage.js
│       │   ├── ArticlesListPage.js
│       │   ├── HomePage.js
│       │   ├── NotFoundPage.js
│       │   └── article-content.js  # Static content for the articles
│       ├── index.js        # Entry point for the React app
│       ├── index.css       # Main CSS file
│       ├── reportWebVitals.js
│       └── setupTests.js   # Testing configuration
└── folder-structure.txt    # Folder structure description
```

## Features

- **Frontend**:
  - Built with React.
  - Displays a list of articles.
  - Users can read an article and post comments.
  - Pages include:
    - Home Page
    - Articles List Page
    - Article Details Page
    - About Page
    - Not Found Page for invalid routes.

- **Backend**:
  - Built with Node.js and Express.
  - Manages articles and comments.
  - Connects to a MongoDB database (setup in `db.js`).
  - API to handle article and comment operations.

## Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [MongoDB](https://www.mongodb.com/) (for local database usage)

### Clone the Repository

```bash
git clone https://github.com/your-username/blog-app.git
cd blog-app
```

### Install Dependencies

#### Backend

Navigate to the backend folder and install dependencies:

```bash
cd blog-app-backend
npm install
```

#### Frontend

Navigate to the frontend folder and install dependencies:

```bash
cd blog-app-frontend
npm install
```

## Running the Application

### Start MongoDB

Ensure MongoDB is running on your machine or use a cloud MongoDB service (e.g., MongoDB Atlas). If you're using a local MongoDB instance, make sure it is running:

```bash
mongod --dbpath /path/to/your/data/db
```

### Start the Backend Server

In the `blog-app-backend` directory, run:

```bash
npm start
```

The backend server will start on [http://localhost:5000](http://localhost:5000).

### Start the Frontend

In the `blog-app-frontend` directory, run:

```bash
npm start
```

The frontend React app will start on [http://localhost:3000](http://localhost:3000).

## Backend API

The backend API exposes the following endpoints:

- **GET /api/articles**: Get all articles.
- **GET /api/articles/:name**: Get a specific article by name.
- **POST /api/articles/:name/upvote**: Upvote an article.
- **POST /api/articles/:name/comments**: Add a comment to an article.

## Frontend Pages

- **HomePage**: Displays the homepage.
- **ArticlesListPage**: Displays a list of articles.
- **ArticlePage**: Displays the content of a selected article along with its comments and a form to add new comments.
- **AboutPage**: A static page with information about the blog.
- **NotFoundPage**: Shown when a user tries to access a non-existing route.

## Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
