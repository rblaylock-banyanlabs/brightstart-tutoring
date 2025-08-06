import Card from "./Card";
import { PiBookOpen } from "react-icons/pi";
import { TbUsers } from "react-icons/tb";
import { HiOutlineStar } from "react-icons/hi";

const Hero = () => {
  const heroCards = [
    {
      icon: PiBookOpen,
      title: "Learn Git Flow",
      description: "Master GitHub workflows and version control best practices",
    },
    {
      icon: TbUsers,
      title: "Expert Tutors",
      description: "Learn from experienced developers who care about your success",
    },
    {
      icon: HiOutlineStar,
      title: "Build Components",
      description: "Create reusable, maintainable components following best practices",
    },
  ];

  return (
    <div className="mt-16 bg-gray-900 pb-16">
      <h1 className="pt-18 font-bold text-yellow-400 text-center text-6xl">
        Welcome to Bright Start Tutoring
      </h1>
      <h2 className="text-gray-200 mx-auto text-lg md:text-xl lg:text-2xl text-center pt-6 max-w-[80vw] lg:max-w-[42vw]">
        Empowering new developers to master GitHub workflows and create amazing,
        reusable components through personalized tutoring sessions.
      </h2>
          <div className="flex flex-col md:flex-row justify-center mx-auto mt-10 gap-8 md:max-w-[90vw] lg:max-w-[67vw]">
      {heroCards.map(({ icon: Icon, title, description }, idx) => (
        <Card
          key={title}
          title={title}
          description={description}
          icon={Icon}
          >
          <HiOutlineStar className="text-gray-200" size={20} aria-label="Featured" />
        </Card>
      ))}
    </div>
    <div className="mt-12 bg-yellow-500 text-center hover:bg-yellow-600 text-black font-bold text-lg rounded-full px-6 py-2 mx-auto w-1/2 md:w-1/3 lg:w-1/8">Start Learning Today</div>
    </div>
  );
};

export default Hero;
 