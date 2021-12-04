import classNames from "classnames";
import { getLayout, Page, ProductPage } from "components";
import { featureData } from "static";
import styles from "styles/GroupSaving.module.css";

const { cover, art } = featureData.savingsData;

const Savings = () => (
  <Page title={featureData.savingsData.heading}>
    <ProductPage {...featureData.savingsData}>
      <div
        className={classNames(
          "max-w-xl flex items-center flex-nowrap",
          styles.wrapper
        )}
      >
        <img src={cover} />
        <img
          src={art}
          className={classNames("right-0 max-w-auto art", styles.art)}
        />
        <div
          className={`h-96 bg-bitGreen-100 w-full absolute ${styles.product_bg}`}
        />
      </div>
    </ProductPage>
  </Page>
);

Savings.getLayout = getLayout;
export default Savings;
