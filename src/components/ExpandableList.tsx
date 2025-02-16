import React, { JSX, useState, useEffect } from "react";
import {Box, List, ListItem, ListItemText, Collapse, Typography, Chip, IconButton} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import technologiesData from '../data/technologies.json';
import {
    IconAi,
    IconBrandChrome,
    IconBrandDocker,
    IconBrandGithub,
    IconBrandJavascript,
    IconBrandMongodb,
    IconBrandMysql,
    IconBrandNodejs,
    IconBrandReact,
    IconBrandTypescript,
    IconFileUnknown,
    IconTestPipe
} from '@tabler/icons-react';

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
            '& .MuiChip-label': {
                display: expandOnHover ? 'none' : 'block',
            },
            '&:hover .MuiChip-label': {
                display: expandOnHover ? 'block' : 'none',
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

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "React":
                return <IconBrandReact/>;
            case "Typescript":
                return <IconBrandTypescript/>;
            case "Material-UI":
                return <IconFileUnknown/>;
            case "CI/CD":
                return <IconBrandGithub/>;
            case "GH Pages":
                return <IconBrandGithub/>;
            case "MERN":
                return <IconBrandMongodb/>;
            case "LEG":
                return <IconFileUnknown/>;
            case "Kubernetes":
                return <IconFileUnknown/>;
            case "Spring Boot":
                return <IconFileUnknown/>;
            case "MySQL":
                return <IconBrandMysql/>;
            case "Maven":
                return <IconFileUnknown/>;
            case "NLP":
                return <IconAi/>;
            case "JUnit":
                return <IconTestPipe/>;
            case "PGSQL":
                return <IconFileUnknown/>;
            case "Selenium":
                return <IconBrandChrome/>;
            case "Node.js":
                return <IconBrandNodejs/>;
            case "JavaScript":
                return <IconBrandJavascript/>;
            case "Docker":
                return <IconBrandDocker/>;
            case "MongoDB":
                return <IconBrandMongodb/>;
            default:
                return <IconFileUnknown/>;
        }
    }

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
                                    <IconBrandGithub />
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
                                        return tech ? (
                                            <Chip
                                                key={techIndex}
                                                label={tech.name}
                                                component="a"
                                                icon={getIcon(tech.name)}
                                                href={tech.url}
                                                clickable
                                                variant="outlined"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={chipStyle(true)}
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
                                                icon={getIcon(tech.name)}
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