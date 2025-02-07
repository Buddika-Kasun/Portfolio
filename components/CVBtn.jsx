import { FiDownload } from "react-icons/fi";
import { Button } from "./ui/button";
import MotionBtn from "./MotionBtn";

const CVBtn = () => {
  return (
    <MotionBtn>
      <a href="/assets/CV/BuddikaKasun.pdf" download="Buddika_Kasun_CV.pdf">
      <Button
        variant="outline"
        size="lg"
        className="uppercase flex items-center gap-2 btn"
      >
        <span>Download CV</span>
        <FiDownload className="text-xl" />
      </Button>
      </a>
    </MotionBtn>
  );
};

export default CVBtn;
