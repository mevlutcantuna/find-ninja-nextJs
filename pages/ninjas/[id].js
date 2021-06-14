export default function Detail({user}){
    console.log(user)
    return(
        <div>
            {user.name}
        </div>
    )
}

export async function getServerSideProps({params}){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json();
    return{
        props:{
            user
        }
    }
}
