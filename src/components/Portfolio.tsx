import React, {JSX, useState} from "react";
import { Box, Typography, List, ListItem, ListItemText, Collapse } from "@mui/material";

/**
 * Represents a project with a name, description, and details.
 */
interface Project {
    name: string;
    description: string;
    details: string;
}

/**
 * Main portfolio component displaying user information and key sections.
 *
 * @returns {JSX.Element} The portfolio component
 */
const Portfolio: React.FC = (): JSX.Element => {
    const [expandedProject, setExpandedProject] = useState<number | null>(null);

    const projects: Project[] = [
        {
            name: "Automated SBOM Generation",
            description: "Tool for generating SBOMs using Java and NLP techniques.",
            details: "This project leverages Java's polymorphism and NLP techniques to extract and parse software bill of materials from repositories, helping organizations track dependencies more effectively."
        },
        {
            name: "Vulnerability Detection System",
            description: "Security analysis and reporting tool for software dependencies.",
            details: "A system designed to scan dependencies for known vulnerabilities, integrating with security databases to provide actionable remediation steps."
        }
    ];

    const handleToggle = (index: number) => {
        setExpandedProject(expandedProject === index ? null : index);
    };

    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: 2,
                maxWidth: 800,
                margin: "auto",
                padding: 4,
            }}
        >
            <Typography variant="h4" component="h1" textAlign="center">
                Dylan Mulligan
            </Typography>
            <Typography variant="body1" textAlign="center">
                Software Developer | Security Enthusiast
            </Typography>
            <Box>
                <Typography variant="h5" textAlign="center">Projects</Typography>
                <List>
                    {projects.map((project, index) => (
                        <Box key={index}>
                            <ListItem onClick={() => handleToggle(index)}>
                                <ListItemText primary={project.name} secondary={project.description} />
                            </ListItem>
                            <Collapse in={expandedProject === index} timeout="auto" unmountOnExit>
                                <Box sx={{ padding: 2, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
                                    <Typography variant="body2">{project.details}</Typography>
                                </Box>
                            </Collapse>
                        </Box>
                    ))}
                </List>
            </Box>
        </Box>
    );
};

export default Portfolio;
