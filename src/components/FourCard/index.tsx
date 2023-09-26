import React from 'react'
import Card from '../Card'
import './index.scss'

function FourCard() {

    const listCard = [
        {
            src:"/images/card.png",
            time:"1h 20p",
            title:"Photoshop Advance: Retouching with Master of Photoshop (2023) ...",
            instructor:"Duy Vu",
            star:"4/5",
            currentPrice:"80$",
            defaultPrice:"100$",
            viewer:"(1,000,000)",
        },
        {
            src:"/images/card1.png",
            time:"1h 20p",
            title:"Photoshop Advance: Retouching with Master of Photoshop (2023) with Master of Photoshop (2023)",
            instructor:"Duy Vu",
            star:"4/5",
            currentPrice:"80$",
            defaultPrice:"100$",
            viewer:"(1,000,000)",
        },
        {
            src:"/images/card2.png",
            time:"1h 20p",
            title:"Photoshop Advance: Retouching with Master of Photoshop (2023) ...",
            instructor:"Duy Vu",
            star:"4/5",
            currentPrice:"80$",
            defaultPrice:"130$",
            viewer:"(150,000)",
        },
        {
            src:"/images/card.png",
            time:"1h 20p",
            title:"Photoshop Advance: Retouching with Master of Photoshop (2023) ...",
            instructor:"Jacod Andree",
            star:"4/5",
            currentPrice:"50$",
            defaultPrice:"120$",
            viewer:"(1,000,000)",
        }
    ]

  return (
    <div className='FourCard'>
        {listCard.map((card, index) => (
            <Card 
            src={card.src}
            time={card.time}
            title={card.title}
            instructor={card.instructor}
            star={card.star}
            currentPrice={card.currentPrice}
            defaultPrice={card.defaultPrice}
            viewer={card.viewer}
            key={index}
            ></Card>
        ))}
    </div>
  )
}

export default FourCard
