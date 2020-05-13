import React,{useState} from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';

const MyDateRangePicker = () => {

  const [startDate,setStartDate] = useState('1/1/2014')
  const [endDate,setEndDate] = useState('3/1/2014')
  return (
    <div className="text-center">
      <DateRangePicker startDate={startDate} endDate={endDate}>
        <button type="button" className="btn btn-link btn-block">
          <label>{startDate}{` to `}{endDate}</label>
        </button>
      </DateRangePicker>
    </div>
  )
}

export default MyDateRangePicker
