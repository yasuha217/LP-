import React from 'react';
import { Button } from '../ui/Button';
import { CheckCircle, CalendarDays } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-900 text-white">
      {/* Abstract Background Elements (Simulating "Nano Banana" generated vibe) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="w-full md:w-3/5 space-y-8">
            <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-lg text-sm md:text-base font-semibold tracking-wider mb-2">
              自動運用 × 在庫リスクゼロ
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight drop-shadow-lg">
              <span className="text-blue-300">低コスト・低リスク</span>で始める<br/>
              新しい物販ビジネス
            </h1>

            <div className="space-y-4 text-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-orange-400 flex-shrink-0 w-6 h-6" />
                <span className="font-bold border-b border-orange-400/50 pb-1">1日平均1時間〜の作業で堅実な売上</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-orange-400 flex-shrink-0 w-6 h-6" />
                <span className="font-bold border-b border-orange-400/50 pb-1">無在庫なので在庫リスクほぼゼロ</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-orange-400 flex-shrink-0 w-6 h-6" />
                <span className="font-bold border-b border-orange-400/50 pb-1">98%が未経験からスタート</span>
              </div>
            </div>

            <div className="pt-6">
                <div className="text-center md:text-left mb-2 text-orange-300 font-bold text-sm animate-pulse">
                   ＼ 簡単1分で完了！ ／
                </div>
                <Button variant="primary" size="xl" fullWidth className="md:w-auto shadow-orange-500/30 shadow-2xl">
                    <CalendarDays className="mr-2 h-6 w-6" />
                    無料オンライン説明会に申し込む
                </Button>
            </div>
          </div>

          {/* Visual Content */}
          <div className="w-full md:w-2/5 relative">
             <div className="relative">
                {/* Simulated Generated Image: Professional Business Woman */}
                <img 
                    src="https://picsum.photos/600/700?random=1" 
                    alt="Successful Business Owner" 
                    className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[400px] md:h-[500px]"
                />
                
                {/* 10 Crown Badge Simulation */}
                <div className="absolute -bottom-10 -left-6 md:-left-12 bg-gradient-to-b from-yellow-300 to-yellow-600 p-1 rounded-xl shadow-xl z-20 w-48 md:w-64 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="bg-white p-3 rounded-lg text-center border-2 border-yellow-200">
                        <p className="text-xs font-bold text-gray-500 mb-1">物販フランチャイズ業界</p>
                        <p className="text-4xl md:text-5xl font-black text-yellow-600 leading-none">10<span className="text-2xl">冠</span></p>
                        <p className="text-sm font-bold text-gray-700 mt-1">達成</p>
                        <div className="mt-2 flex justify-center gap-1">
                            {[1,2,3].map(i => (
                                <div key={i} className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-[10px] font-bold text-white shadow">No.1</div>
                            ))}
                        </div>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};