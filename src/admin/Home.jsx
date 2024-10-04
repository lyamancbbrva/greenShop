import { Link } from "react-router-dom"
import photo from "../assets/adminphoto.webp"

function Home() {
    return (
        <section>
            <div className="container mx-auto flex flex-col items-center py-10 text-center md:py-20 xl:max-w-3xl">
                <h1 className="text-4xl font-bold leading-none sm:text-5xl">Salammm!!!</h1>
                <img src={photo} className="w-[60%]" alt="photo" />
                <p className="my-6 text-xl">
                    Bura Admin hissəsidir. Burada ağıllı olmaq və bəzi şeyləri qurcalamamaq lazımdır!
                </p>
                <div className="flex flex-wrap justify-center">
                    <Link to='products' className="px-8 py-3 m-2 text-md font-semibold rounded text-white bg-[#43766C]">Məhsul əlavə et</Link>
                    <Link to='categories' className="px-6 py-3 m-2 text-md bg-slate-800 text-white rounded">Kataqoriya əlavə et</Link>
                </div>
            </div>
        </section>
    )
}

export default Home
