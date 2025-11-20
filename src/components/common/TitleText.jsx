import WordPro from "./WordPro";

const TitleText = ({ Title0, Title1, Title2, classNameTitle}) => {
    return (
        <h1 className={classNameTitle}>
            <br className="hidden md:block" />
            {Title0}
            <WordPro Title1={Title1} />
            {Title2}
        </h1>
    );
}
export default TitleText;   