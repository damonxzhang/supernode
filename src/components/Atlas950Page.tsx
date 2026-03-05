import React from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, Zap, Box, Activity, Layers, Server, 
  TrendingUp, Info, Table as TableIcon, ShieldCheck,
  Database, Network, BarChart3, ArrowUpRight, Globe,
  Layout, Share2, Clock, CheckCircle2, ZapOff, AlertTriangle
} from 'lucide-react';

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white border border-slate-200 rounded-3xl p-8 shadow-sm ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, variant = 'default' }: { children: React.ReactNode, variant?: 'default' | 'success' | 'warning' | 'info' | 'danger' }) => {
  const styles = {
    default: 'bg-slate-100 text-slate-600',
    success: 'bg-emerald-50 text-emerald-600',
    warning: 'bg-amber-50 text-amber-600',
    info: 'bg-blue-50 text-blue-600',
    danger: 'bg-rose-50 text-rose-600',
  };
  return (
    <span className={`px-2 py-1 rounded text-[10px] font-mono uppercase tracking-widest font-bold ${styles[variant]}`}>
      {children}
    </span>
  );
};

export default function Atlas950Page({ onImageClick }: { onImageClick: (url: string) => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-24 pb-24"
    >
      {/* Header */}
      <section className="relative overflow-hidden pt-12">
        <div className="max-w-4xl relative z-10">
          <Badge variant="danger">World's Strongest SuperPoD</Badge>
          <h1 className="text-6xl font-bold text-slate-900 tracking-tighter leading-tight mt-6 mb-8">
            华为 Atlas 950<br />SuperPoD 超节点
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed font-bold max-w-3xl">
            面向 Agentic AI 时代的巅峰算力。徐直军：“至少在未来多年都将保持是全球最强算力的超节点，并且在各项主要能力上都远超业界主要产品。”
          </p>
        </div>

        {/* Added Presentation Image */}
        <div 
          className="mt-12 rounded-[3rem] overflow-hidden border border-slate-200 shadow-2xl bg-white p-4 cursor-zoom-in group"
          onClick={() => onImageClick('/images/atlas-950-superpod.png')}
        >
          <img 
            src="/images/atlas-950-superpod.png" 
            alt="Huawei Atlas 950 SuperPoD" 
            className="w-full h-auto rounded-[2.5rem] group-hover:scale-[1.01] transition-transform duration-500"
          />
          <div className="text-[10px] text-center text-slate-400 mt-4 font-mono uppercase tracking-widest">点击查看大图</div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white flex flex-col justify-between h-64 shadow-2xl">
            <Zap className="w-8 h-8 text-amber-400 opacity-50" />
            <div>
              <p className="text-4xl font-bold mb-1">16 EFLOPS</p>
              <p className="text-xs font-mono uppercase tracking-widest text-slate-400">FP4 峰值算力</p>
            </div>
          </div>
          <div className="p-8 bg-red-600 rounded-[2.5rem] text-white flex flex-col justify-between h-64 shadow-2xl">
            <Share2 className="w-8 h-8 text-white opacity-50" />
            <div>
              <p className="text-4xl font-bold mb-1">16 PB/s</p>
              <p className="text-xs font-mono uppercase tracking-widest text-red-200">总互联带宽</p>
            </div>
          </div>
          <div className="p-8 bg-white border border-slate-200 rounded-[2.5rem] text-slate-900 flex flex-col justify-between h-64 shadow-sm">
            <Layers className="w-8 h-8 text-red-600 opacity-50" />
            <div>
              <p className="text-4xl font-bold mb-1">8192 卡</p>
              <p className="text-xs font-mono uppercase tracking-widest text-slate-400">最大无收敛互联规模</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Positioning */}
      <section>
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-red-50 rounded-lg">
            <Activity className="w-5 h-5 text-red-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">一、产品定位与背景</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed font-bold">
              当前人工智能已从 <span className="text-red-600">Generative AI</span> 时代演进至 <span className="text-red-600">Agentic AI</span> 时代。
            </p>
            <Card className="bg-slate-50/50 border-dashed">
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1 bg-white p-2 rounded-xl shadow-sm"><TrendingUp className="w-5 h-5 text-red-600" /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">算力需求激增</h4>
                    <p className="text-sm text-slate-500 font-bold">万亿级参数和 10 万亿级数据训练成为标配，需求提升 10-100 倍。</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 bg-white p-2 rounded-xl shadow-sm"><Clock className="w-5 h-5 text-red-600" /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">时延极致要求</h4>
                    <p className="text-sm text-slate-500 font-bold">对算力规模和通信时延提出了前所未有的挑战。</p>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
          <div className="p-10 bg-slate-900 rounded-[3rem] text-white">
            <h3 className="text-2xl font-bold mb-6">核心观点</h3>
            <p className="text-lg leading-relaxed opacity-90 italic font-bold">
              “Atlas 950 超节点至少在未来多年都将保持是全球最强算力的超节点，并且在各项主要能力上都远超业界主要产品。”
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold">徐</div>
              <div>
                <p className="font-bold">徐直军</p>
                <p className="text-xs text-slate-400">华为轮值董事长</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Technical Specs */}
      <section>
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-red-50 rounded-lg">
            <Cpu className="w-5 h-5 text-red-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">二、核心技术规格</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              <div>
                <p className="text-slate-400 text-[10px] uppercase tracking-widest mb-2">昇腾 950DT 芯片</p>
                <p className="text-2xl font-bold text-slate-900">HiZQ 2.0</p>
                <p className="text-xs text-slate-500 mt-1">自研 HBM 架构</p>
              </div>
              <div>
                <p className="text-slate-400 text-[10px] uppercase tracking-widest mb-2">内存容量/带宽</p>
                <p className="text-2xl font-bold text-slate-900">144GB / 4TB/s</p>
                <p className="text-xs text-slate-500 mt-1">单卡性能指标</p>
              </div>
              <div>
                <p className="text-slate-400 text-[10px] uppercase tracking-widest mb-2">总统一内存</p>
                <p className="text-2xl font-bold text-red-600">1152 TB</p>
                <p className="text-xs text-slate-500 mt-1">真正的统一地址空间</p>
              </div>
            </div>
            <div className="mt-12 pt-12 border-t border-slate-100">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-red-600" /> 统一内存的价值
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed font-bold">
                1152TB 不是分散在各服务器里的缓存，而是真正的统一地址空间。训练万亿参数大模型时，数据无需搬来搬去，可直接就地计算，极大提升效率。
              </p>
            </div>
          </Card>
          <div className="bg-red-600 rounded-[2.5rem] p-8 text-white">
            <h4 className="text-xl font-bold mb-8">算力飞跃</h4>
            <div className="space-y-8">
              <div>
                <p className="text-red-200 text-xs uppercase mb-1">FP8 算力</p>
                <p className="text-4xl font-bold">8 EFLOPS</p>
              </div>
              <div>
                <p className="text-red-200 text-xs uppercase mb-1">FP4 算力</p>
                <p className="text-4xl font-bold">16 EFLOPS</p>
              </div>
              <p className="text-sm opacity-80 font-bold italic pt-4 border-t border-white/20">
                算力规模是昇腾 384 超节点的 20 多倍。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Architecture */}
      <section>
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-red-50 rounded-lg">
            <Layout className="w-5 h-5 text-red-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">三、架构创新亮点</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 bg-white border border-slate-200 rounded-[2rem] shadow-sm">
            <Zap className="w-6 h-6 text-red-600 mb-6" />
            <h4 className="font-bold text-slate-900 mb-3">正交架构</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-bold">实现零线缆电互联，大幅提升信号完整性与系统稳定性。</p>
          </div>
          <div className="p-8 bg-white border border-slate-200 rounded-[2rem] shadow-sm">
            <Box className="w-6 h-6 text-red-600 mb-6" />
            <h4 className="font-bold text-slate-900 mb-3">零漏液液冷</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-bold">采用液冷接头浮动盲插设计，光模块液冷可靠性提升一倍。</p>
          </div>
          <div className="p-8 bg-white border border-slate-200 rounded-[2rem] shadow-sm">
            <Network className="w-6 h-6 text-red-600 mb-6" />
            <h4 className="font-bold text-slate-900 mb-3">UB-Mesh 拓扑</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-bold">递归直连拓扑，支持最大 8192 卡无收敛全互联。</p>
          </div>
          <div className="p-8 bg-white border border-slate-200 rounded-[2rem] shadow-sm">
            <ShieldCheck className="w-6 h-6 text-red-600 mb-6" />
            <h4 className="font-bold text-slate-900 mb-3">灵衢协议</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-bold">2.1 微秒极致延迟，故障检测切换达到百纳秒级。</p>
          </div>
        </div>
      </section>

      {/* Section 4: Comparison */}
      <section>
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-red-50 rounded-lg">
            <TableIcon className="w-5 h-5 text-red-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">四、与英伟达的对比</h2>
        </div>

        {/* Added Comparison Image */}
        <div 
          className="mb-12 rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl bg-white p-4 cursor-zoom-in group"
          onClick={() => onImageClick('/images/atlas-950-comparison.jpg')}
        >
          <img 
            src="/images/atlas-950-comparison.jpg" 
            alt="Atlas 950 vs NVIDIA Comparison" 
            className="w-full h-auto rounded-3xl group-hover:scale-[1.01] transition-transform duration-500"
          />
          <div className="text-[10px] text-center text-slate-400 mt-4 font-mono uppercase tracking-widest">点击查看大图</div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/50">
                <th className="p-6 text-xs font-mono uppercase tracking-widest text-slate-400">指标</th>
                <th className="p-6 text-xs font-mono uppercase tracking-widest text-slate-900">Atlas 950</th>
                <th className="p-6 text-xs font-mono uppercase tracking-widest text-blue-600">NVIDIA NVL144</th>
                <th className="p-6 text-xs font-mono uppercase tracking-widest text-red-600">Atlas 950 领先倍数</th>
              </tr>
            </thead>
            <tbody className="text-sm font-bold">
              <tr className="border-b border-slate-100">
                <td className="p-6 text-slate-500">卡规模</td>
                <td className="p-6 text-slate-900">8192 卡</td>
                <td className="p-6 text-blue-600">144 卡</td>
                <td className="p-6 text-red-600">56.8 倍</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-6 text-slate-500">总算力 (FP8)</td>
                <td className="p-6 text-slate-900">8 EFLOPS</td>
                <td className="p-6 text-blue-600">1.2 EFLOPS</td>
                <td className="p-6 text-red-600">6.7 倍</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-6 text-slate-500">内存容量</td>
                <td className="p-6 text-slate-900">1152 TB</td>
                <td className="p-6 text-blue-600">75 TB</td>
                <td className="p-6 text-red-600">15 倍</td>
              </tr>
              <tr>
                <td className="p-6 text-slate-500">互联带宽</td>
                <td className="p-6 text-slate-900">16.3 PB/s</td>
                <td className="p-6 text-blue-600">260 TB/s</td>
                <td className="p-6 text-red-600">62 倍</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-slate-500 font-bold italic">
          * 即使是与英伟达计划 2027 年上市的 NVL576 相比，Atlas 950 在各方面依然保持领先。
        </p>
      </section>

      {/* Section 5: Cluster Capacity */}
      <section>
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-red-50 rounded-lg">
            <Globe className="w-5 h-5 text-red-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">五、集群扩展能力</h2>
        </div>
        <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white overflow-hidden relative shadow-2xl border border-white/5">
          <div className="relative z-10">
            <h4 className="text-3xl font-bold mb-10 text-white tracking-tight">Atlas 950 SuperCluster 50 万卡集群</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center gap-6 p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-red-500 font-bold text-3xl">64 个</div>
                  <div className="text-sm text-slate-400 font-bold">Atlas 950 超节点互联</div>
                </div>
                <div className="flex items-center gap-6 p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-red-500 font-bold text-3xl">52 万片</div>
                  <div className="text-sm text-slate-400 font-bold">昇腾 950DT 芯片组</div>
                </div>
              </div>
              <div className="space-y-8 flex flex-col justify-center">
                <p className="text-lg text-slate-400 leading-relaxed font-bold">
                  相比当前世界上最大的集群 xAI Colossus：
                </p>
                <div className="flex items-center gap-12">
                  <div>
                    <p className="text-4xl font-bold text-red-500 mb-1">2.5 倍</p>
                    <p className="text-xs text-slate-500 font-mono uppercase tracking-widest">规模领先</p>
                  </div>
                  <div className="w-px h-12 bg-white/10"></div>
                  <div>
                    <p className="text-4xl font-bold text-red-500 mb-1">1.3 倍</p>
                    <p className="text-xs text-slate-500 font-mono uppercase tracking-widest">算力领先</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 blur-[120px] -mr-64 -mt-64"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] -ml-32 -mb-32"></div>
        </div>
      </section>

      {/* Section 6: Power Solutions */}
      <section>
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-red-50 rounded-lg">
            <Zap className="w-5 h-5 text-red-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">六、供电方案深度解析</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-sm">
              <h4 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <Info className="w-5 h-5 text-blue-500" /> 供电方面的已知信息
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h5 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <ZapOff className="w-4 h-4 text-red-500" /> 单机柜功耗极高
                    </h5>
                    <p className="text-sm text-slate-600 leading-relaxed font-bold">
                      超节点单机柜功耗普遍突破 100kW（如 CM384 达 172.8kW，GB200 约 120-140kW）。Atlas 950 规格更高，预计功耗只高不低。
                    </p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h5 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-blue-500" /> Busbar 母排供电架构
                    </h5>
                    <p className="text-sm text-slate-600 leading-relaxed font-bold">
                      采用 Busbar（母排）为各节点提供电源，应对单机柜百千瓦级功耗，具有更低阻抗、更高载流能力。
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h5 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <Globe className="w-4 h-4 text-emerald-500" /> 整体规模估算
                    </h5>
                    <p className="text-sm text-slate-600 leading-relaxed font-bold">
                      64 个超节点占据上万机柜，至少需要两个篮球场大小空间容纳核心机柜、光互连及供电冷却系统。
                    </p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h5 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-cyan-500" /> 全液冷散热替代风冷
                    </h5>
                    <p className="text-sm text-slate-600 leading-relaxed font-bold">
                      全液冷超节点，液冷覆盖率 70% 以上，有效应对单机柜功耗超 100kW 的散热难题，提升系统稳定性。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-[2.5rem] p-10">
              <h4 className="text-xl font-bold text-red-900 mb-8 flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-red-600" /> 供电产业链影响
              </h4>
              <p className="text-sm text-red-800/70 mb-8 font-bold">行业机构将供电列为四大核心赛道之一（光 + 液冷 + 供电 + 芯片），重点关注：</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Power Shelf / PSU", desc: "机柜功耗攀升直接带动高功率电源需求" },
                  { title: "Busbar 母排系统", desc: "替代传统线缆，适配超高密度供电" },
                  { title: "高压直流 (HVDC)", desc: "提升供电效率，减少转换损耗" },
                  { title: "UPS 及配电系统", desc: "整体数据中心电力基础设施同步升级" }
                ].map((item, i) => (
                  <div key={i} className="p-5 bg-white rounded-2xl shadow-sm border border-red-100/50">
                    <h5 className="font-bold text-red-600 text-sm mb-1">{item.title}</h5>
                    <p className="text-xs text-slate-500 font-bold">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-amber-50 border border-amber-200 rounded-[2rem] p-8">
              <div className="flex items-center gap-3 mb-4 text-amber-700">
                <AlertTriangle className="w-6 h-6" />
                <h4 className="font-bold text-lg">⚠️ 重要说明</h4>
              </div>
              <p className="text-sm text-amber-900/80 leading-relaxed font-bold space-y-4">
                华为目前尚未公开 Atlas 950 单节点或满配 160 柜的总功耗/供电规格详细数据。
                <br /><br />
                这部分信息预计会在 <span className="text-amber-700">2026 年 Q4</span> 正式上市时随技术白皮书发布。
                <br /><br />
                建议参考前代 <span className="text-amber-700 font-black underline underline-offset-4">CM384 (172.8kW/柜)</span> 作为基准下限估算。
              </p>
            </div>
            
            <div className="p-8 bg-slate-900 rounded-[2rem] text-white">
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">核心洞察</p>
              <p className="text-lg font-bold leading-relaxed italic text-slate-300">
                “电力不再是辅助设施，而是算力承载的核心限制因素。Atlas 950 的供电架构设计将直接决定其在大规模集群中的部署效率。”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Ecosystem & Timeline */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-red-50 rounded-lg">
              <Share2 className="w-5 h-5 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">七、开放生态策略</h2>
          </div>
          <div className="space-y-4">
            <div className="p-6 bg-white border border-slate-200 rounded-2xl flex items-start gap-4">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1" />
              <div>
                <h5 className="font-bold text-slate-900">开放互联协议</h5>
                <p className="text-xs text-slate-500 mt-1 font-bold">全面开放灵衢（UnifiedBus）协议，允许产业界自研相关产品。</p>
              </div>
            </div>
            <div className="p-6 bg-white border border-slate-200 rounded-2xl flex items-start gap-4">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1" />
              <div>
                <h5 className="font-bold text-slate-900">开放参考架构</h5>
                <p className="text-xs text-slate-500 mt-1 font-bold">包括 NPU 模组、风/液冷刀片、AI 标卡、CPU 主板等基础硬件全面开放。</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-red-50 rounded-lg">
              <Clock className="w-5 h-5 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">八、发布时间线</h2>
          </div>
          <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-slate-200">
            {[
              { time: "2025年9月", event: "华为全联接大会首次发布，宣布 2026 Q4 上市" },
              { time: "2026年3月2日", event: "MWC 2026 首次在海外公开展示" },
              { time: "2026年Q4", event: "预计正式上市" }
            ].map((item, i) => (
              <div key={i} className="relative pl-10">
                <div className="absolute left-0 top-1.5 w-6 h-6 bg-white border-2 border-red-600 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                </div>
                <p className="text-sm font-bold text-red-600 mb-1">{item.time}</p>
                <p className="text-sm text-slate-900 font-bold">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="pt-12 border-t border-slate-100">
        <div className="bg-slate-50 rounded-[2.5rem] p-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-xl font-bold text-slate-900 mb-6">典型应用场景</h4>
            <p className="text-sm text-slate-600 leading-relaxed font-bold">
              为超大规模 AI 训练与海量推理并发场景提供最优选择。相比传统集群，大模型训练效率、可靠性与推理性能均大幅提升。
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-2">前代部署规模</p>
              <p className="text-3xl font-bold text-slate-900">300+ 套</p>
              <p className="text-xs text-slate-500 mt-2 font-bold">已服务互联网、金融、运营商、电力等行业核心客户。</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
