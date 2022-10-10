const Dashboard = ({ data, pending }) => {

    return (
        <section className="dashboard">
            {data.map((i => {
                console.log('nt', i.name.common);
                // let freedomHouse = `https://freedomhouse.org/country/${i.name.common}/freedom-world/2022`
                return (
                    <div className="dashboard-info" key={i.area}>
                        <h3>
                            Officially {i.name.official} / {i.cca3}
                        </h3>
                        <li>
                            {i.unMember ? ' Member of United Nations' : 'Not a United Nations Member'}
                        </li>
                        <li>
                            timezones:{i.timezones}
                        </li>
                        <li>
                            independent:{i.independent ? 'yes' : 'no'}
                        </li>
                        {

                            // <li>

                            //     <a target='_blank' rel="noreferrer" href={freedomHouse} >
                            //         freedomHouse
                            //     </a>
                            // </li>
                        }
                    </div>

                )
            }

            ))
            }
        </section>
    );
}
export default Dashboard;