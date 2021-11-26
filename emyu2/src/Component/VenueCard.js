import "./VenueCard.css";

import { AiOutlineInfoCircle } from 'react-icons/ai';


export default function ProfileCard({ name, img,  onClick}) {
    return (
        <div className="venue-card" onClick={onClick}>
            <img src={img} alt={name} id="profile" />
            <div className="container-text">
                <p id="name">{name}</p>
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
