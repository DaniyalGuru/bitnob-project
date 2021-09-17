import React from "react";
import Loading from "../Loader";


const BitNobButton = React.forwardRef(({ children, className, variant = 'default', isLoading, ...rest }, ref) => {

    const variants = {
        black: 'px-4 md:px-6 py-1 md:py-2 bg-black text-white rounded-lg w-full block focus:outline-none hover:bg-black active:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-black',
        default: 'px-8 md:px-10 py-1 md:py-2 bg-green-200 rounded-xl text-black w-full block focus:outline-none hover:bg-green-600 active:bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-400',
    }
    
    return(
        <button 
            ref={ref} 
            className={`hover:opacity-90 font-quicksand text-sm disabled:opacity-50 text-center transition-all duration-100 font-medium ${className} ${variants[variant]}`} 
            {...rest}>
           <React.Fragment>
               { isLoading && <Loading /> } {children}
           </React.Fragment>
        </button>
    )
})

export default BitNobButton