import styled from "@emotion/styled";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  + input[type="submit"] {
    cursor: pointer;
    &:hover {
      background-color: aquamarine;
    }
  }
`;
