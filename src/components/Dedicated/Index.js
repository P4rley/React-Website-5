import React from "react";

import {
  DedicatedContainer,
  DedicatedWrapper,
  DedicatedContent,
  DedicatedHeadline,
  DedicatedList,
  DedicatedListText,
  DedicatedBg,
  Background,
  Text,
  Check,
} from "./DedicatedElemets";

const Dedicated = () => {
  return (
    <>
      <DedicatedContainer>
        <DedicatedWrapper>
          <DedicatedContent data-aos="fade-right">
            <DedicatedHeadline>Dedicated To Our Success</DedicatedHeadline>
            <DedicatedList>
              <DedicatedListText>
                <Check /> <Text>Fast & easy to create a website.</Text>
              </DedicatedListText>
              <DedicatedListText>
                <Check /> <Text>Beautiful UI elemnts to build page.</Text>
              </DedicatedListText>
              <DedicatedListText>
                <Check />
                <Text>
                  Super speed page loading with smooth aniamtions on sections.
                </Text>
              </DedicatedListText>
            </DedicatedList>
          </DedicatedContent>
          <DedicatedBg>
            <Background />
          </DedicatedBg>
        </DedicatedWrapper>
      </DedicatedContainer>
    </>
  );
};

export default Dedicated;
