import React from 'react';

const Pagination = ({pag,setPag,amount}) => {
    const totalPages=Math.ceil((amount)/8)
    const pages=[]
    for (let i=1;i<=totalPages;i++){
        pages.push(i)
    }
    console.log(pages);
    const previous=()=>{
        
        setPag(pag-8)
            
    }
    const next=()=>{
        setPag(pag+8)    
    }
    return (
        <>
            <button className='btn-pagination' onClick={previous} disabled={pag==0}><i className="fa-solid fa-circle-chevron-left"></i></button>
            <div className='container-pages'>
                {pages.map((page)=>{
                    let background="#062226"
                    if ((pag+8)/8==page){
                        background="white"
                    }
                return(
                    <button key={page} className=" pages" style={{backgroundColor:`${background}`}} onClick={()=>setPag((page-1)*8)}>{page} </button>
                )})}
            </div>
            <button className='btn-pagination' onClick={next} disabled={pag+8>=amount}><i className="fa-solid fa-circle-chevron-right"></i></button>
        </>
    );
};

export default Pagination