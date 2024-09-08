import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { IconButton, Typography } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CarouselInfo from './CarouselInfo';




export default function ModalInfo() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton onClick={handleOpen}>
                <InfoOutlinedIcon
                    sx={{
                        color: '#1f2121',
                        fontSize: '1.5rem'
                    }} />
            </IconButton>
            <Modal
                open={open}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{
                    position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: 'linear-gradient(0deg, #fff 76.89%, #ffe88a 101.58%)',
                    border: '1px solid #000',
                    borderRadius: '10px',
                    boxShadow: 24,
                    paddingX: '24px',
                    paddingY: '20px',
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                }}
                >
                    <img style={{
                        position: 'absolute',
                        top: '-2%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '120px'
                    }} src="https://d6kou6k0qy9rq.cloudfront.net/eyJidWNrZXQiOiJ3ZWJlZHByb2QiLCJrZXkiOiJhc3NldHMvaW1hZ2VzL2VkX3NtaWxlLndlYnAiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI1Nn19fQ==" alt="pict" />
                    <Typography id="parent-modal-title" sx={{
                        fontWeight: '700', fontSize: 'xx-large',
                        background: 'linear-gradient(90deg, #72c6ef, #23307f 84.38%)', WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text',
                        marginY: '20px',
                    }}>Tap to translate!</Typography>
                    <CarouselInfo />
                    <Button onClick={handleClose} color='error' sx={{ textTransform: "none", width: '100%', marginTop: '20px' }}>Close</Button>
                </Box>
            </Modal>
        </div>
    );
}
