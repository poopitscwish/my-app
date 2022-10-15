import React from 'react'

function HistoryListItem(props){
  return (
    <tr className='HistoryListItem'>
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
        
    </tr>
  )
}


export default HistoryListItem

