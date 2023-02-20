const Cards = ({ data, pending }) => {
    return (
        <article className="flex flex-wrap justify-center">
            {
                pending && <h1>LOADING...</h1>
            }
            {
                data.map(i => {
                    return (
                        <section key={i.area} className=" m-4">
                            <ul className="max-w-sm rounded 
                        overflow-hidden 
                        shadow-2xl"
                            >
                                <img className="w-full" src={i.flags.svg} alt="flags" />

                                <h1 className="font-bold text-2xl">
                                    {i.name.common}
                                </h1>

                                <li>
                                    Population: {i.population}
                                </li>
                                <li>
                                    Region: {i.region}
                                </li>

                                <li>
                                    Capital: {i.capital}
                                </li>
                            </ul>
                        </section>
                    )
                })
            }

        </article>
    );

}

export default Cards;