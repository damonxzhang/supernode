import React from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, Zap, Box, Activity, Layers, Server, 
  TrendingUp, Info, Table as TableIcon, ShieldCheck,
  Cpu as CpuIcon, Database, Network, BarChart3, ArrowUpRight
} from 'lucide-react';

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string, key?: React.Key }) => (
  <div className={`bg-white border border-slate-200 rounded-3xl p-8 shadow-sm ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, variant = 'default' }: { children: React.ReactNode, variant?: 'default' | 'success' | 'warning' | 'info' }) => {
  const styles = {
    default: 'bg-slate-100 text-slate-600',
    success: 'bg-emerald-50 text-emerald-600',
    warning: 'bg-amber-50 text-amber-600',
    info: 'bg-blue-50 text-blue-600',
  };
  return (
    <span className={`px-2 py-1 rounded text-[10px] font-mono uppercase tracking-widest font-bold ${styles[variant]}`}>
      {children}
    </span>
  );
};

export default function NvidiaFactoryPage({ onImageClick }: { onImageClick: (url: string) => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-24 pb-24"
    >
      {/* Header */}
      <section className="relative overflow-hidden pt-12">
        <div className="max-w-4xl relative z-10">
          <Badge variant="info">Next-Gen Platform 2026</Badge>
          <h1 className="text-6xl font-bold text-slate-900 tracking-tighter leading-tight mt-6 mb-8">
            NVIDIA Vera Rubin<br />AI 工厂架构解析
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed font-bold max-w-2xl">
            专为 Agentic AI 和推理设计的机柜级超级计算机。基于第三代 MGX™ 设计，提供 10 倍于 Blackwell 的推理能效。
          </p>
        </div>
        
        <div className="mt-16 relative group cursor-zoom-in" onClick={() => onImageClick('/images/rubin-nvl72.png')}>
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-[3rem] blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative bg-white rounded-[3rem] overflow-hidden border border-slate-200 shadow-2xl">
            <img 
              src="/images/rubin-nvl72.png" 
              alt="NVIDIA Vera Rubin NVL72 Rack" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex flex-col justify-end p-12">
              <div className="flex items-center gap-6 text-white">
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest opacity-70 mb-1">Platform</p>
                  <p className="text-2xl font-bold">Vera Rubin NVL72</p>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest opacity-70 mb-1">Compute Unit</p>
                  <p className="text-2xl font-bold">72 Rubin GPUs</p>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest opacity-70 mb-1">Interconnect</p>
                  <p className="text-2xl font-bold">NVLink 6 (3.6 TB/s)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-white/40 font-mono uppercase tracking-widest">点击查看大图</div>
        </div>
      </section>

      {/* Section 1: Positioning */}
      <section>
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Activity className="w-5 h-5 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">一、总体定位与组成架构</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed font-bold">
              <span className="text-blue-600">Vera Rubin</span> 是 NVIDIA 面向大型 AI 数据中心和超算级推理 + 训练工作负载的<span className="text-slate-900">整体平台（AI supercomputer）</span>。
            </p>
            <Card className="bg-slate-50/50 border-dashed">
              <h3 className="text-sm font-mono uppercase tracking-widest text-slate-400 mb-6">核心组件构成</h3>
              <ul className="space-y-4">
                {[
                  { name: "Vera CPU", desc: "ARM 架构定制 AI 协调 CPU" },
                  { name: "Rubin GPU", desc: "核心 AI 计算加速 GPU" },
                  { name: "NVLink 6 Switch", desc: "第六代 GPU 内互联交换器" },
                  { name: "ConnectX-9 SuperNIC", desc: "网络接口卡" },
                  { name: "BlueField-4 DPU", desc: "数据处理单元" },
                  { name: "Spectrum-6 Ethernet Switch", desc: "高速以太网交换机" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-bold">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-slate-900 w-40">{item.name}</span>
                    <span className="text-slate-400 font-normal">— {item.desc}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-500/5 rounded-[2.5rem] blur-2xl group-hover:bg-blue-500/10 transition-colors" />
            <img 
              src="/images/rubin-architecture.png" 
              alt="NVIDIA Vera Rubin Architecture" 
              className="relative rounded-3xl border border-slate-200 shadow-2xl w-full object-cover aspect-video"
            />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur rounded-2xl border border-white/20 shadow-lg">
              <p className="text-xs font-bold text-slate-900">
                ⚡ 可高效横向/纵向扩展的 AI 计算集群 (NVL72 / NVL144 / NVL576)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Rubin GPU */}
      <section>
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-emerald-50 rounded-lg">
            <CpuIcon className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">二、Rubin GPU（核心 AI 加速）</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="overflow-hidden p-0">
              <div className="p-8 border-b border-slate-100 bg-slate-50/50">
                <h3 className="text-xl font-bold text-slate-900">核心规格（单颗 GPU）</h3>
              </div>
              <table className="w-full text-left border-collapse">
                <tbody className="text-sm font-bold">
                  {[
                    { label: "架构", value: "Rubin 新世代 GPU 架构" },
                    { label: "制程", value: "TSMC 3nm N3P" },
                    { label: "GPU 内存", value: "288 GB HBM4" },
                    { label: "内存带宽", value: "~22 TB/s（根据最新调整）" },
                    { label: "NVLink", value: "第 6 代 NVLink: ~3.6 TB/s 每卡" },
                    { label: "计算性能 (NVFP4 推理)", value: "~50 PFLOPS（理论峰值）" },
                    { label: "计算性能 (NVFP4 训练)", value: "~35 PFLOPS" },
                    { label: "性能提升 vs Blackwell", value: "推理 ~5×、训练 ~3.5×" },
                    { label: "Tensor Core", value: "5 代 Tensor Core + 扩展单元" },
                    { label: "功耗估算", value: "~2300 W (TDP) 级别" }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-4 pl-8 text-slate-500 w-1/3">{row.label}</td>
                      <td className="p-4 text-slate-900">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg group">
                <img 
                  src="/images/supermicro-rack.png" 
                  alt="NVIDIA Rubin GPU Chip" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="p-6 bg-white">
                  <h4 className="font-bold text-slate-900 mb-2">Rubin GPU 核心</h4>
                  <p className="text-xs text-slate-500 font-bold">采用 HBM4 内存堆栈，实现前所未有的显存带宽。</p>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg group">
                <img 
                  src="/images/samsung-saint-stacking.png" 
                  alt="Samsung SAINT 3D Stacking Technology" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6 bg-white">
                  <h4 className="font-bold text-slate-900 mb-2">3D 堆叠技术 (SAINT)</h4>
                  <p className="text-xs text-slate-500 font-bold">三星 SAINT 技术支持 SRAM、Logic 及 DRAM 的 3D 堆叠，助力 HBM4 性能突破。</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-8 bg-emerald-600 rounded-[2rem] text-white">
              <Database className="w-8 h-8 mb-4 opacity-50" />
              <h4 className="text-lg font-bold mb-2">HBM4 显存革命</h4>
              <p className="text-sm opacity-90 leading-relaxed font-bold">
                堆叠带宽达 ~22 TB/s，比 Blackwell 提升 2-3 倍，对于大规模 context 推理和模型缓存至关重要。
              </p>
            </div>
            <div className="p-8 bg-slate-900 rounded-[2rem] text-white">
              <Network className="w-8 h-8 mb-4 opacity-50 text-emerald-400" />
              <h4 className="text-lg font-bold mb-2">NVLink 6 互联</h4>
              <p className="text-sm opacity-90 leading-relaxed font-bold">
                在 rack 内实现极速 GPU-GPU、GPU-CPU 数据通路，降低延迟并提升 sustained throughput。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Vera CPU */}
      <section>
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Server className="w-5 h-5 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">三、Vera CPU（AI 协作 CPU）</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card>
              <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                <Badge variant="info">Custom ARM</Badge> Vera CPU 规格
              </h3>
              <div className="space-y-6">
                {[
                  { label: "架构", value: "定制 ARM “Olympus” 内核" },
                  { label: "物理核心", value: "88 核" },
                  { label: "线程支持", value: "176 线程" },
                  { label: "内存", value: "LPDDR5X 支持大容量内存" },
                  { label: "互联", value: "NVLink-C2C / 超快内存通路" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-slate-100 pb-4">
                    <span className="text-slate-500 font-bold">{item.label}</span>
                    <span className="text-slate-900 font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
            </Card>
            <div className="p-10 bg-blue-50 rounded-[2.5rem] flex flex-col justify-center">
              <h4 className="text-2xl font-bold text-blue-900 mb-6">设计用途</h4>
              <p className="text-lg text-blue-800 leading-relaxed font-bold">
                Vera CPU 专为 <span className="underline decoration-blue-300 underline-offset-4">AI 数据流量</span>、<span className="underline decoration-blue-300 underline-offset-4">NVLink 通信</span> 和 <span className="underline decoration-blue-300 underline-offset-4">模型状态管理</span> 优化。
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 bg-blue-500/5 rounded-full blur-3xl"></div>
            <img 
              src="/images/vera-rubin-nvl144-cpx.png" 
              alt="NVIDIA Vera Rubin NVL144 CPX Architecture" 
              className="relative rounded-[3rem] border border-slate-200 shadow-2xl w-full aspect-square object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 max-w-[240px]">
              <p className="text-sm font-bold text-slate-900 leading-tight">
                Vera CPU 与 Rubin GPU 通过 NVLink-C2C 紧密耦合，消除 PCIE 瓶颈。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Cluster Metrics */}
      <section>
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-slate-900 rounded-lg">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">四、整机与集群级指标（NVL72）</h2>
        </div>

        <Card className="overflow-hidden p-0">
          <div className="p-8 border-b border-slate-100 flex justify-between items-center">
            <h3 className="text-xl font-bold text-slate-900">NVL72（72 GPU + 36 CPU）整机指标</h3>
            <Badge variant="success">ExaFLOPS Class</Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 border-r border-slate-100 space-y-4">
              {[
                { label: "GPU 数量", value: "72 × Rubin" },
                { label: "CPU 数量", value: "36 × Vera" },
                { label: "NVFP4 推理", value: "~3.6 Exaflops" },
                { label: "NVFP4 训练", value: "~2.5 Exaflops" },
                { label: "FP16/BF16", value: "~288 PFLOPS" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-slate-500 font-bold">{item.label}</span>
                  <span className="text-slate-900 font-mono font-bold">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="p-8 space-y-4">
              {[
                { label: "FP32", value: "~9,360 TFLOPS" },
                { label: "FP64", value: "~2,400 TFLOPS" },
                { label: "GPU 内存", value: "~20.7 TB HBM4" },
                { label: "NVLink 带宽", value: "~260 TB/s" },
                { label: "CPU 内存", value: "~54 TB LPDDR5X" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-slate-500 font-bold">{item.label}</span>
                  <span className="text-slate-900 font-mono font-bold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 bg-slate-50 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-500 font-bold italic">
              ⚡ 强调推理密集 workloads 能效提升和可扩展性。
            </p>
          </div>
        </Card>
      </section>

      {/* Section 5: Key Tech */}
      <section>
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-amber-50 rounded-lg">
            <Zap className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">五、关键技术与设计亮点</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "NVFP4 精度优化",
              desc: "Tensor Core 针对 NVFP4、FP8、INT8 等低精度 AI 计算做深度硬件加速，更省电且更适合大模型推理。",
              icon: Activity
            },
            {
              title: "第 6 代 NVLink",
              desc: "提供更高带宽的 GPU ↔ GPU ↔ CPU 互联，减少通信瓶颈，是大规模 LLM 训练和推理的核心技术路径。",
              icon: Network
            },
            {
              title: "AI 工厂级 co-design",
              desc: "软硬件协同的 AI 工厂级系统，包括高速网络、DPUs、交换机等，可用作大规模推理服务和 agentic AI。",
              icon: Box
            }
          ].map((item, i) => (
            <Card key={i} className="hover:border-amber-500/30 transition-colors group">
              <div className="p-3 bg-amber-50 rounded-xl w-fit mb-6 group-hover:bg-amber-100 transition-colors">
                <item.icon className="w-6 h-6 text-amber-600" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-4">{item.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-bold">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 6: Comparison */}
      <section>
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-slate-100 rounded-lg">
            <TrendingUp className="w-5 h-5 text-slate-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">六、与 Blackwell 世代对比</h2>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/50">
                <th className="p-6 text-xs font-mono uppercase tracking-widest text-slate-400">项目</th>
                <th className="p-6 text-xs font-mono uppercase tracking-widest text-slate-900">Blackwell</th>
                <th className="p-6 text-xs font-mono uppercase tracking-widest text-blue-600">Rubin (Vera Rubin)</th>
              </tr>
            </thead>
            <tbody className="text-sm font-bold">
              {[
                { label: "推理性能", b: "~10-15 PFLOPS", r: "~50 PFLOPS (单卡 NVFP4)" },
                { label: "内存类型", b: "HBM3 / HBM3e", r: "HBM4" },
                { label: "内存带宽", b: "~8-10 TB/s", r: "~22 TB/s" },
                { label: "CPU 互联", b: "NVLink 5/6 提前世代", r: "NVLink 6 全面升级" },
                { label: "系统级性能", b: "< 1 ExaFLOPS", r: "多 ExaFLOPS 级" },
                { label: "平台可扩展性", b: "中等", r: "极高" }
              ].map((row, i) => (
                <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-6 text-slate-500">{row.label}</td>
                  <td className="p-6 text-slate-900">{row.b}</td>
                  <td className="p-6 text-blue-600">{row.r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 p-8 bg-blue-600 rounded-[2rem] text-white flex items-center justify-between">
          <p className="text-lg font-bold italic">
            "Rubin 的设计目标是把 AI 推理成本降低到原来的 1/10。"
          </p>
          <ArrowUpRight className="w-8 h-8 opacity-50" />
        </div>
      </section>

      {/* Summary */}
      <section>
        <div className="p-12 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Info className="w-64 h-64 text-blue-400" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold tracking-tight mb-8">📌 总结</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-400">Rubin GPU</h4>
                    <p className="text-sm text-slate-300 font-bold">最多 288 GB HBM4 + 极高 NVFP4 性能 (~50 PFLOPS)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-400">Vera CPU</h4>
                    <p className="text-sm text-slate-300 font-bold">88 ARM 核心协同 CPU + Fast NVLink</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-400">NVLink 6</h4>
                    <p className="text-sm text-slate-300 font-bold">系统级高速互联，减少通信瓶颈</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-400">系统级</h4>
                    <p className="text-sm text-slate-300 font-bold">达到 ExaFLOPS 可扩展能力与极低令牌成本</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-12 text-slate-400 italic font-bold border-l-2 border-blue-500 pl-6">
              Vera Rubin 是一套为大规模 AI 推理与训练集群优化的超高性能平台。
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function CheckCircle2({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M20 6 9 17l-5-5"/>
    </svg>
  );
}
