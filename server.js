// server.js

// Import required modules
const express = require('express');

// Create an Express application
const app = express();

app.use("/", express.static(__dirname + "/public"));


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});