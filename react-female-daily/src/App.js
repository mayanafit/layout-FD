import React from 'react';
import './scss/style.scss';
import { Provider } from 'react-redux';
import store from './store';
import { Navbar, AdsFirst, EditorChoices, SkinType, Articles, Review, PopularGroup, Videos, Trending, Brand, Footer } from './sections';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <AdsFirst />
        <EditorChoices />
        <SkinType />
        <div className="container" style={{marginTop: '4em'}}>
          <div className="ads ads_second"><p>Billboard 970x250</p></div>
        </div>
        <Articles />
        <Review />
        <PopularGroup />
        <Videos />
        <Trending />
        <Brand />
        <Footer />
        <div className="container">
          <div className="ads ads_fourth"><p>Bottom Frame 970x50,468x60,320x50</p></div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
