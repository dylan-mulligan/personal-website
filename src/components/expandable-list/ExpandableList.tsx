import React, { JSX, useState, useEffect } from "react";
import {Box, Collapse, List, ListItem, useMediaQuery} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import technologiesData from '../../data/technologies.json';
import ListItemContent from './ListItemContent';
import TechnologyChips from './TechnologyChips';
import ListItemDetails from './ListItemDetails';

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
        border: `2px solid ${expandedItem === index ? theme.palette.primary.main : theme.palette.divider}`,
        borderRadius: 3,
        marginBottom: 1,
        padding: 2,
        paddingBottom: 1.5,
        transition: 'border 0.3s ease-in-out',
        '&:hover': {
            border: `2px solid ${expandedItem === index ? theme.palette.primary.main : theme.palette.info.main}`,
            transition: 'border 0.3s ease-in-out',
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
                            sx={listItemStyle(index)}
                        >
                            {/* Content of the list item (title, subtitle, source) */}
                            <ListItemContent
                                title={item.title}
                                subtitle={item.subtitle}
                                projectUrl={item.projectUrl}
                                isXSmallScreen={isXSmallScreen}
                                onClick={(event) => event.stopPropagation()}
                            />
                            {/* Technology chips on the list items and start-end date of item */}
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
                                chipStyle={props.chipStyle(true)}
                            />
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