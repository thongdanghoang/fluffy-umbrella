import TypingPractice from "./components/TypingPractice";
import { defaultPassage } from "./data/passages";

export default function Home() {
  return <TypingPractice passage={defaultPassage} />;
}
