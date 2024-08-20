function Category() {
    return (
        <section className="px-6">
            <h1 className="text-[1.25em] mt-16 mb-4 text-center font-semibold">Kataqoriyaların idarə olunmasi formu:</h1>
            <button className="bg-green-700 float-end text-white p-3 rounded-md font-semibold">+ Kataqoriya əlavə et</button>
            <fieldset className="w-full space-y-1 py-5">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                            <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-800">
                                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                            </svg>
                        </button>
                    </span>
                    <input type="search" name="Search" placeholder="Məhsulun adını daxil edin..." className="w-[100%] py-4 pl-10 text-sm rounded-md focus:outline-none border-2 focus:dark:bg-gray-50 focus:dark:border-default-600" />
                </div>
            </fieldset>
        </section>
    )
}

export default Category