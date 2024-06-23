# Project Name

This project is an API for managing posts, built using Node.js and Express. It provides CRUD (Create, Read, Update, Delete) operations for posts. The main route handles all the necessary endpoints to interact with the posts.

## Table of Contents

- [Project Name](#project-name)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Routes](#routes)
    - [Add a Post](#add-a-post)
    - [Read the Latest Posts](#read-the-latest-posts)
    - [Read a Post](#read-a-post)
    - [Change a Post](#change-a-post)
    - [Delete a Post](#delete-a-post)
  - [Middleware](#middleware)
  - [Error Handling](#error-handling)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/AhmadAbdelrazik/PersonalBloggingPlatform
   ```

2. Change to the project directory:
   ```sh
   cd <project-directory>
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the server:
   ```sh
   npm start
   ```

2. The server will be running on `http://localhost:3000`.

## Routes

### Add a Post

- **URL:** `/`
- **Method:** `POST`
- **Middleware:** `postValidate`, `asyncHandler(controller.addPost)`
- **Description:** Adds a new post.

### Read the Latest Posts

- **URL:** `/`
- **Method:** `GET`
- **Middleware:** `asyncHandler(controller.readPosts)`
- **Description:** Retrieves the latest posts.

### Read a Post

- **URL:** `/:id`
- **Method:** `GET`
- **Middleware:** `asyncHandler(controller.readPost)`
- **Description:** Retrieves a specific post by ID.

### Change a Post

- **URL:** `/:id`
- **Method:** `PUT`
- **Middleware:** `postValidate`, `asyncHandler(controller.changePost)`
- **Description:** Updates a specific post by ID.

### Delete a Post

- **URL:** `/:id`
- **Method:** `DELETE`
- **Middleware:** `asyncHandler(controller.deletePost)`
- **Description:** Deletes a specific post by ID.

## Middleware

- `postValidate`: Validates the data of the post before processing.
- `params.id`: Handles the `id` parameter in the routes.
- `asyncHandler`: A utility to handle async errors in route handlers.

## Error Handling

Errors are managed by the `asyncHandler` utility, which ensures any asynchronous errors are properly caught and passed to the error handling middleware.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.