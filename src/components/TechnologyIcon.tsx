import React from 'react';
import {
    IconAi,
    IconBrandChrome,
    IconBrandDocker,
    IconBrandGithub,
    IconBrandJavascript,
    IconBrandMongodb,
    IconBrandMysql,
    IconBrandNodejs,
    IconBrandReact,
    IconBrandTypescript,
    IconFileUnknown,
    IconTestPipe
} from '@tabler/icons-react';

interface TechnologyIconProps {
    iconName: string;
}

const TechnologyIcon: React.FC<TechnologyIconProps> = ({ iconName }) => {
    switch (iconName) {
        case "React":
            return <IconBrandReact />;
        case "Typescript":
            return <IconBrandTypescript />;
        case "Material-UI":
            return <IconFileUnknown />;
        case "CI/CD":
            return <IconBrandGithub />;
        case "GH Pages":
            return <IconBrandGithub />;
        case "MERN":
            return <IconBrandMongodb />;
        case "LEG":
            return <IconFileUnknown />;
        case "Kubernetes":
            return <IconFileUnknown />;
        case "Spring Boot":
            return <IconFileUnknown />;
        case "MySQL":
            return <IconBrandMysql />;
        case "Maven":
            return <IconFileUnknown />;
        case "NLP":
            return <IconAi />;
        case "JUnit":
            return <IconTestPipe />;
        case "PGSQL":
            return <IconFileUnknown />;
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
        default:
            return <IconFileUnknown />;
    }
};

export default TechnologyIcon;