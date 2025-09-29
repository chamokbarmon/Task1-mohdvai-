import "./Collapse.css";

const Collapse = () => {
  return (
    <div className="Wh " >
      <h1  className="text-center font mt-5 #1B1743 hc text-[24px] lg:text-[32px]">Frequently asked questions</h1>
      <div className="mt-10">
        <div tabIndex={0} className="collapse collapse-arrow  line ">
        <div className="collapse-title font-semibold contentText text-[16px] lg:text-[20px] ">
          Do plumbers deal with heating?
        </div>
        <div className="collapse-content text-sm bodyText text-[14px]">
          Some of our local plumbers are also gas registered and experienced
          working on heating systems, bathrooms and kitchens.
        </div>
      </div>
      <div tabIndex={1} className="collapse collapse-arrow  line">
        <div className="collapse-title contentText text-[16px] lg:text-[20px]">
          Do you charge a call out fee?
        </div>
        <div className="collapse-content text-sm bodyText text-[14px]">
          Click the "Sign Up" button in the top right corner and follow the
          registration process.
        </div>
      </div>
      <div tabIndex={2} className="collapse collapse-arrow  line">
        <div className="collapse-title contentText text-[16px] lg:text-[20px]">
          How quickly can your company send out an engineer?
        </div>
        <div className="collapse-content text-sm bodyText text-[14px] ">
          Click the "Sign Up" button in the top right corner and follow the
          registration process.
        </div>
      </div>
      <div tabIndex={3} className="collapse collapse-arrow  line">
        <div className="collapse-title contentText text-[16px] lg:text-[20px]">
          What should I do if I get a water leak?
        </div>
        <div className="collapse-content text-sm bodyText text-[14px]">
          Click the "Sign Up" button in the top right corner and follow the
          registration process.
        </div>
      </div>
      </div>
    </div>
  );
};

export default Collapse;
