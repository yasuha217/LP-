import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const marketData = [
  { year: '2019', value: 19.4 },
  { year: '2020', value: 20.7 },
  { year: '2021', value: 21.8 },
  { year: '2022', value: 22.7 },
  { year: '2023', value: 24.8 },
];

const nicheData = [
  { name: 'Pop', profit: 20, competition: 100 },
  { name: 'Niche', profit: 80, competition: 20 },
];

export const MarketExplanation: React.FC = () => (
  <section className="py-20 bg-slate-50">
    <div className="container mx-auto px-4">
       <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-slate-800">
         物販は初心者も参入しやすい!?<br/>
         <span className="text-blue-600">拡大する物販市場</span>
       </h2>
       
       <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-lg">
          <div className="text-center mb-6">
            <span className="text-4xl font-black text-orange-500">10.4%</span>
            <span className="font-bold text-gray-600 ml-2">成長（前年比）</span>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={marketData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="year" />
                <YAxis unit="兆円" />
                <Tooltip />
                <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} name="市場規模(兆円)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">※経済産業省 電子商取引に関する市場調査より引用・作成</p>
       </div>
    </div>
  </section>
);

export const NicheStrategy: React.FC = () => (
    <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
                実は売れている！<br/>
                <span className="text-orange-400">ニッチな商品</span>が利益を生む理由
            </h2>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                
                <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 w-full max-w-md">
                    <h3 className="text-center font-bold mb-6 text-gray-400">人気商品（レッドオーシャン）</h3>
                    <div className="flex justify-between items-end h-40 px-4 pb-4 border-b border-gray-600 relative">
                         {/* Conceptual visualization with CSS heights */}
                         <div className="w-12 bg-red-500 h-[20%] mx-auto rounded-t relative group">
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs">利益低</span>
                         </div>
                         <div className="w-12 bg-gray-500 h-[90%] mx-auto rounded-t relative group">
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs">競合多</span>
                         </div>
                    </div>
                    <p className="text-center mt-4 text-sm">価格競争になりやすく、薄利多売で疲弊する...</p>
                </div>

                <div className="text-4xl text-orange-500 font-bold">VS</div>

                <div className="bg-gradient-to-br from-indigo-900 to-slate-800 p-8 rounded-2xl border-2 border-orange-500 w-full max-w-md shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                    <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">ACCESSの戦略</div>
                    <h3 className="text-center font-bold mb-6 text-white">ニッチ商品（ブルーオーシャン）</h3>
                    <div className="flex justify-between items-end h-40 px-4 pb-4 border-b border-gray-600 relative">
                         <div className="w-12 bg-orange-500 h-[80%] mx-auto rounded-t relative">
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-orange-300">利益高</span>
                         </div>
                         <div className="w-12 bg-blue-500 h-[30%] mx-auto rounded-t relative">
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-blue-300">競合少</span>
                         </div>
                    </div>
                    <p className="text-center mt-4 text-sm font-bold text-orange-200">ライバルが不在で、高利益率を確保できる！</p>
                </div>

            </div>
        </div>
    </section>
);