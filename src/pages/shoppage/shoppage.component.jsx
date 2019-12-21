import React from 'react'
import { connect } from 'react-redux'

import PreviewCollection from '../../components/preview-collection/preview-collection.component.jsx'

const ShopPage = ({collections}) =>  {
    return (
        <div className="shop-page">
            {
                collections.map(({id, ...others}) => {
                    return <PreviewCollection key={id} {...others} />
                })
            }
        </div>
        
    )
}

const mapStateToProps = ({ shop: { collections }}) => ({
    collections
})

export default connect(mapStateToProps)(ShopPage)