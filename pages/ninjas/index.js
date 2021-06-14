import {useDispatch} from "react-redux";
import {GETDATA} from "../../store/constant";
import NinjaItems from "../../Components/NinjaItems";

function Index(props) {
    console.log(props);

    const dispatch = useDispatch();
    return (
        <div>
            Hello
            <button onClick={() => dispatch({type:GETDATA.GET_DATA_SUCCESS,payload:props.data})}>Show</button>
            <NinjaItems/>
        </div>
    );
}

export async function getStaticProps() {
    const api = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await api.json();
    return {
        props: {
            data,  // will be passed to the page component as props
        },
    }
}

export default Index;