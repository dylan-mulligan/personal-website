import React from 'react';
import { Box, Chip, Collapse } from '@mui/material';
import TechnologyIcon from './TechnologyIcon';

interface TechnologyChipsProps {
    technologies: string[];
    isMediumScreen: boolean;
    hoveredChip: string | null;
    setHoveredChip: (chipKey: string | null) => void;
    chipStyle: Object;
    getTechnologyDetails: (name: string) => { name: string; url: string } | undefined;
    indexBase: number;
}

const TechnologyChips: React.FC<TechnologyChipsProps> = ({
    technologies, isMediumScreen, hoveredChip,
    setHoveredChip, chipStyle, getTechnologyDetails,
    indexBase
}) => (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        {!isMediumScreen && (
            <Box sx={{ display: "flex", gap: 1, marginTop: 0, marginBottom: 0 }}>
                {technologies.map((techName, techIndex) => {
                    const tech = getTechnologyDetails(techName);
                    const chipKey = `${indexBase + techIndex}-${techName}`;
                    return tech ? (
                        <Chip
                            key={chipKey}
                            label={
                                <Collapse
                                    in={hoveredChip === chipKey}
                                    orientation={"horizontal"}
                                    timeout={{ enter: 300, exit: 350 }}
                                    easing={"ease-in-out"}
                                >
                                    {tech.name}
                                </Collapse>
                            }
                            component="a"
                            icon={<TechnologyIcon iconName={tech.name} />}
                            href={tech.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={chipStyle}
                            onMouseEnter={() => setHoveredChip(chipKey)}
                            onMouseLeave={() => setHoveredChip(null)}
                            onClick={(event) => event.stopPropagation()}
                        />
                    ) : null;
                })}
            </Box>
        )}
    </Box>
);

export default TechnologyChips;