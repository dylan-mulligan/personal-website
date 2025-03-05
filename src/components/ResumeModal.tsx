import React, {JSX} from 'react';
import { Modal, Box, IconButton } from '@mui/material';
import {Document, Page, pdfjs} from 'react-pdf';
import CloseIcon from '@mui/icons-material/Close';
import Typography from "@mui/material/Typography";
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

interface ResumeModalProps {
    open: boolean;
    onClose: () => void;
    resumeUrl: string;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ open, onClose, resumeUrl }): JSX.Element => (
    <Modal open={open} onClose={onClose}>
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxHeight: '915px',
            bgcolor: 'background.paper',
            boxShadow: 24,
            padding: '15px 20px 20px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            overflow: 'auto',
            borderRadius: 2
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
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
                borderRadius: 2,
                overflow: 'hidden',
                width: '100%',
            }}>
                <Document file={resumeUrl}>
                    <Page pageNumber={1}/>
                </Document>
            </Box>
        </Box>
    </Modal>
);

export default ResumeModal;