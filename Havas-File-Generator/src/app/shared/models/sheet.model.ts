export interface SHEET {
  name : string
  rows : ROW[]
}

export interface ROW {
  property: string;
  type: string;
  value_default : string;
}