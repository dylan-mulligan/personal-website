import React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import TechnologyIcon from './TechnologyIcon';

/**
 * Props for the ListDetails component.
 */
interface ListItemDetailsProps {
    technologies: string[];
    details: string;
    startDate: string;
    endDate: string;
    isSmallScreen: boolean;
    isMediumScreen: boolean;
    getTechnologyDetails: (name: string) => { name: string; url: string } | undefined;
    chipStyle: Object;
}

/**
 * ListDetails component that renders the details of a list item, including technology chips and project details.
 *
 * @param {ListItemDetailsProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
const ListItemDetails: React.FC<ListItemDetailsProps> = ({
       technologies, details, startDate,
       endDate, isSmallScreen, isMediumScreen,
       getTechnologyDetails, chipStyle
   }: ListItemDetailsProps): React.JSX.Element => (
    <Box sx={{ paddingBottom: 2, paddingLeft: 2, paddingRight: 2, paddingTop: 1 }}>
        {/* Display start and end dates on small screen sizes */}
        {isSmallScreen &&
            <Typography variant="body2" sx={{ fontWeight: "bold", textAlign: "left", whiteSpace: "nowrap", marginBottom: 2 }}>
                {startDate} - {endDate}
            </Typography>
        }
        {/* Display technology chips for medium and smaller screens (bottom right of the box)*/}
        {isMediumScreen && (
            <Box sx={{ display: "flex", gap: 1, overflow: "auto", flexWrap: "wrap", pl: 1, pr: 1 }}>
                {technologies.map((techName, techIndex) => {
                    const tech = getTechnologyDetails(techName);
                    return tech ? (
                        <Chip
                            key={techIndex}
                            icon={<TechnologyIcon iconName={tech.name} />}
                            label={tech.name}
                            component="a"
                            href={tech.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={chipStyle}
                            onClick={(event) => event.stopPropagation()}
                        />
                    ) : null;
                })}
            </Box>
        )}
        {/* Display project details */}
        <Typography variant="body2" textAlign="left">{details}</Typography>
    </Box>
);

export default ListItemDetails;