import React from 'react'
import SectionTitle from './SectionTitle'

const games = [
    {
        symbol: '♠',
        symbolColor: '#000',
        title: 'Five Point Show',
        subtitle: 'A card game - think you can survive?',
        link: 'https://five-point-show-production.up.railway.app/',
    },
    {
        symbol: '♥',
        symbolColor: '#c0392b',
        title: '7 Hearts',
        subtitle: 'A classic card game',
        link: 'https://7-hearts-production.up.railway.app/',
    },
]

export default function Game() {
    return (
        <div className='game-section' id='game'>
            <SectionTitle
                header='MY GAMES.'
                sub_header='PLAY'
            />
            <div className='game-cards-row'>
                {games.map((game) => (
                    <div
                        key={game.title}
                        className='game-card-inner'
                        onClick={() => window.open(game.link, '_blank')}
                    >
                        <div className='game-spade' style={{ color: game.symbolColor }}>
                            {game.symbol}
                        </div>
                        <h3 className='game-title'>{game.title}</h3>
                        <p className='game-subtitle'>{game.subtitle}</p>
                        <span className='game-play-btn'>Play Now →</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
