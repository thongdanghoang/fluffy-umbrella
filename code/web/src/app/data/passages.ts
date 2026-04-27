import { Passage } from "../types";

/**
 * A practice passage about a day in Beijing.
 * Includes varied content: simple words, multi-character words, and Erhua cases.
 * 18 words covering normal and Erhua pronunciation patterns.
 */
export const defaultPassage: Passage = [
  // 今天 (jīntiān - today)
  {
    segments: [
      { chars: "今", pinyin: "jin", display: "jīn" },
      { chars: "天", pinyin: "tian", display: "tiān" },
    ],
  },
  // 我 (wǒ - I/me)
  {
    segments: [{ chars: "我", pinyin: "wo", display: "wǒ" }],
  },
  // 去 (qù - go)
  {
    segments: [{ chars: "去", pinyin: "qu", display: "qù" }],
  },
  // 北京 (běijīng - Beijing)
  {
    segments: [
      { chars: "北", pinyin: "bei", display: "běi" },
      { chars: "京", pinyin: "jing", display: "jīng" },
    ],
  },
  // 玩儿 (wánr - to play, Erhua)
  {
    segments: [
      { chars: "玩儿", pinyin: "wanr", display: "wánr" },
    ],
  },
  // 那儿 (nàr - there, Erhua)
  {
    segments: [
      { chars: "那儿", pinyin: "nar", display: "nàr" },
    ],
  },
  // 的 (de - possessive particle)
  {
    segments: [{ chars: "的", pinyin: "de", display: "de" }],
  },
  // 天气 (tiānqì - weather)
  {
    segments: [
      { chars: "天", pinyin: "tian", display: "tiān" },
      { chars: "气", pinyin: "qi", display: "qì" },
    ],
  },
  // 非常 (fēicháng - very)
  {
    segments: [
      { chars: "非", pinyin: "fei", display: "fēi" },
      { chars: "常", pinyin: "chang", display: "cháng" },
    ],
  },
  // 好 (hǎo - good)
  {
    segments: [{ chars: "好", pinyin: "hao", display: "hǎo" }],
  },
  // 我们 (wǒmen - we)
  {
    segments: [
      { chars: "我", pinyin: "wo", display: "wǒ" },
      { chars: "们", pinyin: "men", display: "men" },
    ],
  },
  // 一起 (yìqǐ - together)
  {
    segments: [
      { chars: "一", pinyin: "yi", display: "yì" },
      { chars: "起", pinyin: "qi", display: "qǐ" },
    ],
  },
  // 吃 (chī - eat)
  {
    segments: [{ chars: "吃", pinyin: "chi", display: "chī" }],
  },
  // 了 (le - completed action particle)
  {
    segments: [{ chars: "了", pinyin: "le", display: "le" }],
  },
  // 哪儿 (nǎr - where, Erhua)
  {
    segments: [
      { chars: "哪儿", pinyin: "nar", display: "nǎr" },
    ],
  },
  // 的 (de)
  {
    segments: [{ chars: "的", pinyin: "de", display: "de" }],
  },
  // 小吃 (xiǎochī - snacks)
  {
    segments: [
      { chars: "小", pinyin: "xiao", display: "xiǎo" },
      { chars: "吃", pinyin: "chi", display: "chī" },
    ],
  },
  // 特别 (tèbié - especially)
  {
    segments: [
      { chars: "特", pinyin: "te", display: "tè" },
      { chars: "别", pinyin: "bie", display: "bié" },
    ],
  },
];
