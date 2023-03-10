const Content = ({ data, pending, setSwitchComp, setName, FaArrowLeft }) => {

    function backHandler() {
        setSwitchComp(true)
        setName('')
    }
    return (
        <article className="">
            <header className="m-5 ">
                <nav>
                    <button className="bg-slate-700 
                    hover:bg-slate-800 w-20
                    flex flex-nowrap items-center"

                        onClick={() => backHandler()}>
                        <FaArrowLeft className="m-2" />
                        <h2>
                            back
                        </h2>
                    </button>
                </nav>
            </header>
            {pending && <h1>LOADING...</h1>}
            <section className="">
                {
                    data.map(i => {
                        console.log(i);
                        let cur = Object.values(i.currencies)
                        let nativeName = Object.values(i.name.nativeName)
                        let languages = Object.values(i.languages)
                        console.log(languages);
                        return (
                            <div className=" flex flex-row">
                                <img className="object-contain h-55 
                                w-96" src={i.flags.svg}
                                    alt="flags" />
                                <ul className="country-card" key={i.area}>
                                    <h1>
                                        {i.name.common}
                                    </h1>
                                    <li>
                                        Native Name: {nativeName[0].common}
                                    </li>
                                    <li>
                                        Region: {i.region}
                                    </li>

                                    <li>
                                        Sub Region: {i.subregion}
                                    </li>
                                    <li>
                                        Currencies: {cur[0].name}{cur[0].symbol}
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
                                        Population: {i.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    </li>
                                </ul>
                            </div>
                        )
                    })
                }
            </section>

        </article>
    );
}
export default Content;