const WordPro = ({ Title1 }) => {
    return (
        <span className="relative inline-block mx-2 md:mx-3">
              <span className="absolute inset-0 bg-[#FFD500] rounded-lg transform -rotate-1 skew-x-1"></span>
              <span className="relative text-[#1a1a1a] px-2">{Title1}</span>
            </span> 
    );
};
export default WordPro;