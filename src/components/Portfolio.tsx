import React, { JSX, useState } from "react";
import { Box, Typography, useTheme, useMediaQuery, IconButton, Button, Snackbar } from "@mui/material";
import ExpandableList from "./expandable-list/ExpandableList";
import ResumeModal from "./ResumeModal";
import { IconBrandGithub, IconBrandLinkedin, IconFileDescription, IconMail, IconPhone } from "@tabler/icons-react";

let projects = [];
let experiences = [];

try {
    projects = require("../data/projects.json");
} catch (error) {
    console.error("Error loading projects.json:", error);
}

try {
    experiences = require("../data/experiences.json");
} catch (error) {
    console.error("Error loading experiences.json:", error);
}

const Portfolio: React.FC = (): JSX.Element => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const [resumeModalOpen, setResumeModalOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const scalingVariant = useMediaQuery(theme.breakpoints.down("sm")) ? "subtitle1" : "h5";

    const handleResumeModalOpen = () => setResumeModalOpen(true);
    const handleResumeModalClose = () => setResumeModalOpen(false);
    const handleSnackbarClose = () => setSnackbarOpen(false);

    const handlePhoneNumberClick = () => {
        navigator.clipboard.writeText("(860) 885-8661");
        setSnackbarOpen(true);
    };

    const chipStyle = (expandOnHover: boolean) => {
        return {
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
            '& .MuiChip-label': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: expandOnHover ? '-22px' : '0',
                transition: 'margin-left 0.3s ease',
            },
            '&:hover .MuiChip-label': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: expandOnHover ? '-10px' : '0',
            },
            '&:hover': {
                boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.2)',
                backgroundColor: theme.palette.background.default,
                transition: 'box-shadow 0.3s ease',
            },
        };
    };

    const headerBoxStyle = (alignCenter: boolean) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: 0.25,
        width: '275px',
        height: '225px',
        alignItems: alignCenter ? 'center' : 'flex-start',
        border: `2px solid ${theme.palette.divider}`,
        transition: 'border 0.3s ease-in-out',
        borderRadius: 2,
        p: 1,
        '&:hover': {
            border: `2px solid ${theme.palette.info.main}`,
            transition: 'border 0.5s ease-in-out',
        },
    });

    const contactButtonStyle = {
        justifyContent: 'flex-start',
        flexGrow: 1,
        display: 'flex',
        width: '100%'
    }

    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: 2,
                height: "100%",
                width: "100%",
                margin: "auto",
                padding: 1,
            }}
        >
            <Typography
                variant="h2"
                component="div"
                sx={{
                    textAlign: "center",
                    paddingBottom: 1,
                    display: { xs: 'block', sm: 'none' },
                    color: theme.palette.text.primary,
                }}
            >
                Dylan Mulligan
            </Typography>
            <Typography variant={scalingVariant} textAlign="center">
                Backend Brain 🧠, Frontend Flair 🎉
            </Typography>
            <Typography variant={scalingVariant} textAlign="center">
                Fast, Clean, and Scalable 🏎️
            </Typography>
            <Typography variant={scalingVariant} textAlign="center">
                Full-Stack Architect 🛠️
            </Typography>
            <Typography variant="body2" textAlign="center">
                Pushing to Prod & Hoping for the Best 🚀🔥
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: isSmallScreen ? 'column' : 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 2,
                gap: 4
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
                            sx={{...chipStyle(false), width: '64px', height: '64px'}}
                        >
                            <IconFileDescription size={40} />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Typography variant="h4" textAlign="left">Work Experience</Typography>
                <ExpandableList items={experiences ?? []} chipStyle={chipStyle} />
            </Box>
            <Box>
                <Typography variant="h4" textAlign="left">Projects</Typography>
                <ExpandableList items={projects ?? []} chipStyle={chipStyle} />
            </Box>
            <ResumeModal open={resumeModalOpen} onClose={handleResumeModalClose} resumeUrl="https://pub-23ec377c65844af8b2a21a08d41024df.r2.dev/resume.pdf" />
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={2500}
                onClose={handleSnackbarClose}
                message="Phone number copied to clipboard"
            />
        </Box>
    );
};

export default Portfolio;