import React, { useState,useEffect } from 'react'
import styles from './Properties.module.css';
import { Link } from 'react-router-dom';
import PropertyCard from '../PropertyCard/PropertyCard';
// import { use } from 'react';
import axios from 'axios';

function Properties() {
  const [propertyList, setPropertyList] = useState([]);
  const [searchTerm,setSearchTerm]=useState('');
  const [currentPage,setCurrentPage] = useState(1);
  const propertiesPerPage = 4;

  //`fetch properties from data base 
  useEffect(()=>{
    const fetchProperties = async () =>{
      try{
              const response = await axios.get('http://localhost:3000/api/property/');
              setPropertyList(response.data);

      }catch(error){
        console.error('Error fetching property ',error);
      }
    };
    fetchProperties();
  },[]);

   const startIndex = (currentPage-1)*propertiesPerPage;
   const endIndex = startIndex + propertiesPerPage;

const currentProperties = propertyList.slice(startIndex,endIndex)
const totalPages = Math.ceil(propertyList.length/propertiesPerPage);


// handle pagination
const handlePageChange = (pageNumber)=>{
  setCurrentPage(pageNumber);
}

  //filter properties based on serch item

  const filterProperties = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = propertyList.filter(
      (p) =>
        p.title.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm) ||
        p.location.toLowerCase().includes(searchTerm)
    );
    setPropertyList(filtered);
    
  };


  // Delete properties logick 
const  deleteProperty =async(id)=>{
  const confirm = window.confirm('Are you sure want delete propetry ');
  console.log("property id :",id);
  if(confirm){
    try{
     const deletedata = await axios.delete(`http://localhost:3000/api/property/delete/${id}`); 
      setPropertyList((prevList) => prevList.filter((property) => property.id !== id));
      setProperties(propertyList);
    }catch(error){
      console.error('Error deleting property ',error);
    }
  }
  window.location.reload();

}

const UpdateProperty = async(id)=>{
   try{
    const UpdateProperty = await axios.put(`http://localhost:3000/api/property/delete/${id}`); 
  
  }catch(errer){
    console.log("error to updateing the property ..",error);
  }
}


 return (
    <div className={styles.SeeProperty}>
       <div className={styles.last}>
           <h3> {propertyList.length} result |  Property in Pune for Sale</h3>
           <div className={styles.inputSerch}>
            <select name="" id="">
                <option value="Buy">BUY</option>
                <option value="Sell">Sell</option>
            </select>
            <input type="text" placeholder='Enter Place | Price | keyWords' onChange={filterProperties} />
             <button type='submit' > <i class="fa-solid fa-magnifying-glass"></i></button>
           </div>
          <div className={styles.properties}>
            {propertyList.map((property,index)=>(
               <PropertyCard  key={property.id} propertyes={property}   deleteProperty={deleteProperty} />
          ))}
         </div>
         {/* pagination controls  */}
         <div className={styles.pagination}>
          {
            Array.from({length:totalPages},(_,index)=>(
              <button
              kay={index+1}
              onClick={()=>handlePageChange(index+1)}
              className={currentPage === index ? styles.activeButton:""}
              >
                { index+1 }
              </button>
            ))
          }
         </div>
       </div>
    </div>
               )
}


export default Properties
