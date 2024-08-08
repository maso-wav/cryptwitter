export default function Footer(){
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p className="col-md-4 mb-0 text-body-secundary">
                &copy; 2024 Fábrica ThaTrack
            </p>
            <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item">
                    <a href="/" className="nav-link px-2 text-body-secundary">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/timeline" className="nav-link px-2 text-body-secundary">CrypTweets</a>
                </li>                
                <li className="nav-item">
                    <a href="about" className="nav-link px-2 text-body-secundary">Sobre</a>
                </li>
            </ul>
        </footer>
    )
}