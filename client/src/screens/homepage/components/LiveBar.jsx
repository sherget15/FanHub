import React from 'react'
import './LiveBar.css'  

export default function LiveBar() {
  return (
    <div className='liveBar'>

      <div className='mlbContainer'>

        <div className='mlbScoresCont'>
          <div className='mlb1'>
            <p>StL - 1</p>
            <p>ATL - 9</p>
          </div>
          <div className='mlb2'>
            <p>StL - 1</p>
            <p>ATL - 9</p>
          </div>
          <div className='mlb3'>
            <p>StL - 1</p>
            <p>ATL - 9</p>
          </div>
        </div>

        <div className='mlbHeader'>
        <p>MLB</p>
        </div>
      
      </div>

      <div className='nflContainer'>

        <div className='nflScoresCont'>
          <div>
            <p>StL - 1</p>
            <p>ATL - 9</p>
          </div>
          <div>
            <p>StL - 1</p>
            <p>ATL - 9</p>
          </div>
          <div>
            <p>StL - 1</p>
            <p>ATL - 9</p>
          </div>
        </div>

        <div className='nflHeader'>
        <p>NFL</p>
        </div>
      
      </div>

      <div className='mlsContainer'>

        <div className='mlsScoresCont'>
          <div>
            <p>StL - 1</p>
            <p>ATL - 9</p>
          </div>
          <div>
            <p>StL - 1</p>
            <p>ATL - 9</p>
          </div>
          <div>
            <p>StL - 1</p>
            <p>ATL - 9</p>
          </div>
        </div>

        <div className='mlsHeader'>
        <p>MLS</p>
        </div>
      
      </div>

      <div className='nbaContainer'>

        <div className='nbaScoresCont'>
          <div>
            <p>StL - 1</p>
            <p>ATL - 9</p>
          </div>
          <div>
            <p>StL - 1</p>
            <p>ATL - 9</p>
          </div>
          <div>
            <p>StL - 1</p>
            <p>ATL - 9</p>
          </div>
        </div>

        <div className='nbaHeader'>
        <p>NBA</p>
        </div>

      </div>

    </div>
  )
}
