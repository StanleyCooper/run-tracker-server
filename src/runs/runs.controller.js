const path = require("path");

// Use our runs data
const runs = require(path.resolve("src/data/runs-data"));

// Middleware
function list(request, response) {
    response.json({ data: runs });
}

module.exports = {
    list,
}