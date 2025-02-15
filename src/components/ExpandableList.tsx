import React, { JSX, useState } from "react";
import { Box, List, ListItem, ListItemText, Collapse, Typography, Chip } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

interface ExpandableItem {
    title: string;
    subtitle: string;
    details: string;
    technologies: { name: string; url: string }[];
    startDate: string;
    endDate: string;
}

interface ExpandableListProps {
    items: ExpandableItem[];
}

const ExpandableList: React.FC<ExpandableListProps> = ({ items }): JSX.Element => {
    const theme = useTheme();
    const [expandedItem, setExpandedItem] = useState<number | null>(null);
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isXSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const chipStyle = {
        border: `1px solid ${theme.palette.divider}`,
        padding: 1.5,
        marginBottom: 1,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
    };

    const handleToggle = (index: number) => {
        setExpandedItem(expandedItem === index ? null : index);
    };

    const listItemStyle = {
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 2,
        marginBottom: 1,
        padding: 2
    };

    return (
        <List>
            {items.map((item, index) => (
                <Box key={index}>
                    <ListItem
                        onClick={() => handleToggle(index)}
                        sx={listItemStyle}
                    >
                        <ListItemText primary={item.title} secondary={item.subtitle} />
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                            {item.startDate && item.endDate && !isXSmallScreen &&
                                <Typography variant="body2" sx={{ textAlign: "right", whiteSpace: "nowrap", marginLeft: 1 }}>
                                    {item.startDate} - {item.endDate}
                                </Typography>
                            }
                            {!isSmallScreen && (
                                <Box sx={{ display: "flex", gap: 1, marginTop: 1 }}>
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
                        </Box>
                    </ListItem>
                    <Collapse in={expandedItem === index} timeout="auto" unmountOnExit>
                        <Box sx={{ paddingBottom: 2, paddingLeft: 2, paddingRight: 2, paddingTop: 1 }}>
                            {isXSmallScreen &&
                                <Typography variant="body2" sx={{ fontWeight: "bold", textAlign: "left", whiteSpace: "nowrap", marginBottom: 2 }}>
                                    {item.startDate} - {item.endDate}
                                </Typography>
                            }
                            {isSmallScreen && (
                                <Box sx={{ display: "flex", gap: 1, overflow: "auto", flexWrap: "wrap" }}>
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
                            <Typography variant="body2" textAlign="left">{item.details}</Typography>
                        </Box>
                    </Collapse>
                </Box>
            ))}
        </List>
    );
};

export default ExpandableList;