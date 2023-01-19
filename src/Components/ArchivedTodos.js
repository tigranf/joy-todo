import { useState, useEffect } from "react";
import ArchivedTodo from "./ArchivedTodo";

const ArchivedTodos = ({ handleDelete, handleRestore, todos }) => {
    const [archivedTodos, setArchivedTodos] = useState([]);

    useEffect(() => {
        let newTodos = todos.filter((todo) => todo.status !== "active");
        setArchivedTodos([...newTodos]);
    }, [todos]);

    return (
        <>
            {archivedTodos.map((todo) => (
                <ArchivedTodo
                    key={todo.id}
                    todo={todo}
                    handleDelete={handleDelete}
                    handleRestore={handleRestore}
                />
            ))}
        </>
    );
};

export default ArchivedTodos;
