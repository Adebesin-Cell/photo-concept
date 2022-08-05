import overlay from './assets/images/overlay.png';
import avatar from './assets/images/avatar--2.jpg';
import avatarOne from './assets/images/avatar--4.jpg';
import { ReactComponent as Logo } from './assets/svgs/logo.svg';
import { ReactComponent as TrendingLine } from './assets/svgs/icon-trending-lines.svg';
import { ReactComponent as Airplane } from './assets/svgs/icon-airplane-check.svg';
import illustration from './assets/svgs/illustration-union.svg';
import './scss/styles.scss';

function App() {
  return (
    <>
      {/* desktop view starts here */}
      <div className='wrapper'>
        <div className='overlay'>
          <img src={overlay} alt='' className='overlay__image' />
        </div>
        <section className='card'>
          <div className='card__content'>
            <header className='card__header'>
              <div className='logo'>
                <a href='/' className='logo__link' name='logo'>
                  <Logo />
                </a>
              </div>
              <nav className='card__navigation'>
                <ul className='card__navigation-list'>
                  <li className='card__navigation-item'>
                    <a
                      href='/'
                      className='card__navigation-link'
                      name='Features'
                    >
                      Features
                    </a>
                  </li>
                  <li className='card__navigation-item'>
                    <span className='card__navigation-divider'></span>
                  </li>
                  <li className='card__navigation-item'>
                    <a
                      href='/'
                      className='card__navigation-link'
                      name='Pricing'
                    >
                      Pricing
                    </a>
                  </li>
                  <li className='card__navigation-item'>
                    <span className='card__navigation-divider'></span>
                  </li>
                  <li className='card__navigation-item'>
                    <a
                      href='/'
                      className='card__navigation-link'
                      name='Contact'
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </header>
            <h1 className='card__heading'>
              <span>Create your</span>
              <span className='card__heading--circled'>beautiful</span>
              <span className='card__heading--double'>
                photography <span className='card__heading--small'>&copy;</span>
              </span>
              <span>website</span>
            </h1>
            <div className='card__line'>
              <hr className='card__underline' />
            </div>
            <div className='card__info'>
              <div className='card__box'>
                <div className='card__icon'>
                  <TrendingLine />
                </div>
                <h1 className='card__title'>Amazing Builder</h1>
                <p className='card__paragraph'>
                  Let’s make things easy with our design system.
                </p>
              </div>
              <div className='card__box'>
                <div className='card__icon'>
                  <Airplane />
                </div>
                <h1 className='card__title'>Fast and Easy</h1>
                <p className='card__paragraph'>
                  We support key shortcut to find the components.
                </p>
              </div>
            </div>
            <div className='card__cta'>
              <button
                className='card__button card__button--cta card__button--black'
                name='Get started'
              >
                <span className='text'>Get started</span>
                <span className='icon'>
                  <svg
                    width='8'
                    height='14'
                    viewBox='0 0 8 14'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M5.17198 7L0.221985 2.05L1.63598 0.636002L7.99998 7L1.63598 13.364L0.221985 11.95L5.17198 7Z'
                      fill='#ffffff'
                    />
                  </svg>
                </span>
              </button>
              <button
                className='card__button card__button--cta card__button--gray'
                name='Watch Demo'
              >
                <span className='text'>Watch Demo</span>
                <span className='icon'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <polygon points='5 3 19 12 5 21 5 3'></polygon>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className='card__details'>
            <div className='card__details-body'>
              <div className='card__menu'>
                <button
                  className='card__button card__button--sign-up'
                  name='sign up'
                  type='button'
                >
                  Sign Up
                </button>
                <button className='card__button card__button--toggle'>
                  <span className='line'></span>
                  <span className='line'></span>
                </button>
              </div>
            </div>
            <div className='card__details-footer'>
              <div className='card__illustration'>
                <img
                  src={illustration}
                  alt='union'
                  className='card__illustration-image'
                />
              </div>
              <div className='card__scroll'>
                <button className='card__scroll-button' name='Scroll Down'>
                  <span className='icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <line x1='12' y1='5' x2='12' y2='19'></line>
                      <polyline points='19 12 12 19 5 12'></polyline>
                    </svg>
                  </span>
                  <span className='text'>Scroll Down</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* desktop view ends here */}
      {/* mobile view starts here */}
      <div className='container'>
        <header className='header'>
          <button className='card__button card__button--toggle'>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
          </button>
          <div className='logo'>
            <a href='/' className='logo__link' name='logo'>
              <Logo />
            </a>
          </div>
          <button
            className='card__button card__button--sign-up card__button--yellow'
            name='sign up'
            type='button'
          >
            Sign Up
          </button>
        </header>
        <h1 className='heading'>
          <span>Create your</span>
          <span className='heading--circled'>beautiful</span>
          <span className='heading--flex'>
            photography <span className='heading--small'>&copy;</span>
          </span>
          <span className='heading--underlined'>website</span>
          <img src={avatar} alt='avatar' className='avatar--icon avatar--1' />
          <img
            src={avatarOne}
            alt='avatar'
            className='avatar--icon avatar--2'
          />
        </h1>
        <div className='intro'>
          <div className='intro__card intro__card--1'>
            <div className='intro__box'></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
