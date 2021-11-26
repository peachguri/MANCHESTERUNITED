import { Fragment } from "react";
import ProfileCard from "../Component/ProfileCard";
import "./Profile.css";

export default function Profile(){
    const data = [
        {
            id: 1,
            name: "Daniel Parningotan A.S",
            nim: "21120119130086",
            img: "https://avatars.githubusercontent.com/u/64211478?v=4",
            github: "https://github.com/peachguri"

        }
    ];
    return (
        <div className="container">
            <h1>Profile</h1>
            <h1>Web ini dibuat untuk</h1>
            <h1>Menyelesaikan rangkaian praktikum mdp</h1>
            <div className="container-profile">
                {data.map((item, index) => (
                    <Fragment key={item.id}>
                        <ProfileCard
                            name={item.name}
                            nim={item.nim}
                            img={item.img}
                            github={item.github}
                        />
                        {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                    </Fragment>
                ))}
            </div>
        </div>
    );

}
