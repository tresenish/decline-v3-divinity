/**
 * Brand logo - DIVINITY text with circle arcs
 */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }

  &:hover svg .circle-arc {
    stroke: #0074D9;
  }

  &:hover svg text {
    fill: #0074D9;
  }
`;

const Logo = styled.svg`
  width: 140px;
  height: 60px;
  overflow: visible;
  display: block;

  .circle-arc {
    fill: none;
    stroke: #222;
    stroke-width: 1.5;
    transition: stroke 0.2s ease;
  }

  text {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 18px;
    font-weight: 600;
    fill: #222;
    letter-spacing: 0.15em;
    transition: fill 0.2s ease;
  }
`;

interface BrandLogoProps {
  onClick?: () => void;
  className?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ onClick, className }) => {
  return (
    <Wrapper onClick={onClick} className={className}>
      <Logo viewBox="0 0 100 50">
        {/* Top arc */}
        <path
          className="circle-arc"
          d="M 71 10 A 26 26 0 0 0 29 10"
        />
        {/* Bottom arc */}
        <path
          className="circle-arc"
          d="M 29 38 A 26 26 0 0 0 71 38"
        />
        <text x="50" y="25" textAnchor="middle" dominantBaseline="middle">
          DIVINITY
        </text>
      </Logo>
    </Wrapper>
  );
};

export default BrandLogo;
