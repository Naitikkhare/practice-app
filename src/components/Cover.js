import React from 'react'

export default function Cover() {
    return (
        <section className="cover">
            <img src={require('../images/lenovo.jpg')} className="cover-img" />
            <h1 className="cover-title">LAPTOPS</h1>
            <p className="cover-para">Here are some laptops</p>
        </section>
    )
}