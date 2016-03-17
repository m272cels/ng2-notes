interface Line {
  text: string;
  checked?: boolean;
}

export interface Note {
  title?: string;
  lines: Line[];
}