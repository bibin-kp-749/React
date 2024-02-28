import React, { memo } from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../components/Context';

const IndividualBlog = () => {
    const{id}=useParams()
    const{blogs}=useContext(Context)
    // console.log(blogs)
    // console.log(id);
    // const value=blogs.filter((element)=>{
    //     if(element.id==id){
    //         return element;
    //     }

    // })
    let value=null
    
    return(
        <>
        {
            blogs.filter((element)=>{
                if(element.id==id){
                    value=element.heading
                }
            })

        }
        <h1>{value}</h1>
        </>
    )
}

export default React.memo(IndividualBlog)
