import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/collegeDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

const userSchema = new mongoose.Schema({
  name: String
});

const User = mongoose.model('User', userSchema);

const studentSchema = new mongoose.Schema({
  name: String,
  updatedAt: Date
});

studentSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Student = mongoose.model('Student', studentSchema);

const postSchema = new mongoose.Schema({
  title: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Post = mongoose.model('Post', postSchema);

const run = async () => {
  const admin = await User.create({ name: "Lina" });

  await Post.create({
    title: "Mongoose is Awesome",
    author: admin._id
  });

  const post = await Post.findOne({ title: "Mongoose is Awesome" })
    .populate("author");

  console.log(`Post Title: ${post.title}`);
  console.log(`Author Name: ${post.author.name}`);
};

run();