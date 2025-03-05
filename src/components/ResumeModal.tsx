import React, { JSX, useState, useCallback } from 'react';
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import { Modal, Box, IconButton } from '@mui/material';
import { Document, Page, pdfjs } from 'react-pdf';
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

const maxWidth = 800;

const ResumeModal: React.FC<ResumeModalProps> = ({ open, onClose, resumeUrl }
): JSX.Element => {
    const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
    const [containerWidth, setContainerWidth] = useState<number>();

    const onResize = useCallback<ResizeObserverCallback>((entries) => {
        const [entry] = entries;

        if (entry) {
            setContainerWidth(entry.contentRect.width);
        }
    }, []);

    useResizeObserver(containerRef, {}, onResize);

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '90%',
                maxWidth: '750px',
                maxHeight: '1100px',
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
                    pr: 3
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
                    mb: 2,
                    borderRadius: 1,
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        margin: '10px 0',
                        padding: '10px 0',
                    }} ref={setContainerRef}>
                        <Document file={resumeUrl}>
                            <Page
                                pageNumber={1}
                                width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
                            />
                        </Document>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
};

export default ResumeModal;