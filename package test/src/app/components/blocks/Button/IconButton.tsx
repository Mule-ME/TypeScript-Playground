import Button from './Button';
import {IconButtonProps} from './types';

const IconButton = (props: IconButtonProps) => {
  const {endIcon, startIcon, children} = props;
  return (
    <Button position="relative" {...props}>
      {startIcon}
      {children}
      {endIcon}
    </Button>
  );
};

export default IconButton;
