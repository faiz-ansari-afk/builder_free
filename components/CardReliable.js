import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function CardReliable({iconName,cardText}) {
    
  return (
    <div>
        <div className='card__container'>
            <div className='card__icon'>
                <FontAwesomeIcon icon={iconName} size="3x" />
            </div>
            <div className='card__text'>
                <p>{cardText}</p>
            </div>
        </div>
    </div>
  )
}
