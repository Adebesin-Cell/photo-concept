import overlay from './assets/images/overlay.png';
import { ReactComponent as Logo } from './assets/svgs/logo.svg';
import { ReactComponent as TrendingLine } from './assets/svgs/icon-trending-lines.svg';
import { ReactComponent as Airplane } from './assets/svgs/icon-airplane-check.svg';
import './scss/styles.scss';

function App() {
  return (
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
                  <a href='/' className='card__navigation-link' name='Features'>
                    Features
                  </a>
                </li>
                <li className='card__navigation-item'>
                  <span className='card__navigation-divider'></span>
                </li>
                <li className='card__navigation-item'>
                  <a href='/' className='card__navigation-link' name='Pricing'>
                    Pricing
                  </a>
                </li>
                <li className='card__navigation-item'>
                  <span className='card__navigation-divider'></span>
                </li>
                <li className='card__navigation-item'>
                  <a href='/' className='card__navigation-link' name='Contact'>
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
          <hr className='card__underline' />
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
        </div>
      </section>
    </div>
  );
}

export default App;
