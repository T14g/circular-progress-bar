import React, { useState, useEffect } from "react";

import CircularProgressBarStyles from "./CircularProgressBar.styles";

const CircularProgressBar = ({size, progress, strokeWidth, circleOneStroke, circleTwoStroke}) => {
    const [offset, setOffset] = useState(0);

    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const progressOffset = ((100 - progress) / 100) * circumference;
        setOffset(progressOffset);
    }, [progress, circumference, setOffset, offset]);

    return (
        <CircularProgressBarStyles>
            <svg
                className="circular-chart"
                width={size}
                height={size}
            >
                <circle
                    className="circular-bg"
                    stroke={circleOneStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                ></circle>
                <circle
                    className="circle"
                    stroke={circleTwoStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                ></circle>
                <text
                    x={35}
                    y={55}
                >{progress}%
                </text>
            </svg>
        </CircularProgressBarStyles>
    )
};

export default CircularProgressBar;