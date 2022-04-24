import React from 'react'

export default function Counter({count,title}) {
  return (
    <div>
        <div className='counter__card'>
            <div className='counter__wrapper'>
                <div className='count'>
                    <p className='count_value'>{count}</p>
                </div>
                <div className='counter_title'>
                    <p className='count_title'>{title}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
