import React from 'react'
import ClientCard from './common/ClientCard';

import escapeRoom from '../assets/preferedByClient/escape-room.jpg'
import greatJigsaw from '../assets/preferedByClient/great-jigsaw-puzzle.jpg'
import armyTheme from '../assets/preferedByClient/army-theme.jpg'
import wheelFortune from '../assets/preferedByClient/wheels-of-fortune.jpg'
import champChallenge from '../assets/preferedByClient/75-min-championship-challenge.jpg'
import gladiator from '../assets/preferedByClient/ride-with-gladiators.jpg'

export default function ClientPreferred() {
    const clientIcon = [escapeRoom]
  return (
    
        <div className='client__preferred-block'>
            <div className='client_preferred-heading'>
                <p className='cp-heading'>Preferred by clients</p>
            </div>
            {/* <marquee> */}
            <div className='client_preferred-marquee'>
                    
                    <div className='cpm-div-flex'>
                        <div className='cp-card'><ClientCard clientLogo={escapeRoom} clientText="Escape Room" /></div>
                        <div className='cp-card'><ClientCard clientLogo={greatJigsaw} clientText="Great Jigsaw Puzzle" /></div>
                        <div className='cp-card'><ClientCard clientLogo={armyTheme} clientText="Army Theme" /></div>
                        <div className='cp-card'><ClientCard clientLogo={wheelFortune} clientText="Wheels of Fortune" /></div>
                        <div className='cp-card'><ClientCard clientLogo={champChallenge} clientText="75 min Championship Challenge" /></div>
                        <div className='cp-card'><ClientCard clientLogo={gladiator} clientText="Ride with Gladiators" /></div>
                        
                        
                    </div>
                    
            </div>
            {/* </marquee> */}
        </div>
    
  )
}
