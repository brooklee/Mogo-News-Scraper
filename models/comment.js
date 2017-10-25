// Require Mongoose
var mongoose = require('mongoose');

// Create a Schema Class
var Schema = mongoose.Schema;

// Create Comment Schema
var commentSchema = new Schema({

    // Author's Name
    author: {
        type: String
    },
    // Comment Content
    content: {
        type: String
    }

});


// Create the Comment model with Mongoose
var comment = mongoose.model('comment', commentSchema);

// Export the Model
module.exports = comment;