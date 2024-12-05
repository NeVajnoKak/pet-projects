import Header from "../../common/Header/Header";
import Image from "../../common/Image/Image";
import styles from "./PageLayout.module.css";

const PageLayout = ({ component: Component, image }) => {
  return (
    <>
      <div className={styles.page}>
        <Header/>
        <Image image={image} />
        <Component/>
      </div>
    </>
  );
};

export default PageLayout;
