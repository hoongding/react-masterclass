// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string; // 이 곳이 내 테마가 어떻게 보일지를 설명할 부분.
    bgColor: string;
    accentColor: string;
  }
}
