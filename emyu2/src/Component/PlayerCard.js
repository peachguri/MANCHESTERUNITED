import "./PlayerCard.css";

import { RiFootballLine } from 'react-icons/ri';


export default function PlayerCard({ name, number, country, position, img,onClick }) {
    return (
        <div className="player-card" onClick={onClick}>
            <img src={img} alt={name} id="profile" />
            <div className="container-text">
                <p id="name">{name}</p>
                <p id="number">{number}</p>
                <p id="country">{country}</p>
                <p id="position">{position}</p>
            </div>
            <div>
                    <div className="btn">
                        <div className="btn-icon">
                            <RiFootballLine size="25px" color="rgb(85, 26, 139)" />
                        </div>
                        <span></span>
                    </div>
                
            </div>
        </div>
    );
}
