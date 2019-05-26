import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {id: 'ddd', age: 17, name: 'omer'},
            {id: 'eee',age: 18, name: 'tomer'},
            {id: 'fff',age: 19, name: 'mer'}
            ],
        showPersons: false
    };

    changeAgeHandler = (num) => {
        this.setState({
            persons: [{
                age: (this.state.persons[0].age+num),
                name: this.state.persons[0].name
            },
                {age: 18, name: 'tomer'},
                {age: 19, name: 'mer'}
                ]
        })
    };

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const persons = [...this.state.persons];
        persons[personIndex].name = event.target.value;
        this.setState({ persons: persons })
    };

    deletePersonHandler = (personIndex) => {
       const persons = [...this.state.persons];
       persons.splice(personIndex, 1);
       this.setState({persons: persons})
    };

    togglePersonsHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons
        })
    };

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;
        const classes =[];
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                        name = {person.name}
                        age = {person.age}
                        click = {() => this.deletePersonHandler(index)}
                        input = {(event) => this.nameChangeHandler(event, person.id)}
                        key = {person.id}/>
                    })}
                </div>
            );
            style.backgroundColor = 'red';
        }

        if (this.state.persons.length < 3) {
            classes.push('red');
        }
        if (this.state.persons.length < 2) {
            classes.push('bold');
        }
        return (
            <div className='App'>
                <p className={classes.join(' ')}> Nice Header</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle</button>
                { persons }
            </div>
        );
    }
}

export default App;
