const Display = ({ gbp, eur, usd, currency }) => {
  let usdClass, eurClass, gbpClass

  if (usd > currency.Valute?.USD.Previous) {
    usdClass = 'converter__item-price green'
  } else {
    usdClass = 'converter__item-price red'
  }

  if (eur > currency.Valute?.EUR.Previous) {
    eurClass = 'converter__item-price green'
  } else {
    eurClass = 'converter__item-price red'
  }

  if (gbp > currency.Valute?.GBP.Previous) {
    gbpClass = 'converter__item-price green'
  } else {
    gbpClass = 'converter__item-price red'
  }

  return (
    <div className="converter__inner">
      <div className="converter__item">
        <div className="converter__item-name">usd</div>
        <div className={usdClass} id="usd">
          {usd}
        </div>
      </div>
      <div className="converter__item">
        <div className="converter__item-name">eur</div>
        <div className={eurClass} id="eur">
          {eur}
        </div>
      </div>
      <div className="converter__item">
        <div className="converter__item-name">gbp</div>
        <div className={gbpClass} id="gbp">
          {gbp}
        </div>
      </div>
    </div>
  )
}

export default Display
