import React from 'react'
import edcorrect from '../database/ed_correct.json';
import Lottie from 'lottie-react';
import { Button, Rating, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const Result = () => {
    
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
            }} >
                <Lottie className='w-44' animationData={edcorrect} />
                <Typography sx={{ textAlign: 'center', fontSize: '3rem', fontWeight: '600' }}>Thank you<br />you're amazing!</Typography>
                <div className='mt-5' style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column', border: '2px solid #0288d1', borderRadius: '10px ', minWidth: '200px'
                }}>
                    <Typography sx={{ textAlign: 'center', fontSize: '1.5rem', color: 'white', backgroundColor: '#0288d1', borderTopRightRadius: '7px', borderTopLeftRadius: '7px', width: '100%', boxSizing: 'border-box', paddingY: '10px' }}>Score</Typography>
                    <Typography sx={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: '400', marginTop: '10px', marginBottom: '10px' }}>100%</Typography>
                    <Rating sx={{ marginBottom: '10px' }} name="read-only" value={5} readOnly />
                </div>
                <Link to='/home'>
                    <Button variant='contained' sx={{
                        backgroundColor: '#4caf50', paddingX: '20px',
                        paddingY: '10px',
                        borderRadius: '10px',
                        marginTop:'30px',textTransform:'none',fontSize:'1.5rem'
                    }}>continue</Button>
                </Link>
            </section>
        </div>
    )
}

export default Result