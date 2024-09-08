import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';




export default function ModalExit() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton onClick={handleOpen} size='large'>
                <CloseIcon sx={{
                    color: '#1f2121',
                    fontSize: '2rem'
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
                    bgcolor: 'background.paper',
                    border: '1px solid #000',
                    borderRadius:'10px',
                    boxShadow: 24,
                    paddingX:'24px',
                    paddingY:'20px'
                }}>
                    <h2 id="parent-modal-title" className='font-medium text-xl'>Do you want to exit?</h2>
                    <Button onClick={handleClose} variant='contained' color='success' sx={{textTransform:"none",width:'100%',marginTop:'30px',marginBottom:'15px',paddingY:'10px',borderRadius:'10px'}}>Stay</Button>
                    <Link to={'/home'}><Button color='error' sx={{textTransform:"none",width:'100%'}}>Exit</Button></Link>
                </Box>
            </Modal>
        </div>
    );
}
