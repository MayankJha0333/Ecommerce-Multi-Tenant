import { StaticImageData } from "next/image";

interface CustomField {
  fieldName: string;
  displayName: string;
  fieldValue: number;
}

export interface CategoryItem {
  key: string;
  title: string;
  image: StaticImageData;
  customFields: CustomField[];
}
