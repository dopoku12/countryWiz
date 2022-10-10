const Content = ({ data, pending }) => {
    console.log('home:', data);
    return (
        <article className="content">
            {
                pending && <h1>LOADING...</h1>
            }
            <section className="left">
                <ul className="country-info">
                    {
                        data.map(i => {
                            return (
                                <ul className="" key={i.area}>
                                </ul>
                            )
                        }
                        )
                    }
                </ul>
            </section>
            <section className="right">
                {data.map(i => {
                    let name = Object.values(i.name.nativeName);
                    let nativeName = Object.values(name.map(i => i.common));
                    let cur = Object.values(i.currencies)
                    return (
                        <ul className="country-imgs" key={i.area}>
                            <li className="li-imgs">
                                <img className="flag-img" src={i.flags.svg} alt="flags" />
                            </li>

                            <li>
                                Currencies: {cur[0].name}{cur[0].symbol}
                            </li>
                            <li>
                                Capital: {i.capital[0]}
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
            )
        </article>
    );
}
export default Content;