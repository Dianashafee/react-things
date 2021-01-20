  
import React from 'react';
import './App.css';

function Header(props){
    return(
        <header className="App-header">
            <h1>Movies App</h1>
            <h3>Our List Of Movies is: {props.defaultSnack}</h3>
        </header>
    );
}


function Footer(props){
    return(
        <footer className={props.cls}>
            <small>{props.text}</small>
        </footer>
    )
}


function Movie(props){
    return (
        <li>
            <h4>Name: {props.movie.name}</h4>
            <h4>Type: {props.movie.type}</h4>
        </li>
    )
}


function MovieList(props){
    // let arrayOfThings = [<li>hi</li>, <li>hi</li>, <li>hi</li>];
    return(
        <main className="main">
            <h2>Movies List</h2>
            <h3>Number of Movies: {props.movieList.length}</h3>
            <ul>
                { props.movieList.map( movie => <Movie movie={movie} />) }
            </ul>
            {/* <ul>
                {arrayOfThings}
            </ul> */}
        </main>
    )
}


class MovieForm extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            name:""
        };

        this.handleChange = this.handleChange.bind(this); // Configuration
        this.handleSubmit = this.handleSubmit.bind(this); // Configuration
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label> {this.props.title}
                    <input type="text" onChange={this.handleChange}></input>
                </label>

                <input type="submit" value="Add" />
            </form>
        )
    }

    handleChange(event){
        console.log("Change Happened!!!");
        console.log(event.target.value);
        this.setState({name: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.name);
        this.props.onSnackCreate(this.state);
    }
}




class App extends React.Component{

    constructor(){
        super();
        this.state = {
            movie: [
                {
                    id: 1,
                    name: "Titanic",
                    type: "Romance"
                },
                {
                    id: 2,
                    name: "Papillion",
                    type: "War"
                }
              
            ],
            dMovie: "Love Rose",
            counter: 0
        };
        this.handleCreateSnack = this.handleCreateSnack.bind(this);
    }


    handleCreateSnack(movie){
        alert(movie.name);
        let allMovies = this.state.movie;
        allMovies.push({id: 4, name: movie.name, type: "Movie"});
        this.setState({movie: allMovies});
    }

    render(){
        return(
            <div className="App">
                <Header defaultSnack={this.state.dMovie}/>
                <h2>{this.state.counter}</h2>
                <button onClick={() => this.setState({counter: this.state.counter+1}) }>Increment</button>

                <MovieList movieList={this.state.movie}/>
                <h1>Would you like to add a new Movie? </h1>
                <MovieForm title="Add Movie Form"  onSnackCreate= { (movie) => this.handleCreateSnack(movie) } />
                <Footer cls="footer" text="@copyright Diana"/>
            </div>
        );
    }
}

export default App;