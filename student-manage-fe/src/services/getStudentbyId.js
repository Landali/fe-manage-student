// Endpoint: https://dvtbccva71.execute-api.us-east-1.amazonaws.com/dev/get-student/{ID}

import axios from 'axios'

const getStudent = ({
    firstname,
    lastname,
    source
}) => axios
    .get(`https://dvtbccva71.execute-api.us-east-1.amazonaws.com/dev/get-student/${ID}`, {
        cancelToken: source.token
    }).then((student) => {
        console.debug('Student retrieved successfully', student)
        return Promise.resolve(student)
    })
    .catch((error) => {
        console.error(`An error occured while retrieving student: ${firstname} ${lastname}`, error)
        return Promise.reject({})
    })

    export default getStudent