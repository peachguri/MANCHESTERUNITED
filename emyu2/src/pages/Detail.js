import { useLocation } from "react-router-dom";

function PlayerDetail() {
    
		const { state } = useLocation();

    return (   
       <div>
            <img src={state.img} style={{width: "200px"}} /> 
            <p>{state.name}</p>
            <p>{state.country}</p>
            <p>{state.position}</p>
     </div>
    )

}

export default PlayerDetail
