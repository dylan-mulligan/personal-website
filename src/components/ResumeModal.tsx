import React, { JSX } from 'react';
import { Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Typography from "@mui/material/Typography";

interface ResumeModalProps {
    open: boolean;
    onClose: () => void;
    resumeUrl: string;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ open, onClose, resumeUrl }
): JSX.Element => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '90%',
                maxWidth: '651px',
                maxHeight: '975px',
                bgcolor: 'background.paper',
                boxShadow: 24,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                overflow: 'auto',
                borderRadius: 2
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    pl: 3,
                    pt: 3,
                    pr: 3,
                    mb: 2
                }}>
                    <Typography variant="h3">
                        Resume
                    </Typography>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Box sx={{
                    overflow: 'hidden',
                    width: '100%',
                    maxWidth: 'calc(100% - 2em)',
                    borderRadius: 1,
                    mb: 2,
                    height: 'calc(100vh - 175px)'
                }}>
                    <object data={resumeUrl} type="application/pdf" width="100%" height="100%">
                        <iframe title="resume.pdf" src={resumeUrl} width="100%" height="100%" style={{border: "none"}}/>
                    </object>
                </Box>
            </Box>
        </Modal>
    )
};

export default ResumeModal;