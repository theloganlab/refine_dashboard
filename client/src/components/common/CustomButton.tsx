import { Button } from '@pankod/refine-mui';
import { CustomButtonProps } from 'interfaces/common';

const CustomButton = ({ type, title, backgroundColor, color, fullWidth, icon, handleClick, disabled }: CustomButtonProps) => {
  return (
    <Button
      disabled={disabled}
      type={type === 'submit' ? 'submit' : 'button'}
      sx={{
        flex: fullWidth ? 1 : 'unset',
        padding: '10px 15px',
        width: fullWidth ? '100%' : 'fit-content',
        backgroundColor: backgroundColor,
        color,
        minWidth: 130,
        fontSize: 16,
        fontWeight: 600,
        gap: '10px',
        '&:hover': {
          backgroundColor,
          opacity: 0.9,
        },
        textTransform: 'capitalize'
      }}
      onClick={handleClick}
    >
      {icon}
      {title}
    </Button>
  )
}

export default CustomButton