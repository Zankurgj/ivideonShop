class CounterNumber {
  constructor() {
    this.btnCounterSelector = $(".js--btn-counter");
    this.counterSelector = $(".js--counter");
    this.minVal = this.counterSelector.attr("min") || 1;
    this.counterValue = this.counterSelector.val();
    this.setCounterValueHandler = this.setCounterValue.bind(this);
    this.setInputValueHandler = this.setInputValue.bind(this);
    this.initCounter();
  }
  initCounter() {
    if (this.counterSelector) {
      this.initCounterBtnListener();
      this.initSetInputValueListener();
    }
  }
  // BTN
  initCounterBtnListener() {
    this.btnCounterSelector.on("click", this.setCounterValueHandler);
  }
  setCounterValue(evt) {
    const btn = $(evt.currentTarget);
    const btnType = btn.data("counterType");
    if (btnType == "plus") {
      this.setPlus();
    } else {
      this.setMinus();
    }
    this.setVal();
  }
  setPlus() {
    this.counterValue = ++this.counterValue;
  }
  setMinus() {
    this.counterValue = --this.counterValue;
    if (+this.counterValue < +this.minVal) {
      this.counterValue = 0;
    }
  }
  setVal() {
    this.counterSelector.val(this.counterValue);
  }
  //INPUT
  initSetInputValueListener() {
    this.counterSelector.on("input", this.setInputValueHandler);
  }
  setInputValue(evt) {
    const input = $(evt.currentTarget);
    const currentVal = input.val();
    this.counterValue = currentVal;
    this.setVal();
  }
}
export default CounterNumber;
