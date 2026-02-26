const express = require('express');
const app = express();
app.use(express.json());

// CI test change
console.log("Testing CI with a Pull Request");

const tasksRouter = require('./routes/tasks');

app.get('/', (req, res) => {
    res.json({ message: "Task Manager API running (Lab2)" });
});

app.use('/tasks', tasksRouter);

// Export for testing
module.exports = app;

// Only start server if running directly (not in tests)
if (require.main === module) {
    app.listen(3000, () => console.log("API running on port 3000"));
}