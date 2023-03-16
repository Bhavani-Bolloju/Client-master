import React from "react";
import styled from "styled-components";
import SectionHeader from "../ui/SectionHeader";

function ThemeSetup() {
  return (
    <section className="section-add_client">
      <SectionHeader
        title="Theme Setup"
        info="Add information about the client to give them a personalized
        experience."
      />
    </section>
  );
}

const ThemeSection = styled.section`
  display: flex;
`;

export default ThemeSetup;
