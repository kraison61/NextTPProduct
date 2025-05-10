"use client";

import { useState } from "react";
import { Metadata } from "next";




function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function SoilCalculator() {
  const [rai, setRai] = useState("");
  const [ngan, setNgan] = useState("");
  const [wah, setWah] = useState("");
  const [height, setHeight] = useState("");
  const [resultHTML, setResultHTML] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const r = parseFloat(rai) || 0;
    const n = parseFloat(ngan) || 0;
    const w = parseFloat(wah) || 0;
    const h = parseFloat(height) || 0;

    const area = r * 1600 + n * 400 + w * 4; // ตารางเมตร
    const vol = area * h;                   // ปริมาตรจริง
    const total = vol + vol * 0.1;         // เผื่อยุบตัว 10%

    const html = `
      <h3 class="text-xl font-bold text-gray-800 mb-2">ผลการคำนวณ</h3>
      <p>ที่ดินทั้งหมด: <strong>${formatNumber(area)}</strong> ตารางเมตร</p>
      <p>ถมสูง: <strong>${h}</strong> เมตร</p>
      <p>เผื่อยุบตัว: <strong>10%</strong></p>
      <p>รวมดินถมทั้งหมด: <strong>${formatNumber(total)}</strong> คิว</p>
    `;

    setResultHTML(html);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold">ไร่</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="กี่ไร่"
            value={rai}
            onChange={(e) => setRai(e.target.value)}
          />
        </div>
        <div>
          <label className="font-semibold">งาน</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="กี่งาน"
            value={ngan}
            onChange={(e) => setNgan(e.target.value)}
          />
        </div>
        <div>
          <label className="font-semibold">ตารางวา</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="กี่ตารางวา"
            value={wah}
            onChange={(e) => setWah(e.target.value)}
          />
        </div>
        <div>
          <label className="font-semibold">สูง (เมตร)</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="ความสูงดินที่ต้องถม"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
      >
        คำนวณ
      </button>

      {resultHTML && (
        <div
          className="mt-6 bg-green-100 border border-green-300 text-green-800 p-4 rounded-lg"
          dangerouslySetInnerHTML={{ __html: resultHTML }}
        />
      )}
    </form>
  );
}
