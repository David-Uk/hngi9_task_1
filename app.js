const { urlencoded } = require('express');
const express = require('express');
const cors = require('cors')

const app = express();

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Up and running')
})

app.get('/api/v1', (req, res) => {
    try {
        return res.status(200).json({
            slackUsername: "DavidUk",
            backend: true,
            age: 31,
            bio: "Fullstack engineer with experience in Node.js, Python"
        })
    }
    catch (err) {
        return res.status(401).json({ message: err.message })
    }
})

app.post('/api/v1/operation', (req, res) => {
    try {
        const { operation_type, x, y } = req.body
        if (!req.body) res.status(402).json({ message: 'Empty request' })
        if (!operation_type || !x || !y) res.status(402).json({ message: 'User field cannot be empty' });
        if (Number.isInteger(x) && Number.isInteger(y)) {
            if (operation_type === 'addition') {
                res.status(201).json({
                    slackUsername: 'DavidUk',
                    result: x + y,
                    operation_type
                })
            }
            else if (operation_type === 'subtraction') {
                res.status(201).json({
                    slackUsername: 'DavidUk',
                    result: x - y,
                    operation_type
                })
            }
            else if (operation_type === 'multiplication') {
                res.status(201).json({
                    slackUsername: 'DavidUk',
                    result: x * y,
                    operation_type
                })
            }
            else {
                res.status(403).json({
                    message: 'Invalid operation'
                })
            }
        }
        else {
            res.status(403).json({
                message: 'Invalid operation'
            })
        }
        res.status(201).json({
            message: Number.isInteger(x)
        })
    }
    catch (err) {
        return res.status(401).json({ message: err.message })
    }
})

app.listen(PORT, () => {
    console.log(`Running at PORT ${PORT}`)
})