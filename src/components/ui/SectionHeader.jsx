import React from "react";
import styled from "styled-components";

function SectionHeader({ title, info }) {
  return (
    <HeaderTitle>
      <h4 className="section-header_title">{title}</h4>
      <p className="section-header_info">{info}</p>
    </HeaderTitle>
  );
}

const HeaderTitle = styled.header`
  .section-header_title {
    font-size: 1.6rem;
    font-weight: 600;
    text-transform: capitalize;
    color: #030037;
    margin-bottom: 0.5rem;
  }

  .section-header_info {
    font-size: 1.2rem;
    color: #686687;
  }
`;

export default SectionHeader;
