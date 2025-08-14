import { css } from "@emotion/react";

export const container = css`
  display: flex;
  flex-direction: column;
`;

export const listContainer = css`
  flex-grow: 1;
  border: 1px solid #dbdbdb;
  border-radius: 8px;

  // 424px 넘어가면 스크롤을 생기게 하겠음
  & > ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    height: 424px;
    overflow-y: auto;

    & > li {
      display: flex;
      box-sizing: border-box;
      padding: 5px 15px;
      border-bottom: 1px solid #dbdbdb;
      overflow: hidden;

      & > input[type="checkbox"] {
        display: none;

        & + label {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          width: 25px;
          height: 25px;
          border: 1px solid #dbdbdb;
          box-sizing: border-box;
        }

        &:checked + label::after {
          display: block;
          content: "";
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background-color: #0b4f8f;

        }
      }
    }
  }
`;

export const todoInputContainer = css`
  margin-top: 10px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  box-sizing: border-box;
  overflow: hidden;
  height: 40px;
  
  & > input {
    border: none;
    outline: none;
    box-sizing: border-box;
    padding: 5px 15px;
    width: 100%;
    height: 100%;
  }
`;

export const hiddenTrashBox = css`
  position: absolute;
  top: 0;
  right: 0;
  width: 46px;
  height: 46px;
  overflow: hidden;
  cursor: pointer;

  &:hover > div {
    right: 0;
  }
`;

export const trashBox = css`
transform: all 0.2s;
  position: absolute;
  top: 0;
  right: -46px;
  width: 46px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ea0808;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;