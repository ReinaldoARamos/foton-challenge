import * as React from "react"
const AddFeather = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={22}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M8.8 5H5.6V1.7c0-.4-.3-.8-.8-.8s-.7.4-.7.8V5H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V6.5H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7Zm15-4.9V0h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3C16.8 7.5 17.9 7.2 19 7c.9-.2 1.8-.4 3-1.2C24.2 4.2 23.9.3 23.8.1Z"
    />
  </svg>
)
export default AddFeather
