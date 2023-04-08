import NextLink from "next/link";


interface Props{
    children:string;
    href:string;
    props?:string[]
}

export default function Link({children,href,...props}:Props){
    return(
        <>
            <NextLink href={href}>
                {children}
            </NextLink>
        </>
    )
}