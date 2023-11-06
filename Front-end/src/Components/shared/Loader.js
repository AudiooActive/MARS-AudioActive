import { CirclesWithBar } from "react-loader-spinner";



export default function Loader() {

    return (
        <CirclesWithBar
            height="25px"
            width="25px"
            color="#66fcf1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            outerCircleColor=""
            innerCircleColor=""
            barColor=""
            ariaLabel='circles-with-bar-loading'
            />
    )
} 