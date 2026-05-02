import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function useFrameworks() {
  return useQuery({
    queryKey: ['frameworks'],
    queryFn: async () => {
      const res = await axios.get(
        'https://3bf9-104-156-151-35.ngrok-free.app/frameworks',
      )
      return res.data.data
    },
    staleTime: 1000 * 60 * 5, // 5 minutes cache
  })
} // update domain

export default useFrameworks
