import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { IconHash } from "@tabler/icons-react";
import { scrollToElementById } from "../utils/scrollUtils";
import {Theme} from "@mui/material/styles";

interface SectionHeaderProps {
   title: string;
   anchorId: string;
   theme: Theme;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, anchorId, theme }) => (
   <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Typography variant="h4" textAlign="left">
         {title}
      </Typography>
      <Button
         onClick={() => scrollToElementById(anchorId)}
         sx={{
            width: 40,
            height: 40,
            minWidth: 0,
            p: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            '&:hover': {
                backgroundColor: theme.palette.mode === "dark" ? "rgba(216,216,216,0.2)" : "rgba(67,67,67,0.2)",
            }
         }}
      >
         <IconHash size={24} />
      </Button>
   </Box>
);

export default SectionHeader;
