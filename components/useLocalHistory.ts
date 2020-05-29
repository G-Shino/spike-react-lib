import { useStack } from "./useStack";

export interface LocalHistory {
  Top: () => void;
  Next: () => void;
  Back: () => void;
  Last: () => void;
  Reset: () => void;
}

export const useLocalHistory = (
  topPage: number,
  lastPage: number
): [number, LocalHistory] => {
  const initHistory: number[] = [topPage];
  const [currentPage, stack] = useStack<number>(initHistory);

  const Top = (): void => {
    if (currentPage !== topPage) {
      stack.Push(topPage);
    }
  };

  const Next = (): void => {
    const nextPage = currentPage + 1;
    if (nextPage <= lastPage) {
      stack.Push(nextPage);
    }
  };

  const Back = (): void => {
    stack.Pop();
  };

  const Last = (): void => {
    if (currentPage !== lastPage) {
      stack.Push(lastPage);
    }
  };

  const Reset = (): void => {
    stack.Reset();
  };

  return [currentPage, { Top, Next, Back, Last, Reset }];
};
