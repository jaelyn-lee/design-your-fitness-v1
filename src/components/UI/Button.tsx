interface button {
  content: string
  onClick?: () => void
}
export default function button(props: button) {
  return (
    <button
      className="bg-red text-white py-2 px-14 rounded-3xl text-xl sm:text-4xl sm:py-4 sm:px-20"
      onClick={props.onClick}
    >
      {props.content}
    </button>
  )
}
