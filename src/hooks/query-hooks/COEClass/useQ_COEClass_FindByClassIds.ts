import baseAxios from '@/api/baseAxios';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

const ENDPOINT = "/COEClass/FindByClassIds"
export default function useQ_COEClass_FindByClassIds({
  params = "",
  options
}: {
  params?: string,
  options?: Partial<UseQueryOptions<ICOEClass[], Error>>
} = {}) {
  const query = useQuery<ICOEClass[]>({
    queryKey: [ENDPOINT + params],
    queryFn: async () => {
      const response = await baseAxios.get(ENDPOINT + params);
      return response.data.data || [];
    },
    ...options
  });
  return query
}
