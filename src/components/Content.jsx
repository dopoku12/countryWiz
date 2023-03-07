const Content = ({ data, pending, setSwitchComp, setName }) => {

    function backHandler() {
        setSwitchComp(true)
        setName('')
    }
    return (
        <article className="">
            <header>
                <nav>
                    <button onClick={() => backHandler()}>
                        back
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
                            <ul className="country-card" key={i.area}>
                                <li className="li-imgs">
                                    <img className="flag-img" src={i.flags.svg} alt="flags" />
                                </li>
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
                        )
                    })
                }
            </section>

        </article>
    );
}
export default Content;