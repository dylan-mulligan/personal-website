import React, { JSX, useState } from "react";
import { Box, List, ListItem, ListItemText, Collapse, Typography, Chip } from "@mui/material";

interface WorkExperience {
    company: string;
    role: string;
    details: string;
    technologies: { name: string; url: string }[];
}

interface WorkExperienceListProps {
    experiences: WorkExperience[];
}

const WorkExperienceList: React.FC<WorkExperienceListProps> = ({ experiences }): JSX.Element => {
    const [expandedExperience, setExpandedExperience] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setExpandedExperience(expandedExperience === index ? null : index);
    };

    return (
        <List>
            {experiences.map((experience, index) => (
                <Box key={index}>
                    <ListItem
                        onClick={() => handleToggle(index)}
                        sx={{ cursor: "pointer", display: "flex", justifyContent: "space-between" }}
                    >
                        <ListItemText primary={experience.company} secondary={experience.role} />
                        <Box sx={{ display: "flex", gap: 1 }}>
                            {experience.technologies.map((tech, techIndex) => (
                                <Chip
                                    key={techIndex}
                                    label={tech.name}
                                    component="a"
                                    href={tech.url}
                                    clickable
                                    variant="outlined"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                />
                            ))}
                        </Box>
                    </ListItem>
                    <Collapse in={expandedExperience === index} timeout="auto" unmountOnExit>
                        <Box sx={{ padding: 2, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
                            <Typography variant="body2">{experience.details}</Typography>
                        </Box>
                    </Collapse>
                </Box>
            ))}
        </List>
    );
};

export default WorkExperienceList;