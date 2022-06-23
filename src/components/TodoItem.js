import React from "react";
import { FaClipboardCheck, FaEdit, FaTrashAlt } from "react-icons/fa";

const TodoItem = ({ todos, setTodos, setEdit }) => {
  // Handle Completed
  const handleCompleted = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      }),
    );
  };

  // Handle Edit
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEdit(findTodo);
  };

  // Handle Delete
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} className="grid gap-4 grid-cols-3 p-4 mb-4 bg-slate-200 rounded-lg" style={{ display: todo.completed ? "none" : "" }}>
          <div className="col-span-2 text-left text-slate-700 text-sm font-medium md:text-base">
            <span className={todo.completed ? "line-through" : ""}>{todo.title}</span>
          </div>
          <div className="flex justify-end items-center text-xl md:text-2xl">
            <FaClipboardCheck className="mr-2 text-teal-500 hover:text-teal-700 transition duration-200" onClick={() => handleCompleted(todo)} />
            <FaEdit className="mr-2 text-orange-400 hover:text-orange-600 transition duration-200" onClick={() => handleEdit(todo)} />
            <FaTrashAlt className="text-red-400 hover:text-red-600 transition duration-200" onClick={() => handleDelete(todo)} />
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoItem;
