import * as React from 'react';
import {Icon} from "@mui/material";


/**
 * Icon component that displays a given logo path
 *
 * @returns {JSX.Element} The rendered Icon component.
 */
export default function TechIcon({icon, alt}: {icon: string, alt: string}) {
    const onClick = () => {
        window.location.href = "/personal-website/index.html";
    }

    return (
        <Icon style={{width: 48, height: 48, borderRadius: 12, border: 'none'}}>
            <img src={icon} alt={alt} />
        </Icon>
    );
}
