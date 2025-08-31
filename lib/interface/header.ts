export interface HeaderItems {
  title: HeaderTitleProps;
  description: HeaderDescriptionProps;
  image: string;
  button: HeaderButtonProps;
}

interface DesignProps {
  content: string;
  color: string;
  fontSize: string;
  fontWeight: number;
}

interface HeaderButtonProps extends DesignProps {
  path: string;
}

interface HeaderTitleProps extends DesignProps {}

interface HeaderDescriptionProps extends DesignProps {}

export interface HeaderCarouselProps {
  items: HeaderItems[];
}
