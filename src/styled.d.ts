import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      accent: string;
      border: string;
      bg: string;
      text: string;
      board: string;
      header: string;
      input: string;
    };
  }
}
