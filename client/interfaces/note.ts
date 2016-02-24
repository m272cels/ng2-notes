interface Line {
  text: string;
  checked?: boolean;
}

export interface Note {
  id: string;
  title?: string;
  lines: Line[];
  edited: Date;
}