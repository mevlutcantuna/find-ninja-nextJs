import {useSelector} from "react-redux";
import Link from "next/link";
function NinjaItems(props) {
    const ninjas = useSelector(state => state.ninjas);
    console.log(ninjas)

    return (
        <div>
            {ninjas.map((item) => (
                <Link href={'/ninjas/' + item.id.toString()} key={item.id}>
                    <a><h1>{item.name}</h1></a>
                </Link>
            ))}
        </div>
    );
}

export default NinjaItems;