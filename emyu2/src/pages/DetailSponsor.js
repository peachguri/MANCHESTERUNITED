import { useLocation } from "react-router-dom";

function DetailSponsor() {
    
		const { state } = useLocation();

    return (   
       <div>
            <img src={state.img} style={{width: "200px"}} /> 
            <p>{state.name}</p>
     </div>
    )

}

export default DetailSponsor
