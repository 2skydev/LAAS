import LayoutConfig from '~/components/LayoutConfig';
import { SearchItemsPageStyled } from '~/styles/pageStyled/searchItemsPageStyled';

const SearchItems = () => {
  return (
    <SearchItemsPageStyled>
      <LayoutConfig breadcrumbs={['검색', '매물 검색 목록']} />
    </SearchItemsPageStyled>
  );
};

export default SearchItems;
