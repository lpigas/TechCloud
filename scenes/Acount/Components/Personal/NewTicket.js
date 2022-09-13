import React from 'react'
import StandartInput from '../../../../components/atoms/Input/StandartInput'

export default function NewTicket({allTickets, newTicket, setNewTicket}) {
    const newTicketNum = allTickets[0].numTicket.slice(1)
    console.log( +newTicketNum)
  return (
    <div>
        <div>Номер Ticket: </div>
    </div>
  )
}
