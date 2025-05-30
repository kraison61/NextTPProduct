import SoilCalculator from "./SoiCalculator";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ถมดิน 1 ไร่ สูง 1 เมตร ใช้ดินกี่คิว? พร้อมคำนวณราคา วิธีถมดินไม่ให้ทรุด ปี 2568",
  description:
    "ถมดิน 1 ไร่ สูง 1 เมตร ต้องใช้ดินกี่คิว? คำนวณปริมาณดิน ราคา ค่าแรง วิธีถมดินไม่ให้บ้านทรุด พร้อมเทคนิคเลือกผู้รับเหมามืออาชีพ ปี 2568",
};

export default function SoilPage() {
  return (
    <section className="py-[20vh]">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            ถมดิน 1 ไร่ สูง 1 เมตร ใช้ดินกี่คิว? คำนวณง่าย ๆ
            พร้อมเทคนิคถมดินไม่ให้ทรุด
          </h1>
          <p className="text-gray-700">
            <p>
              การ <strong>ถมดิน</strong> ให้เหมาะสมกับพื้นที่ โดยเฉพาะสำหรับการ{" "}
              <strong>ถมดินสร้างบ้าน</strong> หรือ{" "}
              <strong>ถมที่ปลูกบ้าน</strong> ต้องใช้ความรู้ ความชำนาญ
              และการวางแผนที่แม่นยำ หากคุณกำลังสงสัยว่า “
              <em>ถมดิน 1 ไร่ สูง 1 เมตร ใช้ดินกี่คิว</em>?” บทความนี้มีคำตอบ!
            </p>

            <h2>1. ถมดิน 1 ไร่ สูง 1 เมตร ใช้ดินกี่คิว?</h2>
            <p>
              พื้นฐานการคำนวณปริมาณดินที่ต้องใช้ สามารถใช้สูตรคณิตศาสตร์ง่าย ๆ:
            </p>
            <ul>
              <li>พื้นที่ 1 ไร่ = 1,600 ตารางเมตร</li>
              <li>ความสูงที่ต้องการถม = 1 เมตร</li>
              <li>
                ปริมาณดินที่ต้องใช้ = 1,600 x 1 ={" "}
                <strong>1,600 ลูกบาศก์เมตร หรือ 1,600 คิว</strong>
              </li>
            </ul>
            <p>
              ดังนั้นคำตอบคือ <strong>ต้องใช้ดินประมาณ 1,600 คิว</strong> แต่...
            </p>
            <p>
              <em>
                ขึ้นอยู่กับลักษณะดินเดิม, การบดอัด และระดับความแน่นที่ต้องการ
                อาจเผื่อไว้ 5-10%
              </em>
            </p>
          </p>
        </div>

        <SoilCalculator />

        <article className="py-[5vh]">
          <h2>1. ถมดิน 1 ไร่ สูง 1 เมตร ใช้ดินกี่คิว?</h2>
          <p>
            พื้นฐานการคำนวณปริมาณดินที่ต้องใช้ สามารถใช้สูตรคณิตศาสตร์ง่าย ๆ:
          </p>
          <ul>
            <li>พื้นที่ 1 ไร่ = 1,600 ตารางเมตร</li>
            <li>ความสูงที่ต้องการถม = 1 เมตร</li>
            <li>
              ปริมาณดินที่ต้องใช้ = 1,600 x 1 ={" "}
              <strong>1,600 ลูกบาศก์เมตร หรือ 1,600 คิว</strong>
            </li>
          </ul>
          <p>
            ดังนั้นคำตอบคือ <strong>ต้องใช้ดินประมาณ 1,600 คิว</strong> แต่...
          </p>
          <p>
            <em>
              ขึ้นอยู่กับลักษณะดินเดิม, การบดอัด และระดับความแน่นที่ต้องการ
              อาจเผื่อไว้ 5-10%
            </em>
          </p>

          <h2>2. ราคา ถมดิน 1 ไร่ สูง 1 เมตร เท่าไหร่?</h2>
          <p>
            ราคา <strong>ถมดิน</strong> จะขึ้นอยู่กับหลายปัจจัย เช่น:
          </p>
          <ul>
            <li>ประเภทของดิน (ดินลูกรัง, ดินดำ, ดินถมทั่วไป)</li>
            <li>ระยะทางขนส่งดิน</li>
            <li>ค่ารถแมคโคร และแรงงาน</li>
            <li>
              ราคาคิวละในพื้นที่ เช่น <strong>ราคา ดิน ถม คิว ละ 2568</strong>{" "}
              เฉลี่ยอยู่ที่ <strong>150-250 บาท/คิว</strong>
            </li>
          </ul>

          <p>
            <strong>สรุปราคาคร่าว ๆ:</strong>
          </p>
          <ul>
            <li>
              ถมดิน 1,600 คิว x 200 บาท/คิว ={" "}
              <strong>ประมาณ 320,000 บาท</strong>
            </li>
            <li>+ ค่าแรง/เครื่องจักรเฉลี่ย = 50,000 - 100,000 บาท</li>
            <li>
              <strong>รวมราคาทั้งหมด: ประมาณ 350,000 - 420,000 บาท</strong>
            </li>
          </ul>

          <h2>3. ถมดิน ต้องขออนุญาตไหม?</h2>
          <p>
            ตามกฎหมาย <strong>พระราชบัญญัติควบคุมอาคาร พ.ศ. 2522</strong> การ{" "}
            <strong>ถมที่ดิน</strong> ที่สูงเกิน 0.5 เมตร ต้อง{" "}
            <strong>ยื่นขออนุญาตจากเขต หรือ อบต.</strong> โดยเฉพาะหาก
          </p>
          <ul>
            <li>ถมดินติดเขตเพื่อนบ้าน</li>
            <li>ถมดินใกล้คลอง หรือแหล่งน้ำ</li>
            <li>ถมที่สร้างบ้านในอนาคต</li>
          </ul>

          <h2>4. เทคนิคถมดินสร้างบ้านไม่ให้ทรุด</h2>
          <p>
            การ <strong>ถมดินสร้างบ้านไม่ให้ทรุด</strong> ต้องใส่ใจใน 3
            ปัจจัยหลัก:
          </p>
          <ol>
            <li>
              <strong>บดอัดเป็นชั้น</strong> ทุก 30-50 ซม. แล้วบดอัดแน่น
            </li>
            <li>
              <strong>เลือกดินที่เหมาะสม</strong> เช่น ดินลูกรัง
              หรือดินเหนียวผสมลูกรัง
            </li>
            <li>
              <strong>พักหน้าดิน</strong> ไว้อย่างน้อย 3-6 เดือน (หรือใช้ระบบ
              compact แรงสั่น)
            </li>
          </ol>

          <h2>5. คำถามที่พบบ่อย (FAQ)</h2>
          <h3>ถมดินคันละเท่าไหร่?</h3>
          <p>
            ขึ้นอยู่กับปริมาณดินในรถ (คันละประมาณ 5-10 คิว) ราคาประมาณ 1,500 -
            2,500 บาท/คัน
          </p>

          <h3>ถมดิน 1 งาน ใช้ดินกี่คิว?</h3>
          <p>1 งาน = 400 ตร.ม. ถ้าถมสูง 1 เมตร ใช้ดินประมาณ 400 คิว</p>

          <h3>ถมดินสูงกว่าข้างบ้านผิดกฎหมายไหม?</h3>
          <p>
            สามารถทำได้ แต่ต้องมีระบบกันดินไหล เช่น กำแพงกันดิน หรือท่อระบายน้ำ
            และต้องไม่ละเมิดสิทธิ์เพื่อนบ้าน
          </p>

          <h3>ควรถมดินก่อนหรือวางแบบบ้านก่อน?</h3>
          <p>
            แนะนำให้ <strong>วางแบบบ้านก่อน</strong>{" "}
            เพื่อกำหนดระดับความสูงที่เหมาะสมและการถมไม่เกินจำเป็น
          </p>

          <h2>6. เคล็ดลับการเลือกผู้รับเหมาถมดิน</h2>
          <ul>
            <li>มีผลงาน และรีวิวจากลูกค้าเก่า</li>
            <li>ออกใบเสนอราคาชัดเจน พร้อมรายละเอียด</li>
            <li>มีเครื่องจักรครบ เช่น แบคโฮ, รถดั๊มพ์, รถบด</li>
            <li>มีประกันความเสียหายหรือรับประกันงาน</li>
          </ul>

          <h2>7. ทำไมควรจ้างทีมรับเหมาถมดินมืออาชีพ?</h2>
          <p>เพราะช่วยให้คุณ:</p>
          <ul>
            <li>ประหยัดเวลาและงบประมาณ</li>
            <li>ไม่ต้องเสี่ยงงานพัง งานทรุด</li>
            <li>ได้คำแนะนำด้านวิศวกรรมจากทีมผู้เชี่ยวชาญ</li>
            <li>สามารถวางแผนต่อยอดในการสร้างบ้านได้ทันที</li>
          </ul>

          <h2>8. บริการถมดินใกล้ฉัน - ให้เราช่วยดูแลพื้นที่ของคุณ</h2>
          <p>
            หากคุณกำลังมองหา <strong>ทีมรับเหมาถมดินราคาถูก</strong>,
            วางใจได้ในบริการมืออาชีพของเรา
          </p>
          <p>
            📍ให้บริการ <strong>ถมดินทั่วประเทศ</strong>{" "}
            พร้อมทีมวิศวกรตรวจสอบงาน
          </p>
          <p>
            <strong>ติดต่อเราเพื่อประเมินหน้างานฟรี!</strong>
          </p>

          <h2>📞 ติดต่อสอบถามบริการถมดิน</h2>
          <p>
            <strong>โทร:</strong> 062-718-8847
          </p>
          <Link href="https://www.facebook.com/TheeraphongRetainingwall">
            <p>
              <strong>Facebook:</strong> ธีรพงษ์เซอร์วิส
            </p>
          </Link>
          <p>
            <strong>Line:</strong>
            <Link href="https://line.me/ti/p/h9SHumuTEB">
                0627188847
            </Link>
          </p>

          <footer>
            <p>
              บทความโดย ทีมงานผู้เชี่ยวชาญด้านถมดินกว่า 20 ปี | ปรับปรุงล่าสุด
              ปี 2568
            </p>
          </footer>
        </article>
      </div>
    </section>
  );
}
