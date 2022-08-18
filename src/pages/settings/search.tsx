import { Avatar, Button, Input, InputNumber, Space, Switch } from 'antd';
import { useFormik } from 'formik';
import { AnimatePresence, motion } from 'framer-motion';
import { useRecoilState } from 'recoil';

import DiscordProfile from '~/components/DiscordProfile';
import LayoutConfig from '~/components/LayoutConfig';
import SaveButton from '~/components/SaveButton';
import Section from '~/components/Section';
import { configStore } from '~/stores/config';
import { SettingsNotificationPageStyled } from '~/styles/pageStyled/settingsNotificationPageStyled';

const discordProfileChangeAnimateProps = {
  initial: { opacity: 0, x: -5 },
  animate: { opacity: 1, x: 0 },
};

const SettingsNotification = () => {
  const [config, setConfig] = useRecoilState(configStore);

  const formik = useFormik({
    initialValues: config.search,
    onSubmit: values => {
      setConfig({
        ...config,
        search: values,
      });
    },
  });

  const handleOAuthDiscord = () => {
    window.electron.openExternal(import.meta.env.VITE_DISCORD_OAUTH_URL);
    window.electron.onceOAuthDiscord(user => {
      formik.setFieldValue('discordUser', user);
    });
  };

  return (
    <SettingsNotificationPageStyled>
      <LayoutConfig breadcrumbs={['설정', '검색 설정']} />

      <Section
        title="로스트아크 계정 *"
        description={
          <>
            경매장을 검색하기 위해 로스트아크 계정이 필요합니다.
            <br />
            지정 PC, 소셜 로그인 같은 계정이 아닌 이메일 계정이 필요합니다.
            <br />
            <div className="spacing" />
            <a href="https://member.onstove.com/v2.0/register" target="_blank" rel="noreferrer">
              로스트아크 이메일로 회원가입하기
            </a>
          </>
        }
      >
        <Space className="inputs" size="middle" direction="vertical">
          <Input
            name="lostarkID"
            value={formik.values.lostarkID}
            onChange={formik.handleChange}
            placeholder="로스트아크 ID"
          />

          <Input
            type="password"
            name="lostarkPW"
            value={formik.values.lostarkPW}
            onChange={formik.handleChange}
            placeholder="로스트아크 비밀번호"
          />
        </Space>
      </Section>

      <Section
        title="Discord 계정 *"
        description={
          <>
            알림을 받을 때 멘션을 하기 위해 Discord 계정 정보를 수집하고 있습니다.
            <br />
            수집하는 정보는 <mark>ID</mark>, <mark>닉네임</mark>, <mark>프로필 사진</mark> 입니다.
            <br />
            <div className="spacing" />
            우측 연동하기를 누르면 Discord 계정 엑세스 페이지로 이동합니다.
          </>
        }
      >
        <Space className="inputs" size="middle">
          <AnimatePresence initial={false}>
            {formik.values.discordUser ? (
              <motion.div key="profile" {...discordProfileChangeAnimateProps}>
                <DiscordProfile
                  id={formik.values.discordUser.id}
                  avatar={formik.values.discordUser.avatar}
                  username={formik.values.discordUser.username}
                  onUnlink={() => formik.setFieldValue('discordUser', null)}
                />
              </motion.div>
            ) : (
              <motion.div key="link" {...discordProfileChangeAnimateProps}>
                <Button onClick={handleOAuthDiscord}>연동하기</Button>
              </motion.div>
            )}
          </AnimatePresence>
        </Space>
      </Section>

      <Section
        title="매물 검색 주기"
        description={
          <>
            장신구 매물 검색하는 주기를 설정합니다.
            <br />
            단위는 "분" 단위입니다.
          </>
        }
      >
        <Space className="inputs" size="middle">
          <InputNumber
            style={{ width: 200 }}
            placeholder="검색 주기"
            value={formik.values.interval}
            onChange={value => formik.setFieldValue('interval', value)}
            min={1}
            formatter={value => `${value}분`}
          />
        </Space>
      </Section>

      <Section
        title="알림 반복"
        description={
          <>
            매물을 찾아서 알림이 보낸 후 다시 같은 매물이 검색되었을 때 알림을 보낼지 설정합니다.
            <br />
            해당 옵션이 꺼져있다면 알림을 반복해서 보내지 않습니다.
          </>
        }
      >
        <Switch
          checked={formik.values.repeat}
          onChange={value => formik.setFieldValue('repeat', value)}
          checkedChildren={<i className="bx bx-check" />}
          unCheckedChildren={<i className="bx bx-x" />}
        />
      </Section>

      <Section
        title="로그 저장"
        description={
          <>
            앱을 완전히 종료해도 매물 알림 로그를 저장할지 설정합니다
            <br />
            해당 옵션이 꺼져있다면 로그를 저장하지 않습니다.
            <br />
            <div className="spacing" />
            <span className="errorColor">해당 옵션은 되도록 사용하지 않는 것을 권장합니다.</span>
          </>
        }
      >
        <Switch
          checked={formik.values.saveLogs}
          onChange={value => formik.setFieldValue('saveLogs', value)}
          checkedChildren={<i className="bx bx-check" />}
          unCheckedChildren={<i className="bx bx-x" />}
        />
      </Section>

      <SaveButton defaultValues={config.search} formik={formik} />
    </SettingsNotificationPageStyled>
  );
};

export default SettingsNotification;
