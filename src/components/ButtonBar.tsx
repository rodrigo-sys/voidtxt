import Button, { ButtonProps } from './Button';
import '../styles/ButtonBar.css';

type ButtonBarProps = ButtonProps;

function ButtonBar({ className, ...props }: ButtonBarProps) {
  const combinedClass = className ? `button-bar ${className}` : 'button-bar';
  return <Button className={combinedClass} {...props} />;
}

export default ButtonBar;
export type { ButtonBarProps };
