import Women from "@/assets/category/women.webp";
import Kids from "@/assets/category/teen.webp";
import Sneakers from "@/assets/category/sneakers.webp";
import Men from "@/assets/category/men.webp";
import { CategoryItem } from "../interface";

export const CATEGORY_ITEMS: CategoryItem[] = [
  {
    key: "womens",
    title: "Womens",
    image: Women,
    customFields: [
      {
        fieldName: "newItems",
        displayName: "New items",
        fieldValue: 45,
      },
      {
        fieldName: "saleItems",
        displayName: "Sales items",
        fieldValue: 45,
      },
    ],
  },
  {
    key: "mens",
    title: "Mens",
    image: Men,
    customFields: [
      {
        fieldName: "newItems",
        displayName: "New items",
        fieldValue: 45,
      },
      {
        fieldName: "saleItems",
        displayName: "Sales items",
        fieldValue: 45,
      },
    ],
  },
  {
    key: "kids",
    title: "Kids",
    image: Kids,
    customFields: [
      {
        fieldName: "newItems",
        displayName: "New items",
        fieldValue: 45,
      },
      {
        fieldName: "saleItems",
        displayName: "Sales items",
        fieldValue: 45,
      },
    ],
  },
  {
    key: "sneakers",
    title: "Sneakers",
    image: Sneakers,
    customFields: [
      {
        fieldName: "newItems",
        displayName: "New items",
        fieldValue: 45,
      },
      {
        fieldName: "saleItems",
        displayName: "Sales items",
        fieldValue: 45,
      },
    ],
  },
];
