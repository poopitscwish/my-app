import React from 'react'

function HistoryListItem(props){
  return (
    <div className='HistoryListItem d-flex flex-row align-items-center'>
            {
                props.itemprops.dateTime
            }
        
            {
                props.itemprops.transport
            }
        
        {
                props.itemprops.workType
            }
        
        {
                props.itemprops.fullname
            }
        
    </div>
  )
}


export default HistoryListItem

