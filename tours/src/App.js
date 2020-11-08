import React, {useState, useEffect} from 'react';
import Loading from './Loading';
import Tours from './Tours';
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) =>{
    const newTours = [...tours];
    const index = newTours.findIndex(tour =>tour.id === id);
    newTours.splice(index,1);
    setTours(newTours);
  }
  const fetchTours = async() =>{
    setLoading(true);
    try{
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
    }catch (error){
      setLoading(false);
      console.log('Error fetching data',error);
    }
  };

  useEffect(()=>{
    fetchTours();
  },[]);
  if(loading){
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if(tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={fetchTours}>Refresh</button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App;
