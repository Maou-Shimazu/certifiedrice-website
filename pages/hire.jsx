import Head from "next/head";

export default function Hire() {
    return (
        <div>
            <Head>
                <title>Certified_Rice</title>
                <link rel="icon" href="https://avatars.githubusercontent.com/certifiedrice" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                      integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
                      crossOrigin="anonymous" referrerPolicy="no-referrer"/>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                      crossOrigin="anonymous"></link>
            </Head>

            <div className="topnav">
                <a className="active">Certified_Rice</a>
                <a href="./">Home</a>
                <a href="./contact">Contact</a>
                <a href="./portfolio">Portfolio/Work</a>
                <a href="./hire">Hire me!</a>
                <a href="https://github.com/CertifiedRice/certifiedrice-website"><i className="fa-brands fa-github"></i>&nbsp; Source</a>
            </div>


            <h1>Certified_Rice</h1>
            <img src="https://avatars.githubusercontent.com/certifiedrice" className="profile-picture"></img>
            <h3 className="underline">Hire me!</h3>

            <p>I do commission(sometimes), I can code stuff.</p>

            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p>I'm available for hire!</p>

            <a href="./contact">
                <button>Contact</button>
            </a>

            <h3 className="underline">Payment options</h3>
            <ul>
                <li>USD</li>
                <li>BTC</li>
                <li>Doge Coin</li>
            </ul>

            <h3 className="underline">Payment Methods</h3>

            <ul>
                <li>Cashapp</li>
                <li>BTC Wallet</li>
                <li>Doge Coin Wallet</li>
            </ul>
        </div>
    )
}