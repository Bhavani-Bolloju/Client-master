import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { columns, rows } from "./ClientData";
import { ButtonWrapper } from "../ui/Button";
import styled from "styled-components";

import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

function ClientTable() {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, i) => (
                <TableCell
                  key={column.id + "" + i}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.code + "" + i}
                >
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TableNavs>
        <ButtonWrapper>
          <BiChevronLeft />
          <span>Prev</span>
        </ButtonWrapper>
        <ButtonWrapper>
          <span>Next</span>
          <BiChevronRight />
        </ButtonWrapper>
      </TableNavs>
    </Paper>
  );
}

const TableNavs = styled.div`
  && {
    padding: 2rem;
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
    button {
      background-color: #fff;
      color: #686687;

      &:hover {
        background-color: #fff;
      }

      svg {
        fill: #686687;
      }
    }
  }
`;

export default ClientTable;
