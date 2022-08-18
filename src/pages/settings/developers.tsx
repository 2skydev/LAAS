import Section from '~/components/Section';
import { SettingsDevelopersPageStyled } from '~/styles/pageStyled/settingsDevelopersPageStyled';

const SettingsDevelopers = () => {
  return (
    <SettingsDevelopersPageStyled>
      <Section
        title="개발자모드 설정"
        description={
          <div>
            개발자모드를 활성화할지 설정합니다.
            <br />
            개발자모드가 활성화되면 개발자 도구가 활성화됩니다.
          </div>
        }
      >
        askjdhskajdhskaj
      </Section>
    </SettingsDevelopersPageStyled>
  );
};

export default SettingsDevelopers;
