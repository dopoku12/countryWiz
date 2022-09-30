const Content = ({ data, pending }) => {
    console.log('home:', data);
    return (
        <article className="content">
            {
                pending && <h1>LOADING...</h1>
            }

            <aside className="left">
                <ul className="country-imgs">
                    {data.map(i => (
                        <li className="li-imgs" key={i.area}>
                            <img className="flag-img" src={i.flags.svg} alt="" />
                            <h1>{i.name.official} / {i.cca3}</h1>
                            <img className="arms-img" src={i.coatOfArms.svg} alt="" />
                        </li>
                    ))
                    }
                </ul>
            </aside>
            <aside className="right">
                <ul className="country-info">
                    {
                        data.map(i => {

                            let name = Object.values(i.name.nativeName);
                            let nativeName = Object.values(name.map(i => i.common));
                            let cur = Object.values(i.currencies)

                            return (
                                <ul key={i.area}>
                                    <h1>
                                        nativeName:  {nativeName}
                                    </h1>


                                    <li>
                                        {i.capital[0]}
                                    </li>

                                    <li>
                                        {
                                            Object.values(i.languages)
                                        }
                                    </li>
                                    <li>
                                        drive side:    {i.car.side}
                                    </li>

                                    <li>
                                        {cur.name}
                                        {cur.symbol}
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