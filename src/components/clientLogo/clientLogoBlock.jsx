import React from "react";

function ClientLogoBlock(props) {
    const { img, height,width } = props;

    return (
        <img src={img} alt="brand" height={height} width={width}  />
    );
}

export default ClientLogoBlock;
