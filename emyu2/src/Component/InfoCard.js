import "./ProfileCard.css";

import { AiOutlineInfoCircle } from 'react-icons/ai';


export default function ProfileCard({ name, short_code, twitter, founded, league, img }) {
    return (
        <div className="info-card">
            <img src={img} alt={name} id="profile" />
            <div className="container-text">
                <p id="name">{name}</p>
                <p id="short code">{short_code}</p>
                <p id="twitter">{twitter}</p>
                <p id="founded">{founded}</p>
                <p id="league">{league}</p>
            </div>
            <div>
                    <div className="btn">
                        <div className="btn-icon">
                            <AiOutlineInfoCircle size="25px" color="rgb(85, 26, 139)" />
                        </div>
                        <span></span>
                    </div>
                
            </div>
        </div>
    );
}
