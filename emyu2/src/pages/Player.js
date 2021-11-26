import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom'
import PlayerCard from "../Component/PlayerCard"
import './Player.css';


export default function Player (){
    const [data, setData,] = useState([])
	const [isLoading, setIsLoading] = useState(false)
    const {itemId} = useParams()
	console.log(data)
	useEffect(() => {
		const fetchData = async () => {
			try {
			  const res = await axios.get(
				"https://my-json-server.typicode.com/peachguri/dbemyu/db"
			  );
			  setData(res.data.Players);
			  setIsLoading(false);
			} catch (error) {
			  setIsLoading(false);
			  console.log(error);
			}
		  };
		  fetchData();
		}, []);
		let navigate = useNavigate();

    return (
		
		<div>
			{data.length>0 && data.map((item, idx) => (<Link to={"/Player/" + item}><div>

				</div></Link>))}
				<div className="container-profile">
                {data.map((item, index) => (
                    <Fragment key={item.id}>
                        <PlayerCard
                            name={item.name}
                            number={item.number}
                            country={item.country}
                            position={item.position}
							img={item.img}
							onClick={() => navigate(`detail/`, { state: item })}
                        />
                        {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                    </Fragment>
                ))}
            </div>
		</div>
	)




}

