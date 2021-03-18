import styled from 'styled-components';
import detailsIllustration from 'assets/illustrations/details.svg';

export const Wrapper = styled.div`
  background-image: url(${detailsIllustration});
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
`;

export const SkillsWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  border-radius: 6px;
  flex: 1;
  padding-left: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h1 {
    margin: 1rem;
    margin-bottom: 2rem;
    font-size: 26pt;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#212121')};
    mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
  }

  p {
    margin: 1rem;
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: ${({ theme }) => (theme === 'dark' ? '#f8f8f8' : '#707070')};
    mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
  }

  a {
    display: inline-block;
    margin: 0 1rem;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`;
