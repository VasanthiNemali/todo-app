import React from 'react'
import './Todolist.css'
import Delete from './Images/delete.png'

export const Todolist = ({todolist,deleteHandler}) => {
  return (
    <div>
        {todolist.map((todos,index)=>
            <div key={index}>
              <ul style={{padding:'0px',listStyle: 'none',paddingLeft: 0,width: '250px'}}>
                <li className='list'>

               
              <h5>{todos} &nbsp; <button onClick={()=>deleteHandler(index)} ><img style={{height:'20px',width:'20px'}} src={Delete}/></button></h5>
              </li>
              </ul>
            </div>
         ) 
    }
    </div>
  )
}
