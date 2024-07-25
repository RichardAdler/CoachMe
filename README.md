
# CoachMe

Industrial Consulting Group Project

  

## Getting Started

  

To get a copy of the project up and running on your local machine, follow these steps.

  

### Prerequisites

  

Before you begin, ensure you have the following software installed on your system:

  

- [Git](https://git-scm.com/)

- [Node.js and npm](https://nodejs.org/) (Node Package Manager)

  

### Cloning the Repository

  

First, clone the repository to your local machine using Git:

  

```bash

git  clone  https://github.com/RichardAdler/CoachMe.git

```

  

This command will create a directory named `CoachMe` in your current directory.

  

### Setting Up the Backend

  

1. Navigate to the backend directory:

  

```bash

cd CoachMe/backend

```

  

2. Install the required dependencies:

  

```bash

npm install

```

  

3. Start the backend server:

  

```bash

node server.js

```

  

The backend server should now be running on `http://localhost:3001` (or another port if specified).

  

### Setting Up the Frontend

  

1. Open a new terminal window and navigate to the frontend directory:

  

```bash

cd CoachMe/frontend

```

  

2. Install the required dependencies:

  

```bash

npm install

```

  

3. Start the frontend server:

  

```bash

npm run dev

```

  

The frontend application should now be running on `http://localhost:3000` (or another port if specified).

  



  

## Configuration

  
You need to configure environment variables for both the backend and frontend applications. This can be done by creating a `.env` file in the root of the `backend` directory and a `.env.local` file in the root of the `frontend` directory. Consult the documentation or code comments within each project to understand the necessary configurations.

  

## Usage

  

Once both the backend and frontend servers are running, you can access the application by navigating to `http://localhost:3000` in your web browser. From there, you can use the application as intended.

  

## Troubleshooting

  

-  **Backend Issues**: Ensure that all dependencies are installed and that the server is running on the correct port. Check the console for any error messages.

-  **Frontend Issues**: Ensure that all dependencies are installed and that the development server is running. Check the console for any error messages and verify that the backend server is also running.

  

## Contributing

This is a university project and the following students are working on it:

- Kristian Nishanov
- Costin-Ionut Potroanchenu
- Richard Adler
- Veronica Cuciula
- Ilia Dochev
- Oliver Pesti

  

## License

  

This project is licensed under the GPL-3.0 license. See the [GPL-3.0 license](https://github.com/RichardAdler/CoachMe#GPL-3.0-1-ov-file) file for more details.

  

## Acknowledgements

  

  

If you have any questions or need further assistance, feel free to contact us or open an issue on GitHub.
