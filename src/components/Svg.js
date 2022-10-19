const Svg = (props) => {
    const cId = props.countryId[0]
    const child = props.children
    const svgObj = child.props.children
    const svgId = svgObj.map((i) => i.props).map((i) => i.id)
    console.log('id:', svgId);

    const changeColor = svgId.map(i => {
        i === cId
            ?
            <svg>
                <path fill="red" />
            </svg>
            :
            <svg>
                <path />
            </svg>

    }
    )
    return props.children
}

export default Svg;