import './slider.css';

type SlideProps = {
  price: number;
  setPrice: (price: number) => void;
  setPageViews: (views: string) => void;
};

const Slider = ({ price, setPrice, setPageViews }: SlideProps) => {
  const ranges = [
    { views: "10K", price: 8 },
    { views: "50K", price: 12 },
    { views: "100K", price: 16 },
    { views: "500K", price: 24 },
    { views: "1M", price: 36 },
  ];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = parseInt(e.target.value);
    const selectedRange = ranges[index];

    setPrice(selectedRange.price);
    setPageViews(selectedRange.views);

    const slider = e.target;
    const percent = (index / (ranges.length - 1)) * 100;

    slider.style.setProperty('--percent', `${percent}%`);
  };

  return (
    <div className="relative w-full">
      <input
        type="range"
        min="0"
        max={(ranges.length - 1).toString()}
        value={ranges.findIndex(range => range.price === price).toString()}
        onChange={handleSliderChange}
        id="slider"
        className="rounded-full h-[10px] w-full"
        aria-label="Price slider"
      />
    </div>
  );
};

export default Slider;
