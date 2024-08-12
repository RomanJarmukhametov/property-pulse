interface buttonInfo {
  text: string;
  link: string;
  backgroundColor: string;
}

export interface InfoBoxProps {
  heading: string;
  description: string;
  backgroundColor?: string;
  textColor?: string;
  buttonInfo: buttonInfo;
}
