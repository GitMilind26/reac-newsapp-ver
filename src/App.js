 import './App.css';
import React, { Component } from 'react'
import Navebar from './components/Navbar';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress });
  }
  render() {
    return (
      <Router>
        <Navebar />
         <LoadingBar
        color="#f11946"
        progress={this.state.progress}
         
      />
        <Routes>
          <Route path='/about' element={<div className='container my-3'><h2>About NewsHub</h2>
            <p>NewsHub is your go-to source for the latest news from around the world. We provide up-to-date information on a variety of topics including business, entertainment, health, science, sports, and technology. Our mission is to keep you informed with accurate and timely news articles curated from trusted sources. Whether you're looking for breaking news or in-depth analysis, NewsHub has you covered.</p>
          </div>} />
          
          <Route path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" category="general" />} />
          <Route path="/general" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" category="general" />} />
          <Route path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" category="business" />} />
          <Route path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" category="entertainment" />} />
          <Route path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" category="health" />} />
          <Route path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" category="science" />} />
          <Route path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey} key="sports" category="sports" />} />
          <Route path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" category="technology" />} />
        </Routes>

      </Router>
    )
  }
}
