import {Fragment, useEffect, useState} from 'react'
import { useParams } from 'react-router';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {Link} from 'react-router-dom'
import VenueCard from "../Component/VenueCard"
import './Info.css';

export default function Info() {
    const [data, setData,] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	console.log(data)
	useEffect(() => {
		const fetchData = async () => {
			try {
			  const res = await axios.get(
				"https://my-json-server.typicode.com/peachguri/dbemyu/db"
			  );
			  setData(res.data.Sponsor);
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
            {data.length>0 && data.map((item, idx) => (<Link to={"/Info/" + item}><div>
                </div></Link>))}
                <div className="container-profile">
                {data.map((item, index) => (
                    <Fragment key={item.id}>
                        <VenueCard
                            name={item.nam}      
						              	img={item.img}
                            onClick={() => navigate(`DetailSponsor/`, { state: item })}
                        />
                        {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                    </Fragment>
                ))}
            </div>
        </div>
    )
}

