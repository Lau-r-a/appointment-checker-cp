interface iLucysButton extends React.ButtonHTMLAttributes<HTMLButtonElement> 

function Button({size, }) {
  const buttonStyling = {}
  return (
    <button
      style={buttonStyling}
    >
      {title}
      {description}
    </button>
  )
}

export default Button