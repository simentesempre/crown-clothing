import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import './shoppage.styles.scss'

import CategoryPage from '../category/category.component'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import withSpinner from '../../components/with-spinner/with-spinner.component'
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.actions'

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview)
const CategoryPageWithSpinner = withSpinner(CategoryPage)

class ShopPage extends React.Component  {
    constructor(props){
        super(props)
        this.state = {
            loading: false
        }
    }
    unsubscribeFromSnapshot = null
    componentDidMount() {
        const { updateCollections } = this.props
        this.setState({loading: true})
        const collectionRef = firestore.collection('collections')
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
            this.setState({loading: false})
        }) 
    }   
    render(){
        const { match } = this.props
        const { loading } = this.state
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={props=> (<CollectionsOverviewWithSpinner isLoading={loading} {...props} />)} />
                <Route path={`${match.path}/:categoryId`} render={props=> (<CategoryPageWithSpinner isLoading={loading} {...props} />)} />
            </div>
            
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collections => dispatch(updateCollections(collections))
})

export default connect(null, mapDispatchToProps)(ShopPage)