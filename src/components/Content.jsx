import useFetchApi from "../hooks/usefetchapi";
const Content = () => {
    const { data, pending } = useFetchApi()
    console.log(data);
    return (
        <article className="content">
            {pending && <h1>LOADING...</h1>}
            <section className="">
                {
                    data.map(i => {
                        let cur = Object.values(i.currencies)
                        return (
                            <ul className="country-card" key={i.area}>
                                <li className="li-imgs">
                                    <img className="flag-img" src={i.flags.svg} alt="flags" />
                                </li>

                                <li>
                                    Currencies: {cur[0].name}{cur[0].symbol}
                                </li>
                                <li>
                                    Capital: {i.capital}
                                </li>

                                <li>
                                    Languages: {
                                        Object.values(i.languages)
                                    }
                                </li>
                                <li>
                                    Drive Side: {i.car.side}
                                </li>

                                <li>
                                    Population: {i.population}
                                </li>

                                <li>
                                    startOfWeek:{i.startOfWeek}
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