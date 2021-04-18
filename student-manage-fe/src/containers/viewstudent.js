import React, { Component } from 'react'

class studentList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            studentList: []
        }

    }

    render() {

        return (
            <div >
                View List of students
            </div >
        )
    }
}

export default studentList