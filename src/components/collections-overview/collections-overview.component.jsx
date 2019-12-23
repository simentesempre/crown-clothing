import React from 'react'

import { connect } from 'react-redux'

import PreviewCollection from '../preview-collection/preview-collection.component'

import './collections-overview.styles.scss'

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {collections.map(({id, ...others}) => {
            return <PreviewCollection key={id} {...others} />
        })}
    </div>
)

const mapStateToProps = ({ shop: { collections }}) => ({
    collections: Object.keys(collections).map(collectionKey=>collections[collectionKey])
})

export default connect(mapStateToProps)(CollectionsOverview)