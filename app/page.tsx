// ✅ app/page.tsx
export const revalidate = 60;
import HomeWrapper from "@/components/Home/HomeWrapper";


const HomePage = () => {
  return (
    <div>
      <HomeWrapper />
    </div>
  );
};

export default HomePage;
