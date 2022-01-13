import React from "react";
import styles from "./style.module.scss";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Main } from "../Main";
import { Sidebar } from "../Sidebar";

interface Props {
    children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <Sidebar />
            <Main>{children}</Main>
            <Footer />
        </>
    );
};
