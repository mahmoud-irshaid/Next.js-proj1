import Link from "next/link"

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props: { data }
    }
}


const ninjas = ({data}) => {
    return (
        <>
            <div>
                <ol>
                    {data.map(ninja => (
                        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
                            {ninja.name}
                        </Link>
                    ))}
                </ol>
            </div>
        </>
    );
}

export default ninjas;