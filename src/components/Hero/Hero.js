import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey there, I'm Max
      </SectionTitle>
      <SectionText>
        Web Designer and Front End Software Engineer
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}> Lets Talk</Button>
    </LeftSection>
  </Section>
);

export default Hero;