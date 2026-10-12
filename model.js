"use strict";
let nextId = 1;
function addTask(tasks, title) {
    const newTask = {
        id: nextId++,
        title: title,
        status: "todo"
    };
    return [...tasks, newTask];
}
function completeTask(tasks, id) {
    return tasks.map((task) => {
        if (task.id === id) {
            return { ...task, status: "done" };
        }
        return task;
    });
}
function filterByStatus(tasks, status) {
    return tasks.filter((task) => task.status === status);
}
function deleteTask(tasks, id) {
    return tasks.filter((task) => task.id !== id);
}
