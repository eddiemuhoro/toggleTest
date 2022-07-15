import React from 'react'
import './time.css'
const Time = () => {
    const times=[
        {
            id:1,
            title:"BreakFirst",
            time:"6:30am - 10:00am"
           
        },
        {
            id:1,
            title:"Lunch",
            time:"12:00pm - 2:00pm"
           
        },
        {
            id:1,
            title:"BreakFirst",
            time:"6:30am - 10:00am"
           
        },
    ]
  return (
    <div>
        {times.map((time)=>{
            return(
                <div className='time-table'>
                    <h2>{time.title}</h2>
                    <p>{time.time}</p>
                </div>
            )
        })}
       

    </div>
  )
}

export default Time