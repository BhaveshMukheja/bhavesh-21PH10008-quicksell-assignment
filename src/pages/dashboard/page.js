import React from 'react'
import Navbar from '../../components/Navbar/comp'
import Card from '../../components/Card/comp'
import KanbanBoard from '../../service/fetchTickets'


const Dashboard = ({tickets, setTickets}) => {
  return (
    <>
    <div><Navbar></Navbar></div>


    <div><Card></Card></div>
   

    </>
  )
}

export default Dashboard