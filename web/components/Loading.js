import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';

const LoadAnimation = keyframes`
    from {left: 50%; width: 0;z-index:100;}
    33.3333% {left: 0; width: 100%;z-index: 10;}
    to {left: 0; width: 100%;}
`;
const LoadBar = styled.div`
    position: relative;
    margin-top: 5px;
    width: 100%;
    height: 6px;
    background-color: #fdba2c;
  `;
const Bar = styled.div`
    content: "";
    display: inline;
    position: absolute;
    width: 0;
    height: 100%;
    left: 50%;
    text-align: center;
    :nth-child(1) {
      background-color: ${props => props.color[0]};
      -webkit-animation: ${LoadAnimation} 3s linear infinite;
      animation: ${LoadAnimation} 3s linear infinite;
    }
    :nth-child(2) {
      background-color: ${props => props.color[1]};
      -webkit-animation: ${LoadAnimation} 3s linear 1s infinite;
      animation: ${LoadAnimation} 3s linear 1s infinite;
    }
    :nth-child(3) {
      background-color: ${props => props.color[2]};
      -webkit-animation: ${LoadAnimation} 3s linear 2s infinite;
      animation: ${LoadAnimation} 3s linear 2s infinite;
    }
`

class Loading extends Component {
    render() {
        const { colors, show } = this.props
        const defaultColors = [
            '#B600FF',
            '#14CC7A',
            '#FDBA2C'
        ]
        return show && (
            <LoadBar>
                <Bar color={colors ? colors : defaultColors} />
                <Bar color={colors ? colors : defaultColors} />
                <Bar color={colors ? colors : defaultColors} />
            </LoadBar>
        )
    }
}

const mapStateToProps = ({ environment }) => {
    return {
        show: environment.pendingNetworkCalls > 0,
    };
};

export default connect(mapStateToProps)(Loading);
