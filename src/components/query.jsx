import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import QueryResuts from "./displayqueryRes";
function QueryCom()
{  
    let [query,setQuery]=useState('');
    let [resQ,setResQ]=useState();
    let [head,setHead]=useState([]);
    let [bool,setBool]=useState(false);
    // const cust=[
    //     {
    //       "consumer_id": 1,
    //       "name": "John Doe",
    //       "date_of_birth": "1980-01-01",
    //       "address": "123 Main St",
    //       "phone_number": "555-555-1234",
    //       "email": "john.doe@example.com"
    //     },
    //     {
    //       "consumer_id": 2,
    //       "name": "Jane Doe",
    //       "date_of_birth": "1985-05-10",
    //       "address": "456 Elm St",
    //       "phone_number": "555-555-5678",
    //       "email": "jane.doe@example.com"
    //     },
    //     {
    //       "consumer_id": 3,
    //       "name": "Bob Smith",
    //       "date_of_birth": "1976-12-25",
    //       "address": "789 Maple Ave",
    //       "phone_number": "555-555-9012",
    //       "email": "bob.smith@example.com"
    //     },
    //     {
    //         "consumer_id": 4,
    //         "name": "Jane",
    //         "date_of_birth": "1985-05-10",
    //         "address": "456 Elm St",
    //         "phone_number": "555-555-5678",
    //         "email": "jane@example.com"
    //       },
    //       {
    //         "consumer_id": 5,
    //         "name": "melvin",
    //         "date_of_birth": "1985-05-10",
    //         "address": "456 Elm St",
    //         "phone_number": "555-555-5678",
    //         "email": "melvin@example.com"
    //       },
    //       {
    //         "consumer_id": 6,
    //         "name": "Rock",
    //         "date_of_birth": "1985-05-10",
    //         "address": "456 Elm St",
    //         "phone_number": "555-555-5678",
    //         "email": "Rock@example.com"
    //       },
    //       {
    //         "consumer_id": 7,
    //         "name": "Rock",
    //         "date_of_birth": "1985-05-10",
    //         "address": "456 Elm St",
    //         "phone_number": "555-555-5678",
    //         "email": "Rock@example.com"
    //       },
    //       {
    //         "consumer_id": 8,
    //         "name": "Rock",
    //         "date_of_birth": "1985-05-10",
    //         "address": "456 Elm St",
    //         "phone_number": "555-555-5678",
    //         "email": "Rock@example.com"
    //       },
    //       {
    //         "consumer_id": 9,
    //         "name": "John Doe",
    //         "date_of_birth": "1980-01-01",
    //         "address": "123 Main St",
    //         "phone_number": "555-555-1234",
    //         "email": "john.doe@example.com"
    //       },
    //       {
    //         "consumer_id": 10,
    //         "name": "John Doe",
    //         "date_of_birth": "1980-01-01",
    //         "address": "123 Main St",
    //         "phone_number": "555-555-1234",
    //         "email": "john.doe@example.com"
    //       },
    //       {
    //         "consumer_id": 11,
    //         "name": "John Doe",
    //         "date_of_birth": "1980-01-01",
    //         "address": "123 Main St",
    //         "phone_number": "555-555-1234",
    //         "email": "john.doe@example.com"
    //       },
    //       {
    //         "consumer_id": 12,
    //         "name": "John Doe",
    //         "date_of_birth": "1980-01-01",
    //         "address": "123 Main St",
    //         "phone_number": "555-555-1234",
    //         "email": "john.doe@example.com"
    //       },
    //       {
    //         "consumer_id": 13,
    //         "name": "John Doe",
    //         "date_of_birth": "1980-01-01",
    //         "address": "123 Main St",
    //         "phone_number": "555-555-1234",
    //         "email": "john.doe@example.com"
    //       },
    //       {
    //         "consumer_id": 14,
    //         "name": "John Doe",
    //         "date_of_birth": "1980-01-01",
    //         "address": "123 Main St",
    //         "phone_number": "555-555-1234",
    //         "email": "john.doe@example.com"
    //       },
    //       {
    //         "consumer_id": 15,
    //         "name": "John Doe",
    //         "date_of_birth": "1980-01-01",
    //         "address": "123 Main St",
    //         "phone_number": "555-555-1234",
    //         "email": "john.doe@example.com"
    //       },
    //       {
    //         "consumer_id": 15,
    //         "name": "John Doe",
    //         "date_of_birth": "1980-01-01",
    //         "address": "123 Main St",
    //         "phone_number": "555-555-1234",
    //         "email": "john.doe@example.com"
    //       },
    //       {
    //         "consumer_id": 16,
    //         "name": "John Doe",
    //         "date_of_birth": "1980-01-01",
    //         "address": "123 Main St",
    //         "phone_number": "555-555-1234",
    //         "email": "john.doe@example.com"
    //       },
    //       {
    //         "consumer_id": 17,
    //         "name": "John Doe",
    //         "date_of_birth": "1980-01-01",
    //         "address": "123 Main St",
    //         "phone_number": "555-555-1234",
    //         "email": "john.doe@example.com"
    //       },
    //       {
    //         "consumer_id": 18,
    //         "name": "John Doe",
    //         "date_of_birth": "1980-01-01",
    //         "address": "123 Main St",
    //         "phone_number": "555-555-1234",
    //         "email": "john.doe@example.com"
    //       },
    //       {
    //         "consumer_id": 19,
    //         "name": "John Doe",
    //         "date_of_birth": "1980-01-01",
    //         "address": "123 Main St",
    //         "phone_number": "555-555-1234",
    //         "email": "john.doe@example.com"
    //       },
    //       {
    //         "consumer_id": 20,
    //         "name": "John Doe",
    //         "date_of_birth": "1980-01-01",
    //         "address": "123 Main St",
    //         "phone_number": "555-555-1234",
    //         "email": "john.doe@example.com"
    //       },         
    //       {
    //         "consumer_id": 21,
    //         "name": "John Doe",
    //         "date_of_birth": "1980-01-01",
    //         "address": "123 Main St",
    //         "phone_number": "555-555-1234",
    //         "email": "john.doe@example.com"
    //       },
    //       {
    //         "consumer_id": 22,
    //         "name": "John Doe",
    //         "date_of_birth": "1980-01-01",
    //         "address": "123 Main St",
    //         "phone_number": "555-555-1234",
    //         "email": "john.doe@example.com"
    //       },
    //       {
    //         "consumer_id": 14,
    //         "name": "John Doe",
    //         "date_of_birth": "1980-01-01",
    //         "address": "123 Main St",
    //         "phone_number": "555-555-1234",
    //         "email": "john.doe@example.com"
    //       },
    //       {
    //         "consumer_id": 24,
    //         "name": "John Doe",
    //         "date_of_birth": "1980-01-01",
    //         "address": "123 Main St",
    //         "phone_number": "555-555-1234",
    //         "email": "john.doe@example.com"
    //       },
    //       {
    //         "consumer_id": 25,
    //         "name": "John Doe",
    //         "date_of_birth": "1980-01-01",
    //         "address": "123 Main St",
    //         "phone_number": "555-555-1234",
    //         "email": "john.doe@example.com"
    //       },
    //   ]
      // useEffect(()=>{
      //     axios.get("https://jsonplaceholder.typicode.com/comments").then((res)=>{
      //         setHead(res.data);
      //        })
      // },[])

   async function onQueryHandler()
    {
        setBool(true);
        setResQ(cust);
        console.log(query);
       console.log(head);
    }
    
      
      let col=Object.keys(cust[0])
    
      
    return(
        <>
        <div className="query-box">
          <input className="query-input" type="text" name="query" id="" placeholder="Write a sample query"
           onChange={e=>setQuery(e.target.value)}
          />
        <div id="view-all" className="view-all">

          <button type="submit" className="view-all-container"
          onClick={onQueryHandler}>
             Query
             <Link to={"/"}/>
          </button>
        </div>
        </div>
    
        {bool && <QueryResuts name={head}/>}
     
        </>
    )
}

export default QueryCom;