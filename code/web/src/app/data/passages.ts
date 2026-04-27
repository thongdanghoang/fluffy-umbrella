import {Passage} from "../types";

/**
 * A practice passage about a daily routine.
 * ~44 words covering: single chars, multi-char compounds,
 * 3-char words (服务员), repeated particles (的/了/我),
 * and 2 Erhua cases (那儿, 一会儿).
 */
export const defaultPassage: Passage = [
    // 每天 (měitiān - every day)
    {
        segments: [
            {chars: "每", pinyin: "mei", display: "měi"},
            {chars: "天", pinyin: "tian", display: "tiān"},
        ],
    },
    // 早上 (zǎoshàng - morning)
    {
        segments: [
            {chars: "早", pinyin: "zao", display: "zǎo"},
            {chars: "上", pinyin: "shang", display: "shàng"},
        ],
    },
    // 我 (wǒ - I)
    {
        segments: [{chars: "我", pinyin: "wo", display: "wǒ"}],
    },
    // 七点 (qīdiǎn - seven o'clock)
    {
        segments: [
            {chars: "七", pinyin: "qi", display: "qī"},
            {chars: "点", pinyin: "dian", display: "diǎn"},
        ],
    },
    // 起床 (qǐchuáng - get up)
    {
        segments: [
            {chars: "起", pinyin: "qi", display: "qǐ"},
            {chars: "床", pinyin: "chuang", display: "chuáng"},
        ],
    },
    // 刷牙 (shuāyá - brush teeth)
    {
        segments: [
            {chars: "刷", pinyin: "shua", display: "shuā"},
            {chars: "牙", pinyin: "ya", display: "yá"},
        ],
    },
    // 洗脸 (xǐliǎn - wash face)
    {
        segments: [
            {chars: "洗", pinyin: "xi", display: "xǐ"},
            {chars: "脸", pinyin: "lian", display: "liǎn"},
        ],
    },
    // 然后 (ránhòu - then/after that)
    {
        segments: [
            {chars: "然", pinyin: "ran", display: "rán"},
            {chars: "后", pinyin: "hou", display: "hòu"},
        ],
    },
    // 吃 (chī - eat)
    {
        segments: [{chars: "吃", pinyin: "chi", display: "chī"}],
    },
    // 早饭 (zǎofàn - breakfast)
    {
        segments: [
            {chars: "早", pinyin: "zao", display: "zǎo"},
            {chars: "饭", pinyin: "fan", display: "fàn"},
        ],
    },
    // 我 (wǒ)
    {
        segments: [{chars: "我", pinyin: "wo", display: "wǒ"}],
    },
    // 喜欢 (xǐhuān - like/enjoy)
    {
        segments: [
            {chars: "喜", pinyin: "xi", display: "xǐ"},
            {chars: "欢", pinyin: "huan", display: "huān"},
        ],
    },
    // 喝 (hē - drink)
    {
        segments: [{chars: "喝", pinyin: "he", display: "hē"}],
    },
    // 咖啡 (kāfēi - coffee)
    {
        segments: [
            {chars: "咖", pinyin: "ka", display: "kā"},
            {chars: "啡", pinyin: "fei", display: "fēi"},
        ],
    },
    // 出门 (chūmén - leave the house)
    {
        segments: [
            {chars: "出", pinyin: "chu", display: "chū"},
            {chars: "门", pinyin: "men", display: "mén"},
        ],
    },
    // 以后 (yǐhòu - after/afterwards)
    {
        segments: [
            {chars: "以", pinyin: "yi", display: "yǐ"},
            {chars: "后", pinyin: "hou", display: "hòu"},
        ],
    },
    // 坐 (zuò - take/ride)
    {
        segments: [{chars: "坐", pinyin: "zuo", display: "zuò"}],
    },
    // 地铁 (dìtiě - subway)
    {
        segments: [
            {chars: "地", pinyin: "di", display: "dì"},
            {chars: "铁", pinyin: "tie", display: "tiě"},
        ],
    },
    // 去 (qù - go)
    {
        segments: [{chars: "去", pinyin: "qu", display: "qù"}],
    },
    // 公司 (gōngsī - company)
    {
        segments: [
            {chars: "公", pinyin: "gong", display: "gōng"},
            {chars: "司", pinyin: "si", display: "sī"},
        ],
    },
    // 上班 (shàngbān - go to work)
    {
        segments: [
            {chars: "上", pinyin: "shang", display: "shàng"},
            {chars: "班", pinyin: "ban", display: "bān"},
        ],
    },
    // 下午 (xiàwǔ - afternoon)
    {
        segments: [
            {chars: "下", pinyin: "xia", display: "xià"},
            {chars: "午", pinyin: "wu", display: "wǔ"},
        ],
    },
    // 和 (hé - and/with)
    {
        segments: [{chars: "和", pinyin: "he", display: "hé"}],
    },
    // 朋友 (péngyǒu - friend)
    {
        segments: [
            {chars: "朋", pinyin: "peng", display: "péng"},
            {chars: "友", pinyin: "you", display: "yǒu"},
        ],
    },
    // 一起 (yìqǐ - together)
    {
        segments: [
            {chars: "一", pinyin: "yi", display: "yì"},
            {chars: "起", pinyin: "qi", display: "qǐ"},
        ],
    },
    // 吃饭 (chīfàn - eat a meal)
    {
        segments: [
            {chars: "吃", pinyin: "chi", display: "chī"},
            {chars: "饭", pinyin: "fan", display: "fàn"},
        ],
    },
    // 找了 (zhǎo le - found/looked for + completion marker)
    {
        segments: [
            {chars: "找", pinyin: "zhao", display: "zhǎo"},
            {chars: "了", pinyin: "le", display: "le"},
        ],
    },
    // 一家 (yījiā - one [family-type thing, measure word])
    {
        segments: [
            {chars: "一", pinyin: "yi", display: "yī"},
            {chars: "家", pinyin: "jia", display: "jiā"},
        ],
    },
    // 好吃 (hǎochī - delicious)
    {
        segments: [
            {chars: "好", pinyin: "hao", display: "hǎo"},
            {chars: "吃", pinyin: "chi", display: "chī"},
        ],
    },
    // 的 (de - particle)
    {
        segments: [{chars: "的", pinyin: "de", display: "de"}],
    },
    // 餐厅 (cāntīng - restaurant)
    {
        segments: [
            {chars: "餐", pinyin: "can", display: "cān"},
            {chars: "厅", pinyin: "ting", display: "tīng"},
        ],
    },
    // 那儿 (nàr - there, Erhua)
    {
        segments: [{chars: "那儿", pinyin: "nar", display: "nàr"}],
    },
    // 服务员 (fúwùyuán - waiter, 3-char word)
    {
        segments: [
            {chars: "服", pinyin: "fu", display: "fú"},
            {chars: "务", pinyin: "wu", display: "wù"},
            {chars: "员", pinyin: "yuan", display: "yuán"},
        ],
    },
    // 很 (hěn - very)
    {
        segments: [{chars: "很", pinyin: "hen", display: "hěn"}],
    },
    // 热情 (rèqíng - enthusiastic/warm)
    {
        segments: [
            {chars: "热", pinyin: "re", display: "rè"},
            {chars: "情", pinyin: "qing", display: "qíng"},
        ],
    },
    // 菜 (cài - food/dish)
    {
        segments: [{chars: "菜", pinyin: "cai", display: "cài"}],
    },
    // 也 (yě - also)
    {
        segments: [{chars: "也", pinyin: "ye", display: "yě"}],
    },
    // 非常 (fēicháng - extremely)
    {
        segments: [
            {chars: "非", pinyin: "fei", display: "fēi"},
            {chars: "常", pinyin: "chang", display: "cháng"},
        ],
    },
    // 美味 (měiwèi - delicious)
    {
        segments: [
            {chars: "美", pinyin: "mei", display: "měi"},
            {chars: "味", pinyin: "wei", display: "wèi"},
        ],
    },
    // 晚上 (wǎnshàng - evening)
    {
        segments: [
            {chars: "晚", pinyin: "wan", display: "wǎn"},
            {chars: "上", pinyin: "shang", display: "shàng"},
        ],
    },
    // 回家 (huíjiā - go home)
    {
        segments: [
            {chars: "回", pinyin: "hui", display: "huí"},
            {chars: "家", pinyin: "jia", display: "jiā"},
        ],
    },
    // 看了 (kànle - watched/read + completion marker)
    {
        segments: [
            {chars: "看", pinyin: "kan", display: "kàn"},
            {chars: "了", pinyin: "le", display: "le"},
        ],
    },
    // 一会儿 (yīhuìr - a little while, Erhua)
    // Erhua: 一 is its own segment, 会儿 merges into one syllable
    {
        segments: [
            {chars: "一", pinyin: "yi", display: "yī"},
            {chars: "会儿", pinyin: "huir", display: "huìr"},
        ],
    },
    // 书 (shū - book)
    {
        segments: [{chars: "书", pinyin: "shu", display: "shū"}],
    },
    // 然后 (ránhòu - then)
    {
        segments: [
            {chars: "然", pinyin: "ran", display: "rán"},
            {chars: "后", pinyin: "hou", display: "hòu"},
        ],
    },
    // 睡觉 (shuìjiào - sleep)
    {
        segments: [
            {chars: "睡", pinyin: "shui", display: "shuì"},
            {chars: "觉", pinyin: "jiao", display: "jiào"},
        ],
    },
];