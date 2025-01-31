import NewTask from "./NewTask";

function Tasks({ onAdd, onDelete, tasks }) {
  return (
    <section>
      <h2 className="text-2xl text-stone-700 font-bold mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && ( // Fix condition
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex my-4 justify-between">
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-700"
                onClick={() => onDelete(task.id)} // Fix delete handler
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Tasks;
