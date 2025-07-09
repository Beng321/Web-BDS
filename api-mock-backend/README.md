# Real Estate Backend

This project is a backend server for a real estate website similar to [batdongsan.com.vn](https://batdongsan.com.vn/). It is built using Node.js and Express, providing a RESTful API for managing property listings.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/real-estate-backend.git
   ```

2. Navigate to the project directory:
   ```
   cd real-estate-backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the server, run the following command:
```
npm start
```
The server will run on `http://localhost:3000`.

## API Endpoints

### Properties

- **GET /properties**: Retrieve a list of all properties.
- **GET /properties/:id**: Retrieve details of a specific property by ID.
- **POST /properties**: Create a new property.
- **PUT /properties/:id**: Update an existing property by ID.
- **DELETE /properties/:id**: Delete a property by ID.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.