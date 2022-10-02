const Content = ({ data, pending }) => {
    console.log('home:', data);
    return (
        <article className="content">
            {
                pending && <h1>LOADING...</h1>
            }

            <aside className="left">
                <ul className="country-info">
                    {
                        data.map(i => {

                            return (
                                <ul className="" key={i.area}>

                                    <li>
                                        capital: {i.capital[0]}
                                    </li>

                                    <li>
                                        languages:     {
                                            Object.values(i.languages)
                                        }
                                    </li>
                                    <li>
                                        drive side: {i.car.side}
                                    </li>



                                    <li>

                                        population: {i.population}
                                    </li>
                                    <li>
                                        timezones:{i.timezones}
                                    </li>
                                    <li>
                                        independent:{i.independent ? 'yes' : 'no'}
                                    </li>
                                    <li>
                                        region: {i.region}
                                    </li>

                                    <li>
                                        unMember: {i.unMember ? 'yes' : 'no'}
                                    </li>
                                    <li>
                                        startOfWeek:{i.startOfWeek}
                                    </li>

                                </ul>
                            )
                        }
                        )
                    }
                </ul>
            </aside>
            <aside className="right">
                {data.map(i => {
                    let name = Object.values(i.name.nativeName);
                    let nativeName = Object.values(name.map(i => i.common));
                    let cur = Object.values(i.currencies)
                    console.log('cur', cur);
                    return (
                        <ul className="country-imgs" key={i.area}>
                            <li className="li-imgs">
                                <img className="flag-img" src={i.flags.svg} alt="flags" />
                            </li>
                            <img className="arms-img" src={i.coatOfArms.svg} alt="coatOfArms" />
                            <h2>
                                {nativeName}
                            </h2>
                            <h5>
                                Country in {i.subregion}
                            </h5>
                            <h1>
                                {nativeName},officially {i.name.official} / {i.cca3}
                            </h1>
                            <li>
                                currencies:{cur[0].name}{cur[0].symbol}
                            </li>
                            <li className="li-imgs">

                            </li>
                        </ul>
                    )
                })
                }
            </aside>



            )

        </article>
    );
}
export default Content;