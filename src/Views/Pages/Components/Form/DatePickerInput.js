import moment from "moment-jalaali";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const DatePickerInput = ({ model, id, description }) => {
  const handleChange = (value) => {
    model[id] =
      value.year +
      "/" +
      ("0" + value.month).slice(-2) +
      "/" +
      ("0" + value.day).slice(-2);
    // model[id]=value;
  };
  const getPersianDate = (dateStr) => {
    let date = moment(dateStr);
    let year = date.jYear();
    let month = date.jMonth() + 1;
    let day = date.jDate();

    let strDate = year + "/";
    if (month < 10) strDate += "0" + month;
    else strDate += month;
    strDate += "/";

    if (day < 10) strDate += "0" + day;
    else strDate += day;
    return strDate;
  };
  return (
    <>
      <label style={{ marginTop: "4px" }} htmlFor={id}>
        <b>{description}:</b>
      </label>
      <br />
      <DatePicker
        style={{
          border: "1px solid #ced4da",
          borderRadius: "5px",
          padding: "10px",
          color: "#495057",
          width: "413px",
          height: "40px",
          backgroundClip: "padding-box",
        }}
        value={getPersianDate(model[id])}
        onChange={handleChange}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
      />
    </>
  );
};

export default DatePickerInput;
