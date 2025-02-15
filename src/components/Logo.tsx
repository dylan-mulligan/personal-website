import * as React from 'react';
import logo from "../logo.jpeg";
import IconButton from "@mui/material/IconButton";


/**
 * Logo component that displays the site's logo.
 *
 * @returns {JSX.Element} The rendered Logo component.
 */
export default function Logo() {
  const onClick = () => {
    window.location.href = "/personal-website/index.html";
  }

  return (
      <IconButton onClick={onClick} style={{width: 48, height: 48, borderRadius: 12, border: 'none'}}>
        <img src={logo} alt="logo" style={{width: '150%', height: '150%', borderRadius: 12}} />
      </IconButton>
  );
}
