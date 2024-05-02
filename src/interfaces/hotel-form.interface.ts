export interface IHotelForm {
  title: string;
  description: string;
  isActive: boolean;
  isStandard: boolean;
  formType: string;
  formCategory: string;
  fields: IField[];
}

export interface IField {
  label: string;
  placeholder?: string;
  type: string;
  name: string;
  isActive: boolean;
  shouldDisabled: boolean;
  min?: number;
  max?: number;
}
