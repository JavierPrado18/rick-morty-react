import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import ResidentInformation from './ResidentInformation';
import ResidentStatus from './ResidentStatus';

const ResidentItem = ({ resident }) => {
    const [residentData,setResidentData]=useState({})
    const  [isLoading ,setIsLoading]=useState(true)
    useEffect(()=>{
        
        axios.get(resident)
            .then(res=>setResidentData(res.data))
            .finally(()=>setIsLoading(false))
    },[])
    return isLoading?(<img src='https://c.tenor.com/BgR83Df82t0AAAAi/portal-rick-and-morty.gif' style={{width:"50px"}}></img>):( 
    <div className='container-resident'>
        <div className='container-img'>
            <img src={residentData.image} alt="" />
            <ResidentStatus status={residentData.status}/>
        </div>
        
        <p >{residentData.name}</p>
        <ResidentInformation specie={residentData.species} origin={residentData.origin?.name} episode={residentData.episode?.length}/>
        
        
    
    </div>
  
    )
};
  

export default ResidentItem