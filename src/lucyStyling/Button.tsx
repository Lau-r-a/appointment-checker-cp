import LucyColors from "./LucyColors"

interface ButtonProps 
extends React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>, 
  HTMLButtonElement>, React.AriaAttributes {

  }
/**
 * Button.
 *
 * @param {ButtonProps} props button's props
 * @returns {React.ReactElement<ButtonProps>} Button.
 */
function Button(props: ButtonProps) {
  const { children, onClick, ...rest } = props
  const buttonCSS: React.CSSProperties = {
    backgroundColor: LucyColors.eggplantTwo,
    border: `1px solid ${LucyColors.apricot}`,
    borderRadius: "0.25rem",
    color: LucyColors.apricot,
    margin: "5px",
    ...rest
  }

  return(
    <button
    style={buttonCSS}
    onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button