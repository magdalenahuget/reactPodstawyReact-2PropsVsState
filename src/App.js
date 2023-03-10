import React, { Component } from 'react';

class ToDoList extends Component {
    state = {
        tasks: this.props.tasks,
        draft: ''
    }

    updateDraft = (event) => {
        this.setState({ draft: event.target.value })
    }

    addToDo = () => {
        const { tasks, draft } = this.state;
        const list = tasks;
        list.push(draft);
        this.setState({ tasks: list, draft: '' })
    }

    render() {
        const { title } = this.props;
        const { tasks } = this.state;
        return (
            <div>
                <h1>{this.props.title}</h1>
                {this.state.tasks.map(task => <div><p>{task}</p></div>)}
                <input type='text' onChange={this.updateDraft} value={this.state.draft} />
                <button onClick={this.addToDo}>Add</button>
            </div>
        )
    }
}

class App extends Component {
    myTasks = [
        'Record a ReactJS video',
        'Go for a walk'
    ]

    render() {
        return (
            <div>
                <ToDoList title="My stuff" tasks={this.myTasks} />
            </div>
        )
    }
}

export default App;
