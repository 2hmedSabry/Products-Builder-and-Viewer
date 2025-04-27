interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
children: React.ReactNode;
className?: string;
width? : 'w-full' | 'w-fit'
}

const Button = ({children ,className, width , ...rest} : IProps) => {
    
  return (
    <button className={`${className} ${width}  rounded-md text-white p-2 duration-200 
    outline-none shadow-md hover:shadow-lg active:scale-95 
    focus:border-indigo-500 fouus:outline-none focus:ring-2
          focus:ring-indigo-100
    `} {...rest}>
    {children}
    </button>
  )
} 

export default Button

