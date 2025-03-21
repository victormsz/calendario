// Testes positivos
const { createTask } = require('./createtask');


// Testa se a data inserida retorna válida com uma data válida
test('createTaskRightDate', () => {
    expect(createTask("", 25, 2, 2026, 13, 30)).toBe(true);
});

// Testa se a data inserida retorna válida com uma data válida, porém com hora e minuto iguais a 0
test('createTaskRightDateBut00', () => {
    expect(createTask("", 25, 2, 2026, 0, 0)).toBe(true);
});

// Testa se a data inserida retorna válida com uma data válida, com uma descrição qualquer
test('createTaskWithDescription', () => {
    expect(createTask("asdasd", 25, 2, 2026, 0, 0)).toBe(true);
});

// Testa se a data inserida retorna válida com uma data válida, sem descrição
test('createTaskNoDescription', () => {
    expect(createTask(25, 2, 2026, 0, 0)).toBe(true);
});

// Testa se a data inserida retorna válida sem um horário definido
test('createTaskNoTime', () => {
    expect(createTask(25, 2, 2026)).toBe(true);
});

// _________________________________________________________________________________________________________________
// TESTES NEGATIVOS

// Testa se a data inserida retorna INVÁLIDA com uma data inválida (data passada)
test('createWrongDate', () => {
    expect(createTask("", 25, 2, 2022, 13, 30)).toBe(false);
});

// Testa se a data inserida retorna INVÁLIDA com uma data inválida (hora impossível)
test('createWrongHour', () => {
    expect(createTask("", 25, 2, 2022, 25, 30)).toBe(false);
});

// Testa se a data inserida retorna INVÁLIDA com uma data inválida (minuto impossível)
test('createWrongMinute', () => {
    expect(createTask("", 25, 2, 2022, 13, 80)).toBe(false);
});

// Testa se a data inserida retorna INVÁLIDA com uma data inválida (hora e minuto impossíveis)
test('createWrongHourAndMinute', () => {
    expect(createTask("", 25, 2, 2022, 25, 80)).toBe(false);
});
