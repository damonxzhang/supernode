import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, Zap, Thermometer, Network, Globe, TrendingUp, 
  ChevronRight, Activity, Box, Layers, Server, 
  ArrowUpRight, Info, Table as TableIcon, ShieldCheck,
  FileText, Lock, Key
} from 'lucide-react';
import { REPORT_DATA } from './constants';
import MethodologyPage from './components/MethodologyPage';
import NvidiaFactoryPage from './components/NvidiaFactoryPage';

const ACCESS_PASSWORD = 'Sinexus2026';

const SectionHeader = ({ title, subtitle, icon: Icon }: any) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 bg-emerald-50 rounded-lg">
        <Icon className="w-5 h-5 text-emerald-600" />
      </div>
      <span className="text-xs font-mono uppercase tracking-widest text-emerald-600/60">技术模块</span>
    </div>
    <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">{title}</h2>
    <p className="text-slate-500 max-w-2xl leading-relaxed font-bold">{subtitle}</p>
  </div>
);

const TechCard = ({ title, desc, stat, icon: Icon }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-emerald-600/30 transition-colors group shadow-sm"
  >
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-emerald-50 transition-colors">
        <Icon className="w-6 h-6 text-slate-400 group-hover:text-emerald-600" />
      </div>
      <span className="text-2xl font-mono font-bold text-slate-900 tracking-tighter">{stat}</span>
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-sm text-slate-500 leading-relaxed font-bold">{desc}</p>
  </motion.div>
);

