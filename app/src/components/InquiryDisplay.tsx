import { Inquiry } from "../config"
import './inquiryDisplay.css'

export function InquiryDisplay(props: Inquiry) {

    return (
        <div className="inquiryParent animate floatUp">

            <img src={props.thumbnailSRC} alt="" className="inquiryThumbnail" />

            <h3 className="headerMid textCenter inquiryHeader">{props.title}</h3>
        
            <p className="text textCenter inquiryText">{props.text}</p>

        </div>
    )
}