import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Slider from 'react-slick';

//import { searchShows } from '../../actions/index';
//var Slider = require('react-slick');
//import MultipleItems from 'react-slick';


class Home extends Component {
  componentWillMount() {
    this.props.fetchTrendingShows();
    this.props.fetchPopularShows();

    console.log('TENDER SHOWS IN FETCH FUNCTION',this.props.trendingShows);
    console.log('POPULAR SHOWS IN FETCH FUNCTION',this.props.popularShows);

  }
  renderTrendingShows() {
    let showProps = this.props.trendingShows;
    let shows = null;
    let showItems = (<span>No shows were found!</span>);
    console.log('sadkjnasd',this.props.trendingShows);
    if(showProps.length > 0) {
        shows = showProps.map(show => {
            return (
                <div id={show.id}>
                    <img src={show.image.medium}></img>
                </div>
            )
        });
    }
    return shows;
  }

  renderPopularShows() {
      console.log('POPULAR SHOWS',this.props.popularShows.data.results);
    let showProps = this.props.popularShows.results;
    let shows = null;
    let showItems = (<span>No shows were found!</span>);
    console.log('123890213',this.props.popularShows.data.results);
    if(showProps.length > 0) {
        shows = showProps.map(show => {
            return (
                <div>HELLO</div>
            )
        });
    }
    return shows;
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };

    return (
        <div>
            <div>
            {!this.props.trendingShows ? (
                <div>LOADING TRENDING SHOWS</div>
        ) : (
            <Slider {...settings}>
                {this.renderTrendingShows()}
            </Slider> )}
            </div>

            <div>
                {!this.props.PopularShows ? (
                    <div>LOADING POPULAR SHOWS</div>
            ) : (
                <Slider {...settings}>
                    {this.renderPopularShows()}
                </Slider> )}
            </div>

      </div>

    )
  }
}

function mapStateToProps(state) {
    return {
        trendingShows: state.show.trendingShows,
        popularShows: state.show.popularShows
    }
}

export default connect(mapStateToProps, actions)(Home);
