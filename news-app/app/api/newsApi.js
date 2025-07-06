async function getNews() {

  try {

    const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=fdc223105c634c1696ebb0cfb3883c02');

    if (!( response).ok) {
        throw new Error('Http rror')
      }

      const data = await response.json()
      console.log(data)

  } catch (error) {
    console.error('Something whent wrong')
  }
}