Task: Personal Task Manager Application
Objective:

Develop a simple web application that allows users to manage their daily tasks. The application should provide functionalities to add, edit, delete, and list tasks.

Tools and Technologies:
Frontend: React
Backend: Node.js with Express
Database: MongoDB
API Testing: Postman or any similar tool
Requirements:
Database Setup:

Use MongoDB to create a database named taskmanager.

Define a schema for a tasks collection where each task will have the following fields:
title: String
description: String
status: String (e.g., "Pending", "Completed")
createdAt: Date
updatedAt: Date
Backend Development:

Set up a Node.js server using the Express framework.
Implement API endpoints for the following actions:
POST /tasks - Create a new task.
GET /tasks - Retrieve all tasks.
GET /tasks/:id - Retrieve a single task by ID.
PUT /tasks/:id - Update a task by ID.
DELETE /tasks/:id - Delete a task by ID.

Use Mongoose to interact with the MongoDB database from your Express application.
Frontend Development:

Create a React application setup using create-react-app.

Develop components to:
Display a list of tasks.
Add a task using a form.
Edit a task using a modal or a separate form.
Delete a task with a confirmation prompt.
Use Axios or Fetch API to communicate with the backend.

State Management:

Manage state locally within components or use React Context API or Redux for more complex state management (optional depending on the complexity of the application).
Styling:

Use CSS or a CSS framework like Bootstrap or Material-UI to style the application.

Testing and
 Documentation:

Test API endpoints using Postman.

Write basic documentation that includes setup instructions, API usage details, and an overview of functionalities.

Deliverables:
Source code for the backend and frontend.
Postman collection for API testing.

A README file that includes installation and running instructions, along with API documentation.

Just refer to this app for the same :.
https://youtu.be/PDWgxqOzvxo?si=lTOh7TDmKH_cr8oG
