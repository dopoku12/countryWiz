import useFetchApi from "../customHooks/usefetchapi";
const Info = () => {
    const { data, errorHandler, pending } = useFetchApi()
    console.log('error:', errorHandler);
    console.log('InfoPage:', data);

    return (
        <article>
            <aside className="right-background">
                {
                    pending && <h1>LOADING...</h1>

                }

                <div>


                    <div>

                        {data.region}
                    </div>


                </div>
            </aside>
        </article>
    );
}

export default Info;