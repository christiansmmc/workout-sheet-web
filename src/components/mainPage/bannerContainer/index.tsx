import { BannerContainerStyle, BannerImage, BannerText } from "./styles.tsx";

const BannerContainer = () => {
  return (
    <BannerContainerStyle>
      <BannerImage />
      <BannerText>Workout Sheet</BannerText>
    </BannerContainerStyle>
  );
};

export default BannerContainer;
