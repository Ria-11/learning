import "./App.css";
import { useState } from "react";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";

export default function App() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    setQueue([
      ...queue,
      { ...customer, id: Date.now(), status: "pending" }
    ]);
  };

  const updateStatus = (id, newStatus) => {
    setQueue(
      queue.map((customer) =>
        customer.id === id
          ? { ...customer, status: newStatus }
          : customer
      )
    );
  };

  const removeFromQueue = (id) => {
    setQueue(queue.filter((customer) => customer.id !== id));
  };

  return (
    <div className="App">
      <header>
        <h1>Queue Management System</h1>
        <p>Welcome to the Queue Management System</p>
      </header>

      <main>
        <QueueForm onAdd={addToQueue} />

        <QueueDisplay
          queue={queue}
          onUpdateStatus={updateStatus}
          onRemove={removeFromQueue}
        />
      </main>
    </div>
  );
}