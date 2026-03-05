import { Cpu, Zap, Thermometer, Network, Globe, TrendingUp, ShieldCheck, Database } from 'lucide-react';

export const REPORT_DATA = {
  hero: {
    title: "超节点智能",
    subtitle: "高密度AI算力基础设施（超节点）深度调研报告",
    abstract: "超节点代表 AI 基础设施从“服务器堆叠”向“算力单元整体化”的跃迁，是面向万亿参数大模型时代的核心算力组织形态。其通过高密度机柜与高带宽互联架构，实现算力、网络、电力与散热的系统级协同优化。"
  },
  market: {
    drivers: [
      {
        icon: Cpu,
        title: "大模型崛起",
        desc: "DeepSeek、通义千问、Kimi-K2等大模型的快速发展，对算力保障的需求急剧增加。",
        stat: "2倍需求"
      },
      {
        icon: Database,
        title: "高密度需求",
        desc: "单机柜功率从传统3kW增长到目前的100kW以上，AI驱动下密度持续攀升。",
        stat: "132kW+"
      },
      {
        icon: Zap,
        title: "能耗挑战",
        desc: "预计到2030年，美国数据中心功耗将达到35GW，对供电和散热提出更高要求。",
        stat: "35GW"
      }
    ]
  },
  solutions: [
    {
      id: "nvidia",
      name: "NVIDIA GB200 NVL72",
      origin: "国际主流",
      image: "https://regmedia.co.uk/2024/03/20/nvidia_gb200_nvl72_front.jpg",
      architectureImage: "https://www.deltacomputer.com/media/wysiwyg/NVIDIA-GB200NVL72/nvl72_diagram_all16.png",
      networkArchitecture: {
        topology: "72 GPU 全 NVLink 互联架构",
        details: "由 18 个 Compute Tray + 9 个 NVLink Switch Tray 组成。NVLink 5 提供高达 TB/s 级 GPU 通信带宽，构建单机大 GPU 通信域，带宽达 130 TB/s 级别。",
        bandwidth: "1.8TB/s (GPU-to-GPU)"
      },
      features: [
        "36个Grace CPU + 72个Blackwell GPU",
        "单机柜提供Exascale级计算能力",
        "全液冷设计 (115kW IT负载)",
        "第五代 NVLink (1.8TB/s)"
      ],
      stats: { 算力: "Exascale", 功耗: "132kW", 互联: "NVLink" }
    },
    {
      id: "huawei",
      name: "华为 Atlas 950 SuperPoD",
      origin: "国内主流",
      image: "/images/atlas-950-superpod.png",
      architectureImage: "/images/atlas-950-comparison.png",
      networkArchitecture: {
        topology: "UB-Mesh 递归直连拓扑",
        details: "采用灵衢 (UnifiedBus) 协议，支持最大 8192 卡无收敛全互联。通过正交架构实现零线缆电互联，点对点延迟低至 2.1μs。",
        bandwidth: "16.3 PB/s (总互联带宽)"
      },
      features: [
        "昇腾 950DT 芯片组 (HiZQ 2.0)",
        "16 EFLOPS FP4 / 8 EFLOPS FP8 算力",
        "1152 TB 统一地址空间内存",
        "全液冷散热 (零漏液设计)"
      ],
      stats: { 算力: "16 EFLOPS", 功耗: "超高密度", 互联: "UnifiedBus" }
    },
    {
      id: "google",
      name: "Google TPU 系列",
      origin: "国际主流",
      image: "https://substackcdn.com/image/fetch/%24s_%21bCe_%21%2Cf_auto%2Cq_auto%3Agood%2Cfl_progressive%3Asteep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F225337ce-79f4-480b-90e4-98514596c45d_937x552.png",
      architectureImage: "https://storage.googleapis.com/gweb-cloudblog-publish/images/tpu-2x0vv.max-600x600.PNG",
      networkArchitecture: {
        topology: "4-Way Rail-Aligned + OCS",
        details: "基于 TPU ASIC 的高密集计算集群。采用光学互联 (MEMS OCS) 实现大规模芯片级连接，提供无阻塞流量，优化大规模矩阵运算同步效率。",
        bandwidth: "3.2 Tbps (总带宽)"
      },
      features: [
        "脉动阵列 (Systolic Array) 矩阵优化",
        "3.2 Tbps GPU到GPU 流量带宽",
        "4路轨对齐网络架构",
        "深度集成 TensorFlow/JAX 生态"
      ],
      stats: { 算力: "ASIC 优化", 功耗: "高", 互联: "RoCE" }
    },
    {
      id: "alibaba",
      name: "阿里云磐久 AL128",
      origin: "国内主流",
      image: "https://pic3.zhimg.com/v2-0a6013265eafbdc1059a1c21dde3d826_1440w.jpg",
      architectureImage: "https://yqintl.alicdn.com/f48a3622bbe0416558c5a4a5783fb134661c0042.png",
      networkArchitecture: {
        topology: "ScaleUp + ScaleOut 混合拓扑",
        details: "展现异质节点互联。支持 ScaleUp 正交结构、CXL Pool 与 Switch 节点，实现数据中心内资源与内存池化，点对点延迟低至 2μs。",
        bandwidth: "800Gbps (单链路)"
      },
      features: [
        "单柜支持 128 卡超高密度",
        "无中背板正交架构设计",
        "800Gbps 低延迟网络系统",
        "全液冷散热技术"
      ],
      stats: { 算力: "128卡/柜", 功耗: "高", 互联: "AliNOS" }
    },
    {
      id: "luisuan",
      name: "绿算技术国产超节点",
      origin: "国内主流",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
      architectureImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
      networkArchitecture: {
        topology: "xPU Scale-Out 跨柜互联架构",
        details: "单计算单元集成 32 颗 xPU，通过 PCIe Switch 实现内部高速互联；每单元配置 4 颗 CPU 及 4 路高带宽 NIC；跨柜采用 400G Ethernet 或 InfiniBand 组网，实现大规模集群扩展。",
        bandwidth: "400G (单路 NIC)"
      },
      features: [
        "单柜集成 128 张 xPU 算力卡",
        "FP16 算力高达 128 PFLOPS",
        "全解耦架构，支持 CXL 内存扩展",
        "1U 高密 Tray 设计，全液冷散热"
      ],
      stats: { 算力: "128 PFLOPS", 功耗: "55-80kW", 互联: "PCIe/IB" }
    }
  ],
  tech: {
    cooling: [
      { name: "冷板式液冷", type: "直接接触散热", efficiency: "高", usage: "主流部署" },
      { name: "浸没式液冷", type: "完全浸没散热", efficiency: "极高", usage: "下一代演进" },
      { name: "芯片级液冷", type: "微流道刻蚀", efficiency: "理论极限", usage: "前沿研发" }
    ],
    power: [
      { name: "54V 直流供电", desc: "目前AI服务器板级高效供电的主流标准", status: "现行标准" },
      { name: "800V 高压直流 (HVDC)", desc: "NVIDIA引领的1MW+机架供电演进方向", status: "新兴趋势 (2027)" }
    ]
  },
  references: [
    { name: "NVIDIA GB200 NVL72 官方介绍", type: "官方产品页", url: "https://www.nvidia.com/en-us/data-center/gb200-nvl72/" },
    { name: "NVIDIA GB200 NVL72 Datasheet PDF", type: "官方文档", url: "https://www.hpe.com/psnow/doc/PSN1014890104DKEN" },
    { name: "NVIDIA GB200 NVL72 Firmware Guide", type: "官方系统文档", url: "https://docs.nvidia.com/pdf/nvis-firmware.pdf" },
    { name: "NVIDIA NVL72 技术博客", type: "官方技术博客", url: "https://developer.nvidia.com/blog/nvidia-gb200-nvl72-delivers-trillion-parameter-llm-training-and-real-time-inference/" },
    { name: "Huawei CloudMatrix384 官方发布", type: "官方新闻", url: "https://www.huaweicloud.com/intl/zh-cn/news/20250424094932570.html" },
    { name: "2025 AI 网络技术白皮书", type: "官方行业白皮书", url: "https://www.dyxnet.com.cn/cn/wp-content/uploads/sites/4/2025/08/2025AI%E7%BD%91%E7%BB%9C%E6%8A%80%E6%9C%AF%E7%99%BD%E7%9A%AE%E4%B9%A6.pdf" },
    { name: "CloudMatrix384 架构论文", type: "学术论文", url: "https://arxiv.org/abs/2506.12708" },
    { name: "谷歌 TPU 早期白皮书（架构参考）", type: "学术论文", url: "https://arxiv.org/abs/1706.03251" },
    { name: "阿里云 ACCL 通信库文档", type: "官方技术文档", url: "https://help.aliyun.com/document_detail/276039.html" }
  ]
};
