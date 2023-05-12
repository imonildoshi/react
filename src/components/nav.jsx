import { useState } from 'react'
import { useEffect } from 'react'
import { useAsyncValue, useNavigate } from 'react-router-dom'
import Group from '../assets/Group.svg'
import { Link } from "react-router-dom";
// import 
import '../App.css'
import axios from 'axios'
import QueryResults from './displayqueryRes';


function Home() {
  let [def,setDeft]=useState([])
  let [post,setPost]=useState([])
  let [selected,setSelected]=useState(false);
  let [Table,setTable]=useState('')
  let [url,setUrl]=useState('');
  

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
        setPost(res.data);
       })
},[])

 const navigate =useNavigate();

 let consume=[
  {
      "address_masked": "1XX MXXX XX",
      "consumer_id": "1",
      "date_of_birth": "",
      "email": "john.smith@email.com",
      "name": "John Smith",
      "phone_number": "555-1234",
      "token": "",
      "score":"9.8",
      "scor":"9.8",
      "sc":"74",
      "pii":"adsljdsnjk",
      "non pi":"dlkmsa",
      "state":"karnataka"
  },
  {
      "address_masked": "4XX OXX XXX",
      "consumer_id": "2",
      "date_of_birth": "",
      "email": "jane.doe@email.com",
      "name": "Jane Doe",
      "phone_number": "555-5678",
      "token": "",
      "score":"9.8",
      "scor":"9.8",
      "sc":"74",
      "pii":"adsljdsnjk",
      "non pi":"dlkmsa",
      "state":"karnataka"
      
  },
  {
    "address_masked": "4XX OXX XXX",
    "consumer_id": "2",
    "date_of_birth": "",
    "email": "jane.doe@email.com",
    "name": "Jane Doe",
    "phone_number": "555-5678",
    "token": "",
    "score":"9.8",
    "scor":"9.8",
    "sc":"74",
    "pii":"adsljdsnjk",
    "non pi":"dlkmsa",
    "state":"karnataka"
    
},
{
  "address_masked": "4XX OXX XXX",
  "consumer_id": "2",
  "date_of_birth": "",
  "email": "jane.doe@email.com",
  "name": "Jane Doe",
  "phone_number": "555-5678",
  "token": "",
  "score":"9.8",
  "scor":"9.8",
  "sc":"74",
  "pii":"adsljdsnjk",
  "non pi":"dlkmsa",
  "state":"karnataka"
  
}
];

 async function optionHandler(e){
      setTable(`https://jsonplaceholder.typicode.com/${e.target.value}`);
      console.log(Table);
      setSelected(false);
      if(e.target.value==='consumer')
      {
        setTable(consume);
      }
    }
 

   async function onSubmitHandler()
    {
      const sql=`SELECT * FROM ${Table} LIMIT 3;`
      // if(Table!='consumer')
      // {
      //   await axios.get(Table)
      //   .then((res)=>{
      //      setPost(res.data);
      //      if(res.data)
      //      {
      //        setSelected(true);
      //      }
      //      console.log(res.data);
      //   }).catch((err)=>{
      //     console.log(err);
      //   })
      // }
      setSelected(true);
     
    }
     
  return (
    <>
     <div className="catalog-container">
     <div className="catalog-search">
       <div>
          <img className="logo-tab" src={Group} alt="Error!" />
        </div>
       <div className="search-component">
        {/* <SearchLayout /> */}
        <div className="search-form">
        <div className="select-container">
          <div className="select-dbsource">
            <select title="Select Database"
            className='select-table'
            onChange={optionHandler}
            >
              <option value="posts"> posts</option>
              <option value="comments">comment</option>
              <option value="consumer">consumer</option>
            </select>
          </div>
        </div>
       
        <div id="view-all" className="view-all">
          <button type="submit" className="view-all-container" onClick={onSubmitHandler}>
            Submit
          </button>  
        </div>
      </div>
       
      </div>
    </div>
   
    </div>

     <div className='lower-screen'>
      
       {/* <div id="view-all" className="view-all">
          <button type="submit" className="view-all-container" onClick={()=>navigate("/query")}>
             Query
             <Link to={"/query"}/>
          </button>
        </div> */}
        {selected && <QueryResults name={consume}/>}
     </div>
    </>
   
  );
}

// export const SearchLayout = () => {
// let [Table,setTable]=useState('')
// function optionHandler(e){
//   setTable(e.target.value);
// }
//   return (
  
//   );
// };

export default Home;
