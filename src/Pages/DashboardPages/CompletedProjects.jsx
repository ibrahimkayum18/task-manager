// CompletedProjects.jsx
import React, { useState, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';
import axios from 'axios';

// Define item types
const ItemTypes = {
  CARD: 'card',
};

const Column = ({ title, cards, onCardMove }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item) => onCardMove(item.id, title),
  });

  return (
    <div className="bg-gray-200 p-4 rounded-md m-2" ref={drop}>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      {cards.map((card) => (
        <Card key={card.id} {...card} onCardMove={() => onCardMove(card.id)} />
      ))}
    </div>
  );
};

const Card = ({ id, title, description, priority, onCardMove }) => {
  const [, drag] = useDrag({
    type: ItemTypes.CARD,
    item: { id },
  });

  return (
    <div ref={drag} className="bg-white p-2 mb-2 rounded-md cursor-move" onClick={onCardMove}>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p>{description}</p>
      <p className={`text-${priority.toLowerCase()} mt-2`}>{priority}</p>
    </div>
  );
};

const CompletedProjects = () => {
  const [columns, setColumns] = useState({
    Todo: [],
    Ongoing: [],
    Completed: [],
  });

  useEffect(() => {
    // Fetch data using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get('https://task-manager-server-sooty.vercel.app/projects');
        const data = response.data;

        // Set data to state
        setColumns({
          Todo: data,
          Ongoing: [],
          Completed: [],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Run only once on mount

  const handleCardMove = (cardId, targetColumn) => {
    const updatedColumns = { ...columns };

    // Find the source column and card
    let sourceColumn, sourceCard;
    for (const column in updatedColumns) {
      const cardIndex = updatedColumns[column].findIndex((card) => card.id === cardId);
      if (cardIndex !== -1) {
        sourceColumn = column;
        sourceCard = updatedColumns[column][cardIndex];
        break;
      }
    }

    if (sourceColumn && sourceCard) {
      // Remove the card from the source column
      updatedColumns[sourceColumn] = updatedColumns[sourceColumn].filter((card) => card.id !== cardId);

      // Add the card to the target column
      updatedColumns[targetColumn] = [...updatedColumns[targetColumn], sourceCard];

      // Update state
      setColumns(updatedColumns);
    }
  };

  return (
    <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
      <div className="flex flex-col md:flex-row">
        {Object.keys(columns).map((columnName) => (
          <div key={columnName} className="flex-1 md:w-1/3">
            <Column title={columnName} cards={columns[columnName]} onCardMove={(id) => handleCardMove(id, columnName)} />
          </div>
        ))}
      </div>
    </DndProvider>
  );
};

export default CompletedProjects;
