import React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import TechnologyIcon from './TechnologyIcon';

interface TechnologiesCollapseProps {
    technologies: string[];
    details: string;
    startDate: string;
    endDate: string;
    isSmallScreen: boolean;
    isMediumScreen: boolean;
    getTechnologyDetails: (name: string) => { name: string; url: string } | undefined;
    chipStyle: Object;
}

const ListDetails: React.FC<TechnologiesCollapseProps> = ({
       technologies, details, startDate,
       endDate, isSmallScreen, isMediumScreen,
       getTechnologyDetails, chipStyle
   }) => (
    <Box sx={{ paddingBottom: 2, paddingLeft: 2, paddingRight: 2, paddingTop: 1 }}>
        {isSmallScreen &&
            <Typography variant="body2" sx={{ fontWeight: "bold", textAlign: "left", whiteSpace: "nowrap", marginBottom: 2 }}>
                {startDate} - {endDate}
            </Typography>
        }
        {isMediumScreen && (
            <Box sx={{ display: "flex", gap: 1, overflow: "auto", flexWrap: "wrap" }}>
                {technologies.map((techName, techIndex) => {
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
                            sx={chipStyle}
                            onClick={(event) => event.stopPropagation()}
                        />
                    ) : null;
                })}
            </Box>
        )}
        <Typography variant="body2" textAlign="left">{details}</Typography>
    </Box>
);

export default ListDetails;