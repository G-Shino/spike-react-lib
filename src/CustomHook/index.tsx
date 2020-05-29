import * as React from "react";
import styles from "./style";
import {
  useLocalHistory,
  LocalHistory,
} from "../../components/useLocalHistory";

const { WrapperDiv } = styles;

export const CustomHook: React.FC = () => {
  const topPage = 1;
  const lastPage = 4;
  const [currentPage, history] = useLocalHistory(topPage, lastPage);
  return <Page currentPage={currentPage} history={history} />;
};

interface PageProps {
  currentPage: number;
  history: LocalHistory;
}

const Page: React.FC<PageProps> = ({ currentPage, history }: PageProps) => {
  return (
    <WrapperDiv>
      <div>現在のページ：{currentPage}</div>
      <button onClick={history.Top}>Top</button>
      <button onClick={history.Next}>Next</button>
      <button onClick={history.Back}>Back</button>
      <button onClick={history.Last}>Last</button>
      <button onClick={history.Reset}>Reset</button>
    </WrapperDiv>
  );
};
