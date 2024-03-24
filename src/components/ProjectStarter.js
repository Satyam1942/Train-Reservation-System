import React from 'react';
import  { useEffect,useState } from 'react';
import {startWorker} from '../webWorker.js'
import './ProjectStarter.css'
/* eslint-disable no-restricted-globals */

function ProjectStarter() {
  const [threadInfo, setThreadInfo] = useState([]);
  const [threadMap, setThreadMap] = useState(new Map());
  const [threadStatus, setThreadStatus] = useState(true);

  useEffect(() => {
    // Start the worker and pass any necessary props
       startWorker({ id: 0 });

    // Add event listener to handle messages from the worker
    const handleMessage = (event) => {
      const message = event.data;
      // console.log(message);
      // if(message.type=='status'){
      //   setThreadStatus(false);
      // }
      // else
       if (message.type === 'info') {
        setThreadInfo(prevInfo => [...prevInfo, message.message]);
      }
      else if(message.type=='map'){
        setThreadMap(message.message);
      }
     
    };

    // Add event listener
    self.addEventListener('message', handleMessage);

    // Clean up event listener on component unmount
    return () => {
      self.removeEventListener('message', handleMessage);
    };
  }, []); // Empty dependency array to run effect only once



  return <>
    <h1 className='white-text'>
      THREAD INFO
    </h1>
    <div  className='white-text'>
    THREAD 0:
    {/* <div>
      Thread Status: {threadStatus} 
    </div> */}
    <ul  className='white-text'>
      {
        threadInfo.map((info, index) =>(
          <li key={index}>{info}</li>
          ))
        }
    </ul>
    BOOKED TICKET LIST:
    <div  className='white-text'>
    {
       Array.from(threadMap.entries()).map((entry) => {
        const [key, value] = entry;
        return <div key={key}>{key}: {value}</div>;
      })
    }
    </div>
    </div>
  </>;

}

export default ProjectStarter;