import './Home.css';
import Search from './SearchSystem';
import { useRef, useState } from 'react';



function Home(){
    const [text1,setText1]=useState('');    
    const [text2,setText2]=useState('');    
    const inputRef1=useRef(null);
    const inputRef2=useRef(null);
    

    function handleChange1(event){
        setTimeout(()=>{
            inputRef1.current.focus();
        },1);
        setText1(event.target.value);
    }

    function handleChange2(event){
        setTimeout(()=>{
            inputRef2.current.focus();
        },1);
        setText2(event.target.value);
    }

    const Card=()=>{
        return (
            <div>
            <div className="floating-form">
            <h2 className="form-header">Enter Train details</h2>
            <form className="form-container">

            
              <input  ref= {inputRef1} type="text" placeholder="Enter departing station" value={text1} onChange={handleChange1} className="search-input1" />
              <Search token={text1} changeState = {setText1}/>
          
             <input  ref = {inputRef2} type="text" placeholder="Enter destination station" value={text2} onChange={handleChange2} className="search-input2" />
             <Search token={text2} changeState = {setText2}/>    

              <button type="submit" className="search-button">Search</button>

            </form>
          </div>
       
        </div>
          
          );
    }
    return(
        <Card/>
    );

}


export default Home