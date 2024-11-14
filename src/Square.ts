import * as o1js from 'o1js';
import { Field, SmartContract, state, State, method } from 'o1js';

export class Square extends SmartContract {
  @state(Field) num = State<Field>();

  init() {
    super.init();
    this.num.set(Field(3));
  }

  @method async update(square: Field) {
    const currnetState = this.num.get();
    this.num.requireEquals(currnetState);
    square.assertEquals(currnetState.mul(currnetState));
    this.num.set(square);
  }
}
