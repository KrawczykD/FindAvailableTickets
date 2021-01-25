import styled from 'styled-components';


const SectorDiv = styled.div`
    width:${50*13}px;
    border:1px solid red;
    margin: 20% auto;
    padding: 20px;

    display: flex;
    flex-wrap:wrap;

    & > div{
        width: 50px;
        height:50px;
        border-radius:50px;
        display: flex;
        justify-content:center;
        align-items:center;
    }

    & > div.avielableSeats{

       width:50%;
       & > div {
        padding: 5px;
    }
    }

    & > div.avielableRows{
        width:50%;
        & > div {
            padding: 5px;
        }
     }

`

export default SectorDiv;
