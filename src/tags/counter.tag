<counter>
  <h1>Count: {count}</h1>
  <button onclick={incrementCount}>Up</button>
  <button onclick={decrementCount}>Down</button>
  <button onclick={resetCount}>Reset</button>

  <script>
    this.count = opts.start
    this.incrementCount = () => this.count += opts.step
    this.decrementCount = () => this.count -= opts.step
    this.resetCount = () => this.count = opts.start
  </script>
</counter>
