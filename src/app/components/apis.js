import Link from "next/link";
import Api1 from "./api1";
import Api2 from "./api2";
import Api3 from "./api3";

export default function Apis () {
    return (
        
        <div className="flex-col h-screen">
            <h1 className="text-center text-4xl font-bold pt-10" >Lista aleatoria de víctimas de la radiación</h1>
                <Api1 />
            <h1 className="text-center text-4xl font-bold">Lista aleatoria de criminales de odio</h1>
                <Api2 />
                <h1 className="text-center text-4xl font-bold">Chistes cotorros para alivianar</h1>
                <Api3 />
        </div>
    );
}