import React from 'react'
import SectionTitle from './SectionTitle'

export default function Game() {
    function playGame() {
        window.open("https://five-point-show-production.up.railway.app/", "_blank");
    }

    return (
        <div className='game-section' id='game'>
            <SectionTitle
                header='FIVE POINT SHOW.'
                sub_header='PLAY'
            />
            <div className='game-card-wrapper' onClick={playGame}>
                <div className='game-card-inner'>
                    <div className='game-spade'>♠</div>
                    <h3 className='game-title'>Five Point Show</h3>
                    <p className='game-subtitle'>A card game — think you can beat it?</p>
                    <span className='game-play-btn'>Play Now →</span>
                </div>
            </div>
        </div>
    )
}
