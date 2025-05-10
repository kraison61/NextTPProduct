
//app/components/Home.tsx
import Hero from "./Hero/Hero";
import WhyChoose from "./WhyChoose/WhyChoose";
import Review from "./Reviews/Review";
import News from "./News/News";
import Newsletter from "./Newsletter/Newsletter";
import Slide from "./Slide/Slide";
import fetchData from "@/data/data";

const Home = async () => {
const  {dataService,dataImage,dataBlog} =  await fetchData();
  return (
    <div className="overflow-hidden ">
      <Hero />
      <Slide dataSlide={dataService} heading="รับเหมาก่อสร้างครบวงจร | ถมดิน ก่อกำแพงกันดิน เทพื้นคอนกรีต | Theeraphong Construction" title={`<ul>
  <li><h2><strong>ก่อสร้างกำแพงกันดิน (Retaining Wall)</strong></h2><h3>ป้องกันดินไหล ลดความเสี่ยงจากการพังทลาย เพิ่มความแข็งแรงให้พื้นที่ก่อสร้าง</h3></li>
  <li><h2><strong>งานถมดิน ปรับพื้นที่</strong></h2><h3>เตรียมพื้นฐานสำหรับงานก่อสร้างทุกประเภท ถมดินเพื่อความมั่นคงและระบายน้ำได้ดี</h3></li>
  <li><h2><strong>เทพื้นคอนกรีต</strong></h2><h3>พื้นโรงงาน พื้นโกดัง พื้นลานจอดรถ พร้อมเหล็กเสริมและระบบ Drainage</h3></li>
  <li><h2><strong>ก่อสร้างรั้วคอนกรีต, รั้วลวดหนาม, รั้วตาข่าย</strong></h2><h3>งานรั้วทุกรูปแบบ เพื่อความปลอดภัยและความเป็นส่วนตัว</h3></li>
  <li><h2><strong>งานโครงสร้างคอนกรีตเสริมเหล็ก</strong></h2><h3>เสา, คาน, พื้น ฐานราก งานคุณภาพได้มาตรฐานวิศวกรรม</h3></li>
  <li><h2><strong>รับออกแบบและให้คำปรึกษาด้านงานก่อสร้าง</strong></h2><h3>ประเมินหน้างาน ฟรี ไม่มีค่าใช้จ่ายเบื้องต้น</h3></li>
</ul>
`} pageType="service" targetId="servicesId" />
      <Slide dataSlide={dataImage} heading="ภาพตัวอย่างงานจริง" title="รวมภาพผลงานบางส่วนจากโปรเจกต์จริง ที่เรามีโอกาสดูแลและส่งมอบให้กับลูกค้า ด้วยความตั้งใจในทุกรายละเอียด เพื่อให้ทุกชิ้นงานออกมาตรงตามความต้องการและมาตรฐานที่วางไว้" pageType="image" targetId="imagesId" />
      <Slide dataSlide={dataBlog} heading="อัปเดตข่าวสารและบทความล่าสุด" title="แบ่งปันข่าวสารและบทความดี ๆ เกี่ยวกับงานของเรา ทั้งเรื่องน่ารู้ เทคนิคการทำงาน และกิจกรรมต่าง ๆ ที่เราอยากส่งต่อถึงคุณ" pageType="blog" targetId="blogsId" />
      <WhyChoose />
      <Review />
    </div>
  );
};

export default Home;
