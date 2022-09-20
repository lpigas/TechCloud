import Footer from "./conponents/footer/Footer";
import Header from "./conponents/header/Header";
const bgColor = {
  standart: "linear-gradient(90deg, #F6F8FC 0%, #ECF0FA 100%)",
  light:
    "linear-gradient(90deg, #F9F9FC 0%, #FCFCFD 33.33%, #FBFBFD 53.12%, #F6F6FA 100%)",
};

export default function Layout({
  title,
  children,
  component,
  bgcolor = "standart",
}) {
  return (
    <div className="flex flex-col lg:min-w-[1920px] md:min-w-[1520px] sm:min-w-[1320px]  overflow-hidden ">
      <div
        className={`w-full overflow-hidden `}
        style={{
          background: bgColor[bgcolor],
        }}
      >
        <Header title={title} />
        {children}
      </div>
      {component}
      <Footer />
    </div>
  );
}
