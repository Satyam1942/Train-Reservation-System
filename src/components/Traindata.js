import React from 'react';
import './Traindata.css';
import { useNavigate } from 'react-router-dom';


const TrainCard = ({ departureStation, arrivalStation, trainName, availableTickets }) => {
  const navigate = useNavigate();

  const book=()=>{
    return navigate("/traindetails");
  }

  return (
    <div className="train-card">
      <h3>{trainName}</h3>
      <p><strong>Departure Station:</strong> {departureStation}</p>
      <p><strong>Arrival Station:</strong> {arrivalStation}</p>
      <p><strong>Available Tickets:</strong> {availableTickets}</p>
      <button type="submit" className="book" onClick={()=>book()}>Book Tickets</button>
      <button type="submit" className="cancel">Cancel Tickets</button>
    </div>
  );
};

const TrainCardList = ({ trains }) => {
  return (
    <div className="train-card-list">
      {trains.map((train, index) => (
        <TrainCard
          key={index}
          departureStation={train.departureStation}
          arrivalStation={train.arrivalStation}
          trainName={train.trainName}
          availableTickets={train.availableTickets}
        />
      ))}
    </div>
  );
};

const Traindata = () => {
  // Example data for trains
  const trains = [
    {
      departureStation: "Station A",
      arrivalStation: "Station B",
      trainName: "Express Train 1",
      availableTickets: 50
    },
    {
      departureStation: "Station C",
      arrivalStation: "Station D",
      trainName: "Local Train 2",
      availableTickets: 30
    },
    {
      departureStation: "Station E",
      arrivalStation: "Station F",
      trainName: "High-Speed Train 3",
      availableTickets: 20
    },
    {
      departureStation: "Station E",
      arrivalStation: "Station F",
      trainName: "High-Speed Train 3",
      availableTickets: 20
    }
  ];

  return (
    <div className="App">
      <h1 className='header'>Train Information</h1>
      <TrainCardList trains={trains} />
    </div>
  );
};

export default Traindata;
