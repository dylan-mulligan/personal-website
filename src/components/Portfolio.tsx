import React, { JSX } from "react";
import { Box, Typography } from "@mui/material";
import ProjectList from "./ProjectList";
import WorkExperienceList from "./WorkExperienceList";

const Portfolio: React.FC = (): JSX.Element => {
    const projects = [
        {
            name: "Automated SBOM Generation",
            description: "Developed tooling for generating SBOMs using Java and NLP techniques.",
            details:
                `This project leverages Java's polymorphism and NLP techniques 
                to extract and parse software bill of materials from repositories, 
                helping organizations track dependencies more effectively.`
        },
        {
            name: "National Vulnerability Intelligence Platform",
            description: "Security analysis and reporting tool for software dependencies.",
            details:
                `Developed scalable microservices, built a public/private repo scraping 
                framework  for large-scale data ingestion, and implemented best practices 
                for  version control and CI/CD to streamline deployments and testing.`
        }
    ];

    const experiences = [
        {
            company: "RIT Global Cybersecurity Institute",
            role: "Software Security Engineer",
            details:
                `Orchestrated cross-functional teams, coordinating developers, analysts, 
                and QA engineers for efficient workflows. Led a small development team 
                to meet sprint and Scrum objectives, while directing the SDLC with best 
                practices in system design, testing automation, and CI/CD for scalability 
                and reliability.`,
            technologies: [
                { name: "PostgreSQL", url: "https://www.postgresql.org" },
            ]
        },
        {
            company: "Rochester Institute of Technology",
            role: "Software Engineering Course Assistant",
            details:
                `Assisted students with software engineering web engineering through one-on-one 
                support, office hours, and study sessions. Conducted code reviews and graded 
                assignments, providing feedback to improve code quality and maintain best 
                practices.`,
            technologies: [
                { name: "React", url: "https://reactjs.org/" },
                { name: "Reactstrap", url: "https://reactstrap.github.io/?path=/story/home-installation--page" },
                { name: "Node.js", url: "https://nodejs.org/" },
                { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }
            ]
        }
    ];

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
                <ProjectList projects={projects} />
            </Box>
            <Box>
                <Typography variant="h5" textAlign="center">Work Experience</Typography>
                <WorkExperienceList experiences={experiences} />
            </Box>
        </Box>
    );
};

export default Portfolio;