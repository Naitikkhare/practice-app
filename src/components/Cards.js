import React from 'react'

export default function Card(props) {
    let badgeText
    if (props.availability === "Sold Out") {
        badgeText = "SOLD OUT"
    } else if (props.availability === "Available") {
        badgeText = "Available"
    }

    return (
        <div className="card">
            {
                badgeText && <div className="card-badge">{badgeText}</div>
            }
            <img 
                src={require(`../images/${props.coverImg}`)}
                className="card-image"
            />
           <p className="card-title">{props.title}</p>
            <p className="card-des">{props.description}</p>
           <p className="card-price">{props.price}</p>

        </div>
    )

}