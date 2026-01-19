import React from 'react';
import { PlayCircle, TrendingUp, DollarSign, Monitor, ArrowRight, Truck, Package, ShoppingCart } from 'lucide-react';

export const ServiceIntro: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-12">
        未経験でも簡単に物販ビジネスを始められる<br/>
        <span className="text-blue-600 text-3xl md:text-4xl mt-2 inline-block">売らないネットショップ ACCESSとは？</span>
      </h2>
      
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        <div className="flex-1 bg-gray-100 p-8 rounded-2xl border-2 border-gray-200">
            <h3 className="text-xl font-bold bg-gray-600 text-white py-2 px-6 rounded-full inline-block mb-6">これまでの物販</h3>
            <div className="space-y-4 text-left max-w-xs mx-auto">
                <p className="flex items-center"><span className="text-red-500 mr-2">✖</span> 必要な作業が多くて大変</p>
                <p className="flex items-center"><span className="text-red-500 mr-2">✖</span> リサーチ・発送が面倒</p>
                <p className="flex items-center"><span className="text-red-500 mr-2">✖</span> 在庫リスクが高い</p>
            </div>
            <div className="mt-8 relative h-40">
                <div className="absolute inset-0 flex items-center justify-center flex-wrap gap-4 opacity-50">
                    <div className="p-4 bg-white rounded shadow text-xs">商品リサーチ</div>
                    <div className="p-4 bg-white rounded shadow text-xs">商品登録</div>
                    <div className="p-4 bg-white rounded shadow text-xs">顧客対応</div>
                    <div className="p-4 bg-white rounded shadow text-xs">梱包・発送</div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl">😵‍💫</div>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center">
            <ArrowRight className="w-12 h-12 text-blue-500 hidden md:block" />
            <ArrowRight className="w-12 h-12 text-blue-500 block md:hidden transform rotate-90" />
        </div>

        <div className="flex-1 bg-blue-50 p-8 rounded-2xl border-4 border-blue-500 relative shadow-xl">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                ここが違う！
            </div>
            <h3 className="text-xl font-bold bg-blue-600 text-white py-2 px-6 rounded-full inline-block mb-6">ACCESSを活用</h3>
            
            <p className="text-blue-900 font-bold mb-6">面倒な作業をシステムが代行！<br/>初心者の参入障壁を破壊</p>
            
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100 flex flex-col items-center">
                    <Monitor className="w-8 h-8 text-blue-500 mb-2" />
                    <span className="font-bold text-sm">システム化</span>
                </div>
                <div className="bg-orange-100 p-4 rounded-xl shadow-sm border border-orange-200 flex flex-col items-center">
                    <span className="text-orange-600 text-xs font-bold mb-1">あなたがやるのは</span>
                    <span className="font-bold text-lg text-orange-600">リサーチのみ</span>
                </div>
            </div>
             <div className="mt-6 text-sm text-gray-600 bg-white/50 p-3 rounded">
                発送・在庫管理・顧客対応は<br/>すべてお任せ！
            </div>
        </div>
      </div>
    </div>
  </section>
);

export const TvMedia: React.FC = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl font-bold mb-8 text-slate-700">テレビ番組でのご紹介実績</h2>
      <div className="flex flex-wrap justify-center gap-6 mb-8 grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100">
        <div className="bg-white px-6 py-3 rounded shadow font-bold text-gray-500">ナイツのこれイチ！</div>
        <div className="bg-white px-6 py-3 rounded shadow font-bold text-gray-500">カンニング竹山のイチバン研究所</div>
        <div className="bg-white px-6 py-3 rounded shadow font-bold text-gray-500">魚住りえのカイシャを伝えるテレビ</div>
      </div>
      <div className="max-w-3xl mx-auto bg-black rounded-xl overflow-hidden shadow-2xl aspect-video relative group cursor-pointer">
         {/* Placeholder for YouTube Embed */}
         <img src="https://picsum.photos/800/450?random=tv" alt="TV Show Capture" className="w-full h-full object-cover opacity-80" />
         <div className="absolute inset-0 flex items-center justify-center">
            <PlayCircle className="w-20 h-20 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
         </div>
      </div>
    </div>
  </section>
);

export const Features: React.FC = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-blue-600 font-bold tracking-widest uppercase">Point</span>
        <h2 className="text-3xl font-bold mt-2">スキマ時間での兼業ビジネスに最適！<br/>ACCESSの特徴</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
            {
                title: "ニッチな商品中心の戦略",
                desc: "大手ライバルが扱わない商品をあえて販売することで、価格競争を回避し、高い利益率を確保。",
                icon: <TrendingUp className="w-12 h-12 text-blue-500" />
            },
            {
                title: "数万点もの商品を扱える",
                desc: "システムを活用することで、個人では不可能な量の商品を出品可能。露出を増やして売上アップ。",
                icon: <Package className="w-12 h-12 text-purple-500" />
            },
            {
                title: "少ない開業資金で開始",
                desc: "在庫を持たないため、仕入れ資金が不要。自宅のPC1台で低リスクにスタートできます。",
                icon: <DollarSign className="w-12 h-12 text-green-500" />
            }
        ].map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-blue-500 hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                    {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">
                    <span className="text-blue-500 text-sm block mb-1">Point 0{idx+1}</span>
                    {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">{feature.desc}</p>
            </div>
        ))}
      </div>
    </div>
  </section>
);

export const DropShipping: React.FC = () => (
    <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
                手元に在庫がなくても始められる！<br/>
                <span className="text-orange-400">ドロップシッピング</span>とは？
            </h2>
            
            <div className="max-w-4xl mx-auto bg-slate-800 p-8 md:p-12 rounded-3xl relative">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    
                    <div className="text-center w-full md:w-1/3">
                        <div className="bg-white text-slate-900 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">👤</div>
                        <p className="font-bold">購入者</p>
                        <div className="mt-4 bg-slate-700 p-2 rounded text-xs">注文</div>
                    </div>

                    <div className="flex-1 flex flex-col items-center gap-2 w-full">
                        <div className="h-1 w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
                        <div className="flex justify-between w-full px-4 text-xs text-gray-400">
                             <span>ネットショップ（あなた）</span>
                             <span>メーカー・倉庫</span>
                        </div>
                    </div>

                    <div className="text-center w-full md:w-1/3">
                        <div className="bg-white text-slate-900 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">🏭</div>
                        <p className="font-bold">メーカー</p>
                         <div className="mt-4 bg-slate-700 p-2 rounded text-xs">直送</div>
                    </div>

                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                        <ShoppingCart className="mx-auto mb-2 text-blue-400"/>
                        <p className="text-sm">1. 購入者が注文</p>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                        <Monitor className="mx-auto mb-2 text-blue-400"/>
                        <p className="text-sm">2. あなたが発注処理</p>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                        <Truck className="mx-auto mb-2 text-orange-400"/>
                        <p className="text-sm text-orange-400 font-bold">3. メーカーから直送！</p>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <p className="text-xl font-bold">
                        在庫を抱えることなく、<br className="md:hidden"/>直接商品を届けられる仕組み
                    </p>
                </div>
            </div>
        </div>
    </section>
);