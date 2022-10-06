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
                    console.log('cur', cur);
                    return (
                        <ul className="country-imgs" key={i.area}>
                            <li className="li-imgs">
                                <img className="flag-img" src={i.flags.svg} alt="flags" />
                            </li>

                            <li>
                                currencies:{cur[0].name}{cur[0].symbol}
                            </li>
                            <li>
                                capital: {i.capital[0]}
                            </li>

                            <li>
                                languages:{
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
                                unMember: {i.unMember ? 'yes' : 'no'}
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