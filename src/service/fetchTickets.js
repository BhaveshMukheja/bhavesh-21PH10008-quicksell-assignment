import React, { useEffect, useState } from 'react';

const KanbanBoard = () => {
  const [tickets, setTickets] = useState(() => {
    // Initialize state with data from localStorage if available
    const savedTickets = localStorage.getItem('tickets');
    return savedTickets ? JSON.parse(savedTickets) : [];
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data only if not already in localStorage
    if (tickets.length === 0) {
      setLoading(true);
      fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
        .then((response) => {
          if (!response.ok) throw new Error('Failed to fetch data');
          return response.json();
        })
        .then((data) => {
          setTickets(data); // Update state
          localStorage.setItem('tickets', JSON.stringify(data)); // Save to localStorage
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }
  }, [tickets]);

  // Save to localStorage whenever tickets state changes
  useEffect(() => {
    localStorage.setItem('tickets', JSON.stringify(tickets));
  }, [tickets]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Kanban Board</h1>
      <pre>{JSON.stringify(tickets, null, 2)}</pre>
    </div>
  );
};

export default KanbanBoard;
