import React from 'react'
// import AutoGraphIcon from '@mui/icons-material/AutoGraph';

export default function CardReliable(props) {
    console.log(props)
  return (
    <div>
        <div className='card__container'>
            <div className='card__icon'>
                {/* <AutoGraphIcon className='mui__icon'/> */}
                {/* <svg data-testid="AutoGraphIcon"></svg> */}
            </div>
            <div className='card__text'>
                <p>Physical <br />Programs</p>
            </div>
        </div>
    </div>
  )
}
