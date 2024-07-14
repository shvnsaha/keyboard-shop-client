import { ReactNode } from "react";


const Container = ({children}:{children:ReactNode}) => {
    return (
        <div className=''>
            {children}
        </div>
    );
};

export default Container;