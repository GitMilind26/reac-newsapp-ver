const express = require('express')
const fetch = require('node-fetch')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())

app.get('/news', async (req, res) => {
  try {
    const { category = 'general', page = 1, pageSize = 9, country = 'us' } = req.query
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.NEWS_API_KEY}&page=${page}&pageSize=${pageSize}`

    const response = await fetch(url)
    const data = await response.json()

    res.json(data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ status: 'error', message: 'Failed to fetch news' })
  }
})

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`))
