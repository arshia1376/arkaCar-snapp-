import React from "react"
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import '../../sass/page/date/style.scss'
// component date
export default function Example() {
  return (
    // start html
    <div style={{ direction: "rtl" }}>
      {/* date picker */}
      <DatePicker placeholder='تاریخ تولد'
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
      />
    </div>
    // end html
  )
}