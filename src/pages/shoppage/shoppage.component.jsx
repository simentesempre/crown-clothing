import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import './shoppage.styles.scss'

import CategoryPage from '../category/category.component'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import withSpinner from '../../components/with-spinner/with-spinner.component'

import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions'

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview)
const CategoryPageWithSpinner = withSpinner(CategoryPage)

class ShopPage extends React.Component  {
    
    componentDidMount() {
        const { fetchCollectionStartAsync } = this.props
        fetchCollectionStartAsync()
    }   
    render(){
        const { match, isFetching } = this.props
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={props=> (<CollectionsOverviewWithSpinner isLoading={isFetching} {...props} />)} />
                <Route path={`${match.path}/:categoryId`} render={props=> (<CategoryPageWithSpinner isLoading={isFetching} {...props} />)} />
            </div>
            
        )
    }
}

const mapStateToProps = ({isFetching}) => ({
    isFetching
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)