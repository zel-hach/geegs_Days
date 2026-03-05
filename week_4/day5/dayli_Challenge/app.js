const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/collegeDB')
  .then(() => console.log('Connection Successful! Node.js is talking to MongoDB.'))
  .catch(err => console.error('Connection Failed:', err));

const taskSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true, "You must provide a task title"] 
  },
  description: String,
  status: { 
    type: String, 
    enum: ['pending', 'completed'], 
    default: 'pending' 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

const Task = mongoose.model('Task', taskSchema);

const createTask = async () => {
  try {
    const newTask = await Task.create({
      title: "Learn Mongoose Validation",
      description: "Complete the daily challenge for the MongoDB bootcamp"
    });
    console.log("Task Created:", newTask);
    return;
  } catch (err) {
    console.error("Error:", err.message);
  }
};

createTask();

const getAllTasks = async () => {
  const tasks = await Task.find();
  console.log("📋 Current Tasks:", tasks);
  return;
};



const completeTask = async (taskId) => {
    try {
        const task = await Task.findByIdAndUpdate(
            taskId,
            { status: 'completed' },
            { new: true }
        );
        
        if (!task) {
            console.log("Task not found");
            return;
        }

        console.log("Task updated:", task);
    } catch (error) {
        console.log("Error:", error.message);
    }
};

completeTask('69a971a619c7de07c1e8d8ac');
getAllTasks();