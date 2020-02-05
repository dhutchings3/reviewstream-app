import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import LandingPage from './components/LandingPage/LandingPage';
import UserSignUp from './components/UserSignUp/UserSignUp';
import UserSignIn from './components/UserSignIn/UserSignIn';
import ReviewList from './components/ReviewList/ReviewList';
import ReviewDetails from './components/ReviewDetails/ReviewDetails';
import AddReview from './components/AddReview/AddReview';
import EditReview from './components/EditReview/EditReview';
import UpdateReviewContext from './contexts/UpdateReviewContext';
import Header from './components/Header/Header';
import Backdrop from './components/Backdrop/Backdrop';
import PrivateRoute from './utils/PrivateRoute';
import './app.css'

class App extends React.Component {
  static contextType = UpdateReviewContext
    
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      reivews: [],
      singleReview: [],
      userId: 1,
      userData: [],
      headerOpen: false
    }
    this.headerToggleClickHandler = this.headerToggleClickHandler.bind(this)
  }
    
  headerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {headerOpen: !prevState.headerOpen}
    })
  }
    
      backdropClickHandler = () => {
        this.setState({ headerOpen: false })
      }
    
      setReviews = (data) => {
        this.setState({
          reviews: data
        })
      }
    
      setSingleReview = (data) => {
        let index
        this.state.reviews.forEach((item, i) => {
          if (item.id === data.id) {
            index = i
          }
        })
        let reviews = this.state.reviews
        reviews[index] = data
        this.setState({
          reviews: reviews,
          singleReview: data
        })
      }
    
      setUserData = (data) => {
        this.setState({
          userData: data
        })
      }
    
      setError = (error) => {
        this.setState({
          error: error
        })
      }
    
      deleteReview = (id) => {
        const updatedReviews = this.state.reviews.filter(j => {
          return j.id !== id
        })
        this.setState({
          reviews: updatedReviews
        })
      }
    
      render() {
    
        const contextValue = {
          reviews: this.state.reviews,
          deleteReview: this.deleteReview,
          setReviews: this.setReviews,
          singleReview: this.state.singleReview,
          setSingleReview: this.setSingleReview,
          setError: this.setError,
          userId: this.state.userId,
          userData: this.state.userData,
          setUserData: this.setUserData,
          testContext: this.testContext
        }
    
        let backdrop;
    
        if (this.state.headerOpen) {
          backdrop = <Backdrop click={this.backdropClickHandler}/>
        };
    
        return (
          <UpdateReviewContext.Provider value={contextValue}>
            <main className='App'>
              <Nav drawerClickHandler={this.drawerToggleClickHandler}/>
              <Header
                show={this.state.headerOpen}
                toggle={this.drawerToggleClickHandler}
              />
              {backdrop}
              <section className='content'>
                <Switch>
                  <>
                    <Route
                      exact path='/'
                      component={LandingPage}
                    />
                    <Route
                      path='/signup'
                      component={UserSignUp}
                    />
                    <Route
                      path='/signin'
                      component={UserSignIn}
                    />
                    <PrivateRoute
                      path='/reviewlist'
                      component={ReviewList}
                    />
                    <Route
                      path='/reviewdetails/:id'
                      component={ReviewDetails}
                    />
                    <PrivateRoute
                      path='/addreview'
                      component={AddReview}
                    />
                    <Route
                      path='/editreview/:id'
                      component={EditReview}
                    />
                  </>
                </Switch>
              </section>
            </main>
          </UpdateReviewContext.Provider>
        )
      }
    }
    
    export default App;
