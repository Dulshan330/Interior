import React,{useState} from "react";
import { ListItem  } from "@mui/material";
import { Link } from "react-router-dom";
import { black, font, themeColor } from "../../config";

function NavItemBlock(props) {

    const {text, link} = props;
    const [hoveredLink, setHoveredLink] = useState(null);
    const linkStyle = {
        color: black,
    };
    const hovering = (linkName) => {
        setHoveredLink(linkName);
    };

    const notHovering = () => {
        setHoveredLink(null);
    };

    return (
        <ListItem>
        <Link
            to={link}
            style={{
            textDecoration: "none",
            fontFamily: font,
            fontSize:"18px",
            ...linkStyle,
            color: hoveredLink === text ? themeColor : linkStyle.color,
            }}
            onMouseOver={() => hovering(text)}
            onMouseOut={notHovering}
        >
            {text}
        </Link>
        </ListItem>
    );
}

export default NavItemBlock;
