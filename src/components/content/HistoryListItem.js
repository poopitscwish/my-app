import React from 'react'

function HistoryListItem(props) {
  return (
    <div className='HistoryListItem d-flex flex-row'>
        <span>
            {
                props.itemprops.dateTime
            }
        </span>
        <span>
            {
                props.itemprops.transport
            }
        </span>
        <span>
            {
                props.itemprops.workType
            }
        </span>
        <span>
            {
                props.itemprops.fullname
            }
        </span>
    </div>
  )
}


export default HistoryListItem

