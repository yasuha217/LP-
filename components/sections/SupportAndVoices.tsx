import React from 'react';
import { SUPPORT_ITEMS, VOICES } from '../../constants';
import { Play } from 'lucide-react';

export const SupportSystem: React.FC = () => (
  <section className="py-20 bg-blue-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-16 text-slate-800">
        初心者でも安心の<br/><span className="text-blue-600">5つの販売サポート</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-6xl mx-auto">
        {SUPPORT_ITEMS.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-blue-100">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-bold text-blue-800 mb-2">
                    <span className="block text-xs text-blue-500 mb-1 font-normal">Support {item.id}</span>
                    {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
            </div>
        ))}
      </div>
    </div>
  </section>
);

export const CustomerVoices: React.FC = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-slate-800">
                未経験者が実績を上げている！
            </h2>
            <p className="text-center text-blue-600 font-bold text-4xl mb-16 font-serif">お客様の声</p>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {VOICES.map((voice) => (
                    <div key={voice.id} className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <div className="relative mb-6 group cursor-pointer">
                            <img src={voice.image} alt={voice.name} className="w-full h-48 object-cover rounded-xl grayscale-[30%] group-hover:grayscale-0 transition-all" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors rounded-xl">
                                <div className="bg-white/90 p-3 rounded-full">
                                    <Play className="w-6 h-6 text-slate-800 ml-1" />
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h3 className="font-bold text-lg">{voice.name} 様</h3>
                            <p className="text-sm text-gray-500">{voice.title}</p>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            "{voice.comment}"
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);