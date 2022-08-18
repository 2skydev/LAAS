import AccessoryCard from '~/components/AccessoryCard';
import LayoutConfig from '~/components/LayoutConfig';
import { SearchItemsPageStyled } from '~/styles/pageStyled/searchItemsPageStyled';

// 등급, 부위 (이미지)
// 매물명
// 특성2
// 각인2
// 품질
// 디버프허용n
// 메모

const SearchItems = () => {
  return (
    <SearchItemsPageStyled>
      <LayoutConfig breadcrumbs={['검색', '매물 검색 목록']} />

      <div className="cards">
        <AccessoryCard grade="relic" name="내가 설정한 매물 명" quality={9} />
        <AccessoryCard grade="ancient" name="내가 설정한 매물 명" quality={10} />
        <AccessoryCard grade="ancient" name="내가 설정한 매물 명" quality={29} />
        <AccessoryCard grade="relic" name="내가 설정한 매물 명" quality={30} />
        <AccessoryCard grade="ancient" name="내가 설정한 매물 명" quality={50} />
        <AccessoryCard grade="relic" name="내가 설정한 매물 명" quality={70} />
        <AccessoryCard grade="ancient" name="내가 설정한 매물 명" quality={90} />
        <AccessoryCard grade="ancient" name="내가 설정한 매물 명" quality={100} />
      </div>
    </SearchItemsPageStyled>
  );
};

export default SearchItems;
