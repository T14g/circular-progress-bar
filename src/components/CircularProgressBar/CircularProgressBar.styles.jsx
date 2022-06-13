import styled from "styled-components";

const CircularProgressBarStyles = styled.div`
    .circular-chart{
        display: block;
        margin: 20px auto;
        max-width: 100%;
        max-height: 250px;

        .circular-bg {
            fill: none;
        }

        .circle {
            fill: none;
        }

        .percentage {
            font-size: 18px;
            text-anchor: middle;
            fill: #fff;
            font-weight: bold;
        }
    }
`;

export default CircularProgressBarStyles;