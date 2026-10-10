import { expect } from 'chai'

import * as error from '../src/utils/error.js'
import * as financial from '../src/financial.js'

describe('Financial', () => {
  it('ACCRINT', () => {
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 1, 0, true)).to.approximately(
      183.88888888888889,
      1e-9,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 1, 0, true)).to.approximately(
      183.88888888888889,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 0, true)).to.approximately(
      183.88888888888889,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 4, 0, true)).to.approximately(
      183.88888888888889,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 1, 1, true)).to.approximately(
      183.58413132694938,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 1, true)).to.approximately(
      183.58413132694938,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 4, 1, true)).to.approximately(
      183.58413132694938,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 1, 2, true)).to.approximately(
      186.38888888888889,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 2, true)).to.approximately(
      186.38888888888889,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 4, 2, true)).to.approximately(
      186.38888888888889,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 1, 3, true)).to.approximately(
      183.83561643835617,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 3, true)).to.approximately(
      183.83561643835617,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 4, 3, true)).to.approximately(
      183.83561643835617,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 1, 4, true)).to.approximately(
      183.88888888888889,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 4, true)).to.approximately(
      183.88888888888889,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 4, 4, true)).to.approximately(
      183.88888888888889,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 1, 0, false)).to.approximately(
      183.88888888888889,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 0, false)).to.approximately(
      183.88888888888889,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 4, 0, false)).to.approximately(
      183.88888888888889,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 1, 1, false)).to.approximately(
      183.58413132694938,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 1, false)).to.approximately(
      183.58413132694938,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 4, 1, false)).to.approximately(
      183.58413132694938,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 1, 2, false)).to.approximately(
      186.38888888888889,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 2, false)).to.approximately(
      186.38888888888889,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 4, 2, false)).to.approximately(
      186.38888888888889,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 1, 3, false)).to.approximately(
      183.83561643835617,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 3, false)).to.approximately(
      183.83561643835617,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 4, 3, false)).to.approximately(
      183.83561643835617,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 1, 4, false)).to.approximately(
      183.88888888888889,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 4, false)).to.approximately(
      183.88888888888889,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 4, 4, false)).to.approximately(
      183.88888888888889,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 1, 0, true)).to.approximately(
      16.11111111111111,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 2, 0, true)).to.approximately(
      16.11111111111111,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 4, 0, true)).to.approximately(
      16.11111111111111,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 1, 1, true)).to.approximately(
      15.573770491803279,
      1e-9
    ) // TODO :1e-9);
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 2, 1, true)).to.approximately(
      15.573770491803279,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 4, 1, true)).to.approximately(
      15.573770491803279,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 1, 2, true)).to.approximately(
      15.833333333333332,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 2, 2, true)).to.approximately(
      15.833333333333332,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 4, 2, true)).to.approximately(
      15.833333333333332,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 1, 3, true)).to.approximately(
      15.616438356164384,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 2, 3, true)).to.approximately(
      15.616438356164384,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 4, 3, true)).to.approximately(
      15.616438356164384,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 1, 4, true)).to.approximately(
      16.11111111111111,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 2, 4, true)).to.approximately(
      16.11111111111111,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 4, 4, true)).to.approximately(
      16.11111111111111,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 1, 0, false)).to.approximately(
      16.11111111111111,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 2, 0, false)).to.approximately(
      16.11111111111111,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 4, 0, false)).to.approximately(
      16.11111111111111,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 1, 1, false)).to.approximately(
      15.573770491803279,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 2, 1, false)).to.approximately(
      15.573770491803279,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 4, 1, false)).to.approximately(
      15.573770491803279,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 1, 2, false)).to.approximately(
      15.833333333333332,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 2, 2, false)).to.approximately(
      15.833333333333332,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 4, 2, false)).to.approximately(
      15.833333333333332,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 1, 3, false)).to.approximately(
      15.616438356164384,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 2, 3, false)).to.approximately(
      15.616438356164384,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 4, 3, false)).to.approximately(
      15.616438356164384,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 1, 4, false)).to.approximately(
      16.11111111111111,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 2, 4, false)).to.approximately(
      16.11111111111111,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 4, 4, false)).to.approximately(
      16.11111111111111,
      1e-9
    )
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '2/1/2012', 0.1, 1000, 4, 4, false)).to.equal(error.num)
    expect(financial.ACCRINT('Hello World!', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 0)).to.equal(error.value)
    expect(financial.ACCRINT('2/2/2012', 'Hello World!', '12/4/2013', 0.1, 1000, 2, 0)).to.equal(error.value)
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', 'Hello World!', 0.1, 1000, 2, 0)).to.equal(error.value)
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0, 1000, 2, 0)).to.equal(error.num)
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', -0.1, 1000, 2, 0)).to.equal(error.num)
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 0, 2, 0)).to.equal(error.num)
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, -1000, 2, 0)).to.equal(error.num)
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 3, 0)).to.equal(error.num)
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 5)).to.equal(error.num)
  })

  it('COUPDAYS', () => {
    expect(financial.COUPDAYS('01/25/2011', '11/15/2011', 2, 1)).to.equal(181)
    expect(financial.COUPDAYS('01/25/2011', '11/15/2011', '2', 1)).to.equal(181)
    expect(financial.COUPDAYS('01/25/2011', '11/15/2011', 2, '1')).to.equal(181)
    expect(financial.COUPDAYS('01/25/2011', '11/15/2011', '2', '1')).to.equal(181)
    expect(financial.COUPDAYS('01/32/2011', '11/15/2011', 2, 1)).to.equal(error.value)
    expect(financial.COUPDAYS('01/25/2011', '11/33/2011', 2, 1)).to.equal(error.value)
    expect(financial.COUPDAYS('01/32/2011', '11/33/2011', 2, 1)).to.equal(error.value)
    expect(financial.COUPDAYS('01/25/2011', '11/15/2011', 0, 1)).to.equal(error.num)
    expect(financial.COUPDAYS('01/25/2011', '11/15/2011', 1, 1)).to.equal(365)
    expect(financial.COUPDAYS('01/25/2011', '11/15/2011', 3, 1)).to.equal(error.num)
    expect(financial.COUPDAYS('01/25/2011', '11/15/2011', 4, 1)).to.equal(92)
    expect(financial.COUPDAYS('01/25/2011', '11/15/2011', 5, 1)).to.equal(error.num)
    expect(financial.COUPDAYS('01/25/2011', '11/15/2011', 2, -1)).to.equal(error.num)
    expect(financial.COUPDAYS('01/25/2011', '11/15/2011', 2, 0)).to.equal(180)
    expect(financial.COUPDAYS('01/25/2011', '11/15/2011', 2, 2)).to.equal(180)
    expect(financial.COUPDAYS('01/25/2011', '11/15/2011', 2, 3)).to.equal(182.5)
    expect(financial.COUPDAYS('01/25/2011', '11/15/2011', 2, 4)).to.equal(180)
    expect(financial.COUPDAYS('01/25/2011', '11/15/2011', 2, 5)).to.equal(error.num)
    expect(financial.COUPDAYS('12/25/2011', '11/15/2011', 2, 5)).to.equal(error.num)
  })

  it('CUMIPMT', () => {
    expect(financial.CUMIPMT(0.1 / 12, 30 * 12, 100000, 13, 24, 0)).to.approximately(-9916.77251395708, 1e-9)
    expect(financial.CUMIPMT(0.1 / 12, 30 * 12, 100000, 13, 24, 1)).to.approximately(-9834.815716321069, 1e-9)
    expect(financial.CUMIPMT(-0.1 / 12, 30 * 12, 100000, 13, 24, 0)).to.equal(error.num)
    expect(financial.CUMIPMT(0.1 / 12, -30 * 12, 100000, 13, 24, 0)).to.equal(error.num)
    expect(financial.CUMIPMT(0.1 / 12, 30 * 12, -100000, 13, 24, 0)).to.equal(error.num)
    expect(financial.CUMIPMT(0.1 / 12, 30 * 12, 100000, 0, 24, 0)).to.equal(error.num)
    expect(financial.CUMIPMT(0.1 / 12, 30 * 12, 100000, 13, 0, 0)).to.equal(error.num)
    expect(financial.CUMIPMT(0.1 / 12, 30 * 12, 100000, 24, 13, 0)).to.equal(error.num)
    expect(financial.CUMIPMT(0.1 / 12, 30 * 12, 100000, 13, 24, 2)).to.equal(error.num)
    expect(financial.CUMIPMT(0.1 / 12, 30 * 12, 100000, 1, 24, 0)).to.approximately(-19891.752778759568, 1e-9)
    expect(financial.CUMIPMT('invalid', 30 * 12, 100000, 13, 24, 0)).to.equal(error.value)
    expect(financial.CUMIPMT(0.005333, 120, 737.17, 1, 120, 0)).to.approximately(-262.766924283291, 1e-9)
    expect(financial.CUMIPMT(0.005333, 120, 737.17, 1, 120, 1)).to.approximately(-257.462548900007, 1e-9)
  })

  it('CUMPRINC', () => {
    expect(financial.CUMPRINC(0.1 / 12, 30 * 12, 100000, 13, 24, 0)).to.approximately(-614.0863271085149, 1e-9)
    expect(financial.CUMPRINC(0.1 / 12, 30 * 12, 100000, 13, 24, 1)).to.approximately(-609.0112334960476, 1e-9)
    expect(financial.CUMPRINC(-0.1 / 12, 30 * 12, 100000, 13, 24, 0)).to.equal(error.num)
    expect(financial.CUMPRINC(0.1 / 12, -30 * 12, 100000, 13, 24, 0)).to.equal(error.num)
    expect(financial.CUMPRINC(0.1 / 12, 30 * 12, -100000, 13, 24, 0)).to.equal(error.num)
    expect(financial.CUMPRINC(0.1 / 12, 30 * 12, 100000, 0, 24, 0)).to.equal(error.num)
    expect(financial.CUMPRINC(0.1 / 12, 30 * 12, 100000, 13, 0, 0)).to.equal(error.num)
    expect(financial.CUMPRINC(0.1 / 12, 30 * 12, 100000, 24, 13, 0)).to.equal(error.num)
    expect(financial.CUMPRINC(0.1 / 12, 30 * 12, 100000, 13, 24, 2)).to.equal(error.num)
    expect(financial.CUMPRINC(0.1 / 12, 30 * 12, 100000, 1, 24, 0)).to.approximately(-1169.9649033716187, 1e-9)
    expect(financial.CUMPRINC(0.1 / 12, 30 * 12, 100000, 1, 24, 1)).to.approximately(-1986.7420529305305, 1e-9)
    expect(financial.CUMPRINC('invalid', 30 * 12, 100000, 1, 24, 1)).to.equal(error.value)
  })

  it('DB', () => {
    expect(financial.DB(1000000, 100000, 6, 1)).to.equal(319000)
    expect(financial.DB(1000000, 100000, 6, 2)).to.equal(217239)
    expect(financial.DB(1000000, 100000, 6, 3)).to.approximately(147939.759, 1e-9)
    expect(financial.DB(1000000, 100000, 6, 4)).to.approximately(100746.97587900002, 1e-9)
    expect(financial.DB(1000000, 100000, 6, 5)).to.approximately(68608.690573599, 1e-9)
    expect(financial.DB(1000000, 100000, 6, 6)).to.approximately(46722.518280620934, 1e-9)
    expect(financial.DB(1000000, 100000, 6, 1, 6)).to.equal(159500)
    expect(financial.DB(1000000, 100000, 6, 2, 6)).to.approximately(268119.5, 1e-9)
    expect(financial.DB(1000000, 100000, 6, 3, 6)).to.approximately(182589.3795, 1e-9)
    expect(financial.DB(1000000, 100000, 6, 4, 6)).to.approximately(124343.36743949998, 1e-9)
    expect(financial.DB(1000000, 100000, 6, 5, 6)).to.approximately(84677.83322629951, 1e-9)
    expect(financial.DB(1000000, 100000, 6, 6, 6)).to.approximately(57665.60442710997, 1e-9)
    expect(financial.DB(1000000, 100000, 6, 1, 9)).to.equal(239250)
    expect(financial.DB(1000000, 100000, 6, 2, 9)).to.approximately(242679.25, 1e-9)
    expect(financial.DB(1000000, 100000, 6, 3, 9)).to.approximately(165264.56925, 1e-9)
    expect(financial.DB(1000000, 100000, 6, 4, 9)).to.approximately(112545.17165925002, 1e-9)
    expect(financial.DB(1000000, 100000, 6, 5, 9)).to.approximately(76643.26189994926, 1e-9)
    expect(financial.DB(1000000, 100000, 6, 6, 9)).to.approximately(52194.061353865436, 1e-9)
    expect(financial.DB('Hello World!', 100000, 6, 1, 6)).to.equal(error.value)
    expect(financial.DB(1000000, 'Hello World!', 6, 1, 6)).to.equal(error.value)
    expect(financial.DB(1000000, 100000, 'Hello World!', 1, 6)).to.equal(error.value)
    expect(financial.DB(1000000, 100000, 6, 'Hello World!', 6)).to.equal(error.value)
    expect(financial.DB(1000000, 100000, 6, 1, 'Hello World!')).to.equal(error.value)
    expect(financial.DB(-1000000, 100000, 6, 1, 6)).to.equal(error.num)
    expect(financial.DB(1000000, -100000, 6, 1, 6)).to.equal(error.num)
    expect(financial.DB(1000000, 100000, -6, 1, 6)).to.equal(error.num)
    expect(financial.DB(1000000, 100000, 6, -1, 6)).to.equal(error.num)
    expect(financial.DB(1000000, 100000, 6, 1, -1)).to.equal(error.num)
    expect(financial.DB(1000000, 100000, 6, 1, 13)).to.equal(error.num)
    expect(financial.DB(1000000, 100000, 6, 7, 6)).to.equal(error.num)
    expect(financial.DB(1000000, 1000000, 6, 1, 6)).to.equal(0)
    expect(financial.DB(100000, 1000000, 6, 1, 6)).to.equal(0)
  })

  it('DDB', () => {
    expect(financial.DDB(1000000, 100000, 6, 1)).to.approximately(333333.3333333333, 1e-9)
    expect(financial.DDB(1000000, 100000, 6, 2)).to.approximately(222222.22222222225, 1e-9)
    expect(financial.DDB(1000000, 100000, 6, 3)).to.approximately(148148.14814814815, 1e-9)
    expect(financial.DDB(1000000, 100000, 6, 4)).to.approximately(98765.43209876546, 1e-9)
    expect(financial.DDB(1000000, 100000, 6, 5)).to.approximately(65843.62139917696, 1e-9)
    expect(financial.DDB(1000000, 100000, 6, 6)).to.approximately(31687.242798353895, 1e-9)
    expect(financial.DDB(1000000, 100000, 6, 1, 1.5)).to.equal(250000)
    expect(financial.DDB(1000000, 100000, 6, 2, 1.5)).to.equal(187500)
    expect(financial.DDB(1000000, 100000, 6, 3, 1.5)).to.equal(140625)
    expect(financial.DDB(1000000, 100000, 6, 4, 1.5)).to.approximately(105468.75, 1e-9)
    expect(financial.DDB(1000000, 100000, 6, 5, 1.5)).to.approximately(79101.5625, 1e-9)
    expect(financial.DDB(1000000, 100000, 6, 6, 1.5)).to.approximately(59326.171875, 1e-9)
    expect(financial.DDB('Hello World!', 100000, 6, 6, 1.5)).to.equal(error.value)
    expect(financial.DDB(1000000, 'Hello World!', 6, 6, 1.5)).to.equal(error.value)
    expect(financial.DDB(1000000, 100000, 'Hello World!', 6, 1.5)).to.equal(error.value)
    expect(financial.DDB(1000000, 100000, 6, 'Hello World!', 1.5)).to.equal(error.value)
    expect(financial.DDB(1000000, 100000, 6, 6, 'Hello World!')).to.equal(error.value)
    expect(financial.DDB(-1000000, 100000, 6, 1, 1.5)).to.equal(error.num)
    expect(financial.DDB(1000000, -100000, 6, 1, 1.5)).to.equal(error.num)
    expect(financial.DDB(1000000, 100000, -6, 1, 1.5)).to.equal(error.num)
    expect(financial.DDB(1000000, 100000, 6, -1, 1.5)).to.equal(error.num)
    expect(financial.DDB(1000000, 100000, 6, 1, -1.5)).to.equal(error.num)
    expect(financial.DDB(1000000, 100000, 6, 1, 0)).to.equal(error.num)
    expect(financial.DDB(1000000, 100000, 6, 7, 1.5)).to.equal(error.num)
    expect(financial.DDB(1000000, 1000000, 6, 1, 1.5)).to.equal(0)
    expect(financial.DDB(100000, 1000000, 6, 1, 1.5)).to.equal(0)
  })

  describe('DISC', () => {
    it('should calculate the discount rate for a security', () => {
      expect(financial.DISC('01/04/2023', '01/31/2023', 99.71275, 100, 0)).to.approximately(0.0383, 1e-11)
      expect(financial.DISC('01/04/2023', '01/31/2023', 99.71275, 100, 1)).to.approximately(0.03883194444, 1e-11)
      expect(financial.DISC('01/04/2023', '01/31/2023', 99.71275, 100, 2)).to.approximately(0.0383, 1e-11)
      expect(financial.DISC('01/04/2023', '01/31/2023', 99.71275, 100, 3)).to.approximately(0.03883194444, 1e-11)
      expect(financial.DISC('01/04/2023', '01/31/2023', 99.71275, 100, 4)).to.approximately(0.03977307692, 1e-11)
      expect(financial.DISC('01/04/2023', '12/28/2023', 95.6145, 100, 0)).to.approximately(0.04459830508, 1e-11)
      expect(financial.DISC('01/04/2023', '12/28/2023', 95.6145, 100, 1)).to.approximately(0.0447125, 1e-11)
      expect(financial.DISC('01/04/2023', '12/28/2023', 95.6145, 100, 2)).to.approximately(0.0441, 1e-11)
      expect(financial.DISC('01/04/2023', '12/28/2023', 95.6145, 100, 3)).to.approximately(0.0447125, 1e-11)
      expect(financial.DISC('01/04/2023', '12/28/2023', 95.6145, 100, 4)).to.approximately(0.04459830508, 1e-11)
    })

    it('should throw an error if input is out-of-bounds', () => {
      expect(financial.DISC('01/04/2023', '01/31/2023', -1, 100, 1)).to.equal(error.num)
      expect(financial.DISC('01/04/2023', '01/31/2023', 99.71275, -1, 1)).to.equal(error.num)
      expect(financial.DISC('01/04/2023', '01/31/2023', 99.71275, 100, -1)).to.equal(error.num)
      expect(financial.DISC('01/04/2023', '01/31/2023', 99.71275, 100, 5)).to.equal(error.num)
    })

    it('should throw an error if input is of unsupported type/format', () => {
      expect(financial.DISC('Hello World!', '01/31/2023', 99.71275, 100, 1)).to.equal(error.value)
      expect(financial.DISC('01/04/2023', 'Hello World!', 99.71275, 100, 1)).to.equal(error.value)
      expect(financial.DISC('01/04/2023', '01/31/2023', 'Hello World!', 100, 1)).to.equal(error.value)
      expect(financial.DISC('01/04/2023', '01/31/2023', 99.71275, 'Hello World!', 1)).to.equal(error.value)
      expect(financial.DISC('01/04/2023', '01/31/2023', 99.71275, 100, 'Hello World!')).to.equal(error.value)
    })

    it('should throw an error if maturity is earlier than settlement', () => {
      expect(financial.DISC('01/04/2023', '01/03/2023', 99.71275, 100, 1)).to.equal(error.value)
    })
  })

  it('DOLLARDE', () => {
    expect(financial.DOLLARDE(1.1, 1)).to.approximately(1.1, 1e-9)
    expect(financial.DOLLARDE(1.1, 2)).to.approximately(1.5, 1e-9)
    expect(financial.DOLLARDE(1.1, 4)).to.approximately(1.25, 1e-9)
    expect(financial.DOLLARDE(1.1, 8)).to.approximately(1.125, 1e-9)
    expect(financial.DOLLARDE(1.1, 16)).to.approximately(1.625, 1e-9)
    expect(financial.DOLLARDE(1.1, 32)).to.approximately(1.3125, 1e-9)
    expect(financial.DOLLARDE(-1.1, 1)).to.approximately(-1.1, 1e-9)
    expect(financial.DOLLARDE(-1.1, 2)).to.approximately(-1.5, 1e-9)
    expect(financial.DOLLARDE(-1.1, 4)).to.approximately(-1.25, 1e-9)
    expect(financial.DOLLARDE(-1.1, 8)).to.approximately(-1.125, 1e-9)
    expect(financial.DOLLARDE(-1.1, 16)).to.approximately(-1.625, 1e-9)
    expect(financial.DOLLARDE(-1.1, 32)).to.approximately(-1.3125, 1e-9)
    expect(financial.DOLLARDE(1.1, 1.5)).to.approximately(1.1, 1e-9)
    expect(financial.DOLLARDE('Hello World!', 1)).to.equal(error.value)
    expect(financial.DOLLARDE(1.1, 'Hello World!')).to.equal(error.value)
    expect(financial.DOLLARDE(1.1, -1)).to.equal(error.num)
    expect(financial.DOLLARDE(1.1, 0.5)).to.equal(error.div0)
  })

  it('DOLLARFR', () => {
    expect(financial.DOLLARFR(1.1, 1)).to.approximately(1.1, 1e-9)
    expect(financial.DOLLARFR(1.5, 2)).to.approximately(1.1, 1e-9)
    expect(financial.DOLLARFR(1.25, 4)).to.approximately(1.1, 1e-9)
    expect(financial.DOLLARFR(1.125, 8)).to.approximately(1.1, 1e-9)
    expect(financial.DOLLARFR(1.625, 16)).to.approximately(1.1, 1e-9)
    expect(financial.DOLLARFR(1.3125, 32)).to.approximately(1.1, 1e-9)
    expect(financial.DOLLARFR(-1.1, 1)).to.approximately(-1.1, 1e-9)
    expect(financial.DOLLARFR(-1.5, 2)).to.approximately(-1.1, 1e-9)
    expect(financial.DOLLARFR(-1.25, 4)).to.approximately(-1.1, 1e-9)
    expect(financial.DOLLARFR(-1.125, 8)).to.approximately(-1.1, 1e-9)
    expect(financial.DOLLARFR(-1.625, 16)).to.approximately(-1.1, 1e-9)
    expect(financial.DOLLARFR(-1.3125, 32)).to.approximately(-1.1, 1e-9)
    expect(financial.DOLLARFR(-1.1, 1.5)).to.approximately(-1.1, 1e-9)
    expect(financial.DOLLARFR('Hello World!', 1)).to.equal(error.value)
    expect(financial.DOLLARFR(1.5, 'Hello World!')).to.equal(error.value)
    expect(financial.DOLLARFR(1.5, -1)).to.equal(error.num)
    expect(financial.DOLLARFR(1.5, 0.5)).to.equal(error.div0)
  })

  it('EFFECT', () => {
    expect(financial.EFFECT(0.1, 4)).to.approximately(0.10381289062499977, 1e-9)
    expect(financial.EFFECT(0.1, 4.5)).to.approximately(0.10381289062499977, 1e-9)
    expect(financial.EFFECT('Hello', 4)).to.equal(error.value)
    expect(financial.EFFECT(0.1, 'World')).to.equal(error.value)
    expect(financial.EFFECT(-0.1, 4)).to.equal(error.num)
    expect(financial.EFFECT(0.1, 0.5)).to.equal(error.num)
  })

  it('FV', () => {
    expect(financial.FV(0.06 / 12, 10, -200, -500, 1)).to.approximately(2581.4033740601185, 1e-9)
    expect(financial.FV(0.12 / 12, 12, -1000)).to.approximately(12682.503013196976, 1e-9)
    expect(financial.FV(0.11 / 12, 35, -2000, undefined, 1)).to.approximately(82846.24637190053, 1e-9)
    expect(financial.FV(0.06 / 12, 12, -100, -1000, 1)).to.approximately(2301.4018303408993, 1e-9)
    expect(financial.FV(0, 12, -100, -1000, 1)).to.equal(2200)
    expect(financial.FV('invalid', 12, -100, -1000, 1)).to.equal(error.value)
  })

  it('FVSCHEDULE', () => {
    expect(financial.FVSCHEDULE(100, [0.09, 0.1, 0.11])).to.approximately(133.08900000000003, 1e-9)
    expect(financial.FVSCHEDULE(100, ['Hello World!', 0.1, 0.11])).to.equal(error.value)
  })

  it('IPMT', () => {
    expect(financial.IPMT(0.1 / 12, 6, 2 * 12, 100000, 1000000, 0)).to.approximately(928.8235718400465, 1e-9)
    expect(financial.IPMT(0.1 / 12, 6, 2 * 12, 100000, 1000000, 1)).to.approximately(921.1473439736042, 1e-9)
    expect(financial.IPMT(0.1 / 12, 1, 2 * 12, 100000, 1000000, 1)).to.equal(0)
    expect(financial.IPMT(0.1 / 12, 1, 2 * 12, 100000, 1000000, 0)).to.approximately(-833.3333333333334, 1e-9)
    expect(financial.IPMT('invalid', 1, 2 * 12, 100000, 1000000, 1)).to.equal(error.value)
  })
  describe('IRR', () => {
    it('IRR', () => {
      expect(financial.IRR([-75000, 12000, 15000, 18000, 21000, 24000])).to.approximately(0.05715142887178467, 1e-9)
      expect(
        financial.IRR([
          [-75000, 12000],
          [15000, 18000],
          [21000, 24000]
        ])
      ).to.approximately(0.05715142887178467, 1e-9)
      expect(financial.IRR([-75000, 12000, 15000, 18000, 21000, 24000], 0.1)).to.approximately(
        0.05715142887178467,
        1e-9
      )
      expect(financial.IRR([-75000, 12000, 15000, 18000, 21000, 24000], 0.075)).to.approximately(
        0.05715142887178447,
        1e-9
      )
      expect(financial.IRR([-75000, 12000, 15000, 18000, 21000, 24000], 0.05)).to.approximately(
        0.05715142887178453,
        1e-9
      )
      expect(financial.IRR([12000, 15000, 18000, 21000, 24000])).to.equal(error.num)
      expect(financial.IRR([-12000, -15000, -18000, -21000, -24000])).to.equal(error.num)
      expect(financial.IRR([-12000, -15000, -18000, -21000, -24000], 'invalid')).to.equal(error.value)
      expect(
        financial.IRR([-9765000, -24338874, -3354506, 814300, 1595562, 1975118, 1688159, 391944])
      ).to.approximately(-0.33923419058193316, 1e-9)
    })

    it('should escape undefined value', () => {
      expect(financial.IRR([-4500, 3045, 2371])).to.approximately(0.13918184162670671, 1e-9)
      expect(financial.IRR([-4500, null, 3045, null, 2371])).to.approximately(0.13918184162670671, 1e-9)
      expect(financial.IRR([[-4500], [null], [3045], [null], [2371]])).to.approximately(0.13918184162670671, 1e-9)
    })
  })

  it('ISPMT', () => {
    expect(financial.ISPMT(0.1 / 12, 6, 2 * 12, 100000)).to.equal(-625)
    expect(financial.ISPMT('invalid', 6, 2 * 12, 100000)).to.equal(error.value)
  })

  it('MIRR', () => {
    expect(financial.MIRR([-75000, 12000, 15000, 18000, 21000, 24000], 0.1, 0.12)).to.approximately(
      0.07971710360838036,
      1e-9
    )
    expect(financial.MIRR([-75000, 12000, 15000, 18000, 21000, 24000], 'invalid', 0.12)).to.equal(error.value)
  })

  describe('MIRR cash-flow timing', () => {
    const cases = [
      ['alternating signs', [-100, 50, -50, 121], 0.1, 0.1, 0.08698102563625021],
      ['consecutive outflows', [-100, -50, 50, 121], 0.1, 0.1, 0.06560223676661071],
      ['an initial inflow', [50, -100, 121], 0.1, 0.1, 0.4129755836531642],
      ['a zero income gap', [-100, 50, 0, 121], 0.1, 0.1, 0.21981005732342698],
      ['a leading zero', [0, -100, 121], 0.1, 0.1, 0.1536897329871667],
      ['a trailing zero', [-100, 121, 0], 0.1, 0.1, 0.1536897329871667],
      ['different rates', [-100, 50, -60, 70], 0.1, 0.12, -0.03909366594356469],
      ['zero rates', [-100, 50, -50, 121], 0, 0, 0.044643926822318686],
      ['the existing example', [-75000, 12000, 15000, 18000, 21000, 24000], 0.1, 0.12, 0.07971710360838027],
      ['the five-year example', [-120000, 39000, 30000, 21000, 37000, 46000], 0.1, 0.12, 0.12609413036590514],
      ['the three-year example', [-120000, 39000, 30000, 21000], 0.1, 0.12, -0.04804465524998082],
      ['negative rates above -1', [-100, 50, -50, 121], -0.1, -0.2, -0.0183235226485747],
      ['two endpoint flows', [-100, 110], 0.1, 0.2, 0.1]
    ]

    for (const [name, values, financeRate, reinvestRate, expected] of cases) {
      it(`preserves periods for ${name}`, () => {
        expect(financial.MIRR(values, financeRate, reinvestRate)).to.approximately(expected, 1e-12)
      })
    }

    for (const [name, length, financeRate, reinvestRate] of [
      ['discount-factor underflow', 1076, -0.5, 0],
      ['reinvestment-factor overflow', 1025, 0, 1],
      ['reinvestment-factor underflow', 1076, 0, -0.5]
    ]) {
      it(`does not value zero flows through ${name}`, () => {
        const values = Array(length).fill(0)
        values[0] = -1
        values[length - 1] = 1

        expect(financial.MIRR(values, financeRate, reinvestRate)).to.equal(0)
      })
    }

    it('accumulates subnormal receipts before compounding them', () => {
      const minimum = Number.MIN_VALUE

      expect(financial.MIRR([-minimum, 2 * minimum, minimum, 0], 0, -0.5)).to.equal(0)
    })

    it('values subnormal receipts without rounding away their periods', () => {
      const minimum = Number.MIN_VALUE
      const expected = -0.09143970358393017

      expect(financial.MIRR([-minimum, minimum, minimum, 0], 0, -0.5)).to.approximately(expected, 1e-12)
      expect(financial.MIRR([-1, 1, 1, 0], 0, -0.5)).to.approximately(expected, 1e-12)
    })

    it('discounts a nonzero late payment when its discount factor underflows', () => {
      const values = Array(1077).fill(0)
      values[0] = -1
      values[1075] = -Number.MIN_VALUE
      values[1076] = 1

      expect(financial.MIRR(values, -0.5, 0)).to.approximately(-0.0010204940795625335, 1e-12)
    })

    it('retains a payment when its discount factor overflows', () => {
      const values = Array(1026).fill(0)
      values[0] = -1
      values[1024] = -(2 ** 1023)
      values[1025] = 1

      expect(financial.MIRR(values, 1, 0)).to.approximately(-0.00039549748546984274, 1e-12)
    })

    it('does not treat rounded subnormal totals as an exact zero return', () => {
      const minimum = Number.MIN_VALUE

      expect(financial.MIRR([-minimum, minimum, 0], 0, -0.25)).to.approximately(-0.13397459621556135, 1e-12)
    })

    it('retains a small positive return for subnormal cash flows', () => {
      const minimum = Number.MIN_VALUE
      const rate = 2 ** -40
      const expected = rate / (Math.sqrt(1 + rate) + 1)
      const actual = financial.MIRR([-minimum, minimum, 0], 0, rate)

      expect(actual).to.be.greaterThan(0)
      expect(actual).to.approximately(expected, expected * 1e-12)
    })

    it('retains a small positive return after a tiny initial receipt', () => {
      const difference = 2 ** -44
      const expected = difference / (Math.sqrt(1 + difference) + 1)
      const actual = financial.MIRR([Number.MIN_VALUE, -1, 1 + difference], 0, 0)

      expect(actual).to.be.greaterThan(0)
      expect(actual).to.approximately(expected, expected * 1e-12)
    })

    it('values cash flows when one or both signed totals overflow', () => {
      const large = 2 ** 1023

      expect(financial.MIRR([-large, large, large], 0, 0)).to.approximately(0.41421356237309503, 1e-12)
      expect(financial.MIRR([-large, -large, large, large], 0, 0)).to.equal(0)
    })

    it('returns a finite rate when the final value ratio overflows', () => {
      const expected = 6.355805030768232e307
      const actual = financial.MIRR([-(2 ** -1022), 0, 2 ** 1023], 0, 0)

      expect(Number.isFinite(actual)).to.equal(true)
      expect(actual).to.approximately(expected, expected * 1e-12)
    })

    it('values a small return ratio without underflowing it to zero', () => {
      const values = Array(2046).fill(0)
      values[0] = -(2 ** 1023)
      values[2045] = 2 ** -1022

      expect(financial.MIRR(values, 0, 0)).to.approximately(-0.5, 1e-12)
    })

    it('retains a tiny late payment alongside a large receipt', () => {
      const values = Array(1077).fill(0)
      values[0] = -1
      values[1075] = -Number.MIN_VALUE
      values[1076] = 2 ** 1023

      expect(financial.MIRR(values, -0.5, 0)).to.approximately(0.9308960261945843, 1e-12)
    })

    it('recovers a receipt balance that overflows before a later period', () => {
      const large = 2 ** 1023

      expect(financial.MIRR([-large, Number.MAX_VALUE, Number.MAX_VALUE, 0], 0, -0.5)).to.approximately(
        0.14471424255333182,
        1e-12
      )
    })

    it('parses nested arrays and numeric strings before valuing their periods', () => {
      expect(
        financial.MIRR(
          [
            [-100, 50],
            [-50, 121]
          ],
          0.1,
          0.1
        )
      ).to.approximately(0.08698102563625021, 1e-12)
      expect(financial.MIRR(['-100', '50', '-50', '121'], '0.1', '0.1')).to.approximately(0.08698102563625021, 1e-12)
    })

    it('retains zero periods produced by null, undefined and boolean inputs', () => {
      for (const value of [null, undefined, false]) {
        expect(financial.MIRR([value, -100, 121], 0.1, 0.1)).to.approximately(0.1536897329871667, 1e-12)
      }

      expect(financial.MIRR([true, -1], 0, 0)).to.equal(0)
    })

    it('retains existing input errors', () => {
      expect(financial.MIRR([-100, 110], 0.1, 'invalid')).to.equal(error.value)
      expect(financial.MIRR([-100, 'invalid', 110], 0.1, 0.1)).to.equal(error.value)
      expect(financial.MIRR([], 0.1, 0.1)).to.equal(error.value)
      expect(financial.MIRR([-100, error.num, 110], 0.1, 0.1)).to.equal(error.value)
    })

    it('retains existing results for cash flows without both signs', () => {
      expect(financial.MIRR([-100, -50], 0.1, 0.1)).to.equal(-1)
      expect(financial.MIRR([100, 50], 0.1, 0.1)).to.equal(-Infinity)
      expect(financial.MIRR([0, 0], 0.1, 0.1)).to.be.NaN
      expect(financial.MIRR([-100], 0.1, 0.1)).to.equal(-1)
      expect(financial.MIRR([100], 0.1, 0.1)).to.equal(Infinity)
    })

    it('retains existing results for singular and non-finite rates', () => {
      expect(financial.MIRR([-100, 110], -1, 0.1)).to.be.NaN
      expect(financial.MIRR([-100, 110], 0.1, -1)).to.be.NaN
      expect(financial.MIRR([-100, 50, -50, 121], -2, 0.1)).to.approximately(0.570284882107938, 1e-12)
      expect(financial.MIRR([-100, 110], Infinity, 0.1)).to.be.NaN
      expect(financial.MIRR([-100, 110], 0.1, Infinity)).to.be.NaN
    })

    it('retains existing results for non-finite parsed cash flows', () => {
      expect(financial.MIRR([-100, Infinity], 0.1, 0.1)).to.equal(Infinity)
      expect(financial.MIRR([-100, ' ', 110], 0.1, 0.1)).to.be.NaN
    })
  })

  it('NOMINAL', () => {
    expect(financial.NOMINAL(0.1, 4)).to.approximately(0.09645475633778045, 1e-9)
    expect(financial.NOMINAL(0.1, 4.5)).to.approximately(0.09645475633778045, 1e-9)
    expect(financial.NOMINAL('Hello', 4)).to.equal(error.value)
    expect(financial.NOMINAL(0.1, 'World')).to.equal(error.value)
    expect(financial.NOMINAL(-0.1, 4)).to.equal(error.num)
    expect(financial.NOMINAL(0.1, 0.5)).to.equal(error.num)
  })

  it('NPER', () => {
    expect(financial.NPER(0, -100, -1000, 10000)).to.equal(90)
    expect(financial.NPER(0.1 / 12, -100, -1000, 10000, 0)).to.approximately(63.39385422740764, 1e-9)
    expect(financial.NPER(0.1 / 12, -100, -1000, 10000, 1)).to.approximately(63.016966422019685, 1e-9)
    expect(financial.NPER(0.1 / 12, -100, -1000, 10000)).to.approximately(63.39385422740764, 1e-9)
    expect(financial.NPER(0.1 / 12, -100, -1000)).to.approximately(-9.645090919837394, 1e-9)
    expect(financial.NPER('invalid', -100, -1000)).to.equal(error.value)
  })

  it('NPV', () => {
    expect(financial.NPV(0.1, -10000, 2000, 4000, 8000)).to.approximately(1031.3503176012546, 1e-9)
    expect(financial.NPV(0.1, [-10000, 2000, 4000, 8000])).to.approximately(1031.3503176012546, 1e-9)
    expect(financial.NPV(0.1, [-75000])).to.approximately(-68181.81818181818, 1e-9)
    expect(financial.NPV(0.12, [12000, 15000, 18000, 21000, 24000])).to.approximately(62448.362521940246, 1e-9)
    expect(financial.NPV('invalid', [12000, 15000, 18000, 21000, 24000])).to.equal(error.value)
  })

  it('PDURATION', () => {
    expect(financial.PDURATION(0.1, 1000, 2000)).to.approximately(7.272540897341714, 1e-9)
    expect(financial.PDURATION('Hello World!', 1000, 2000)).to.equal(error.value)
    expect(financial.PDURATION(0.1, 'Hello World!', 2000)).to.equal(error.value)
    expect(financial.PDURATION(0.1, 1000, 'Hello World!')).to.equal(error.value)
    expect(financial.PDURATION(0, 1000, 2000)).to.equal(error.num)
    expect(financial.PDURATION(-0.1, 1000, 2000)).to.equal(error.num)
  })

  it('PMT', () => {
    expect(financial.PMT(0.06 / 12, 18 * 12, 0, 50000)).to.approximately(-129.0811608679973, 1e-9)
    expect(financial.PMT(0.1 / 12, 2 * 12, 100000, 1000000, 1)).to.approximately(-42075.45683100995, 1e-9)
    expect(financial.PMT(0.1 / 12, 2 * 12, 100000, 1000000)).to.approximately(-42426.08563793503, 1e-9)
    expect(financial.PMT(0.1 / 12, 2 * 12, 0, 1000000)).to.approximately(-37811.59300418336, 1e-9)
    expect(financial.PMT(0.1 / 12, 2 * 12, 100000)).to.approximately(-4614.49263375167, 1e-9)
    expect(financial.PMT(0, 2 * 12, 100000)).to.approximately(-4166.666666666667, 1e-9)
    expect(financial.PMT('invalid', 2 * 12, 100000)).to.equal(error.value)
  })

  it('PPMT', () => {
    expect(financial.PPMT(0.1 / 12, 1, 2 * 12, 2000)).to.approximately(-75.62318600836673, 10e-9)
    expect(financial.PPMT(0.08, 10, 10, 200000)).to.approximately(-27598.05346242135, 10e-9)
    expect(financial.PPMT(0.1 / 12, 6, 2 * 12, 100000, 1000000, 0)).to.approximately(-43354.909209775076, 1e-9)
    expect(financial.PPMT(0.1 / 12, 6, 2 * 12, 100000, 1000000, 1)).to.approximately(-42996.60417498356, 1e-9)
    expect(financial.PPMT(0.1 / 12, 6, 2 * 12, 100000, 1000000)).to.approximately(-43354.909209775076, 1e-9)
    expect(financial.PPMT(0.1 / 12, 6, 2 * 12, 0, 1000000)).to.approximately(-39413.55382706825, 1e-9)
    expect(financial.PPMT(0.1 / 12, 6, 2 * 12, 100000)).to.approximately(-3941.355382706826, 1e-9)
    expect(financial.PPMT('invalid', 6, 2 * 12, 100000)).to.equal(error.value)
  })

  describe('PRICEDISC', () => {
    it('should calculate the price of a discounted security', () => {
      expect(financial.PRICEDISC('01/05/2023', '01/31/2023', 0.038, 100, 0)).to.approximately(99.72555556, 1e-8)
      expect(financial.PRICEDISC('01/05/2023', '01/31/2023', 0.038, 100, 1)).to.approximately(99.72931507, 1e-8)
      expect(financial.PRICEDISC('01/05/2023', '01/31/2023', 0.038, 100, 2)).to.approximately(99.72555556, 1e-8)
      expect(financial.PRICEDISC('01/05/2023', '01/31/2023', 0.038, 100, 3)).to.approximately(99.72931507, 1e-8)
      expect(financial.PRICEDISC('01/05/2023', '01/31/2023', 0.038, 100, 4)).to.approximately(99.73611111, 1e-8)
      expect(financial.PRICEDISC('01/05/2023', '12/28/2023', 0.044, 100, 0)).to.approximately(95.68555556, 1e-8)
      expect(financial.PRICEDISC('01/05/2023', '12/28/2023', 0.044, 100, 1)).to.approximately(95.69643836, 1e-8)
      expect(financial.PRICEDISC('01/05/2023', '12/28/2023', 0.044, 100, 2)).to.approximately(95.63666667, 1e-8)
      expect(financial.PRICEDISC('01/05/2023', '12/28/2023', 0.044, 100, 3)).to.approximately(95.69643836, 1e-8)
      expect(financial.PRICEDISC('01/05/2023', '12/28/2023', 0.044, 100, 4)).to.approximately(95.68555556, 1e-8)
    })

    it('should throw an error if input is out-of-bounds', () => {
      expect(financial.PRICEDISC('01/05/2023', '01/31/2023', -1, 100, 1)).to.equal(error.num)
      expect(financial.PRICEDISC('01/05/2023', '01/31/2023', 0.038, -1, 1)).to.equal(error.num)
      expect(financial.PRICEDISC('01/05/2023', '01/31/2023', 0.038, 100, -1)).to.equal(error.num)
      expect(financial.PRICEDISC('01/05/2023', '01/31/2023', 0.038, 100, 5)).to.equal(error.num)
    })

    it('should throw an error if input is of unsupported type/format', () => {
      expect(financial.PRICEDISC('Hello World!', '01/31/2023', 0.038, 100, 1)).to.equal(error.value)
      expect(financial.PRICEDISC('01/05/2023', 'Hello World!', 0.038, 100, 1)).to.equal(error.value)
      expect(financial.PRICEDISC('01/05/2023', '01/31/2023', 'Hello World!', 100, 1)).to.equal(error.value)
      expect(financial.PRICEDISC('01/05/2023', '01/31/2023', 0.038, 'Hello World!', 1)).to.equal(error.value)
      expect(financial.PRICEDISC('01/05/2023', '01/31/2023', 0.038, 100, 'Hello World!')).to.equal(error.value)
    })

    it('should throw an error if maturity is earlier than settlement', () => {
      expect(financial.PRICEDISC('01/05/2023', '01/04/2023', 0.038, 100, 1)).to.equal(error.value)
    })
  })

  it('PV', () => {
    expect(financial.PV(0.1 / 12, 2 * 12, 1000, 10000, 0)).to.approximately(-29864.950264779152, 1e-9)
    expect(financial.PV(0.1 / 12, 2 * 12, 1000, 10000, 1)).to.approximately(-30045.54072173169, 1e-9)
    expect(financial.PV(0, 2 * 12, 1000, 10000, 1)).to.equal(-34000)
    expect(financial.PV('invalid', 2 * 12, 1000, 10000, 1)).to.equal(error.value)
  })

  it('RATE', () => {
    expect(financial.RATE(2 * 12, -1000, -10000, 100000)).to.approximately(0.06517891177181546, 1e-9)
    expect(financial.RATE(2 * 12, -1000, -10000, 100000, 0, 0.1)).to.approximately(0.06517891177181533, 1e-9)
    expect(financial.RATE(2 * 12, -1000, -10000, 100000, 0, 0.75)).to.approximately(0.0651789117718154, 1e-9)
    expect(financial.RATE(2 * 12, -1000, -10000, 100000, 0, 0.065)).to.approximately(0.06517891177181524, 1e-9)
    expect(financial.RATE(2 * 12, -1000, -10000, 100000, 1, 0.1)).to.approximately(0.0632395800018064, 1e-9)
    expect(financial.RATE('invalid', -1000, -10000, 100000, 1, 1e-11)).to.equal(error.value)
    expect(financial.RATE(4 * 12, -200, 8000)).to.approximately(0.007701472, 1e-9)
    expect(financial.RATE(37, -7200, -40000, 4477839, 0)).to.approximately(0.10646164, 1e-9)
    expect(financial.RATE(348, -(157119 / 12), 790000)).to.approximately(0.01651835816, 1e-9)
  })

  it('RRI', () => {
    expect(financial.RRI(8, 10000, 11000)).to.approximately(0.011985024140399592, 1e-9)
    expect(financial.RRI(NaN, 10000, 11000)).to.equal(error.value)
    expect(financial.RRI(0, 10000, 11000)).to.equal(error.num)
  })

  it('SLN', () => {
    expect(financial.SLN(30000, 7500, 10)).to.equal(2250)
    expect(financial.SLN(NaN, 7500, 10)).to.equal(error.value)
    expect(financial.SLN(30000, 7500, 0)).to.equal(error.num)
  })

  it('SYD', () => {
    expect(financial.SYD(30, 7, 10, 1)).to.approximately(4.181818181818182, 1e-9)
    expect(financial.SYD(NaN, 7, 10, 1)).to.equal(error.value)
    expect(financial.SYD(30, 7, 0, 1)).to.equal(error.num)
    expect(financial.SYD(30, 7, 10, 11)).to.equal(error.num)
  })

  it('TBILLEQ', () => {
    expect(financial.TBILLEQ('03/31/2008', '06/01/2008', 0.0914)).to.approximately(0.09412721351734614, 1e-9)
    expect(financial.TBILLEQ('invalid date', '06/01/2008', 0.0914)).to.equal(error.value)
    expect(financial.TBILLEQ('03/31/2008', '06/01/2008', 0)).to.equal(error.num)
    expect(financial.TBILLEQ('09/31/2008', '06/01/2008', 0.0914)).to.equal(error.num)
    expect(financial.TBILLEQ('03/31/2008', '06/01/2009', 0.0914)).to.equal(error.num)
  })

  it('TBILLPRICE', () => {
    expect(financial.TBILLPRICE('03/31/2008', '06/01/2008', 0.0914)).to.approximately(98.45127777777778, 1e-9)
    expect(financial.TBILLPRICE('invalid date', '06/01/2008', 0.0914)).to.equal(error.value)
    expect(financial.TBILLPRICE('03/31/2008', '06/01/2008', 0)).to.equal(error.num)
    expect(financial.TBILLPRICE('09/31/2008', '06/01/2008', 0.0914)).to.equal(error.num)
    expect(financial.TBILLPRICE('03/31/2008', '06/01/2009', 0.0914)).to.equal(error.num)
  })

  it('TBILLYIELD', () => {
    expect(financial.TBILLYIELD('03/31/2008', '06/01/2008', 98.45127777777778)).to.approximately(
      0.09283779963354702,
      1e-9
    )
    expect(financial.TBILLYIELD('invalid date', '06/01/2008', 0.0914)).to.equal(error.value)
    expect(financial.TBILLYIELD('03/31/2008', '06/01/2008', 0)).to.equal(error.num)
    expect(financial.TBILLYIELD('09/31/2008', '06/01/2008', 0.0914)).to.equal(error.num)
    expect(financial.TBILLYIELD('03/31/2008', '06/01/2009', 0.0914)).to.equal(error.num)
  })

  // TODO: support for all browsers
  it('XIRR', () => {
    const values = [-10000, 2750, 4250, 3250, 2750]
    const dates = ['01/jan/08', '01/mar/08', '30/oct/08', '15/feb/09', '01/apr/09']
    expect(financial.XIRR(values, dates, 0.1)).to.approximately(0.373362535, 1e-4)
    // all positive
    values[0] = -values[0]
    expect(financial.XIRR(values, dates, 0.1)).to.equal(error.num)
    expect(financial.XIRR(values, dates, 'invalid')).to.equal(error.value)
  })

  it('XNPV', () => {
    const values = [-10000, 2750, 4250, 3250, 2750]
    const dates = ['01/01/2008', '03/01/2008', '10/30/2008', '02/15/2009', '04/01/2009']
    expect(financial.XNPV(0.09, values, dates)).to.approximately(2086.6718943024616, 1e-1)
    expect(financial.XNPV('invalid', values, dates)).to.equal(error.value)
  })
})
