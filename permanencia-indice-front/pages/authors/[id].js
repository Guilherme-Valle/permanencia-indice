function Author({ links }) {
    return (
        <ul>
            {links.map((link) => {
                return <li>{link.title}</li>
            })}
        </ul>
    )
}

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3001/authors')
    const authors = await res.json();

    const paths = authors.map((author) => ({
        params: { id: author._id }
    }));

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`http://localhost:3001/authors/${params.id}`)
    const links = await res.json();

    return { props: { links } }
}

export default Author