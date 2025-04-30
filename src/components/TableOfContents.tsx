import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Subcomponent for Table of Contents Button
const TOCButton: React.FC<{ id: string; label: string }> = ({ id, label }) => {
    const theme = useTheme();

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Button
            variant="contained"
            color={"inherit"}
            onClick={() => handleScroll(id)}
            fullWidth
            sx={{
                backgroundColor: theme.palette.mode === "dark" ? "rgba(27,27,27,0.5)" : "rgba(255,255,255,0.9)",
                color: theme.palette.mode === "dark" ? "#ffffff" : "#000000",
                "&:hover": {
                    backgroundColor: theme.palette.mode === "dark" ? "#131313" : "#f3f3f3",
                },
            }}
        >
            {label}
        </Button>
    );
};

const TableOfContents: React.FC = () => {
    return (
        <Box
            sx={{
                position: "sticky",
                verticalAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                padding: 2,
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 2,
            }}
        >
            <Typography variant="h6" textAlign="center">
                Table of Contents
            </Typography>
            <TOCButton id="contact" label="Contact" />
            <TOCButton id="work-experience" label="Work Experience" />
            <TOCButton id="projects" label="Projects" />
        </Box>
    );
};

export default TableOfContents;
