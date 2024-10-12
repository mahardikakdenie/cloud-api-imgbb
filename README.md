# express - typescript - imgbb cloud

A template for initializing a TypeScript project with Express version 4.21.0.

**Created by Mahardika Kessuma Denie, this project is ideal for developers seeking a fast, scalable, and organized solution to incorporate imgbb cloud storage into their backend processes.**

## Description

This repository serves as a starting point for building Node.js applications using TypeScript and Express (v4.21.0), specifically tailored for integrating with the imgbb image hosting API. It provides a clean and efficient structure to kickstart development, allowing you to easily implement image uploading functionality to imgbb cloud storage.

Whether you're developing a web application that requires image handling or simply looking to streamline your backend processes, this template offers a flexible and scalable solution. Enjoy the power of TypeScript with the simplicity of Express, combined with seamless integration to imgbb for fast and secure image hosting.

## Features

-   TypeScript: Ensures type safety and cleaner code.
-   Express 4.21.0: Lightweight, fast, and flexible web framework.
-   imgbb Cloud Integration: Preconfigured for easy image uploads to imgbb.
-   Clear Project Structure: Simplifies code organization and scaling.
-   Environment Configuration: Setup for both development and production modes.

## Prerequisites

Before you begin, ensure you have the following installed:

-   [Node.js](https://nodejs.org/) (version 14 or newer)
-   [npm](https://www.npmjs.com/) (usually installed with Node.js)
-   imgbb API Key: You need to obtain an API key from [imgbb](https://api.imgbb.com) to enable image uploads.

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/mahardikakdenie/cloud-api-imgbb.git

    ```

2. cd express-ts-template-4.21.0

    ```bash
    cd cloud-api-imgbb

    ```

3. Install the dependencies
    ```bash
    npm install
    ```

## Environment Setup

1. **Copy the example environment file:**

    ```bash
    cp .env.example .env

    ```

2. **\*Open the `.env` file and add the required environment variables, such as your imgbb API key:**
    ```bash
    PORT=`<your_port>`
    DB_URI=`<your_db_uri>`
    IMGBB_API_KEY=`<your_imgbb_api_key_here>`
    ```

## Running the Project

To run the project, use the following command:
```bash
npm run dev
```

# Project Structure
    ```bash
        cloud-api-imgbb
        │
        ├── src/
        │ ├── controller/
        │ │ └── media_controller.ts # Media-related controller
        │ ├── interface/
        │ │ ├── CustomRequestInterface.ts # Custom request interface
        │ │ └── media_interface.ts # Media-specific interface
        │ ├── libs/
        │ │ └── helpers.ts # Helper functions
        │ ├── middleware/
        │ │ └── auth.ts # Authorization middleware
        │ ├── model/
        │ │ └── media.ts # Media model
        │ ├── repository/
        │ │ └── media_repository.ts # Media repository for database operations
        │ ├── routes/
        │ │ └── media_routes.ts # Routes for media operations
        │ ├── service/
        │ │ ├── database.ts # Database connection setup
        │ │ └── index.ts # Entry point of the application
        │ └── ...
        ├── .env # Environment variables
        ├── .env.example # Example environment variables file
        ├── .eslintrc.json # ESLint configuration file
        ├── .gitignore # Files and directories to ignore in Git
        ├── package-lock.json # npm lock file
        ├── package.json # npm configuration
        ├── README.md # Project documentation
        ├── tsconfig.json # TypeScript configuration
        └── ...
```


## Contributing
**_If you would like to contribute to this project, please fork the repository and submit a pull request_**
