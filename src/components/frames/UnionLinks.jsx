import Links from "../common/Links";
const UnionLinks = ({text1="Professional", text2="Personal", text3="Technology", className="text-lg"}) => {
    return (
            <>
                <Links text={text1}  className={className} />
                <Links text={text2} className={className}  />
                <Links text={text3} className={className}  />
            </>
    )
};
export default UnionLinks;