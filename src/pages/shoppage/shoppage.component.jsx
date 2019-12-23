import React from 'react'
import { Route } from 'react-router-dom'

import './shoppage.styles.scss'

import CategoryPage from '../category/category.component'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'

class ShopPage extends React.Component  {
    unsubscribeFromSnapshot = null
    componentDidMount() {
        const collectionRef = firestore.collection('collections')
        collectionRef.onSnapshot(async snapshot => {
            const convertedCollections = convertCollectionSnapshotToMap(snapshot)
        }) 
    }   
    render(){
        const { match } = this.props
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
            </div>
            
        )
    }
}

export default ShopPage