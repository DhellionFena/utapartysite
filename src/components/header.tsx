import Image from "next/image";
import {Anton} from "next/font/google"
import Link from "next/link";

const anton = Anton({weight:"400", subsets: ['latin']});

function ListIcon(props: any) {
    return (
        <li className={`
             text-2xl text-branco ${anton.className} hover:bg-marrom hover:cursor-pointer p-1 rounded-sm
            `}>
            <nav><Link href={props.link}>{props.nome}</Link></nav>
        </li>
    )
}


export default function Header() {

    return (
        <header className={`
            flex w-screen justify-around items-center p-5 pl-20 bg-pretofundo
        `}>
            <Link href={"/"}>
            <Image src={`logo.svg`} alt="logo" width={180} height={45} />
            </Link>


            <ul className={`
                flex w-1/3 justify-center items-center gap-10
            `}>
                <ListIcon nome="VOICEBANKS" link="/voicebanks" />
                <ListIcon nome="ABOUT US" link="/about" />
                <ListIcon nome="CONTACT" link="/contact" />
            </ul>
        </header>
    )
}