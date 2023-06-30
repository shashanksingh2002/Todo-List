<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Todo Application</title>
</head>

<body>
  <h1>Todo Application</h1>
  <p>This is a simple Todo application built using HTML, CSS, JavaScript, Node.js, Express, and a file system for data storage.</p>

  <h2>Features</h2>
  <ul>
    <li>Create new todos with a title and description</li>
    <li>View a list of existing todos</li>
    <li>Delete todos from the list</li>
  </ul>

  <h2>Prerequisites</h2>
  <ul>
    <li>Node.js (version 12.18.1 or higher)</li>
    <li>NPM (version 8.19.2 or higher)</li>
  </ul>

  <h2>Installation</h2>
  <ol>
    <li>Clone the repository: <code>git clone https://github.com/shashanksingh2002/Todo-List.git</code></li>
    <li>Navigate to the project directory: <code>cd todo-application</code></li>
    <li>Install dependencies: <code>npm install</code></li>
  </ol>

  <h2>Usage</h2>
  <ol>
    <li>Start the application: <code>npm start</code></li>
    <li>Open your web browser and visit <code>http://localhost:3000</code></li>
    <li>You should see the Todo application interface.</li>
  </ol>

  <h2>File Structure</h2>
  <pre>
todo-application/
  |- public/
  |    |- css/
  |    |    |- styles.css
  |    |- js/
  |    |    |- script.js
  |    |- index.html
  |- api.js
  |- readFile.js
  |- backend
       |- todos.json
  |- package.json
  |- README.md
  </pre>

  <h2>Database</h2>
  <p>The application uses a file system to store the todo data. The <code>database.json</code> file in the <code>src/</code>
    directory serves as the database file. Each todo is stored as a JSON object in an array within the <code>database.json</code>
    file.</p>

  <h2>Contributing</h2>
  <p>Contributions are welcome! If you find any issues or want to add new features, feel free to open an issue or submit a
    pull request.</p>

  <h2>License</h2>
  <p>This project is licensed under the <a href="https://opensource.org/licenses/MIT">MIT License</a>.</p>
</body>

</html>
