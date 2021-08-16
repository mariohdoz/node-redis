import fetch from "node-fetch"
class SearchService {
  async fetchData(username: string) {
    const url = `https://api.github.com/users/${username}`
    const response = await fetch(url)
    const data = await response.json()
    return data
  }
}

export default new SearchService()