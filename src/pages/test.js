import { Button} from "flowbite-react";
import { useAuth } from '../AuthContext.js';

function Test(){

    const { currUser } = useAuth();

    const handleClick = () => {
        console.log(currUser.email);
    }


    return (
        <div className="w-full grid justify-center">

            <Button color='dark' onClick={handleClick}>Buton</Button>
        </div>
    );
}

export default Test;