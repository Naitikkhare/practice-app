import React from 'react'
import Navbar from './components/Navbar'
import Cover from './components/Cover'
import data from './data'
import Card from './components/Cards'

export default function App() {
    const cards = data.map(item => {
      return (
        <Card 
          key = {item.id}
          {...item}
        />
      )
    })
  return (
    <div className = "container">
      <Navbar />
      <Cover />
      <section className="cards-list">
          {cards}
      </section>
    </div>
  )
} 