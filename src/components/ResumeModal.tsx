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
                height: 'calc(100vh - 2em)',
                maxWidth: '950px',
                maxHeight: '1200px',
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
                    pr: 2,
                    mt: 2,
                    mb: 1
                }}>
                    <Typography variant="h4">
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
                    height: '100%',
                    background: 'white',
                }}>
                    <object data={resumeUrl} type="application/pdf" width="100%" height="100%">
                        <iframe title="resume.pdf" src={resumeUrl} width="100%" height="100%" style={{border: "none"}}>
                            You need a Frames Capable browser to view this content.
                        </iframe>
                    </object>
                </Box>
            </Box>
        </Modal>
    )
};

export default ResumeModal;