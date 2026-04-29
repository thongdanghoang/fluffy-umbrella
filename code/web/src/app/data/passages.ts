import {Passage} from "../types";

/**
 * A practice passage about a daily routine.
 * ~44 words covering: single chars, multi-char compounds,
 * 3-char words (服务员), repeated particles (的/了/我),
 * and 2 Erhua cases (那儿, 一会儿).
 */
export const defaultPassage: Passage = [
    // 你好 (nǐ hǎo - Xin chào)
    {
        segments: [
            {chars: "你", pinyin: "ni", display: "nǐ"},
            {chars: "好", pinyin: "hao", display: "hǎo"},
        ],
    },
    // 谢谢 (xièxie - Cảm ơn)
    {
        segments: [
            {chars: "谢", pinyin: "xie", display: "xiè"},
            {chars: "谢", pinyin: "xie", display: "xie"},
        ],
    },
    // 不客气 (bú kèqì - Không có gì)
    {
        segments: [
            {chars: "不", pinyin: "bu", display: "bú"},
            {chars: "客", pinyin: "ke", display: "kè"},
            {chars: "气", pinyin: "qi", display: "qì"},
        ],
    },
    // 再见 (zàijiàn - Tạm biệt)
    {
        segments: [
            {chars: "再", pinyin: "zai", display: "zài"},
            {chars: "见", pinyin: "jian", display: "jiàn"},
        ],
    },
    // 对不起 (duìbùqǐ - Xin lỗi)
    {
        segments: [
            {chars: "对", pinyin: "dui", display: "duì"},
            {chars: "不", pinyin: "bu", display: "bù"},
            {chars: "起", pinyin: "qi", display: "qǐ"},
        ],
    },
    // 是 (shì - Phải)
    {
        segments: [
            {chars: "是", pinyin: "shi", display: "shì"},
        ],
    },
    // 不是 (búshì - Không phải)
    {
        segments: [
            {chars: "不", pinyin: "bu", display: "bú"},
            {chars: "是", pinyin: "shi", display: "shì"},
        ],
    },
    // 我 (wǒ - Tôi)
    {
        segments: [
            {chars: "我", pinyin: "wo", display: "wǒ"},
        ],
    },
    // 你 (nǐ - Bạn)
    {
        segments: [
            {chars: "你", pinyin: "ni", display: "nǐ"},
        ],
    },
    // 他 (tā - Anh ấy/Hắn)
    {
        segments: [
            {chars: "他", pinyin: "ta", display: "tā"},
        ],
    },
    // 她 (tā - Cô ấy/Cô)
    {
        segments: [
            {chars: "她", pinyin: "ta", display: "tā"},
        ],
    },
    // 它 (tā - Nó)
    {
        segments: [
            {chars: "它", pinyin: "ta", display: "tā"},
        ],
    },
    // 的 (de - Của)
    {
        segments: [
            {chars: "的", pinyin: "de", display: "de"},
        ],
    },
    // 这 (zhè - Cái này)
    {
        segments: [
            {chars: "这", pinyin: "zhe", display: "zhè"},
        ],
    },
    // 那 (nà - Cái kia)
    {
        segments: [
            {chars: "那", pinyin: "na", display: "nà"},
        ],
    },
    // 什么 (shénme - Cái gì)
    {
        segments: [
            {chars: "什", pinyin: "shen", display: "shén"},
            {chars: "么", pinyin: "me", display: "me"},
        ],
    },
    // 时候 (shíhou - Khi nào)
    {
        segments: [
            {chars: "时", pinyin: "shi", display: "shí"},
            {chars: "候", pinyin: "hou", display: "hou"},
        ],
    },
    // 在 (zài - Ở)
    {
        segments: [
            {chars: "在", pinyin: "zai", display: "zài"},
        ],
    },
    // 很 (hěn - Rất)
    {
        segments: [
            {chars: "很", pinyin: "hen", display: "hěn"},
        ],
    },
    // 我叫 (wǒ jiào - Tôi tên là)
    {
        segments: [
            {chars: "我", pinyin: "wo", display: "wǒ"},
            {chars: "叫", pinyin: "jiao", display: "jiào"},
        ],
    },
    // 你叫什么名字 (nǐ jiào shénme míngzi - Bạn tên gì?)
    {
        segments: [
            {chars: "你", pinyin: "ni", display: "nǐ"},
            {chars: "叫", pinyin: "jiao", display: "jiào"},
            {chars: "什", pinyin: "shen", display: "shén"},
            {chars: "么", pinyin: "me", display: "me"},
            {chars: "名", pinyin: "ming", display: "míng"},
            {chars: "字", pinyin: "zi", display: "zi"},
        ],
    },
    // 来自 (láizi - Đến từ)
    {
        segments: [
            {chars: "来", pinyin: "lai", display: "lái"},
            {chars: "自", pinyin: "zi", display: "zi"},
        ],
    },
    // 中国 (zhōngguó - Trung Quốc)
    {
        segments: [
            {chars: "中", pinyin: "zhong", display: "zhōng"},
            {chars: "国", pinyin: "guo", display: "guó"},
        ],
    },
    // 英语 (yīngyǔ - Tiếng Anh)
    {
        segments: [
            {chars: "英", pinyin: "ying", display: "yīng"},
            {chars: "语", pinyin: "yu", display: "yǔ"},
        ],
    },
    // 会说 (huì shuō - Biết nói)
    {
        segments: [
            {chars: "会", pinyin: "hui", display: "huì"},
            {chars: "说", pinyin: "shuo", display: "shuō"},
        ],
    },
    // 一点 (yīdiǎn - Một ít)
    {
        segments: [
            {chars: "一", pinyin: "yi", display: "yī"},
            {chars: "点", pinyin: "dian", display: "diǎn"},
        ],
    },
    // 多少 (duōshǎo - Bao nhiêu)
    {
        segments: [
            {chars: "多", pinyin: "duo", display: "duō"},
            {chars: "少", pinyin: "shao", display: "shǎo"},
        ],
    },
    // 多少钱 (duōshǎo qián - Bao nhiêu tiền)
    {
        segments: [
            {chars: "多", pinyin: "duo", display: "duō"},
            {chars: "少", pinyin: "shao", display: "shǎo"},
            {chars: "钱", pinyin: "qian", display: "qián"},
        ],
    },
    // 请 (qǐng - Xin)
    {
        segments: [
            {chars: "请", pinyin: "qing", display: "qǐng"},
        ],
    },
    // 给 (gěi - Cho)
    {
        segments: [
            {chars: "给", pinyin: "gei", display: "gěi"},
        ],
    },
    // 水 (shuǐ - Nước)
    {
        segments: [
            {chars: "水", pinyin: "shui", display: "shuǐ"},
        ],
    },
    // 茶 (chá - Trà)
    {
        segments: [
            {chars: "茶", pinyin: "cha", display: "chá"},
        ],
    },
    // 咖啡 (kāfēi - Cà phê)
    {
        segments: [
            {chars: "咖", pinyin: "ka", display: "kā"},
            {chars: "啡", pinyin: "fei", display: "fēi"},
        ],
    },
    // 吃 (chī - Ăn)
    {
        segments: [
            {chars: "吃", pinyin: "chi", display: "chī"},
        ],
    },
    // 饭 (fàn - Cơm)
    {
        segments: [
            {chars: "饭", pinyin: "fan", display: "fàn"},
        ],
    },
    // 餐厅 (cāntīng - Nhà hàng)
    {
        segments: [
            {chars: "餐", pinyin: "can", display: "cān"},
            {chars: "厅", pinyin: "ting", display: "tīng"},
        ],
    },
    // 很好 (hěn hǎo - Rất tốt)
    {
        segments: [
            {chars: "很", pinyin: "hen", display: "hěn"},
            {chars: "好", pinyin: "hao", display: "hǎo"},
        ],
    },
    // 喜欢 (xǐhuan - Thích)
    {
        segments: [
            {chars: "喜", pinyin: "xi", display: "xǐ"},
            {chars: "欢", pinyin: "huan", display: "huan"},
        ],
    },
    // 地图 (dìtú - Bản đồ)
    {
        segments: [
            {chars: "地", pinyin: "di", display: "dì"},
            {chars: "图", pinyin: "tu", display: "tú"},
        ],
    },
    // 地方 (dìfāng - Địa điểm)
    {
        segments: [
            {chars: "地", pinyin: "di", display: "dì"},
            {chars: "方", pinyin: "fang", display: "fāng"},
        ],
    },
    // 街道 (jiēdào - Đường phố)
    {
        segments: [
            {chars: "街", pinyin: "jie", display: "jiē"},
            {chars: "道", pinyin: "dao", display: "dào"},
        ],
    },
    // 位置 (wèizhi - Vị trí)
    {
        segments: [
            {chars: "位", pinyin: "wei", display: "wèi"},
            {chars: "置", pinyin: "zhi", display: "zhi"},
        ],
    },
    // 方向 (fāngxiàng - Hướng đi)
    {
        segments: [
            {chars: "方", pinyin: "fang", display: "fāng"},
            {chars: "向", pinyin: "xiang", display: "xiàng"},
        ],
    },
    // 路口 (lùkǒu - Ngã tư đường)
    {
        segments: [
            {chars: "路", pinyin: "lu", display: "lù"},
            {chars: "口", pinyin: "kou", display: "kǒu"},
        ],
    },
    // 十字路口 (shízì lùkǒu - Ngã tư)
    {
        segments: [
            {chars: "十", pinyin: "shi", display: "shí"},
            {chars: "字", pinyin: "zi", display: "zì"},
            {chars: "路", pinyin: "lu", display: "lù"},
            {chars: "口", pinyin: "kou", display: "kǒu"},
        ],
    },
    // 路标 (lùbiāo - Biển chỉ dẫn)
    {
        segments: [
            {chars: "路", pinyin: "lu", display: "lù"},
            {chars: "标", pinyin: "biao", display: "biāo"},
        ],
    },
    // 指南针 (zhǐnánzhēn - La bàn)
    {
        segments: [
            {chars: "指", pinyin: "zhi", display: "zhǐ"},
            {chars: "南", pinyin: "nan", display: "nán"},
            {chars: "针", pinyin: "zhen", display: "zhēn"},
        ],
    },
    // 路线 (lùxiàn - Lộ trình, tuyến đường)
    {
        segments: [
            {chars: "路", pinyin: "lu", display: "lù"},
            {chars: "线", pinyin: "xian", display: "xiàn"},
        ],
    },
    // 马路 (mǎlù - Đường phố)
    {
        segments: [
            {chars: "马", pinyin: "ma", display: "mǎ"},
            {chars: "路", pinyin: "lu", display: "lù"},
        ],
    },
    // 步行街 (bùxíng jiē - Phố đi bộ)
    {
        segments: [
            {chars: "步", pinyin: "bu", display: "bù"},
            {chars: "行", pinyin: "xing", display: "xíng"},
            {chars: "街", pinyin: "jie", display: "jiē"},
        ],
    },
    // 大街 (dàjiē - Đại lộ)
    {
        segments: [
            {chars: "大", pinyin: "da", display: "dà"},
            {chars: "街", pinyin: "jie", display: "jiē"},
        ],
    },
    // 小巷 (xiǎo xiàng - Ngõ nhỏ)
    {
        segments: [
            {chars: "小", pinyin: "xiao", display: "xiǎo"},
            {chars: "巷", pinyin: "xiang", display: "xiàng"},
        ],
    },
    // 市中心 (shì zhōngxīn - Trung tâm thành phố)
    {
        segments: [
            {chars: "市", pinyin: "shi", display: "shì"},
            {chars: "中", pinyin: "zhong", display: "zhōng"},
            {chars: "心", pinyin: "xin", display: "xīn"},
        ],
    },
    // 地铁站 (dìtiězhàn - Trạm xe điện ngầm)
    {
        segments: [
            {chars: "地", pinyin: "di", display: "dì"},
            {chars: "铁", pinyin: "tie", display: "tiě"},
            {chars: "站", pinyin: "zhan", display: "zhàn"},
        ],
    },
    // 公交车站 (gōngjiāo chē zhàn - Bến xe buýt)
    {
        segments: [
            {chars: "公", pinyin: "gong", display: "gōng"},
            {chars: "交", pinyin: "jiao", display: "jiāo"},
            {chars: "车", pinyin: "che", display: "chē"},
            {chars: "站", pinyin: "zhan", display: "zhàn"},
        ],
    },
    // 火车站 (huǒchē zhàn - Ga xe lửa)
    {
        segments: [
            {chars: "火", pinyin: "huo", display: "huǒ"},
            {chars: "车", pinyin: "che", display: "chē"},
            {chars: "站", pinyin: "zhan", display: "zhàn"},
        ],
    },
    // 机场 (jīchǎng - Sân bay)
    {
        segments: [
            {chars: "机", pinyin: "ji", display: "jī"},
            {chars: "场", pinyin: "chang", display: "chǎng"},
        ],
    },
    // 港口 (gǎngkǒu - Cảng biển)
    {
        segments: [
            {chars: "港", pinyin: "gang", display: "gǎng"},
            {chars: "口", pinyin: "kou", display: "kǒu"},
        ],
    },
    // 公园 (gōngyuán - Công viên)
    {
        segments: [
            {chars: "公", pinyin: "gong", display: "gōng"},
            {chars: "园", pinyin: "yuan", display: "yuán"},
        ],
    },
    // 商店 (shāngdiàn - Cửa hàng)
    {
        segments: [
            {chars: "商", pinyin: "shang", display: "shāng"},
            {chars: "店", pinyin: "dian", display: "diàn"},
        ],
    },
    // 餐馆 (cānguǎn - Nhà hàng)
    {
        segments: [
            {chars: "餐", pinyin: "can", display: "cān"},
            {chars: "馆", pinyin: "guan", display: "guǎn"},
        ],
    },
    // 酒店 (jiǔdiàn - Khách sạn)
    {
        segments: [
            {chars: "酒", pinyin: "jiu", display: "jiǔ"},
            {chars: "店", pinyin: "dian", display: "diàn"},
        ],
    },
    // 医院 (yīyuàn - Bệnh viện)
    {
        segments: [
            {chars: "医", pinyin: "yi", display: "yī"},
            {chars: "院", pinyin: "yuan", display: "yuàn"},
        ],
    },
    // 学校 (xuéxiào - Trường học)
    {
        segments: [
            {chars: "学", pinyin: "xue", display: "xué"},
            {chars: "校", pinyin: "xiao", display: "xiào"},
        ],
    },
    // 图书馆 (túshūguǎn - Thư viện)
    {
        segments: [
            {chars: "图", pinyin: "tu", display: "tú"},
            {chars: "书", pinyin: "shu", display: "shū"},
            {chars: "馆", pinyin: "guan", display: "guǎn"},
        ],
    },
    // 邮局 (yóujú - Bưu điện)
    {
        segments: [
            {chars: "邮", pinyin: "you", display: "yóu"},
            {chars: "局", pinyin: "ju", display: "jú"},
        ],
    },
    // 警察局 (jǐngchájú - Đồn cảnh sát)
    {
        segments: [
            {chars: "警", pinyin: "jing", display: "jǐng"},
            {chars: "察", pinyin: "cha", display: "chá"},
            {chars: "局", pinyin: "ju", display: "jú"},
        ],
    },
    // 旅游景点 (lǚyóu jǐngdiǎn - Điểm du lịch)
    {
        segments: [
            {chars: "旅", pinyin: "lv", display: "lǚ"},
            {chars: "游", pinyin: "you", display: "yóu"},
            {chars: "景", pinyin: "jing", display: "jǐng"},
            {chars: "点", pinyin: "dian", display: "diǎn"},
        ],
    },
    // 博物馆 (bówùguǎn - Bảo tàng)
    {
        segments: [
            {chars: "博", pinyin: "bo", display: "bó"},
            {chars: "物", pinyin: "wu", display: "wù"},
            {chars: "馆", pinyin: "guan", display: "guǎn"},
        ],
    },
    // 行政中心 (xíngzhèng zhōngxīn - Trung tâm hành chính)
    {
        segments: [
            {chars: "行", pinyin: "xing", display: "xíng"},
            {chars: "政", pinyin: "zheng", display: "zhèng"},
            {chars: "中", pinyin: "zhong", display: "zhōng"},
            {chars: "心", pinyin: "xin", display: "xīn"},
        ],
    },
    // 观光客中心 (guān guāng kè zhōng xīn - Trung tâm khách du lịch)
    {
        segments: [
            {chars: "观", pinyin: "guan", display: "guān"},
            {chars: "光", pinyin: "guang", display: "guāng"},
            {chars: "客", pinyin: "ke", display: "kè"},
            {chars: "中", pinyin: "zhong", display: "zhōng"},
            {chars: "心", pinyin: "xin", display: "xīn"},
        ],
    },
    // 餐厅 (cāntīng - Nhà hàng)
    {
        segments: [
            {chars: "餐", pinyin: "can", display: "cān"},
            {chars: "厅", pinyin: "ting", display: "tīng"},
        ],
    },
    // 咖啡馆 (kāfēiguǎn - Quán cà phê)
    {
        segments: [
            {chars: "咖", pinyin: "ka", display: "kā"},
            {chars: "啡", pinyin: "fei", display: "fēi"},
            {chars: "馆", pinyin: "guan", display: "guǎn"},
        ],
    },
    // 公共厕所 (gōnggòng cèsuǒ - Nhà vệ sinh công cộng)
    {
        segments: [
            {chars: "公", pinyin: "gong", display: "gōng"},
            {chars: "共", pinyin: "gong", display: "gòng"},
            {chars: "厕", pinyin: "ce", display: "cè"},
            {chars: "所", pinyin: "suo", display: "suǒ"},
        ],
    },
    // 自助服务台 (zìzhù fúwù tái - Quầy dịch vụ tự phục vụ)
    {
        segments: [
            {chars: "自", pinyin: "zi", display: "zì"},
            {chars: "助", pinyin: "zhu", display: "zhù"},
            {chars: "服", pinyin: "fu", display: "fú"},
            {chars: "务", pinyin: "wu", display: "wù"},
            {chars: "台", pinyin: "tai", display: "tái"},
        ],
    },
    // 场所 (chǎngsuǒ - Địa điểm)
    {
        segments: [
            {chars: "场", pinyin: "chang", display: "chǎng"},
            {chars: "所", pinyin: "suo", display: "suǒ"},
        ],
    },
    // 路程 (lùchéng - Khoảng cách)
    {
        segments: [
            {chars: "路", pinyin: "lu", display: "lù"},
            {chars: "程", pinyin: "cheng", display: "chéng"},
        ],
    },
    // 景色 (jǐngsè - Phong cảnh)
    {
        segments: [
            {chars: "景", pinyin: "jing", display: "jǐng"},
            {chars: "色", pinyin: "se", display: "sè"},
        ],
    },
    // 游客中心 (yóukè zhōngxīn - Trung tâm du khách)
    {
        segments: [
            {chars: "游", pinyin: "you", display: "yóu"},
            {chars: "客", pinyin: "ke", display: "kè"},
            {chars: "中", pinyin: "zhong", display: "zhōng"},
            {chars: "心", pinyin: "xin", display: "xīn"},
        ],
    },
    // 地形 (dìxíng - Địa hình)
    {
        segments: [
            {chars: "地", pinyin: "di", display: "dì"},
            {chars: "形", pinyin: "xing", display: "xíng"},
        ],
    },
    // 拐角处 (guǎijiǎo chù - Góc đường)
    {
        segments: [
            {chars: "拐", pinyin: "guai", display: "guǎi"},
            {chars: "角", pinyin: "jiao", display: "jiǎo"},
            {chars: "处", pinyin: "chu", display: "chù"},
        ],
    },
    // 紧邻 (jǐnlín - Gần kề)
    {
        segments: [
            {chars: "紧", pinyin: "jin", display: "jǐn"},
            {chars: "邻", pinyin: "lin", display: "lín"},
        ],
    },
    // 街角 (jiējiǎo - Góc phố)
    {
        segments: [
            {chars: "街", pinyin: "jie", display: "jiē"},
            {chars: "角", pinyin: "jiao", display: "jiǎo"},
        ],
    },
    // 驾驶 (jiàshǐ - Lái xe)
    {
        segments: [
            {chars: "驾", pinyin: "jia", display: "jià"},
            {chars: "驶", pinyin: "shi", display: "shǐ"},
        ],
    },
    // 乘坐 (chéngzuò - Đi bằng phương tiện)
    {
        segments: [
            {chars: "乘", pinyin: "cheng", display: "chéng"},
            {chars: "坐", pinyin: "zuo", display: "zuò"},
        ],
    },
    // 步行 (bùxíng - Đi bộ)
    {
        segments: [
            {chars: "步", pinyin: "bu", display: "bù"},
            {chars: "行", pinyin: "xing", display: "xíng"},
        ],
    },
    // 导航 (dǎoháng - Định vị, dẫn đường)
    {
        segments: [
            {chars: "导", pinyin: "dao", display: "dǎo"},
            {chars: "航", pinyin: "hang", display: "háng"},
        ],
    },
    // 路费 (lùfèi - Chi phí đi lại)
    {
        segments: [
            {chars: "路", pinyin: "lu", display: "lù"},
            {chars: "费", pinyin: "fei", display: "fèi"},
        ],
    },
    // 多少钱 (duōshǎo qián - Bao nhiêu tiền)
    {
        segments: [
            {chars: "多", pinyin: "duo", display: "duō"},
            {chars: "少", pinyin: "shao", display: "shǎo"},
            {chars: "钱", pinyin: "qian", display: "qián"},
        ],
    },
    // 便宜 (piànyi - Rẻ)
    {
        segments: [
            {chars: "便", pinyin: "pian", display: "piàn"},
            {chars: "宜", pinyin: "yi", display: "yi"},
        ],
    },
    // 贵 (guì - Đắt)
    {
        segments: [
            {chars: "贵", pinyin: "gui", display: "guì"},
        ],
    },
    // 打折 (dǎzhé - Giảm giá)
    {
        segments: [
            {chars: "打", pinyin: "da", display: "dǎ"},
            {chars: "折", pinyin: "zhe", display: "zhé"},
        ],
    },
    // 我想要 (wǒ xiǎng yào - Tôi muốn)
    {
        segments: [
            {chars: "我", pinyin: "wo", display: "wǒ"},
            {chars: "想", pinyin: "xiang", display: "xiǎng"},
            {chars: "要", pinyin: "yao", display: "yào"},
        ],
    },
    // 这个 (zhège - Cái này)
    {
        segments: [
            {chars: "这", pinyin: "zhe", display: "zhè"},
            {chars: "个", pinyin: "ge", display: "ge"},
        ],
    },
    // 那个 (nàgè - Cái kia)
    {
        segments: [
            {chars: "那", pinyin: "na", display: "nà"},
            {chars: "个", pinyin: "ge", display: "gè"},
        ],
    },
    // 大 (dà - Lớn)
    {
        segments: [
            {chars: "大", pinyin: "da", display: "dà"},
        ],
    },
    // 小 (xiǎo - Nhỏ)
    {
        segments: [
            {chars: "小", pinyin: "xiao", display: "xiǎo"},
        ],
    },
    // 颜色 (yánsè - Màu sắc)
    {
        segments: [
            {chars: "颜", pinyin: "yan", display: "yán"},
            {chars: "色", pinyin: "se", display: "sè"},
        ],
    },
    // 红色 (hóngsè - Màu đỏ)
    {
        segments: [
            {chars: "红", pinyin: "hong", display: "hóng"},
            {chars: "色", pinyin: "se", display: "sè"},
        ],
    },
    // 黑色 (hēisè - Màu đen)
    {
        segments: [
            {chars: "黑", pinyin: "hei", display: "hēi"},
            {chars: "色", pinyin: "se", display: "sè"},
        ],
    },
    // 白色 (báisè - Màu trắng)
    {
        segments: [
            {chars: "白", pinyin: "bai", display: "bái"},
            {chars: "色", pinyin: "se", display: "sè"},
        ],
    },
    // 蓝色 (lánsè - Màu xanh lam)
    {
        segments: [
            {chars: "蓝", pinyin: "lan", display: "lán"},
            {chars: "色", pinyin: "se", display: "sè"},
        ],
    },
    // 黄色 (huángsè - Màu vàng)
    {
        segments: [
            {chars: "黄", pinyin: "huang", display: "huáng"},
            {chars: "色", pinyin: "se", display: "sè"},
        ],
    },
    // 衣服 (yīfú - Quần áo)
    {
        segments: [
            {chars: "衣", pinyin: "yi", display: "yī"},
            {chars: "服", pinyin: "fu", display: "fú"},
        ],
    },
    // 裤子 (kùzi - Quần)
    {
        segments: [
            {chars: "裤", pinyin: "ku", display: "kù"},
            {chars: "子", pinyin: "zi", display: "zi"},
        ],
    },
    // 裙子 (qúnzi - Váy)
    {
        segments: [
            {chars: "裙", pinyin: "qun", display: "qún"},
            {chars: "子", pinyin: "zi", display: "zi"},
        ],
    },
    // 鞋子 (xiézi - Giày)
    {
        segments: [
            {chars: "鞋", pinyin: "xie", display: "xié"},
            {chars: "子", pinyin: "zi", display: "zi"},
        ],
    },
    // 帽子 (mǎozi - Mũ)
    {
        segments: [
            {chars: "帽", pinyin: "mao", display: "mǎo"},
            {chars: "子", pinyin: "zi", display: "zi"},
        ],
    },
    // 包 (bāo - Túi)
    {
        segments: [
            {chars: "包", pinyin: "bao", display: "bāo"},
        ],
    },
    // 需要 (xūyào - Cần)
    {
        segments: [
            {chars: "需", pinyin: "xu", display: "xū"},
            {chars: "要", pinyin: "yao", display: "yào"},
        ],
    },
    // 不需要 (bùxūyào - Không cần)
    {
        segments: [
            {chars: "不", pinyin: "bu", display: "bù"},
            {chars: "需", pinyin: "xu", display: "xū"},
            {chars: "要", pinyin: "yao", display: "yào"},
        ],
    },
    // 多少钱一张 (duōshǎo qián yī zhāng - Bao nhiêu tiền một cái)
    {
        segments: [
            {chars: "多", pinyin: "duo", display: "duō"},
            {chars: "少", pinyin: "shao", display: "shǎo"},
            {chars: "钱", pinyin: "qian", display: "qián"},
            {chars: "一", pinyin: "yi", display: "yī"},
            {chars: "张", pinyin: "zhang", display: "zhāng"},
        ],
    },
    // 我可以看看吗 (wǒ kěyǐ kànkàn ma - Tôi có thể xem không?)
    {
        segments: [
            {chars: "我", pinyin: "wo", display: "wǒ"},
            {chars: "可", pinyin: "ke", display: "kě"},
            {chars: "以", pinyin: "yi", display: "yǐ"},
            {chars: "看", pinyin: "kan", display: "kàn"},
            {chars: "看", pinyin: "kan", display: "kàn"},
            {chars: "吗", pinyin: "ma", display: "ma"},
        ],
    },
    // 可以 (kěyǐ - Có thể)
    {
        segments: [
            {chars: "可", pinyin: "ke", display: "kě"},
            {chars: "以", pinyin: "yi", display: "yǐ"},
        ],
    },
    // 不可以 (bù kěyǐ - Không thể)
    {
        segments: [
            {chars: "不", pinyin: "bu", display: "bù"},
            {chars: "可", pinyin: "ke", display: "kě"},
            {chars: "以", pinyin: "yi", display: "yǐ"},
        ],
    },
    // 好的 (hǎo de - Được rồi)
    {
        segments: [
            {chars: "好", pinyin: "hao", display: "hǎo"},
            {chars: "的", pinyin: "de", display: "de"},
        ],
    },
    // 谢谢 (xièxie - Cảm ơn)
    {
        segments: [
            {chars: "谢", pinyin: "xie", display: "xiè"},
            {chars: "谢", pinyin: "xie", display: "xie"},
        ],
    },
    // 再见 (zàijiàn - Tạm biệt)
    {
        segments: [
            {chars: "再", pinyin: "zai", display: "zài"},
            {chars: "见", pinyin: "jian", display: "jiàn"},
        ],
    },
]