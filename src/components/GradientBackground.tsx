import React, { useState, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import { styled } from "@mui/system";

/**
 * Component that creates a dynamic radial gradient following the mouse.
 * Uses Material-UI's Box and styled-components for styling.
 */
const GradientBackground = styled(Box)(({ mouseX, mouseY }: { mouseX: number; mouseY: number }) => ({
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -1,
    background: useTheme().palette.mode === 'dark'
        ? `radial-gradient(circle at ${mouseX}% ${mouseY}%, rgba(0, 150, 255, 0.15), rgba(0, 0, 0, 0.9))`
        : `radial-gradient(circle at ${mouseX}% ${mouseY}%, rgba(0, 150, 255, 0.15), rgba(255, 255, 255, 0.9))`,
    transition: "background 0.1s ease-out",
}));

const MouseGradientBackground: React.FC = () => {
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            const width = window.innerWidth;
            const height = window.innerHeight;

            setMousePos({
                x: (clientX / width) * 100, // Convert to percentage
                y: (clientY / height) * 100,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return <GradientBackground mouseX={mousePos.x} mouseY={mousePos.y} />;
};

export default MouseGradientBackground;
