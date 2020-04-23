import React, {useState, useEffect} from  'react';
import {useSelector, useDispatch} from 'react-redux';
import {  makeStyles } from '@material-ui/core/styles';
import {Helmet} from "react-helmet";

import { useHistory } from 'react-router';
import TimeAgo from 'react-timeago';

import PropTypes from 'prop-types';

// import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import parse from 'html-react-parser';
import img from '../images/bg-1.jpg'
import blog from '../images/card-top.jpg'
// import { Markup } from 'interweave';
import Footer from '../components/footer'

import {fetchAllPostsFromGhostAPIRequest} from '../actions/all_posts';
import { width } from '@material-ui/system';
import Hidden from '@material-ui/core/Hidden';


import CardPost from './card_post';
import CardFeaturePost from './card_feature_post';
import Subscribe from './subscribe'
import Header from './header'
const useStyles = makeStyles(theme => ({
  root: {
    background: '#f9f9f9',
    height: 'auto',
    margin: '5em',
    width:'auto'
  },
  imge:{
    height:'33em',
    width: '100%',
    background: '#0a5bff',
    zIndex: '100',
  },

}));

export default function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const allPosts = useSelector(state => state.allPosts.allPosts)
  // console.log(allPosts);

  useEffect(() => {
    handleLoad()
  }, [ ])




  const handleLoad = () => {
    dispatch(fetchAllPostsFromGhostAPIRequest())
  }

 const handleExcerptClick = (v) => {

   history.push(`/${v.slug}`, {postData: v})
 }


 const handlePostTypeFeature = (post) => {
  if(post.featured === true){
   return  <CardFeaturePost v={post}/>
  }
 }

 const handlePostType = (post) => {
   console.log(post.featured);
  if(post.featured === false){
   return  <CardPost v={post}/>
  }
 }

  if(allPosts.posts){
    return(
      <div className="w-full  h-screen   font-sans leading-normal tracking-normal ">
        <Header />
          <div className="container mx-auto bg-gray-100 rounded-lg  ">
            <div  className="  w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t   ">
                <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-56  "></div>
                {allPosts.posts.map((v,i) =>
                  <div key={i} >
                    {handlePostTypeFeature(v)}
                  </div>
                )}
                {allPosts.posts.map((v,i) =>
                  <div key={i} className="mt-12">
                    {handlePostType(v)}
                  </div>
                )}
              <Subscribe />
            </div>
          </div>
        <Footer />
      </div>
      )
  } else {
    return (
    <div className="flex justify-center m-12"> <CircularProgress /> </div>
    );
  }

}
Paper.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};
