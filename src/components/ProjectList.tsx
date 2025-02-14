import React, { JSX, useState } from "react";
import { Box, List, ListItem, ListItemText, Collapse, Typography } from "@mui/material";

interface Project {
    name: string;
    description: string;
    details: string;
}

interface ProjectListProps {
    projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }): JSX.Element => {
    const [expandedProject, setExpandedProject] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setExpandedProject(expandedProject === index ? null : index);
    };

    return (
        <List>
            {projects.map((project, index) => (
                <Box key={index}>
                    <ListItem
                        onClick={() => handleToggle(index)}
                        sx={{ cursor: "pointer" }}
                    >
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
    );
};

export default ProjectList;