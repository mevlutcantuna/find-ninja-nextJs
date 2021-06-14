import Link from 'next/link';

function HomePage() {
    return <div>
        <Link href={'/ninjas'}>
            <a>Ninjas</a>
        </Link>
    </div>
}

export default HomePage