import React from 'react';
import styled, { keyframes } from 'styled-components';

const float1 = keyframes`
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(20px, -15px) scale(1.02);
  }
  50% {
    transform: translate(-10px, 10px) scale(0.98);
  }
  75% {
    transform: translate(15px, 5px) scale(1.01);
  }
`;

const float2 = keyframes`
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(-15px, 10px) scale(0.98);
  }
  50% {
    transform: translate(25px, -5px) scale(1.03);
  }
  75% {
    transform: translate(-5px, -20px) scale(1);
  }
`;

const float3 = keyframes`
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(10px, 20px) scale(1.01);
  }
  50% {
    transform: translate(-20px, -10px) scale(0.97);
  }
  75% {
    transform: translate(-15px, 15px) scale(1.02);
  }
`;

const float4 = keyframes`
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(-25px, -10px) scale(1.02);
  }
  50% {
    transform: translate(15px, 15px) scale(0.99);
  }
  75% {
    transform: translate(5px, -25px) scale(1.01);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const BlobStack = styled.div`
  display: grid;
  grid-template-areas: 'stack';
  position: relative;
`;

const floatAnimations = [float1, float2, float3, float4];

const InfinitySvg = styled.svg<{ $index: number }>`
  grid-area: stack;
  width: 100vmin;
  height: 50vmin;
  animation: ${({ $index }) => floatAnimations[$index % 4]} ${({ $index }) => 8 + $index * 2}s ease-in-out infinite;
  mix-blend-mode: screen;
`;

type Props = {
  className?: string;
};

const InfinityBlobs: React.FC<Props> = ({ className }) => {
  const blobs = [
    { id: 'grad1', colors: ['#0074D9', '#39CCCC', '#0074D9'] },
    { id: 'grad2', colors: ['#FF4136', '#FF851B', '#FF4136'] },
    { id: 'grad3', colors: ['#3D9970', '#01FF70', '#3D9970'] },
    { id: 'grad4', colors: ['#B10DC9', '#85144B', '#B10DC9'] },
  ];

  // Two teardrops facing each other, tips meeting at center
  const infinityPath = "M100,50 C60,5 10,15 10,50 C10,85 60,95 100,50 C140,5 190,15 190,50 C190,85 140,95 100,50 Z";

  return (
    <Container className={className}>
      <BlobStack>
        {blobs.map((blob, index) => (
          <InfinitySvg
            key={index}
            $index={index}
            viewBox="0 0 200 100"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id={blob.id} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={blob.colors[0]} />
                <stop offset="50%" stopColor={blob.colors[1]} />
                <stop offset="100%" stopColor={blob.colors[2]} />
              </linearGradient>
            </defs>
            <path
              d={infinityPath}
              fill={`url(#${blob.id})`}
              opacity="0.85"
            />
          </InfinitySvg>
        ))}
      </BlobStack>
    </Container>
  );
};

export default InfinityBlobs;
