import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import ItemCollection from '../item-collection/item-collection.component'

import './preview-collection.styles.scss'

const PreviewCollection = ({title, items, routeName, match}) => {
    return (
        <div className="collection-preview">
            <h1 className="title"><Link to={`${match.url}/${routeName}`}>{title.toUpperCase()}</Link></h1>
            <div className="preview">
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map(item => {
                        return (
                            <ItemCollection key={item.id} item={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default withRouter(PreviewCollection)