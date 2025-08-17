import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function useFrameworks() {
  return useQuery({
    queryKey: ['frameworks'],
    queryFn: async () => {
      const res = await axios.get(
        'https://web-yoones-api.onrender.com/frameworks',
      )
      return res.data.data
    },
    staleTime: 1000 * 60 * 5, // 5 minutes cache
  })
}

export default useFrameworks
