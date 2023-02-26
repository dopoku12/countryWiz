import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useDebounce from "../hooks/usedebounce";
const Cards = ({ data, pending, setName }) => {

    const navigate = useNavigate()
    function handleClick(name) {
        setName(name)
        navigate(`/country`)
    };
    return (
        <article className="flex flex-wrap justify-center">
            {
                pending && <h1>LOADING...</h1>
            }
            {
                data.map(i => {
                    return (
                        <section key={i.area}
                            className="m-4">
                            <ul className="max-w-sm 
                            rounded 
                            overflow-hidden 
                            shadow-2xl"
                                onClick={() => handleClick(i.name.common)}
                                value={i.name.common}
                            >
                                <img className="w-full"
                                    src={i.flags.svg}
                                    alt="flags"
                                />

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