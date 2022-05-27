import React from "react";
import {AdEntity} from "types";

interface Props {
    id: string;
}

export const SingleAd = (props: Props) => {
return <h2>{props.id}</h2>
}