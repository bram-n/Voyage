import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YourComponent = () => {

  interface DataItem {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
  const [data, setData] = useState<DataItem[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/fetchData'); // Replace with your server's URL
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    console.log("Run")
    fetchData();
  }, []);
  
  if (data) {
    console.log(1)
  }
  
  
  return (
    <div>
      {data ? (
        <div>
          {/* Render your data here */}
          {data.map((item: any) => (
            <div key={item.id}>{item.id}Hello{item.title}</div>
            
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default YourComponent;
