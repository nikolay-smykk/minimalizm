import React from "react";
import styles from "./style.module.scss";

interface Props {
    children: React.ReactNode;
}

export const Main = ({ children }: Props) => {
    return <main>{children}Content</main>;
};
