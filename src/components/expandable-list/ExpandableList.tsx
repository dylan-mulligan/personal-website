import React, { JSX, useState, useEffect } from "react";
import {Box, Collapse, List, ListItem, useMediaQuery} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import technologiesData from '../../data/technologies.json';
import ListItemContent from './ListItemContent';
import TechnologyChips from './TechnologyChips';
import ListDetails from './ListDetails';

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
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isXSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const [technologies, setTechnologies] = useState<Technology[]>([]);

    useEffect(() => {
        setTechnologies(technologiesData);
    }, []);

    const handleToggle = (index: number) => {
        setExpandedItem(expandedItem === index ? null : index);
    };

    const listItemStyle = (index: number) => ({
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        border: `2px solid ${expandedItem === index ? theme.palette.info.main : theme.palette.divider}`,
        borderRadius: 3,
        marginBottom: 1,
        padding: 2,
        paddingBottom: 1.5
    });

    const chipStyle = (expandOnHover: boolean) => {
        return {
            border: `none`,
            padding: 1.5,
            marginBottom: 1,
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 50,
            minWidth: 50,
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
            '&:hover': {
                boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.2)',
            },
        };
    };

    const getTechnologyDetails = (name: string) => {
        return technologies.find(tech => tech.name === name);
    };

    let chipIndexCounter = 0;

    return (
        <List>
            {items.map((item, index) => {
                chipIndexCounter += item.technologies.length;
                return (
                    <Box key={index}>
                        <ListItem
                            onClick={() => handleToggle(index)}
                            sx={listItemStyle(index)}
                        >
                            <ListItemContent
                                title={item.title}
                                subtitle={item.subtitle}
                                projectUrl={item.projectUrl}
                                isXSmallScreen={isXSmallScreen}
                                onClick={(event) => event.stopPropagation()}
                            />
                            <TechnologyChips
                                technologies={item.technologies}
                                startDate={item.startDate}
                                endDate={item.endDate}
                                isSmallScreen={isSmallScreen}
                                isMediumScreen={isMediumScreen}
                                hoveredChip={hoveredChip}
                                setHoveredChip={setHoveredChip}
                                getTechnologyDetails={getTechnologyDetails}
                                indexBase={chipIndexCounter}
                                chipStyle={chipStyle(true)}
                            />
                        </ListItem>
                        <Collapse in={expandedItem === index} timeout="auto" unmountOnExit>
                            <ListDetails
                                technologies={item.technologies}
                                details={item.details}
                                startDate={item.startDate}
                                endDate={item.endDate}
                                isSmallScreen={isSmallScreen}
                                isMediumScreen={isMediumScreen}
                                getTechnologyDetails={getTechnologyDetails}
                                chipStyle={chipStyle(false)}
                            />
                        </Collapse>
                    </Box>
                );
            })}
        </List>
    );
};

export default ExpandableList;