import { LidropDown } from "../../Styles/NavComponent.js"

const DropDownItem = (props) => {
    return(
        <LidropDown onClick={props.click ? props.click : undefined}>{props.text}</LidropDown>
    )
}

export default DropDownItem;