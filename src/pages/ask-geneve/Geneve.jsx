import React,{useState,useEffect} from 'react';
import './Geneve.css';
const SLIDES=[ 'Type anything from the movie...','Try: character name','Try: famous quote','Ask anything...' ];
export default function Geneve(){
 const[slide,setSlide]=useState(0);
 const[input,setInput]=useState('');
 const[loading,setLoading]=useState(true);
 const[results,setResults]=useState(['Results will appear here...']);
 useEffect(()=>{const t=setInterval(()=>setSlide(s=>(s+1)%SLIDES.length),1000); return()=>clearInterval(t);},[]);
 useEffect(()=>{setTimeout(()=>setLoading(false),1200);},[]);
 function send(){ if(!input.trim())return; setResults([input,...results]); setInput(''); }
 return(
 <div className='app'>
  <div className='modal'>
    <div className='modal-header'><button className='close'>×</button><h1>ASK GÉNÉVE</h1></div>
    <div className='slide-box'><div>{SLIDES[slide]}</div></div>
    <div className='results'>{results.map((r,i)=><div key={i} className='result-card'>{r}</div>)}</div>
    <div className='composer'>
      <input value={input} onChange={e=>setInput(e.target.value)} placeholder='Type here...' />
      <button className='send' onClick={send}>➤</button>
    </div>
  </div>
 </div>
 );}
