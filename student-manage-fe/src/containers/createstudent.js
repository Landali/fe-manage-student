import React, { Component } from 'react'

class createStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            studentList: []
        }

    }

    render() {

        return (
            <div >
                Create Student
            </div >
        )
    }
}

export default createStudent