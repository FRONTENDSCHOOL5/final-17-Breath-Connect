import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Follower from '../../../components/common/User/Follow/Follow';
import Header from '../../../components/Header/TopListNavHeader';
import Footer from '../../../components/Footer/TabMenu';
import Loading from '../../../components/common/Loading/Loading';
import { isDarkModeState } from '../../../atoms/StylesAtom';
import { getFollowerList } from '../../../api/follow';
import Logo from '../../../assets/images/home-logo.svg';
import DarkLogo from '../../../assets/images/home-logo-dark.svg';
import {
  Container,
  Title,
  Main,
  List,
  NotFollower,
  Image,
  Text,
} from './FollowerListPageStyle';

const FollowerListPage = () => {
  const { accountname: accountName } = useParams();
  const isDarkMode = useRecoilValue(isDarkModeState);
  const [isLoading, setIsLoading] = useState(true);
  const [followings, setFollowings] = useState([]);

  useEffect(() => {
    const followList = async () => {
      const data = await getFollowerList(accountName);
      setFollowings(data);
      setIsLoading(false);
    };
    followList();
  }, [accountName]);

  return (
    <>
    {isLoading ? <Loading /> : (
      <Container>
      <Header />
      <Main>
        <Title>팔로워목록</Title>
        <List>
          {followings.length > 0 ? (
            followings.map((user) => (
              <Follower
                key={user._id}
                user={{
                  _id: user._id,
                  username: user.username,
                  accountname: user.accountname,
                  intro: user.intro,
                  image: user.image,
                  isfollow: user.isfollow,
                }}
              />
            ))
          ) : (
            <NotFollower>
              <Image src={isDarkMode ? DarkLogo : Logo} alt="NotFollower로고" className="icon" />
              <Text>팔로워한 사용자가 없습니다.</Text>
            </NotFollower>
          )}
        </List>
      </Main>
      <Footer />
    </Container>)}
    </>
  );
};

export default FollowerListPage;
