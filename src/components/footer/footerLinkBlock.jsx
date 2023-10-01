import { ListItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function FooterLinkBloack(props) {

    const { text, link } = props;

    return (
        <ListItem sx={{ paddingX:0}}>
        <Link
            to={link}
            style={{
            textDecoration: "none",
            color:"#000000",
            fontFamily: "roboto,sans-serif",
            fontSize: "16px",
            }}
        >
            {text}
        </Link>
        </ListItem>
    );
}

export default FooterLinkBloack;
