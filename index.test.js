import test from 'node:test';
const assert = require('assert');
const sum = require('sum.js');

// Prueba 1: Suma de dos números positivos
assert.strictEqual(sum(2, 3), 5);

// Prueba 2: Suma de un número positivo y uno negativo
assert.strictEqual(sum(-5, 10), 5);

// Prueba 3: Suma de dos números negativos
assert.strictEqual(sum(-2, -3), -5);

// Prueba 4: Suma de cero y un número positivo
assert.strictEqual(sum(0, 5), 5);

// Prueba 5: Suma de cero y un número negativo
assert.strictEqual(sum(0, -5), -5);

console.log('Todas las pruebas han pasado correctamente.');
