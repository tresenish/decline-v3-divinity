import { FC } from 'react';

interface ThreadsProps {
  color?: [number, number, number];
  amplitude?: number;
  distance?: number;
  enableMouseInteraction?: boolean;
}

declare const Threads: FC<ThreadsProps>;
export default Threads;
