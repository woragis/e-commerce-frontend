import styled from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    background: {
      color: {
        main: string;
        secondary: string;
      };
    };
    text: {
      color: string;
      background: string;
      dim: string;
      important: string;
    };
    special: {
      important: {
        background: string;
        color: string;
      };
      warning: {
        background: string;
        color: string;
      };
      danger: {
        background: string;
        color: string;
      };
    };
  }
}
