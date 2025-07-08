import 'dotenv/config'

export async function getNews() {

  try {
    const apiKey = process.env.API_KEY
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
    const response = await fetch(url);

    if (!( response).ok) {
        throw new Error('Http rror')
      }

      const data = await response.json()
      data.articles
      console.log(data)

  } catch (error) {
    console.error('Something whent wrong')
    throw error;
  }
}

export default { getNews }