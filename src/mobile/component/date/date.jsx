import React from "react"
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import '../../sass/page/date/style.scss'
export default function Example() {
 

  return (
    <div style={{ direction: "rtl" }}>
      <DatePicker placeholder='تاریخ تولد'
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
      />
    </div>
  )
}