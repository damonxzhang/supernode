import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, AlertTriangle, XCircle, Calculator, 
  Zap, Thermometer, BarChart3, ClipboardCheck, Lightbulb,
  Globe, TrendingUp, Box
} from 'lucide-react';

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white border border-slate-200 rounded-3xl p-8 shadow-sm ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, variant = 'default' }: { children: React.ReactNode, variant?: 'default' | 'success' | 'warning' | 'error' }) => {
  const styles = {
    default: 'bg-slate-100 text-slate-600',
    success: 'bg-emerald-50 text-emerald-600',
    warning: 'bg-amber-50 text-amber-600',
    error: 'bg-rose-50 text-rose-600',
  };
  return (
    <span className={`px-2 py-1 rounded text-[10px] font-mono uppercase tracking-widest font-bold ${styles[variant]}`}>
      {children}
    </span>
  );
};

export default function MethodologyPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-24 pb-24"
    >
      {/* Header */}
      <section className="max-w-4xl">
        <Badge variant="success">评估框架 v1.0</Badge>
        <h1 className="text-6xl font-bold text-slate-900 tracking-tighter leading-tight mt-6 mb-8">
          AI 超节点供电改造对比<br />+ 供电评估
        </h1>
        <p className="text-xl text-slate-500 leading-relaxed font-bold">
          本评估旨在为 Sinexus 超节点部署提供科学的电力基础设施评估标准，涵盖从单柜定义到机房级改造的全流程决策支持。
        </p>
      </section>

      {/* Section 1: Current Status Benchmarking */}
      <section>
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-emerald-50 rounded-lg">
            <Globe className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">一、现状对标：传统机房 vs AI 算力中心</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-slate-50/50 border-dashed">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Box className="w-5 h-5 text-slate-400" /> 传统通用 IDC 机房水平
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">单柜功率</span>
                <span className="font-bold text-slate-900">6–10 kW</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">电压等级</span>
                <span className="font-bold text-slate-900">220V 单相</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">PDU 规格</span>
                <span className="font-bold text-slate-900">32A / 63A</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">供电方式</span>
                <span className="font-bold text-slate-900">市电 → UPS → AC PDU</span>
              </div>
              <div className="pt-4">
                <Badge variant="error">结论：设计初衷为 Web/通用服务器，非 AI</Badge>
              </div>
            </div>
          </Card>

          <Card className="bg-emerald-50/20 border-emerald-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-600" /> 主流 AI 训练中心水平
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-emerald-100 pb-2">
                <span className="text-slate-500">单柜功率</span>
                <span className="font-bold text-emerald-600">60–80 kW</span>
              </div>
              <div className="flex justify-between border-b border-emerald-100 pb-2">
                <span className="text-slate-500">电压等级</span>
                <span className="font-bold text-emerald-600">380V 三相</span>
              </div>
              <div className="flex justify-between border-b border-emerald-100 pb-2">
                <span className="text-slate-500">电流能力</span>
                <span className="font-bold text-emerald-600">200–300A</span>
              </div>
              <div className="flex justify-between border-b border-emerald-100 pb-2">
                <span className="text-slate-500">供电架构</span>
                <span className="font-bold text-emerald-600">高压配电 + 母线槽</span>
              </div>
              <div className="pt-4">
                <Badge variant="success">结论：大模型训练的现实门槛</Badge>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            "/images/supermicro-rack.png",
            "https://media.datacenterdynamics.com/media/images/Airflow_.original.jpg",
            "https://www.deltapowersolutions.com/media/images/products/Precision-cooling-RowCool-70kW-introduction1.jpg",
            "https://cdn.buttercms.com/oVIDuaddRWj6O96GTzcs"
          ].map((src, i) => (
            <div key={i} className="aspect-video rounded-2xl overflow-hidden border border-slate-200">
              <img src={src} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/50">
                <th className="p-6 text-xs font-mono uppercase tracking-widest text-slate-400">指标</th>
                <th className="p-6 text-xs font-mono uppercase tracking-widest text-slate-900">传统 IDC</th>
                <th className="p-6 text-xs font-mono uppercase tracking-widest text-emerald-600">AI 机房</th>
                <th className="p-6 text-xs font-mono uppercase tracking-widest text-slate-900">差距</th>
              </tr>
            </thead>
            <tbody className="text-sm font-bold">
              <tr className="border-b border-slate-100">
                <td className="p-6 text-slate-500">单柜功率</td>
                <td className="p-6">10 kW</td>
                <td className="p-6 text-emerald-600">70 kW</td>
                <td className="p-6">7 倍</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-6 text-slate-500">电压等级</td>
                <td className="p-6">220V 单相</td>
                <td className="p-6 text-emerald-600">380V 三相</td>
                <td className="p-6">体系升级</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-6 text-slate-500">电流能力</td>
                <td className="p-6">63A</td>
                <td className="p-6 text-emerald-600">250A</td>
                <td className="p-6">4 倍</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-6 text-slate-500">UPS 容量</td>
                <td className="p-6">300kVA</td>
                <td className="p-6 text-emerald-600">1MVA+</td>
                <td className="p-6">3 倍</td>
              </tr>
              <tr>
                <td className="p-6 text-slate-500">冷却方式</td>
                <td className="p-6">风冷</td>
                <td className="p-6 text-emerald-600">液冷</td>
                <td className="p-6">技术跨代</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 2: Why Upgrade? */}
      <section>
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-emerald-50 rounded-lg">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">二、深度论证：为什么 AI 时代必须改电？</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-6">
            <div className="p-8 bg-slate-900 rounded-[2rem] text-white">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-emerald-400" /> 算例演示：功率翻倍挑战
              </h4>
              <div className="grid grid-cols-2 gap-8 font-mono">
                <div>
                  <div className="text-slate-500 text-[10px] uppercase mb-2">传统 100 柜机房</div>
                  <div className="text-2xl font-bold">1000 kW</div>
                  <div className="text-xs text-slate-400 mt-1">100 柜 × 10kW</div>
                </div>
                <div>
                  <div className="text-emerald-500 text-[10px] uppercase mb-2">AI 超节点改造 (30柜)</div>
                  <div className="text-2xl font-bold text-emerald-400">2100 kW</div>
                  <div className="text-xs text-slate-400 mt-1">30 柜 × 70kW</div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10 text-sm text-slate-400 leading-relaxed">
                👉 <span className="text-white">结论：</span> 即使机柜数量减少 70%，总功率反而翻倍。原变压器、UPS、母线及配电柜大概率全部无法支持。
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white border border-slate-200 rounded-2xl">
                <h5 className="font-bold text-slate-900 mb-2">原因 1：GPU 功率暴涨</h5>
                <p className="text-xs text-slate-500 leading-relaxed">过去单 CPU 150W，现在单 GPU 700W+，功率结构发生根本性变化。</p>
              </div>
              <div className="p-6 bg-white border border-slate-200 rounded-2xl">
                <h5 className="font-bold text-slate-900 mb-2">原因 2：线损剧增</h5>
                <p className="text-xs text-slate-500 leading-relaxed">70kW 若用 220V 需要 318A 电流，完全不可行，必须提升电压等级。</p>
              </div>
              <div className="p-6 bg-white border border-slate-200 rounded-2xl">
                <h5 className="font-bold text-slate-900 mb-2">原因 3：PUE 恶化</h5>
                <p className="text-xs text-slate-500 leading-relaxed">不改电会导致铜损和散热压力激增，PUE 可能从 1.4 恶化至 1.7+。</p>
              </div>
              <div className="p-6 bg-white border border-slate-200 rounded-2xl">
                <h5 className="font-bold text-slate-900 mb-2">原因 4：未来持续增长</h5>
                <p className="text-xs text-slate-500 leading-relaxed">2027 趋势单卡 1kW，单柜 100kW+ 常态化，现在不升三相，2 年内必重改。</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-amber-50 border-amber-100">
              <h4 className="text-lg font-bold text-amber-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" /> 行业现实：电力瓶颈
              </h4>
              <p className="text-sm text-amber-800 leading-relaxed font-bold">
                “机房有空位，但没电力容量”已成为算力扩容的头号杀手。电力不再是辅助设施，而是算力承载的核心限制因素。
              </p>
            </Card>
            <div className="p-8 bg-emerald-600 rounded-[2rem] text-white">
              <h4 className="text-lg font-bold mb-4">核心论证句</h4>
              <p className="text-sm leading-relaxed opacity-90 font-bold italic">
                “当前主流 AI 训练机房单柜功率已达 60–80kW，是传统 IDC 的 6–8 倍。传统 220V 单相供电体系无法承载高电流负载，必须升级至 380V 三相或直流母线架构。”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Target Definition */}
      <section>
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-emerald-50 rounded-lg">
            <Zap className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">三、目标定义：支持等级划分</h2>
        </div>
        
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/50">
                <th className="p-6 text-xs font-mono uppercase tracking-widest text-slate-400">档位</th>
                <th className="p-6 text-xs font-mono uppercase tracking-widest text-slate-900">单柜 IT 功率</th>
                <th className="p-6 text-xs font-mono uppercase tracking-widest text-slate-900">典型场景</th>
                <th className="p-6 text-xs font-mono uppercase tracking-widest text-emerald-600">建议供电等级</th>
              </tr>
            </thead>
            <tbody className="text-sm font-bold">
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="p-6">A</td>
                <td className="p-6">≤ 15kW</td>
                <td className="p-6 text-slate-500">传统通用算力</td>
                <td className="p-6">220V 单相</td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="p-6">B</td>
                <td className="p-6">20–40kW</td>
                <td className="p-6 text-slate-500">高密 GPU</td>
                <td className="p-6">380V 三相</td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors bg-emerald-50/20">
                <td className="p-6">C</td>
                <td className="p-6">60–80kW</td>
                <td className="p-6 text-slate-500">标准超节点</td>
                <td className="p-6 text-emerald-600">380V 三相 + 高电流母线</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-6">D</td>
                <td className="p-6">100–150kW</td>
                <td className="p-6 text-slate-500">训练级超节点</td>
                <td className="p-6">380V 三相 / HVDC / 液冷深度改造</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 p-6 bg-amber-50 border border-amber-100 rounded-2xl flex gap-4 items-start">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-900 font-bold leading-relaxed">
            注意：若目标为 C 或 D 级“真正超节点”，供电系统必须进行彻底的重新核算，传统机房架构通常无法直接承载。
          </p>
        </div>
      </section>

      {/* Section 4: 6 Core Dimensions */}
      <section>
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-emerald-50 rounded-lg">
            <BarChart3 className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">四、供电系统改造的 6 大核心评估维度</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 1. Capacity */}
          <Card>
            <div className="flex items-center gap-2 mb-6">
              <Calculator className="w-5 h-5 text-emerald-600" />
              <h3 className="text-xl font-bold text-slate-900">① 机房总容量评估</h3>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl mb-6 font-mono text-sm">
              <div className="text-slate-400 mb-2 uppercase text-[10px]">计算公式</div>
              <div className="text-slate-900">所需总容量 = 数量 × 单柜功率 ÷ 0.7</div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 border border-slate-100 rounded-lg">
                <span className="text-sm font-bold text-slate-500">&lt; 500kW</span>
                <Badge variant="error">❌ 不适合</Badge>
              </div>
              <div className="flex justify-between items-center p-3 border border-slate-100 rounded-lg">
                <span className="text-sm font-bold text-slate-500">500kW – 1MW</span>
                <Badge variant="warning">⚠ 少量部署</Badge>
              </div>
              <div className="flex justify-between items-center p-3 border border-emerald-100 bg-emerald-50/30 rounded-lg">
                <span className="text-sm font-bold text-slate-900">≥ 1MW</span>
                <Badge variant="success">✔ 可规划</Badge>
              </div>
            </div>
          </Card>

          {/* 2. Voltage */}
          <Card>
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-emerald-600" />
              <h3 className="text-xl font-bold text-slate-900">② 电压等级匹配</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-xl">
                <div className="text-[10px] font-mono text-slate-400 uppercase mb-2">220V 单相</div>
                <div className="text-slate-900 font-bold">直接淘汰 (仅支持 ≤15kW)</div>
              </div>
              <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
                <div className="text-[10px] font-mono text-emerald-600 uppercase mb-2">380V 三相</div>
                <div className="text-slate-900 font-bold">标准配置 (支持 ≤80kW)</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <div className="text-[10px] font-mono text-slate-400 uppercase mb-2">800V HVDC</div>
                <div className="text-slate-900 font-bold">未来演进 (支持 ≥100kW)</div>
              </div>
            </div>
          </Card>

          {/* 3. Current */}
          <Card>
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-emerald-600" />
              <h3 className="text-xl font-bold text-slate-900">③ 母线 / PDU 电流能力</h3>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl mb-6 font-mono text-sm">
              <div className="text-slate-400 mb-2 uppercase text-[10px]">电流计算 (70kW @ 380V)</div>
              <div className="text-slate-900">70000 ÷ (380 × 0.9) ≈ 205A</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 border border-slate-100 rounded-lg text-center">
                <div className="text-xs text-slate-400 mb-1">63A</div>
                <XCircle className="w-4 h-4 text-rose-500 mx-auto" />
              </div>
              <div className="p-3 border border-slate-100 rounded-lg text-center">
                <div className="text-xs text-slate-400 mb-1">125A</div>
                <AlertTriangle className="w-4 h-4 text-amber-500 mx-auto" />
              </div>
              <div className="p-3 border border-emerald-100 bg-emerald-50/30 rounded-lg text-center col-span-2">
                <div className="text-xs text-emerald-600 mb-1">≥ 250A</div>
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" />
              </div>
            </div>
          </Card>

          {/* 4. UPS */}
          <Card>
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-5 h-5 text-emerald-600" />
              <h3 className="text-xl font-bold text-slate-900">④ UPS 容量匹配</h3>
            </div>
            <div className="space-y-6">
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase mb-2">传统 IDC 现状</div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-300 w-1/3"></div>
                </div>
                <div className="text-xs text-slate-500 mt-2">200–500kVA</div>
              </div>
              <div>
                <div className="text-xs font-mono text-emerald-600 uppercase mb-2">AI IDC 需求</div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-full"></div>
                </div>
                <div className="text-xs text-emerald-600 mt-2">≥ 1MVA (必须扩容)</div>
              </div>
            </div>
          </Card>

          {/* 5. Architecture */}
          <Card>
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-emerald-600" />
              <h3 className="text-xl font-bold text-slate-900">⑤ 供电架构演进</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold shrink-0">1</div>
                <div>
                  <div className="text-sm font-bold text-slate-900">380V 直接输入</div>
                  <div className="text-xs text-slate-500">减少转换级数，提升效率</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold shrink-0">2</div>
                <div>
                  <div className="text-sm font-bold text-slate-900">48V 直流母线</div>
                  <div className="text-xs text-slate-500">支持更高功率密度</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-[10px] font-bold text-emerald-600 shrink-0">3</div>
                <div>
                  <div className="text-sm font-bold text-emerald-600">800V HVDC</div>
                  <div className="text-xs text-emerald-500">未来超节点核心方向</div>
                </div>
              </div>
            </div>
          </Card>

          {/* 6. Cooling Linkage */}
          <Card>
            <div className="flex items-center gap-2 mb-6">
              <Thermometer className="w-5 h-5 text-emerald-600" />
              <h3 className="text-xl font-bold text-slate-900">⑥ 散热与供电联动</h3>
            </div>
            <div className="p-6 bg-slate-900 rounded-2xl text-white">
              <div className="text-emerald-400 font-mono text-2xl mb-2 font-bold">1 kW 电 = 1 kW 热</div>
              <p className="text-sm text-slate-400 leading-relaxed font-bold">
                供电改到 70kW/柜，冷却系统必须同步改造。风冷极限约为 30–35kW，超过此值必须采用液冷。
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Section 5: Comparison Schemes */}
      <section>
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-emerald-50 rounded-lg">
            <ClipboardCheck className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">五、改造对比方案</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Scheme 1 */}
          <div className="flex flex-col border border-slate-200 rounded-3xl overflow-hidden bg-white">
            <div className="p-8 border-b border-slate-100">
              <Badge>方案 1</Badge>
              <h4 className="text-xl font-bold text-slate-900 mt-4">轻度改造 (过渡)</h4>
              <div className="text-emerald-600 font-mono text-sm mt-2">30–40kW / 柜</div>
            </div>
            <div className="p-8 flex-grow space-y-6">
              <div className="space-y-3">
                <div className="text-[10px] font-mono text-slate-400 uppercase">改造内容</div>
                <ul className="text-sm space-y-2 font-bold text-slate-600">
                  <li>• 升级到 380V 三相</li>
                  <li>• 更换 PDU 至 125A</li>
                  <li>• UPS 小幅扩容</li>
                  <li>• 强化风冷</li>
                </ul>
              </div>
              <div className="pt-6 border-t border-slate-50">
                <div className="text-xs font-bold text-emerald-600 mb-1">优点：投入低，适合推理型</div>
                <div className="text-xs font-bold text-rose-500">缺点：不支持 70kW</div>
              </div>
            </div>
          </div>

          {/* Scheme 2 */}
          <div className="flex flex-col border-2 border-emerald-500 rounded-3xl overflow-hidden bg-white shadow-xl scale-105 z-10">
            <div className="p-8 border-b border-emerald-100 bg-emerald-50/30">
              <Badge variant="success">方案 2</Badge>
              <h4 className="text-xl font-bold text-slate-900 mt-4">标准 AI 超节点</h4>
              <div className="text-emerald-600 font-mono text-sm mt-2">70kW / 柜</div>
            </div>
            <div className="p-8 flex-grow space-y-6">
              <div className="space-y-3">
                <div className="text-[10px] font-mono text-slate-400 uppercase">改造内容</div>
                <ul className="text-sm space-y-2 font-bold text-slate-600">
                  <li>• 新增三相 250A 母线</li>
                  <li>• UPS ≥ 1MVA</li>
                  <li>• 液冷系统</li>
                  <li>• 高密度机柜</li>
                </ul>
              </div>
              <div className="pt-6 border-t border-emerald-50">
                <div className="text-xs font-bold text-slate-900 mb-1">投资：8,000–12,000 元/kW</div>
                <div className="text-xs font-bold text-emerald-600">适合：中型 AI 训练中心</div>
              </div>
            </div>
          </div>

          {/* Scheme 3 */}
          <div className="flex flex-col border border-slate-200 rounded-3xl overflow-hidden bg-white">
            <div className="p-8 border-b border-slate-100">
              <Badge>方案 3</Badge>
              <h4 className="text-xl font-bold text-slate-900 mt-4">新建 AIDC 级</h4>
              <div className="text-emerald-600 font-mono text-sm mt-2">100kW+ / 柜</div>
            </div>
            <div className="p-8 flex-grow space-y-6">
              <div className="space-y-3">
                <div className="text-[10px] font-mono text-slate-400 uppercase">改造内容</div>
                <ul className="text-sm space-y-2 font-bold text-slate-600">
                  <li>• 800V HVDC</li>
                  <li>• 全液冷</li>
                  <li>• 无中背板架构</li>
                  <li>• 母线槽直供</li>
                </ul>
              </div>
              <div className="pt-6 border-t border-slate-50">
                <div className="text-xs font-bold text-slate-900 mb-1">投资：最高</div>
                <div className="text-xs font-bold text-emerald-600">适合：超大模型训练</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Strategic Advice */}
      <section>
        <div className="p-12 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Lightbulb className="w-64 h-64 text-emerald-400" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-emerald-500/20 rounded-lg">
                <Lightbulb className="w-6 h-6 text-emerald-400" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">六、给 Sinexus 的战略建议</h2>
            </div>
            
            <div className="max-w-3xl space-y-12">
              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                <h4 className="text-xl font-bold text-emerald-400 mb-4">建议功率定义：40–50kW / 柜</h4>
                <div className="space-y-4 text-slate-300 font-bold leading-relaxed">
                  <p>1. <span className="text-white">适配性强</span>：可适配大部分存量机房的电力冗余，无需进行毁灭性基建改造。</p>
                  <p>2. <span className="text-white">成本可控</span>：改造成本处于运营商和 IDC 客户的心理接受区间。</p>
                  <p>3. <span className="text-white">落地优势</span>：在推理型超节点市场中，该功率段是目前最具性价比的落地选择。</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                  <div className="text-emerald-400 font-bold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> 未来 3 年战略判断
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-bold">
                    能提供 70kW/柜以上的机房 = AI 基础设施；仍停留在 10kW 的机房 = 边缘推理/传统托管。没有中间态。
                  </p>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <div className="text-slate-300 font-bold mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" /> 行业演进
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-bold">
                    电力已成为算力扩容的真正瓶颈。核心不是服务器问题，而是电网承载问题。
                  </p>
                </div>
              </div>
              
              <p className="text-slate-400 italic font-bold">
                “如果直接冲 70kW，市场将仅限于少数 AI 新建机房。40-50kW 是目前切入存量市场的黄金分割点。”
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
