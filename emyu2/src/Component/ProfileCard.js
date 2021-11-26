import "./ProfileCard.css";

import { VscGithub } from 'react-icons/vsc';


export default function ProfileCard({ name, nim, img, github }) {
    return (
        <div className="profile-card">
            <img src={img} alt={name} id="profile" />
            <div className="container-text">
                <p id="nim">{nim}</p>
                <p id="name">{name}</p>
            </div>
            <div>
                <a href={github} target="_blank" rel="noreferrer">
                    <div className="btn">
                        <div className="btn-icon">
                            <VscGithub size="25px" color="rgb(85, 26, 139)" />
                        </div>
                        <span></span>
                    </div>
                </a>
            </div>
        </div>
    );
}
