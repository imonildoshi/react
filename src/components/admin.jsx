import '../admin.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
export default function Admin()
{
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        .then(response => {
          // handle response
        })
        .catch(error => {
          // handle error
        });
      };
    
      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      };
    

    return (
        <>
         {/* <div className="outer-container">
         <div className='container'>
            <div className='right'>
                <button>Add User</button>
            </div>
            <div className='left'>
                <div className='col' style={{textAlign:'center'}}>
                    <h6 style={{textAlign:'center'}}>Field</h6>
                    <h6>Mask</h6>
                    <h6>Reduct</h6>
                    <h6>Role</h6>
                </div>
                <div className='col'>
                    <h6>Name</h6>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />

                </div>
                <div className='col'>
                    <h6>DOB</h6>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </div>
                <div className='col'>
                    <h6>Address</h6>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </div>
                <div className='col'>
                    <h6>Address</h6>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </div>
                <div className='col'>
                    <h6>Phone Number</h6>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </div>
                <div className='col'>
                    <h6>Email</h6>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </div>
                <div className='col'>
                    <h6>Bureau</h6>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </div>
                <div className='col'>
                    <h6>Credit Score</h6>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </div>
                <div className='col'>
                    <h6>Card Number</h6>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </div>
                <div className='col'>
                    <h6>Status</h6>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </div>
                <div className='col'>
                    <h6 >Issuing Bank</h6>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </div>
               
                
            </div>
          </div>
         </div> */}

         {/* <div className="outer-container1">
         <div className='container'>
            <div className='right'>
                <button>Add User</button>
            </div>
            <div className="middle" >
            <h6 className='height-100'>
               Field
               </h6>
               <h6 className='height-100'>
               Name
               </h6>
               <h6>
               DOB
               </h6>
               <h6>
               Address
               </h6>
               <h6>
               Phone Number
               </h6>
               <h6>
               Email
               </h6>
               <h6>
               Bureau
               </h6>
               <h6>
               Credit Score
               </h6>

               <h6>
               Card Number

               </h6>
            <h6>
            Status
            </h6>
            <h6>
            Issuing Bank
            </h6>
            </div>
            <div className="middle">
            <h6>
               Mask
               </h6>
               <input className='height-100' type="text" name="" id="" />
               <h6>
              <input type="text" />
               </h6>
               <h6>
               <input type="text" name="" id="" />
               </h6>
               <h6>
               <input type="text" />
               </h6>
               <h6>
               <input type="text" name="" id="" />
               </h6>
               <h6>
               <input type="text" name="" id="" />
               </h6>
               <h6>
               <input type="text" name="" id="" />
               </h6>

               <h6>
               <input type="text" name="" id="" />

               </h6>
            <h6>
            <input type="text" name="" id="" />
            </h6>
            <h6>
            <input type="text" name="" id="" />
            </h6>
            </div>
            <div className="middle">
            <h6>
               Reduct
               </h6>
               <input type="text" name="" id="" />
               <h6>
              <input type="text" />
               </h6>
               <h6>
               <input type="text" name="" id="" />
               </h6>
               <h6>
               <input type="text" />
               </h6>
               <h6>
               <input type="text" name="" id="" />
               </h6>
               <h6>
               <input type="text" name="" id="" />
               </h6>
               <h6>
               <input type="text" name="" id="" />
               </h6>

               <h6>
               <input type="text" name="" id="" />

               </h6>
            <h6>
            <input type="text" name="" id="" />
            </h6>
            <h6>
            <input type="text" name="" id="" />
            </h6>
            </div>
            <div className="middle">
            <h6>
               Role
               </h6>
               <input type="text" name="" id="" />
               <h6>
              <input type="text" />
               </h6>
               <h6>
               <input type="text" name="" id="" />
               </h6>
               <h6>
               <input type="text" />
               </h6>
               <h6>
               <input type="text" name="" id="" />
               </h6>
               <h6>
               <input type="text" name="" id="" />
               </h6>
               <h6>
               <input type="text" name="" id="" />
               </h6>

               <h6>
               <input type="text" name="" id="" />

               </h6>
            <h6>
            <input type="text" name="" id="" />
            </h6>
            <h6>
            <input type="text" name="" id="" />
            </h6>
            </div>
          </div>
         </div> */}
         <div className='container'>
            <div className='left'>
                <button>
                    Add User
                </button>
            </div>
         <div className='right'>
         <form onSubmit={handleSubmit}>
         <table>
  <tr>
    <th>Koushik</th>
    <th>Mask</th>
    <th>redact</th>
    <th>Role</th>
  </tr>
  <tr>
    <td>Name</td>
    <td><input type="text" name="" id="" onChange={handleChange} /></td>
    <td><input type="text" name="" id="" onChange={handleChange}/></td>
    <td><input type="text" name="" id=""onChange={handleChange} /></td>
  </tr>
  <tr>
    <td>DOB</td>
    <td><input type="text" name="" id=""onChange={handleChange} /></td>
    <td><input type="text" name="" id="" onChange={handleChange}/></td>
    <td><input type="text" name="" id=""onChange={handleChange} /></td>
  </tr>
  <tr>
  <td>Address</td>
    <td><input type="text" name="" id=""onChange={handleChange} /></td>
    <td><input type="text" name="" id="" onChange={handleChange}/></td>
    <td><input type="text" name="" id="" onChange={handleChange}/></td>
  </tr>
  <tr>
  <td>Phone Number</td>
    <td><input type="text" name="" id="" onChange={handleChange}/></td>
    <td><input type="text" name="" id="" onChange={handleChange}/></td>
    <td><input type="text" name="" id="" onChange={handleChange}/></td>
  </tr>
  <tr>
  <td>Email</td>
    <td><input type="text" name="" id=""onChange={handleChange} /></td>
    <td><input type="text" name="" id="" onChange={handleChange}/></td>
    <td><input type="text" name="" id="" onChange={handleChange}/></td>
  </tr>
  <tr>
  <td>Buareu</td>
    <td><input type="text" name="" id="" onChange={handleChange}/></td>
    <td><input type="text" name="" id="" onChange={handleChange}/></td>
    <td><input type="text" name="" id="" onChange={handleChange}/></td>
  </tr>
  <tr>
  <td>Credit Score</td>
    <td><input type="text" name="" id="" onChange={handleChange}/></td>
    <td><input type="text" name="" id="" onChange={handleChange}/></td>
    <td><input type="text" name="" id="" onChange={handleChange}/></td>
  </tr>
  <tr>
  <td>Card Number</td>
    <td><input type="text" name="" id=""onChange={handleChange} /></td>
    <td><input type="text" name="" id="" onChange={handleChange}/></td>
    <td><input type="text" name="" id="" onChange={handleChange}/></td>
  </tr>
  <tr>
  <td>Status</td>
    <td><input type="text" name="" id=""onChange={handleChange} /></td>
    <td><input type="text" name="" id="" onChange={handleChange}/></td>
    <td><input type="text" name="" id="" onChange={handleChange}/></td>
  </tr>
  <tr>
  <td>Issuing Bank</td>
    <td><input type="text" name="" id="" onChange={handleChange}/></td>
    <td><input type="text" name="" id="" onChange={handleChange}/></td>
    <td><input type="text" name="" id="" onChange={handleChange}/></td>
  </tr>
  
</table>
   <input type="submit" value="Submit" />
    </form>
         </div>
         </div>
     
        </>
    )

}