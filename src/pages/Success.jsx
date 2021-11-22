import { useLocation } from "react-router"


export const Success = () => {
    
    const location = useLocation();

    console.log(location)
    return (
        <div>
            <h3>Transaction Successful</h3>
        </div>
    )
}

export default Success
