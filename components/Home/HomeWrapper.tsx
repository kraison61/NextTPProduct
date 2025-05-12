// components/Home/HomeWrapper.tsx
import Home from './Home';
import fetchData from '@/data/data';

export default async function HomeWrapper() {
  let data;
  try {
    data = await fetchData();
  } catch (error) {
    console.error("Error fetching data:", error);
    data = {
      dataService: [],
      dataImage: [],
      dataBlog: []
    };
  }

  return <Home data={data} />;
}
