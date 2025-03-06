import React from 'react';
import { Box, ListItemText } from '@mui/material';

interface ListItemContentProps {
    title: string;
    subtitle: string;
    projectUrl?: string;
    isXSmallScreen: boolean;
}

const ListItemContent: React.FC<ListItemContentProps> = (props) => (
    <Box sx={{ display: "flex", alignItems: "left", flexGrow: 1, justifyContent: "flex-start", flexDirection: "column" }}>
        <ListItemText
            primary={props.title}
            secondary={props.subtitle}
            sx={{ width: props.isXSmallScreen ? 250 : 325, flexGrow: 0 }}
        />
    </Box>
);

export default ListItemContent;