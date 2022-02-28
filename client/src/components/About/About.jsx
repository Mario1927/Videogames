import React from "react";
import { AboutContactWrapper, AboutImgWrapper, AboutWrapper } from "../Styled/About";

export default function About() {
    return (
        <AboutWrapper>
            <h1>Individual Project - Henry Videogames</h1>
            <h2>Project Objectives</h2>
            <div>
                <li>
                    Use React, Redux, Node and Sequelize.
                </li>
                <li>
                    Learn and practice GIT workflow.
                </li>
                <li>
                    Learn, and use testing.
                </li>
                <li>
                    Client boilerplate was made using Create React App.
                </li>
            </div>
            <AboutImgWrapper className="image-wrapper">
                <img src="https://github.com/Mario1927/Videogames/raw/Deploy/videogame.png" alt="Mario-Logo"/>
            </AboutImgWrapper>
            <AboutContactWrapper>
                Website by: Mario Hernández.
                <a href={'https://github.com/Mario1927/Videogames/tree/Deploy'}>
                    Project Repository
                </a>
                <a href="mailto: hernandez.mario@correounivalle.edu.co">
                    hernandez.mario@correounivalle.edu.co
                </a>
                <a href="tel: +573175293219">+57 317-529-3219</a>
            </AboutContactWrapper>
        </AboutWrapper>
    )
}