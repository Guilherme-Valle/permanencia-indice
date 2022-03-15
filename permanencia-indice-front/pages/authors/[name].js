function Author({ links }) {
    return (
        <ul>
            {links.map((link) => {
                return <li>{link.title}</li>
            })}
        </ul>
    )
}

export async function getServerSideProps({ params }){
    
}