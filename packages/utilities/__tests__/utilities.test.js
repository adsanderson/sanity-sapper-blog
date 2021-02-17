import { test } from 'uvu';
import * as assert from 'uvu/assert';

import { findPositionIndex } from '../lib/utilities';

test('Calc index position start', () => {
    const result = findPositionIndex(400, 0, 0);
    assert.equal(result, 0);
});

test('Calc index position scroll down', () => {
    const result = findPositionIndex(400, 0, 500);
    assert.equal(result, 1);
});

test('Calc index position scroll down', () => {
    const result = findPositionIndex(400, 0, 1300);
    assert.equal(result, 3);
});


test('Calc index position scroll down', () => {
    const result = findPositionIndex(400, 500, 400);
    assert.equal(result, 0);
});

test.run();