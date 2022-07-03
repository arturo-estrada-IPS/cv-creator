export interface CardProps {
  children: JSX.Element | JSX.Element[] | string;
}

export interface CardTitleProps extends CardProps {}

export interface CardContentProps extends CardProps {}
