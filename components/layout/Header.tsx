import React from 'react';
import { Button } from '../ui/Button';
import { Menu } from 'lucide-react';

export const Header: React.FC = () => (
  <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur shadow-sm z-50 h-[80px] flex items-center">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        {/* Logo Simulation */}
        <div className="font-black text-2xl tracking-tighter text-slate-800 flex items-center">
            <span className="text-xs mr-2 text-gray-500 block leading-tight">売らない<br/>ネットショップ</span>
            <div className="text-orange-600 mr-1">((🌐))</div>
            ACCESS
        </div>
      </div>

      <div className="hidden md:flex gap-4">
        <Button variant="secondary" size="sm">
            資料で事例を見る
        </Button>
        <Button variant="primary" size="sm">
            無料オンライン説明会
        </Button>
      </div>

      <button className="md:hidden p-2 text-slate-700">
        <Menu />
      </button>
    </div>
  </header>
);

export const Footer: React.FC = () => (
    <footer className="bg-slate-900 text-gray-400 py-12 text-sm text-center">
        <div className="container mx-auto px-4">
            <div className="mb-8">
                <p className="font-bold text-white text-lg mb-2">株式会社NEXT (NEXT Inc.)</p>
                <p>〒105-0012 東京都港区芝大門1-3-8 VORT芝大門II 5階・7階</p>
            </div>
            <div className="flex justify-center gap-6 mb-8">
                <a href="#" className="hover:text-white transition-colors">会社概要</a>
                <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
                <a href="#" className="hover:text-white transition-colors">特定商取引法に基づく表記</a>
            </div>
            <p>&copy; 株式会社NEXT All Rights Reserved.</p>
        </div>
    </footer>
);