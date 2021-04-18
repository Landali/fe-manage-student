import React, { Component } from 'react'

class studentDiploma extends Component {
    constructor(props) {
        super(props)
        this.state = {
            student: {
            }
        }

    }

    render() {
        const date = new Date()
        return (
            < div className= 'container-fluid' style={{ wordWrap: 'break-word', wordBreak: 'break-all' }}>
                <div style={{ margin: '0 auto', width: '800px', height: '100%', padding: '20px', textAlign: 'center', border: '5px solid #00DED6', outline: '5px solid #7979F7'}}>
                    <div style={{ width: '750px', height: '100%', padding: '20px', textAlign: 'center', border: '5px solid #00DED6 ' }}>
                        <span style={{ fontSize: '50px', fontWeight: 'bold' }}>Certificate of Completion</span>
                        <br></br>
                        <span style={{ fontSize: '25px' }}><i>This is to certify that</i></span>
                        <br></br>
                        <span style={{ fontSize: '30px' }}><b>Allan Danilo Paz D'Elia</b></span><br /><br />
                        <span style={{ fontSize: '25px' }}><i>has completed the course</i></span> <br />
                        <br />
                        <span style={{ fontSize: '30px' }}>Math</span> <br /><br />
                        <span style={{ fontSize: '20px' }}>with score of <b>100%</b></span>
                        <br /><br /><br /><br />
                        <span style={{ fontSize: '25px' }}><i>dated</i></span><br></br>
                        <span style={{ fontSize: '30px' }}>{`${date}`}</span>
                    </div>
                </div>
            </div >
        )
    }
}

export default studentDiploma