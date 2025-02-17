import React, { JSX, useState, useEffect } from "react";
import { Box, List, ListItem, ListItemText, Collapse, Typography, Chip, IconButton } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import technologiesData from '../data/technologies.json';
import TechnologyIcon from './TechnologyIcon';

interface ExpandableItem {
    title: string;
    subtitle: string;
    details: string;
    technologies: string[];
    startDate: string;
    endDate: string;
    projectUrl?: string;
}

interface ExpandableListProps {
    items: ExpandableItem[];
}

interface Technology {
    name: string;
    url: string;
}

const ExpandableList: React.FC<ExpandableListProps> = ({ items }): JSX.Element => {
    const theme = useTheme();
    const [expandedItem, setExpandedItem] = useState<number | null>(null);
    const [hoveredChip, setHoveredChip] = useState<string | null>(null);
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isXSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [technologies, setTechnologies] = useState<Technology[]>([]);

    useEffect(() => {
        setTechnologies(technologiesData);
    }, []);

    const chipStyle = (expandOnHover: boolean) => {
        return {
            border: `1px solid ${theme.palette.divider}`,
            padding: 1.5,
            marginBottom: 1,
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 40,
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
        };
    }

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

    const getTechnologyDetails = (name: string) => {
        return technologies.find(tech => tech.name === name);
    };

    return (
        <List>
            {items.map((item, index) => (
                <Box key={index}>
                    <ListItem
                        onClick={() => handleToggle(index)}
                        sx={listItemStyle}
                    >
                        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
                            <ListItemText primary={item.title} secondary={item.subtitle} />
                            {item.projectUrl && isSmallScreen && !isSmallScreen &&
                                <IconButton
                                    color="inherit"
                                    size="medium"
                                    href={item.projectUrl}
                                    target="_blank"
                                    aria-label="GitHub"
                                    sx={{ marginRight: 1 }}
                                    onClick={(event) => event.stopPropagation()}
                                >
                                    <TechnologyIcon iconName="GH Pages" />
                                </IconButton>
                            }
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                            {item.startDate && item.endDate && !isXSmallScreen &&
                                <Typography variant="body2" sx={{ textAlign: "right", whiteSpace: "nowrap", marginLeft: 1 }}>
                                    {item.startDate} - {item.endDate}
                                </Typography>
                            }
                            {!isSmallScreen && (
                                <Box sx={{ display: "flex", gap: 1, marginTop: 1 }}>
                                    {item.technologies.map((techName, techIndex) => {
                                        const tech = getTechnologyDetails(techName);
                                        const chipKey = `${index}-${techName}`;
                                        return tech ? (
                                            <Chip
                                                key={chipKey}
                                                label={
                                                    <Collapse in={hoveredChip === chipKey} orientation={"horizontal"}>
                                                        {tech.name}
                                                    </Collapse>
                                                }
                                                component="a"
                                                icon={<TechnologyIcon iconName={tech.name} />}
                                                href={tech.url}
                                                clickable
                                                variant="outlined"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={chipStyle(true)}
                                                onMouseEnter={() => setHoveredChip(chipKey)}
                                                onMouseLeave={() => setHoveredChip(null)}
                                                onClick={(event) => event.stopPropagation()}
                                            />
                                        ) : null;
                                    })}
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
                                    {item.technologies.map((techName, techIndex) => {
                                        const tech = getTechnologyDetails(techName);
                                        return tech ? (
                                            <Chip
                                                key={techIndex}
                                                icon={<TechnologyIcon iconName={tech.name} />}
                                                label={tech.name}
                                                component="a"
                                                href={tech.url}
                                                clickable
                                                variant="outlined"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={chipStyle(false)}
                                                onClick={(event) => event.stopPropagation()}
                                            />
                                        ) : null;
                                    })}
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