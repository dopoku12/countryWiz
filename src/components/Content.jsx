const Content = ({ data, pending }) => {
    console.log('home:', data);
    return (
        <article className="content">
            {
                pending && <h1>LOADING...</h1>
            }

            <aside className="left">
                {data.map(i => (

                    <ul className="country-imgs" key={i.area}>

                        <li className="li-imgs" >
                            <img className="flag-img" src={i.flags.svg} alt="flags" />
                            <h1>{i.name.official} / {i.cca3}</h1>
                        </li>

                        <li className="li-imgs">
                            <img className="arms-img" src={i.coatOfArms.svg} alt="coatOfArms" />
                        </li>
                    </ul>

                ))
                }
            </aside>
            <aside className="right">
                <ul className="country-info">
                    {
                        data.map(i => {
                            let name = Object.values(i.name.nativeName);
                            let nativeName = Object.values(name.map(i => i.common));
                            let cur = Object.values(i.currencies)
                            console.log('cur', cur);

                            return (
                                <ul className="" key={i.area}>
                                    <h1>
                                        nativeName: {nativeName}
                                    </h1>


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
                                        currencies:{cur[0].name}{cur[0].symbol}
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
                                        subregion: {i.subregion}
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



            )

        </article>
    );
}
export default Content;