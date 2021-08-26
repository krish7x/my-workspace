export type Actions =
  | {
      type: "add";
      text: string;
      complete: boolean;
    }
  | {
      type: "remove";
      index: number;
    };
