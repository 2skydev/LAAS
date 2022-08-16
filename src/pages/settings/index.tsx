import { Switch } from 'antd';

import Section from '~/components/Section';
import { SettingsPageStyled } from '~/styles/pageStyled/settingsPageStyled';

const Settings = () => {
  return (
    <SettingsPageStyled>
      <Section
        title="다크모드 설정"
        description={
          <div>
            라이트모드, 다크모드를 선택해서 사용하실 수 있습니다.
            <br />
            다크모드가 기본 설정이며 다크모드를 기준으로 앱이 만들어졌습니다.
          </div>
        }
      >
        <Switch
          checked={true}
          onChange={value => {}}
          checkedChildren={<i className="bx bxs-moon" />}
          unCheckedChildren={<i className="bx bxs-sun" />}
        />
      </Section>

      <Section
        title="앱 버전"
        description={
          <div>
            현재 앱 버전이 몇인지 확인하실 수 있습니다.
            <br />
            아래 링크를 통해 변경된 사항을 확인하실 수 있습니다.
            <br />
            <div className="spacing" />
            <a href="https://github.com/2skydev/LAAS-app/releases" target="_blank" rel="noreferrer">
              앱 릴리즈 목록
            </a>
          </div>
        }
      >
        앱 버전 정보를 가져오는 중...
      </Section>
    </SettingsPageStyled>
  );
};

export default Settings;
