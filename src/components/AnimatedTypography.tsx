import { keyframes } from "@emotion/react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const wave = keyframes`
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-1px); }
`;

const colorChange = keyframes`
    0%, 100% { color: #ff0000; }
    16.67% { color: #ff7f00; }
    33.33% { color: #ffff00; }
    50% { color: #00ff00; }
    66.67% { color: #0000ff; }
    83.33% { color: #8b00ff; }
`;

const getAnimation = (animation: string) => {
    switch (animation) {
        case 'wave':
            return wave;
        case 'colorChange':
            return colorChange;
        default:
            return wave;
    }
}

const AnimatedTypography = styled(Typography)<{ animation: string; animationDuration: number }>(({ theme, animation, animationDuration }) => ({
    display: 'inline-block',
    marginBottom: -5,
    '&:hover span': {
        animation: `${getAnimation(animation)} ${animationDuration}s infinite`,
        animationTimingFunction: 'ease-in-out',
        animationPlayState: 'running',
    },
    '& span': {
        display: 'inline-block',
        animationPlayState: 'paused',
    },
}));

const AnimatedText: React.FC<{ text: string; animation: string; animationDuration?: number }> = ({ text, animation, animationDuration = 2 }) => {
    return (
        <AnimatedTypography animation={animation} animationDuration={animationDuration}>
            {text.split('').map((char, index) => (
                <span key={index} style={{ animationDelay: `${index * 0.10}s` }}>
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </AnimatedTypography>
    );
};

export { AnimatedText };