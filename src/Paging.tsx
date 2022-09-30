interface PagingProps {
  current: number;
  isPrevEnabled: boolean;
  isNextEnabled: boolean;
  onPrev: () => void;
  onNext: () => void;
}

const Paging = ({ current, onPrev, onNext, isPrevEnabled, isNextEnabled }: PagingProps) => {
  return (
    <div>
      <button onClick={onPrev} disabled={!isPrevEnabled}>Zpět</button>
      <span>{current}</span>
      <button onClick={onNext} disabled={!isNextEnabled}>Vpřed</button>
    </div>
  );
};

export default Paging;