import styled from 'styled-components';
import { useRef } from 'react';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 20%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Container = styled(motion.div)`
  width: 160px;
  height: 160px;
  background-color: rgba(225, 225, 225, 0.4);
  border-radius: 20%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const ContainerRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <Container dragDirectionLock ref={ContainerRef}>
        <Box
          drag
          dragConstraints={ContainerRef}
          dragSnapToOrigin
          dragElastic={0.7}
        />
      </Container>
    </Wrapper>
  );
}

export default App;
