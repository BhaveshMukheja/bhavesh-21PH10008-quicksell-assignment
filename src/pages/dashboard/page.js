import React from 'react'
import Navbar from '../../components/Navbar/comp'
import Card from '../../components/Card/comp'
import ColumnHeader from '../../components/ColumnHeader/comp'
import KanbanBoard from '../../service/fetchTickets'


const Dashboard = ({tickets, setTickets}) => {
  return (
    <>
    <div><Navbar></Navbar></div>

<div><ColumnHeader/></div>
    <div><Card></Card></div>
   

    </>
  )
}

export default Dashboard