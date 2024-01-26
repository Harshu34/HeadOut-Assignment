MERN Stack HTTP Server
This project implements a simple HTTP server using the MERN (MongoDB, Express.js, React, Node.js) stack. The server responds to incoming GET requests on the endpoint /data and accepts two query parameters, n for file name and m for line number.

Features
File Content Retrieval:

If both n and m parameters are provided, the server returns the content of the specified file at the given line number.
If only n is provided, the server returns the entire content of the specified file.
File Size and Quantity:


Usage
Clone the Repository:

git clone https://github.com/your-username/your-repository.git
cd your-repository

Install Dependencies:


npm install
Run the Server:


npm start
Access the API:

Open a web browser or use tools like curl to access the API:
Example: http://localhost:8080/data?n=1&m=30

Docker Support
The project includes a Dockerfile for bundling the application into a Docker image.
The Docker container is compatible with both ARM architecture and x86.
The container is allocated a maximum of 1500MB RAM and 2000m/2 Core CPU.

Contributing
Feel free to contribute by opening issues or submitting pull requests.
