import { ListItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { black, font } from "../../config";

function FooterLinkBloack(props) {

    const { text, link } = props;

    return (
        <ListItem sx={{ paddingX:0,}} texts>
        <Link
            to={link}
            style={{
            textDecoration: "none",
            color:black,
            fontFamily: font,
            fontSize: "16px",
            }}
        >
            {text}
        </Link>
        </ListItem>
    );
}

export default FooterLinkBloack;
