import { BEM } from '../../../utils';

const { toElement } = BEM('social');

const Github = () => (
  <>
    <path
      className={toElement('tile')}
      d="M6 18.8C6 14.3196 6 12.0794 6.87195 10.3681C7.63893 8.86278 8.86278 7.63893 10.3681 6.87195C12.0794 6 14.3196 6 18.8 6H25.2C29.6804 6 31.9206 6 33.6319 6.87195C35.1372 7.63893 36.3611 8.86278 37.1281 10.3681C38 12.0794 38 14.3196 38 18.8V25.2C38 29.6804 38 31.9206 37.1281 33.6319C36.3611 35.1372 35.1372 36.3611 33.6319 37.1281C31.9206 38 29.6804 38 25.2 38H18.8C14.3196 38 12.0794 38 10.3681 37.1281C8.86278 36.3611 7.63893 35.1372 6.87195 33.6319C6 31.9206 6 29.6804 6 25.2V18.8Z"
    />
    <path
      className={toElement('logo')}
      d="M21.9994 12C16.4777 12 12 16.4771 12 22.0006C12 26.4183 14.865 30.1664 18.8391 31.4889C19.3391 31.5807 19.5216 31.2719 19.5216 31.0069C19.5216 30.7695 19.513 30.1407 19.5081 29.3061C16.7265 29.9105 16.1395 27.9656 16.1395 27.9656C15.6848 26.8104 15.0292 26.5029 15.0292 26.5029C14.1213 25.8824 15.0979 25.895 15.0979 25.895C16.1015 25.9657 16.6297 26.9255 16.6297 26.9255C17.5217 28.4537 18.9701 28.0124 19.5399 27.7564C19.6308 27.1102 19.8891 26.6695 20.1748 26.4196C17.9543 26.1672 15.6198 25.3093 15.6198 21.4773C15.6198 20.3856 16.0095 19.4929 16.6491 18.7939C16.5463 18.5409 16.2031 17.5242 16.7472 16.1474C16.7472 16.1474 17.5868 15.8785 19.4971 17.1725C20.2947 16.9507 21.1502 16.8398 22.0006 16.8359C22.8498 16.8398 23.7053 16.9507 24.5041 17.1725C26.4132 15.8785 27.2513 16.1474 27.2513 16.1474C27.7969 17.5242 27.4537 18.5409 27.3508 18.7939C27.9917 19.4929 28.3787 20.3856 28.3787 21.4773C28.3787 25.3188 26.0407 26.1642 23.8129 26.4118C24.172 26.7205 24.4918 27.3308 24.4918 28.2636C24.4918 29.6005 24.4795 30.6791 24.4795 31.0069C24.4795 31.2743 24.6597 31.5855 25.1672 31.4878C29.1374 30.1628 32 26.4172 32 22.0006C32 16.4771 27.5223 12 21.9994 12Z"
    />
  </>
);

export { Github as default };