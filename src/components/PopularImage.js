import React from 'react';
import styled from 'styled-components';

import {StyledImage} from './styles/StyledImage';

const PopularImage = ({image, title, text}) =>(
    <StyledImage image={image}>
        <div className="image-content">
            <div className="image-text">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    </StyledImage>
)

export default PopularImage;