import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <section style={{
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        top: '50%',
        left: '50%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        background: 'linear-gradient(318deg, rgb(0, 41, 107) -18.53%, rgb(73, 109, 219) 97.64%)',
        padding: '20px',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 1px 2px',
        borderRadius: '10px'
      }}>
        <div className='flex'>
          <div>
            <img src="https://d6kou6k0qy9rq.cloudfront.net/eyJidWNrZXQiOiJ3ZWJlZHByb2QiLCJrZXkiOiJhc3NldHMvaW1hZ2VzL2VkX3NtaWxlLndlYnAiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI1Nn19fQ==" alt="pict" />
          </div>
          <div>
            <p style={{ color: '#70ee7d', fontSize: '36px', fontWeight: '600' }}>Wellcome</p>
            <p style={{ color: '#ffffff', fontSize: '36px', fontWeight: '600' }}>English Reading Basic (A1)</p>
            <Link to={'/question'}><Button sx={{
              width: '100%', backgroundColor: '#4caf50', paddingX: '20px',
              paddingY: '10px',
              borderRadius: '10px',
              marginTop: '30px', textTransform: 'none', fontSize: '1.5rem'
            }} variant='contained'>Start!</Button></Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home