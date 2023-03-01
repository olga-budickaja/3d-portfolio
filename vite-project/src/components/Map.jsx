import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
} from "react-simple-maps";

const Map = () => {
    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [-10.0, -52.0, 0],
                center: [13, 0],
                scale: 1700
            }}
            style={{ width: "100%", height: "100%" }}
        >
            <Geographies
                geography="/features.json"
                fill="#150526"
                stroke="#FFFFFF"
                strokeWidth={0.5}
            >
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} />
                    ))
                }
            </Geographies>
            {/*<Annotation*/}
            {/*    subject={[2.3522, 48.8566]}*/}
            {/*    dx={-90}*/}
            {/*    dy={-30}*/}
            {/*    connectorProps={{*/}
            {/*        stroke: "white",*/}
            {/*        strokeWidth: 2,*/}
            {/*        strokeLinecap: "round"*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">*/}
            {/*        {"Paris"}*/}
            {/*    </text>*/}
            {/*</Annotation>*/}
            <Annotation
                subject={[30.5238000, 50.4546600]}
                dx={-90}
                dy={-30}
                connectorProps={{
                    stroke: "white",
                    strokeWidth: 2,
                    strokeLinecap: "round"
                }}
            >
                <text x="-10" y="-5" textAnchor="end" alignmentBaseline="middle" fill="white">
                    {"Kyiv"}
                </text>
            </Annotation>
        </ComposableMap>
    );
};

export default Map;