const Filter = ({ data, handleInput }) => {
    let sliceData = data.slice(0, 10)
    console.log('filter:', sliceData);
    return (
        sliceData.map(i =>
            <ul onClick={handleInput}>
                <li key={i.area} >
                    {i.name.common}
                </li>
            </ul>
        )
    );
}

export default Filter;