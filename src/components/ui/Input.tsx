type IProps = React.InputHTMLAttributes<HTMLInputElement>
// interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({...rest} : IProps) => {
  return (
   
          <input  name='' id="" className="border-2 border-gray-200
          shadow-md rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
          " {...rest} />

  )
} 

export default Input


