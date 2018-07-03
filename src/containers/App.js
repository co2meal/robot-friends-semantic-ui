import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { setSearchField, requestRobots } from '../actions';
import './App.css';
import { Header, Grid } from 'semantic-ui-react';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

// dispatch: what triggers action
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        /* in case there's no list or it takes time to get list */
        return isPending ?
        <Header as='h1'>Loading...</Header> :
        (<div className="margin-total centered">
        <Grid columns={1}>
            <Grid.Row>
                <Header as='h1' className='title'>RoboFriends</Header>
            </Grid.Row>
            <Grid.Row>
                <SearchBox searchChange={onSearchChange} className='margin-bottom--medium'/>
            </Grid.Row>
            <Grid.Row>
                <Scroll>
                    <CardList robots = {filteredRobots} />
                </Scroll>
            </Grid.Row>
        </Grid>
        </div>);
    }
}

// higher order function : function returned by connect() will run with argument 'App'
export default connect(mapStateToProps, mapDispatchToProps)(App);