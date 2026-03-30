import React from "react";

function QueueDisplay({ queue, onUpdateStatus, onRemove }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "orange";
      case "in-service":
        return "green";
      case "completed":
        return "gray";
      default:
        return "black";
    }
  };

  return (
    <div className="queue-display">
      <h2>Current Queue</h2>

      {queue.length === 0 ? (
        <p className="empty-queue">No customers in queue</p>
      ) : (
        <div className="queue-list">
          {queue.map((customer) => (
            <div key={customer.id} className="queue-item">
              <div className="customer-info">
                <h3>{customer.name}</h3>
                <p>{customer.service}</p>

                <span
                  className="status"
                  style={{ color: getStatusColor(customer.status) }}
                >
                  {customer.status}
                </span>
              </div>

              <div className="actions">
                {customer.status === "pending" && (
                  <button
                    onClick={() =>
                      onUpdateStatus(customer.id, "in-service")
                    }
                  >
                    Start Service
                  </button>
                )}

                {customer.status === "in-service" && (
                  <button
                    onClick={() =>
                      onUpdateStatus(customer.id, "completed")
                    }
                  >
                    Complete
                  </button>
                )}

                <button
                  className="remove-btn"
                  onClick={() => onRemove(customer.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default QueueDisplay;