export default function App() {
  const [activeSolution, setActiveSolution] = useState(REPORT_DATA.solutions[0].id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<'report' | 'methodology' | 'nvidia'>('report');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('supernode_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === ACCESS_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('supernode_auth', 'true');
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  const handlePageChange = (page: 'report' | 'methodology' | 'nvidia') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6 font-sans">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500" />
            
            <div className="flex flex-col items-center text-center mb-10">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                <Lock className="w-8 h-8 text-emerald-600" />
              </div>
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">超节点评估系统</h1>
              <p className="text-slate-500 text-sm font-bold">请输入访问密码以查看深度调研报告</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Key className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="访问密码"
                  className={`block w-full pl-12 pr-4 py-4 bg-slate-50 border ${
                    error ? 'border-rose-500 bg-rose-50' : 'border-slate-200 focus:border-emerald-500'
                  } rounded-2xl text-slate-900 font-bold placeholder:text-slate-400 focus:outline-none transition-all`}
                  autoFocus
                />
              </div>

              {error && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-rose-500 text-xs font-bold text-center"
                >
                  密码错误，请重新输入
                </motion.p>
              )}

              <button
                type="submit"
                className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 group"
              >
                <span>进入系统</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-10 pt-8 border-t border-slate-100 text-center">
              <div className="flex items-center justify-center gap-2 text-[10px] font-mono uppercase tracking-widest text-slate-400">
                <ShieldCheck className="w-3 h-3" />
                <span>芯桥研究院 • 安全访问控制</span>
              </div>
            </div>
          </div>
          
          <p className="mt-8 text-center text-slate-500 text-xs font-mono uppercase tracking-widest">
            【芯桥研究院】
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-600 font-sans selection:bg-emerald-500/10">
      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <button 
              className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <Activity className="w-8 h-8 rotate-45" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handlePageChange('report')}>
            <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <span className="font-mono font-bold text-slate-900 tracking-tighter text-xl uppercase">Supernode.OS</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest">
            {currentPage === 'report' ? (
              <>
                <a href="#market" className="hover:text-emerald-600 transition-colors">市场动态</a>
                <a href="#solutions" className="hover:text-emerald-600 transition-colors">主流方案</a>
                <a href="#tech" className="hover:text-emerald-600 transition-colors">关键技术</a>
                <a href="#comparison" className="hover:text-emerald-600 transition-colors">技术矩阵</a>
                <a href="#references" className="hover:text-emerald-600 transition-colors">参考资料</a>
              </>
            ) : (
              <button onClick={() => handlePageChange('report')} className="hover:text-emerald-600 transition-colors">返回调研报告</button>
            )}
            <button 
              onClick={() => handlePageChange('methodology')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all ${
                currentPage === 'methodology' 
                ? 'bg-emerald-600 text-white' 
                : 'hover:text-emerald-600'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>供电评估</span>
            </button>
            <button 
              onClick={() => handlePageChange('nvidia')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all ${
                currentPage === 'nvidia' 
                ? 'bg-blue-600 text-white' 
                : 'hover:text-blue-600'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>NVIDIA AI 工厂</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {currentPage === 'report' ? (
            <motion.div
              key="report"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              {/* Hero Section */}
              <section className="mb-32">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-4xl"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-[10px] font-mono uppercase tracking-widest mb-8">
                    <Activity className="w-3 h-3" /> 系统状态: 运行正常
                  </div>
                  <h1 className="text-7xl md:text-8xl font-bold text-slate-900 tracking-tighter leading-[0.9] mb-8">
                    {REPORT_DATA.hero.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-slate-500 font-bold leading-relaxed mb-12">
                    {REPORT_DATA.hero.abstract}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-4 px-6 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                      <div className="text-xs font-mono text-slate-400 uppercase">点对点延迟</div>
                      <div className="text-xl font-bold text-slate-900 tracking-tighter">2.0μs</div>
                    </div>
                    <div className="flex items-center gap-4 px-6 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                      <div className="text-xs font-mono text-slate-400 uppercase">互联带宽</div>
                      <div className="text-xl font-bold text-slate-900 tracking-tighter">3.6TB/s</div>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Market Drivers */}
              <section id="market" className="mb-32">
                <SectionHeader 
                  title="市场驱动因素" 
                  subtitle="大模型规模与物理基础设施极限的交汇，正迫使数据中心进行彻底的重新设计。"
                  icon={TrendingUp}
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {REPORT_DATA.market.drivers.map((driver, idx) => (
                    <TechCard key={idx} {...driver} />
                  ))}
                </div>
              </section>

              {/* Solutions Showcase */}
              <section id="solutions" className="mb-32">
                <SectionHeader 
                  title="全球主流架构" 
                  subtitle="对比从硅谷到大湾区的领先超节点实现方案。"
                  icon={Globe}
                />
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-4 space-y-2">
                    {REPORT_DATA.solutions.map((sol) => (
                      <button
                        key={sol.id}
                        onClick={() => setActiveSolution(sol.id)}
                        className={`w-full text-left p-6 rounded-2xl transition-all border ${
                          activeSolution === sol.id 
                          ? 'bg-emerald-50 border-emerald-200 text-slate-900 shadow-sm' 
                          : 'bg-white border-slate-200 text-slate-400 hover:border-slate-300'
                        }`}
                      >
                        <div className="text-[10px] font-mono uppercase tracking-widest mb-1 opacity-60">{sol.origin}</div>
                        <div className="text-lg font-bold tracking-tight">{sol.name}</div>
                      </button>
                    ))}
                  </div>

                  <div className="lg:col-span-8">
                    <AnimatePresence mode="wait">
                      {REPORT_DATA.solutions.map((sol) => sol.id === activeSolution && (
                        <motion.div
                          key={sol.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm"
                        >
                          {/* Rack Image Header */}
                          <div 
                            className="h-64 relative overflow-hidden group cursor-zoom-in"
                            onClick={() => setSelectedImage(sol.image)}
                          >
                            <img 
                              src={sol.image} 
                              alt={sol.name}
                              className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                            <div className="absolute bottom-6 left-8">
                              <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-600 mb-1">机柜实拍 / 渲染图</div>
                              <h3 className="text-3xl font-bold text-slate-900">{sol.name}</h3>
                            </div>
                          </div>

                          <div className="p-8 md:p-12">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                              {Object.entries(sol.stats).map(([key, val]) => (
                                <div key={key}>
                                  <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1">{key}</div>
                                  <div className="text-xl font-bold text-slate-900 tracking-tighter">{val}</div>
                                </div>
                              ))}
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                              <div className="space-y-4">
                                <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 mb-4">核心技术规格</div>
                                {sol.features.map((feat, idx) => (
                                  <div key={idx} className="flex items-start gap-3 text-slate-600 text-sm">
                                    <ChevronRight className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                                    <span>{feat}</span>
                                  </div>
                                ))}
                              </div>

                              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                                <div className="flex items-center gap-2 mb-4">
                                  <Network className="w-4 h-4 text-emerald-600" />
                                  <div className="text-xs font-mono uppercase tracking-widest text-slate-900">组网架构深度解析</div>
                                </div>

                                {sol.architectureImage && (
                                  <div 
                                    className="mb-6 rounded-xl overflow-hidden border border-slate-200 bg-white p-2 cursor-zoom-in group/img"
                                    onClick={() => setSelectedImage(sol.architectureImage!)}
                                  >
                                    <img 
                                      src={sol.architectureImage} 
                                      alt={`${sol.name} 架构图`}
                                      className="w-full h-auto object-contain max-h-48 group-hover/img:scale-[1.02] transition-transform duration-500"
                                      referrerPolicy="no-referrer"
                                    />
                                    <div className="text-[9px] text-center text-slate-400 mt-2 font-mono uppercase">点击查看大图</div>
                                  </div>
                                )}

                                <div className="mb-4">
                                  <div className="text-[10px] font-mono text-slate-400 uppercase mb-1">拓扑结构</div>
                                  <div className="text-sm font-bold text-slate-900">{sol.networkArchitecture.topology}</div>
                                </div>
                                <div className="mb-4">
                                  <div className="text-[10px] font-mono text-slate-400 uppercase mb-1">技术细节</div>
                                  <p className="text-xs text-slate-500 leading-relaxed font-bold">{sol.networkArchitecture.details}</p>
                                </div>
                                <div>
                                  <div className="text-[10px] font-mono text-slate-400 uppercase mb-1">互联带宽</div>
                                  <div className="text-sm font-bold text-emerald-600">{sol.networkArchitecture.bandwidth}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </section>

              {/* Tech Deep Dive */}
              <section id="tech" className="mb-32">
                <SectionHeader 
                  title="散热与供电工程" 
                  subtitle="通过先进的热力学和高压配电技术，解决高密度计算带来的物理挑战。"
                  icon={Zap}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Thermometer className="w-5 h-5 text-orange-500" />
                      <h4 className="text-lg font-bold text-slate-900">散热技术演进</h4>
                    </div>
                    <div className="space-y-4">
                      {REPORT_DATA.tech.cooling.map((item, idx) => (
                        <div key={idx} className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm flex justify-between items-center">
                          <div>
                            <div className="font-bold text-slate-900">{item.name}</div>
                            <div className="text-sm text-slate-500">{item.type}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs font-mono text-emerald-600">{item.efficiency}</div>
                            <div className="text-[10px] text-slate-400 uppercase tracking-widest">{item.usage}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Zap className="w-5 h-5 text-yellow-600" />
                      <h4 className="text-lg font-bold text-slate-900">供电分配系统</h4>
                    </div>
                    <div className="space-y-4">
                      {REPORT_DATA.tech.power.map((item, idx) => (
                        <div key={idx} className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                          <div className="flex justify-between items-start mb-2">
                            <div className="font-bold text-slate-900">{item.name}</div>
                            <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest ${
                              item.status.includes('现行') ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'
                            }`}>
                              {item.status}
                            </span>
                          </div>
                          <p className="text-sm text-slate-500">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Comparison Matrix */}
              <section id="comparison" className="mb-32">
                <SectionHeader 
                  title="技术对比矩阵" 
                  subtitle="全球最强大计算节点的横向对比。"
                  icon={TableIcon}
                />
                
                <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50/50">
                        <th className="p-6 text-xs font-mono uppercase tracking-widest text-slate-400">特性</th>
                        <th className="p-6 text-xs font-mono uppercase tracking-widest text-slate-900">NVIDIA NVL72</th>
                        <th className="p-6 text-xs font-mono uppercase tracking-widest text-slate-900">华为昇腾</th>
                        <th className="p-6 text-xs font-mono uppercase tracking-widest text-slate-900">Google TPU v7</th>
                        <th className="p-6 text-xs font-mono uppercase tracking-widest text-slate-900">阿里云磐久</th>
                        <th className="p-6 text-xs font-mono uppercase tracking-widest text-emerald-600">绿算技术</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="p-6 font-bold text-slate-500">核心芯片</td>
                        <td className="p-6">Grace + Blackwell</td>
                        <td className="p-6">昇腾 910C/D</td>
                        <td className="p-6">Trillium ASIC</td>
                        <td className="p-6">定制 GPU 节点</td>
                        <td className="p-6">国产 xPU (全解耦)</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="p-6 font-bold text-slate-500">机柜密度</td>
                        <td className="p-6">72 GPU / 柜</td>
                        <td className="p-6">384 NPU / 集群</td>
                        <td className="p-6">16 托盘 / 柜</td>
                        <td className="p-6">128 卡 / 柜</td>
                        <td className="p-6">≥ 128 卡 / 柜</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="p-6 font-bold text-slate-500">互联技术</td>
                        <td className="p-6">NVLink 5.0</td>
                        <td className="p-6">HCCS / RoCE</td>
                        <td className="p-6">4路轨对齐</td>
                        <td className="p-6">AliNOS 800G</td>
                        <td className="p-6">PCIe / 400G IB</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-6 font-bold text-slate-500">散热方式</td>
                        <td className="p-6">全液冷</td>
                        <td className="p-6">液冷</td>
                        <td className="p-6">液冷</td>
                        <td className="p-6">全液冷</td>
                        <td className="p-6">全液冷 (1U Tray)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* References Section */}
              <section id="references" className="mb-32">
                <SectionHeader 
                  title="官方参考资料" 
                  subtitle="深入了解各家超节点的技术细节与官方文档。"
                  icon={Layers}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {REPORT_DATA.references.map((ref, idx) => (
                    <a 
                      key={idx} 
                      href={ref.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-emerald-600/30 hover:shadow-md transition-all group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-2 py-1 bg-slate-100 rounded text-[10px] font-mono uppercase tracking-widest text-slate-500">
                            {ref.type}
                          </span>
                          <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 transition-colors" />
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors leading-snug">
                          {ref.name}
                        </h4>
                      </div>
                      <div className="mt-4 text-[10px] font-mono text-slate-400 truncate">
                        {ref.url}
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            </motion.div>
          ) : currentPage === 'methodology' ? (
            <motion.div
              key="methodology"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <MethodologyPage />
            </motion.div>
          ) : (
            <motion.div
              key="nvidia"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <NvidiaFactoryPage />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="border-t border-slate-200 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-100 rounded flex items-center justify-center">
              <Cpu className="w-4 h-4 text-slate-400" />
            </div>
            <span className="font-mono font-bold text-slate-900 tracking-tighter uppercase">Supernode.OS</span>
          </div>
          <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">
            © 2026 芯桥研究院 • 保留所有权利
          </div>
          <div className="flex gap-6">
            <Globe className="w-4 h-4 text-slate-400 hover:text-slate-900 cursor-pointer transition-colors" />
            <ShieldCheck className="w-4 h-4 text-slate-400 hover:text-slate-900 cursor-pointer transition-colors" />
            <Info className="w-4 h-4 text-slate-400 hover:text-slate-900 cursor-pointer transition-colors" />
          </div>
        </footer>
      </main>
    </div>
  );
}
