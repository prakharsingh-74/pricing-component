import './slider.css';

type SlideProps = {
  price: number;
  setPrice: (price: number) => void;
};

const Slider = ({ price, setPrice }: SlideProps) => {

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const floatPrice = parseFloat((parseInt(e.target.value) / 100).toFixed(2));
    setPrice(floatPrice);
  };

  return (
    <div className="relative w-full">
      <input
        type="range"
        min="0"
        max="3200"  
        value={(price * 100).toString()} 
        onChange={handleSliderChange}
        id="slider"
        className="rounded-full h-[10px] w-full"
      />
    </div>
  );
};

export default Slider;