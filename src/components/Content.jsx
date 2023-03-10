const Content = ({ data, pending, setSwitchComp, setName, FaArrowLeft }) => {

    function backHandler() {
        setSwitchComp(true)
        setName('')
    }
    return (
        <article className="">
            {pending && <span className="loader"></span>}
            <header className="m-5 ">
                <nav>
                    <button className="bg-slate-200
                    hover:bg-slate-300
                    dark:bg-slate-700 
                    dark:hover:bg-slate-800 w-20
                    flex flex-nowrap items-center"

                        onClick={() => backHandler()}>
                        <FaArrowLeft className="m-2" />
                        <h2>
                            back
                        </h2>
                    </button>
                </nav>
            </header>
            <section className="">
                {
                    data.map(i => {
                        let cur = Object.values(i.currencies)
                        let nativeName = Object.values(i.name.nativeName)
                        let languages = Object.values(i.languages)
                        return (
                            <div key={i.area} className=" flex m-5 flex-row">
                                <img className="object-contain h-55 w-96
                                m-2 mr-5" src={i.flags.svg}
                                    alt="flags" />
                                <div>
                                    <h1 className=" font-bold text-2xl">
                                        {i.name.common}
                                    </h1>

                                    <ul className="content-ul flex flex-row flex-wrap" >
                                        <li>

                                            Native Name: {nativeName[0].common}
                                        </li>
                                        <li>
                                            Top Level Domain: {i.tld.map(t => t)}
                                        </li>
                                        <li>
                                            Region: {i.region}
                                        </li>

                                        <li>
                                            Sub Region: {i.subregion}
                                        </li>
                                        <li>
                                            Currencies: {cur[0].name}
                                            {cur[0].symbol}
                                        </li>
                                        <li>
                                            Capital: {i.capital}
                                        </li>

                                        <li>
                                            Languages: {
                                                [...languages.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')]
                                            }
                                        </li>
                                        <li>
                                            Population: {
                                                i.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                            }
                                        </li>
                                    </ul>
                                    <footer>
                                        <button>
                                        </button>
                                    </footer>
                                </div>
                            </div>
                        )
                    })
                }
            </section>

        </article>
    );
}
export default Content;