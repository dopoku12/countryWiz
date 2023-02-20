const Cards = ({ data, pending }) => {
    return (
        <article className="">
            {
                pending && <h1>LOADING...</h1>
            }
            <section className="flex items-center flex flex-wrap justify-center p-6">
                {data.map(i => {

                    let cur = Object.values(i.currencies)
                    return (
                        <ul className="max-w-sm rounded overflow-hidden shadow-lg " key={i.area}>
                            <img className="w-full" src={i.flags.svg} alt="flags" />
                            <li className="li-imgs">
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

export default Cards;