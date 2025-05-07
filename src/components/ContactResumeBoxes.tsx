import React, { useState } from "react";
import { Box, Typography, useTheme, useMediaQuery, IconButton, Button, Snackbar } from "@mui/material";
import { IconBrandGithub, IconBrandLinkedin, IconFileDescription, IconMail, IconPhone } from "@tabler/icons-react";
import ResumeModal from "./ResumeModal";
import {hoverableContainerStyle} from "../shared-theme/styleUtils";

interface ContactResumeBoxesProps {
  resumeUrl: string;
  useHalfWidthBoxes?: boolean;
}

const ContactResumeBoxes: React.FC<ContactResumeBoxesProps> = ({ resumeUrl, useHalfWidthBoxes = false }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleResumeModalOpen = () => setResumeModalOpen(true);
  const handleResumeModalClose = () => setResumeModalOpen(false);
  const handleSnackbarClose = () => setSnackbarOpen(false);

  const handlePhoneNumberClick = () => {
    navigator.clipboard.writeText("(860) 885-8661");
    setSnackbarOpen(true);
  };

  const chipStyle = {
    border: `none`,
    padding: 1.5,
    marginBottom: 1,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
    minWidth: 50,
    position: 'relative',
    transition: 'box-shadow 0.3s ease',
    '&:hover': {
      boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.2)',
      backgroundColor: theme.palette.background.default,
      transition: 'box-shadow 0.3s ease',
    },
  };

  const headerBoxStyle = (alignCenter: boolean) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: 0.25,
    width: '100%', // Always take full width of container
    height: '225px',
    alignItems: alignCenter ? 'center' : 'flex-start',
    borderRadius: 2,
    p: 1,
    ...hoverableContainerStyle(theme),
    boxSizing: 'border-box', // Ensure padding is included in width calculation
  });

  const contactButtonStyle = {
    justifyContent: 'flex-start',
    flexGrow: 1,
    display: 'flex',
    width: '100%'
  };

  return (
    <>
      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
        gap: 2,
        width: '90%',
        mx: 'auto',
      }}>
        <Box sx={headerBoxStyle(false)}>
          <Typography variant="h4" textAlign={"center"} alignSelf={"center"}>Contact</Typography>
          <Button
            startIcon={<IconMail />}
            href="mailto:dylan.mulligan2020@gmail.com"
            sx={contactButtonStyle}
          >
            dylan.mulligan2020@gmail.com
          </Button>
          <Button
            startIcon={<IconPhone />}
            sx={contactButtonStyle}
            onClick={handlePhoneNumberClick}
          >
            (860) 885-8661
          </Button>
          <Button
            startIcon={<IconBrandGithub />}
            href="https://github.com/dylan-mulligan"
            target="_blank"
            sx={contactButtonStyle}
          >
            github.com/dylan-mulligan
          </Button>
          <Button
            startIcon={<IconBrandLinkedin />}
            href="https://www.linkedin.com/in/dylan-mulligan"
            target="_blank"
            sx={contactButtonStyle}
          >
            linkedin.com/in/dylan-mulligan
          </Button>
        </Box>
        <Box sx={{
          ...headerBoxStyle(true),
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Typography variant="h4" textAlign={"center"}>
            Resume
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <IconButton
              onClick={handleResumeModalOpen}
              sx={{ ...chipStyle, width: '96px', height: '96px' }}
            >
              <IconFileDescription size={64} />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <ResumeModal open={resumeModalOpen} onClose={handleResumeModalClose} resumeUrl={resumeUrl} />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2500}
        onClose={handleSnackbarClose}
        message="Phone number copied to clipboard"
      />
    </>
  );
};

export default ContactResumeBoxes;

