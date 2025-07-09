import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express())

const PORT = process.env.PORT || 3000
const API_KEY = process.env.API_KEY;

app.get('/api/news', async (req, res) => {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=se&apiKey=${API_KEY}`)
    if (!response.ok) {
      throw new Error(`Mama mia something went wrong ${response.status}`)
    }
    const data = await response.json()
    res.json(data.articles)    
  } catch (error) {
    console.error('Server error: ', error)
    res.status(500).json({error: 'Could not fetch news'})
    
  }
})

app.listen(PORT, ()=> { console.log(`Server running on ${PORT}`)})

export default app;