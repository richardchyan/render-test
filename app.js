// const express = require('express')
import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
   console.log(`server is listening on port ${PORT}`)
})

