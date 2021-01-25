import SectorDiv from "./sector.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Sector = (props) =>{


let ticketsList = props.tickets.map(ticket=><div style={ticket.active ? {backgroundColor:"green"} : {backgroundColor:"red"}}><FontAwesomeIcon icon={faUser}/><div>{ticket.sector + ticket.seat}</div></div>)


let listAVielableSeats = [];
let listAvielableSectors = [];

    for (let i=0 ; i < props.tickets.length ; i++){
        if(props.tickets[i].active == true){
            if(props.tickets.length > i+1 && props.tickets[i].sector == props.tickets[i+1].sector && props.tickets[i+1].active == true){
                if(props.tickets.length > i+2 && props.tickets[i+1].sector == props.tickets[i+2].sector && props.tickets[i+2].active == true){
                    listAVielableSeats.push(props.tickets[i])
                    listAVielableSeats.push(props.tickets[i+1])
                    listAVielableSeats.push(props.tickets[i+2])
                    listAvielableSectors.push(props.tickets[i].sector)
                }
            }
        }
    }

    let uniq = [...new Set(listAvielableSectors)];

    

    return(
        <SectorDiv>
            {ticketsList}
            <div className="avielableSeats">Avielable seats : {listAVielableSeats.map(seat=> <div>{seat.sector + seat.seat}</div>)}</div>
            <div className="avielableRows">3 seats avielable in rows : {uniq.map(seat=> <div>{seat}</div>)}</div>
        </SectorDiv>
    )
}

export default Sector;