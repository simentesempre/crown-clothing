import React from 'react'
import { connect } from 'react-redux'
import ItemCollection from '../../components/item-collection/item-collection.component'

import './category.styles.scss'

const CategoryPage = ({ collection }) => {
    return (
        <div className="collection-page">                    
            <h2 className="title">{collection.title}</h2>
            <div className="items">
                {
                    collection.items.map(item =>(
                        <ItemCollection key={item.id} item={item} />
                    ))
                }
            </div>           
        </div>
    )
}

const mapStateToProps = ({ shop: {collections}},  {match: { params }}) => ({
    collection: collections.find(collection => collection.routeName === params.categoryId)
})

export default connect(mapStateToProps)(CategoryPage)