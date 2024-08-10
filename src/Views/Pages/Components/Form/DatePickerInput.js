
import moment from 'moment-jalaali';
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const DatePickerInput=({model,id,description})=>{

    const handleChange=(value)=>{
       
        model[id]=value;
    }
    return(
        <>
        <label style={{marginTop:"4px"}} htmlFor={id}><b>{description}:</b></label><br/>
        <DatePicker style={{ border: "1px solid #ced4da",
        borderRadius: "5px",padding: "10px",color: "#495057",width:"413px",
        height:"40px",backgroundClip:'padding-box'}}
        value={moment('1400/01/01 00:00', 'jYYYY/jM/jD HH:mm')} onChange={handleChange}
        calendar={persian} locale={persian_fa} calendarPosition="bottom-right" />
        </>
    )
}

export default DatePickerInput;