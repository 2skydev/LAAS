import LayoutConfig from '~/components/LayoutConfig';
import { SearchLogsPageStyled } from '~/styles/pageStyled/searchLogsPageStyled';

const SearchLogs = () => {
  return (
    <SearchLogsPageStyled>
      <LayoutConfig breadcrumbs={['로그', '매물 검색 로그']} />
    </SearchLogsPageStyled>
  );
};

export default SearchLogs;
