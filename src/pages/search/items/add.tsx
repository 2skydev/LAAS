import { Input } from 'antd';

import LayoutConfig from '~/components/LayoutConfig';
import Section from '~/components/Section';
import { SearchItemsAddPageStyled } from '~/styles/pageStyled/searchItemsAddPageStyled';

const SearchItemsAdd = () => {
  return (
    <SearchItemsAddPageStyled>
      <LayoutConfig breadcrumbs={['검색', '매물 검색 추가']} />

      <Section
        title="매물 검색 항목 에디터"
        description={<div>하단 에디터를 통해 매물 검색 항목을 추가할 수 있습니다.</div>}
      ></Section>

      <div className="searchItemForm">
        <Input.TextArea
          placeholder={`예시)\n유물 목걸이\n품질 85\n신속 치명\n원한5 아드3\n공감4\n\n고대 반지\n품질 100\n신속\n원한6 아드3\n공속감2 방감2`}
          rows={10}
          autoSize
        />

        <div className="items">
          <div className="item"></div>
        </div>
      </div>
    </SearchItemsAddPageStyled>
  );
};

export default SearchItemsAdd;
