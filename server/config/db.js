const mongoose = require("mongoose");
try {
  mongoose.connect('mongodb+srv://root:admin@cluster0.nbbal.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
