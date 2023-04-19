# Photo Sharing App

A web application built with the MERN stack, allowing users to share and view photos.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Technologies](#technologies)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Users can upload photos to the app
- Users can view photos uploaded by other users
- Users can like and comment on photos
- Users can search for photos by keyword or tags

## Getting Started

To install and run the application locally:

1. Clone the repository to your local machine
2. Navigate to the backend folder and run `npm install` to install the backend dependencies
3. Create a `.env` file in the backend folder with your MongoDB connection string and Google OAuth 2.0 client ID
4. Run `npm start` to start the backend server
5. Navigate to the frontend folder and run `npm install` to install the frontend dependencies
6. Run `npm start` to start the frontend server
7. Open your browser and navigate to `http://localhost:3000` to view the app

## Technologies

- MongoDB
- Express.js
- React.js
- Node.js
- TypeScript

## Folder Structure

The application follows a 3-layered architecture pattern:

- `business-logic`: Contains all the business logic and domain models
- `data-storage`: Contains all the code related to data storage and database interactions
- `presentation`: Contains all the code related to the presentation layer, such as the React components and CSS files

## Contributing

Contributions are always welcome! If you'd like to contribute to this project, please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
