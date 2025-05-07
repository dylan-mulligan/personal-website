import React, { JSX } from "react";
import { Box, Typography, useTheme, useMediaQuery, Grid } from "@mui/material";
import ExpandableList from "./expandable-list/ExpandableList";
import TableOfContents from "./TableOfContents";
import SectionHeader from "./SectionHeader";
import ContactResumeBoxes from "./ContactResumeBoxes";

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
    const isMediumScreen = useMediaQuery(theme.breakpoints.down("lg"));
    const scalingVariant = useMediaQuery(theme.breakpoints.down("sm")) ? "subtitle2" : "subtitle1";

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

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                width: "100%",
                margin: "auto",
                padding: 1,
            }}
        >
            {isMediumScreen && (
                <Box sx={{ 
                    mb: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
                }}>
                    <TableOfContents />
                    <ContactResumeBoxes 
                        resumeUrl="https://pub-23ec377c65844af8b2a21a08d41024df.r2.dev/resume.pdf"
                        useHalfWidthBoxes={true}
                    />
                </Box>
            )}

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", lg: "2fr 1fr" },
                    gap: 2,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        ml: { xs: 0, lg: 8 }
                    }}
                >
                    <Box id="about">
                        <SectionHeader title="About" anchorId="about" theme={theme} />
                        <Typography variant={scalingVariant} textAlign="left" sx={{ pl: 2, pr: 2, pt: 1 }}>
                            Blending flexible backend design 🧱 with frontend flair 🎉,
                            I specialize in fast 🏎️, clean 🧽, and scalable 🏭 solutions.
                            As a full-stack architect 🛠️, I thrive on pushing production-ready
                            🚀 code while ensuring an excellent user experience.  I'm always ready
                            to explore new technologies 🤖 and seamlessly merge them into robust projects 🏗️.
                        </Typography>
                    </Box>
                    <Box id="work-experience">
                        <SectionHeader title="Work Experience" anchorId="work-experience" theme={theme} />
                        <ExpandableList items={experiences ?? []} chipStyle={chipStyle} />
                    </Box>
                    <Box id="projects">
                        <SectionHeader title="Projects" anchorId="projects" theme={theme} />
                        <ExpandableList items={projects ?? []} chipStyle={chipStyle} />
                    </Box>
                </Box>


                {!isMediumScreen && (
                    <Box
                        sx={{
                            display: { xs: "none", lg: "flex" },
                            flexDirection: "column",
                            gap: 2,
                            height: "100%",
                            overflow: "visible",
                            width: "100%",
                        }}
                    >
                        <ContactResumeBoxes
                            resumeUrl="https://pub-23ec377c65844af8b2a21a08d41024df.r2.dev/resume.pdf"
                            useHalfWidthBoxes={true}
                        />
                        <TableOfContents />
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default Portfolio;

