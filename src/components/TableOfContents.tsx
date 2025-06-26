import React, {JSX} from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { scrollToElementByIdWithOffset } from "../utils/scrollUtils";
import {IconBriefcase2, IconFolders, IconInfoCircleFilled} from "@tabler/icons-react";
import { SxProps, Theme } from "@mui/material/styles";

// Subcomponent for Table of Contents Button
const TOCButton: React.FC<{ id: string; label: string, icon?: JSX.Element, onItemClick?: () => void }> = ({ id, label, icon = null, onItemClick }) => {
    const theme = useTheme();
    const NAVBAR_HEIGHT = 80; // px, keep in sync with scrollUtils

    const handleClick = () => {
        window.location.hash = id; // Update the URL hash
        scrollToElementByIdWithOffset(id, NAVBAR_HEIGHT);
        if (onItemClick) onItemClick();
    };

    return (
        <Button
            variant="contained"
            color={"inherit"}
            onClick={handleClick}
            startIcon={icon}
            sx={{
                backgroundColor: theme.palette.mode === "dark" ? "rgba(27,27,27,0.5)" : "rgba(255,255,255,0.5)",
                color: theme.palette.mode === "dark" ? "#ffffff" : "#000000",
                "&:hover": {
                    backgroundColor: theme.palette.mode === "dark" ? "rgba(19,19,19,0.7)" : "rgba(243,243,243,0.7)",
                },
                justifyContent: "flex-start",
                py: 4,
            }}
        >
            {label}
        </Button>
    );
};

interface TableOfContentsProps {
    sxOverride?: SxProps<Theme>;
    onItemClick?: () => void;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ sxOverride, onItemClick }) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                position: "sticky",
                top: 250,
                verticalAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                p: 2,
                mx: { xs: 0, lg: 8 },
                borderRadius: 2,
                border: `2px solid ${theme.palette.divider}`,
                transition: 'border 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                    border: `2px solid ${theme.palette.info.main}`,
                    boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.1)',
                    transition: 'border 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                },
                ...sxOverride,
            }}
        >
            <Typography variant="h6" textAlign="center">
                Table of Contents
            </Typography>
            <TOCButton id="about" label="About" icon={<IconInfoCircleFilled/>} onItemClick={onItemClick}/>
            <TOCButton id="work-experience" label="Work Experience" icon={<IconBriefcase2/>} onItemClick={onItemClick}/>
            <TOCButton id="projects" label="Projects" icon={<IconFolders/>} onItemClick={onItemClick} />
        </Box>
    );
};

export default TableOfContents;
