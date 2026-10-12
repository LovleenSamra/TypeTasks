
type TaskStatus = "todo" | "in-progress" | "done";

interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

let nextId = 1;

function addTask(tasks: Task[], title: string): Task[] {
  const newTask: Task = {
    id: nextId++,
    title: title,
    status: "todo"
  };

  return [...tasks, newTask];
}

function completeTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) => {
    if (task.id === id) {
      return { ...task, status: "done" };
    }
    return task;
  });
}

function filterByStatus(
  tasks: Task[],
  status: TaskStatus
): Task[] {
  return tasks.filter((task) => task.status === status);
}

function deleteTask(tasks: Task[], id: number): Task[] {
  return tasks.filter((task) => task.id !== id);
}
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "skipLibCheck": true
  }
}
