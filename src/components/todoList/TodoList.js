const TodoList = () => {
    const todos = [];
    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo.content}
                    <button onClick={() => {
                    }}>Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
