export interface NavbarItem {
  key: string;
  label: string;
  path: string;
  isNew?: boolean;
  hasArrow?: boolean;
  children?: NavbarItem[];
  isMegaMenu?: boolean;
  megaMenuData?: {
    dealOfTheDay?: {
      title: string;
      titleColor?: string;
      subtitle: string;
      subtitleColor?: string;
      buttonText: string;
      imageUrl?: string;
    };
  };
}
