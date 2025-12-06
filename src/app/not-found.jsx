
import Link from "next/link";

export default function NotFound(){
    return(
        <>
           <div className="not-found-container">
            <h1>404</h1>
            <p>К сожалению, страница не найдена.</p>
            <Link href="/" className="home-link">Вернуться на главную</Link>
        </div>
        </>
    )
}
