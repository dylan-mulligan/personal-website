import React from 'react';
import {
    IconAi, IconBrandChrome, IconBrandDocker,
    IconBrandGithub, IconBrandGitlab, IconBrandJavascript,
    IconBrandMongodb, IconBrandMysql, IconBrandNodejs,
    IconBrandPython, IconBrandReact, IconBrandTypescript,
    IconBuildingCastle, IconDatabase, IconFeather,
    IconFileUnknown, IconHexagon, IconLayout, IconLetterJ,
    IconSchema, IconShip, IconSpyOff, IconTerminal, IconTestPipe
} from '@tabler/icons-react';

interface TechnologyIconProps {
    iconName: string;
}

const TechnologyIcon: React.FC<TechnologyIconProps> = ({ iconName }) => {
    switch (iconName) {
        case "React":
            return <IconBrandReact />;
        case "TypeScript":
            return <IconBrandTypescript />;
        case "Material-UI":
            return <IconLayout />;
        case "GH Actions CI/CD":
            return <IconBrandGithub />;
        case "MERN":
            return <IconBrandMongodb />;
        case "ELG":
            return <IconSchema />;
        case "Kubernetes":
            return <IconShip />;
        case "Spring Boot":
            return <IconHexagon />;
        case "MySQL":
            return <IconBrandMysql />;
        case "Maven":
            return <IconFeather />;
        case "NLP":
            return <IconAi />;
        case "JUnit":
            return <IconTestPipe />;
        case "PostgreSQL":
            return <IconDatabase />;
        case "Selenium":
            return <IconBrandChrome />;
        case "Node.js":
            return <IconBrandNodejs />;
        case "JavaScript":
            return <IconBrandJavascript />;
        case "Docker":
            return <IconBrandDocker />;
        case "MongoDB":
            return <IconBrandMongodb />;
        case "CLI":
            return <IconTerminal />;
        case "Gang of Four":
            return <IconBuildingCastle />;
        case "Jackson ORM":
            return <IconLetterJ />;
        case "Python":
            return <IconBrandPython />;
        case "Fuzzing":
            return <IconSpyOff />;
        case "GitLab CI/CD":
            return <IconBrandGitlab />;
        default:
            return <IconFileUnknown />;
    }
};

export default TechnologyIcon;