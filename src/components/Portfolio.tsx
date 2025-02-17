import React, { JSX } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import ExpandableList from "./ExpandableList";

// Safe import in case files are missing or cannot be parsed
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

/**
 * Portfolio component that displays the user's name, title, projects, and work experience.
 * It uses the ExpandableList component to display projects and experiences in an expandable list format.
 *
 * @returns {JSX.Element} The rendered Portfolio component.
 */
const Portfolio: React.FC = (): JSX.Element => {
    const theme = useTheme();

    const scalingVariant = useMediaQuery(theme.breakpoints.down("sm")) ? "subtitle1" : "h5";

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
                    display: { xs: 'block', sm: 'none'},
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
            <Box>
                <Typography variant="h5" textAlign="left">Work Experience</Typography>
                <ExpandableList items={experiences ?? []} />
            </Box>
            <Box>
                <Typography variant="h5" textAlign="left">Projects</Typography>
                <ExpandableList items={projects ?? []} />
            </Box>
        </Box>
    );
};

export default Portfolio;