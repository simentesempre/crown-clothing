import React from 'react'
import { connect } from 'react-redux'
import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

const Directory = ({ sections }) => {  
    return (
        <div className="directory-menu">
            {
                sections.map(({id, ...others}) => {
                    return <MenuItem key={id} {...others}/>
                })
            }
        </div>
    )
}

const mapStateToProps = ({directory: {sections}}) => ({
  sections
})

export default connect(mapStateToProps)(Directory)