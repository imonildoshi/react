import { useState } from "react";

export default function QueryResults(cust)
{
  
   
   let col=Object.keys(cust.name[0]);
    return(
    <>   
    <div className="response-container">
    <div className="card-container">
        <table className="response-table">
        <thead>
            {col.map((val, key) => {
           return (
            <th key={key}>
               <td>{val}</td>
            </th>
          )
        })}
        </thead>
        <tbody className="scrollit">
        {/* {cust.name.map((val, key) => {
             return (
             <tr key={key}>
              <td>{val.consumer_id}</td>
              <td>{val.name}</td>
              <td>{val.date_of_birth}</td>
              <td>{val.address}</td>
              <td>{val.phone_number}</td>
              <td>{val.email}</td>
            </tr>
          )
         })} */}
          {cust.name.map((index,key)=>{
                return (
                    <tr key={key}>
                        {Object.keys(index).map((key)=>{
                            return (
                                <>
                                  <td key={key}>{index[key]}</td>
                                </>
                            )
                        })}

                    </tr>
                )
            })}
       </tbody>
    
      </table>
            </div>

        </div>
        </>
    )
}

