import React from 'react';
import { Button } from '../ui/Button';
import { BENEFITS } from '../../constants';
import { Calendar, FileText, Gift, Video, Lock } from 'lucide-react';

interface CtaProps {
  type: 'intermediate' | 'final';
}

export const CtaSection: React.FC<CtaProps> = ({ type }) => {
  const isFinal = type === 'final';
  
  return (
    <section className={`relative overflow-hidden ${isFinal ? 'py-24' : 'py-16'} bg-gradient-to-r from-blue-900 to-indigo-900 text-white`}>
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        
        {/* Headline */}
        <div className="mb-10">
          <span className="inline-block bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-4 animate-bounce">
            {isFinal ? '参加者限定特典あり' : 'まずは無料で情報収集'}
          </span>
          <h2 className={`${isFinal ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'} font-black leading-tight mb-4`}>
            物販ビジネスの"コツ"を知れる<br/>
            無料セミナーを開催中！
          </h2>
          <p className="text-blue-200">
            {isFinal ? '低リスクな新規事業・兼業ビジネスを始めたい経営者や個人事業主、会社員の方へ' : '実際の売れている商品や利益率など、システム画面をお見せしながらお伝えします！'}
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {BENEFITS.map((benefit, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl text-left hover:bg-white/20 transition-colors">
              <div className="flex items-center gap-2 mb-3 text-orange-300 font-bold uppercase text-xs tracking-wider">
                <Gift className="w-4 h-4" /> Present 0{idx + 1}
              </div>
              <h3 className="font-bold text-lg mb-2">{benefit.name}</h3>
              <p className="text-sm text-gray-200">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Buttons Area */}
        <div className="max-w-3xl mx-auto bg-white/5 p-8 rounded-3xl border border-white/10">
          
          {/* A-02: Enhanced Micro-copy for Final CTA */}
          <div className="mb-6 text-center">
             <p className={`font-bold text-orange-300 ${isFinal ? 'text-xl md:text-2xl animate-pulse' : 'text-lg'}`}>
               {isFinal ? '＼ カメラ・マイクOFFで気軽に参加 ／' : '＼ 簡単1分で完了！気軽にどうぞ ／'}
             </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <div className="w-full md:w-2/3">
              <Button variant="primary" size="xl" fullWidth className="shadow-orange-500/50 shadow-2xl text-lg md:text-xl h-auto py-6">
                <Calendar className="mr-2 w-6 h-6" />
                無料オンライン説明会に申し込む
              </Button>
            </div>
            <div className="w-full md:w-1/3">
              <Button variant="secondary" size="lg" fullWidth className="h-full py-6 bg-blue-800/80 hover:bg-blue-700">
                <FileText className="mr-2 w-5 h-5" />
                資料で事例を見る
              </Button>
            </div>
          </div>

          {/* A-02: Anxiety Reduction Text */}
          {isFinal && (
            <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4 text-gray-400 text-xs md:text-sm">
              <span className="flex items-center"><Video className="w-4 h-4 mr-1"/> 顔出し不要・途中退出OK</span>
              <span className="hidden md:inline">|</span>
              <span className="flex items-center"><Lock className="w-4 h-4 mr-1"/> ※強引な勧誘は一切ありません</span>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};