import {Fragment, useEffect, useState} from 'react'
import { useParams } from 'react-router';
import axios from 'axios';
import {Link} from 'react-router-dom'
import InfoCard from "../Component/InfoCard"
import './Info.css';

export default function Info() {
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
			  setData(res.data.Club);
			  setIsLoading(false);
			} catch (error) {
			  setIsLoading(false);
			  console.log(error);
			}
		  };
		  fetchData();
		}, []);

    return (
        <div>
            {data.length>0 && data.map((item, idx) => (<Link to={"/Info/" + item}><div>
                </div></Link>))}
                <div className="container-profile">
                {data.map((item, index) => (
                    <Fragment key={item.id}>
                        <InfoCard
                            name={item.name}
                            short_code={item.short_code}
                            twitter={item.twitter}
                            founded={item.founded}
                            league={item.league}
							img={item.img}

                        />
                        {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                    </Fragment>
                ))}
            </div>
        </div>
    )
}

