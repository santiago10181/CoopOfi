import Brand from '../common/Brand';
import  TextP  from '../common/TextP';
import Form from '../frame/Form';


export const LoginPage = () => {

  return (
    <div className="h-screen w-full flex bg-yellow-100 overflow-hidden font-sans">
      
      {/* Left Section: Form Area */}
      <div className="w-full  h-full flex flex-col items-center justify-center relative z-10 px-4 lg:px-0">
        <div className="w-full max-w-lg px-6 sm:px-12 md:px-16 py-8 max-h-screen no-scrollbar flex flex-col justify-center min-h-[600px] 
                        bg-white rounded-2xl shadow-xl border border-gray-100">
          {/* Header / Logo Area */}
          <Brand />
          <TextP />
          <Form />
        </div>
      </div>
      {/* Right Section: Visual / Hero */}
      {/* <div className="hidden lg:block lg:w-[45%] h-full relative bg-gray-50"> */}
        {/* <img 
          src={Img_izq} 
          alt="Modern bright office" 
          className="absolute inset-0 w-full h-full object-cover"
        />       
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div> */}
        {/* Floating Content Card */}
        {/* <CardFloat /> */}
      {/* </div> */}
    </div>
  );
};
export default LoginPage;