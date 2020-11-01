import Link from "next/link"

export default function FirstPost() {
    return(
        <div className="container" style={{
            backgroundImage: `url("https://www.si3.ae/wp-content/uploads/2018/08/Web-design-development-dubai.jpg")`,backgroundRepeat: 'no-repeat',width:'100%',height:'100%'
            }}>
            <main>
                <h1 className="title">
                    First Post
                </h1>
                <div className="card">
                    <h3>Visit Google &rarr;</h3>
                    <p>Find more information on google</p>
                </div>
                <h2>
                    <Link href="/">
                        <a>back to home</a>
                    </Link>
                </h2>
            </main>

            <style jsx>{`
                .container {
                    padding: 0 0.5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                main {
                    padding: 5rem 0;
                    justify-content: center;
                    align-items: center;
                }

                .title {
                    margin: 0;
                    line-height: 1.15;
                    font-size: 4rem;
                    
                }

                .card {
                    margin: 1rem;
                    flex-basis: 45%;
                    padding: 1.5rem;
                    text-align: left;
                    color: inherit;
                    border: 1px solid #eaeaea;
                    border-radius: 10px;
                    transition: color 0.15s ease, border-color 0.15s ease;
                }

                .card:hover,
                .card:focus,
                .card:active {
                    color: #0070f3;
                    border-cover: #0070f3;
                }

                .card h3 {
                    margin: 0 0 1rem 0;
                    font-size: 1.5rem;
                }
          
                .card p {
                    margin: 0;
                    font-size: 1.25rem;
                    line-height: 1.5;
                }

                h1 {
                    color: #0070f3; 
                }
            `}</style>

        </div>
        
    )
}