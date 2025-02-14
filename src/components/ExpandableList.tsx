import React, { JSX, useState } from "react";
import { Box, List, ListItem, ListItemText, Collapse, Typography, Chip } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

interface ExpandableItem {
    title: string;
    subtitle: string;
    details: string;
    technologies: { name: string; url: string }[];
}

interface ExpandableListProps {
    items: ExpandableItem[];
}

const ExpandableList: React.FC<ExpandableListProps> = ({ items }): JSX.Element => {
    const theme = useTheme();
    const [expandedItem, setExpandedItem] = useState<number | null>(null);
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const chipStyle = {
        border: `1px solid ${theme.palette.divider}`,
        padding: 2,
        marginBottom: 2,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
    };

    const handleToggle = (index: number) => {
        setExpandedItem(expandedItem === index ? null : index);
    };

    return (
        <List>
            {items.map((item, index) => (
                <Box key={index}>
                    <ListItem
                        onClick={() => handleToggle(index)}
                        sx={{ cursor: "pointer", display: "flex", justifyContent: "space-between" }}
                    >
                        <ListItemText primary={item.title} secondary={item.subtitle} />
                        {!isSmallScreen && (
                            <Box sx={{ display: "flex", gap: 1 }}>
                                {item.technologies.map((tech, techIndex) => (
                                    <Chip
                                        key={techIndex}
                                        label={tech.name}
                                        component="a"
                                        href={tech.url}
                                        clickable
                                        variant="outlined"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={chipStyle}
                                    />
                                ))}
                            </Box>
                        )}
                    </ListItem>
                    <Collapse in={expandedItem === index} timeout="auto" unmountOnExit>
                        <Box sx={{ padding: 2, borderRadius: 2 }}>
                            <Typography variant="body2" textAlign="left">{item.details}</Typography>
                        </Box>
                    </Collapse>
                </Box>
            ))}
        </List>
    );
};

export default ExpandableList;