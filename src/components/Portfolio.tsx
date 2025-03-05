import React, { JSX, useState } from "react";
import { Box, Typography, useTheme, useMediaQuery, IconButton, Link } from "@mui/material";
import ExpandableList from "./expandable-list/ExpandableList";
import ResumeModal from "./ResumeModal";
import { IconFileDescription, IconMail, IconPhone } from "@tabler/icons-react";

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

    const scalingVariant = useMediaQuery(theme.breakpoints.down("sm")) ? "subtitle1" : "h5";

    const handleResumeModalOpen = () => setResumeModalOpen(true);
    const handleResumeModalClose = () => setResumeModalOpen(false);

    const chipStyle = (expandOnHover: boolean) => {
        return {
            border: `none`,
            padding: 1.5,
            marginBottom: 1,
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 50,
            minWidth: 50,
            position: 'relative',
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
                boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.2)',
            },
        };
    };

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
                Cloud & Security Enthusiast ☁️🔒
            </Typography>
            <Typography variant={scalingVariant} textAlign="center">
                Backend Brain 🧠, Frontend Flair 🎉
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
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '250px', alignItems: 'center' }}>
                    <Typography variant="h6" textAlign={"center"}>Contact</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <IconMail />
                        <Typography variant="body2">
                            <Link href="mailto:dylan.mulligan2020@gmail.com">dylan.mulligan2020@gmail.com</Link>
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <IconPhone />
                        <Typography variant="body2">(860) 885-8661</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', width: '250px' }}>
                    <Typography variant="h6" textAlign={"center"}>Resume</Typography>
                    <IconButton
                        onClick={handleResumeModalOpen}
                        size="large"
                        sx={chipStyle(false)}
                    >
                        <IconFileDescription />
                    </IconButton>
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
        </Box>
    );
};

export default Portfolio;