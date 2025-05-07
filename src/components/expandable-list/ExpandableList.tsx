import React, { JSX, useState, useEffect } from "react";
import {Box, Button, Collapse, List, ListItem, useMediaQuery} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import technologiesData from '../../data/technologies.json';
import ListItemContent from './ListItemContent';
import TechnologyChips from './TechnologyChips';
import ListItemDetails from './ListItemDetails';
import Typography from "@mui/material/Typography";
import {IconBrandGithub} from "@tabler/icons-react";
import { hoverableContainerStyle } from "../../shared-theme/styleUtils";

/**
 * Interface representing an expandable item in the list.
 */
interface ExpandableItem {
    title: string;
    subtitle: string;
    details: string;
    technologies: string[];
    startDate: string;
    endDate: string;
    projectUrl?: string;
}

/**
 * Props for the ExpandableList component.
 */
interface ExpandableListProps {
    items: ExpandableItem[];
    chipStyle: (expandOnHover: boolean) => object;
}

/**
 * Interface representing a technology item.
 */
interface Technology {
    name: string;
    url: string;
}

/**
 * ExpandableList component that renders a list of items that can be expanded to show more details.
 *
 * @param {ExpandableListProps} props - The props for the component
 * @returns {JSX.Element} The rendered component
 */
const ExpandableList: React.FC<ExpandableListProps> = (props): JSX.Element => {
    const theme = useTheme();
    const [expandedItem, setExpandedItem] = useState<number | null>(null);
    const [hoveredChip, setHoveredChip] = useState<string | null>(null);
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isXSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const [technologies, setTechnologies] = useState<Technology[]>([]);

    // Load technologies data on component mount
    useEffect(() => {
        setTechnologies(technologiesData);
    }, []);

    /**
     * Toggles the expanded state of an item.
     *
     * @param {number} index - The index of the item to toggle
     */
    const handleToggle = (index: number) => {
        setExpandedItem(expandedItem === index ? null : index);
    };

    /**
     * Returns the style for a list item.
     *
     * @param {number} index - The index of the list item
     * @returns {object} The style object
     */
    const listItemStyle = (index: number): object => ({
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        borderRadius: 3,
        marginBottom: 1,
        padding: 2,
        paddingBottom: 1.5,
        ...hoverableContainerStyle(theme),
        border: `2px solid ${expandedItem === index ? theme.palette.primary.main : theme.palette.divider}`,
        '&:hover': {
            border: `2px solid ${expandedItem === index ? theme.palette.primary.main : theme.palette.info.main}`,
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
        },
    });

    /**
     * Returns the details of a technology by name.
     *
     * @param {string} name - The name of the technology
     * @returns {Technology | undefined} The technology details or undefined if not found
     */
    const getTechnologyDetails = (name: string) => {
        return technologies.find(tech => tech.name === name);
    };

    let chipIndexCounter = 0;

    return (
        <List>
            {props.items.map((item, index) => {
                chipIndexCounter += item.technologies.length;
                return (
                    <Box key={index}>
                        <ListItem
                            onClick={() => handleToggle(index)}
                            sx={{
                                ...listItemStyle(index),
                                flexDirection: 'column',
                                alignItems: 'stretch',
                                position: 'relative'
                            }}
                        >
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                    <ListItemContent
                                        title={item.title}
                                        subtitle={item.subtitle}
                                        isXSmallScreen={isXSmallScreen}
                                    />
                                    {!isSmallScreen && item.startDate && item.endDate && (
                                        <Typography variant="body2" sx={{ textAlign: "right", whiteSpace: "nowrap", marginLeft: 1 }}>
                                            {item.startDate} - {item.endDate}
                                        </Typography>
                                    )}
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: item.projectUrl ? 'space-between' : 'flex-end', width: '100%' }}>
                                    {item.projectUrl && (
                                        <Box sx={{ marginTop: 2 }}>
                                            <Button
                                                color="inherit"
                                                size="medium"
                                                href={item.projectUrl}
                                                target="_blank"
                                                startIcon={<IconBrandGithub />}
                                                sx={{ marginLeft: 0, width: 150 }}
                                                variant="contained"
                                                onClick={(event) => event.stopPropagation()}
                                            >
                                                Source Code
                                            </Button>
                                        </Box>
                                    )}
                                    <TechnologyChips
                                        technologies={item.technologies}
                                        isMediumScreen={isMediumScreen}
                                        hoveredChip={hoveredChip}
                                        setHoveredChip={setHoveredChip}
                                        getTechnologyDetails={getTechnologyDetails}
                                        indexBase={chipIndexCounter}
                                        chipStyle={props.chipStyle(true)}
                                    />
                                </Box>
                            </Box>
                        </ListItem>
                        {/* Collapsible list item details section, has project details and chips for small resolutions */}
                        <Collapse in={expandedItem === index} timeout="auto" unmountOnExit>
                            <ListItemDetails
                                technologies={item.technologies}
                                details={item.details}
                                startDate={item.startDate}
                                endDate={item.endDate}
                                isSmallScreen={isSmallScreen}
                                isMediumScreen={isMediumScreen}
                                getTechnologyDetails={getTechnologyDetails}
                                chipStyle={props.chipStyle(false)}
                            />
                        </Collapse>
                    </Box>
                );
            })}
        </List>
    );
};

export default ExpandableList;

