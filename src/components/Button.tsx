import { useRef } from 'react';
import { useLongPress } from '../hooks/useLongPress';

export type ButtonProps = {
  onClick?: () => void;
  onLongPress?: () => void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
}

function Button({ onClick, onLongPress, children, className, style, disabled }: ButtonProps) {
  const longPressTriggered = useRef(false);

  const longPressHandlers = useLongPress({
    onLongPress: () => {
      if (onLongPress) {
        onLongPress();
        longPressTriggered.current = true;
      }
    },
  });

  const handleClick = () => {
    if (!longPressTriggered.current && onClick) {
      onClick();
    }
    longPressTriggered.current = false;
  };

  return (
    <button
      className={className}
      style={style}
      onClick={handleClick}
      disabled={disabled}
      {...longPressHandlers}
    >
      {children}
    </button>
  );
}

export default Button;
