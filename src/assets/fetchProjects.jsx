import { createClient } from 'contentful'
import { useEffect, useState } from 'react'

const client = createClient({
  space: 'a8w30sjcbstu',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY

})

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' })
      console.log(response)
      const projects = response.items.map((item) => {
        const { title, url, images, github } = item.fields

        const id = item.sys.id
        const img = images?.fields?.file?.url
        return { title, url, id, img, github }
      })
      setProjects(projects)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return { loading, projects }
}