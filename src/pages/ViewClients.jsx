import React from "react";
import styled from "styled-components";

function ViewClients() {
  return (
    <Section>
      <h4>View Clients</h4>
      <div className="table">table</div>
    </Section>
  );
}

const Section = styled.section`
  && {
    padding: 1rem;
    h4 {
      font-size: 2rem;
      color: #030037;
    }

    .table {
      background-color: #fff;
    }
  }
`;

export default ViewClients;
