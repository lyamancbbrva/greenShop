import { Link } from "react-router-dom"
import DeleteModal from "./DeleteModal"
import CreateModal from "./CreateModal"

function Home() {
    return (
        <section>
            <DeleteModal />
            <CreateModal />
            <div className="container mx-auto flex flex-col items-center py-10 text-center md:py-20 xl:max-w-3xl">
                <h1 className="text-4xl font-bold leading-none sm:text-5xl">Salammm!!!</h1>
                <p className="mt-8 mb-12 text-xl">Xoş gəldin Admin, <br />
                    Zəhmət olmasa, aşağıdakı məqamları yadda saxlayın:  <br />
                    Şifrənizi heç kimlə paylaşmayın. <br />
                    İşinizi bitirdikdən sonra admin paneldən çıxış edin.<br />
                    Əks halda, sayta uyğunsuz məzmunlar yüklənə bilər və təhlükəsizlik riski yaranar. <br />
                    Sizin təhlükəsizliyiniz və saytın bütövlüyü üçün bu qaydalara riayət etməyiniz vacibdir. <br />
                    Anlayışınız üçün təşəkkür edirik.</p>
                <div className="flex flex-wrap justify-center">
                    <Link to='products' className="px-8 py-3 m-2 text-md font-semibold rounded text-white bg-[#FF8300]">Məhsul əlavə et</Link>
                    <Link to='category' className="px-6 py-3 m-2 text-md bg-slate-800 text-white rounded">Kataqoriya əlavə et</Link>
                </div>
            </div>
        </section>
    )
}

export default Home
