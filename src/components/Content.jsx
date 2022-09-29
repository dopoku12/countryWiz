const Content = ({ data, pending }) => {
    console.log('home:', data);
    return (
        <article className="content">
            {
                pending && <h1>LOADING...</h1>
            }

            <aside className="right">
                <ul>
                    {data.map(i => (
                        <li key={i.area}>
                            <img className="arms-img" src={i.coatOfArms.svg} alt=""
                                style={{ height: 100 }} />
                            <img className="flag-img" src={i.flags.svg} alt="" />
                            <h1>{i.name.official} / {i.cca3}</h1>
                        </li>
                    ))
                    }
                </ul>
            </aside>
            <aside className="left">
                <ul>
                    {
                        data.map(i => {

                            let values = Object.values(i.name.nativeName);
                            let nativeName = Object.values(values.map(i => i.common));
                            return (
                                <li key={i.area}>
                                    <h1>
                                        {nativeName}
                                    </h1>
                                    {
                                        //capital
                                        //car side
                                        //language
                                        //currency
                                        //population   
                                        //timezones  
                                        //independent
                                        //region
                                        //subregion
                                        //unMember
                                        //startOfWeek
                                    }
                                </li>
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